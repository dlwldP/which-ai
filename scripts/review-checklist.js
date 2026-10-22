// 초안 검토용 체크리스트를 만든다: drafts/*.draft.json → drafts/REVIEW.md
// J가 초안을 확정(promote)하기 전에 근거 문장을 공식 페이지와 대조할 때 쓴다.
// 근거 링크는 "텍스트 조각" 주소(#:~:text=)라서 크롬·엣지에서 열면 그 문장이 바로 강조돼요.
// 사용법: node scripts/review-checklist.js   (초안이 바뀌면 다시 실행)
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  aiNativeText, formsText, freeLimitText, freeText, koreanText, loginText, openSourceText, paidText, platformsText,
} from '../js/format.js';
import { KINDS } from './draft.js';

const SITE = { general: '비개발자용', dev: '개발자용' };
const POLICY = { yes: '예', no: '아니요', unknown: '확인 필요' };

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

/** 근거 field가 가리키는 값을 읽기 쉬운 글로 */
export function fieldValue(draft, field, purposes) {
  if (field.startsWith('features.')) {
    const [, pid, fid] = field.split('.');
    const p = purposes.find((x) => x.id === pid);
    const f = p?.features.find((x) => x.id === fid);
    return `✓ ${p ? p.label : pid} — ${f ? f.label : fid}`;
  }
  const { price = {}, privacy = {} } = draft;
  switch (field) {
    case 'price.free': return `무료 사용: ${freeText(price)}`;
    case 'price.free_limit': return `무료 한도: ${freeLimitText(price)}`;
    case 'price.paid_from_usd': return `유료 가격: ${paidText(price)}`;
    case 'price.billing': return `결제 주기: ${price.billing}`;
    case 'privacy.trains_on_input_default': return `기본으로 학습에 씀: ${POLICY[privacy.trains_on_input_default] ?? '?'}`;
    case 'privacy.opt_out': return `학습 끄기 가능: ${POLICY[privacy.opt_out] ?? '?'}`;
    case 'privacy.note': return `학습 메모: ${privacy.note}`;
    case 'platforms': return `사용 기기: ${platformsText(draft.platforms ?? [])}`;
    case 'login': return `가입 방법: ${draft.login ? loginText(draft.login) : '확인 필요'}`;
    case 'korean': return `한국어: ${koreanText(draft.korean)}`;
    case 'open_source': return `오픈소스: ${draft.open_source === null ? '확인 필요' : openSourceText(draft.open_source)}`;
    case 'forms': return `쓰는 형태: ${formsText(draft.forms ?? [])}`;
    default: return field;
  }
}

const quoteMd = (s) => s.replace(/\s+/g, ' ').replace(/([*_`[\]|<>])/g, '\\$1');
const anchor = (d, kind) => `${kind}-${d.id}`;

function toolSection(d, kind, purposes) {
  const lines = [];
  lines.push(`<a id="${anchor(d, kind)}"></a>`, `### ${d.name} (\`${d.id}\`) · ${SITE[kind]}`, '');
  lines.push(`공식 주소: ${d.url}  `, `공식 도메인: ${(d.official_domains ?? []).map((x) => `\`${x}\``).join(', ')}`, '');

  lines.push('**1. 공식 도메인 확인**', '');
  lines.push('- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)', '');

  lines.push(`**2. 근거 대조** (${d.evidence.length}개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크`, '');
  if (d.evidence.length === 0) lines.push('- 근거 없음 (페이지를 읽지 못함)');
  for (const e of d.evidence) {
    lines.push(`- [ ] ${fieldValue(d, e.field, purposes)}  `);
    lines.push(`  “${quoteMd(e.quote)}” · [페이지에서 보기](${textFragmentUrl(e.source, e.quote)})`);
  }
  lines.push('');

  if (d.todo?.length) {
    lines.push('**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요', '');
    for (const f of d.todo) lines.push(`- [ ] \`${f}\``);
    lines.push('');
  }

  lines.push('**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요', '');
  if (kind === 'general') lines.push(`- [ ] 한국어 점수: ${koreanText(d.korean)} (${d.korean}점)`);
  else {
    const primary = purposes.find((p) => p.id === d.primary);
    lines.push(`- [ ] AI 여부: ${aiNativeText(d.ai_native)}`, `- [ ] 섹션: ${d.section === 'official' ? '공식 AI 툴' : '오픈소스 프로젝트'}`);
    lines.push(`- [ ] 대표 목적: ${primary ? primary.label : d.primary}`);
  }
  lines.push(`- [ ] 한 줄 설명: ${d.one_liner}`);
  lines.push(`- [ ] 시작 3단계: ${d.start_steps.map((s, i) => `${i + 1}) ${s}`).join(' ')}`);
  lines.push(`- [ ] 주의할 점: ${d.cautions.length ? d.cautions.join(' / ') : '없음'}`, '');

  if (d.review_notes?.length) {
    lines.push('**5. Claude 메모**', '');
    for (const n of d.review_notes) lines.push(`- ${n}`);
    lines.push('');
  }

  lines.push('**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)', '');
  lines.push('```sh', `node scripts/draft.js promote ${d.id} --verified YYYY-MM-DD${kind === 'dev' ? ' --dev' : ''}`, '```', '');
  return lines.join('\n');
}

/** @param {{ general: object[], dev: object[] }} drafts  @param {{ general: object[], dev: object[] }} purposes */
export function buildChecklist(drafts, purposes) {
  const out = [
    '# 초안 검토 체크리스트',
    '',
    '`node scripts/review-checklist.js`로 만든 파일이에요. 직접 고치지 말고, 초안이 바뀌면 다시 만들어요.',
    '',
    '툴마다 순서대로 확인해요: ① 공식 도메인 → ② 근거 문장 대조 → ③ 비어 있는 칸 채우기 → ④ 제안값 정하기 → ⑥ 확정.',
    '근거 링크는 크롬·엣지에서 열면 그 문장이 노랗게 강조돼요. 강조가 안 되면 Ctrl+F(맥은 ⌘+F)로 문장 앞부분을 찾아요.',
    '',
    '| 툴 | 사이트 | 근거 | J가 채울 칸 |',
    '| --- | --- | --- | --- |',
  ];
  for (const kind of ['general', 'dev']) {
    for (const d of drafts[kind]) {
      out.push(`| [${d.name}](#${anchor(d, kind)}) | ${SITE[kind]} | ${d.evidence.length}개 | ${d.todo?.length ? d.todo.map((f) => `\`${f}\``).join(' ') : '없음'} |`);
    }
  }
  out.push('');
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
  const target = new URL('../drafts/REVIEW.md', import.meta.url);
  writeFileSync(target, buildChecklist(drafts, purposes));
  console.log(`drafts/REVIEW.md를 만들었어요: 비개발자용 ${drafts.general.length}개, 개발자용 ${drafts.dev.length}개`);
}
