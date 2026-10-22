// 추천 로직 (기획서 9장, docs/decisions.md).
// DOM·시계·네트워크에 접근하지 않는 순수 함수만 둔다. 브라우저와 Node 양쪽에서 import 한다.

export const STALE_DAYS = 90;
export const MAX_RESULTS = 3;
const DAY_MS = 24 * 60 * 60 * 1000;
const MOBILE_PLATFORMS = ['ios', 'android'];

const PURPOSE_REASONS = {
  3: '이 목적에 가장 많이 쓰는 툴이에요',
  2: '이 일에 잘 맞는 툴이에요',
  1: '이 일에도 쓸 수 있어요',
};
const DEV_PURPOSE_REASONS = {
  3: '이 일에 가장 많이 쓰는 도구예요',
  2: '이 일에 잘 맞는 도구예요',
  1: '이 일에도 쓸 수 있어요',
};
const REASON_KOREAN = '메뉴와 결과 모두 한국어로 잘 돼요';
const REASON_SECURITY = '입력한 내용을 학습에 쓰지 않도록 설정할 수 있어요';
const REASON_FREE = '무료로 시작할 수 있어요';
const REASON_OPEN_SOURCE = '오픈소스예요';
const REASON_NOT_AI = 'AI 툴은 아니지만 AI로 만든 앱에 자주 같이 써요';
const REASON_MOBILE = '휴대폰 앱으로도 쓸 수 있어요';
const NOTICE_NONE = '조건에 맞는 툴이 아직 없어요';
const DEV_NOTICE_NONE = '조건에 맞는 도구가 아직 없어요';

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

const hasMobileApp = (t) => t.platforms.some((p) => MOBILE_PLATFORMS.includes(p));

/**
 * 데이터 세트마다 다른 규칙. 점수 = purposes[P] × 10 + bonus - (90일 초과 ? 3 : 0)
 *   general: 비개발자용 (기획서 9장, docs/decisions.md)
 *   dev:     개발자용 (docs/개발자용_기획서.md)
 * relaxOrder: 결과가 0개일 때 빼는 조건 순서. 여기 없는 조건(보안 등)은 절대 빼지 않는다.
 */
export const PROFILES = {
  general: {
    purposeId: /^P\d{2}$/,
    filters: {
      freeOnly: (t) => t.price.free === true,
      securityImportant: isSecure,
      mobile: hasMobileApp,
    },
    relaxOrder: ['mobile', 'freeOnly'],
    labels: { mobile: '휴대폰 앱', freeOnly: '무료' },
    purposeReasons: PURPOSE_REASONS,
    noneNotice: NOTICE_NONE,
    bonus: (t, c) => t.korean * (c.koreanImportant ? 4 : 1) + (t.price.free ? 2 : 0),
    // 추가 이유 문장. key는 그 이유와 관련된 조건 (켜져 있으면 맨 앞으로 간다)
    reasons: (t, c) => [
      ...(t.korean === 3 ? [{ key: 'koreanImportant', text: REASON_KOREAN }] : []),
      ...(c.securityImportant && isSecure(t) ? [{ key: 'securityImportant', text: REASON_SECURITY }] : []),
      ...(t.price.free ? [{ key: 'freeOnly', text: REASON_FREE }] : []),
      ...(c.mobile && hasMobileApp(t) ? [{ key: 'mobile', text: REASON_MOBILE }] : []),
    ],
    // 켠 조건이 여럿이면 이 순서로 맨 앞 이유를 고른다
    conditionPriority: ['securityImportant', 'freeOnly', 'koreanImportant', 'mobile'],
  },
  dev: {
    purposeId: /^[a-z][a-z_]*$/,
    filters: {
      freeOnly: (t) => t.price.free === true,
      openSourceOnly: (t) => t.open_source === true,
    },
    relaxOrder: ['openSourceOnly', 'freeOnly'],
    labels: { openSourceOnly: '오픈소스', freeOnly: '무료' },
    purposeReasons: DEV_PURPOSE_REASONS,
    noneNotice: DEV_NOTICE_NONE,
    bonus: (t) => (t.ai_native === 'yes' ? 2 : 0) + (t.price.free ? 2 : 0),
    reasons: (t) => [
      ...(t.open_source ? [{ key: 'openSourceOnly', text: REASON_OPEN_SOURCE }] : []),
      ...(t.ai_native === 'no' ? [{ key: null, text: REASON_NOT_AI }] : []),
      ...(t.price.free ? [{ key: 'freeOnly', text: REASON_FREE }] : []),
    ],
    conditionPriority: ['openSourceOnly', 'freeOnly'],
    // 추천을 섹션별로 따로 한다 (각 섹션 최대 MAX_RESULTS개). 도구의 section 값과 같다.
    sections: ['official', 'open_source'],
  },
};

function passes(tool, conditions, profile) {
  return Object.entries(profile.filters).every(([key, test]) => !conditions[key] || test(tool));
}

