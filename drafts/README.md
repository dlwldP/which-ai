# 툴 정보 초안

Claude가 공식 페이지를 읽고 만든 **확정 전** 툴 정보예요. 이 폴더는 사이트에 배포되지 않아요.

| 초안 파일 | 옮겨 가는 곳 |
| --- | --- |
| `tools.draft.json` (비개발자용) | `data/tools.json` |
| `dev-tools.draft.json` (개발자용) | `data/dev/tools.json` |

## 초안 한 개의 모양 (2026-11-06 개편)

`data/tools.json`과 같은 모양(기획서 8장)에 세 가지가 더 있어요. 확인 날짜(`last_verified`)는 없어요.

| 필드 | 뜻 |
| --- | --- |
| `evidence` | 가격 근거 하나: `{ "field": "price", "source": "공식 페이지 주소", "quote": "페이지에 있는 문장 그대로" }`. 가격이 `null`(확인 필요)이면 없어도 돼요 |
| `review_notes` | Claude 메모 (선택) |
| `todo` | 나중에 채울 칸. 지금은 `["price"]`만 써요. 비어 있어야 확정돼요 |

## 한 번에 확정하기 (2026-11-06 J 결정)

공식 페이지를 읽고 → 초안을 쓰고 → 근거 문장을 저장한 공식 페이지 글자와 스크립트로 대조하고 → 검사가 통과하면 같은 PR에서 바로 확정해요. J가 따로 git pull할 필요가 없어요.

```sh
node scripts/draft.js check                                     # 초안 검사
node scripts/draft.js promote-all --verified 2026-11-06         # todo가 빈 비개발자용 초안 모두 확정
node scripts/draft.js promote-all --verified 2026-11-06 --dev   # 개발자용
node scripts/review-checklist.js                                # 남은 초안 목록(REVIEW.md) 다시 만들기
node --test && node scripts/validate-data.js && node scripts/validate-dev-data.js
```

확정 조건:

1. `todo`가 비어 있어요.
2. 가격 근거 문장을, 그날 공식 페이지에서 저장한 글자와 대조해 그대로 있는 것을 확인했어요 (공백·줄바꿈 차이만 허용).
3. 초안 검사, 테스트, 데이터 검사가 모두 통과해요.
4. 확인 날짜(`--verified`)는 페이지를 읽은 날짜예요.

한 줄 설명·용도·쓰는 방법은 Claude가 공식 페이지를 보고 정해요. J가 사이트에서 보고 고쳐 달라고 하면 고쳐요.

## 초안 검사가 막는 것

- 출처나 근거가 공식 도메인이 아닌 경우 (블로그, 리뷰 사이트, 비슷한 가짜 도메인). 저장소·모델 주소만 `github.com`, `gitlab.com`, `huggingface.co`도 돼요
- 가격 값(`true`/`false`)이 있는데 근거 문장이 없는 경우 (모르면 `null`)
- 근거 출처가 `sources`에 없는 경우
- 초안에 확인 날짜가 들어간 경우
- 그 밖에 `data/tools.json` 규칙 위반
