// 툴 정보 초안 검사와 확정. 비개발자용(general)과 개발자용(dev) 두 가지.
//   general: drafts/tools.draft.json     → data/tools.json
//   dev:     drafts/dev-tools.draft.json → data/dev/tools.json
// 초안은 Claude가 공식 페이지를 읽고 만든다. 사이트에는 나오지 않는다 (배포 대상이 아님).
// J가 출처와 맞춰 확인한 툴만 promote로 옮긴다. 확인 날짜는 이때만 붙는다.
//
// 사용법:
//   node scripts/draft.js check                                         두 초안 파일 모두 검사
//   node scripts/draft.js promote <id> --verified YYYY-MM-DD [--dev]    확인한 툴 옮기기 (J만 실행, todo가 비어야 함)
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { isValidDate } from '../js/recommend.js';
import { featureMap, hostOf, isObject, isOfficialHost, isText, loadData, validateData, validateTool } from './validate-data.js';
import { loadDevData, validateDevData, validateDevTool } from './validate-dev-data.js';

export { isOfficialHost };

// 사실 확인이 필요한 값: 공식 페이지 근거 문장이 있어야 한다.
// 값이 "모름"(unknown, 확인 필요, null)이면 근거가 없어도 된다.
const COMMON_FACTS = {
  'price.free': (t) => true,
  'price.free_limit': (t) => t.price.free && t.price.free_limit !== '확인 필요',
  'price.paid_from_usd': (t) => t.price.paid_from_usd !== null,
  'privacy.trains_on_input_default': (t) => t.privacy.trains_on_input_default !== 'unknown',
  'privacy.opt_out': (t) => t.privacy.opt_out !== 'unknown',
};
const PRICE_PRIVACY = [
  'price.free', 'price.free_limit', 'price.paid_from_usd', 'price.billing',
  'privacy.trains_on_input_default', 'privacy.opt_out',
];

export const KINDS = {
  general: {
    file: 'tools.draft.json',
    draftUrl: new URL('../drafts/tools.draft.json', import.meta.url),
    toolsUrl: new URL('../data/tools.json', import.meta.url),
    toolsPath: 'data/tools.json',
    // 초안에만 있는 필드. 확정할 때 지운다.
    draftOnly: ['official_domains', 'evidence', 'review_notes', 'todo'],
    // 공식 페이지에서 근거를 못 찾아 J가 채워야 하는 칸. 여기 적힌 칸은 값 형식·근거 검사를 건너뛰고,
    // todo가 비어 있지 않으면 promote가 거부한다.
    todoFields: [...PRICE_PRIVACY, 'platforms', 'login', 'features'],
    facts: { ...COMMON_FACTS, platforms: (t) => true, login: (t) => true },
    validateOne: validateTool,
    checkUrls: true, // validateTool은 공식 도메인을 모르므로 초안 단계에서 url·sources를 대조한다
    load: loadData,
    validateAll: (data, tools, today) => validateData({ ...data, tools, today }),
  },
  dev: {
    file: 'dev-tools.draft.json',
    draftUrl: new URL('../drafts/dev-tools.draft.json', import.meta.url),
    toolsUrl: new URL('../data/dev/tools.json', import.meta.url),
    toolsPath: 'data/dev/tools.json',
    // 개발자용은 official_domains를 실제 데이터에도 남긴다
    draftOnly: ['evidence', 'review_notes', 'todo'],
    todoFields: [...PRICE_PRIVACY, 'open_source', 'repo_url', 'forms', 'features'],
    facts: { ...COMMON_FACTS, open_source: (t) => true, forms: (t) => true },
    validateOne: validateDevTool, // url·sources·learn·repo_url의 공식 도메인 검사를 포함
    checkUrls: false,
    load: loadDevData,
    validateAll: (data, tools, today) => validateDevData({ ...data, tools, today }),
  },
};

// 이전 이름 호환
export const TODO_FIELDS = KINDS.general.todoFields;

