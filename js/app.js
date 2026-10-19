// 화면 렌더링과 라우팅. 주소(#/...)로 화면을 나눠서 뒤로 가기와 링크 공유가 그대로 동작한다.
//   #/                       홈 (어떤 일을 맡기고 싶어요?)
//   #/p/<목적>?조건           조건 선택
//   #/p/<목적>/result?조건    추천 결과
// 조건: free=1 (무료만), secure=1 (보안 중요), korean=1 (한국어 중요), mobile=1 (휴대폰)
// 주소에 ?demo가 있으면 (예: index.html?demo#/) 실제 데이터 대신 예시 데이터를 쓴다.
// 점수 계산은 하지 않는다. 추천은 recommend.js에만 맡긴다.
import { recommend } from './recommend.js';
import {
  UNKNOWN, formatDate, freeLimitText, freeText, koreanText, localToday, paidText, platformsText, privacyText,
} from './format.js';

const app = document.getElementById('app');
let data; // { tools, purposes, demo }

// 시나리오 4: "뭘 해야 할지 모르겠어요" 바로가기 (docs/decisions.md)
const STARTER_PURPOSES = ['P01', 'P03', 'P07'];

const CONDITIONS = [
  { key: 'freeOnly', param: 'free', icon: '🆓', title: '무료만', desc: '무료로 쓸 수 있는 툴만 보여줘요' },
  { key: 'securityImportant', param: 'secure', icon: '🔒', title: '회사 자료라 보안 중요', desc: '입력한 내용을 학습에 쓰지 않거나, 끌 수 있는 툴만 보여줘요' },
  { key: 'koreanImportant', param: 'korean', icon: '🇰🇷', title: '한국어 중요', desc: '한국어가 잘 되는 툴을 앞에 보여줘요' },
  { key: 'mobile', param: 'mobile', icon: '📱', title: '휴대폰에서 쓸 거예요', desc: '아이폰이나 안드로이드 앱이 있는 툴만 보여줘요' },
];
const CHIP_LABELS = { freeOnly: '무료만', securityImportant: '보안 중요', koreanImportant: '한국어 중요', mobile: '휴대폰' };

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/** "확인 필요"가 들어간 값은 눈에 띄게 표시한다. */
const valueHtml = (text) => (text.includes(UNKNOWN) ? `<span class="unknown">${esc(text)}</span>` : esc(text));

async function loadJson(path) {
  const res = await fetch(path, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`${path} 불러오기 실패 (${res.status})`);
  return res.json();
}

function readConditions(params) {
  return Object.fromEntries(CONDITIONS.map((c) => [c.key, params.get(c.param) === '1']));
}

function conditionQuery(conditions) {
  const params = new URLSearchParams();
  for (const c of CONDITIONS) if (conditions[c.key]) params.set(c.param, '1');
  const q = params.toString();
  return q ? `?${q}` : '';
}

const purposeRow = (p, href) => `
  <li><a class="row" href="${href}">
    <span class="ico" aria-hidden="true">${esc(p.icon)}</span>
    <span class="txt"><span class="ttl">${esc(p.label)}</span><span class="dsc">${esc(p.examples)}</span></span>
    <span class="chev" aria-hidden="true">›</span>
  </a></li>`;

// ---- 홈 ----
function renderHome() {
  document.title = 'AI 뭐 써? · 하고 싶은 일에 맞는 AI 툴 추천';
  const starters = STARTER_PURPOSES.map((id) => data.purposes.find((p) => p.id === id)).filter(Boolean);
  app.innerHTML = `
    <section class="hero">
      <p class="eyebrow">AI 툴 선택 도우미</p>
      <h1>어떤 일을 AI에게<br>맡기고 싶어요?</h1>
      <p class="sub">고르면 맞는 툴 2~3개를 이유와 함께 비교해드려요.</p>
    </section>

    <section class="card">
      <h2 class="card-title">하고 싶은 일</h2>
      <ul class="list">${data.purposes.map((p) => purposeRow(p, `#/p/${p.id}`)).join('')}</ul>
    </section>

    <section class="card">
      <h2 class="card-title">뭘 해야 할지 모르겠어요</h2>
      <p class="card-sub">처음이라면 많이 쓰는 이 세 가지부터 해보세요</p>
      <ul class="list">${starters.map((p) => purposeRow(p, `#/p/${p.id}/result`)).join('')}</ul>
    </section>

    <div class="trust">
      <span>회원가입 없이 무료</span>
      <span>광고·제휴 없이 정해진 규칙으로 추천</span>
      <span>모든 정보에 확인 날짜 표시</span>
    </div>`;
}

// ---- 조건 선택 ----
function renderConditions(purpose, conditions) {
  document.title = `${purpose.label} · AI 뭐 써?`;
  app.innerHTML = `
    <div class="page-head">
      <a class="back" href="#/">‹ 처음으로</a>
      <p class="step">${esc(purpose.icon)} ${esc(purpose.label)}</p>
      <h1 class="page-title">중요한 게 있나요?</h1>
      <p class="page-sub">없으면 고르지 않고 넘어가도 돼요.</p>
    </div>
    <form id="conditions">
      <section class="card">
        <fieldset class="choice-list">
          <legend class="sr-only">조건</legend>
          ${CONDITIONS.map((c) => `
            <label class="choice">
              <input type="checkbox" name="${c.param}" value="1" ${conditions[c.key] ? 'checked' : ''}>
              <span class="ico" aria-hidden="true">${c.icon}</span>
              <span class="txt"><span class="ttl">${esc(c.title)}</span><span class="dsc">${esc(c.desc)}</span></span>
              <span class="check" aria-hidden="true">✓</span>
            </label>`).join('')}
        </fieldset>
      </section>
      <div class="bottom-cta"><button class="btn btn-primary btn-block" type="submit">추천 받기</button></div>
    </form>`;
  app.querySelector('#conditions').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const chosen = Object.fromEntries(CONDITIONS.map((c) => [c.key, form.has(c.param)]));
    location.hash = `#/p/${purpose.id}/result${conditionQuery(chosen)}`;
  });
}

