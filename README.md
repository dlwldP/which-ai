# AI 뭐 써?

하고 싶은 일을 고르면 맞는 AI 툴 2~3개를 비교해서 추천해주는 비개발자용 선택 도우미.

- 기획서: [docs/AI뭐써_기획서.md](docs/AI뭐써_기획서.md)
- 세부 결정 사항: [docs/decisions.md](docs/decisions.md)

## 현재 상태

| Phase | 상태 |
| --- | --- |
| 0. 데이터 | 목적 10개만 입력. `data/tools.json`은 비어 있음 (공식 페이지 확인 후 직접 채움) |
| 1. 추천 로직 | `js/recommend.js` + 테스트 완료 |
| 2~5 | 아직 |

## 폴더

```
data/        목적·툴·용어집·변경 이력 (JSON)
js/          recommend.js — 추천 로직 (순수 함수, DOM 접근 없음)
scripts/     validate-data.js — 데이터 검사
tests/       Node 내장 테스트 러너. fixtures/에 테스트용 가짜 툴 데이터
```

## 실행

Node 22 이상, 설치할 패키지 없음.

```sh
node --test                          # 테스트
node scripts/validate-data.js        # 데이터 검사 (기준일: 오늘)
node scripts/validate-data.js 2026-10-19   # 기준일 지정
```

## 추천 함수 사용법

```js
import { recommend } from './js/recommend.js';

const { results, relaxed, notice } = recommend({
  tools,                       // data/tools.json
  purposeId: 'P02',
  conditions: { freeOnly: false, securityImportant: true, koreanImportant: false, mobile: true },
  today: '2026-10-19',         // 같은 입력이면 같은 결과가 나오도록 날짜를 직접 넘긴다
});
// results: 최대 3개 [{ id, tool, score, reasons, stale }]
// relaxed: 결과가 0개라서 뺀 조건 (휴대폰 → 무료 순, 보안 조건은 빼지 않음)
// notice:  "휴대폰 앱 조건을 빼면 이런 선택지가 있어요" / "조건에 맞는 툴이 아직 없어요" / null
```
