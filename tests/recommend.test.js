// 목록 로직 테스트 (js/recommend.js). 2026-11-06 개편: 점수 추천 대신 용도별 이름순 목록
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { FILTERS, countByPurpose, daysSince, groupByKind, isStale, isValidDate, listTools } from '../js/recommend.js';

const read = (p) => JSON.parse(readFileSync(new URL(`../${p}`, import.meta.url), 'utf8'));
const demo = read('data/demo-tools.json');
const devDemo = read('data/dev/demo-tools.json');
const purposes = read('data/purposes.json');

test('용도로 거르고 이름순', () => {
  const list = listTools({ tools: demo, purposeId: 'P01' });
  assert.ok(list.length > 0);
  assert.ok(list.every((t) => t.purposes.includes('P01')));
  const names = list.map((t) => t.name);
  assert.deepEqual(names, [...names].sort((a, b) => a.localeCompare(b, 'ko')));
});

test('용도가 없으면 전체', () => {
  assert.equal(listTools({ tools: demo }).length, demo.length);
});

test('조건: 무료로 쓸 수 있는 것만, 웹사이트에서', () => {
  assert.ok(listTools({ tools: demo, filters: ['free'] }).every((t) => t.price.free === true));
  assert.ok(listTools({ tools: demo, filters: ['web'] }).every((t) => t.use.includes('web')));
  assert.ok(listTools({ tools: devDemo, filters: ['install'] }).every((t) => t.use.includes('install')));
  assert.throws(() => listTools({ tools: demo, filters: ['nope'] }), TypeError);
});

test('찾는 말: 이름·한 줄 설명에서 대소문자 없이', () => {
  const t = demo[0];
  assert.ok(listTools({ tools: demo, query: t.name.slice(-2).toUpperCase() }).some((x) => x.id === t.id));
  assert.equal(listTools({ tools: demo, query: '없는말없는말' }).length, 0);
});

test('같은 입력이면 같은 결과', () => {
  assert.deepEqual(listTools({ tools: demo, purposeId: 'P09' }), listTools({ tools: structuredClone(demo).reverse(), purposeId: 'P09' }));
});

test('용도별 개수', () => {
  const counts = countByPurpose(demo, purposes);
  assert.equal(Object.keys(counts).length, purposes.length);
  assert.equal(counts.P01, demo.filter((t) => t.purposes.includes('P01')).length);
});

test('개발자용 묶음: 순서대로, 빈 묶음은 빠짐', () => {
  const groups = groupByKind(devDemo, ['service', 'open_source', 'model']);
  assert.deepEqual(groups.map((g) => g.kind), ['service', 'open_source']);
  assert.equal(groups.reduce((n, g) => n + g.tools.length, 0), devDemo.length);
});

test('날짜: 90일 넘으면 다시 확인 필요', () => {
  assert.equal(isValidDate('2026-02-30'), false);
  assert.equal(daysSince('2026-10-01', '2026-10-11'), 10);
  assert.equal(isStale({ last_verified: '2026-01-01' }, '2026-10-01'), true);
  assert.equal(isStale({ last_verified: '2026-09-01' }, '2026-10-01'), false);
});

test('조건 이름이 화면 모드와 같음', async () => {
  const { MODES } = await import('../js/modes.js');
  for (const m of Object.values(MODES)) for (const f of m.filters) assert.ok(FILTERS[f.key], f.key);
  for (const k of MODES.dev.kinds) assert.ok(MODES.dev.kindInfo[k], k);
});
