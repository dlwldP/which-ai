// 화면 렌더링과 라우팅. 주소(#/...)로 화면을 나눠서 뒤로 가기와 링크 공유가 그대로 동작한다.
//   #/                       홈 (용도 타일 + 이름 찾기)
//   #/p/<용도>?free=1&web=1   그 용도의 카드 목록 (조건 칩)
//   #/all?q=<찾는 말>         전체 목록
//   #/t/<툴 id>              카드 하나 (공유용)
//   #/glossary?term=<용어>   용어집
//   #/changes                변경 이력
// 2026-11-06 개편: 점수 추천과 "자세히 보기"를 없애고, 용도별 카드 목록으로 최대한 많은 AI를 짧게 보여준다.
// 목록·조건 계산은 recommend.js(순수 함수)에만 맡긴다.
import { FILTERS, SORTS, groupByKind, initialLetter, isStale, listTools, splitPreview } from './recommend.js';
import { formatDate, localToday, priceBadge, useText } from './format.js';
import { FEEDBACK_FORM, REASON_MAX, cleanReason, feedbackBody, githubIssueUrl, isFeedbackReady } from './feedback.js';
import { PAGE_KEYS, pageSections } from './pages.js';
import { glossarize, glossaryGroups, glossaryMatches, termMatcher } from './glossary.js';
import { updateDates } from './changelog.js';
import { MODES } from './modes.js';

// <body data-mode="dev"> 이면 개발자용
const mode = MODES[document.body.dataset.mode] ?? MODES.general;
const W = mode.toolWord; // "툴" 또는 "도구"

const app = document.getElementById('app');
let data; // { tools, purposes, glossary, changelog, demo }
let matcher = null; // 용어집 단어 찾기
let routedOnce = false; // 사이트 안에서 이동한 적이 있으면 "뒤로"가 브라우저 뒤로 가기로 동작한다

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

/** 이스케이프 + 용어집 단어에 밑줄 (설명 문장에만 쓴다) */
const g = (text) => glossarize(esc(text), matcher);

async function loadJson(path, fallback) {
  const res = await fetch(path, { cache: 'no-cache' });
  if (!res.ok) {
    if (fallback !== undefined) return fallback;
    throw new Error(`${path} 불러오기 실패 (${res.status})`);
  }
  return res.json();
}

/** 사이트 안에서 왔으면 브라우저 뒤로 가기, 바로 들어왔으면 fallback 주소로 */
const backLink = (fallback, label = '뒤로') => `<a class="back" href="${fallback}" data-back>‹ ${esc(label)}</a>`;

const linkRow = (icon, title, desc, href) => `
  <li><a class="row" href="${href}">
    <span class="ico" aria-hidden="true">${icon}</span>
    <span class="txt"><span class="ttl">${esc(title)}</span><span class="dsc">${esc(desc)}</span></span>
    <span class="chev" aria-hidden="true">›</span>
  </a></li>`;

/** 제보 방법이 하나라도 있으면 true: 구글 폼(연결됐을 때) 또는 GitHub 이슈(개발자용) */
const reportReady = () => isFeedbackReady() || mode.reportGithub;

/** "정보가 틀려요" 버튼. 누르면 사유를 적는 창이 뜬다 (installReportDialog) */
const reportButton = (t) => (reportReady()
  ? `<button type="button" class="report-btn" data-report="${esc(t.name)}">정보가 틀려요</button>` : '');

const purposeById = (id) => data.purposes.find((p) => p.id === id);

