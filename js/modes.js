// 화면 모드 설정. 같은 app.js가 비개발자용(general)과 개발자용(dev) 화면을 그린다.
// 모드는 페이지의 <body data-mode="..."> 로 정한다. 점수 규칙은 recommend.js의 PROFILES에 있다.
import {
  aiNativeText, formsText, freeBadge, freeLimitText, freeText, koreanBadge, koreanText, loginText, openSourceBadge, openSourceText,
  paidText, platformsText, privacyBadge, privacyText,
} from './format.js';

export const MODES = {
  general: {
    profile: 'general',
    dataDir: 'data/',
    siteName: 'AI 뭐 써?',
    homeTitle: 'AI 뭐 써? · 하고 싶은 일에 맞는 AI 툴 추천',
    eyebrow: 'AI 툴 선택 도우미',
    heroHtml: '어떤 일을 AI에게<br>맡기고 싶어요?',
    heroSub: '고르면 맞는 툴 2~3개를 이유와 함께 비교해드려요. 회원가입 없이 무료예요.',
    toolWord: '툴',
    reportSite: 'AI 뭐 써? (일반용)', // 제보 양식의 사이트 선택값과 같아야 한다
    emptyText: '실제 툴 정보는 공식 페이지에서 하나씩 확인하고 있어요. 그동안 예시 데이터로 화면을 둘러볼 수 있어요.',
    // 시나리오 4: "뭘 해야 할지 모르겠어요" → 홈 타일에 "처음이라면" 표시 (docs/decisions.md)
    starters: ['P01', 'P03', 'P07'],
    glossaryHint: '프롬프트, 토큰, 무료 크레딧… 어려운 말 쉽게 풀기',
    glossaryIntro: 'AI 툴을 쓰다 보면 나오는 어려운 말을 쉽게 풀었어요.',
    // 홈 소개 카드 (한 화면에 들어가게 짧게)
    introSteps: ['일 고르기', '추천 비교', '조건 바꾸기'],
    introChecks: ['무료로 되는지', '입력 내용 학습', '한국어 품질'],
    trust: ['광고·제휴 없음', '규칙으로 추천', '출처·날짜 표시'],
    conditions: [
      { key: 'freeOnly', param: 'free', icon: '💸', title: '무료만', chip: '무료만', desc: '무료로 쓸 수 있는 툴만 보여줘요' },
      { key: 'securityImportant', param: 'secure', icon: '🔒', title: '회사 자료라 보안 중요', chip: '보안 중요', desc: '입력한 내용을 학습에 쓰지 않거나, 끌 수 있는 툴만 보여줘요' },
      { key: 'koreanImportant', param: 'korean', icon: '🇰🇷', title: '한국어 중요', chip: '한국어 중요', desc: '한국어가 잘 되는 툴을 앞에 보여줘요' },
      { key: 'mobile', param: 'mobile', icon: '📱', title: '휴대폰에서 쓸 거예요', chip: '휴대폰 앱', desc: '아이폰이나 안드로이드 앱이 있는 툴만 보여줘요' },
    ],
    // 카드 위에 바로 보이는 요약 배지 3개 (같은 순서라 카드끼리 비교된다)
    badges: (t) => [freeBadge(t.price), privacyBadge(t.privacy), koreanBadge(t.korean)],
    // "자세히 보기" 안의 비교 항목. 이름은 한 줄에 들어가게 짧게 (styles.css .fact 이름 칸 80px)
    facts: [
      ['무료 사용', (t) => freeText(t.price)],
      ['무료 한도', (t) => freeLimitText(t.price)],
      ['유료 가격', (t) => paidText(t.price)],
      ['한국어', (t) => koreanText(t.korean)],
      ['학습 정책', (t) => privacyText(t.privacy)],
      ['사용 기기', (t) => platformsText(t.platforms)],
    ],
    detailFacts: [['가입 방법', (t) => loginText(t.login)]],
  },
  dev: {
    profile: 'dev',
    dataDir: '../data/dev/',
    siteName: '개발할 때 AI 뭐 써?',
    homeTitle: '개발할 때 AI 뭐 써? · 개발 단계별 AI 도구 비교',
    eyebrow: '개발자용 AI 도구 선택 도우미',
    heroHtml: '개발할 때<br>어떤 AI를 쓸까요?',
    heroSub: '개발 단계를 고르면 맞는 도구 2~3개를 이유와 함께 비교해드려요. 회원가입 없이 무료예요.',
    toolWord: '도구',
    reportSite: '개발할 때 AI 뭐 써? (개발자용)',
    emptyText: '실제 도구 정보는 공식 페이지에서 하나씩 확인하고 있어요. 그동안 예시 데이터로 화면을 둘러볼 수 있어요.',
    starters: [],
    glossaryHint: 'CLI, RAG, CI/CD, 셀프 호스팅… 용어 풀이',
    glossaryIntro: '개발 도구를 고를 때 나오는 용어를 짧게 풀었어요.',
    introSteps: ['단계 고르기', '추천 비교', '조건 바꾸기'],
    introChecks: ['무료로 시작', '오픈소스 여부', '코드 학습 여부'],
    trust: ['광고·제휴 없음', '규칙으로 추천', 'AI 아닌 도구 표시'],
    conditions: [
      { key: 'freeOnly', param: 'free', icon: '💸', title: '무료로 시작 가능', chip: '무료로 시작', desc: '무료 요금제나 무료 사용량이 있는 도구만 보여줘요' },
      { key: 'openSourceOnly', param: 'oss', icon: '📖', title: '오픈소스만', chip: '오픈소스만', desc: '소스 코드가 공개된 도구만 보여줘요' },
    ],
    badges: (t) => [freeBadge(t.price), openSourceBadge(t.open_source), privacyBadge(t.privacy, '코드 ')],
    // 추천 결과 섹션 (recommend.js PROFILES.dev.sections와 같은 키, 같은 순서)
    sections: {
      official: { icon: '🏢', title: '공식 AI 툴', desc: '회사가 만들고 운영하는 AI 도구예요. 소스가 공개된 제품도 여기에 넣어요.' },
      open_source: { icon: '📦', title: '오픈소스 프로젝트', desc: '회사 제품이 아닌 오픈소스예요. 저장소에서 받아 직접 설치해서 써요.' },
    },
    facts: [
      ['무료 사용', (t) => freeText(t.price)],
      ['유료 가격', (t) => paidText(t.price)],
      ['오픈소스', (t) => openSourceText(t.open_source)],
      ['쓰는 형태', (t) => formsText(t.forms)],
      ['코드 학습', (t) => privacyText(t.privacy)],
      ['AI 여부', (t) => aiNativeText(t.ai_native)],
    ],
    detailFacts: [['무료 한도', (t) => freeLimitText(t.price)]],
  },
};
