// 화면 모드 설정. 같은 app.js가 비개발자용(general)과 개발자용(dev) 화면을 그린다.
// 모드는 페이지의 <body data-mode="..."> 로 정한다. 점수 규칙은 recommend.js의 PROFILES에 있다.
import {
  aiNativeText, formsText, freeLimitText, freeText, koreanText, loginText, openSourceText, paidText, platformsText, privacyText,
} from './format.js';

export const MODES = {
  general: {
    profile: 'general',
    dataDir: 'data/',
    siteName: 'AI 뭐 써?',
    homeTitle: 'AI 뭐 써? · 하고 싶은 일에 맞는 AI 툴 추천',
    eyebrow: 'AI 툴 선택 도우미',
    heroHtml: '어떤 일을 AI에게<br>맡기고 싶어요?',
    heroSub: '고르면 맞는 툴 2~3개를 이유와 함께 비교해드려요.',
    toolWord: '툴',
    reportSite: 'AI 뭐 써? (일반용)', // 제보 양식의 사이트 선택값과 같아야 한다
    // 시나리오 4: "뭘 해야 할지 모르겠어요" 바로가기 (docs/decisions.md)
    starters: ['P01', 'P03', 'P07'],
    glossaryHint: '프롬프트, 토큰, 무료 크레딧… 어려운 말 쉽게 풀기',
    glossaryIntro: 'AI 툴을 쓰다 보면 나오는 어려운 말을 쉽게 풀었어요.',
    trust: ['회원가입 없이 무료', '광고·제휴 없이 정해진 규칙으로 추천', '모든 정보에 확인 날짜 표시'],
    conditions: [
      { key: 'freeOnly', param: 'free', icon: '🆓', title: '무료만', chip: '무료만', desc: '무료로 쓸 수 있는 툴만 보여줘요' },
      { key: 'securityImportant', param: 'secure', icon: '🔒', title: '회사 자료라 보안 중요', chip: '보안 중요', desc: '입력한 내용을 학습에 쓰지 않거나, 끌 수 있는 툴만 보여줘요' },
      { key: 'koreanImportant', param: 'korean', icon: '🇰🇷', title: '한국어 중요', chip: '한국어 중요', desc: '한국어가 잘 되는 툴을 앞에 보여줘요' },
      { key: 'mobile', param: 'mobile', icon: '📱', title: '휴대폰에서 쓸 거예요', chip: '휴대폰', desc: '아이폰이나 안드로이드 앱이 있는 툴만 보여줘요' },
    ],
    // 카드 비교 항목. 개수(6)는 styles.css .cards의 칸 수(11)와 맞물려 있다.
    facts: [
      ['무료로 쓰기', (t) => freeText(t.price)],
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
    heroSub: '개발 단계를 고르면 맞는 도구 2~3개를 이유와 함께 비교해드려요.',
    toolWord: '도구',
    reportSite: '개발할 때 AI 뭐 써? (개발자용)',
    starters: [],
    glossaryHint: 'CLI, RAG, CI/CD, 셀프 호스팅… 용어 풀이',
    glossaryIntro: '개발 도구를 고를 때 나오는 용어를 짧게 풀었어요.',
    trust: ['회원가입 없이 무료', '광고·제휴 없이 정해진 규칙으로 추천', 'AI 툴이 아닌 도구는 따로 표시'],
    conditions: [
      { key: 'freeOnly', param: 'free', icon: '🆓', title: '무료로 시작 가능', chip: '무료', desc: '무료 요금제나 무료 사용량이 있는 도구만 보여줘요' },
      { key: 'openSourceOnly', param: 'oss', icon: '📖', title: '오픈소스만', chip: '오픈소스', desc: '소스 코드가 공개된 도구만 보여줘요' },
    ],
    facts: [
      ['무료로 쓰기', (t) => freeText(t.price)],
      ['유료 가격', (t) => paidText(t.price)],
      ['오픈소스', (t) => openSourceText(t.open_source)],
      ['쓰는 형태', (t) => formsText(t.forms)],
      ['코드 학습 정책', (t) => privacyText(t.privacy)],
      ['AI 여부', (t) => aiNativeText(t.ai_native)],
    ],
    detailFacts: [['무료 한도', (t) => freeLimitText(t.price)]],
  },
};
