// 데이터 값을 화면 문구로 바꾸는 순수 함수. 점수 계산은 하지 않는다 (recommend.js 담당).

export const UNKNOWN = '확인 필요';

const PLATFORM_LABELS = {
  web: '웹사이트',
  ios: '아이폰 앱',
  android: '안드로이드 앱',
  windows: '윈도우 프로그램',
  mac: '맥 프로그램',
};

const KOREAN_LABELS = {
  1: '메뉴·결과 모두 영어 위주',
  2: '결과는 한국어 가능',
  3: '메뉴까지 한국어, 품질 좋음',
};

const BILLING_PREFIX = { monthly: '월 ', yearly: '연 ', unknown: '' };

export function freeText(price) {
  return price.free ? '돼요' : '안 돼요';
}

export function paidText(price) {
  if (price.paid_from_usd === null) return UNKNOWN;
  return `${BILLING_PREFIX[price.billing] ?? ''}${price.paid_from_usd.toLocaleString('ko-KR')}달러부터`;
}

export function freeLimitText(price) {
  return price.free ? price.free_limit : '무료 없음';
}

export function koreanText(korean) {
  return KOREAN_LABELS[korean] ?? UNKNOWN;
}

/** 학습 정책. 확인 안 된 부분은 숨기지 않고 "확인 필요"로 적는다. */
export function privacyText(privacy) {
  const { trains_on_input_default: trains, opt_out: optOut } = privacy;
  if (trains === 'no') return '기본으로 학습에 쓰지 않아요';
  if (trains === 'yes') {
    if (optOut === 'yes') return '학습에 쓰지만 설정에서 끌 수 있어요';
    if (optOut === 'no') return '학습에 쓰고, 끌 수 없어요';
    return `학습에 써요 (끄는 방법 ${UNKNOWN})`;
  }
  if (optOut === 'yes') return `설정에서 끌 수 있어요 (기본 설정 ${UNKNOWN})`;
  if (optOut === 'no') return `끌 수 없어요 (기본 설정 ${UNKNOWN})`;
  return UNKNOWN;
}

export function platformsText(platforms) {
  return platforms.map((p) => PLATFORM_LABELS[p] ?? p).join(', ');
}

export function formatDate(date) {
  const [y, m, d] = date.split('-');
  return `${y}년 ${Number(m)}월 ${Number(d)}일`;
}

/** 브라우저 시계 기준 오늘 날짜 "YYYY-MM-DD" (현지 시간). */
export function localToday(now = new Date()) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

const LOGIN_LABELS = {
  google: '구글 계정',
  apple: '애플 계정',
  microsoft: '마이크로소프트 계정',
  kakao: '카카오 계정',
  naver: '네이버 계정',
  email: '이메일',
  phone: '휴대폰 번호',
  none: '가입 없이 바로 사용',
};

export function loginText(login) {
  return login.map((v) => LOGIN_LABELS[v] ?? v).join(', ');
}

// ---- 변경 이력 문구 ----
const YES_NO = { yes: '예', no: '아니요', unknown: UNKNOWN };
const FIELD_LABELS = {
  name: '이름',
  url: '공식 사이트 주소',
  one_liner: '한 줄 설명',
  'price.free': '무료로 쓰기',
  'price.free_limit': '무료 한도',
  'price.paid_from_usd': '유료 가격',
  'price.billing': '결제 주기',
  korean: '한국어',
  'privacy.trains_on_input_default': '입력 내용을 기본으로 학습에 씀',
  'privacy.opt_out': '학습 끄기 가능',
  'privacy.note': '학습 정책 메모',
  platforms: '사용 기기',
  login: '가입 방법',
  start_steps: '시작 방법',
  cautions: '주의할 점',
  sources: '출처',
  last_verified: '확인 날짜',
};
// 길어서 전/후 값을 다 보여주지 않는 항목
const LONG_FIELDS = new Set(['url', 'one_liner', 'privacy.note', 'start_steps', 'cautions', 'sources']);
const VALUE_FORMATS = {
  'price.free': (v) => freeText({ free: v }),
  'price.paid_from_usd': (v) => `${v.toLocaleString('ko-KR')}달러`,
  'price.billing': (v) => ({ monthly: '매달', yearly: '매년', unknown: UNKNOWN })[v] ?? v,
  korean: koreanText,
  'privacy.trains_on_input_default': (v) => YES_NO[v] ?? v,
  'privacy.opt_out': (v) => YES_NO[v] ?? v,
  platforms: platformsText,
  login: loginText,
  last_verified: formatDate,
};

function changeValue(field, value) {
  if (value === null || value === undefined) return '없음';
  if (field.startsWith('purposes.')) return `${value}점`;
  return String((VALUE_FORMATS[field] ?? ((v) => v))(value));
}

/** 변경 이력 한 줄. purposes는 data/purposes.json (적합도 항목에 목적 이름을 붙인다) */
export function changeText(change, purposes = []) {
  if (change.type === 'added') return `${change.name} 추가`;
  if (change.type === 'removed') return `${change.name} 빠짐`;
  const { field } = change;
  let label = FIELD_LABELS[field] ?? field;
  if (field.startsWith('purposes.')) {
    const purpose = purposes.find((p) => p.id === field.slice('purposes.'.length));
    label = `'${purpose ? purpose.label : field}' 적합도`;
  }
  if (LONG_FIELDS.has(field) || !(field in FIELD_LABELS || field.startsWith('purposes.'))) {
    return `${change.name}: ${label} 내용이 바뀌었어요`;
  }
  return `${change.name}: ${label} ${changeValue(field, change.before)} → ${changeValue(field, change.after)}`;
}
