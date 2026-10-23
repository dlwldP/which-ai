// data/dev/*.json 검사 (docs/개발자용_기획서.md 5장).
// 보안 규칙: 공식 주소·출처·배울 거리 링크는 모두 그 도구의 공식 도메인(official_domains)이어야 한다.
// 오픈소스 저장소 주소만 github.com / gitlab.com 도 허용한다.
// 사용법: node scripts/validate-dev-data.js [YYYY-MM-DD]
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { isValidDate, daysSince } from '../js/recommend.js';
import {
  BILLING, FUTURE_GRACE_DAYS, POLICY, featureMap, hostOf, isHttpsUrl, isObject, isOfficialHost, isText, supportsPurpose, validateFeatures,
  validateGlossary, validatePurposes,
} from './validate-data.js';

export const DEV_PURPOSE_ID = /^[a-z][a-z_]*$/;
export const AI_NATIVE = ['yes', 'partial', 'no'];
export const FORMS = ['web', 'desktop', 'ide_extension', 'cli', 'library', 'cloud_service', 'self_host'];
export const REPO_HOSTS = ['github.com', 'gitlab.com'];
// 추천 화면의 섹션. official: 회사가 만들고 운영하는 공식 AI 툴 (소스가 공개돼 있어도 여기),
// open_source: 회사 제품이 아닌 오픈소스 프로젝트 (GitHub 저장소 등). J가 정하는 값 (docs/decisions.md)
export const SECTIONS = ['official', 'open_source'];

