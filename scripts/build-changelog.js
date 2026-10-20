// git 기록에서 data/tools.json이 바뀐 커밋마다 이전 버전과 비교해 변경 이력을 만든다.
// 배포할 때 자동으로 실행된다 (.github/workflows/deploy.yml). 레포에는 결과 파일을 커밋하지 않는다.
// 사용법: node scripts/build-changelog.js [저장할 경로] [--tools data/dev/tools.json]
//         (기본: data/tools.json → data/changelog.json. 개발자용은 --tools data/dev/tools.json)
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { buildChangelog } from '../js/changelog.js';

const root = fileURLToPath(new URL('..', import.meta.url));

const git = (...args) =>
  execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });

/** 그 커밋 시점의 tools.json. 파일이 없거나 JSON이 깨져 있으면 빈 목록으로 본다. */
function toolsAt(commit, toolsPath) {
  try {
    const parsed = JSON.parse(git('show', `${commit}:${toolsPath}`));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function readHistory(toolsPath = 'data/tools.json') {
  const log = git('log', '--reverse', '--format=%H %h %cs', '--', toolsPath).trim();
  if (!log) return [];
  return log.split('\n').map((line) => {
    const [full, short, date] = line.split(' ');
    let parentTools = [];
    try {
      parentTools = toolsAt(git('rev-parse', `${full}^`).trim(), toolsPath);
    } catch {
      // 첫 커밋이라 부모가 없다
    }
    return { commit: short, date, before: parentTools, after: toolsAt(full, toolsPath) };
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const t = args.indexOf('--tools');
  const toolsPath = t >= 0 ? args[t + 1] : 'data/tools.json';
  const positional = t >= 0 ? args.filter((_, k) => k !== t && k !== t + 1) : args;
  const out = positional[0] ?? fileURLToPath(new URL(`../${toolsPath.replace(/tools\.json$/, 'changelog.json')}`, import.meta.url));
  const changelog = buildChangelog(readHistory(toolsPath));
  writeFileSync(out, `${JSON.stringify(changelog, null, 2)}\n`);
  console.log(`${out}에 변경 이력을 만들었어요 (${changelog.length}건).`);
}
