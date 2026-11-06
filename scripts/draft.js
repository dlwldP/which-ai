// 툴 정보 초안 검사와 확정. 비개발자용(general)과 개발자용(dev) 두 가지.
//   general: drafts/tools.draft.json     → data/tools.json
//   dev:     drafts/dev-tools.draft.json → data/dev/tools.json
// 초안은 Claude가 공식 페이지를 읽고 만든다. 사이트에는 나오지 않는다 (배포 대상이 아님).
// 2026-11-06 개편: 근거 문장은 가격(무료/유료 요금제 여부) 하나만. 가격을 못 찾으면 null(확인 필요)로 두고 그대로 확정해도 된다.
// Claude가 근거 문장을 저장한 공식 페이지 글자와 대조한 뒤 바로 확정한다 (CLAUDE.md).
//
// 사용법:
//   node scripts/draft.js check                                           두 초안 파일 모두 검사
//   node scripts/draft.js promote <id> --verified YYYY-MM-DD [--dev]      하나 옮기기 (todo가 비어야 함)
//   node scripts/draft.js promote-all --verified YYYY-MM-DD [--dev]       todo가 빈 초안 모두 옮기기
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { isValidDate } from '../js/recommend.js';
import { hostOf, isOfficialHost, isText, loadData, validateData, validateTool, REPO_HOSTS } from './validate-data.js';
import { loadDevData, validateDevData } from './validate-dev-data.js';

export { isOfficialHost };

export const KINDS = {
  general: {
    file: 'tools.draft.json',
    draftUrl: new URL('../drafts/tools.draft.json', import.meta.url),
    toolsUrl: new URL('../data/tools.json', import.meta.url),
    toolsPath: 'data/tools.json',
    dev: false,
    load: loadData,
    validateAll: (data, tools, today) => validateData({ ...data, tools, today }),
  },
  dev: {
    file: 'dev-tools.draft.json',
    draftUrl: new URL('../drafts/dev-tools.draft.json', import.meta.url),
    toolsUrl: new URL('../data/dev/tools.json', import.meta.url),
    toolsPath: 'data/dev/tools.json',
    dev: true,
    load: loadDevData,
    validateAll: (data, tools, today) => validateDevData({ ...data, tools, today }),
  },
};

// 초안에만 있는 필드. 확정할 때 지운다.
export const DRAFT_ONLY = ['evidence', 'review_notes', 'todo'];
// 공식 페이지에서 근거를 못 찾아 나중에 채울 칸
export const TODO_FIELDS = ['price'];

/** 가격 근거가 필요한지: 무료/유료 둘 중 하나라도 값(true/false)이 있으면 필요 */
export const needsPriceEvidence = (d) => d.price && (d.price.free !== null || d.price.paid !== null);

