// 개발자용 데이터 검사와 추천 규칙 테스트 (docs/개발자용_기획서.md)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { recommend } from '../js/recommend.js';
import { loadDevData, validateDevData, validateDevTools } from '../scripts/validate-dev-data.js';

const TODAY = '2026-10-19';
const demo = JSON.parse(readFileSync(new URL('../data/dev/demo-tools.json', import.meta.url), 'utf8'));
const { tools: realTools, purposes, glossary } = loadDevData();
const purposeIds = purposes.map((p) => p.id);
const rec = (purposeId, conditions = {}, tools = demo) => recommend({ tools, purposeId, conditions, today: TODAY, profile: 'dev' });

const allConditions = [{}, { freeOnly: true }, { openSourceOnly: true }, { freeOnly: true, openSourceOnly: true }];

// ---- 데이터 검사 ----

test('실제 data/dev/*.json이 검사를 통과함', () => {
  assert.deepEqual(validateDevData({ tools: realTools, purposes, glossary, today: TODAY }), []);
});

test('개발자용 예시 변경 이력이 검사를 통과함', async () => {
  const { validateChangelog } = await import('../scripts/validate-data.js');
  const log = JSON.parse(readFileSync(new URL('../data/dev/demo-changelog.json', import.meta.url), 'utf8'));
  assert.deepEqual(validateChangelog(log), []);
});

test('목적 9개, 카테고리 ID', () => {
  assert.deepEqual(purposeIds, ['planning', 'app_builders', 'coding_agents', 'backend_database', 'design_ui', 'data_ml', 'devops', 'automation', 'code_review']);
});

test('예시 데이터가 검사를 통과함', () => {
  assert.deepEqual(validateDevTools(demo, purposes, TODAY), []);
});

const failCases = [
  ['공식 도메인 목록 없음', (t) => { delete t.official_domains; }, 'official_domains'],
  ['공식 주소가 비슷한 가짜 도메인', (t) => { t.url = 'https://alpha.example.com.evil.io/'; }, '.url'],
  ['출처가 블로그', (t) => { t.sources.push('https://someblog.com/review'); }, '.sources'],
  ['배울 거리가 공식 도메인이 아님 (강좌 사이트)', (t) => { t.learn.push({ title: '강좌', url: 'https://www.boostcourse.org/x' }); }, '공식 도메인 주소가 아닙니다'],
  ['배울 거리가 http', (t) => { t.learn[0].url = 'http://alpha.example.com/docs'; }, 'learn[0]'],
  ['오픈소스인데 저장소 주소 없음', (t) => { delete t.repo_url; }, 'repo_url'],
  ['저장소가 허용 안 된 호스트', (t) => { t.repo_url = 'https://codeberg.example.net/x'; }, 'repo_url'],
  ['대표 목적이 적합도 0', (t) => { t.primary = 'devops'; }, 'primary'],
  ['ai_native 값 틀림', (t) => { t.ai_native = 'maybe'; }, 'ai_native'],
  ['forms 값 틀림', (t) => { t.forms = ['mobile']; }, 'forms'],
  ['없는 목적', (t) => { t.purposes.P01 = 1; }, 'purposes.P01'],
  ['start_steps 2개', (t) => { t.start_steps = ['하나', '둘']; }, 'start_steps'],
  ['확인 날짜가 미래', (t) => { t.last_verified = '2026-10-20'; }, 'last_verified'],
];

for (const [name, mutate, expected] of failCases) {
  test(`개발자용 검사 실패: ${name}`, () => {
    const tools = structuredClone(demo);
    mutate(tools[0]);
    const errors = validateDevTools(tools, purposes, TODAY);
    assert.ok(errors.some((e) => e.includes(expected)), JSON.stringify(errors));
  });
}

test('공식 도메인의 하위 주소는 허용', () => {
  const tools = structuredClone(demo);
  tools[0].learn.push({ title: '튜토리얼', url: 'https://docs.alpha.example.com/start' });
  assert.deepEqual(validateDevTools(tools, purposes, TODAY), []);
});

test('한 목적에 적합도 1 이상인 도구가 5개 초과면 실패', () => {
  const tools = structuredClone(demo);
  // planning은 golf·hotel 2개 → 4개를 더하면 6개
  for (const t of tools.slice(0, 4)) t.purposes.planning = 1;
  assert.ok(validateDevTools(tools, purposes, TODAY).some((e) => e.includes('planning에 적합도 1 이상인 도구가 6개')));
});

// ---- 추천 규칙 ----

