// 추천 로직 테스트 (기획서 12장). 실제 데이터가 아직 비어 있어서 data/demo-tools.json의 가짜 툴로 검사한다.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { recommend, isStale } from '../js/recommend.js';
import { loadData } from '../scripts/validate-data.js';

const TODAY = '2026-10-19';
const fixture = JSON.parse(readFileSync(new URL('../data/demo-tools.json', import.meta.url), 'utf8'));
const { tools: realTools, purposes } = loadData();
const purposeIds = purposes.map((p) => p.id);

// 조건 4개의 모든 조합 (16가지)
const allConditions = [];
for (let mask = 0; mask < 16; mask++) {
  allConditions.push({
    freeOnly: Boolean(mask & 1),
    securityImportant: Boolean(mask & 2),
    koreanImportant: Boolean(mask & 4),
    mobile: Boolean(mask & 8),
  });
}

// 기획서 9장 보안 기준. recommend.js의 판정 함수를 쓰지 않고 테스트에서 따로 적는다.
const meetsSecurity = (tool) => tool.privacy.trains_on_input_default === 'no' || tool.privacy.opt_out === 'yes';

const datasets = [['가짜 데이터', fixture], ['실제 데이터', realTools]];

for (const [label, tools] of datasets) {
  test(`[${label}] 보안 중요 조건에서 unknown·학습 기본 사용 툴이 절대 나오지 않음`, () => {
    for (const purposeId of purposeIds) {
      for (const conditions of allConditions.filter((c) => c.securityImportant)) {
        for (const r of recommend({ tools, purposeId, conditions, today: TODAY }).results) {
          assert.ok(meetsSecurity(r.tool), `${purposeId} ${JSON.stringify(conditions)}: ${r.id}`);
        }
      }
    }
  });

  test(`[${label}] 무료만 조건에서 유료 전용 툴이 나오지 않음 (조건을 뺀 경우 제외)`, () => {
    for (const purposeId of purposeIds) {
      for (const conditions of allConditions.filter((c) => c.freeOnly)) {
        const { results, relaxed } = recommend({ tools, purposeId, conditions, today: TODAY });
        if (relaxed.includes('freeOnly')) continue;
        for (const r of results) assert.equal(r.tool.price.free, true, `${purposeId}: ${r.id}`);
      }
    }
  });

  test(`[${label}] 모든 추천 카드에 이유 문장이 1개 이상`, () => {
    for (const purposeId of purposeIds) {
      for (const conditions of allConditions) {
        for (const r of recommend({ tools, purposeId, conditions, today: TODAY }).results) {
          assert.ok(r.reasons.length >= 1, `${purposeId} ${r.id}`);
          assert.ok(r.reasons.every((s) => typeof s === 'string' && s.length > 0));
        }
      }
    }
  });
}

test('[가짜 데이터] 모든 목적에서 조건 없이 최소 2개 추천됨', () => {
  for (const purposeId of purposeIds) {
    const { results } = recommend({ tools: fixture, purposeId, today: TODAY });
    assert.ok(results.length >= 2, `${purposeId}: ${results.length}개`);
  }
});

test('[실제 데이터] 모든 목적에서 조건 없이 최소 2개 추천됨', { skip: realTools.length === 0 && 'data/tools.json이 아직 비어 있음 (Phase 0)' }, () => {
  for (const purposeId of purposeIds) {
    const { results } = recommend({ tools: realTools, purposeId, today: TODAY });
    assert.ok(results.length >= 2, `${purposeId}: ${results.length}개`);
  }
});

test('같은 입력 100회 → 같은 결과', () => {
  for (const conditions of allConditions) {
    const first = recommend({ tools: fixture, purposeId: 'P01', conditions, today: TODAY });
    for (let i = 0; i < 100; i++) {
      assert.deepEqual(recommend({ tools: fixture, purposeId: 'P01', conditions, today: TODAY }), first);
    }
  }
});

