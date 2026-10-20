# AI 뭐 써?

하고 싶은 일을 고르면 맞는 AI 툴 2~3개를 비교해서 추천해주는 비개발자용 선택 도우미.

**👉 사이트 바로가기: [dlwldp.github.io/which-ai](https://dlwldp.github.io/which-ai/)** · [예시 데이터로 둘러보기](https://dlwldp.github.io/which-ai/?demo#/)

**🛠️ 개발자용: [개발할 때 AI 뭐 써?](https://dlwldp.github.io/which-ai/dev/)** · [예시 데이터로 둘러보기](https://dlwldp.github.io/which-ai/dev/?demo#/) ([기획서](docs/개발자용_기획서.md))

- 기획서: [docs/AI뭐써_기획서.md](docs/AI뭐써_기획서.md)
- 세부 결정 사항: [docs/decisions.md](docs/decisions.md)

## 현재 상태

| Phase | 상태 |
| --- | --- |
| 0. 데이터 | 목적 10개만 입력. `data/tools.json`은 비어 있음 (공식 페이지 확인 후 직접 채움) |
| 1. 추천 로직 | `js/recommend.js` + 테스트 완료 |
| 2. 화면 | 홈, 조건 선택, 추천 결과 완료 (예시 데이터로 확인) |
| 3. 상세·부가 | 툴 상세, 용어집(초안, 검토 필요), 변경 이력, 다크 모드 버튼 완료 |
| 4. 배포·자동화 | Pages 배포, 주간 신선도·링크 점검 Issue 완료 |
| 5 | 아직 |

## 폴더

```
index.html   화면 (한 페이지, 주소 #/... 로 단계 구분)
dev/         개발자용 화면 (같은 js/app.js를 개발자용 모드로 씀)
css/         styles.css
data/        목적·툴·용어집·변경 이력 (JSON). demo-*.json은 화면 확인·테스트용 가짜 데이터
js/          recommend.js — 추천 로직 (순수 함수, DOM 접근 없음)
             format.js    — 데이터 값을 화면 문구로 바꾸는 순수 함수
             glossary.js  — 문장 속 용어에 밑줄을 씌우는 순수 함수
             changelog.js — tools.json 두 버전을 비교하는 순수 함수
             modes.js     — 비개발자용·개발자용 화면 문구, 조건, 비교 항목
             app.js       — 화면 그리기와 주소 처리
drafts/      확인 전 툴 정보 초안 (배포 안 됨, drafts/README.md 참고)
scripts/     validate-data.js — 데이터 검사
             draft.js — 초안 검사, 확인한 툴을 tools.json으로 옮기기
             build-changelog.js — git 기록으로 변경 이력 만들기 (배포할 때 자동 실행)
             check-freshness.js — 주간 점검: 90일 지난 툴, 링크 상태 → Issue 본문
             validate-dev-data.js — 개발자용 데이터 검사 (docs/개발자용_기획서.md)
tests/       Node 내장 테스트 러너
```

## 실행

Node 22 이상, 설치할 패키지 없음.

```sh
node --test                          # 테스트
node scripts/validate-data.js        # 데이터 검사 (기준일: 오늘)
node scripts/validate-data.js 2026-10-19   # 기준일 지정
node scripts/build-changelog.js      # 변경 이력을 data/changelog.json에 만들기 (로컬에서 화면 볼 때만, 커밋하지 않음)
node scripts/check-freshness.js      # 주간 점검을 직접 돌려보기 (결과: report.md)
```

## 배포

`main`에 푸시하면 `.github/workflows/deploy.yml`이 테스트·데이터 검사를 돌리고, 통과하면 git 기록으로 변경 이력을 만들어 GitHub Pages에 올린다. 배포 주소: [https://dlwldp.github.io/which-ai/](https://dlwldp.github.io/which-ai/) (예시 데이터: [https://dlwldp.github.io/which-ai/?demo#/](https://dlwldp.github.io/which-ai/?demo#/))

## 주간 점검

`.github/workflows/weekly-check.yml`이 매주 월요일 오전 9시쯤(한국 시간) 실행된다.

- 90일 넘게 확인 안 된 툴, 깨진 공식 주소·출처 링크가 있으면 "주간 점검" 라벨 Issue 하나에 목록을 모은다 (이미 열려 있으면 내용만 갱신).
- 모두 처리되면 다음 점검 때 Issue가 자동으로 닫힌다.
- 가격·정책 값은 자동으로 바꾸지 않는다. 확인할 목록만 만든다.
- Actions 탭에서 수동 실행할 수 있고, "demo"를 고르면 예시 데이터로 동작을 확인한다.

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
