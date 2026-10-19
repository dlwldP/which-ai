// 주간 점검 테스트 (네트워크 없이 가짜 fetch로 검사)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  buildReport, checkLinks, checkUrl, classifyStatus, linkTargets, staleTools,
} from '../scripts/check-freshness.js';

const TODAY = '2026-10-19';
const demo = JSON.parse(readFileSync(new URL('../data/demo-tools.json', import.meta.url), 'utf8'));

test('상태 분류', () => {
  assert.equal(classifyStatus(200), 'ok');
  assert.equal(classifyStatus(301), 'ok');
  for (const s of [401, 403, 429]) assert.equal(classifyStatus(s), 'blocked');
  for (const s of [0, 400, 404, 410, 500, 503]) assert.equal(classifyStatus(s), 'broken');
});

test('90일 넘은 툴만, 오래된 순', () => {
  const stale = staleTools(demo, TODAY);
  assert.deepEqual(stale.map((s) => s.id), ['charlie']);
  assert.equal(stale[0].days, 291);
  const later = staleTools(demo, '2026-12-31');
  assert.deepEqual(later.map((s) => s.id), ['charlie', 'foxtrot', 'bravo', 'hotel', 'alpha', 'golf']);
});

test('같은 주소는 한 번만 확인', () => {
  const tools = [
    { id: 'a', name: 'A', url: 'https://x.test/', sources: ['https://x.test/'] },
    { id: 'b', name: 'B', url: 'https://y.test/', sources: ['https://x.test/'] },
  ];
  const targets = linkTargets(tools);
  assert.equal(targets.length, 2);
  assert.deepEqual(targets[0].usedBy.map((u) => `${u.id}:${u.kind}`), ['a:공식 사이트', 'a:출처', 'b:출처']);
});

test('HEAD가 안 되면 GET으로 다시 확인', async () => {
  const calls = [];
  const fakeFetch = async (url, opts) => {
    calls.push(opts.method);
    return { status: opts.method === 'HEAD' ? 405 : 200 };
  };
  assert.equal(await checkUrl('https://x.test/', fakeFetch), 200);
  assert.deepEqual(calls, ['HEAD', 'GET']);
});

test('접속 실패는 0', async () => {
  const fakeFetch = async () => { throw new Error('network'); };
  assert.equal(await checkUrl('https://x.test/', fakeFetch), 0);
});

test('여러 주소를 확인하고 순서를 지킴', async () => {
  const status = { 'https://a.test/': 200, 'https://b.test/': 404, 'https://c.test/': 403 };
  const fakeFetch = async (url) => ({ status: status[url] });
  const results = await checkLinks(Object.keys(status).map((url) => ({ url, usedBy: [] })), fakeFetch);
  assert.deepEqual(results.map((r) => r.result), ['ok', 'broken', 'blocked']);
});

const link = (url, status, result) => ({ url, status, result, usedBy: [{ id: 'a', name: 'A', kind: '출처' }] });

test('보고서: 확인할 게 없으면 has_issues=false', () => {
  const r = buildReport({ today: TODAY, stale: [], links: [link('https://a.test/', 200, 'ok')] });
  assert.equal(r.hasIssues, false);
});

test('보고서: 자동 확인이 막힌 링크만 있으면 Issue를 열지 않음', () => {
  const r = buildReport({ today: TODAY, stale: [], links: [link('https://a.test/', 403, 'blocked')] });
  assert.equal(r.hasIssues, false);
  assert.match(r.body, /자동 확인이 막힌 링크 \(1개\)/);
});

test('보고서: 90일 지난 툴과 깨진 링크', () => {
  const r = buildReport({
    today: TODAY,
    stale: staleTools(demo, TODAY),
    links: [link('https://a.test/', 404, 'broken'), link('https://b.test/', 429, 'blocked')],
    runUrl: 'https://github.com/run/1',
    demo: true,
  });
  assert.equal(r.hasIssues, true);
  assert.deepEqual(r.counts, { stale: 1, broken: 1, blocked: 1 });
  assert.match(r.body, /예시 데이터/);
  assert.match(r.body, /- \[ \] \*\*테스트툴 찰리\*\* \(`charlie`\) — 마지막 확인 2026-01-01, 291일 지남/);
  assert.match(r.body, /- \[ \] \*\*A\*\* 출처: https:\/\/a\.test\/ — 404 페이지 없음/);
  assert.match(r.body, /https:\/\/b\.test\/ — 429 요청이 너무 많음/);
  assert.match(r.body, /점검 기록: https:\/\/github\.com\/run\/1/);
});