test('입력 데이터를 바꾸지 않음', () => {
  const copy = structuredClone(fixture);
  const conditions = { freeOnly: true, mobile: true };
  recommend({ tools: copy, purposeId: 'P02', conditions, today: TODAY });
  assert.deepEqual(copy, fixture);
  assert.deepEqual(conditions, { freeOnly: true, mobile: true });
});

test('최대 3개, 점수 높은 순', () => {
  const { results } = recommend({ tools: fixture, purposeId: 'P01', today: TODAY });
  assert.deepEqual(results.map((r) => r.id), ['alpha', 'bravo', 'hotel']);
  // alpha: 3×10 + 3 + 2 = 35, bravo: 2×10 + 2 = 22, hotel: 1×10 + 2 + 2 = 14
  assert.deepEqual(results.map((r) => r.score), [35, 22, 14]);
});

test('적합도 0인 툴은 후보가 아님', () => {
  const tools = structuredClone(fixture);
  tools.find((t) => t.id === 'hotel').purposes.P01 = 0;
  const { results } = recommend({ tools, purposeId: 'P01', today: TODAY });
  assert.ok(!results.some((r) => r.id === 'hotel'));
});

test('한국어 중요 조건이면 한국어 점수가 4배', () => {
  // P06: echo 3×10+3 = 33, golf 2×10+1 = 21, delta 1×10+2+2 = 14
  const normal = recommend({ tools: fixture, purposeId: 'P06', today: TODAY });
  assert.deepEqual(normal.results.map((r) => r.score), [33, 21, 14]);
  // 한국어 중요: echo 30+12 = 42, golf 20+4 = 24, delta 10+8+2 = 20
  const korean = recommend({ tools: fixture, purposeId: 'P06', conditions: { koreanImportant: true }, today: TODAY });
  assert.deepEqual(korean.results.map((r) => r.score), [42, 24, 20]);
});

test('90일 넘게 확인 안 된 툴은 3점 감점하고 stale 표시', () => {
  const charlie = fixture.find((t) => t.id === 'charlie');
  assert.equal(isStale(charlie, TODAY), true);
  const { results } = recommend({ tools: fixture, purposeId: 'P04', today: TODAY });
  const r = results.find((x) => x.id === 'charlie');
  assert.equal(r.score, 3 * 10 + 1 + 2 - 3);
  assert.equal(r.stale, true);
  assert.equal(results.find((x) => x.id === 'delta').stale, false);
});

test('90일 경계: 정확히 90일은 감점 없음, 91일은 감점', () => {
  const base = fixture.find((t) => t.id === 'alpha');
  assert.equal(isStale({ ...base, last_verified: '2026-07-21' }, TODAY), false); // 90일
  assert.equal(isStale({ ...base, last_verified: '2026-07-20' }, TODAY), true); // 91일
});

test('동점이면 이름순, 이름도 같으면 id순', () => {
  const base = fixture.find((t) => t.id === 'golf');
  const tools = [
    { ...base, id: 'z', name: '나' },
    { ...base, id: 'b', name: '가' },
    { ...base, id: 'a', name: '가' },
  ];
  const { results } = recommend({ tools, purposeId: 'P09', today: TODAY });
  assert.deepEqual(results.map((r) => r.id), ['a', 'b', 'z']);
});

test('휴대폰 조건은 ios 또는 android 앱이 있는 툴만 남김', () => {
  const { results } = recommend({ tools: fixture, purposeId: 'P09', conditions: { mobile: true }, today: TODAY });
  assert.deepEqual(results.map((r) => r.id), ['foxtrot', 'alpha']);
});

