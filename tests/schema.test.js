// 데이터 스키마 테스트 (기획서 12장, docs/decisions.md)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateData, validateTools, validateGlossary, validateChangelog, loadData } from '../scripts/validate-data.js';

const TODAY = '2026-10-19';
const fixture = JSON.parse(readFileSync(new URL('../data/demo-tools.json', import.meta.url), 'utf8'));
const data = loadData();
const { purposes } = data;

const errorsFor = (mutate) => {
  const tools = structuredClone(fixture);
  mutate(tools[0], tools);
  return validateTools(tools, purposes, TODAY);
};

// 실제 데이터는 실제 오늘 날짜로 검사한다 (확인 날짜가 고정된 TODAY보다 뒤일 수 있어서)
const REAL_TODAY = new Date().toISOString().slice(0, 10);

test('실제 data/*.json이 검사를 통과함', () => {
  assert.deepEqual(validateData({ ...data, today: REAL_TODAY }), []);
});

test('확인 날짜가 하루 앞선 건 시간대 차이로 허용', () => {
  assert.deepEqual(errorsFor((t) => { t.last_verified = '2026-10-20'; }), []);
});

test('목적은 10개 (P01~P10)', () => {
  assert.deepEqual(purposes.map((p) => p.id), ['P01', 'P02', 'P03', 'P04', 'P05', 'P06', 'P07', 'P08', 'P09', 'P10']);
});

test('가짜 데이터가 검사를 통과함', () => {
  assert.deepEqual(validateTools(fixture, purposes, TODAY), []);
});

const failCases = [
  ['필수 필드 누락 (name)', (t) => { delete t.name; }, 'name'],
  ['필수 필드 누락 (price)', (t) => { delete t.price; }, 'price'],
  ['필수 필드 누락 (privacy)', (t) => { delete t.privacy; }, 'privacy'],
  ['sources가 비어 있음', (t) => { t.sources = []; }, 'sources'],
  ['sources에 https가 아닌 주소', (t) => { t.sources = ['http://example.com']; }, 'sources'],
  ['last_verified 형식 틀림', (t) => { t.last_verified = '2026/10/19'; }, 'last_verified'],
  ['last_verified가 없는 날짜', (t) => { t.last_verified = '2026-02-30'; }, 'last_verified'],
  ['last_verified 누락', (t) => { delete t.last_verified; }, 'last_verified'],
  ['last_verified가 이틀 이상 미래', (t) => { t.last_verified = '2026-10-21'; }, 'last_verified'],
  ['체크리스트에 없는 기능', (t) => { t.features.P01 = ['chat', 'fly']; }, '"fly"는 이 목적의 체크리스트에 없는 기능'],
  ['다른 목적의 기능', (t) => { t.features.P01 = ['transcribe']; }, 'features.P01'],
  ['없는 목적', (t) => { t.features.P99 = ['chat']; }, 'features.P99'],
  ['기능 배열이 비어 있음', (t) => { t.features.P01 = []; }, 'features.P01'],
  ['기능 중복', (t) => { t.features.P01 = ['chat', 'chat']; }, '중복된 기능'],
  ['기능이 숫자 (옛 적합도 형식)', (t) => { t.features.P01 = 3; }, 'features.P01'],
  ['지원 기능이 있는 목적이 없음', (t) => { t.features = {}; }, 'features'],
  ['features 누락', (t) => { delete t.features; }, 'features'],
  ['korean 범위 밖', (t) => { t.korean = 0; }, 'korean'],
  ['privacy 값 틀림', (t) => { t.privacy.opt_out = 'maybe'; }, 'privacy.opt_out'],
  ['price.free가 unknown', (t) => { t.price.free = 'unknown'; }, 'price.free'],
  ['billing 값 틀림', (t) => { t.price.billing = 'weekly'; }, 'price.billing'],
  ['paid_from_usd가 문자열', (t) => { t.price.paid_from_usd = '10'; }, 'price.paid_from_usd'],
  ['free_limit가 빈 문자열', (t) => { t.price.free_limit = ''; }, 'price.free_limit'],
  ['없는 platforms 값', (t) => { t.platforms = ['mobile']; }, 'platforms'],
  ['platforms가 비어 있음', (t) => { t.platforms = []; }, 'platforms'],
  ['login이 문자열', (t) => { t.login = 'google | email'; }, 'login'],
  ['없는 login 값', (t) => { t.login = ['facebook']; }, 'login'],
  ['login에 none과 다른 값', (t) => { t.login = ['none', 'email']; }, 'login'],
  ['start_steps가 3개가 아님', (t) => { t.start_steps = ['하나', '둘']; }, 'start_steps'],
  ['id 형식 틀림', (t) => { t.id = 'Alpha Tool'; }, 'id'],
  ['id 중복', (t, tools) => { tools[1].id = t.id; }, '중복된 id'],
];

for (const [name, mutate, expected] of failCases) {
  test(`검사 실패: ${name}`, () => {
    const errors = errorsFor(mutate);
    assert.ok(errors.some((e) => e.includes(expected)), `"${expected}" 오류가 없음: ${JSON.stringify(errors)}`);
  });
}

test('목적당 툴 수 상한 없음 (6개 이상도 통과)', () => {
  const tools = structuredClone(fixture);
  for (const t of tools) t.features.P05 = ['size'];
  assert.deepEqual(validateTools(tools, purposes, TODAY), []);
});

test('검사 실패: 목적의 기능 체크리스트가 4개가 아님', async () => {
  const { validatePurposes } = await import('../scripts/validate-data.js');
  const bad = structuredClone(purposes);
  bad[0].features.pop();
  assert.ok(validatePurposes(bad).some((e) => e.includes('purposes[0].features')));
  const dup = structuredClone(purposes);
  dup[1].features[1].id = dup[1].features[0].id;
  assert.ok(validatePurposes(dup).some((e) => e.includes('중복된 id')));
  const noShort = structuredClone(purposes);
  delete noShort[2].features[0].short;
  assert.ok(validatePurposes(noShort).some((e) => e.includes('label과 short')));
});

test('전체 툴 수 상한 없음 (41개도 통과)', () => {
  const base = fixture.find((t) => t.id === 'alpha');
  const tools = Array.from({ length: 41 }, (_, i) => ({ ...structuredClone(base), id: `tool-${i}` }));
  assert.deepEqual(validateTools(tools, purposes, TODAY), []);
});

test('검사 실패: 용어집 단어가 겹침', () => {
  const glossary = [
    { term: '토큰', aliases: [], description: '설명' },
    { term: '크레딧', aliases: ['토큰'], description: '설명' },
  ];
  assert.ok(validateGlossary(glossary).some((e) => e.includes('"토큰"가 다른 용어와 겹칩니다')));
});

test('검사 실패: 용어집 설명이 비어 있음', () => {
  assert.ok(validateGlossary([{ term: '토큰', aliases: [], description: '' }]).some((e) => e.includes('description')));
});

test('검사 실패: 변경 이력 형식', () => {
  assert.ok(validateChangelog([{ date: '2026/10/19', commit: 'abc', changes: [] }]).length >= 2);
  assert.deepEqual(validateChangelog([{ date: '2026-10-19', commit: 'abc1234', changes: [{ type: 'added', tool_id: 'gamma' }] }]), []);
});

test('예시 변경 이력이 검사를 통과함', () => {
  const demoChangelog = JSON.parse(readFileSync(new URL('../data/demo-changelog.json', import.meta.url), 'utf8'));
  assert.deepEqual(validateChangelog(demoChangelog), []);
});
