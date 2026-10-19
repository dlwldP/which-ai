# AI 뭐 써?

하고 싶은 일을 고르면 맞는 AI 툴 2~3개를 비교해서 추천해주는 비개발자용 선택 도우미.

- 기획서: [docs/AI뭐써_기획서.md](docs/AI뭐써_기획서.md)
- 세부 결정 사항: [docs/decisions.md](docs/decisions.md)

## 현재 상태

| Phase | 상태 |
| --- | --- |
| 0. 데이터 | 목적 10개만 입력. `data/tools.json`은 비어 있음 (공식 페이지 확인 후 직접 채움) |
| 1. 추천 로직 | `js/recommend.js` + 테스트 완료 |
| 2. 화면 | 홈, 조건 선택, 추천 결과 완료 (예시 데이터로 확인) |
| 3. 상세·부가 | 툴 상세, 용어집(초안, 검토 필요), 변경 이력, 다크 모드 버튼 완료 |
| 4~5 | 아직 |

## 폴더

```
index.html   화면 (한 페이지, 주소 #/... 로 단계 구분)
css/         styles.css
data/        목적·툴·용어집·변경 이력 (JSON). demo-*.json은 화면 확인·테스트용 가짜 데이터
js/          recommend.js — 추천 로직 (순수 함수, DOM 접근 없음)
             format.js    — 데이터 값을 화면 문구로 바꾸는 순수 함수
             glossary.js  — 문장 속 용어에 밑줄을 씌우는 순수 함수
             changelog.js — tools.json 두 버전을 비교하는 순수 함수
             app.js       — 화면 그리기와 주소 처리
scripts/     validate-data.js — 데이터 검사
             build-changelog.js — git 기록으로 data/changelog.json 만들기
tests/       Node 내장 테스트 러너
```

## 실행

Node 22 이상, 설치할 패키지 없음.

```sh
node --test                          # 테스트
node scripts/validate-data.js        # 데이터 검사 (기준일: 오늘)
node scripts/validate-data.js 2026-10-19   # 기준일 지정
node scripts/build-changelog.js      # 변경 이력 다시 만들기
node scripts/build-changelog.js --check    # 변경 이력이 최신인지 확인
```

변경 이력은 커밋된 기록으로 만들기 때문에, `data/tools.json`을 고친 커밋을 먼저 하고 그다음에 `build-changelog.js`를 실행해 `data/changelog.json`을 커밋한다. (Phase 4에서 배포할 때 자동으로 돌릴 예정)

## 배포

`main`에 푸시하면 `.github/workflows/deploy.yml`이 테스트·데이터 검사·변경 이력 검사를 돌리고, 통과하면 GitHub Pages에 올린다. 배포 주소: https://dlwldp.github.io/which-ai/ (예시 데이터: https://dlwldp.github.io/which-ai/?demo#/)

## 화면 보기

빌드 없이 정적 파일을 그대로 쓴다. `fetch`를 쓰기 때문에 파일을 더블클릭하지 말고 로컬 서버로 연다.

```sh
python3 -m http.server 8000
# http://localhost:8000/            실제 데이터 (지금은 "아직 준비 중이에요")
# http://localhost:8000/?demo#/     예시 데이터로 화면 확인
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
