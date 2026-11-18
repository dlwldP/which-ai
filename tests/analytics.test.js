import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cleanQuery, countUrl, parseRoute, routeEvents } from '../js/analytics.js';

test('검색어: 다듬어서 보내고, 개인정보일 수 있는 말은 안 보냄', () => {
  assert.equal(cleanQuery('  ChatGPT   무료 '), 'chatgpt 무료');
  assert.equal(cleanQuery(''), null);
  assert.equal(cleanQuery('me@example.com'), null);
  assert.equal(cleanQuery('010-1234-5678'), null);
  assert.equal(cleanQuery('https://x.com'), null);
  assert.equal([...cleanQuery('가'.repeat(50))].length, 30);
  assert.equal(cleanQuery('gpt 4'), 'gpt 4'); // 짧은 숫자는 괜찮음
});

test('화면 이벤트: 분야, 새로 켠 필터, 검색(결과 없음 구분)', () => {
  const r = parseRoute('#/p/P04?free=1&web=1');
  assert.deepEqual(routeEvents(r).map((e) => e.name), ['분야/P04', '필터/free', '필터/web']);
  // 이미 켜져 있던 필터는 다시 세지 않음
  assert.deepEqual(routeEvents(r, new URLSearchParams('free=1')).map((e) => e.name), ['분야/P04', '필터/web']);
  assert.deepEqual(routeEvents(parseRoute('#/all?q=쇼츠'), null, 3).map((e) => e.name), ['검색/쇼츠']);
  assert.deepEqual(routeEvents(parseRoute('#/all?q=없는툴'), null, 0).map((e) => e.name), ['검색-결과없음/없는툴']);
  assert.deepEqual(routeEvents(parseRoute('#/all?q=a@b.c'), null, 0), []);
  assert.deepEqual(routeEvents(parseRoute('#/')), []);
});

test('통계 주소: GoatCounter /count 형식, 쿠키 없음', () => {
  const url = new URL(countUrl('abc', { path: '/which-ai/p/P04', title: '영상', event: true, query: '?utm_source=instagram' }));
  assert.equal(url.origin, 'https://abc.goatcounter.com');
  assert.equal(url.pathname, '/count');
  assert.equal(url.searchParams.get('p'), '/which-ai/p/P04');
  assert.equal(url.searchParams.get('e'), 'true');
  assert.equal(url.searchParams.get('q'), '?utm_source=instagram');
  assert.ok(url.searchParams.get('rnd'));
});
