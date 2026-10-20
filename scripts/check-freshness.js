// 주간 점검: 90일 넘게 확인 안 된 툴과 공식 주소 링크 상태를 모아 Issue 본문(마크다운)을 만든다.
// 가격·정책 값은 긁어오지 않는다. "확인해야 할 목록"만 만든다 (기획서 11장).
// 사용법: node scripts/check-freshness.js [--demo] [--today YYYY-MM-DD] [--out report.md] [--run-url URL]
//   기본: 비개발자용(data/tools.json)과 개발자용(data/dev/tools.json)을 함께 점검한다. --demo면 예시 데이터로.
// 확인할 게 있으면 마지막 줄에 has_issues=true, 없으면 has_issues=false 를 출력한다 (GitHub Actions 출력용).
import { readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { daysSince, isStale, isValidDate } from '../js/recommend.js';

export const TIMEOUT_MS = 20000;
const CONCURRENCY = 4;
const USER_AGENT = 'Mozilla/5.0 (compatible; which-ai-link-check; +https://github.com/dlwldP/which-ai)';

/** HTTP 상태 → ok(정상) / blocked(로봇 차단 등, 직접 확인 필요) / broken(깨짐). status 0은 접속 실패. */
export function classifyStatus(status) {
  if (status >= 200 && status < 400) return 'ok';
  if ([401, 403, 429].includes(status)) return 'blocked';
  return 'broken';
}

const STATUS_TEXT = {
  0: '접속 실패',
  401: '로그인 필요',
  403: '접속 거부',
  404: '페이지 없음',
  410: '페이지 삭제됨',
  429: '요청이 너무 많음',
};
export const statusText = (status) => STATUS_TEXT[status] ?? (status >= 500 ? '사이트 오류' : '열리지 않음');

export function staleTools(tools, today) {
  return tools
    .filter((t) => isStale(t, today))
    .map((t) => ({ id: t.id, name: t.name, last_verified: t.last_verified, days: daysSince(t.last_verified, today), sources: t.sources }))
    .sort((a, b) => b.days - a.days || (a.id < b.id ? -1 : 1));
}

/** 점검할 주소 목록. 같은 주소는 한 번만 확인하고, 어느 툴의 무엇인지 함께 기록한다. */
export function linkTargets(tools) {
  const map = new Map();
  for (const t of tools) {
    const add = (url, kind) => {
      if (!map.has(url)) map.set(url, []);
      map.get(url).push({ id: t.id, name: t.name, kind });
    };
    add(t.url, '공식 사이트');
    for (const s of t.sources) add(s, '출처');
    // 개발자용
    if (t.repo_url) add(t.repo_url, '저장소');
    for (const l of t.learn ?? []) add(l.url, '배울 거리');
  }
  return [...map.entries()].map(([url, usedBy]) => ({ url, usedBy }));
}

/** 주소 하나 확인. HEAD를 막는 사이트가 많아서 실패하면 GET으로 한 번 더 본다. */
export async function checkUrl(url, fetchImpl = fetch) {
  const attempt = async (method) => {
    try {
      const res = await fetchImpl(url, {
        method,
        redirect: 'follow',
        headers: { 'user-agent': USER_AGENT, accept: 'text/html,*/*' },
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
      res.body?.cancel?.();
      return res.status;
    } catch {
      return 0;
    }
  };
  let status = await attempt('HEAD');
  if (classifyStatus(status) !== 'ok') status = await attempt('GET');
  return status;
}

export async function checkLinks(targets, fetchImpl = fetch) {
  const results = new Array(targets.length);
  let next = 0;
  const worker = async () => {
    while (next < targets.length) {
      const i = next++;
      const status = await checkUrl(targets[i].url, fetchImpl);
      results[i] = { ...targets[i], status, result: classifyStatus(status) };
    }
  };
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, targets.length) }, worker));
  return results;
}

const usedByText = (usedBy) => usedBy.map((u) => `**${u.name}** ${u.kind}`).join(', ');

/**
 * Issue 본문. 확인할 것 = 90일 지난 툴 + 깨진 링크.
 * 로봇 차단 링크는 매주 반복될 수 있어서 그것만으로는 Issue를 열지 않고, 열릴 때 같이 보여준다.
 */
/**
 * Issue 본문. 확인할 것 = 90일 지난 툴 + 깨진 링크.
 * 로봇 차단 링크는 매주 반복될 수 있어서 그것만으로는 Issue를 열지 않고, 열릴 때 같이 보여준다.
 * sets: [{ label, file, stale, links }] — 데이터 세트(비개발자용·개발자용)마다 따로 보여준다.
 *       하나만 넘길 때는 stale·links를 바로 넘겨도 된다.
 */
