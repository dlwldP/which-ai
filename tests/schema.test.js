// 데이터 스키마 테스트 (scripts/validate-data.js, validate-dev-data.js)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { loadData, validateChangelog, validateData, validateGlossary, validateTools } from '../scripts/validate-data.js';
import { loadDevData, validateDevData } from '../scripts/validate-dev-data.js';

const TODAY = '2026-10-19';
const REAL_TODAY = new Date().toISOString().slice(0, 10);
const read = (p) => JSON.parse(readFileSync(new URL(`../${p}`, import.meta.url), 'utf8'));
const fixture = read('data/demo-tools.json');
const devFixture = read('data/dev/demo-tools.json');
const data = loadData();
const devData = loadDevData();

const errorsFor = (mutate) => {
  const tools = structuredClone(fixture);
  mutate(tools[0]);
  return validateTools(tools, data.purposes, TODAY);
};
const devErrorsFor = (mutate) => {
  const tools = structuredClone(devFixture);
  mutate(tools[0]);
  return validateDevData({ ...devData, tools, today: TODAY });
};

test('실제 데이터가 검사를 통과함', () => {
  assert.deepEqual(validateData({ ...data, today: REAL_TODAY }), []);
  assert.deepEqual(validateDevData({ ...devData, today: REAL_TODAY }), []);
});

test('예시 데이터가 검사를 통과함', () => {
  assert.deepEqual(validateTools(fixture, data.purposes, TODAY), []);
  assert.deepEqual(validateDevData({ ...devData, tools: devFixture, today: TODAY }), []);
});

test('확인 날짜가 하루 앞선 건 시간대 차이로 허용, 이틀은 실패', () => {
  assert.deepEqual(errorsFor((t) => { t.last_verified = '2026-10-20'; }), []);
  assert.ok(errorsFor((t) => { t.last_verified = '2026-10-21'; }).some((e) => e.includes('last_verified')));
});

const failCases = [
  ['이름 없음', (t) => { delete t.name; }, 'name'],
  ['용도 없음', (t) => { t.purposes = []; }, 'purposes'],
  ['없는 용도', (t) => { t.purposes = ['P99']; }, 'purposes'],
  ['가격 모양이 틀림', (t) => { t.price = { free: 'yes', paid: null }; }, 'price.free'],
  ['무료도 유료도 아님', (t) => { t.price = { free: false, paid: false }; }, 'price'],
  ['쓰는 방법 없음', (t) => { t.use = []; }, 'use'],
  ['없는 쓰는 방법', (t) => { t.use = ['fax']; }, 'use'],
  ['공식 주소가 다른 도메인', (t) => { t.url = 'https://examp1e.com/'; }, 'url'],
  ['출처가 블로그', (t) => { t.sources = ['https://blog.other.com/review']; }, 'sources'],
  ['http 주소', (t) => { t.url = 'http://example.com/'; }, 'url'],
  ['공식 도메인 목록 없음', (t) => { delete t.official_domains; }, 'official_domains'],
  ['저장소 주소가 허용 안 된 곳', (t) => { t.repo_url = 'https://bitbucket.org/x/y'; }, 'repo_url'],
];
for (const [name, mutate, field] of failCases) {
  test(`검사 실패: ${name}`, () => {
    assert.ok(errorsFor(mutate).some((e) => e.includes(`.${field}`)), errorsFor(mutate).join('\n'));
  });
}

test('저장소·모델 주소는 GitHub·GitLab·Hugging Face 허용', () => {
  for (const url of ['https://github.com/a/b', 'https://gitlab.com/a/b', 'https://huggingface.co/a/b']) {
    assert.deepEqual(errorsFor((t) => { t.repo_url = url; t.sources = [...t.sources, url]; }), []);
  }
});

test('개발자용: 묶음과 AI 여부가 필요, 오픈소스·모델은 저장소 주소가 필요', () => {
  assert.ok(devErrorsFor((t) => { t.kind = 'other'; }).some((e) => e.includes('.kind')));
  assert.ok(devErrorsFor((t) => { delete t.ai_native; }).some((e) => e.includes('.ai_native')));
  assert.ok(devErrorsFor((t) => { t.kind = 'model'; delete t.repo_url; }).some((e) => e.includes('.repo_url')));
  // 오픈소스는 공식 주소로 저장소 주소를 써도 된다
  assert.deepEqual(devErrorsFor((t) => { t.url = t.repo_url; }), []);
});

test('용어집·변경 이력 검사', () => {
  assert.ok(validateGlossary([{ term: '', description: 'x', aliases: [] }]).length > 0);
  assert.ok(validateChangelog([{ date: '2026-13-01', commit: 'a', changes: [] }]).length > 0);
});
