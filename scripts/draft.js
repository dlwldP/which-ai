// 툴 정보 초안(drafts/tools.draft.json) 검사와 확정.
// 초안은 Claude가 공식 페이지를 읽고 만든다. 사이트에는 나오지 않는다 (배포 대상이 아님).
// J가 출처와 맞춰 확인한 툴만 promote로 data/tools.json에 옮긴다. 확인 날짜는 이때만 붙는다.
//
// 사용법:
//   node scripts/draft.js check                                   초안 검사
//   node scripts/draft.js promote <툴 id> --verified YYYY-MM-DD    확인한 툴을 tools.json으로 옮기기 (J만 실행, todo가 비어야 함)
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { isValidDate } from '../js/recommend.js';
import { loadData, validateData, validateTool } from './validate-data.js';

const DRAFT_URL = new URL('../drafts/tools.draft.json', import.meta.url);
const TOOLS_URL = new URL('../data/tools.json', import.meta.url);

// 초안에만 있는 필드. 확정할 때 지운다.
const DRAFT_ONLY = ['official_domains', 'evidence', 'review_notes', 'todo'];

// 공식 페이지에서 근거를 못 찾아 J가 채워야 하는 칸. 여기 적힌 칸은 값 형식·근거 검사를 건너뛰고,
// todo가 비어 있지 않으면 promote가 거부한다.
export const TODO_FIELDS = [
  'price.free', 'price.free_limit', 'price.paid_from_usd', 'price.billing',
  'privacy.trains_on_input_default', 'privacy.opt_out', 'platforms', 'login',
];

// 사실 확인이 필요한 값: 공식 페이지 근거 문장이 있어야 한다.
// 값이 "모름"(unknown, 확인 필요, null)이면 근거가 없어도 된다.
const FACT_FIELDS = {
  'price.free': (t) => true,
  'price.free_limit': (t) => t.price.free && t.price.free_limit !== '확인 필요',
  'price.paid_from_usd': (t) => t.price.paid_from_usd !== null,
  'privacy.trains_on_input_default': (t) => t.privacy.trains_on_input_default !== 'unknown',
  'privacy.opt_out': (t) => t.privacy.opt_out !== 'unknown',
  platforms: (t) => true,
  login: (t) => true,
};

const isText = (v) => typeof v === 'string' && v.trim() !== '';

