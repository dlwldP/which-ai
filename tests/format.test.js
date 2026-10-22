// 화면 문구 변환 테스트
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  changeText, formatDate, freeLimitText, freeText, koreanText, localToday, loginText, paidText, platformsText, privacyText,
  reportUrl, freeBadge, privacyBadge, koreanBadge, openSourceBadge,
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

test('변경 이력 문구', () => {
  const purposes = [{ id: 'P04', label: '발표자료(PPT) 만들기' }];
  const c = (field, before, after) => ({ type: 'changed', tool_id: 'g', name: 'Gamma', field, before, after });
  assert.equal(changeText({ type: 'added', tool_id: 'g', name: 'Gamma' }), 'Gamma 추가');
  assert.equal(changeText({ type: 'removed', tool_id: 'g', name: 'Gamma' }), 'Gamma 빠짐');
  assert.equal(changeText(c('price.paid_from_usd', 10, 12)), 'Gamma: 유료 가격 10달러 → 12달러');
  assert.equal(changeText(c('price.paid_from_usd', null, 8)), 'Gamma: 유료 가격 없음 → 8달러');
  assert.equal(changeText(c('price.free', true, false)), 'Gamma: 무료로 쓰기 돼요 → 안 돼요');
  assert.equal(changeText(c('privacy.opt_out', 'unknown', 'yes')), 'Gamma: 학습 끄기 가능 확인 필요 → 예');
  assert.equal(changeText(c('purposes.P04', 2, 3), purposes), "Gamma: '발표자료(PPT) 만들기' 적합도 2점 → 3점");
  assert.equal(changeText(c('last_verified', '2026-07-01', '2026-10-19')), 'Gamma: 확인 날짜 2026년 7월 1일 → 2026년 10월 19일');
  assert.equal(changeText(c('cautions', [], ['a'])), 'Gamma: 주의할 점 내용이 바뀌었어요');
  assert.equal(changeText(c('platforms', ['web'], ['web', 'ios'])), 'Gamma: 사용 기기 웹사이트 → 웹사이트, 아이폰 앱');
});

test('정보가 틀려요 제보 주소: 양식과 사이트·툴 이름을 미리 채움', () => {
  const url = new URL(reportUrl('Gamma & Co', 'AI 뭐 써? (일반용)'));
  assert.equal(url.origin + url.pathname, 'https://github.com/dlwldP/which-ai/issues/new');
  assert.equal(url.searchParams.get('template'), 'wrong-info.yml');
  assert.equal(url.searchParams.get('title'), '[정보 오류] Gamma & Co');
  assert.equal(url.searchParams.get('tool'), 'Gamma & Co');
  assert.equal(url.searchParams.get('site'), 'AI 뭐 써? (일반용)');
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
