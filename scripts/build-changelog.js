// git 기록에서 data/tools.json이 바뀐 커밋마다 이전 버전과 비교해 변경 이력을 만든다.
// 배포할 때 자동으로 실행된다 (.github/workflows/deploy.yml). 레포에는 결과 파일을 커밋하지 않는다.
// 사용법: node scripts/build-changelog.js [저장할 경로]   (기본: data/changelog.json, 화면을 로컬에서 볼 때)
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { buildChangelog } from '../js/changelog.js';

const TOOLS_PATH = 'data/tools.json';
const root = fileURLToPath(new URL('..', import.meta.url));

const git = (...args) =>
  execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });

/** 그 커밋 시점의 tools.json. 파일이 없거나 JSON이 깨져 있으면 빈 목록으로 본다. */
function toolsAt(commit) {
  try {
    const parsed = JSON.parse(git('show', `${commit}:${TOOLS_PATH}`));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function readHistory() {
  const log = git('log', '--reverse', '--format=%H %h %cs', '--', TOOLS_PATH).trim();
  if (!log) return [];
  return log.split('\n').map((line) => {
    const [full, short, date] = line.split(' ');
    let parentTools = [];
    try {
      parentTools = toolsAt(git('rev-parse', `${full}^`).trim());
    } catch {
      // 첫 커밋이라 부모가 없다
    }
    return { commit: short, date, before: parentTools, after: toolsAt(full) };
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const out = process.argv[2] ?? fileURLToPath(new URL('../data/changelog.json', import.meta.url));
  const changelog = buildChangelog(readHistory());
  writeFileSync(out, `${JSON.stringify(changelog, null, 2)}\n`);
  console.log(`${out}에 변경 이력을 만들었어요 (${changelog.length}건).`);
}
