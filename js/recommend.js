// 목록 로직 (2026-11-06 개편: 점수 추천 대신 용도별 카드 목록).
// DOM·시계·네트워크에 접근하지 않는 순수 함수만 둔다. 브라우저와 Node 양쪽에서 import 한다.
// 순서는 이름순이에요. 좋고 나쁨의 순위를 매기지 않는다.

export const STALE_DAYS = 90;
const DAY_MS = 24 * 60 * 60 * 1000;

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

/** 목록 조건. 켜진 조건은 모두 만족해야 한다 */
export const FILTERS = {
  free: (t) => t.price.free === true, // 무료로 쓸 수 있음 (무료만 + 무료로 시작)
  web: (t) => t.use.includes('web'), // 설치 없이 웹사이트에서 바로
  install: (t) => t.use.includes('install'), // 코드로 설치 (git·pip·npm 등)
};

const byName = (a, b) => a.name.localeCompare(b.name, 'ko') || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);

/**
 * @param {object} input
 * @param {object[]} input.tools
 * @param {string|null} [input.purposeId]  없으면 전체
 * @param {string[]} [input.filters]       FILTERS의 키
 * @param {string} [input.query]           이름·한 줄 설명에서 찾을 말
 * @returns {object[]} 이름순
 */
export function listTools({ tools, purposeId = null, filters = [], query = '' }) {
  if (!Array.isArray(tools)) throw new TypeError('tools는 배열이어야 합니다');
  for (const f of filters) if (!FILTERS[f]) throw new TypeError(`알 수 없는 조건: ${f}`);
  const q = query.trim().toLowerCase();
  return tools
    .filter((t) => !purposeId || t.purposes.includes(purposeId))
    .filter((t) => filters.every((f) => FILTERS[f](t)))
    .filter((t) => !q || `${t.name} ${t.one_liner}`.toLowerCase().includes(q))
    .sort(byName);
}

/** 용도마다 몇 개 있는지 { P01: 3, ... } */
export function countByPurpose(tools, purposes) {
  return Object.fromEntries(purposes.map((p) => [p.id, tools.filter((t) => t.purposes.includes(p.id)).length]));
}

/**
 * 묶음별로 나누기 (개발자용: 회사 서비스 / 오픈소스 / 공개 모델). 빈 묶음은 뺀다.
 * kinds: ['service', 'open_source', 'model'] 처럼 보여줄 순서
 */
export function groupByKind(tools, kinds) {
  return kinds
    .map((kind) => ({ kind, tools: tools.filter((t) => t.kind === kind) }))
    .filter((g) => g.tools.length > 0);
}
