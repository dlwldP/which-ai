// data/*.json 검사 (기획서 8장, 12장 스키마 / docs/decisions.md).
// 사용법: node scripts/validate-data.js [YYYY-MM-DD]   (날짜를 생략하면 오늘)
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { isValidDate, daysSince } from '../js/recommend.js';

export const MAX_TOOLS = 40;
export const MAX_TOOLS_PER_PURPOSE = 5;
export const PLATFORMS = ['web', 'ios', 'android', 'windows', 'mac'];
export const BILLING = ['monthly', 'yearly', 'unknown'];
export const POLICY = ['yes', 'no', 'unknown'];
export const LOGINS = ['google', 'apple', 'microsoft', 'kakao', 'naver', 'email', 'phone', 'none'];

const isObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const isText = (v) => typeof v === 'string' && v.trim() !== '';
const isHttpsUrl = (v) => {
  if (typeof v !== 'string') return false;
  try {
    return new URL(v).protocol === 'https:';
  } catch {
    return false;
  }
};

export function validatePurposes(purposes) {
  const errors = [];
  if (!Array.isArray(purposes)) return ['purposes.json: 배열이어야 합니다'];
  const seen = new Set();
  purposes.forEach((p, i) => {
    const at = `purposes[${i}]`;
    if (!isObject(p)) return errors.push(`${at}: 객체여야 합니다`);
    if (typeof p.id !== 'string' || !/^P\d{2}$/.test(p.id)) errors.push(`${at}.id: "P01" 형식이어야 합니다`);
    else if (seen.has(p.id)) errors.push(`${at}.id: 중복된 id "${p.id}"`);
    seen.add(p.id);
    if (!isText(p.icon)) errors.push(`${at}.icon: 비어 있습니다`);
    if (!isText(p.label)) errors.push(`${at}.label: 비어 있습니다`);
    if (!isText(p.examples)) errors.push(`${at}.examples: 비어 있습니다`);
  });
  return errors;
}

function validateTool(tool, at, purposeIds, today) {
  const errors = [];
  const err = (field, msg) => errors.push(`${at}.${field}: ${msg}`);
  if (!isObject(tool)) return [`${at}: 객체여야 합니다`];

  if (typeof tool.id !== 'string' || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(tool.id)) err('id', '영문 소문자·숫자·하이픈만 씁니다');
  for (const field of ['name', 'one_liner']) if (!isText(tool[field])) err(field, '비어 있습니다');
  if (!isHttpsUrl(tool.url)) err('url', 'https 주소여야 합니다');

  if (!isObject(tool.purposes)) err('purposes', '객체여야 합니다');
  else {
    const entries = Object.entries(tool.purposes);
    for (const [pid, value] of entries) {
      if (!purposeIds.has(pid)) err(`purposes.${pid}`, 'purposes.json에 없는 목적입니다');
      if (![0, 1, 2, 3].includes(value)) err(`purposes.${pid}`, '0~3 정수여야 합니다');
    }
    if (!entries.some(([, value]) => value >= 1)) err('purposes', '적합도 1 이상인 목적이 하나는 있어야 합니다');
  }

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
  const purposeIds = new Set(Array.isArray(purposes) ? purposes.map((p) => p.id) : []);
  const errors = [];

  const seen = new Set();
  tools.forEach((tool, i) => {
    const at = `tools[${i}]${tool && typeof tool.id === 'string' ? `(${tool.id})` : ''}`;
    errors.push(...validateTool(tool, at, purposeIds, today));
    if (tool && seen.has(tool.id)) errors.push(`${at}.id: 중복된 id "${tool.id}"`);
    if (tool) seen.add(tool.id);
  });

  if (tools.length > MAX_TOOLS) errors.push(`tools.json: 툴이 ${tools.length}개입니다 (최대 ${MAX_TOOLS}개)`);
  for (const pid of purposeIds) {
    const count = tools.filter((t) => isObject(t?.purposes) && t.purposes[pid] >= 1).length;
    if (count > MAX_TOOLS_PER_PURPOSE) {
      errors.push(`tools.json: ${pid}에 적합도 1 이상인 툴이 ${count}개입니다 (최대 ${MAX_TOOLS_PER_PURPOSE}개)`);
    }
  }
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
  return {
    tools: read('tools.json'),
    purposes: read('purposes.json'),
    glossary: read('glossary.json'),
    changelog: read('changelog.json'),
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
