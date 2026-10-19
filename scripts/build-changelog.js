// git 기록에서 data/tools.json이 바뀐 커밋마다 이전 버전과 비교해 data/changelog.json을 다시 만든다.
// 사용법: node scripts/build-changelog.js        (결과를 data/changelog.json에 쓴다)
//         node scripts/build-changelog.js --check (파일이 최신이 아니면 실패)
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { buildChangelog } from '../js/changelog.js';

const TOOLS_PATH = 'data/tools.json';
const OUT = new URL('../data/changelog.json', import.meta.url);
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
  const text = `${JSON.stringify(buildChangelog(readHistory()), null, 2)}\n`;
  if (process.argv.includes('--check')) {
    if (readFileSync(OUT, 'utf8') !== text) {
      console.error('data/changelog.json이 최신이 아니에요. node scripts/build-changelog.js 를 실행하세요.');
      process.exit(1);
    }
    console.log('data/changelog.json이 최신이에요.');
  } else {
    writeFileSync(OUT, text);
    console.log(`data/changelog.json을 만들었어요 (${JSON.parse(text).length}건).`);
  }
}
