# 툴 정보 초안

Claude가 공식 페이지를 읽고 만든 **확인 전** 툴 정보예요. 이 폴더는 사이트에 배포되지 않아요.
J가 출처와 맞춰 확인한 툴만 `data/tools.json`으로 옮겨요.

## 초안 한 개의 모양

`data/tools.json`과 같고, 아래 네 가지가 더 있어요. 확인 날짜(`last_verified`)는 없어요.

| 필드 | 뜻 |
| --- | --- |
| `official_domains` | 공식 도메인 목록 (예: `["naver.com"]`). `url`과 `sources`는 모두 이 도메인이어야 해요 |
| `evidence` | 값마다 근거: `{ "field": "price.free", "source": "공식 페이지 주소", "quote": "페이지에 있는 문장 그대로" }` |
| `review_notes` | Claude가 남기는 메모 (헷갈린 점, 제안값이라 J가 정해야 하는 것) |
| `todo` | 공식 페이지에서 근거를 못 찾아 **J가 채워야 하는 칸** (예: 가격 페이지가 글자로 안 읽힐 때). 값과 근거를 채우고 목록에서 지워야 promote할 수 있어요 |

## J가 확인하는 순서

1. **공식 도메인이 맞는지:** `official_domains`, `url`, `sources`가 진짜 회사 도메인인지 봐요. 철자가 살짝 다른 가짜 주소를 조심하세요.
2. **근거 문장 대조:** `evidence`의 `source`를 열어 `quote` 문장이 실제로 있는지, 값과 맞는지 확인해요. 특히 학습 정책(`privacy.*`)은 꼭 봐요.
3. **사람이 정하는 값:** 적합도(`purposes`), 한국어 점수(`korean`), 한 줄 설명, 시작 3단계, 주의할 점은 Claude의 제안이에요. 직접 고쳐도 돼요.
4. **확정:**

   ```sh
   node scripts/draft.js check                                  # 초안 검사
   node scripts/draft.js promote <툴 id> --verified 2026-10-20   # 확인한 날짜로 tools.json에 옮기기
   node --test && node scripts/validate-data.js
   ```

   `promote`는 초안 전용 필드를 지우고, 확인 날짜를 붙이고, 초안에서 그 툴을 빼요. 그 뒤 커밋하면 배포돼요.

## 초안 검사가 막는 것

- 출처가 공식 도메인이 아닌 경우 (블로그, 리뷰 사이트, 비슷한 가짜 도메인)
- 가격·무료 여부·학습 정책·사용 기기·가입 방법에 근거 문장이 없는 경우 (모르면 `unknown` / `확인 필요` / `null`)
- 근거 출처가 `sources`에 없는 경우
- 초안에 확인 날짜가 들어간 경우
- 그 밖에 `data/tools.json` 규칙 위반
