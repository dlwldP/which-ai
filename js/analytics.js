// 쿠키 없는 익명 방문 통계 (GoatCounter, 2026-11-18 J 결정).
// 외부 스크립트를 불러오지 않고, GoatCounter의 /count 주소에 이미지 요청 하나만 보낸다.
// 쿠키·브라우저 저장 공간을 쓰지 않는다. 광고 차단기에 막혀도 사이트는 그대로 돈다.
// 무엇을 보내는지 바뀌면 js/pages.js 개인정보 처리방침부터 고친다.

/** GoatCounter 사이트 코드 (https://<코드>.goatcounter.com). 비어 있으면 아무것도 보내지 않는다. */
export const GOATCOUNTER_CODE = 'jylee2';

const MAX_QUERY = 30;

/**
 * 검색어를 통계로 보내도 되는 모양으로 다듬는다. 보내면 안 되면 null.
 * 이메일·전화번호·긴 숫자·주소처럼 개인정보일 수 있는 글은 보내지 않는다.
 */
export function cleanQuery(raw) {
  const q = String(raw ?? '').normalize('NFC').replace(/\s+/g, ' ').trim().toLowerCase();
  if (!q) return null;
  if (/@/.test(q)) return null; // 이메일
  if (/\d[\d\s-]{5,}\d/.test(q)) return null; // 전화번호·계좌·주민번호 같은 긴 숫자
  if (/https?:|www\./.test(q)) return null; // 주소
  return [...q].slice(0, MAX_QUERY).join('');
}

/** #/p/P04?free=1 → { path: 'p/P04', params } */
export function parseRoute(hash) {
  const [path, query = ''] = String(hash ?? '').replace(/^#\/?/, '').split('?');
  return { path, params: new URLSearchParams(query) };
}

/**
 * 화면 하나를 볼 때 보낼 이벤트 목록 (페이지 조회 말고 따로 세는 것).
 * prev: 직전 화면의 params (처음이면 null). 새로 켠 필터만 센다.
 * results: 검색 결과 개수 (검색 화면일 때)
 */
export function routeEvents({ path, params }, prev = null, results = null) {
  const events = [];
  const purpose = /^p\/([\w-]+)$/.exec(path);
  if (purpose) events.push({ name: `분야/${purpose[1]}` });
  for (const f of ['free', 'web', 'install']) if (params.has(f) && !prev?.has(f)) events.push({ name: `필터/${f}` });
  if (path === 'all' && params.has('q')) {
    const q = cleanQuery(params.get('q'));
    if (q) events.push({ name: results === 0 ? `검색-결과없음/${q}` : `검색/${q}` });
  }
  return events;
}

/** /count 요청 주소. GoatCounter 문서의 p(경로) t(제목) r(들어온 곳) e(이벤트) q(유입 표시) s(화면 크기) rnd(캐시 방지) */
export function countUrl(code, { path, title = '', referrer = '', event = false, query = '', screen = '' }) {
  const u = new URLSearchParams({ p: path });
  if (title) u.set('t', title);
  if (referrer) u.set('r', referrer);
  if (event) u.set('e', 'true');
  if (query) u.set('q', query);
  if (screen) u.set('s', screen);
  u.set('rnd', Math.random().toString(36).slice(2, 8));
  return `https://${code}.goatcounter.com/count?${u}`;
}

// ---- 브라우저에서만 쓰는 부분 ----

function enabled() {
  if (!GOATCOUNTER_CODE || typeof window === 'undefined') return false;
  if (navigator.webdriver) return false; // 자동화 브라우저(테스트·봇)
  return !/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname); // 내 컴퓨터에서 띄운 건 세지 않음
}

function send(params) {
  if (!enabled()) return;
  try {
    const img = new Image();
    img.referrerPolicy = 'no-referrer';
    img.src = countUrl(GOATCOUNTER_CODE, params);
  } catch { /* 통계가 실패해도 사이트는 그대로 */ }
}

let first = true;
let prevParams = null;

/** 화면이 바뀔 때마다 부른다. results: 검색 화면이면 결과 개수 */
export function trackRoute(results = null) {
  if (!enabled()) return;
  const route = parseRoute(location.hash);
  const base = location.pathname.replace(/index\.html$/, '');
  send({
    path: `${base}${route.path}`,
    title: document.title,
    // 첫 화면에서만 어디서 왔는지(검색·인스타그램 등)와 utm 표시를 보낸다
    referrer: first ? document.referrer : '',
    query: first ? location.search : '',
    screen: first ? `${screen.width},${screen.height},${devicePixelRatio || 1}` : '',
  });
  for (const ev of routeEvents(route, prevParams, results)) send({ path: `${base}${ev.name}`, title: ev.name, event: true });
  first = false;
  prevParams = route.params;
}

/** 공식 사이트·저장소·다른 서비스로 나가는 클릭 */
export function installOutboundTracking() {
  if (!enabled()) return;
  document.addEventListener('click', (ev) => {
    const a = ev.target.closest?.('a[data-out]');
    if (!a) return;
    const base = location.pathname.replace(/index\.html$/, '');
    send({ path: `${base}나감/${a.dataset.out}`, title: a.dataset.outName || a.dataset.out, event: true });
  });
}
