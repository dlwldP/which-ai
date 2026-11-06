// "정보가 틀려요" 제보: 사이트 안 입력창 → J의 구글 폼으로 보낸다 (서버 코드 없이, 로그인·횟수 제한 없음).
// 구글 폼 만드는 법과 entry 번호 찾는 법은 CONTRIBUTING.md "제보 폼 연결" 참고.
// action이나 entry가 비어 있으면 입력창을 숨긴다. 개발자용은 입력창 아래에 GitHub 이슈를 두 번째 방법으로 둔다.
export const FEEDBACK_FORM = {
  // J의 구글 폼 "AI 뭐 써? 정보가 틀려요 제보" (2026-11-06 연결). 미리 채워진 링크의 entry 번호
  action: 'https://docs.google.com/forms/d/e/1FAIpQLSd3fe5t40KfZtgVtJxsK9yXsPlSvxTOlifF_W3vBWAV9ocfqA/formResponse',
  entries: {
    site: 'entry.1828461068', // 사이트
    tool: 'entry.1677592842', // 툴 이름
    reason: 'entry.613829319', // 사유 (필수)
    page: 'entry.247551464', // 제보한 페이지 주소
  },
};

export const REASON_MAX = 1000;

const ACTION = /^https:\/\/docs\.google\.com\/forms\/d\/e\/[A-Za-z0-9_-]+\/formResponse$/;
const ENTRY = /^entry\.\d+$/;

/** 구글 폼 주소와 칸 번호가 모두 형식에 맞으면 true */
export function isFeedbackReady(form = FEEDBACK_FORM) {
  return ACTION.test(form.action) && ['site', 'tool', 'reason', 'page'].every((k) => ENTRY.test(form.entries[k] ?? ''));
}

/** 사유: 앞뒤 공백을 빼고, 비어 있으면 null (보내지 않음). 너무 길면 자른다 */
export function cleanReason(text) {
  const reason = String(text ?? '').trim();
  return reason ? reason.slice(0, REASON_MAX) : null;
}

// ---- 두 번째 방법 (개발자용): GitHub 이슈 (.github/ISSUE_TEMPLATE/wrong-info.yml) ----
const ISSUE_NEW = 'https://github.com/dlwldP/which-ai/issues/new';

/** GitHub 제보 양식 주소. 사이트와 툴 이름을 미리 채운다 ("무엇이 틀렸나요?"는 양식에서 필수) */
export function githubIssueUrl(toolName, site) {
  const params = new URLSearchParams({
    template: 'wrong-info.yml',
    title: `[정보 오류] ${toolName}`,
    site,
    tool: toolName,
  });
  return `${ISSUE_NEW}?${params}`;
}

/** 구글 폼으로 보낼 내용 (application/x-www-form-urlencoded) */
export function feedbackBody(form, { site, tool, reason, page }) {
  const body = new URLSearchParams();
  body.set(form.entries.site, site);
  body.set(form.entries.tool, tool);
  body.set(form.entries.reason, reason);
  body.set(form.entries.page, page);
  return body;
}
