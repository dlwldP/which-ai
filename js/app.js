// 화면 렌더링과 라우팅. 주소(#/...)로 화면을 나눠서 뒤로 가기와 링크 공유가 그대로 동작한다.
//   #/                       홈 (어떤 일을 맡기고 싶어요?)
//   #/p/<목적>/result?조건    추천 결과 (조건은 결과 위 칩으로 바꾼다. #/p/<목적> 도 결과로 간다)
//   #/t/<툴 id>              툴 상세
//   #/glossary?term=<용어>   용어집
//   #/changes                변경 이력
// 조건은 모드마다 다르다 (js/modes.js). 예: 비개발자용 free=1, secure=1 / 개발자용 free=1, oss=1
// 주소에 ?demo가 있으면 (예: index.html?demo#/) 실제 데이터 대신 예시 데이터를 쓴다.
// 점수 계산은 하지 않는다. 추천은 recommend.js에만 맡긴다.
import { recommend, isStale } from './recommend.js';
import { UNKNOWN, changeText, formatDate, localToday, reportUrl } from './format.js';
import { glossarize, termIn, termMatcher } from './glossary.js';
import { MODES } from './modes.js';

// <body data-mode="dev"> 이면 개발자용
const mode = MODES[document.body.dataset.mode] ?? MODES.general;
const W = mode.toolWord; // "툴" 또는 "도구"

const app = document.getElementById('app');
let data; // { tools, purposes, glossary, changelog, demo }
let matcher = null; // 용어집 단어 찾기
let routedOnce = false; // 사이트 안에서 이동한 적이 있으면 "뒤로"가 브라우저 뒤로 가기로 동작한다

const CONDITIONS = mode.conditions;
const FACTS = mode.facts;
const FIT_LABELS = { 3: `이 일의 대표 ${W}예요`, 2: '이 일에 잘 맞아요', 1: '이 일에도 쓸 수 있어요' };

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/** 이스케이프 + 용어집 단어에 밑줄 (설명 문장에만 쓴다) */
const g = (text) => glossarize(esc(text), matcher);

/** "확인 필요"가 들어간 값은 눈에 띄게 표시한다. 값에는 밑줄을 치지 않는다. */
const valueHtml = (text) => (text.includes(UNKNOWN) ? `<span class="unknown">${esc(text)}</span>` : esc(text));

