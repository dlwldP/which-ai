// data/*.json 검사 (2026-11-06 개편: 간단한 카드 모양).
// 툴 하나 = 이름, 한 줄 설명, 용도, 가격(무료/유료 요금제 여부), 쓰는 방법, 공식 주소.
// 보안 규칙: 공식 주소·출처는 그 툴의 공식 도메인(official_domains)이어야 한다.
// 저장소·모델 주소(repo_url)와 출처는 github.com / gitlab.com / huggingface.co 도 허용한다.
// 사용법: node scripts/validate-data.js [YYYY-MM-DD]   (날짜를 생략하면 오늘)
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { isValidDate, daysSince } from '../js/recommend.js';
import { USES } from '../js/format.js';

export const REPO_HOSTS = ['github.com', 'gitlab.com', 'huggingface.co'];
export const KINDS = ['service', 'open_source', 'model'];
export const AI_NATIVE = ['yes', 'no'];

/** 확인 날짜가 오늘보다 하루까지 앞서는 건 허용 (한국 시간 ↔ UTC) */
export const FUTURE_GRACE_DAYS = 1;

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

const DOMAIN = /^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/;
const triState = (v) => v === true || v === false || v === null;

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
    for (const f of ['icon', 'label', 'examples']) if (!isText(p[f])) errors.push(`${at}.${f}: 비어 있습니다`);
  });
  return errors;
}

/**
 * 툴 하나 검사. 개발자용(dev)은 kind(묶음)와 ai_native(AI 툴인지)가 더 있다.
 * @param {Set<string>} purposeIds
 */
export function validateTool(tool, at, purposeIds, today, { dev = false } = {}) {
  const errors = [];
  const err = (field, msg) => errors.push(`${at}.${field}: ${msg}`);
  if (!isObject(tool)) return [`${at}: 객체여야 합니다`];

  if (typeof tool.id !== 'string' || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(tool.id)) err('id', '영문 소문자·숫자·하이픈만 씁니다');
  for (const field of ['name', 'one_liner']) if (!isText(tool[field])) err(field, '비어 있습니다');

  const domains = tool.official_domains;
  const domainsOk = Array.isArray(domains) && domains.length > 0 && domains.every((d) => typeof d === 'string' && DOMAIN.test(d));
  if (!domainsOk) err('official_domains', '공식 도메인 목록이 있어야 합니다 (예: ["naver.com"])');
  const official = (url) => domainsOk && isHttpsUrl(url) && isOfficialHost(hostOf(url), domains);
  const repoOk = (url) => isHttpsUrl(url) && (official(url) || REPO_HOSTS.includes(hostOf(url)));

  if (!official(tool.url) && !(tool.kind !== 'service' && tool.kind !== undefined && repoOk(tool.url))) {
    err('url', 'https 공식 도메인 주소여야 합니다 (오픈소스·모델은 저장소 주소도 돼요)');
  }

  if (!Array.isArray(tool.purposes) || tool.purposes.length === 0) err('purposes', '용도가 하나 이상 있어야 합니다');
  else {
    const bad = tool.purposes.filter((p) => !purposeIds.has(p));
    if (bad.length) err('purposes', `purposes.json에 없는 용도: ${bad.join(', ')}`);
    if (new Set(tool.purposes).size !== tool.purposes.length) err('purposes', '중복 값이 있습니다');
  }

  if (!isObject(tool.price)) err('price', '{ free, paid } 객체여야 합니다');
  else {
    if (!triState(tool.price.free)) err('price.free', 'true / false / null(확인 필요) 중 하나여야 합니다');
    if (!triState(tool.price.paid)) err('price.paid', 'true / false / null(확인 필요) 중 하나여야 합니다');
    if (tool.price.free === false && tool.price.paid === false) err('price', '무료도 유료도 아닐 수는 없습니다');
  }

  if (!Array.isArray(tool.use) || tool.use.length === 0) err('use', '쓰는 방법이 하나 이상 있어야 합니다');
  else {
    if (tool.use.some((u) => !USES.includes(u))) err('use', `${USES.join(' / ')} 중에서만 씁니다`);
    if (new Set(tool.use).size !== tool.use.length) err('use', '중복 값이 있습니다');
  }

  if (tool.repo_url !== undefined && !repoOk(tool.repo_url)) err('repo_url', `공식 도메인 또는 ${REPO_HOSTS.join(', ')} 주소여야 합니다`);

  if (dev) {
    if (!KINDS.includes(tool.kind)) err('kind', `${KINDS.join(' / ')} 중 하나여야 합니다`);
    else if (tool.kind !== 'service' && !tool.repo_url) err('repo_url', '오픈소스·공개 모델은 저장소(또는 모델) 주소가 필요합니다');
    if (!AI_NATIVE.includes(tool.ai_native)) err('ai_native', `${AI_NATIVE.join(' / ')} 중 하나여야 합니다 (AI 툴이 아니면 no)`);
  } else if (tool.kind !== undefined && !KINDS.includes(tool.kind)) err('kind', `${KINDS.join(' / ')} 중 하나여야 합니다`);

  if (!Array.isArray(tool.sources) || tool.sources.length === 0) err('sources', '출처가 하나 이상 있어야 합니다');
  else if (!tool.sources.every(repoOk)) err('sources', `모두 https 공식 도메인(또는 ${REPO_HOSTS.join(', ')}) 주소여야 합니다`);

  if (!isValidDate(tool.last_verified)) err('last_verified', 'YYYY-MM-DD 형식의 실제 날짜여야 합니다');
  // 한국 시간과 UTC(GitHub·서버) 차이로 하루 앞선 날짜는 허용한다
  else if (daysSince(tool.last_verified, today) < -FUTURE_GRACE_DAYS) err('last_verified', `오늘(${today})보다 미래입니다 (시간대 차이로 하루까지는 허용)`);

  return errors;
}

export function validateTools(tools, purposes, today, options = {}) {
  const file = options.dev ? 'dev/tools.json' : 'tools.json';
  if (!Array.isArray(tools)) return [`${file}: 배열이어야 합니다`];
  const purposeIds = new Set(Array.isArray(purposes) ? purposes.map((p) => p?.id) : []);
  const errors = [];
  const seen = new Set();
  tools.forEach((tool, i) => {
    const at = `${options.dev ? 'dev/' : ''}tools[${i}]${tool && typeof tool.id === 'string' ? `(${tool.id})` : ''}`;
    errors.push(...validateTool(tool, at, purposeIds, today, options));
    if (tool && seen.has(tool.id)) errors.push(`${at}.id: 중복된 id "${tool.id}"`);
    if (tool) seen.add(tool.id);
  });
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

export function validateData({ tools, purposes, glossary, changelog = [], today }) {
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
  console.log(`데이터 검사 통과: 툴 ${data.tools.length}개, 용도 ${data.purposes.length}개 (기준일 ${today})`);
}