export function buildReport({ today, sets, stale, links, runUrl = '', demo = false }) {
  const all = sets ?? [{ label: null, file: 'data/tools.json', stale, links }];
  const lines = [];
  const counts = { stale: 0, broken: 0, blocked: 0 };
  if (demo) lines.push('> ⚠️ **예시 데이터로 돌린 점검이에요.** 실제 툴 정보가 아니에요.', '');
  lines.push(`${today} 기준 자동 점검 결과예요. 가격·정책은 자동으로 바꾸지 않으니 공식 페이지에서 직접 확인해 주세요.`, '');

  for (const set of all) {
    const broken = set.links.filter((l) => l.result === 'broken');
    const blocked = set.links.filter((l) => l.result === 'blocked');
    counts.stale += set.stale.length;
    counts.broken += broken.length;
    counts.blocked += blocked.length;
    const h = set.label ? '###' : '##';
    if (set.label) lines.push(`## ${set.label} (\`${set.file}\`)`, '');

    lines.push(`${h} 90일 넘게 확인 안 된 툴 (${set.stale.length}개)`, '');
    if (set.stale.length === 0) lines.push('없어요.');
    for (const x of set.stale) {
      lines.push(`- [ ] **${x.name}** (\`${x.id}\`) — 마지막 확인 ${x.last_verified}, ${x.days}일 지남 · 출처: ${x.sources.join(' ')}`);
    }
    lines.push('');

    lines.push(`${h} 깨진 링크 (${broken.length}개)`, '');
    if (broken.length === 0) lines.push('없어요.');
    for (const l of broken) lines.push(`- [ ] ${usedByText(l.usedBy)}: ${l.url} — ${l.status || '-'} ${statusText(l.status)}`);
    lines.push('');

    if (blocked.length > 0) {
      lines.push(`${h} 자동 확인이 막힌 링크 (${blocked.length}개)`, '', '사이트가 자동 접속을 막아서 확인하지 못했어요. 직접 열어서 잘 열리는지 봐주세요.', '');
      for (const l of blocked) lines.push(`- ${usedByText(l.usedBy)}: ${l.url} — ${l.status} ${statusText(l.status)}`);
      lines.push('');
    }
  }

  const files = all.map((x) => `\`${x.file}\``).join(' 또는 ');
  lines.push(
    '## 이렇게 처리해요',
    '',
    `1. 공식 페이지에서 값을 확인하고 ${files}을 고쳐요. 바뀐 게 없어도 \`last_verified\`를 확인한 날짜로 바꿔요.`,
    '2. 주소가 바뀌었으면 `url`이나 `sources`를 새 주소로 고쳐요.',
    '3. 커밋하면 다음 점검 때 목록에서 빠지고, 모두 처리되면 이 Issue는 자동으로 닫혀요.',
  );
  if (runUrl) lines.push('', `점검 기록: ${runUrl}`);
  const hasIssues = counts.stale > 0 || counts.broken > 0;
  return { body: `${lines.join('\n')}\n`, hasIssues, counts };
}

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

export const DATA_SETS = [
  { label: 'AI 뭐 써? (일반용)', file: 'data/tools.json', demoFile: 'data/demo-tools.json' },
  { label: '개발할 때 AI 뭐 써?', file: 'data/dev/tools.json', demoFile: 'data/dev/demo-tools.json' },
];

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const demo = process.argv.includes('--demo');
  const today = arg('today', new Date().toISOString().slice(0, 10));
  if (!isValidDate(today)) {
    console.error(`날짜 형식이 틀렸습니다: ${today}`);
    process.exit(2);
  }
  const sets = [];
  for (const d of DATA_SETS) {
    const file = demo ? d.demoFile : d.file;
    const tools = JSON.parse(readFileSync(file, 'utf8'));
    sets.push({ label: d.label, file, stale: staleTools(tools, today), links: await checkLinks(linkTargets(tools)) });
    console.log(`${d.label}: 툴 ${tools.length}개`);
  }
  const report = buildReport({ today, sets, runUrl: arg('run-url', ''), demo });
  writeFileSync(arg('out', 'report.md'), report.body);
  console.log(`90일 지남 ${report.counts.stale} · 깨진 링크 ${report.counts.broken} · 자동 확인 막힘 ${report.counts.blocked}`);
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `has_issues=${report.hasIssues}\n`);
  console.log(`has_issues=${report.hasIssues}`);
}
