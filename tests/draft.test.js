// 툴 정보 초안 검사 테스트 (2026-11-06 개편: 근거는 가격 문장 하나)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { KINDS, toTool, validateDraft } from '../scripts/draft.js';
import { loadData } from '../scripts/validate-data.js';
import { loadDevData } from '../scripts/validate-dev-data.js';

const TODAY = '2026-10-19';
const { purposes } = loadData();
const devPurposes = loadDevData().purposes;
const read = (p) => JSON.parse(readFileSync(new URL(`../${p}`, import.meta.url), 'utf8'));

/** 예시 툴 하나를 "검사를 통과하는 초안"으로 만든다 */
function makeDraft(file = 'data/demo-tools.json', id = 'bravo') {
  const { last_verified: _, ...tool } = structuredClone(read(file).find((t) => t.id === id));
  return { ...tool, evidence: [{ field: 'price', source: tool.sources[0], quote: '공식 페이지 문장' }], review_notes: ['메모'], todo: [] };
}
const errorsFor = (mutate, kind = 'general') => {
  const d = kind === 'dev' ? makeDraft('data/dev/demo-tools.json', 'dev-alpha') : makeDraft();
  mutate(d);
  return validateDraft([d], kind === 'dev' ? devPurposes : purposes, TODAY, kind);
};

test('실제 초안 파일이 검사를 통과함', () => {
  for (const [name, kind] of Object.entries(KINDS)) {
    assert.deepEqual(validateDraft(JSON.parse(readFileSync(kind.draftUrl, 'utf8')), kind.load().purposes, TODAY, name), []);
  }
});

test('올바른 초안은 통과 (비개발자용·개발자용)', () => {
  assert.deepEqual(errorsFor(() => {}), []);
  assert.deepEqual(errorsFor(() => {}, 'dev'), []);
});

const failCases = [
  ['초안에 확인 날짜가 있음', (d) => { d.last_verified = '2026-10-01'; }],
  ['가격 값에 근거가 없음', (d) => { d.evidence = []; }],
  ['근거 출처가 sources에 없음', (d) => { d.evidence[0].source = 'https://example.com/other'; }],
  ['근거 출처가 공식 도메인이 아님', (d) => { d.sources.push('https://blog.other.com/x'); d.evidence[0].source = 'https://blog.other.com/x'; }],
  ['근거 문장이 비어 있음', (d) => { d.evidence[0].quote = ' '; }],
  ['공식 주소가 비슷한 가짜 도메인', (d) => { d.url = 'https://examp1e.com/'; }],
  ['todo에 없는 칸 이름', (d) => { d.todo = ['privacy']; }],
];
for (const [name, mutate] of failCases) {
  test(`초안 검사 실패: ${name}`, () => assert.ok(errorsFor(mutate).length > 0));
}

test('가격을 모르면(null) 근거 없이 통과, todo에 price를 두면 근거 없이 통과', () => {
  assert.deepEqual(errorsFor((d) => { d.price = { free: null, paid: null }; d.evidence = []; }), []);
  assert.deepEqual(errorsFor((d) => { d.todo = ['price']; d.evidence = []; }), []);
});

test('확정하면 초안 전용 필드가 빠지고 확인 날짜가 붙음', () => {
  const tool = toTool(makeDraft(), '2026-10-20');
  for (const k of ['evidence', 'review_notes', 'todo']) assert.ok(!(k in tool), k);
  assert.equal(tool.last_verified, '2026-10-20');
  assert.ok(tool.official_domains);
});
