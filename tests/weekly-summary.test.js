import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildWeeklySummary, daysBefore, weeklyDiff } from '../scripts/weekly-summary.js';

const tool = (id, name, free, paid) => ({ id, name, one_liner: `${name} 설명`, good_for: `${name} 쓸 때`, price: { free, paid } });

test('지난주 대비: 새로 추가, 빠짐, 가격 표시가 바뀐 툴', () => {
  const before = [tool('a', 'A', true, true), tool('b', 'B', null, null), tool('gone', 'Gone', true, false)];
  const after = [tool('a', 'A', true, true), tool('b', 'B', true, true), tool('c', 'C', false, true)];
  const d = weeklyDiff(before, after);
  assert.deepEqual(d.added.map((t) => t.id), ['c']);
  assert.deepEqual(d.removed.map((t) => t.id), ['gone']);
  assert.deepEqual(d.priceChanged.map((x) => x.tool.id), ['b']);
});

test('주간 요약 마크다운: 사이트별 세 칸, 배지 문구로 가격 변화, 확인 안 한 링크 구분', () => {
  const { body, total } = buildWeeklySummary({
    today: '2026-11-23',
    since: daysBefore('2026-11-23', 7),
    sets: [
      { label: '일반용', added: [tool('c', 'C', false, true)], removed: [], priceChanged: [{ tool: tool('b', 'B', true, true), before: { free: null, paid: null }, after: { free: true, paid: true } }], broken: [{ url: 'https://x.com/', status: 404, usedBy: [{ name: 'X', kind: '공식 사이트' }] }] },
      { label: '개발자용', added: [], removed: [], priceChanged: [], broken: null },
    ],
  });
  assert.match(body, /# 주간 요약 \(2026-11-16 ~ 2026-11-23\)/);
  assert.match(body, /\*\*C\*\* \(`c`\) — C 쓸 때 · 유료/);
  assert.match(body, /\*\*B\*\* \(`b`\) — 가격 확인 필요 → 무료 \+ 유료/);
  assert.match(body, /https:\/\/x\.com\/ — 404 페이지 없음/);
  assert.match(body, /이번 점검에서는 확인하지 않았어요/);
  assert.deepEqual(total, { added: 1, priceChanged: 1, broken: 1 });
});
