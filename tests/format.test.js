// 화면 문구 테스트 (js/format.js)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { USES, USE_LABELS, formatDate, localToday, priceBadge, useText } from '../js/format.js';

test('가격 배지: 무료 + 유료 / 무료 / 무료로 시작 / 유료 / 확인 필요', () => {
  assert.equal(priceBadge({ free: true, paid: true }).text, '무료 + 유료');
  assert.equal(priceBadge({ free: true, paid: false }).text, '무료');
  assert.equal(priceBadge({ free: true, paid: null }).text, '무료로 시작');
  assert.equal(priceBadge({ free: false, paid: true }).text, '유료');
  assert.equal(priceBadge({ free: null, paid: null }).text, '가격 확인 필요');
  assert.equal(priceBadge({ free: null, paid: null }).tone, 'warn');
});

test('쓰는 방법: 정해진 순서, 모드마다 말이 다름', () => {
  assert.deepEqual(useText(['install', 'web'], 'general'), ['웹사이트에서 바로', '직접 설치 (개발 지식 필요)']);
  assert.deepEqual(useText(['api', 'install'], 'dev'), ['코드로 설치 (git·pip·npm)', 'API']);
  for (const labels of Object.values(USE_LABELS)) assert.deepEqual(Object.keys(labels), USES);
});

test('비개발자용 문구에 영어 약어가 없음', () => {
  for (const s of Object.values(USE_LABELS.general)) assert.doesNotMatch(s, /[A-Z]{2,}/, s);
});

test('날짜', () => {
  assert.equal(formatDate('2026-11-06'), '2026년 11월 6일');
  assert.equal(localToday(new Date(2026, 0, 5)), '2026-01-05');
});
