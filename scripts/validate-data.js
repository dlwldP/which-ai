// data/*.json 검사 (기획서 8장, 12장 스키마 / docs/decisions.md).
// 사용법: node scripts/validate-data.js [YYYY-MM-DD]   (날짜를 생략하면 오늘)
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { isValidDate, daysSince } from '../js/recommend.js';

export const PLATFORMS = ['web', 'ios', 'android', 'windows', 'mac'];
export const BILLING = ['monthly', 'yearly', 'unknown'];
export const POLICY = ['yes', 'no', 'unknown'];
export const LOGINS = ['google', 'apple', 'microsoft', 'kakao', 'naver', 'email', 'phone', 'none'];

export const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
export const isText = (v) => typeof v === 'string' && v.trim() !== '';
export const isHttpsUrl = (v) => {
  if (typeof v !== 'string') return false;
  try {
    return new URL(v).protocol === 'https:';
  } catch {
    return false;
  }
};

export function hostOf(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

/** host가 공식 도메인 목록 중 하나이거나 그 하위 도메인인지 (예: policy.naver.com ⊂ naver.com) */
export function isOfficialHost(host, domains) {
  return Boolean(host) && domains.some((d) => host === d || host.endsWith(`.${d}`));
}

/** idPattern: 비개발자용은 "P01", 개발자용은 "app_builders" 같은 카테고리 ID */
export function validatePurposes(purposes, idPattern = /^P\d{2}$/) {
  const errors = [];
  if (!Array.isArray(purposes)) return ['purposes.json: 배열이어야 합니다'];
  const seen = new Set();
  purposes.forEach((p, i) => {
    const at = `purposes[${i}]`;
    if (!isObject(p)) return errors.push(`${at}: 객체여야 합니다`);
    if (typeof p.id !== 'string' || !idPattern.test(p.id)) errors.push(`${at}.id: 형식이 틀렸습니다 (${idPattern})`);
    else if (seen.has(p.id)) errors.push(`${at}.id: 중복된 id "${p.id}"`);
    seen.add(p.id);
    if (!isText(p.icon)) errors.push(`${at}.icon: 비어 있습니다`);
    if (!isText(p.label)) errors.push(`${at}.label: 비어 있습니다`);
    if (!isText(p.examples)) errors.push(`${at}.examples: 비어 있습니다`);
    // 기능 체크리스트: 목적마다 4개. 툴은 이 중 지원하는 기능을 근거와 함께 적는다 (docs/decisions.md)
    if (!Array.isArray(p.features) || p.features.length !== FEATURES_PER_PURPOSE) {
      errors.push(`${at}.features: 기능 체크리스트가 정확히 ${FEATURES_PER_PURPOSE}개여야 합니다`);
    } else {
      const ids = new Set();
      p.features.forEach((f, j) => {
        if (!isObject(f) || typeof f.id !== 'string' || !/^[a-z][a-z0-9_]*$/.test(f.id)) errors.push(`${at}.features[${j}].id: 영문 소문자·숫자·밑줄만 씁니다`);
        else if (ids.has(f.id)) errors.push(`${at}.features[${j}].id: 중복된 id "${f.id}"`);
        else ids.add(f.id);
        if (!isText(f?.label) || !isText(f?.short)) errors.push(`${at}.features[${j}]: label과 short가 있어야 합니다`);
      });
    }
  });
  return errors;
}

export const FEATURES_PER_PURPOSE = 4;

/** 목적 ID → 그 목적의 기능 ID 집합. validateTool·validateDevTool에 넘긴다 (Map이라 .has(목적 ID)도 된다). */
export function featureMap(purposes) {
  return new Map((Array.isArray(purposes) ? purposes : [])
    .filter(isObject)
    .map((p) => [p.id, new Set(Array.isArray(p.features) ? p.features.map((f) => f?.id) : [])]));
}

/** 툴이 그 목적의 기능을 하나 이상 지원하는지 (= 그 목적의 추천 후보인지) */
export const supportsPurpose = (tool, pid) => Array.isArray(tool?.features?.[pid]) && tool.features[pid].length > 0;

/** tool.features 검사: { "P02": ["upload", "transcribe"] }. 지원하는 기능이 없는 목적은 적지 않는다. */
export function validateFeatures(tool, err, features, file) {
  if (!isObject(tool.features)) return err('features', '객체여야 합니다 (예: { "P02": ["transcribe"] })');
  const entries = Object.entries(tool.features);
  if (entries.length === 0) err('features', '지원하는 기능이 있는 목적이 하나는 있어야 합니다');
  for (const [pid, ids] of entries) {
    if (!features.has(pid)) { err(`features.${pid}`, `${file}에 없는 목적입니다`); continue; }
    if (!Array.isArray(ids) || ids.length === 0) { err(`features.${pid}`, '기능 ID 배열이어야 합니다 (지원 기능이 없으면 목적을 빼요)'); continue; }
    if (new Set(ids).size !== ids.length) err(`features.${pid}`, '중복된 기능이 있습니다');
    for (const id of ids) if (!features.get(pid).has(id)) err(`features.${pid}`, `"${id}"는 이 목적의 체크리스트에 없는 기능입니다`);
  }
}

export function validateTool(tool, at, features, today) {
  const errors = [];
  const err = (field, msg) => errors.push(`${at}.${field}: ${msg}`);
  if (!isObject(tool)) return [`${at}: 객체여야 합니다`];

  if (typeof tool.id !== 'string' || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(tool.id)) err('id', '영문 소문자·숫자·하이픈만 씁니다');
  for (const field of ['name', 'one_liner']) if (!isText(tool[field])) err(field, '비어 있습니다');
  if (!isHttpsUrl(tool.url)) err('url', 'https 주소여야 합니다');

  validateFeatures(tool, err, features, 'purposes.json');

  if (!isObject(tool.price)) err('price', '객체여야 합니다');
  else {
    if (typeof tool.price.free !== 'boolean') err('price.free', 'true 또는 false여야 합니다');
    if (!isText(tool.price.free_limit)) err('price.free_limit', '비어 있습니다 (모르면 "확인 필요")');
    const paid = tool.price.paid_from_usd;
    if (paid !== null && !(typeof paid === 'number' && Number.isFinite(paid) && paid > 0)) {
      err('price.paid_from_usd', '양수 또는 null이어야 합니다');
    }
    if (!BILLING.includes(tool.price.billing)) err('price.billing', `${BILLING.join(' / ')} 중 하나여야 합니다`);
  }

  if (![1, 2, 3].includes(tool.korean)) err('korean', '1, 2, 3 중 하나여야 합니다');

  if (!isObject(tool.privacy)) err('privacy', '객체여야 합니다');
  else {
    for (const field of ['trains_on_input_default', 'opt_out']) {
      if (!POLICY.includes(tool.privacy[field])) err(`privacy.${field}`, `${POLICY.join(' / ')} 중 하나여야 합니다`);
    }
    if (typeof tool.privacy.note !== 'string') err('privacy.note', '문자열이어야 합니다');
  }

  if (!Array.isArray(tool.platforms) || tool.platforms.length === 0) err('platforms', '하나 이상 있어야 합니다');
  else {
    if (tool.platforms.some((p) => !PLATFORMS.includes(p))) err('platforms', `${PLATFORMS.join(' / ')} 중에서만 씁니다`);
    if (new Set(tool.platforms).size !== tool.platforms.length) err('platforms', '중복 값이 있습니다');
  }

  if (!Array.isArray(tool.login) || tool.login.length === 0) err('login', '하나 이상 있어야 합니다');
  else {
    if (tool.login.some((v) => !LOGINS.includes(v))) err('login', `${LOGINS.join(' / ')} 중에서만 씁니다`);
    if (new Set(tool.login).size !== tool.login.length) err('login', '중복 값이 있습니다');
    if (tool.login.includes('none') && tool.login.length > 1) err('login', '"none"(가입 없이 사용)은 다른 값과 같이 쓰지 않습니다');
  }

  if (!Array.isArray(tool.start_steps) || tool.start_steps.length !== 3 || !tool.start_steps.every(isText)) {
    err('start_steps', '비어 있지 않은 문장 정확히 3개여야 합니다');
  }
  if (!Array.isArray(tool.cautions) || !tool.cautions.every(isText)) err('cautions', '문장 배열이어야 합니다');

  if (!Array.isArray(tool.sources) || tool.sources.length === 0) err('sources', '출처가 하나 이상 있어야 합니다');
  else if (!tool.sources.every(isHttpsUrl)) err('sources', '모두 https 주소여야 합니다');

  if (!isValidDate(tool.last_verified)) err('last_verified', 'YYYY-MM-DD 형식의 실제 날짜여야 합니다');
  else if (daysSince(tool.last_verified, today) < 0) err('last_verified', `오늘(${today})보다 미래입니다`);

  return errors;
}

export function validateTools(tools, purposes, today) {
  if (!Array.isArray(tools)) return ['tools.json: 배열이어야 합니다'];
  const features = featureMap(purposes);
  const errors = [];

  const seen = new Set();
  tools.forEach((tool, i) => {
    const at = `tools[${i}]${tool && typeof tool.id === 'string' ? `(${tool.id})` : ''}`;
    errors.push(...validateTool(tool, at, features, today));
    if (tool && seen.has(tool.id)) errors.push(`${at}.id: 중복된 id "${tool.id}"`);
    if (tool) seen.add(tool.id);
  });

  // 툴 수 상한은 두지 않는다 (2026-10-22, 화면은 상위 3개 + "다른 후보 더 보기")
  return errors;
}

export function validateGlossary(glossary) {
  if (!Array.isArray(glossary)) return ['glossary.json: 배열이어야 합니다'];
  const errors = [];
  const seen = new Set();
  glossary.forEach((g, i) => {
    const at = `glossary[${i}]`;
    if (!isObject(g)) return errors.push(`${at}: 객체여야 합니다`);
    if (!isText(g.term)) errors.push(`${at}.term: 비어 있습니다`);
    if (!isText(g.description)) errors.push(`${at}.description: 비어 있습니다`);
    if (!Array.isArray(g.aliases) || !g.aliases.every(isText)) errors.push(`${at}.aliases: 문자열 배열이어야 합니다`);
    for (const word of [g.term, ...(Array.isArray(g.aliases) ? g.aliases : [])]) {
      if (typeof word !== 'string') continue;
      if (seen.has(word)) errors.push(`${at}: "${word}"가 다른 용어와 겹칩니다`);
      seen.add(word);
    }
  });
  return errors;
}

export function validateChangelog(changelog) {
  if (!Array.isArray(changelog)) return ['changelog.json: 배열이어야 합니다'];
  const errors = [];
  changelog.forEach((entry, i) => {
    const at = `changelog[${i}]`;
    if (!isObject(entry)) return errors.push(`${at}: 객체여야 합니다`);
    if (!isValidDate(entry.date)) errors.push(`${at}.date: YYYY-MM-DD 형식이어야 합니다`);
    if (!isText(entry.commit)) errors.push(`${at}.commit: 비어 있습니다`);
    if (!Array.isArray(entry.changes) || entry.changes.length === 0) errors.push(`${at}.changes: 하나 이상 있어야 합니다`);
    else if (!entry.changes.every((c) => isObject(c) && ['added', 'removed', 'changed'].includes(c.type) && isText(c.tool_id))) {
      errors.push(`${at}.changes: type(added/removed/changed)과 tool_id가 있어야 합니다`);
    }
  });
  return errors;
}

export function validateData({ tools, purposes, glossary, changelog, today }) {
  return [
    ...validatePurposes(purposes),
    ...validateTools(tools, purposes, today),
    ...validateGlossary(glossary),
    ...validateChangelog(changelog),
  ];
}

export function loadData(dir = new URL('../data/', import.meta.url)) {
  const read = (name) => JSON.parse(readFileSync(new URL(name, dir), 'utf8'));
  // changelog.json은 배포할 때 만들어지므로 레포에는 없을 수 있다
  const changelogUrl = new URL('changelog.json', dir);
  return {
    tools: read('tools.json'),
    purposes: read('purposes.json'),
    glossary: read('glossary.json'),
    changelog: existsSync(changelogUrl) ? read('changelog.json') : [],
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const today = process.argv[2] ?? new Date().toISOString().slice(0, 10);
  if (!isValidDate(today)) {
    console.error(`날짜 형식이 틀렸습니다: ${today}`);
    process.exit(2);
  }
  const data = loadData();
  const errors = validateData({ ...data, today });
  if (errors.length > 0) {
    console.error(`데이터 검사 실패 (${errors.length}건)`);
    for (const e of errors) console.error(`- ${e}`);
    process.exit(1);
  }
  console.log(`데이터 검사 통과: 툴 ${data.tools.length}개, 목적 ${data.purposes.length}개 (기준일 ${today})`);
}