const DOMAIN = /^[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/;

export function validateDevTool(tool, at, features, today) {
  const errors = [];
  const err = (field, msg) => errors.push(`${at}.${field}: ${msg}`);
  if (!isObject(tool)) return [`${at}: 객체여야 합니다`];

  if (typeof tool.id !== 'string' || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(tool.id)) err('id', '영문 소문자·숫자·하이픈만 씁니다');
  for (const field of ['name', 'one_liner']) if (!isText(tool[field])) err(field, '비어 있습니다');

  // 공식 도메인: 실제 데이터에도 남겨서 주소들을 계속 대조한다
  const domains = tool.official_domains;
  const domainsOk = Array.isArray(domains) && domains.length > 0 && domains.every((d) => typeof d === 'string' && DOMAIN.test(d));
  if (!domainsOk) err('official_domains', '공식 도메인 목록이 있어야 합니다 (예: ["supabase.com"])');
  const official = (url) => domainsOk && isHttpsUrl(url) && isOfficialHost(hostOf(url), domains);

  if (!official(tool.url)) err('url', 'https 공식 도메인 주소여야 합니다');

  validateFeatures(tool, err, features, 'data/dev/purposes.json');
  if (isObject(tool.features) && !supportsPurpose(tool, tool.primary)) err('primary', '지원하는 기능이 있는 목적 중 하나여야 합니다 (대표 목적)');

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

  if (!AI_NATIVE.includes(tool.ai_native)) err('ai_native', `${AI_NATIVE.join(' / ')} 중 하나여야 합니다`);

  if (typeof tool.open_source !== 'boolean') err('open_source', 'true 또는 false여야 합니다');
  else if (tool.open_source) {
    const ok = isHttpsUrl(tool.repo_url) && (official(tool.repo_url) || REPO_HOSTS.includes(hostOf(tool.repo_url)));
    if (!ok) err('repo_url', `오픈소스면 저장소 주소가 필요합니다 (공식 도메인 또는 ${REPO_HOSTS.join(', ')})`);
  } else if (tool.repo_url !== undefined && tool.repo_url !== null) err('repo_url', '오픈소스가 아니면 비워 둡니다');

  if (!SECTIONS.includes(tool.section)) err('section', `${SECTIONS.join(' / ')} 중 하나여야 합니다`);
  else if (tool.section === 'open_source' && tool.open_source === false) err('section', 'open_source 섹션은 오픈소스(open_source: true)만 넣습니다');

  if (!Array.isArray(tool.forms) || tool.forms.length === 0) err('forms', '하나 이상 있어야 합니다');
  else {
    if (tool.forms.some((f) => !FORMS.includes(f))) err('forms', `${FORMS.join(' / ')} 중에서만 씁니다`);
    if (new Set(tool.forms).size !== tool.forms.length) err('forms', '중복 값이 있습니다');
  }

  if (!isObject(tool.privacy)) err('privacy', '객체여야 합니다');
  else {
    for (const field of ['trains_on_input_default', 'opt_out']) {
      if (!POLICY.includes(tool.privacy[field])) err(`privacy.${field}`, `${POLICY.join(' / ')} 중 하나여야 합니다`);
    }
    if (typeof tool.privacy.note !== 'string') err('privacy.note', '문자열이어야 합니다');
  }

  if (!Array.isArray(tool.start_steps) || tool.start_steps.length !== 3 || !tool.start_steps.every(isText)) {
    err('start_steps', '비어 있지 않은 문장 정확히 3개여야 합니다');
  }
  if (!Array.isArray(tool.cautions) || !tool.cautions.every(isText)) err('cautions', '문장 배열이어야 합니다');

  if (!Array.isArray(tool.sources) || tool.sources.length === 0) err('sources', '출처가 하나 이상 있어야 합니다');
  else if (!tool.sources.every(official)) err('sources', '모두 https 공식 도메인 주소여야 합니다');

  // 배울 거리: 공식 도메인만 (기획서 결정 ⑤)
  if (!Array.isArray(tool.learn)) err('learn', '배열이어야 합니다 (없으면 [])');
  else {
    tool.learn.forEach((l, j) => {
      if (!isObject(l) || !isText(l.title)) err(`learn[${j}]`, 'title과 url이 있어야 합니다');
      else if (!official(l.url)) err(`learn[${j}]`, `${l.url} 는 공식 도메인 주소가 아닙니다`);
    });
  }

  if (!isValidDate(tool.last_verified)) err('last_verified', 'YYYY-MM-DD 형식의 실제 날짜여야 합니다');
  else if (daysSince(tool.last_verified, today) < -FUTURE_GRACE_DAYS) err('last_verified', `오늘(${today})보다 미래입니다 (시간대 차이로 하루까지는 허용)`);

  return errors;
}

export function validateDevTools(tools, purposes, today) {
  if (!Array.isArray(tools)) return ['dev/tools.json: 배열이어야 합니다'];
  const features = featureMap(purposes);
  const errors = [];
  const seen = new Set();
  tools.forEach((tool, i) => {
    const at = `dev/tools[${i}]${tool && typeof tool.id === 'string' ? `(${tool.id})` : ''}`;
    errors.push(...validateDevTool(tool, at, features, today));
    if (tool && seen.has(tool.id)) errors.push(`${at}.id: 중복된 id "${tool.id}"`);
    if (tool) seen.add(tool.id);
  });
  // 도구 수 상한은 두지 않는다 (2026-10-22)
  return errors;
}

export function validateDevData({ tools, purposes, glossary = [], today }) {
  return [
    ...validatePurposes(purposes, DEV_PURPOSE_ID),
    ...validateDevTools(tools, purposes, today),
    ...validateGlossary(glossary).map((e) => `dev/${e}`),
  ];
}

export function loadDevData(dir = new URL('../data/dev/', import.meta.url)) {
  const read = (name) => JSON.parse(readFileSync(new URL(name, dir), 'utf8'));
  return { tools: read('tools.json'), purposes: read('purposes.json'), glossary: read('glossary.json') };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const today = process.argv[2] ?? new Date().toISOString().slice(0, 10);
  if (!isValidDate(today)) {
    console.error(`날짜 형식이 틀렸습니다: ${today}`);
    process.exit(2);
  }
  const data = loadDevData();
  const errors = validateDevData({ ...data, today });
  if (errors.length > 0) {
    console.error(`개발자용 데이터 검사 실패 (${errors.length}건)`);
    for (const e of errors) console.error(`- ${e}`);
    process.exit(1);
  }
  console.log(`개발자용 데이터 검사 통과: 도구 ${data.tools.length}개, 목적 ${data.purposes.length}개 (기준일 ${today})`);
}
