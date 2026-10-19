// 툴 정보 초안 검사 테스트
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { isOfficialHost, toTool, validateDraft } from '../scripts/draft.js';
import { loadData } from '../scripts/validate-data.js';

const TODAY = '2026-10-19';
const { purposes } = loadData();
const demo = JSON.parse(readFileSync(new URL('../data/demo-tools.json', import.meta.url), 'utf8'));

/** 예시 툴 하나를 "검사를 통과하는 초안"으로 만든다 */
function makeDraft() {
  const { last_verified: _, ...tool } = structuredClone(demo.find((t) => t.id === 'bravo'));
  const src = tool.sources[0];
  const ev = (field) => ({ field, source: src, quote: '공식 페이지 문장' });
  return {
    ...tool,
    official_domains: ['example.com'],
    evidence: ['price.free', 'price.paid_from_usd', 'privacy.trains_on_input_default', 'privacy.opt_out', 'platforms', 'login'].map(ev),
    review_notes: ['적합도와 한국어 점수는 제안값이에요'],
  };
}

const errorsFor = (mutate) => {
  const d = makeDraft();
  mutate(d);
  return validateDraft([d], purposes, TODAY);
};

test('실제 초안 파일이 검사를 통과함', () => {
  const drafts = JSON.parse(readFileSync(new URL('../drafts/tools.draft.json', import.meta.url), 'utf8'));
  assert.deepEqual(validateDraft(drafts, purposes, TODAY), []);
});

test('올바른 초안은 통과', () => {
  assert.deepEqual(validateDraft([makeDraft()], purposes, TODAY), []);
});

test('공식 도메인 판정', () => {
  assert.equal(isOfficialHost('policy.naver.com', ['naver.com']), true);
  assert.equal(isOfficialHost('naver.com', ['naver.com']), true);
  assert.equal(isOfficialHost('naver.com.evil.io', ['naver.com']), false);
  assert.equal(isOfficialHost('fakenaver.com', ['naver.com']), false);
  assert.equal(isOfficialHost(null, ['naver.com']), false);
});

const failCases = [
  ['초안에 확인 날짜가 있음', (d) => { d.last_verified = TODAY; }, 'last_verified'],
  ['공식 도메인 목록 없음', (d) => { delete d.official_domains; }, 'official_domains'],
  ['출처가 공식 도메인이 아님 (블로그)', (d) => { d.sources.push('https://someblog.com/review'); }, '공식 도메인'],
  ['공식 주소가 비슷한 가짜 도메인', (d) => { d.url = 'https://example.com.evil.io/'; }, '공식 도메인'],
  ['근거 출처가 sources에 없음', (d) => { d.evidence[0].source = 'https://example.com/other'; }, 'sources에 없습니다'],
  ['근거 문장이 비어 있음', (d) => { d.evidence[0].quote = ''; }, 'quote'],
  ['학습 정책 값에 근거가 없음', (d) => { d.evidence = d.evidence.filter((e) => e.field !== 'privacy.opt_out'); }, '"privacy.opt_out" 값의 근거'],
  ['유료 가격 값에 근거가 없음', (d) => { d.evidence = d.evidence.filter((e) => e.field !== 'price.paid_from_usd'); }, '"price.paid_from_usd" 값의 근거'],
  ['tools.json 규칙 위반 (start_steps 2개)', (d) => { d.start_steps = ['하나', '둘']; }, 'start_steps'],
];

for (const [name, mutate, expected] of failCases) {
  test(`초안 검사 실패: ${name}`, () => {
    const errors = errorsFor(mutate);
    assert.ok(errors.some((e) => e.includes(expected)), JSON.stringify(errors));
  });
}

test('모르는 값(unknown, null)은 근거 없이도 통과', () => {
  const errors = errorsFor((d) => {
    d.privacy.opt_out = 'unknown';
    d.price.paid_from_usd = null;
    d.evidence = d.evidence.filter((e) => !['privacy.opt_out', 'price.paid_from_usd'].includes(e.field));
  });
  assert.deepEqual(errors, []);
});

test('확정하면 초안 전용 필드가 빠지고 확인 날짜가 붙음', () => {
  const tool = toTool(makeDraft(), '2026-10-20');
  assert.equal(tool.last_verified, '2026-10-20');
  for (const k of ['official_domains', 'evidence', 'review_notes']) assert.ok(!(k in tool));
});