export function validateDraft(drafts, purposes, today, kindName = 'general') {
  const kind = KINDS[kindName];
  const { todoFields: TODO_FIELDS, draftOnly: DRAFT_ONLY, facts: FACT_FIELDS } = kind;
  if (!Array.isArray(drafts)) return [`${kind.file}: 배열이어야 합니다`];
  const features = featureMap(purposes);
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
    errors.push(...kind.validateOne({ ...tool, last_verified: today }, at, features, today)
      .filter((e) => !todo.some?.((f) => e.startsWith(`${at}.${f}:`) || e.startsWith(`${at}.${f}.`))));

    const domains = d.official_domains;
    if (!Array.isArray(domains) || domains.length === 0 || !domains.every((x) => isText(x) && /^[a-z0-9.-]+\.[a-z]{2,}$/.test(x))) {
      errors.push(`${at}.official_domains: 공식 도메인 목록이 있어야 합니다 (예: ["naver.com"])`);
      return;
    }
    const urls = kind.checkUrls ? [d.url, ...(Array.isArray(d.sources) ? d.sources : [])] : [];
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
    if (d.price && d.privacy) {
      for (const [field, needs] of Object.entries(FACT_FIELDS)) {
        if (!isTodo(field) && needs(d) && !d.evidence.some((e) => e?.field === field)) {
          errors.push(`${at}.evidence: "${field}" 값의 근거 문장이 없습니다 (모르면 unknown / 확인 필요 / null)`);
        }
      }
    }
    // 기능 체크리스트: 지원한다고 적은 기능마다 공식 페이지 근거가 있어야 한다 (field: "features.P02.transcribe")
    if (isObject(d.features) && !isTodo('features')) {
      for (const [pid, ids] of Object.entries(d.features)) {
        if (!Array.isArray(ids)) continue;
        for (const id of ids) {
          if (!d.evidence.some((e) => e?.field === `features.${pid}.${id}`)) {
            errors.push(`${at}.evidence: "features.${pid}.${id}" 기능의 근거 문장이 없습니다 (근거가 없으면 그 기능을 빼요)`);
          }
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
export function toTool(draft, verified, kindName = 'general') {
  const { draftOnly } = KINDS[kindName];
  const tool = Object.fromEntries(Object.entries(draft).filter(([k]) => !draftOnly.includes(k)));
  return { ...tool, last_verified: verified };
}

const readJson = (url) => JSON.parse(readFileSync(url, 'utf8'));
const writeJson = (url, value) => writeFileSync(url, `${JSON.stringify(value, null, 2)}\n`);

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [command, id] = process.argv.slice(2);
  const today = new Date().toISOString().slice(0, 10);

  if (command === 'check') {
    let failed = false;
    for (const [name, kind] of Object.entries(KINDS)) {
      const drafts = readJson(kind.draftUrl);
      const errors = validateDraft(drafts, kind.load().purposes, today, name);
      if (errors.length) {
        failed = true;
        console.error(`${kind.file} 검사 실패 (${errors.length}건)`);
        for (const e of errors) console.error(`- ${e}`);
      } else {
        console.log(`${kind.file} 검사 통과: ${drafts.length}개`);
      }
    }
    if (failed) process.exit(1);
  } else if (command === 'promote') {
    const name = process.argv.includes('--dev') ? 'dev' : 'general';
    const kind = KINDS[name];
    const i = process.argv.indexOf('--verified');
    const verified = i >= 0 ? process.argv[i + 1] : undefined;
    if (!id || !isValidDate(verified)) {
      console.error('사용법: node scripts/draft.js promote <id> --verified YYYY-MM-DD [--dev]');
      process.exit(2);
    }
    const drafts = readJson(kind.draftUrl);
    const draft = drafts.find((d) => d.id === id);
    if (!draft) {
      console.error(`${kind.file}에 "${id}"가 없어요.`);
      process.exit(1);
    }
    if (draft.todo?.length) {
      console.error(`아직 채우지 않은 칸이 있어요: ${draft.todo.join(', ')}`);
      console.error('값과 근거(evidence)를 채우고 todo에서 지운 뒤 다시 실행하세요.');
      process.exit(1);
    }
    const data = kind.load();
    const draftErrors = validateDraft([draft], data.purposes, today, name);
    if (draftErrors.length) {
      console.error('초안 검사를 먼저 통과해야 해요:');
      for (const e of draftErrors) console.error(`- ${e}`);
      process.exit(1);
    }
    const tools = data.tools.filter((t) => t.id !== id).concat(toTool(draft, verified, name));
    const errors = kind.validateAll(data, tools, today);
    if (errors.length) {
      console.error(`${kind.toolsPath}에 넣으면 데이터 검사가 실패해요:`);
      for (const e of errors) console.error(`- ${e}`);
      process.exit(1);
    }
    writeJson(kind.toolsUrl, tools);
    writeJson(kind.draftUrl, drafts.filter((d) => d.id !== id));
    console.log(`"${draft.name}"을 ${kind.toolsPath}로 옮겼어요 (확인 날짜 ${verified}).`);
  } else {
    console.error('사용법: node scripts/draft.js check | promote <id> --verified YYYY-MM-DD [--dev]');
    process.exit(2);
  }
}