// ---- 카드 하나 ----
// 이름(공식 사이트로), 한 줄 설명, 가격, 쓰는 방법, 용도 태그. 더 자세한 내용은 공식 사이트에서 본다.
function cardHtml(t, currentPurpose = null) {
  const price = priceBadge(t.price);
  const uses = useText(t.use, mode.key);
  const stale = isStale(t, localToday());
  const otherPurposes = t.purposes.filter((id) => id !== currentPurpose).map(purposeById).filter(Boolean);
  return `
    <article class="tool-card" id="tool-${esc(t.id)}">
      <div class="tool-head">
        <span class="tool-avatar" aria-hidden="true">${esc(initialLetter(t.name))}</span>
        <h2 class="tool-name"><a href="${esc(t.url)}" target="_blank" rel="noopener">${esc(t.name)} <span class="ext" aria-hidden="true">↗</span></a></h2>
        ${stale ? '<span class="tag tag-warn">다시 확인 필요</span>' : ''}
        ${t.ai_native === 'no' ? '<span class="tag tag-plain">AI와 같이 쓰는 도구</span>' : ''}
      </div>
      <p class="tool-one-liner">${esc(t.one_liner)}</p>
      <ul class="badges" aria-label="가격과 쓰는 방법">
        <li class="badge badge-${price.tone}">${esc(price.text)}</li>
        ${uses.map((u) => `<li class="badge badge-plain">${esc(u)}</li>`).join('')}
      </ul>
      ${otherPurposes.length ? `<p class="tool-purposes">${otherPurposes.map((p) => `<a href="#/p/${p.id}">${esc(p.icon)} ${esc(p.label)}</a>`).join('')}</p>` : ''}
      <p class="tool-foot">
        <a class="tool-link" href="${esc(t.url)}" target="_blank" rel="noopener">공식 사이트</a>
        ${t.repo_url ? `<a class="tool-link" href="${esc(t.repo_url)}" target="_blank" rel="noopener">${t.kind === 'model' ? '모델 페이지' : '저장소'}</a>` : ''}
        <span class="tool-date">확인 ${esc(formatDate(t.last_verified).replace(/^\d{4}년 /, ''))}</span>
        ${reportButton(t)}
      </p>
    </article>`;
}

const cardsHtml = (tools, currentPurpose) => `<div class="cards">${tools.map((t) => cardHtml(t, currentPurpose)).join('')}</div>`;

/** 개발자용은 회사 서비스 / 오픈소스 / 공개 모델로 묶는다. 비개발자용은 한 목록 */
function groupedHtml(tools, currentPurpose) {
  if (!mode.kinds) return cardsHtml(tools, currentPurpose);
  return groupByKind(tools, mode.kinds).map(({ kind, tools: list }) => {
    const info = mode.kindInfo[kind];
    const { shown, hidden } = splitPreview(list);
    return `
      <section class="result-section" aria-labelledby="kind-${kind}">
        <h2 class="result-section-title" id="kind-${kind}"><span aria-hidden="true">${info.icon}</span> ${esc(info.title)} <span class="count">${list.length}</span></h2>
        <p class="result-section-desc">${esc(info.desc)}</p>
        ${cardsHtml(shown, currentPurpose)}
        ${hidden.length ? `
          <div class="more-cards" hidden>${cardsHtml(hidden, currentPurpose)}</div>
          <button type="button" class="btn btn-outline more-btn" data-more aria-expanded="false">${esc(info.title)} ${hidden.length}개 더 보기</button>` : ''}
      </section>`;
  }).join('');
}

const emptyNotice = (text = mode.emptyText) => `
  <section class="card invite" role="status"><p class="invite-text"><strong>아직 없어요.</strong> ${esc(text)}</p></section>`;

const searchForm = (q = '') => `
  <form class="search" role="search" data-search>
    <label class="sr-only" for="q">이름이나 설명으로 찾기</label>
    <input id="q" name="q" type="search" value="${esc(q)}" placeholder="예: 자막, 번역, 음악" autocomplete="off">
    <button type="submit" class="btn btn-primary">찾기</button>
  </form>`;

