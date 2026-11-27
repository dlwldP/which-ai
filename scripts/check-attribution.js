// 커밋 메시지·PR 본문에 작성 도구 표시가 있는지 검사한다 (AGENTS.md: 작성 도구 표시 금지, 2026-11-06 J 결정).
// PR 검사(.github/workflows/pr-check.yml)가 PR 본문과 PR의 커밋 메시지를 넘겨서 실행한다.
// 사용법: node scripts/check-attribution.js <파일>...   (표시가 있으면 줄을 보여주고 실패)
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const PATTERNS = [
  /generated (by|with)\b/i,
  /co-authored-by:/i,
  /claude\.ai\/code\/session/i,
  /claude-session:/i,
];

/** 표시가 있는 줄 목록 [{ line, text }] */
export function findAttribution(text) {
  return String(text ?? '')
    .split('\n')
    .map((t, i) => ({ line: i + 1, text: t.trim() }))
    .filter((l) => PATTERNS.some((p) => p.test(l.text)));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  let found = 0;
  for (const file of process.argv.slice(2)) {
    for (const f of findAttribution(readFileSync(file, 'utf8'))) {
      console.error(`${file}:${f.line}: 작성 도구 표시가 있어요 → ${f.text}`);
      found += 1;
    }
  }
  if (found) {
    console.error('커밋 메시지나 PR 본문에서 위 줄을 지워 주세요 (AGENTS.md).');
    process.exit(1);
  }
  console.log('작성 도구 표시 없음');
}
