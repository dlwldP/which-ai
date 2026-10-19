// 화면 문구 변환 테스트
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  formatDate, freeLimitText, freeText, koreanText, localToday, paidText, platformsText, privacyText,
} from '../js/format.js';

test('가격 문구', () => {
  assert.equal(freeText({ free: true }), '돼요');
  assert.equal(freeText({ free: false }), '안 돼요');
  assert.equal(paidText({ paid_from_usd: null, billing: 'unknown' }), '확인 필요');
  assert.equal(paidText({ paid_from_usd: 10, billing: 'monthly' }), '월 10달러부터');
  assert.equal(paidText({ paid_from_usd: 120, billing: 'yearly' }), '연 120달러부터');
  assert.equal(paidText({ paid_from_usd: 8.5, billing: 'unknown' }), '8.5달러부터');
});

test('무료 한도 문구', () => {
  assert.equal(freeLimitText({ free: true, free_limit: '확인 필요' }), '확인 필요');
  assert.equal(freeLimitText({ free: false, free_limit: '확인 필요' }), '무료 없음');
});

test('한국어 문구', () => {
  assert.equal(koreanText(1), '메뉴·결과 모두 영어 위주');
  assert.equal(koreanText(3), '메뉴까지 한국어, 품질 좋음');
});

test('학습 정책 문구: 모든 조합', () => {
  const cases = {
    'no/yes': '기본으로 학습에 쓰지 않아요',
    'no/no': '기본으로 학습에 쓰지 않아요',
    'no/unknown': '기본으로 학습에 쓰지 않아요',
    'yes/yes': '학습에 쓰지만 설정에서 끌 수 있어요',
    'yes/no': '학습에 쓰고, 끌 수 없어요',
    'yes/unknown': '학습에 써요 (끄는 방법 확인 필요)',
    'unknown/yes': '설정에서 끌 수 있어요 (기본 설정 확인 필요)',
    'unknown/no': '끌 수 없어요 (기본 설정 확인 필요)',
    'unknown/unknown': '확인 필요',
  };
  for (const [key, expected] of Object.entries(cases)) {
    const [trains, optOut] = key.split('/');
    assert.equal(privacyText({ trains_on_input_default: trains, opt_out: optOut }), expected, key);
  }
});

test('사용 기기 문구', () => {
  assert.equal(platformsText(['web', 'ios', 'android', 'windows', 'mac']), '웹사이트, 아이폰 앱, 안드로이드 앱, 윈도우 프로그램, 맥 프로그램');
});

test('날짜 문구', () => {
  assert.equal(formatDate('2026-10-09'), '2026년 10월 9일');
  assert.equal(localToday(new Date(2026, 0, 5, 23, 59)), '2026-01-05');
});
