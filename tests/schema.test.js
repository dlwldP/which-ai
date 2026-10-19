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

test('실제 data/*.json이 검사를 통과함', () => {
  assert.deepEqual(validateData({ ...data, today: TODAY }), []);
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
  ['last_verified가 미래', (t) => { t.last_verified = '2026-10-20'; }, 'last_verified'],
  ['적합도 범위 밖', (t) => { t.purposes.P01 = 4; }, 'purposes.P01'],
  ['없는 목적', (t) => { t.purposes.P99 = 1; }, 'purposes.P99'],
  ['적합도 1 이상인 목적이 없음', (t) => { t.purposes = { P01: 0 }; }, 'purposes'],
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

test('검사 실패: 한 목적에 적합도 1 이상인 툴이 5개 초과', () => {
  const tools = structuredClone(fixture);
  for (const t of tools.slice(0, 6)) t.purposes.P05 = 1;
  const errors = validateTools(tools, purposes, TODAY);
  assert.ok(errors.some((e) => e.includes('P05에 적합도 1 이상인 툴이 6개')), JSON.stringify(errors));
});

test('적합도 0은 목적당 개수에 세지 않음', () => {
  const tools = structuredClone(fixture);
  for (const t of tools) t.purposes.P05 ??= 0;
  assert.deepEqual(validateTools(tools, purposes, TODAY), []);
});

test('검사 실패: 전체 툴 40개 초과', () => {
  const base = fixture.find((t) => t.id === 'alpha');
  const tools = Array.from({ length: 41 }, (_, i) => ({ ...base, id: `tool-${i}` }));
  const errors = validateTools(tools, purposes, TODAY);
  assert.ok(errors.includes('tools.json: 툴이 41개입니다 (최대 40개)'), JSON.stringify(errors));
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
