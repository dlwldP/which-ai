// 화면 모드 설정. 같은 app.js가 비개발자용(general)과 개발자용(dev) 화면을 그린다.
// 모드는 페이지의 <body data-mode="..."> 로 정한다.

export const MODES = {
  general: {
    key: 'general',
    dataDir: 'data/',
    siteName: 'AI 뭐 써?',
    homeTitle: 'AI 뭐 써? · 하고 싶은 일별 AI 모음',
    eyebrow: '하고 싶은 일별 AI 모음',
    heroHtml: '이런 일엔<br>이런 AI가 있어요',
    heroSub: 'ChatGPT·Claude 말고도 쓸 만한 AI가 많아요. 하고 싶은 일을 고르면 그 일에 쓰는 AI를 모아서, 무료인지와 어떻게 쓰는지만 짧게 보여드려요. 회원가입 없이, 광고 없이요.',
    toolWord: '툴',
    heroSteps: ['하고 싶은 일 고르기', '무료인지·어떻게 쓰는지 보기', '공식 사이트에서 바로 써 보기'],
    webFact: '설치 없이 웹사이트에서',
    otherSite: { href: 'dev/', label: '개발자라면 개발자용 보기' },
    reportSite: 'AI 뭐 써? (일반용)', // 제보 양식의 사이트 선택값과 같아야 한다
    reportGithub: false, // 제보 입력창 아래에 GitHub 이슈를 두 번째 방법으로 보여줄지
    emptyText: '공식 사이트를 확인한 툴부터 하나씩 채우고 있어요.',
    glossaryHint: '프롬프트, 토큰, 무료 크레딧… 어려운 말 쉽게 풀기',
    glossaryIntro: 'AI 툴을 쓰다 보면 나오는 어려운 말을 쉽게 풀었어요.',
    // 목록 위 조건 칩 (recommend.js FILTERS의 키)
    filters: [
      { key: 'free', icon: '💸', chip: '무료로 쓸 수 있는 것만' },
      { key: 'web', icon: '🌐', chip: '설치 없이 웹사이트에서' },
    ],
    kinds: null, // 묶음 없이 한 목록
  },
  dev: {
    key: 'dev',
    dataDir: '../data/dev/',
    siteName: '개발할 때 AI 뭐 써?',
    homeTitle: '개발할 때 AI 뭐 써? · 개발 단계별 AI 도구·오픈소스 모음',
    eyebrow: '개발자용 AI 도구·오픈소스 모음',
    heroHtml: '개발할 때 쓰는<br>AI를 모았어요',
    heroSub: '회사 서비스부터 GitHub 오픈소스, Hugging Face 공개 모델까지. 단계를 누르면 무료인지, 웹에서 쓰는지 코드로 설치하는지 한눈에 보여드려요.',
    toolWord: '도구',
    heroSteps: ['개발 단계 고르기', '서비스·오픈소스·모델 비교', '웹에서 쓰거나 코드로 설치'],
    webFact: '웹에서 바로',
    otherSite: { href: '../', label: '비개발자용 보기' },
    reportSite: '개발할 때 AI 뭐 써? (개발자용)',
    reportGithub: true,
    emptyText: '공식 사이트·저장소를 확인한 도구부터 하나씩 채우고 있어요.',
    glossaryHint: 'CLI, RAG, CI/CD, 셀프 호스팅… 용어 풀이',
    glossaryIntro: '개발 도구를 고를 때 나오는 용어를 짧게 풀었어요.',
    filters: [
      { key: 'free', icon: '💸', chip: '무료' },
      { key: 'web', icon: '🌐', chip: '웹에서 바로' },
      { key: 'install', icon: '📦', chip: '코드로 설치' },
    ],
    // 목록 묶음 (recommend.js groupByKind). 값은 데이터의 kind
    kinds: ['service', 'open_source', 'model'],
    kindInfo: {
      service: { icon: '🏢', title: '회사 서비스', desc: '회사가 만들고 운영해요. 가입하고 바로 써요.' },
      open_source: { icon: '📦', title: '오픈소스 프로젝트', desc: '소스가 공개돼 있어요. 저장소에서 받아 직접 설치해요.' },
      model: { icon: '🧠', title: '공개 모델', desc: '내려받아 직접 돌리거나 다른 도구에 붙여 쓰는 AI 모델이에요.' },
    },
  },
};
