// 화면 문구 변환 테스트
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  formatDate, freeLimitText, freeText, koreanText, localToday, loginText, paidText, platformsText, privacyText,
  freeBadge, privacyBadge, koreanBadge, openSourceBadge,
} from '../js/format.js';
import { isSecure } from '../js/recommend.js';

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

test('가입 방법 문구', () => {
  assert.equal(loginText(['google', 'email']), '구글 계정, 이메일');
  assert.equal(loginText(['none']), '가입 없이 바로 사용');
});

test('요약 배지: 무료·한국어·오픈소스', () => {
  assert.deepEqual(freeBadge({ free: true }), { text: '무료로 시작', tone: 'good' });
  assert.deepEqual(freeBadge({ free: false }), { text: '유료만', tone: 'plain' });
  assert.equal(koreanBadge(3).text, '한국어 좋음');
  assert.equal(koreanBadge(1).text, '영어 위주');
  assert.equal(openSourceBadge(true).tone, 'good');
});

test('요약 배지: 학습 정책은 추천 엔진의 보안 기준과 같게 good을 붙임', () => {
  for (const trains of ['yes', 'no', 'unknown']) {
    for (const optOut of ['yes', 'no', 'unknown']) {
      const privacy = { trains_on_input_default: trains, opt_out: optOut };
      const badge = privacyBadge(privacy);
      assert.equal(badge.tone === 'good', isSecure({ privacy }), `${trains}/${optOut}: ${badge.text}`);
    }
  }
  assert.equal(privacyBadge({ trains_on_input_default: 'unknown', opt_out: 'unknown' }).text, '학습 정책 확인 필요');
  assert.equal(privacyBadge({ trains_on_input_default: 'no', opt_out: 'unknown' }, '코드 ').text, '코드 학습에 안 씀');
});

