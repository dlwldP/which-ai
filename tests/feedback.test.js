// "정보가 틀려요" 제보(구글 폼)와 하단 안내 문서 테스트
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FEEDBACK_FORM, REASON_MAX, cleanReason, feedbackBody, githubIssueUrl, isFeedbackReady } from '../js/feedback.js';
import { PAGE_KEYS, pageSections } from '../js/pages.js';

const form = {
  action: 'https://docs.google.com/forms/d/e/1FAIpQLSabc_DEF-123/formResponse',
  entries: { site: 'entry.111', tool: 'entry.222', reason: 'entry.333', page: 'entry.444' },
};

test('구글 폼 주소와 칸 번호가 모두 맞아야 제보 버튼을 보여줌', () => {
  assert.equal(isFeedbackReady(form), true);
  assert.equal(isFeedbackReady({ ...form, action: '' }), false);
  assert.equal(isFeedbackReady({ ...form, action: 'https://evil.example.com/forms/d/e/x/formResponse' }), false);
  assert.equal(isFeedbackReady({ ...form, action: 'https://docs.google.com/forms/d/e/x/viewform' }), false);
  assert.equal(isFeedbackReady({ ...form, entries: { ...form.entries, reason: '' } }), false);
});

test('지금 설정값도 형식이 맞거나, 비어 있어서 버튼이 숨겨짐', () => {
  const empty = FEEDBACK_FORM.action === '' && Object.values(FEEDBACK_FORM.entries).every((v) => v === '');
  assert.ok(empty || isFeedbackReady(FEEDBACK_FORM), 'js/feedback.js의 구글 폼 설정이 반만 채워져 있어요');
});

test('사유는 필수: 공백만 있으면 보내지 않고, 너무 길면 자름', () => {
  assert.equal(cleanReason(''), null);
  assert.equal(cleanReason('   \n '), null);
  assert.equal(cleanReason(undefined), null);
  assert.equal(cleanReason('  가격이 바뀌었어요 '), '가격이 바뀌었어요');
  assert.equal(cleanReason('가'.repeat(REASON_MAX + 50)).length, REASON_MAX);
});

test('보낼 내용: 칸 번호마다 사이트·툴·사유·페이지 주소', () => {
  const body = feedbackBody(form, { site: 'AI 뭐 써? (일반용)', tool: 'Claude', reason: '가격이 바뀜', page: 'https://dlwldp.github.io/which-ai/#/t/claude' });
  assert.equal(body.get('entry.111'), 'AI 뭐 써? (일반용)');
  assert.equal(body.get('entry.222'), 'Claude');
  assert.equal(body.get('entry.333'), '가격이 바뀜');
  assert.equal(body.get('entry.444'), 'https://dlwldp.github.io/which-ai/#/t/claude');
});

test('개인정보 처리방침·이용약관·보안 안내: 제목과 항목이 있고, 툴/도구 말이 들어감', () => {
  for (const key of PAGE_KEYS) {
    const page = pageSections(key, '도구', '개발할 때 AI 뭐 써?');
    assert.ok(page.title && page.intro && page.sections.length > 0, key);
    for (const [title, items] of page.sections) assert.ok(title && items.length > 0, `${key}: ${title}`);
  }
  assert.ok(JSON.stringify(pageSections('privacy', '도구', 'x')).includes('도구'));
  assert.equal(pageSections('nope', '툴', 'x'), null);
});

test('개인정보 처리방침에 받는 정보·보관 곳·삭제 요청이 적혀 있음', () => {
  const text = JSON.stringify(pageSections('privacy', '툴', 'AI 뭐 써?'));
  for (const s of ['받는 정보', '구글 폼', '보관', '삭제 요청', '개인정보 보호책임자', '시행일']) assert.ok(text.includes(s), s);
});

test('개발자용 두 번째 방법: GitHub 제보 양식 주소에 사이트·툴 이름을 미리 채움', () => {
  const url = new URL(githubIssueUrl('Gamma & Co', '개발할 때 AI 뭐 써? (개발자용)'));
  assert.equal(url.origin + url.pathname, 'https://github.com/dlwldP/which-ai/issues/new');
  assert.equal(url.searchParams.get('template'), 'wrong-info.yml');
  assert.equal(url.searchParams.get('title'), '[정보 오류] Gamma & Co');
  assert.equal(url.searchParams.get('site'), '개발할 때 AI 뭐 써? (개발자용)');
  assert.equal(url.searchParams.get('tool'), 'Gamma & Co');
});

test('개인정보 처리방침: GitHub 이슈 안내는 개발자용(github)에만', () => {
  const dev = JSON.stringify(pageSections('privacy', '도구', 'x', { github: true }));
  const gen = JSON.stringify(pageSections('privacy', '툴', 'x'));
  assert.ok(dev.includes('GitHub 이슈로 제보하면'));
  assert.ok(!gen.includes('GitHub 이슈'));
});

test('제보 양식의 사이트 선택값과 두 사이트 이름이 같음', async () => {
  const { readFileSync } = await import('node:fs');
  const { MODES } = await import('../js/modes.js');
  const yml = readFileSync(new URL('../.github/ISSUE_TEMPLATE/wrong-info.yml', import.meta.url), 'utf8');
  for (const m of Object.values(MODES)) assert.ok(yml.includes(`- ${m.reportSite}`), m.reportSite);
  assert.equal(MODES.dev.reportGithub, true);
  assert.equal(MODES.general.reportGithub, false);
});