test('오픈소스만 조건에서 오픈소스가 아닌 도구가 나오지 않음 (조건을 뺀 경우 제외)', () => {
  for (const pid of purposeIds) {
    for (const c of allConditions.filter((x) => x.openSourceOnly)) {
      const { results, relaxed } = rec(pid, c);
      if (relaxed.includes('openSourceOnly')) continue;
      for (const r of results) assert.equal(r.tool.open_source, true, `${pid} ${r.id}`);
    }
  }
});

test('무료만 조건에서 유료 전용 도구가 나오지 않음 (조건을 뺀 경우 제외)', () => {
  for (const pid of purposeIds) {
    for (const c of allConditions.filter((x) => x.freeOnly)) {
      const { results, relaxed } = rec(pid, c);
      if (relaxed.includes('freeOnly')) continue;
      for (const r of results) assert.equal(r.tool.price.free, true, `${pid} ${r.id}`);
    }
  }
});

test('모든 목적에서 조건 없이 최소 2개 추천, 이유 1개 이상', () => {
  for (const pid of purposeIds) {
    const { results } = rec(pid);
    assert.ok(results.length >= 2, `${pid}: ${results.length}개`);
    for (const r of results) assert.ok(r.reasons.length >= 1);
  }
});

test('점수: 적합도×10 + AI 핵심 2 + 무료 2 - 90일 초과 3', () => {
  const { results } = rec('backend_database');
  // delta: 30 + 0(AI 아님) + 2(무료) = 32, echo: 20 + 0(일부) + 0 - 3(오래됨) = 17
  assert.deepEqual(results.map((r) => [r.id, r.score]), [['dev-delta', 32], ['dev-echo', 17]]);
  const coding = rec('coding_agents').results;
  // alpha: 30 + 2 + 2 = 34, bravo: 20 + 2 + 0 = 22
  assert.deepEqual(coding.map((r) => [r.id, r.score]), [['dev-alpha', 34], ['dev-bravo', 22]]);
});

test('추천 이유: 오픈소스, AI 툴 아님', () => {
  const delta = rec('backend_database').results.find((r) => r.id === 'dev-delta');
  assert.deepEqual(delta.reasons, [
    '이 일에 가장 많이 쓰는 도구예요',
    '오픈소스예요',
    'AI 툴은 아니지만 AI로 만든 앱에 자주 같이 써요',
    '무료로 시작할 수 있어요',
  ]);
});

test('결과가 0개면 오픈소스 조건부터 뺌', () => {
  // planning: 오픈소스 도구가 없음 → 오픈소스 조건을 빼면 golf·hotel
  const out = rec('planning', { openSourceOnly: true });
  assert.deepEqual(out.relaxed, ['openSourceOnly']);
  assert.equal(out.notice, '오픈소스 조건을 빼면 이런 선택지가 있어요');
  // code_review + 오픈소스 + 무료: alpha(오픈소스·무료)가 있으므로 빼지 않음
  assert.deepEqual(rec('code_review', { openSourceOnly: true, freeOnly: true }).relaxed, []);
});

test('같은 입력 100회 → 같은 결과', () => {
  const first = rec('coding_agents', { freeOnly: true });
  for (let i = 0; i < 100; i++) assert.deepEqual(rec('coding_agents', { freeOnly: true }), first);
});

test('profile과 목적 ID 형식이 맞아야 함', () => {
  assert.throws(() => recommend({ tools: demo, purposeId: 'P01', today: TODAY, profile: 'dev' }), TypeError);
  assert.throws(() => recommend({ tools: demo, purposeId: 'planning', today: TODAY }), TypeError);
  assert.throws(() => recommend({ tools: demo, purposeId: 'planning', today: TODAY, profile: 'nope' }), TypeError);
});

test('[실제 데이터] 모든 목적에서 조건 없이 최소 2개 추천됨', { skip: realTools.length === 0 && 'data/dev/tools.json이 아직 비어 있음' }, () => {
  for (const pid of purposeIds) assert.ok(rec(pid, {}, realTools).results.length >= 2, pid);
});

test('조건에 맞는 도구가 없으면 도구 문구로 안내', () => {
  const tools = demo.filter((t) => t.id === 'dev-bravo'); // devops 적합도 0 → 후보 없음
  const out = recommend({ tools, purposeId: 'devops', today: TODAY, profile: 'dev' });
  assert.deepEqual(out.results, []);
  assert.equal(out.notice, '조건에 맞는 도구가 아직 없어요');
});
