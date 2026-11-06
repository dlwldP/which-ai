// 초안 목록: drafts/*.draft.json → drafts/REVIEW.md
// 아직 확정하지 못한 툴과 이유(가격 근거를 못 찾음 등)를 한눈에 본다. 근거 링크는 "텍스트 조각" 주소(#:~:text=)라서
// 크롬·엣지에서 열면 그 문장이 바로 강조돼요.
// 사용법: node scripts/review-checklist.js   (초안이 바뀌면 다시 실행)
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { priceBadge, useText } from '../js/format.js';
import { KINDS } from './draft.js';

const SITE = { general: '비개발자용', dev: '개발자용' };

// 텍스트 조각 안에서 특별한 뜻이 있는 글자(- , &)와 마크다운 링크를 끊는 괄호까지 인코딩한다
const enc = (s) => encodeURIComponent(s).replace(/[-!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);

/** 공식 페이지 주소 + 근거 문장 → 그 문장을 강조해서 여는 주소. 긴 문장은 앞·뒤 5단어로 범위를 지정한다. */
export function textFragmentUrl(url, quote) {
  const words = quote.replace(/^[•·—–\-\s]+/, '').trim().split(/\s+/);
  const text = words.length <= 10
    ? enc(words.join(' '))
    : `${enc(words.slice(0, 5).join(' '))},${enc(words.slice(-5).join(' '))}`;
  return url.includes('#') ? `${url}:~:text=${text}` : `${url}#:~:text=${text}`;
}

const quoteMd = (s) => s.replace(/\s+/g, ' ').replace(/([*_`[\]|<>])/g, '\\$1');

function toolSection(d, kind, purposes) {
  const label = (id) => purposes.find((p) => p.id === id)?.label ?? id;
  const lines = [`### ${d.name} (\`${d.id}\`) · ${SITE[kind]}`, ''];
  lines.push(`- 공식 주소: ${d.url} (공식 도메인 ${(d.official_domains ?? []).map((x) => `\`${x}\``).join(', ')})`);
  lines.push(`- 용도: ${(d.purposes ?? []).map(label).join(', ')}`);
  lines.push(`- 가격: ${d.price ? priceBadge(d.price).text : '?'} · 쓰는 방법: ${useText(d.use ?? [], kind).join(', ')}`);
  if (d.todo?.length) lines.push(`- 채울 칸: ${d.todo.map((f) => `\`${f}\``).join(' ')}`);
  for (const e of d.evidence ?? []) lines.push(`- 근거(${e.field}): “${quoteMd(e.quote)}” · [페이지에서 보기](${textFragmentUrl(e.source, e.quote)})`);
  for (const n of d.review_notes ?? []) lines.push(`- 메모: ${n}`);
  lines.push('');
  return lines.join('\n');
}

/** @param {{ general: object[], dev: object[] }} drafts  @param {{ general: object[], dev: object[] }} purposes */
export function buildChecklist(drafts, purposes) {
  const out = [
    '# 초안 목록',
    '',
    '`node scripts/review-checklist.js`로 만든 파일이에요. 직접 고치지 말고, 초안이 바뀌면 다시 만들어요.',
    '',
    '근거 대조를 통과하고 채울 칸이 없는 초안은 Claude가 바로 확정해요 (drafts/README.md). 여기 남은 건 아직 확정하지 못한 툴이에요.',
    '',
  ];
  for (const kind of ['general', 'dev']) {
    out.push(`## ${SITE[kind]} (${drafts[kind].length}개)`, '');
    for (const d of drafts[kind]) out.push(toolSection(d, kind, purposes[kind]));
  }
  return `${out.join('\n').trimEnd()}\n`;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const drafts = {};
  const purposes = {};
  for (const [name, kind] of Object.entries(KINDS)) {
    drafts[name] = JSON.parse(readFileSync(kind.draftUrl, 'utf8'));
    purposes[name] = kind.load().purposes;
  }
  writeFileSync(new URL('../drafts/REVIEW.md', import.meta.url), buildChecklist(drafts, purposes));
  console.log(`drafts/REVIEW.md를 만들었어요: 비개발자용 ${drafts.general.length}개, 개발자용 ${drafts.dev.length}개`);
}
