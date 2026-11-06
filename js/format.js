// 데이터 값을 화면 문구로 바꾸는 순수 함수.

export const UNKNOWN = '확인 필요';

/**
 * 가격 한눈에 보기. price = { free: true|false|null, paid: true|false|null }
 *   free: 무료로 쓸 수 있는지, paid: 유료 요금제가 있는지 (null = 확인 못 함)
 */
export function priceBadge(price) {
  const { free, paid } = price;
  if (free === true && paid === true) return { text: '무료 + 유료', tone: 'good' };
  if (free === true && paid === false) return { text: '무료', tone: 'good' };
  if (free === true) return { text: '무료로 시작', tone: 'good' };
  if (free === false) return { text: '유료', tone: 'plain' };
  return { text: `가격 ${UNKNOWN}`, tone: 'warn' };
}

// 쓰는 방법. 비개발자용은 쉬운 말로, 개발자용은 익숙한 말로 (modes.js useLabels)
export const USE_LABELS = {
  general: { web: '웹사이트에서 바로', app: '앱 설치', install: '직접 설치 (개발 지식 필요)', api: '다른 프로그램에 연결 (개발자용)' },
  dev: { web: '웹에서 바로', app: '앱·확장 설치', install: '코드로 설치 (git·pip·npm)', api: 'API' },
};
export const USES = ['web', 'app', 'install', 'api'];

export function useText(use, mode = 'general') {
  const labels = USE_LABELS[mode] ?? USE_LABELS.general;
  return USES.filter((u) => use.includes(u)).map((u) => labels[u]);
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