// ---- 홈 ----
// 맨 위는 화면 너비 전체를 쓰는 가로 띠(서비스 소개 + 찾기), 그 아래 하고 싶은 일 5개.
function renderHome() {
  document.title = mode.homeTitle;
  const free = data.tools.filter((t) => t.price.free === true).length;
  const web = data.tools.filter((t) => t.use.includes('web')).length;
  app.innerHTML = `
    <section class="hero" aria-label="${esc(mode.siteName)} 소개">
      <div class="hero-inner">
        <div class="hero-text">
          <p class="eyebrow">${esc(mode.eyebrow)}</p>
          <h1>${mode.heroHtml}</h1>
          <p class="sub">${esc(mode.heroSub)}</p>
          <ol class="hero-steps">${mode.heroSteps.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>
        </div>
        <div class="hero-side">
          ${searchForm()}
          <div class="hero-facts">
            <a class="hero-fact" href="#/all"><strong>${data.tools.length}</strong><span>모아 둔 ${W}</span></a>
            <a class="hero-fact" href="#/all?free=1"><strong>${free}</strong><span>무료로 쓸 수 있음</span></a>
            <a class="hero-fact" href="#/all?web=1"><strong>${web}</strong><span>${esc(mode.webFact)}</span></a>
          </div>
          <p class="hero-links"><a href="#/all">전체 ${W} 보기 ›</a> <a href="${mode.otherSite.href}">${esc(mode.otherSite.label)} ›</a></p>
        </div>
      </div>
    </section>

    <section class="purposes" aria-labelledby="purposes-title">
      <h2 class="section-title" id="purposes-title">하고 싶은 일</h2>
      <ul class="tiles tiles-5">${data.purposes.map((p) => `
        <li><a class="tile" href="#/p/${p.id}">
          <span class="tile-ico" aria-hidden="true">${esc(p.icon)}</span>
          <span class="tile-ttl">${esc(p.label)}</span>
          <span class="tile-dsc">${esc(p.examples)}</span>
        </a></li>`).join('')}</ul>
    </section>

    <section class="more" aria-labelledby="more-title">
      <h2 class="section-title" id="more-title">더 알아보기</h2>
      <ul class="more-links">
        ${linkRow('📖', '용어집', mode.glossaryHint, '#/glossary')}
        ${linkRow('🗓️', '변경 이력', `${W} 정보를 업데이트한 날짜`, '#/changes')}
      </ul>
    </section>`;
}

// ---- 목록 (용도별 / 전체) ----
function filterChips(base, active, extra = '') {
  return `
    <div class="chips" role="group" aria-label="조건">
      ${mode.filters.map((f) => {
        const next = active.includes(f.key) ? active.filter((k) => k !== f.key) : [...active, f.key];
        const params = new URLSearchParams(extra);
        for (const k of next) params.set(k, '1');
        const q = params.toString();
        return `<a class="chip" role="button" aria-pressed="${active.includes(f.key)}" href="${base}${q ? `?${q}` : ''}"><span aria-hidden="true">${f.icon}</span> ${esc(f.chip)}</a>`;
      }).join('')}
    </div>`;
}

/** 목록 위 분야 탭: 처음 화면으로 돌아가지 않고 옆 분야로 넘어간다 (켠 조건·정렬은 그대로) */
function purposeTabs(current, keep) {
  return `
    <nav class="purpose-tabs" aria-label="하고 싶은 일">
      <a class="purpose-tab" href="#/all${keep}"${current ? '' : ' aria-current="page"'}>전체</a>
      ${data.purposes.map((p) => `<a class="purpose-tab" href="#/p/${p.id}${keep}"${current === p.id ? ' aria-current="page"' : ''}><span aria-hidden="true">${esc(p.icon)}</span> ${esc(p.label)}</a>`).join('')}
    </nav>`;
}

const SORT_LABELS = { name: '이름순', free: '무료 먼저' };
function sortChips(base, params) {
  const current = SORTS[params.get('sort')] ? params.get('sort') : 'name';
  return `
    <div class="sort" role="group" aria-label="정렬">
      <span class="sort-label">정렬</span>
      ${Object.keys(SORTS).map((k) => {
        const next = new URLSearchParams(params);
        if (k === 'name') next.delete('sort'); else next.set('sort', k);
        const q = next.toString();
        return `<a class="sort-chip" href="${base}${q ? `?${q}` : ''}" aria-pressed="${current === k}">${SORT_LABELS[k]}</a>`;
      }).join('')}
    </div>`;
}