function hostOf(url) {
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

export function validateDraft(drafts, purposes, today) {
  if (!Array.isArray(drafts)) return ['tools.draft.json: 배열이어야 합니다'];
  const purposeIds = new Set(purposes.map((p) => p.id));
  const errors = [];
  const seen = new Set();
  drafts.forEach((d, i) => {
    const at = `drafts[${i}]${d && typeof d.id === 'string' ? `(${d.id})` : ''}`;
    if (!d || typeof d !== 'object') return errors.push(`${at}: 객체여야 합니다`);
    if (seen.has(d.id)) errors.push(`${at}.id: 중복된 id "${d.id}"`);
    seen.add(d.id);

    if ('last_verified' in d) errors.push(`${at}.last_verified: 초안에는 확인 날짜를 넣지 않습니다 (J가 promote할 때 붙음)`);

    const todo = d.todo ?? [];
    if (!Array.isArray(todo) || !todo.every((f) => TODO_FIELDS.includes(f))) {
      errors.push(`${at}.todo: ${TODO_FIELDS.join(' / ')} 중에서만 씁니다`);
    }
    const isTodo = (field) => Array.isArray(todo) && todo.includes(field);

    // 확정 후 모양으로 바꿔서 tools.json과 같은 규칙으로 검사한다 (todo 칸의 형식 오류는 건너뜀)
    const tool = Object.fromEntries(Object.entries(d).filter(([k]) => !DRAFT_ONLY.includes(k)));
    errors.push(...validateTool({ ...tool, last_verified: today }, at, purposeIds, today)
      .filter((e) => !todo.some?.((f) => e.startsWith(`${at}.${f}:`))));

    const domains = d.official_domains;
    if (!Array.isArray(domains) || domains.length === 0 || !domains.every((x) => isText(x) && /^[a-z0-9.-]+\.[a-z]{2,}$/.test(x))) {
      errors.push(`${at}.official_domains: 공식 도메인 목록이 있어야 합니다 (예: ["naver.com"])`);
      return;
    }
    const urls = [d.url, ...(Array.isArray(d.sources) ? d.sources : [])];
    for (const u of urls) {
      if (!isOfficialHost(hostOf(u), domains)) errors.push(`${at}: ${u} 는 공식 도메인(${domains.join(', ')})이 아닙니다`);
    }

    if (!Array.isArray(d.evidence)) {
      errors.push(`${at}.evidence: 근거 목록(배열)이 있어야 합니다`);
      return;
    }
    d.evidence.forEach((e, j) => {
      if (!e || !isText(e.field) || !isText(e.quote) || !isText(e.source)) {
        errors.push(`${at}.evidence[${j}]: field, source, quote가 모두 있어야 합니다`);
      } else if (!d.sources?.includes(e.source)) {
        errors.push(`${at}.evidence[${j}]: 근거 출처 ${e.source} 가 sources에 없습니다`);
      }
    });
    if (d.price && d.privacy && Array.isArray(d.platforms)) {
      for (const [field, needs] of Object.entries(FACT_FIELDS)) {
        if (!isTodo(field) && needs(d) && !d.evidence.some((e) => e?.field === field)) {
          errors.push(`${at}.evidence: "${field}" 값의 근거 문장이 없습니다 (모르면 unknown / 확인 필요 / null)`);
        }
      }
    }
    if (d.review_notes !== undefined && !(Array.isArray(d.review_notes) && d.review_notes.every(isText))) {
      errors.push(`${at}.review_notes: 문장 배열이어야 합니다`);
    }
  });
  return errors;
}

/** 초안 하나를 확정된 툴 모양으로. 초안 전용 필드를 지우고 확인 날짜를 붙인다. */
export function toTool(draft, verified) {
  const tool = Object.fromEntries(Object.entries(draft).filter(([k]) => !DRAFT_ONLY.includes(k)));
  return { ...tool, last_verified: verified };
}

const readJson = (url) => JSON.parse(readFileSync(url, 'utf8'));
const writeJson = (url, value) => writeFileSync(url, `${JSON.stringify(value, null, 2)}\n`);

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [command, id] = process.argv.slice(2);
  const today = new Date().toISOString().slice(0, 10);
  const { purposes } = loadData();
  const drafts = readJson(DRAFT_URL);

  if (command === 'check') {
    const errors = validateDraft(drafts, purposes, today);
    if (errors.length) {
      console.error(`초안 검사 실패 (${errors.length}건)`);
      for (const e of errors) console.error(`- ${e}`);
      process.exit(1);
    }
    console.log(`초안 검사 통과: ${drafts.length}개`);
  } else if (command === 'promote') {
    const i = process.argv.indexOf('--verified');
    const verified = i >= 0 ? process.argv[i + 1] : undefined;
    if (!id || !isValidDate(verified)) {
      console.error('사용법: node scripts/draft.js promote <툴 id> --verified YYYY-MM-DD');
      process.exit(2);
    }
    const draft = drafts.find((d) => d.id === id);
    if (!draft) {
      console.error(`초안에 "${id}"가 없어요.`);
      process.exit(1);
    }
    if (draft.todo?.length) {
      console.error(`아직 채우지 않은 칸이 있어요: ${draft.todo.join(', ')}`);
      console.error('값과 근거(evidence)를 채우고 todo에서 지운 뒤 다시 실행하세요.');
      process.exit(1);
    }
    const draftErrors = validateDraft([draft], purposes, today);
    if (draftErrors.length) {
      console.error('초안 검사를 먼저 통과해야 해요:');
      for (const e of draftErrors) console.error(`- ${e}`);
      process.exit(1);
    }
    const data = loadData();
    const tools = data.tools.filter((t) => t.id !== id).concat(toTool(draft, verified));
    const errors = validateData({ ...data, tools, today });
    if (errors.length) {
      console.error('tools.json에 넣으면 데이터 검사가 실패해요:');
      for (const e of errors) console.error(`- ${e}`);
      process.exit(1);
    }
    writeJson(TOOLS_URL, tools);
    writeJson(DRAFT_URL, drafts.filter((d) => d.id !== id));
    console.log(`"${draft.name}"을 data/tools.json으로 옮겼어요 (확인 날짜 ${verified}).`);
  } else {
    console.error('사용법: node scripts/draft.js check | promote <툴 id> --verified YYYY-MM-DD');
    process.exit(2);
  }
}