async function loadJson(path, fallback) {
  const res = await fetch(path, { cache: 'no-cache' });
  if (!res.ok) {
    if (fallback !== undefined) return fallback;
    throw new Error(`${path} 불러오기 실패 (${res.status})`);
  }
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

const purposeRow = (p, href, desc = p.examples) => `
  <li><a class="row" href="${href}">
    <span class="ico" aria-hidden="true">${esc(p.icon)}</span>
    <span class="txt"><span class="ttl">${esc(p.label)}</span><span class="dsc">${esc(desc)}</span></span>
    <span class="chev" aria-hidden="true">›</span>
  </a></li>`;

const linkRow = (icon, title, desc, href) => `
  <li><a class="row" href="${href}">
    <span class="ico" aria-hidden="true">${icon}</span>
    <span class="txt"><span class="ttl">${esc(title)}</span><span class="dsc">${esc(desc)}</span></span>
    <span class="chev" aria-hidden="true">›</span>
  </a></li>`;

/** 사이트 안에서 왔으면 브라우저 뒤로 가기, 바로 들어왔으면 fallback 주소로 */
const backLink = (fallback, label = '뒤로') => `<a class="back" href="${fallback}" data-back>‹ ${esc(label)}</a>`;

/** 비교 항목 이름. 용어집에 있는 말이면 밑줄 대신 작은 ⓘ 버튼을 붙인다. */
function labelHtml(label) {
  const term = termIn(label, matcher);
  if (!term) return esc(label);
  return `${esc(label)} <button type="button" class="term term-icon" data-term="${esc(term)}" aria-label="${esc(term)} 풀이 보기">ⓘ</button>`;
}

const factHtml = ([label, value], t) => `<dl class="fact"><dt>${labelHtml(label)}</dt><dd>${valueHtml(value(t))}</dd></dl>`;

const badgesHtml = (t) => `
  <ul class="badges" aria-label="한눈에 보기">${mode.badges(t)
    .map((b) => `<li class="badge badge-${b.tone}">${esc(b.text)}</li>`).join('')}</ul>`;

const cautionsOf = (t) => [...t.cautions, ...(t.privacy.note ? [t.privacy.note] : [])];

/** AI 툴이 아닌 도구 표시 (개발자용, ai_native: "no") */
const notAiTag = (t) => (t.ai_native === 'no' ? '<span class="tag tag-plain">AI와 같이 쓰는 도구</span>' : '');
const staleTag = (stale) => (stale ? '<span class="tag tag-warn">확인 필요</span>' : '');

const reportLink = (t) =>
  `<a class="report-link" href="${esc(reportUrl(t.name, mode.reportSite))}" target="_blank" rel="noopener">정보가 틀려요 ↗</a>`;

const sourcesHtml = (t) =>
  `<ul class="sources">${t.sources.map((u) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(u)}</a></li>`).join('')}</ul>`;

const officialButton = (t, cls = 'btn-primary') =>
  `<a class="btn ${cls} btn-block" href="${esc(t.url)}" target="_blank" rel="noopener">공식 사이트 열기 ↗</a>`;

/** 실제 데이터가 아직 없을 때: 같은 화면을 예시 데이터로 볼 수 있게 안내 */
const demoInvite = () => (data.demo || data.tools.length > 0 ? '' : `
  <section class="card invite" role="status">
    <p class="invite-text"><strong>아직 준비 중이에요.</strong> ${esc(mode.emptyText)}</p>
    <a class="btn btn-outline" href="?demo${esc(location.hash || '#/')}">예시로 둘러보기 ›</a>
  </section>`);

// ---- 홈 ----
// 맨 위는 서비스 소개 카드 묶음(한 화면에 들어가게), 그 아래 목적 타일.
function introHtml() {
  const dates = data.tools.map((t) => t.last_verified).sort();
  const stat = (num, label) => `<div class="stat"><span class="stat-num">${num}</span><span class="stat-label">${esc(label)}</span></div>`;
  return `
    <section class="intro" aria-label="${esc(mode.siteName)} 소개">
      <div class="card intro-what">
        <p class="eyebrow">${esc(mode.eyebrow)}</p>
        <h1>${mode.heroHtml}</h1>
        <p class="sub">${esc(mode.heroSub)}</p>
        <button type="button" class="btn btn-primary intro-go" data-scroll="purposes-title">하고 싶은 일 고르기 ↓</button>
      </div>
      <div class="card intro-card intro-how">
        <h2 class="intro-title">이렇게 써요</h2>
        <ol class="intro-steps">${mode.introSteps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
      </div>
      <div class="card intro-card">
        <h2 class="intro-title">이걸 비교해요</h2>
        <ul class="intro-list">${mode.introChecks.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
      </div>
      <div class="card intro-card">
        <h2 class="intro-title">믿을 수 있게</h2>
        <ul class="intro-list intro-trust">${mode.trust.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
      </div>
      <div class="card intro-card intro-stats">
        <h2 class="intro-title">한눈에</h2>
        <div class="stats">
          ${stat(data.purposes.length, '할 수 있는 일')}
          ${stat(data.tools.length, `확인한 ${W}`)}
          ${stat(dates.length ? esc(formatDate(dates.at(-1)).replace(/^\d{4}년 /, '')) : '준비 중', '최근 확인')}
        </div>
      </div>
    </section>`;
}

function renderHome() {
  document.title = mode.homeTitle;
  const starters = new Set(mode.starters);
  app.innerHTML = `
    ${introHtml()}

    ${demoInvite()}

    <section class="purposes" aria-labelledby="purposes-title">
      <h2 class="section-title" id="purposes-title">하고 싶은 일</h2>
      <ul class="tiles">${data.purposes.map((p) => `
        <li><a class="tile" href="#/p/${p.id}/result">
          ${starters.has(p.id) ? '<span class="tile-flag">처음이라면</span>' : ''}
          <span class="tile-ico" aria-hidden="true">${esc(p.icon)}</span>
          <span class="tile-ttl">${esc(p.label)}</span>
          <span class="tile-dsc">${esc(p.examples)}</span>
        </a></li>`).join('')}</ul>
    </section>

    <section class="more" aria-labelledby="more-title">
      <h2 class="section-title" id="more-title">더 알아보기</h2>
      <ul class="more-links">
        ${linkRow('📖', '용어집', mode.glossaryHint, '#/glossary')}
        ${linkRow('🗓️', '변경 이력', `${W} 정보가 언제 어떻게 바뀌었는지`, '#/changes')}
      </ul>
    </section>`;
}

// ---- 추천 결과 ----
// 카드는 요약(머리, 대표 이유, 배지, 버튼)만 보이고 나머지는 "자세히 보기"에 접는다.
// 휴대폰은 세로로 쌓고, 넓은 화면은 3개를 나란히 놓아 칸을 CSS subgrid로 맞춘다 (칸 수 5 = styles.css .cards).
function toolCardHtml(r, index, all) {
  const t = r.tool;
  const cautions = cautionsOf(t);
  const [topReason, ...moreReasons] = r.reasons;
  return `
    <article class="tool-card" aria-label="${index + 1}번째 추천 / 전체 ${all.length}개">
      <div class="tool-head">
        <div class="tool-title">
          <span class="tool-rank">${index + 1}</span>
          <h2 class="tool-name"><a href="#/t/${esc(t.id)}">${esc(t.name)}</a></h2>
          ${staleTag(r.stale)}${notAiTag(t)}
        </div>
        <p class="tool-one-liner">${g(t.one_liner)}</p>
      </div>
      <p class="top-reason">${g(topReason)}</p>
      ${badgesHtml(t)}
      <div class="tool-actions">${officialButton(t, 'btn-outline')}</div>
      <details class="card-more">
        <summary>자세히 보기</summary>
        ${moreReasons.length ? `<ul class="reasons" aria-label="다른 추천 이유">${moreReasons.map((s) => `<li>${g(s)}</li>`).join('')}</ul>` : ''}
        <div class="facts">${FACTS.map((f) => factHtml(f, t)).join('')}</div>
        <h3 class="section-label">이렇게 시작해요</h3>
        <ol class="steps">${t.start_steps.map((s) => `<li><span>${g(s)}</span></li>`).join('')}</ol>
        ${cautions.length ? `
          <h3 class="section-label">주의할 점</h3>
          <ul class="cautions">${cautions.map((s) => `<li>${g(s)}</li>`).join('')}</ul>` : ''}
        <p class="verified-line">마지막 확인 ${esc(formatDate(t.last_verified))}${r.stale ? ' · 90일 넘게 지나서 다시 확인이 필요해요' : ''}</p>
        <h3 class="section-label">출처</h3>
        ${sourcesHtml(t)}
        <p class="card-more-links"><a href="#/t/${esc(t.id)}">${W} 상세 보기 ›</a> ${reportLink(t)}</p>
      </details>
    </article>`;
}

const cardsHtml = (results) => `<div class="cards">${results.map(toolCardHtml).join('')}</div>`;

/** 넓은 화면에서는 카드 하나의 "자세히 보기"를 열면 나란히 놓인 카드도 같이 열어 같은 항목끼리 비교한다. */
function installDetailsSync() {
  const all = [...app.querySelectorAll('.card-more')];
  all.forEach((d) => d.addEventListener('toggle', () => {
    if (!matchMedia('(min-width: 900px)').matches) return;
    all.forEach((other) => { if (other.open !== d.open) other.open = d.open; });
  }));
}

function renderResult(purpose, conditions) {
  document.title = `${purpose.label} 추천 · ${mode.siteName}`;
  const { results, notice } = recommend({
    tools: data.tools, purposeId: purpose.id, conditions, today: localToday(), profile: mode.profile,
  });

  const chips = CONDITIONS.map((c) => {
    const next = { ...conditions, [c.key]: !conditions[c.key] };
    return `<a class="chip" role="button" aria-pressed="${conditions[c.key]}" title="${esc(c.title)}: ${esc(c.desc)}"
      href="#/p/${purpose.id}/result${conditionQuery(next)}"><span aria-hidden="true">${c.icon}</span> ${esc(c.chip)}</a>`;
  }).join('');
  const activeDescs = CONDITIONS.filter((c) => conditions[c.key]).map((c) => c.desc);

  let body;
  if (data.tools.length === 0) {
    body = demoInvite();
  } else if (results.length === 0) {
    body = `<section class="card"><p class="empty"><strong>${esc(notice)}</strong>조건을 바꿔서 다시 찾아보세요.</p></section>`;
  } else {
    body = `
      ${notice ? `<p class="notice" role="status">${esc(notice)}</p>` : ''}
      ${cardsHtml(results)}`;
  }

  app.innerHTML = `
    <div class="page-head">
      <a class="back" href="#/">‹ 처음으로</a>
      <p class="step">${esc(purpose.icon)} ${esc(purpose.label)}</p>
      <h1 class="page-title">이 ${W}들을 추천해요</h1>
    </div>
    ${data.tools.length ? `
      <div class="chips" role="group" aria-label="조건">
        <span class="chips-label">중요한 조건을 누르면 바로 다시 골라드려요</span>
        ${chips}
        ${activeDescs.length ? `<p class="chips-desc">${activeDescs.map(esc).join(' · ')}</p>` : ''}
      </div>` : ''}
    ${body}`;
  installDetailsSync();
}

// ---- 툴 상세 ----
// 넓은 화면: 왼쪽 요약(고정) + 오른쪽 내용. 휴대폰: 요약이 위, "공식 사이트 열기"는 화면 아래 고정.
function renderTool(t) {
  document.title = `${t.name} · ${mode.siteName}`;
  const stale = isStale(t, localToday());
  const cautions = cautionsOf(t);
  const fits = data.purposes
    .map((p) => ({ p, score: t.purposes[p.id] ?? 0 }))
    .filter((x) => x.score >= 1)
    .sort((a, b) => b.score - a.score || (a.p.id < b.p.id ? -1 : 1));
  const history = data.changelog
    .flatMap((entry) => entry.changes.filter((c) => c.tool_id === t.id).map((c) => ({ date: entry.date, c })));

  app.innerHTML = `
    <div class="page-head">${backLink('#/')}</div>
    <div class="detail">
      <aside class="card detail-summary">
        <p class="step">${W} 상세</p>
        <div class="tool-title">
          <h1 class="page-title">${esc(t.name)}</h1>
          ${staleTag(stale)}${notAiTag(t)}
        </div>
        <p class="tool-one-liner">${g(t.one_liner)}</p>
        ${badgesHtml(t)}
        <div class="tool-actions">
          ${officialButton(t)}
          ${t.repo_url ? `<a class="more-link" href="${esc(t.repo_url)}" target="_blank" rel="noopener">소스 코드 저장소 보기 ↗</a>` : ''}
        </div>
      </aside>

      <div class="detail-main">
        <section class="card">
          <h2 class="card-title">기본 정보</h2>
          <div class="facts">${[...FACTS, ...mode.detailFacts].map((f) => factHtml(f, t)).join('')}</div>
        </section>

        <section class="card">
          <h2 class="card-title">이렇게 시작해요</h2>
          <ol class="steps">${t.start_steps.map((s) => `<li><span>${g(s)}</span></li>`).join('')}</ol>
        </section>

        ${cautions.length ? `
          <section class="card">
            <h2 class="card-title">주의할 점</h2>
            <ul class="cautions">${cautions.map((s) => `<li>${g(s)}</li>`).join('')}</ul>
          </section>` : ''}

        ${t.learn?.length ? `
          <section class="card">
            <h2 class="card-title">배울 거리</h2>
            <p class="card-sub">공식 문서와 튜토리얼이에요</p>
            <ul class="list">${t.learn.map((l) => `
              <li><a class="row" href="${esc(l.url)}" target="_blank" rel="noopener">
                <span class="ico" aria-hidden="true">📘</span>
                <span class="txt"><span class="ttl">${esc(l.title)}</span><span class="dsc">${esc(new URL(l.url).hostname)}</span></span>
                <span class="chev" aria-hidden="true">↗</span>
              </a></li>`).join('')}</ul>
          </section>` : ''}

        <section class="card">
          <h2 class="card-title">이 ${W}로 할 수 있는 일</h2>
          <p class="card-sub">누르면 그 일에 맞는 다른 ${W}와 비교해볼 수 있어요</p>
          <ul class="list">${fits.map(({ p, score }) => purposeRow(p, `#/p/${p.id}/result`, FIT_LABELS[score])).join('')}</ul>
        </section>

        <section class="card">
          <h2 class="card-title">정보 확인</h2>
          <p class="card-sub">마지막 확인 ${esc(formatDate(t.last_verified))}${stale ? ' · 90일 넘게 지나서 다시 확인이 필요해요' : ''}</p>
          <h3 class="section-label">출처</h3>
          ${sourcesHtml(t)}
          <p class="report">공식 페이지와 다른 정보를 발견했나요? ${reportLink(t)} <span class="report-note">(GitHub 계정이 필요해요)</span></p>
          ${history.length ? `
            <h3 class="section-label">바뀐 내용</h3>
            <ul class="change-list">${history.map(({ date, c }) => `<li><span class="change-date">${esc(formatDate(date))}</span>${esc(changeText(c, data.purposes))}</li>`).join('')}</ul>` : ''}
        </section>
      </div>
    </div>
    <div class="sticky-cta">${officialButton(t)}</div>`;
}

function renderNotFound() {
  document.title = `찾을 수 없어요 · ${mode.siteName}`;
  app.innerHTML = `
    <div class="page-head">${backLink('#/', '처음으로')}</div>
    <section class="card"><p class="empty"><strong>찾을 수 없어요</strong>주소가 바뀌었거나 빠진 ${W}일 수 있어요.</p></section>
    ${demoInvite()}`;
}

// ---- 용어집 ----
function renderGlossary(focus) {
  document.title = `용어집 · ${mode.siteName}`;
  app.innerHTML = `
    <div class="narrow">
      <div class="page-head">
        ${backLink('#/')}
        <h1 class="page-title">용어집</h1>
        <p class="page-sub">${esc(mode.glossaryIntro)} 화면에서 <span class="term-sample">밑줄 친 말</span>이나 ⓘ를 누르면 바로 볼 수 있어요.</p>
      </div>
      <section class="card">
        ${data.glossary.length ? `<dl class="glossary">${data.glossary.map((item) => `
          <div class="glossary-item${item.term === focus ? ' focused' : ''}" id="term-${esc(item.term)}">
            <dt>${esc(item.term)}${item.aliases.length ? ` <span class="alias">(${esc(item.aliases.join(', '))})</span>` : ''}</dt>
            <dd>${esc(item.description)}</dd>
          </div>`).join('')}</dl>` : '<p class="empty"><strong>아직 준비 중이에요</strong></p>'}
      </section>
    </div>`;
  if (focus) document.getElementById(`term-${focus}`)?.scrollIntoView({ block: 'center' });
}

// ---- 변경 이력 ----
function renderChanges() {
  document.title = `변경 이력 · ${mode.siteName}`;
  const toolIds = new Set(data.tools.map((t) => t.id));
  const line = (c) => {
    const text = esc(changeText(c, data.purposes));
    return toolIds.has(c.tool_id) ? `<a href="#/t/${esc(c.tool_id)}">${text}</a>` : text;
  };
  app.innerHTML = `
    <div class="narrow">
      <div class="page-head">
        ${backLink('#/')}
        <h1 class="page-title">변경 이력</h1>
        <p class="page-sub">${W} 정보가 바뀔 때마다 자동으로 기록돼요. 가격이나 정책이 언제 바뀌었는지 확인할 수 있어요.</p>
      </div>
      ${data.changelog.length ? data.changelog.map((entry) => `
        <section class="card">
          <h2 class="card-title">${esc(formatDate(entry.date))}</h2>
          <ul class="change-list">${entry.changes.map((c) => `<li class="change-${c.type}">${line(c)}</li>`).join('')}</ul>
        </section>`).join('') : `<section class="card"><p class="empty"><strong>아직 바뀐 내용이 없어요</strong>${W} 정보가 바뀌면 여기에 기록돼요.</p></section>`}
    </div>`;
}

// ---- 용어 풀이 (화면 아래에 뜨는 창) ----
function installTermSheet() {
  const sheet = document.createElement('div');
  sheet.className = 'term-sheet';
  sheet.hidden = true;
  sheet.innerHTML = `
    <div class="term-sheet-inner" role="dialog" aria-modal="false" aria-labelledby="term-sheet-title">
      <div class="term-sheet-head">
        <strong id="term-sheet-title"></strong>
        <button type="button" class="term-close" aria-label="닫기">✕</button>
      </div>
      <p></p>
      <a href="#/glossary">용어집 전체 보기 ›</a>
    </div>`;
  document.body.appendChild(sheet);
  let opener = null;
  const close = () => {
    if (sheet.hidden) return;
    sheet.hidden = true;
    opener?.focus();
  };
  document.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.term');
    if (btn) {
      const item = data.glossary.find((x) => x.term === btn.dataset.term);
      if (!item) return;
      opener = btn;
      sheet.querySelector('strong').textContent = item.term;
      sheet.querySelector('p').textContent = item.description;
      sheet.querySelector('a').href = `#/glossary?term=${encodeURIComponent(item.term)}`;
      sheet.hidden = false;
      sheet.querySelector('.term-close').focus();
      return;
    }
    if (ev.target.closest('.term-close') || !ev.target.closest('.term-sheet')) close();
    else if (ev.target.closest('.term-sheet a')) sheet.hidden = true;
  });
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') close();
  });
  window.addEventListener('hashchange', () => { sheet.hidden = true; });
}