test('추천 이유 템플릿', () => {
  const { results } = recommend({
    tools: fixture, purposeId: 'P01', conditions: { securityImportant: true }, today: TODAY,
  });
  const byId = Object.fromEntries(results.map((r) => [r.id, r.reasons]));
  assert.deepEqual(byId.alpha, [
    '이 목적에 가장 많이 쓰는 툴이에요',
    '메뉴와 결과 모두 한국어로 잘 돼요',
    '입력한 내용을 학습에 쓰지 않도록 설정할 수 있어요',
    '무료로 시작할 수 있어요',
  ]);
  assert.deepEqual(byId.bravo, ['이 일에 잘 맞는 툴이에요', '입력한 내용을 학습에 쓰지 않도록 설정할 수 있어요']);

  const p03 = recommend({ tools: fixture, purposeId: 'P03', today: TODAY }).results;
  assert.deepEqual(p03.find((r) => r.id === 'bravo').reasons, ['이 일에도 쓸 수 있어요']);
});

test('보안 조건이 꺼져 있으면 보안 이유 문장을 붙이지 않음', () => {
  const { results } = recommend({ tools: fixture, purposeId: 'P01', today: TODAY });
  for (const r of results) assert.ok(!r.reasons.includes('입력한 내용을 학습에 쓰지 않도록 설정할 수 있어요'));
});

test('결과가 0개면 휴대폰 조건부터 뺌', () => {
  // P02 + 보안 + 휴대폰: bravo는 앱이 없고 charlie는 보안 unknown → 휴대폰을 빼면 bravo
  const out = recommend({
    tools: fixture, purposeId: 'P02', conditions: { securityImportant: true, mobile: true }, today: TODAY,
  });
  assert.deepEqual(out.results.map((r) => r.id), ['bravo']);
  assert.deepEqual(out.relaxed, ['mobile']);
  assert.equal(out.notice, '휴대폰 앱 조건을 빼면 이런 선택지가 있어요');
});

test('휴대폰 조건을 빼도 0개면 무료 조건도 뺌', () => {
  const out = recommend({
    tools: fixture, purposeId: 'P02',
    conditions: { securityImportant: true, mobile: true, freeOnly: true }, today: TODAY,
  });
  assert.deepEqual(out.results.map((r) => r.id), ['bravo']);
  assert.deepEqual(out.relaxed, ['mobile', 'freeOnly']);
  assert.equal(out.notice, '휴대폰 앱, 무료 조건을 빼면 이런 선택지가 있어요');
});

test('켜지 않은 조건은 빼지 않음', () => {
  // P02 + 보안 + 무료: 무료이면서 보안을 만족하는 툴이 없음 → 휴대폰은 원래 꺼져 있으므로 무료만 뺌
  const out = recommend({
    tools: fixture, purposeId: 'P02', conditions: { securityImportant: true, freeOnly: true }, today: TODAY,
  });
  assert.deepEqual(out.relaxed, ['freeOnly']);
  assert.equal(out.notice, '무료 조건을 빼면 이런 선택지가 있어요');
});

test('보안 조건은 끝까지 빼지 않음', () => {
  // P04: charlie는 보안 unknown, delta는 학습 기본 사용 + 거부 불가 → 보안을 만족하는 툴이 없음
  const out = recommend({
    tools: fixture, purposeId: 'P04',
    conditions: { securityImportant: true, mobile: true, freeOnly: true }, today: TODAY,
  });
  assert.deepEqual(out.results, []);
  assert.deepEqual(out.relaxed, []);
  assert.equal(out.notice, '조건에 맞는 툴이 아직 없어요');
});

test('조건을 빼지 않았으면 안내 문구 없음', () => {
  const out = recommend({ tools: fixture, purposeId: 'P01', conditions: { freeOnly: true }, today: TODAY });
  assert.deepEqual(out.relaxed, []);
  assert.equal(out.notice, null);
});

test('잘못된 입력은 에러', () => {
  assert.throws(() => recommend({ tools: fixture, purposeId: 'X1', today: TODAY }), TypeError);
  assert.throws(() => recommend({ tools: fixture, purposeId: 'P01', today: '2026-02-30' }), TypeError);
  assert.throws(() => recommend({ tools: fixture, purposeId: 'P01' }), TypeError);
  assert.throws(() => recommend({ tools: null, purposeId: 'P01', today: TODAY }), TypeError);
});
