// "정보가 틀려요" 제보: 사이트 안 입력창 → J의 구글 폼으로 보낸다 (서버 코드 없이, 로그인·횟수 제한 없음).
// 구글 폼 만드는 법과 entry 번호 찾는 법은 CONTRIBUTING.md "제보 폼 연결" 참고.
// action이나 entry가 비어 있으면 제보 버튼을 숨긴다.
export const FEEDBACK_FORM = {
  // 예: https://docs.google.com/forms/d/e/1FAIpQL.../formResponse
  action: '',
  entries: {
    site: '', // 사이트 (예: entry.123456789)
    tool: '', // 툴 이름
    reason: '', // 사유 (필수)
    page: '', // 제보한 페이지 주소
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

/** 구글 폼으로 보낼 내용 (application/x-www-form-urlencoded) */
export function feedbackBody(form, { site, tool, reason, page }) {
  const body = new URLSearchParams();
  body.set(form.entries.site, site);
  body.set(form.entries.tool, tool);
  body.set(form.entries.reason, reason);
  body.set(form.entries.page, page);
  return body;
}