export function validateDraft(drafts, purposes, today, kindName = 'general') {
  const kind = KINDS[kindName];
  if (!Array.isArray(drafts)) return [`${kind.file}: 배열이어야 합니다`];
  const purposeIds = new Set(purposes.map((p) => p.id));
  const errors = [];
  const seen = new Set();
  drafts.forEach((d, i) => {
    const at = `drafts[${i}]${d && typeof d.id === 'string' ? `(${d.id})` : ''}`;
    if (!d || typeof d !== 'object') return errors.push(`${at}: 객체여야 합니다`);
    if (seen.has(d.id)) errors.push(`${at}.id: 중복된 id "${d.id}"`);
    seen.add(d.id);
    if ('last_verified' in d) errors.push(`${at}.last_verified: 초안에는 확인 날짜를 넣지 않습니다 (promote할 때 붙음)`);

    const todo = d.todo ?? [];
    if (!Array.isArray(todo) || !todo.every((f) => TODO_FIELDS.includes(f))) errors.push(`${at}.todo: ${TODO_FIELDS.join(' / ')} 중에서만 씁니다`);

    const tool = Object.fromEntries(Object.entries(d).filter(([k]) => !DRAFT_ONLY.includes(k)));
    errors.push(...validateTool({ ...tool, last_verified: today }, at, purposeIds, today, { dev: kind.dev }));

    if (!Array.isArray(d.evidence)) {
      errors.push(`${at}.evidence: 근거 목록(배열)이 있어야 합니다`);
      return;
    }
    const domains = Array.isArray(d.official_domains) ? d.official_domains : [];
    d.evidence.forEach((e, j) => {
      if (!e || !isText(e.field) || !isText(e.quote) || !isText(e.source)) {
        errors.push(`${at}.evidence[${j}]: field, source, quote가 모두 있어야 합니다`);
        return;
      }
      if (!d.sources?.includes(e.source)) errors.push(`${at}.evidence[${j}]: 근거 출처 ${e.source} 가 sources에 없습니다`);
      const host = hostOf(e.source);
      if (!isOfficialHost(host, domains) && !REPO_HOSTS.includes(host)) errors.push(`${at}.evidence[${j}]: ${e.source} 는 공식 도메인이 아닙니다`);
    });
    if (needsPriceEvidence(d) && !todo.includes('price') && !d.evidence.some((e) => e?.field === 'price')) {
      errors.push(`${at}.evidence: 가격(무료/유료) 근거 문장이 없습니다 (모르면 price를 { free: null, paid: null }로)`);
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

/** ids의 초안을 옮긴다. 하나라도 문제가 있으면 아무것도 옮기지 않는다. */
export function promote(ids, verified, name, today) {
  const kind = KINDS[name];
  const drafts = readJson(kind.draftUrl);
  const picked = ids.map((id) => drafts.find((d) => d.id === id));
  const missing = ids.filter((id, k) => !picked[k]);
  if (missing.length) return { errors: [`${kind.file}에 없어요: ${missing.join(', ')}`] };
  const withTodo = picked.filter((d) => d.todo?.length);
  if (withTodo.length) return { errors: withTodo.map((d) => `${d.id}: 아직 채우지 않은 칸이 있어요 (${d.todo.join(', ')})`) };
  const data = kind.load();
  const draftErrors = validateDraft(picked, data.purposes, today, name);
  if (draftErrors.length) return { errors: draftErrors };
  const idSet = new Set(ids);
  const tools = data.tools.filter((t) => !idSet.has(t.id)).concat(picked.map((d) => toTool(d, verified)));
  const errors = kind.validateAll(data, tools, today);
  if (errors.length) return { errors };
  writeJson(kind.toolsUrl, tools);
  writeJson(kind.draftUrl, drafts.filter((d) => !idSet.has(d.id)));
  return { errors: [], moved: picked.map((d) => d.name) };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [command, id] = process.argv.slice(2);
  const today = new Date().toISOString().slice(0, 10);
  const name = process.argv.includes('--dev') ? 'dev' : 'general';
  const kind = KINDS[name];
  const i = process.argv.indexOf('--verified');
  const verified = i >= 0 ? process.argv[i + 1] : undefined;

  if (command === 'check') {
    let failed = false;
    for (const [n, k] of Object.entries(KINDS)) {
      const drafts = readJson(k.draftUrl);
      const errors = validateDraft(drafts, k.load().purposes, today, n);
      if (errors.length) {
        failed = true;
        console.error(`${k.file} 검사 실패 (${errors.length}건)`);
        for (const e of errors) console.error(`- ${e}`);
      } else console.log(`${k.file} 검사 통과: ${drafts.length}개`);
    }
    if (failed) process.exit(1);
  } else if (command === 'promote' || command === 'promote-all') {
    if (!isValidDate(verified) || (command === 'promote' && !id)) {
      console.error('사용법: node scripts/draft.js promote <id> | promote-all  --verified YYYY-MM-DD [--dev]');
      process.exit(2);
    }
    const ids = command === 'promote' ? [id] : readJson(kind.draftUrl).filter((d) => !d.todo?.length).map((d) => d.id);
    if (!ids.length) {
      console.log('옮길 초안이 없어요.');
      process.exit(0);
    }
    const { errors, moved } = promote(ids, verified, name, today);
    if (errors.length) {
      console.error('옮기지 못했어요:');
      for (const e of errors) console.error(`- ${e}`);
      process.exit(1);
    }
    console.log(`${moved.length}개를 ${kind.toolsPath}로 옮겼어요 (확인 날짜 ${verified}): ${moved.join(', ')}`);
    console.log('검토 체크리스트도 다시 만들어요: node scripts/review-checklist.js');
  } else {
    console.error('사용법: node scripts/draft.js check | promote <id> | promote-all  --verified YYYY-MM-DD [--dev]');
    process.exit(2);
  }
}