// ---- 추천 결과 ----
function compareTableHtml(results) {
  const rows = [
    ['무료로 쓰기', (t) => freeText(t.price)],
    ['무료 한도', (t) => freeLimitText(t.price)],
    ['유료 가격', (t) => paidText(t.price)],
    ['한국어', (t) => koreanText(t.korean)],
    ['학습 정책', (t) => privacyText(t.privacy)],
    ['사용 기기', (t) => platformsText(t.platforms)],
  ];
  return `
    <section class="card">
      <h2 class="card-title">한눈에 비교</h2>
      <div class="table-wrap">
        <table class="compare">
          <thead><tr><td></td>${results.map((r) => `<th scope="col">${esc(r.tool.name)}</th>`).join('')}</tr></thead>
          <tbody>
            ${rows.map(([label, value]) => `
              <tr><th scope="row">${label}</th>${results.map((r) => `<td>${valueHtml(value(r.tool))}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>
    </section>`;
}

function toolCardHtml(r, index) {
  const t = r.tool;
  const cautions = [...t.cautions, ...(t.privacy.note ? [t.privacy.note] : [])];
  return `
    <section class="card">
      <div class="tool-head">
        <span class="tool-rank">${index + 1}</span>
        <h2 class="tool-name">${esc(t.name)}</h2>
        ${r.stale ? '<span class="tag tag-warn">확인 필요</span>' : ''}
      </div>
      <p class="tool-one-liner">${esc(t.one_liner)}</p>
      <ul class="reasons" aria-label="추천 이유">${r.reasons.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>

      <h3 class="section-label">이렇게 시작해요</h3>
      <ol class="steps">${t.start_steps.map((s) => `<li><span>${esc(s)}</span></li>`).join('')}</ol>

      ${cautions.length ? `
        <h3 class="section-label">주의할 점</h3>
        <ul class="cautions">${cautions.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>` : ''}

      <div class="tool-actions">
        <a class="btn btn-soft btn-block" href="${esc(t.url)}" target="_blank" rel="noopener">공식 사이트 열기 ↗</a>
      </div>

      <details class="verified">
        <summary>마지막 확인 ${esc(formatDate(t.last_verified))}${r.stale ? ' (90일 넘게 지나서 다시 확인이 필요해요)' : ''} · <span class="src-toggle">출처 보기</span></summary>
        <ul>${t.sources.map((u) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(u)}</a></li>`).join('')}</ul>
      </details>
    </section>`;
}

function renderResult(purpose, conditions) {
  document.title = `${purpose.label} 추천 · AI 뭐 써?`;
  const { results, notice } = recommend({ tools: data.tools, purposeId: purpose.id, conditions, today: localToday() });

  const chips = CONDITIONS.map((c) => {
    const next = { ...conditions, [c.key]: !conditions[c.key] };
    return `<a class="chip" role="button" aria-pressed="${conditions[c.key]}" href="#/p/${purpose.id}/result${conditionQuery(next)}">${esc(CHIP_LABELS[c.key])}</a>`;
  }).join('');

  let body;
  if (data.tools.length === 0) {
    body = `<section class="card"><p class="empty"><strong>아직 준비 중이에요</strong>툴 정보를 공식 페이지에서 하나씩 확인하고 있어요.</p></section>`;
  } else if (results.length === 0) {
    body = `<section class="card"><p class="empty"><strong>${esc(notice)}</strong>조건을 바꿔서 다시 찾아보세요.</p></section>`;
  } else {
    body = `
      ${notice ? `<p class="notice" role="status">${esc(notice)}</p>` : ''}
      ${compareTableHtml(results)}
      ${results.map(toolCardHtml).join('')}`;
  }

  app.innerHTML = `
    <div class="page-head">
      <a class="back" href="#/p/${purpose.id}${conditionQuery(conditions)}">‹ 조건 다시 고르기</a>
      <p class="step">${esc(purpose.icon)} ${esc(purpose.label)}</p>
      <h1 class="page-title">이 툴들을 추천해요</h1>
    </div>
    <div class="chips" role="group" aria-label="조건">
      <span class="chips-label">조건 (누르면 바로 바뀌어요)</span>
      ${chips}
    </div>
    ${body}`;
}

function route() {
  const [path, query = ''] = location.hash.replace(/^#\/?/, '').split('?');
  const params = new URLSearchParams(query);
  const [section, purposeId, view] = path.split('/');
  const purpose = section === 'p' && data.purposes.find((p) => p.id === purposeId);
  if (purpose && view === 'result') renderResult(purpose, readConditions(params));
  else if (purpose) renderConditions(purpose, readConditions(params));
  else renderHome();
  window.scrollTo(0, 0);
}

async function main() {
  try {
    const demo = new URLSearchParams(location.search).has('demo');
    const [tools, purposes] = await Promise.all([
      loadJson(demo ? 'data/demo-tools.json' : 'data/tools.json'),
      loadJson('data/purposes.json'),
    ]);
    data = { tools, purposes, demo };
    document.getElementById('demo-banner').hidden = !demo;
    window.addEventListener('hashchange', route);
    route();
  } catch (err) {
    app.innerHTML = `<p class="error">데이터를 불러오지 못했어요: ${esc(err.message)}</p>`;
    console.error(err);
  }
}

main();