function renderList({ purpose = null, params }) {
  const active = mode.filters.map((f) => f.key).filter((k) => params.get(k) === '1' && FILTERS[k]);
  const query = purpose ? '' : (params.get('q') ?? '');
  const sort = SORTS[params.get('sort')] ? params.get('sort') : 'name';
  const tools = listTools({ tools: data.tools, purposeId: purpose?.id ?? null, filters: active, query, sort });
  const keepParams = new URLSearchParams();
  for (const k of active) keepParams.set(k, '1');
  if (sort !== 'name') keepParams.set('sort', sort);
  const keep = keepParams.toString() ? `?${keepParams}` : '';
  const title = purpose ? `${purpose.icon} ${purpose.label}` : query ? `"${query}" 찾기` : `전체 ${W}`;
  document.title = `${purpose ? purpose.label : `전체 ${W}`} · ${mode.siteName}`;
  const base = purpose ? `#/p/${purpose.id}` : '#/all';
  app.innerHTML = `
    ${purposeTabs(purpose?.id ?? null, keep)}
    <div class="page-head">
      <h1 class="page-title">${esc(title)} <span class="count">${tools.length}개</span></h1>
      ${purpose ? `<p class="page-sub">${esc(purpose.examples)}</p>` : searchForm(query)}
    </div>
    ${data.tools.length ? `<div class="list-controls">${filterChips(base, active, [query ? `q=${encodeURIComponent(query)}` : '', sort !== 'name' ? `sort=${sort}` : ''].filter(Boolean).join('&'))}${sortChips(base, params)}</div>` : ''}
    ${tools.length ? groupedHtml(tools, purpose?.id ?? null)
      : emptyNotice(active.length || query ? '조건을 바꿔서 다시 찾아보세요.' : mode.emptyText)}
    <p class="order-note">순서는 이름순(또는 무료 먼저)이고, 가격을 확인하지 못한 툴은 맨 뒤에 있어요. 좋고 나쁨의 순위가 아니에요. 가격·쓰는 방법은 확인 날짜 기준이니, 쓰기 전에 공식 사이트에서 한 번 더 확인하세요.</p>`;
}

function renderTool(t) {
  document.title = `${t.name} · ${mode.siteName}`;
  app.innerHTML = `
    <div class="page-head">${backLink('#/', '처음으로')}</div>
    ${cardsHtml([t], null)}`;
}

function renderNotFound() {
  document.title = `찾을 수 없어요 · ${mode.siteName}`;
  app.innerHTML = `
    <div class="page-head">${backLink('#/', '처음으로')}</div>
    <section class="card"><p class="empty"><strong>찾을 수 없어요</strong>주소가 바뀌었거나 빠진 ${W}일 수 있어요.</p></section>`;
}

// ---- 용어집 ----
// 풀이가 한두 문장이라 접지 않고 카드로 펼쳐 둔다 (휴대폰 1칸, 넓으면 2~3칸, 줄마다 높이를 맞춤).
// 위 용어 목록을 누르면 그 용어로 내려간다.
// 화면 속 용어·ⓘ에서 "용어집 전체 보기"로 오면(?term=) 그 용어를 강조하고 화면 가운데로 옮긴다.
function renderGlossary(focus) {
  document.title = `용어집 · ${mode.siteName}`;
  const sorted = glossaryGroups(data.glossary).flatMap((gr) => gr.items); // 가나다순 → ABC순
  app.innerHTML = `
    <div class="page-head">
        ${backLink('#/')}
        <h1 class="page-title">용어집 <span class="count">${data.glossary.length}개</span></h1>
        <p class="page-sub">${esc(mode.glossaryIntro)} 화면에서 <span class="term-sample">밑줄 친 말</span>을 누르면 그 자리에서 바로 볼 수 있어요.</p>
    </div>
      ${data.glossary.length ? `
        <div class="glossary-tools">
          <label class="sr-only" for="glossary-q">용어 찾기</label>
          <input id="glossary-q" type="search" placeholder="모르는 말을 적어 보세요 (예: 토큰, 무료)" autocomplete="off">
          <nav class="glossary-index" aria-label="용어 바로 가기">${sorted.map((item) => `
            <button type="button" class="glossary-jump" data-scroll="term-${esc(item.term)}">${esc(item.term)}</button>`).join('')}
          </nav>
        </div>
        <dl class="glossary">${sorted.map((item) => `
          <div class="glossary-item${item.term === focus ? ' focused' : ''}" id="term-${esc(item.term)}" data-term-item="${esc(item.term)}">
            <dt><span class="glossary-term">${esc(item.term)}</span>${item.aliases.length ? ` <span class="alias">${esc(item.aliases.join(', '))}</span>` : ''}</dt>
            <dd class="glossary-desc">${esc(item.description)}</dd>
          </div>`).join('')}
        </dl>
        <p class="glossary-empty" hidden>찾는 말이 없어요. 다른 말로 찾아보세요.</p>` : '<section class="card"><p class="empty"><strong>아직 준비 중이에요</strong></p></section>'}`;
  const input = app.querySelector('#glossary-q');
  input?.addEventListener('input', () => {
    let shown = 0;
    for (const el of app.querySelectorAll('[data-term-item]')) {
      const item = data.glossary.find((x) => x.term === el.dataset.termItem);
      const ok = glossaryMatches(item, input.value);
      el.hidden = !ok;
      if (ok) shown += 1;
    }
    app.querySelector('.glossary-empty').hidden = shown > 0;
  });
  if (focus) document.getElementById(`term-${focus}`)?.scrollIntoView({ block: 'center' });
}