function score(tool, purposeId, conditions, today, profile) {
  return tool.purposes[purposeId] * 10
    + profile.bonus(tool, conditions)
    - (isStale(tool, today) ? 3 : 0);
}

// 첫 문장이 카드에 크게 보이는 대표 이유다. 켠 조건과 관련된 이유가 있으면 그게 대표 이유가 되고,
// 없으면 적합도 문장이 대표 이유다. 나머지 순서는 그대로.
function reasons(tool, purposeId, conditions, profile) {
  const extra = profile.reasons(tool, conditions);
  const matched = profile.conditionPriority
    .filter((key) => conditions[key])
    .flatMap((key) => extra.filter((r) => r.key === key));
  return [
    ...matched.map((r) => r.text),
    profile.purposeReasons[tool.purposes[purposeId]],
    ...extra.filter((r) => !matched.includes(r)).map((r) => r.text),
  ];
}

function compare(a, b) {
  return b.score - a.score
    || a.tool.name.localeCompare(b.tool.name, 'ko')
    || (a.tool.id < b.tool.id ? -1 : a.tool.id > b.tool.id ? 1 : 0);
}

function rank(candidates, purposeId, conditions, today, profile) {
  return candidates
    .filter((tool) => passes(tool, conditions, profile))
    .map((tool) => ({ tool, score: score(tool, purposeId, conditions, today, profile) }))
    .sort(compare)
    .slice(0, MAX_RESULTS)
    .map(({ tool, score: s }) => ({
      id: tool.id,
      tool,
      score: s,
      reasons: reasons(tool, purposeId, conditions, profile),
      stale: isStale(tool, today),
    }));
}

/**
 * @param {object} input
 * @param {object[]} input.tools       data/tools.json (또는 data/dev/tools.json) 내용
 * @param {string}   input.purposeId   general: "P01" ~ "P10", dev: "planning" 같은 카테고리 ID
 * @param {object}   [input.conditions] general: { freeOnly, securityImportant, koreanImportant, mobile }
 *                                      dev: { freeOnly, openSourceOnly } (모두 boolean)
 * @param {string}   input.today       "YYYY-MM-DD". 결정성을 위해 호출하는 쪽에서 넘긴다.
 * @param {string}   [input.profile]   "general"(기본) 또는 "dev"
 * @returns {{ results: object[], relaxed: string[], notice: string|null }}
 *   relaxed: 결과를 찾으려고 뺀 조건 이름들 (relaxOrder 순서). 결과가 없으면 빈 배열
 *   notice:  조건을 뺐거나 결과가 없을 때 화면에 보여줄 안내 문구
 */
export function recommend({ tools, purposeId, conditions = {}, today, profile: profileName = 'general' }) {
  const profile = PROFILES[profileName];
  if (!profile) throw new TypeError(`profile이 틀렸습니다: ${profileName}`);
  if (!Array.isArray(tools)) throw new TypeError('tools는 배열이어야 합니다');
  if (typeof purposeId !== 'string' || !profile.purposeId.test(purposeId)) {
    throw new TypeError(`purposeId 형식이 틀렸습니다: ${purposeId}`);
  }
  if (!isValidDate(today)) throw new TypeError(`today 형식이 틀렸습니다: ${today}`);

  const candidates = tools.filter((tool) => (tool.purposes[purposeId] ?? 0) >= 1);
  const active = { ...conditions };
  const relaxed = [];

  let results = rank(candidates, purposeId, active, today, profile);
  for (const key of profile.relaxOrder) {
    if (results.length > 0) break;
    if (!active[key]) continue;
    active[key] = false;
    relaxed.push(key);
    results = rank(candidates, purposeId, active, today, profile);
  }

  if (results.length === 0) return { results, relaxed: [], notice: profile.noneNotice };

  let notice = null;
  if (relaxed.length > 0) {
    notice = `${relaxed.map((key) => profile.labels[key]).join(', ')} 조건을 빼면 이런 선택지가 있어요`;
  }

  return { results, relaxed, notice };
}

/**
 * 섹션이 있는 profile(dev)은 섹션마다 따로 추천한다 (조건 완화·안내도 섹션마다).
 * 섹션이 없는 profile(general)은 섹션 하나({ key: null })로 돌려준다.
 * @returns {{ key: string|null, results: object[], relaxed: string[], notice: string|null }[]}
 */
export function recommendSections(input) {
  const profile = PROFILES[input.profile ?? 'general'];
  if (!profile) throw new TypeError(`profile이 틀렸습니다: ${input.profile}`);
  if (!profile.sections) return [{ key: null, ...recommend(input) }];
  if (!Array.isArray(input.tools)) throw new TypeError('tools는 배열이어야 합니다');
  return profile.sections.map((key) => ({
    key,
    ...recommend({ ...input, tools: input.tools.filter((t) => t.section === key) }),
  }));
}
