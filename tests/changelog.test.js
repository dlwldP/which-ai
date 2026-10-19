// 변경 이력 생성 테스트
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { diffTools, buildChangelog } from '../js/changelog.js';

const demo = JSON.parse(readFileSync(new URL('../data/demo-tools.json', import.meta.url), 'utf8'));
const alpha = demo.find((t) => t.id === 'alpha');

test('추가·삭제', () => {
  assert.deepEqual(diffTools([], [alpha]), [{ type: 'added', tool_id: 'alpha', name: alpha.name }]);
  assert.deepEqual(diffTools([alpha], []), [{ type: 'removed', tool_id: 'alpha', name: alpha.name }]);
});

test('바뀐 필드만 경로로 나옴', () => {
  const next = structuredClone(alpha);
  next.price.paid_from_usd = 12;
  next.purposes.P04 = 1;
  next.platforms = ['web'];
  next.last_verified = '2026-10-19';
  assert.deepEqual(diffTools([alpha], [next]), [
    { type: 'changed', tool_id: 'alpha', name: alpha.name, field: 'last_verified', before: '2026-10-01', after: '2026-10-19' },
    { type: 'changed', tool_id: 'alpha', name: alpha.name, field: 'platforms', before: ['web', 'ios', 'android'], after: ['web'] },
    { type: 'changed', tool_id: 'alpha', name: alpha.name, field: 'price.paid_from_usd', before: null, after: 12 },
    { type: 'changed', tool_id: 'alpha', name: alpha.name, field: 'purposes.P04', before: null, after: 1 },
  ]);
});

test('같으면 변경 없음', () => {
  assert.deepEqual(diffTools(demo, structuredClone(demo)), []);
});

test('이력: 최신 커밋부터, 바뀐 게 없는 커밋은 빠짐', () => {
  const v2 = structuredClone(alpha);
  v2.korean = 2;
  const log = buildChangelog([
    { commit: 'aaa', date: '2026-10-01', before: [], after: [alpha] },
    { commit: 'bbb', date: '2026-10-05', before: [alpha], after: [structuredClone(alpha)] },
    { commit: 'ccc', date: '2026-10-09', before: [alpha], after: [v2] },
  ]);
  assert.deepEqual(log.map((e) => e.commit), ['ccc', 'aaa']);
  assert.equal(log[0].changes[0].field, 'korean');
});
