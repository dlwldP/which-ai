// 주간 요약: 지난 7일 동안 새로 추가된 툴, 가격 표시가 바뀐 툴, 깨진 링크를 weekly-summary.md 하나로 모은다.
// 주간 점검(.github/workflows/weekly-check.yml)이 돌 때 만들고, 점검 기록의 첨부 파일과 요약 화면에 올린다.
// 레포에는 커밋하지 않는다 (봇 커밋이 쌓이고 배포가 다시 도는 것을 막으려고).
// 사용법: node scripts/weekly-summary.js [--today YYYY-MM-DD] [--days 7] [--links links.json] [--out weekly-summary.md] [--run-url URL]
//   --links: check-freshness.js --links-out 으로 저장한 깨진 링크. 없으면 링크 칸은 "이번 점검에 없음"
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { isValidDate } from '../js/recommend.js';
import { priceBadge } from '../js/format.js';
import { DATA_SETS, statusText } from './check-freshness.js';

const DAY_MS = 24 * 60 * 60 * 1000;

/** today에서 days일 전 날짜 (YYYY-MM-DD) */
export function daysBefore(today, days) {
  return new Date(Date.parse(`${today}T00:00:00Z`) - days * DAY_MS).toISOString().slice(0, 10);
}

/**
 * 두 시점의 툴 목록 비교: 새로 추가, 빠짐, 가격 표시가 바뀜 (무료/유료 값). 이름순.
 * @returns {{ added: object[], removed: object[], priceChanged: { tool: object, before: object, after: object }[] }}
 */
export function weeklyDiff(before, after) {
  const oldById = new Map(before.map((t) => [t.id, t]));
  const newById = new Map(after.map((t) => [t.id, t]));
  const byName = (a, b) => a.name.localeCompare(b.name, 'ko');
  const added = after.filter((t) => !oldById.has(t.id)).sort(byName);
  const removed = before.filter((t) => !newById.has(t.id)).sort(byName);
  const priceChanged = after
    .filter((t) => oldById.has(t.id))
    .map((t) => ({ tool: t, before: oldById.get(t.id).price ?? {}, after: t.price ?? {} }))
    .filter((x) => x.before.free !== x.after.free || x.before.paid !== x.after.paid)
    .sort((a, b) => byName(a.tool, b.tool));
  return { added, removed, priceChanged };
}

const usedByText = (usedBy) => usedBy.map((u) => `**${u.name}** ${u.kind}`).join(', ');

/**
 * sets: [{ label, added, removed, priceChanged, broken }]. broken이 null이면 링크를 이번에 확인하지 않은 것.
 */
export function buildWeeklySummary({ today, since, sets, runUrl = '' }) {
  const lines = [`# 주간 요약 (${since} ~ ${today})`, ''];
  const total = { added: 0, priceChanged: 0, broken: 0 };
  for (const s of sets) {
    total.added += s.added.length;
    total.priceChanged += s.priceChanged.length;
    total.broken += s.broken?.length ?? 0;
  }
  lines.push(`새로 추가 ${total.added}개 · 가격 표시 바뀜 ${total.priceChanged}개 · 깨진 링크 ${total.broken}개`, '');

  for (const s of sets) {
    lines.push(`## ${s.label}`, '');
    lines.push(`### 새로 추가된 툴 (${s.added.length}개)`, '');
    if (!s.added.length) lines.push('없어요.');
    for (const t of s.added) lines.push(`- **${t.name}** (\`${t.id}\`) — ${t.good_for ?? t.one_liner} · ${priceBadge(t.price).text}`);
    if (s.removed.length) {
      lines.push('', `빠진 툴: ${s.removed.map((t) => `${t.name} (\`${t.id}\`)`).join(', ')}`);
    }
    lines.push('');

    lines.push(`### 가격 표시가 바뀐 툴 (${s.priceChanged.length}개)`, '');
    if (!s.priceChanged.length) lines.push('없어요.');
    for (const x of s.priceChanged) lines.push(`- **${x.tool.name}** (\`${x.tool.id}\`) — ${priceBadge(x.before).text} → ${priceBadge(x.after).text}`);
    lines.push('');

    lines.push(`### 깨진 링크 (${s.broken ? `${s.broken.length}개` : '확인 안 함'})`, '');
    if (s.broken === null || s.broken === undefined) lines.push('이번 점검에서는 확인하지 않았어요.');
    else if (!s.broken.length) lines.push('없어요.');
    else for (const l of s.broken) lines.push(`- ${usedByText(l.usedBy)}: ${l.url} — ${l.status || '-'} ${statusText(l.status)}`);
    lines.push('');
  }
  lines.push('가격은 공식 페이지에서 확인한 값만 바꿔요. 깨진 링크는 주간 점검 Issue에도 같이 올라가요.');
  if (runUrl) lines.push('', `점검 기록: ${runUrl}`);
  return { body: `${lines.join('\n')}\n`, total };
}

// ---- 실행 ----

const root = fileURLToPath(new URL('..', import.meta.url));
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();

/** since(한국 시간 0시) 직전 마지막 커밋의 툴 목록. 그 전 기록이 없으면 빈 목록 */
function toolsBefore(file, since) {
  try {
    const commit = git('rev-list', '-1', `--before=${since}T00:00:00+09:00`, 'HEAD', '--', file);
    return commit ? JSON.parse(git('show', `${commit}:${file}`)) : [];
  } catch {
    return [];
  }
}

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const today = arg('today', '') || new Date().toISOString().slice(0, 10);
  const days = Number(arg('days', '7'));
  if (!isValidDate(today) || !(days > 0)) {
    console.error('날짜나 기간 형식이 틀렸습니다');
    process.exit(2);
  }
  const since = daysBefore(today, days);
  const linksFile = arg('links', '');
  const links = linksFile && existsSync(linksFile) ? JSON.parse(readFileSync(linksFile, 'utf8')) : [];
  const sets = DATA_SETS.map((d) => {
    const after = JSON.parse(readFileSync(new URL(`../${d.file}`, import.meta.url), 'utf8'));
    const diff = weeklyDiff(toolsBefore(d.file, since), after);
    const broken = links.find((l) => l.file === d.file)?.broken ?? null;
    return { label: d.label, ...diff, broken };
  });
  const out = arg('out', 'weekly-summary.md');
  const summary = buildWeeklySummary({ today, since, sets, runUrl: arg('run-url', '') });
  writeFileSync(out, summary.body);
  console.log(`${out}: 새로 추가 ${summary.total.added} · 가격 바뀜 ${summary.total.priceChanged} · 깨진 링크 ${summary.total.broken}`);
}
