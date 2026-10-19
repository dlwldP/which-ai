// 추천 로직 (기획서 9장, docs/decisions.md).
// DOM·시계·네트워크에 접근하지 않는 순수 함수만 둔다. 브라우저와 Node 양쪽에서 import 한다.

export const STALE_DAYS = 90;
export const MAX_RESULTS = 3;
const DAY_MS = 24 * 60 * 60 * 1000;
const MOBILE_PLATFORMS = ['ios', 'android'];

// 결과가 0개일 때 빼는 순서. 보안 조건은 절대 빼지 않는다.
const RELAX_ORDER = ['mobile', 'freeOnly'];
const CONDITION_LABELS = { mobile: '휴대폰 앱', freeOnly: '무료' };

const PURPOSE_REASONS = {
  3: '이 목적에 가장 많이 쓰는 툴이에요',
  2: '이 일에 잘 맞는 툴이에요',
  1: '이 일에도 쓸 수 있어요',
};
const REASON_KOREAN = '메뉴와 결과 모두 한국어로 잘 돼요';
const REASON_SECURITY = '입력한 내용을 학습에 쓰지 않도록 설정할 수 있어요';
const REASON_FREE = '무료로 시작할 수 있어요';
const NOTICE_NONE = '조건에 맞는 툴이 아직 없어요';

// "YYYY-MM-DD" → UTC 기준 밀리초. 형식이 틀리면 NaN.
function parseDate(value) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value ?? '');
  if (!m) return NaN;
  const time = Date.UTC(+m[1], +m[2] - 1, +m[3]);
  return new Date(time).toISOString().slice(0, 10) === value ? time : NaN;
}

export function isValidDate(value) {
  return !Number.isNaN(parseDate(value));
}

export function daysSince(date, today) {
  return Math.floor((parseDate(today) - parseDate(date)) / DAY_MS);
}

export function isStale(tool, today) {
  return daysSince(tool.last_verified, today) > STALE_DAYS;
}

export function isSecure(tool) {
  return tool.privacy.trains_on_input_default === 'no' || tool.privacy.opt_out === 'yes';
}

function passes(tool, conditions) {
  if (conditions.freeOnly && tool.price.free !== true) return false;
  if (conditions.securityImportant && !isSecure(tool)) return false;
  if (conditions.mobile && !tool.platforms.some((p) => MOBILE_PLATFORMS.includes(p))) return false;
  return true;
}

function score(tool, purposeId, conditions, today) {
  return tool.purposes[purposeId] * 10
    + tool.korean * (conditions.koreanImportant ? 4 : 1)
    + (tool.price.free ? 2 : 0)
    - (isStale(tool, today) ? 3 : 0);
}

function reasons(tool, purposeId, conditions) {
  const list = [PURPOSE_REASONS[tool.purposes[purposeId]]];
  if (tool.korean === 3) list.push(REASON_KOREAN);
  if (conditions.securityImportant && isSecure(tool)) list.push(REASON_SECURITY);
  if (tool.price.free) list.push(REASON_FREE);
  return list;
}

function compare(a, b) {
  return b.score - a.score
    || a.tool.name.localeCompare(b.tool.name, 'ko')
    || (a.tool.id < b.tool.id ? -1 : a.tool.id > b.tool.id ? 1 : 0);
}

function rank(candidates, purposeId, conditions, today) {
  return candidates
    .filter((tool) => passes(tool, conditions))
    .map((tool) => ({ tool, score: score(tool, purposeId, conditions, today) }))
    .sort(compare)
    .slice(0, MAX_RESULTS)
    .map(({ tool, score: s }) => ({
      id: tool.id,
      tool,
      score: s,
      reasons: reasons(tool, purposeId, conditions),
      stale: isStale(tool, today),
    }));
}

/**
 * @param {object} input
 * @param {object[]} input.tools       data/tools.json 내용
 * @param {string}   input.purposeId   "P01" ~ "P10"
 * @param {object}   [input.conditions] { freeOnly, securityImportant, koreanImportant, mobile } (모두 boolean)
 * @param {string}   input.today       "YYYY-MM-DD". 결정성을 위해 호출하는 쪽에서 넘긴다.
 * @returns {{ results: object[], relaxed: string[], notice: string|null }}
 *   relaxed: 결과를 찾으려고 뺀 조건 이름들 (RELAX_ORDER 순서). 결과가 없으면 빈 배열
 *   notice:  조건을 뺐거나 결과가 없을 때 화면에 보여줄 안내 문구
 */
export function recommend({ tools, purposeId, conditions = {}, today }) {
  if (!Array.isArray(tools)) throw new TypeError('tools는 배열이어야 합니다');
  if (typeof purposeId !== 'string' || !/^P\d{2}$/.test(purposeId)) {
    throw new TypeError(`purposeId 형식이 틀렸습니다: ${purposeId}`);
  }
  if (!isValidDate(today)) throw new TypeError(`today 형식이 틀렸습니다: ${today}`);

  const candidates = tools.filter((tool) => (tool.purposes[purposeId] ?? 0) >= 1);
  const active = { ...conditions };
  const relaxed = [];

  let results = rank(candidates, purposeId, active, today);
  for (const key of RELAX_ORDER) {
    if (results.length > 0) break;
    if (!active[key]) continue;
    active[key] = false;
    relaxed.push(key);
    results = rank(candidates, purposeId, active, today);
  }

  if (results.length === 0) return { results, relaxed: [], notice: NOTICE_NONE };

  let notice = null;
  if (relaxed.length > 0) {
    notice = `${relaxed.map((key) => CONDITION_LABELS[key]).join(', ')} 조건을 빼면 이런 선택지가 있어요`;
  }

  return { results, relaxed, notice };
}