// ---- 변경 이력 ----
// 무엇이 바뀌었는지는 적지 않고, 정보를 업데이트한 날짜만 보여준다 (2026-11-06 J 결정).
function renderChanges() {
  document.title = `변경 이력 · ${mode.siteName}`;
  app.innerHTML = `
    <div class="narrow">
      <div class="page-head">
        ${backLink('#/')}
        <h1 class="page-title">변경 이력</h1>
        <p class="page-sub">${W} 정보를 업데이트한 날짜예요.</p>
      </div>
      ${data.changelog.length ? `
        <section class="card">
          <ul class="change-list">${updateDates(data.changelog).map((date) => `<li><span class="change-date-only">${esc(formatDate(date))}</span> ${W} 정보 업데이트</li>`).join('')}</ul>
        </section>` : `<section class="card"><p class="empty"><strong>아직 업데이트 기록이 없어요</strong>${W} 정보를 업데이트하면 날짜가 여기에 남아요.</p></section>`}
    </div>`;
}

// ---- 개인정보 처리방침 · 이용약관 · 보안 안내 (js/pages.js) ----
function renderPage(key) {
  const page = pageSections(key, W, mode.siteName, { github: mode.reportGithub });
  document.title = `${page.title} · ${mode.siteName}`;
  app.innerHTML = `
    <div class="narrow">
      <div class="page-head">
        ${backLink('#/')}
        <h1 class="page-title">${esc(page.title)}</h1>
        <p class="page-sub">${esc(page.intro)}</p>
      </div>
      <section class="card legal">${page.sections.map(([title, items]) => `
        <h2 class="legal-title">${esc(title)}</h2>
        <ul class="legal-list">${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`).join('')}
      </section>
    </div>`;
}

// ---- "정보가 틀려요" 입력창 ----
// 사유는 꼭 적어야 보낼 수 있다. 로그인·횟수 제한 없음. 구글 폼으로 보낸다(응답을 읽을 수 없어 no-cors).
// 개발자용은 아래에 두 번째 방법(GitHub 이슈, 계정 필요)을 둔다. 구글 폼이 아직 없으면 GitHub만 보여준다.
function installReportDialog() {
  if (!reportReady()) return;
  const formReady = isFeedbackReady();
  const dialog = document.createElement('dialog');
  dialog.className = 'report-dialog';
  dialog.innerHTML = `
    <form class="report-form" novalidate>
      <h2 class="report-title">정보가 틀려요</h2>
      <p class="report-tool"></p>
      <div class="report-by-form"${formReady ? '' : ' hidden'}>
      <label class="report-label" for="report-reason">무엇이 틀렸나요? <span class="req">(필수)</span></label>
      <textarea id="report-reason" name="reason" rows="5" maxlength="${REASON_MAX}" required
        placeholder="예: 유료 가격이 월 20달러가 아니라 25달러로 바뀌었어요 (공식 가격 페이지 기준)"></textarea>
      <p class="report-hint">이름·연락처 같은 개인정보는 적지 마세요. 보낸 내용은 정보를 고치는 데만 써요 (<a href="#/privacy">개인정보 처리방침</a>).</p>
      <p class="report-error" role="alert" hidden></p>
      <p class="report-done" role="status" hidden>보내 주셔서 고마워요. 확인해서 고칠게요.</p>
      </div>
      ${mode.reportGithub ? `
        <p class="report-alt">${formReady ? '다른 방법: ' : ''}GitHub 계정이 있다면 <a class="report-github" href="#" target="_blank" rel="noopener">GitHub 이슈로 남기기 ↗</a>
          <span class="report-alt-note">이슈는 누구나 볼 수 있게 공개되고 GitHub 아이디가 같이 보여요.</span></p>` : ''}
      <div class="report-actions">
        <button type="button" class="btn btn-outline report-cancel">닫기</button>
        ${formReady ? '<button type="submit" class="btn btn-primary report-send">보내기</button>' : ''}
      </div>
    </form>`;
  document.body.appendChild(dialog);
  const form = dialog.querySelector('form');
  const textarea = dialog.querySelector('textarea');
  const error = dialog.querySelector('.report-error');
  const done = dialog.querySelector('.report-done');
  const send = dialog.querySelector('.report-send');
  let toolName = '';
  let opener = null;

  document.addEventListener('click', (ev) => {
    const btn = ev.target.closest('[data-report]');
    if (!btn) return;
    opener = btn;
    toolName = btn.dataset.report;
    textarea.value = '';
    textarea.disabled = false;
    if (send) send.disabled = false;
    error.hidden = true;
    done.hidden = true;
    dialog.querySelector('.report-tool').textContent = toolName;
    const github = dialog.querySelector('.report-github');
    if (github) github.href = githubIssueUrl(toolName, mode.reportSite);
    dialog.showModal();
    (formReady ? textarea : dialog.querySelector('.report-github')).focus();
  });
  dialog.querySelector('.report-cancel').addEventListener('click', () => dialog.close());
  // 개인정보 처리방침 링크를 누르면 창을 닫고 그 페이지로 간다
  dialog.querySelector('.report-hint a').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => opener?.focus());
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (!formReady) return;
    const reason = cleanReason(textarea.value);
    if (!reason) {
      error.textContent = '무엇이 틀렸는지 적어 주세요.';
      error.hidden = false;
      textarea.focus();
      return;
    }
    error.hidden = true;
    send.disabled = true;
    try {
      await fetch(FEEDBACK_FORM.action, {
        method: 'POST',
        mode: 'no-cors',
        body: feedbackBody(FEEDBACK_FORM, { site: mode.reportSite, tool: toolName, reason, page: location.href }),
      });
      textarea.disabled = true;
      done.hidden = false;
    } catch {
      send.disabled = false;
      error.textContent = '보내지 못했어요. 인터넷 연결을 확인하고 다시 눌러 주세요.';
      error.hidden = false;
    }
  });
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
  const purpose = section === 'p' && purposeById(id);
  const tool = section === 't' && data.tools.find((t) => t.id === id);
  // 목록·용어집은 넓은 화면을 쓴다. 변경 이력과 안내 문서는 읽기 좋은 폭(.narrow)으로.
  document.body.classList.toggle('wide', !['changes', ...PAGE_KEYS].includes(section));
  document.querySelectorAll('[data-nav]').forEach((a) => {
    if (a.dataset.nav === section) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });

  if (purpose) renderList({ purpose, params });
  else if (section === 'all') renderList({ params });
  else if (tool) renderTool(tool);
  else if (section === 't' || section === 'p') renderNotFound();
  else if (section === 'glossary') renderGlossary(params.get('term'));
  else if (section === 'changes') renderChanges();
  else if (PAGE_KEYS.includes(section)) renderPage(section);
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
  app.querySelectorAll('[data-more]').forEach((btn) => btn.addEventListener('click', () => {
    btn.previousElementSibling.hidden = false; // 남은 카드 펼치기
    btn.remove();
  }));
  app.querySelectorAll('[data-search]').forEach((form) => form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const q = form.querySelector('input').value.trim();
    location.hash = q ? `#/all?q=${encodeURIComponent(q)}` : '#/all';
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
    document.body.classList.toggle('is-demo', demo); // 예시 데이터 화면은 띠·테두리 색으로 구분 (styles.css)
    installTermSheet();
    installReportDialog();
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