// ---- 다크 모드 버튼 ----
function currentTheme() {
  return document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function installThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  const paint = () => {
    const dark = currentTheme() === 'dark';
    btn.textContent = dark ? '☀️' : '🌙';
    btn.setAttribute('aria-label', dark ? '밝은 화면으로 바꾸기' : '어두운 화면으로 바꾸기');
  };
  btn.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // 저장할 수 없는 환경이면 이번 방문 동안만 적용
    }
    paint();
  });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', paint);
  paint();
}

function route() {
  const [path, query = ''] = location.hash.replace(/^#\/?/, '').split('?');
  const params = new URLSearchParams(query);
  const [section, id] = path.split('/');
  const purpose = section === 'p' && data.purposes.find((p) => p.id === id);
  const tool = section === 't' && data.tools.find((t) => t.id === id);
  // 홈 타일, 결과 카드, 상세 2단은 넓은 화면을 쓴다. 용어집·변경 이력은 읽기 좋은 폭(.narrow)으로.
  document.body.classList.toggle('wide', !['glossary', 'changes'].includes(section));
  document.body.classList.toggle('has-sticky-cta', Boolean(tool));
  document.querySelectorAll('[data-nav]').forEach((a) => {
    if (a.dataset.nav === section) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });

  if (purpose) renderResult(purpose, readConditions(params));
  else if (tool) renderTool(tool);
  else if (section === 't') renderNotFound();
  else if (section === 'glossary') renderGlossary(params.get('term'));
  else if (section === 'changes') renderChanges();
  else renderHome();

  app.querySelectorAll('[data-back]').forEach((a) => a.addEventListener('click', (ev) => {
    if (!routedOnce) return; // 바로 들어온 경우는 링크 주소로 간다
    ev.preventDefault();
    history.back();
  }));
  app.querySelectorAll('[data-scroll]').forEach((b) => b.addEventListener('click', () => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(b.dataset.scroll)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }));
  if (!(section === 'glossary' && params.get('term'))) window.scrollTo(0, 0);
}

async function main() {
  installThemeToggle();
  try {
    const demo = new URLSearchParams(location.search).has('demo');
    const dir = mode.dataDir;
    const [tools, purposes, glossary, changelog] = await Promise.all([
      loadJson(`${dir}${demo ? 'demo-tools.json' : 'tools.json'}`),
      loadJson(`${dir}purposes.json`),
      loadJson(`${dir}glossary.json`),
      // 변경 이력은 배포할 때 만들어진다. 로컬에서 안 만들었으면 빈 목록으로 본다.
      loadJson(`${dir}${demo ? 'demo-changelog.json' : 'changelog.json'}`, []),
    ]);
    data = { tools, purposes, glossary, changelog, demo };
    matcher = termMatcher(glossary);
    document.getElementById('demo-banner').hidden = !demo;
    installTermSheet();
    window.addEventListener('hashchange', () => {
      routedOnce = true;
      route();
    });
    route();
  } catch (err) {
    app.innerHTML = `<p class="error">데이터를 불러오지 못했어요: ${esc(err.message)}</p>`;
    console.error(err);
  }
}

main();
