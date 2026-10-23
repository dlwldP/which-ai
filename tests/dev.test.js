// 개발자용 데이터 검사와 추천 규칙 테스트 (docs/개발자용_기획서.md)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { recommend, recommendSections } from '../js/recommend.js';
import { loadDevData, validateDevData, validateDevTools } from '../scripts/validate-dev-data.js';

const TODAY = '2026-10-19';
const demo = JSON.parse(readFileSync(new URL('../data/dev/demo-tools.json', import.meta.url), 'utf8'));
const { tools: realTools, purposes, glossary } = loadDevData();
const purposeIds = purposes.map((p) => p.id);
const featuresOf = (pid) => purposes.find((p) => p.id === pid).features;
const rec = (purposeId, conditions = {}, tools = demo) => recommend({
  tools, purposeId, conditions, today: TODAY, profile: 'dev', purposeFeatures: featuresOf(purposeId),
});

const allConditions = [{}, { freeOnly: true }, { openSourceOnly: true }, { freeOnly: true, openSourceOnly: true }];

// ---- 데이터 검사 ----

test('실제 data/dev/*.json이 검사를 통과함', () => {
  assert.deepEqual(validateDevData({ tools: realTools, purposes, glossary, today: new Date().toISOString().slice(0, 10) }), []);
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
  ['대표 목적의 기능을 지원하지 않음', (t) => { t.primary = 'devops'; }, 'primary'],
  ['ai_native 값 틀림', (t) => { t.ai_native = 'maybe'; }, 'ai_native'],
  ['forms 값 틀림', (t) => { t.forms = ['mobile']; }, 'forms'],
  ['없는 목적', (t) => { t.features.P01 = ['chat']; }, 'features.P01'],
  ['체크리스트에 없는 기능', (t) => { t.features.coding_agents = ['teleport']; }, '체크리스트에 없는 기능'],
  ['start_steps 2개', (t) => { t.start_steps = ['하나', '둘']; }, 'start_steps'],
  ['확인 날짜가 이틀 이상 미래', (t) => { t.last_verified = '2026-10-21'; }, 'last_verified'],
  ['섹션 없음', (t) => { delete t.section; }, '.section'],
  ['섹션 값 틀림', (t) => { t.section = 'repo'; }, '.section'],
  ['오픈소스가 아닌데 open_source 섹션', (t) => { t.open_source = false; delete t.repo_url; }, 'open_source 섹션은 오픈소스'],
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

test('한 목적·한 섹션의 도구 수 상한 없음', () => {
  const tools = structuredClone(demo);
  for (const t of tools) {
    t.features.planning = ['issues'];
    t.section = t.open_source ? t.section : 'official';
  }
  assert.deepEqual(validateDevTools(tools, purposes, TODAY), []);
});

test('섹션이 다르면 따로 셈 (official 5개 + open_source 3개는 통과)', () => {
  const tools = structuredClone(demo);
  // official 5개(bravo·charlie·echo·golf·hotel), open_source 3개(alpha·delta·foxtrot)를 모두 planning에
  for (const t of tools) t.features.planning = ['issues'];
  assert.deepEqual(validateDevTools(tools, purposes, TODAY), []);
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

test('점수: 지원 기능 수×10 + AI 핵심 2 + 무료 2 - 90일 초과 3', () => {
  const { results } = rec('backend_database');
  // delta: 기능 4개 40 + 0(AI 아님) + 2(무료) = 42, echo: 기능 2개 20 + 0(일부) + 0 - 3(오래됨) = 17
  assert.deepEqual(results.map((r) => [r.id, r.score]), [['dev-delta', 42], ['dev-echo', 17]]);
  const coding = rec('coding_agents').results;
  // alpha: 40 + 2 + 2 = 44, bravo: 20 + 2 + 0 = 22
  assert.deepEqual(coding.map((r) => [r.id, r.score]), [['dev-alpha', 44], ['dev-bravo', 22]]);
});

test('추천 이유: 오픈소스, AI 툴 아님', () => {
  const delta = rec('backend_database').results.find((r) => r.id === 'dev-delta');
  assert.deepEqual(delta.reasons, [
    'DB, 인증, 스토리지, 자연어 쿼리 지원 (4개 중 4개)',
    '오픈소스예요',
    'AI 툴은 아니지만 AI로 만든 앱에 자주 같이 써요',
    '무료로 시작할 수 있어요',
  ]);
});

test('오픈소스 조건을 켜면 오픈소스 이유가 대표 이유', () => {
  const delta = rec('backend_database', { openSourceOnly: true }).results.find((r) => r.id === 'dev-delta');
  assert.deepEqual(delta.reasons, [
    '오픈소스예요',
    'DB, 인증, 스토리지, 자연어 쿼리 지원 (4개 중 4개)',
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

// 목표치라서 todo로 둔다: 실제 데이터를 하나씩 넣는 동안 배포를 막지 않고, 결과에 빈 목적만 보여준다
test('[실제 데이터] 모든 목적에서 조건 없이 최소 2개 추천됨 (목표)', { skip: realTools.length === 0 && 'data/dev/tools.json이 아직 비어 있음', todo: '도구를 넣는 중' }, () => {
  for (const pid of purposeIds) assert.ok(rec(pid, {}, realTools).results.length >= 2, pid);
});

test('조건에 맞는 도구가 없으면 도구 문구로 안내', () => {
  const tools = demo.filter((t) => t.id === 'dev-bravo'); // devops 적합도 0 → 후보 없음
  const out = recommend({ tools, purposeId: 'devops', today: TODAY, profile: 'dev' });
  assert.deepEqual(out.results, []);
  assert.equal(out.notice, '조건에 맞는 도구가 아직 없어요');
});

// ---- 섹션 (공식 AI 툴 / 오픈소스) ----

test('개발자용은 공식 AI 툴과 오픈소스 섹션을 따로 추천하고, 섹션마다 최대 3개', () => {
  for (const pid of purposeIds) {
    for (const c of allConditions) {
      const sections = recommendSections({ tools: demo, purposeId: pid, conditions: c, today: TODAY, profile: 'dev' });
      assert.deepEqual(sections.map((x) => x.key), ['official', 'open_source']);
      for (const { key, results } of sections) {
        assert.ok(results.length <= 3);
        for (const r of results) assert.equal(r.tool.section, key, `${pid} ${r.id}`);
      }
    }
  }
});

test('섹션마다 따로 조건을 빼고 안내함', () => {
  // backend_database + 오픈소스만: 공식 섹션(echo)은 오픈소스가 없어서 조건을 빼고, 오픈소스 섹션(delta)은 그대로
  const [official, openSource] = recommendSections({
    tools: demo, purposeId: 'backend_database', conditions: { openSourceOnly: true }, today: TODAY, profile: 'dev',
  });
  assert.deepEqual(official.results.map((r) => r.id), ['dev-echo']);
  assert.deepEqual(official.relaxed, ['openSourceOnly']);
  assert.deepEqual(openSource.results.map((r) => r.id), ['dev-delta']);
  assert.equal(openSource.notice, null);
});

test('섹션에 후보가 없으면 그 섹션만 "아직 없어요"', () => {
  const [official, openSource] = recommendSections({ tools: demo, purposeId: 'planning', today: TODAY, profile: 'dev' });
  assert.ok(official.results.length > 0);
  assert.deepEqual(openSource.results, []);
  assert.equal(openSource.notice, '조건에 맞는 도구가 아직 없어요');
});

test('비개발자용은 섹션 없이 하나로 추천 (recommend와 같은 결과)', () => {
  const tools = JSON.parse(readFileSync(new URL('../data/demo-tools.json', import.meta.url), 'utf8'));
  const input = { tools, purposeId: 'P01', conditions: { freeOnly: true }, today: TODAY };
  const sections = recommendSections(input);
  assert.equal(sections.length, 1);
  assert.equal(sections[0].key, null);
  assert.deepEqual(sections[0].results.map((r) => r.id), recommend(input).results.map((r) => r.id));
});
