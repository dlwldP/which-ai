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

// ---- 개발자용 (docs/개발자용_기획서.md) ----
const FORM_LABELS = {
  web: '웹',
  desktop: '데스크톱 앱',
  ide_extension: 'IDE 확장',
  cli: 'CLI',
  library: '라이브러리',
  cloud_service: '클라우드 서비스',
  self_host: '셀프 호스팅',
};
const AI_NATIVE_LABELS = { yes: 'AI가 핵심', partial: 'AI 기능 일부', no: 'AI 툴 아님 (AI와 같이 쓰는 도구)' };

export function formsText(forms) {
  return forms.map((f) => FORM_LABELS[f] ?? f).join(', ');
}

export function aiNativeText(aiNative) {
  return AI_NATIVE_LABELS[aiNative] ?? UNKNOWN;
}

export function openSourceText(openSource) {
  return openSource ? '예' : '아니요';
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

// ---- 카드 요약 배지 (tone: good / warn / plain) ----
export function freeBadge(price) {
  return price.free ? { text: '무료로 시작', tone: 'good' } : { text: '유료만', tone: 'plain' };
}

/** 학습 정책 한눈에 보기. good은 recommend.js의 isSecure와 같은 기준(기본으로 안 씀, 또는 끌 수 있음) */
export function privacyBadge(privacy, subject = '') {
  const { trains_on_input_default: trains, opt_out: optOut } = privacy;
  if (trains === 'no') return { text: `${subject}학습에 안 씀`, tone: 'good' };
  if (optOut === 'yes') return { text: `${subject}학습 끌 수 있음`, tone: 'good' };
  if (trains === 'yes') return { text: `${subject}학습에 씀`, tone: 'warn' };
  return { text: `${subject}학습 정책 ${UNKNOWN}`, tone: 'warn' };
}

export function koreanBadge(korean) {
  if (korean === 3) return { text: '한국어 좋음', tone: 'good' };
  if (korean === 2) return { text: '한국어 결과 가능', tone: 'plain' };
  if (korean === 1) return { text: '영어 위주', tone: 'plain' };
  return { text: `한국어 ${UNKNOWN}`, tone: 'warn' };
}

export function openSourceBadge(openSource) {
  return openSource ? { text: '오픈소스', tone: 'good' } : { text: '오픈소스 아님', tone: 'plain' };
}
