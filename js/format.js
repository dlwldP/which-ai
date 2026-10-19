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
