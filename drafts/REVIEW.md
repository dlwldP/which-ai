# 초안 검토 체크리스트

`node scripts/review-checklist.js`로 만든 파일이에요. 직접 고치지 말고, 초안이 바뀌면 다시 만들어요.

툴마다 순서대로 확인해요: ① 공식 도메인 → ② 근거 문장 대조 → ③ 비어 있는 칸 채우기 → ④ 제안값 정하기 → ⑥ 확정.
근거 링크는 크롬·엣지에서 열면 그 문장이 노랗게 강조돼요. 강조가 안 되면 Ctrl+F(맥은 ⌘+F)로 문장 앞부분을 찾아요.

| 툴 | 사이트 | 근거 | J가 채울 칸 |
| --- | --- | --- | --- |
| [tl;dv](#general-tldv) | 비개발자용 | 9개 | `price.free_limit` `price.paid_from_usd` `price.billing` `platforms` `login` |
| [클로바노트](#general-clovanote) | 비개발자용 | 0개 | `price.free` `price.free_limit` `price.paid_from_usd` `price.billing` `privacy.trains_on_input_default` `privacy.opt_out` `platforms` `login` `features` |
| [Claude](#general-claude) | 비개발자용 | 32개 | 없음 |
| [Manus](#general-manus) | 비개발자용 | 39개 | 없음 |
| [Grok](#general-grok) | 비개발자용 | 22개 | `price.paid_from_usd` `price.billing` |
| [FigureLabs](#general-figure-labs) | 비개발자용 | 1개 | `price.free` `price.free_limit` `price.paid_from_usd` `price.billing` `privacy.trains_on_input_default` `privacy.opt_out` `platforms` `login` `features` |
| [Claude Code](#dev-claude-code) | 개발자용 | 17개 | `open_source` |
| [Lovable](#dev-lovable) | 개발자용 | 14개 | `open_source` |
| [Vercel](#dev-vercel) | 개발자용 | 16개 | `open_source` |
| [v0](#dev-v0) | 개발자용 | 17개 | `open_source` |
| [Pulumi](#dev-pulumi) | 개발자용 | 16개 | 없음 |
| [Cloudflare Workers](#dev-cloudflare) | 개발자용 | 15개 | `open_source` |
| [Google AI Studio](#dev-google-ai-studio) | 개발자용 | 13개 | `price.paid_from_usd` `open_source` |
| [Google Antigravity](#dev-antigravity) | 개발자용 | 18개 | `price.paid_from_usd` `open_source` |
| [Linear](#dev-linear) | 개발자용 | 16개 | `privacy.trains_on_input_default` `privacy.opt_out` `open_source` |
| [Bolt](#dev-bolt) | 개발자용 | 16개 | `open_source` |
| [Replit](#dev-replit) | 개발자용 | 24개 | `open_source` |
| [Firebase](#dev-firebase) | 개발자용 | 16개 | `open_source` |
| [Supabase](#dev-supabase) | 개발자용 | 22개 | `privacy.trains_on_input_default` `privacy.opt_out` |
| [Neon](#dev-neon) | 개발자용 | 15개 | `privacy.trains_on_input_default` `privacy.opt_out` `open_source` |
| [Pinecone](#dev-pinecone) | 개발자용 | 14개 | `privacy.trains_on_input_default` `privacy.opt_out` `open_source` |
| [Hugging Face](#dev-hugging-face) | 개발자용 | 13개 | `open_source` |
| [LangSmith](#dev-langsmith) | 개발자용 | 13개 | `open_source` |
| [Ollama](#dev-ollama) | 개발자용 | 8개 | `open_source` |
| [LM Studio](#dev-lm-studio) | 개발자용 | 16개 | 없음 |
| [Netlify](#dev-netlify) | 개발자용 | 19개 | `open_source` |
| [Railway](#dev-railway) | 개발자용 | 16개 | `open_source` |
| [Notion AI](#dev-notion) | 개발자용 | 15개 | `open_source` |
| [Miro AI](#dev-miro) | 개발자용 | 17개 | `open_source` |
| [Figma (Figma AI·FigJam·Figma Make)](#dev-figma) | 개발자용 | 22개 | `open_source` |
| [Atlassian Rovo](#dev-atlassian-rovo) | 개발자용 | 14개 | `price.paid_from_usd` `privacy.trains_on_input_default` `privacy.opt_out` `open_source` |
| [Uizard](#dev-uizard) | 개발자용 | 17개 | `open_source` |
| [Cursor](#dev-cursor) | 개발자용 | 21개 | `open_source` |
| [GitHub Copilot](#dev-github-copilot) | 개발자용 | 21개 | `open_source` |
| [Kiro](#dev-kiro) | 개발자용 | 20개 | `open_source` |
| [CodeRabbit](#dev-coderabbit) | 개발자용 | 17개 | `open_source` |
| [Greptile](#dev-greptile) | 개발자용 | 13개 | `open_source` |
| [Zapier](#dev-zapier) | 개발자용 | 13개 | `open_source` |
| [Make](#dev-make) | 개발자용 | 9개 | `price.paid_from_usd` `price.billing` `open_source` |
| [n8n](#dev-n8n) | 개발자용 | 15개 | `price.paid_from_usd` `price.billing` |
| [Gumloop](#dev-gumloop) | 개발자용 | 12개 | `open_source` |
| [Snyk](#dev-snyk) | 개발자용 | 10개 | `open_source` |
| [SonarQube](#dev-sonarqube) | 개발자용 | 13개 | `open_source` `privacy.trains_on_input_default` `privacy.opt_out` |

## 비개발자용 (6개)

<a id="general-tldv"></a>
### tl;dv (`tldv`) · 비개발자용

공식 주소: https://tldv.io/  
공식 도메인: `tldv.io`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (9개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Yes! tl;dv offers a Free Forever plan that lets you access AI-powered meeting transcription, recording, and insights—without a time limit.” · [페이지에서 보기](https://tldv.io/#:~:text=Yes%21%20tl%3Bdv%20offers%20a%20Free,and%20insights%E2%80%94without%20a%20time%20limit.)
- [ ] 기본으로 학습에 씀: 아니요  
  “Tldx Solutions GmbH does not use Customer Content, including meeting recordings, transcripts, notes, files, or other data processed through the Services, to train, fine-tune, or improve foundation models, large language models, or other generative AI models for the benefit of tldx Solutions GmbH or any third party.” · [페이지에서 보기](https://tldv.io/privacy/#:~:text=Tldx%20Solutions%20GmbH%20does%20not,GmbH%20or%20any%20third%20party.)
- [ ] 기본으로 학습에 씀: 아니요  
  “No customer data is used to train the AI.” · [페이지에서 보기](https://tldv.io/features/security-commitment/#:~:text=No%20customer%20data%20is%20used%20to%20train%20the%20AI.)
- [ ] 한국어: 결과는 한국어 가능  
  “We currently offer the tl;dv platform in English, Spanish, French, Portuguese, Japanese, Korean, and German.” · [페이지에서 보기](https://tldv.io/features/languages/#:~:text=We%20currently%20offer%20the%20tl%3Bdv,Portuguese%2C%20Japanese%2C%20Korean%2C%20and%20German.)
- [ ] 사용 기기: 웹사이트, 윈도우 프로그램, 맥 프로그램  
  “Download for Windows” · [페이지에서 보기](https://tldv.io/desktop-app/#:~:text=Download%20for%20Windows)
- [ ] 사용 기기: 웹사이트, 윈도우 프로그램, 맥 프로그램  
  “Download for MacOS - M series” · [페이지에서 보기](https://tldv.io/desktop-app/#:~:text=Download%20for%20MacOS%20%2D%20M%20series)
- [ ] ✓ 회의·강의 녹음 정리 — 받아쓰기  
  “• Speech Recognition & Transcription - Converts spoken language into text with high accuracy, ensuring detailed and reliable records.” · [페이지에서 보기](https://tldv.io/#:~:text=Speech%20Recognition%20%26%20Transcription%20%2D,ensuring%20detailed%20and%20reliable%20records.)
- [ ] ✓ 회의·강의 녹음 정리 — 요약  
  “• Summarization - AI automatically extracts key points, action items, and topics to create concise, actionable summaries.” · [페이지에서 보기](https://tldv.io/#:~:text=Summarization%20%2D%20AI%20automatically%20extracts,to%20create%20concise%2C%20actionable%20summaries.)
- [ ] ✓ 회의·강의 녹음 정리 — 말한 사람 구분  
  “• Contextual Language Understanding - Recognizes different speakers, understands meeting context, and even answers questions about past discussions.” · [페이지에서 보기](https://tldv.io/#:~:text=Contextual%20Language%20Understanding%20%2D%20Recognizes,answers%20questions%20about%20past%20discussions.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `price.free_limit`
- [ ] `price.paid_from_usd`
- [ ] `price.billing`
- [ ] `platforms`
- [ ] `login`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] 한국어 점수: 결과는 한국어 가능 (2점)
- [ ] 한 줄 설명: 줌·구글 미트·팀즈 회의를 녹화하고 받아쓰기와 요약을 만들어줘요
- [ ] 시작 3단계: 1) 공식 사이트에서 무료로 가입하기 2) 구글 미트·줌·팀즈 회의에 tl;dv 연결하기 3) 회의가 끝나면 받아쓰기와 요약 확인하기
- [ ] 주의할 점: 없음

**5. Claude 메모**

- 가격 페이지(https://tldv.io/app/pricing/)는 화면을 스크립트가 그려서 글자로 읽을 수 없었어요. 무료 한도, 가장 싼 유료 요금제 가격과 결제 주기(월/연)를 직접 확인해 주세요.
- 첫 화면에는 'unlimited meetings'라고 되어 있지만 블로그·리뷰 글들은 무료 요금제 제한이 있다고 말해서 엇갈려요. 가격 페이지 기준으로 무료 한도를 적어 주세요.
- 사용 기기: 윈도우·맥 데스크톱 앱은 확인했어요. 웹사이트(브라우저) 사용은 근거 문장을 못 찾았어요(제안값). 아이폰 앱은 공식 사이트 안에서 엇갈려요. 첫 화면 질문 답변에는 'tl;dv doesn't have a native mobile app yet'라고 되어 있는데, 보안 페이지 아래쪽 'iOS Mobile App' 링크는 애플 앱스토어의 tl;dv 앱으로 가요. 앱스토어에서 확인한 뒤 ios를 넣을지 정해 주세요.
- 가입 방법: 가입 화면도 스크립트로 그려져서 확인하지 못했어요. 직접 가입 화면을 보고 채워 주세요.
- 학습 끄기(opt_out): 학습 자체를 하지 않는다고 적혀 있어서 끄는 설정에 대한 문장은 없어요. unknown으로 두었고, 보안 조건은 '기본으로 학습에 쓰지 않음'으로 통과해요.
- 한국어 점수: 메뉴가 한국어로 나온다는 문장은 있지만 받아쓰기 품질은 확인하지 못해서 2점을 제안했어요.
- 기능 체크리스트(P02): 받아쓰기·요약·말한 사람 구분은 첫 화면 문장으로 확인했어요. 녹음 파일 올리기는 공식 페이지에서 문장을 못 찾아서 넣지 않았어요 (온라인 회의를 녹화하는 방식).

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote tldv --verified YYYY-MM-DD
```

<a id="general-clovanote"></a>
### 클로바노트 (`clovanote`) · 비개발자용

공식 주소: https://clovanote.naver.com/  
공식 도메인: `naver.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (0개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- 근거 없음 (페이지를 읽지 못함)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `price.free`
- [ ] `price.free_limit`
- [ ] `price.paid_from_usd`
- [ ] `price.billing`
- [ ] `privacy.trains_on_input_default`
- [ ] `privacy.opt_out`
- [ ] `platforms`
- [ ] `login`
- [ ] `features`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] 한국어 점수: 메뉴까지 한국어, 품질 좋음 (3점)
- [ ] 한 줄 설명: 회의·강의 녹음을 글로 받아 적고 요약해주는 네이버 서비스예요
- [ ] 시작 3단계: 1) 클로바노트 사이트나 앱에서 로그인하기 2) 바로 녹음하거나 녹음 파일 올리기 3) 글로 바뀐 내용과 요약을 확인하고 공유하기
- [ ] 주의할 점: 없음

**5. Claude 메모**

- 클로바노트 사이트는 화면을 스크립트가 그려서 글자로 읽을 수 없었어요. 가격·무료 사용량·사용 기기·가입 방법·학습 정책 모두 직접 확인이 필요해요.
- 참고(확인 안 됨): 블로그 글들에는 '무료 월 300분, 데이터 활용 동의 시 600분'이라는 말이 있어요. 공식 페이지에서 확인되면 그때 적어 주세요. '데이터 활용 동의'가 녹음을 AI 학습에 쓰는 데 동의하는 것이라면, 학습 정책은 '기본으로는 안 씀(no), 동의하면 씀'일 수 있어요.
- 참고: 네이버 전체 이용약관(https://policy.naver.com/policy/service.html)에는 '여러분이 제공한 소중한 콘텐츠는 네이버 서비스를 개선하고 새로운 네이버 서비스를 제공하기 위해 인공지능 분야 기술 등의 연구 개발 목적으로 네이버에서 사용되거나' 라는 문장이 있어요. 다만 게시물에 관한 조항이라 클로바노트 녹음에 그대로 적용되는지는 알 수 없어서 근거로 쓰지 않았어요. 클로바노트 자체 약관이나 도움말을 확인해 주세요.
- 기능 체크리스트: 사이트가 스크립트로 그려져서 기능 문장을 읽지 못했어요. 회의·강의 녹음 정리(P02)의 녹음 파일 올리기·받아쓰기·요약·말한 사람 구분을 공식 페이지에서 확인하고, 확인된 기능만 features와 근거를 채운 뒤 todo에서 features를 지워 주세요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote clovanote --verified YYYY-MM-DD
```

<a id="general-claude"></a>
### Claude (`claude`) · 비개발자용

공식 주소: https://claude.com/  
공식 도메인: `claude.com`, `claude.ai`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (32개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free for everyone” · [페이지에서 보기](https://claude.com/pricing#:~:text=Free%20for%20everyone)
- [ ] 무료 한도: 5시간마다 다시 채워지는 사용량 한도 (정해진 메시지 수는 없음)  
  “Every plan has usage limits that reset on a rolling five-hour session window, and paid plans add weekly limits on top.” · [페이지에서 보기](https://claude.com/pricing#:~:text=Every%20plan%20has%20usage%20limits,add%20weekly%20limits%20on%20top.)
- [ ] 무료 한도: 5시간마다 다시 채워지는 사용량 한도 (정해진 메시지 수는 없음)  
  “How much you can do depends on the length and complexity of your conversations, the model you choose, and the features you use, so there's no fixed message count. Free covers everyday questions.” · [페이지에서 보기](https://claude.com/pricing#:~:text=How%20much%20you%20can%20do,count.%20Free%20covers%20everyday%20questions.)
- [ ] 유료 가격: 월 20달러부터  
  “$20 if billed monthly.” · [페이지에서 보기](https://claude.com/pricing#:~:text=%2420%20if%20billed%20monthly.)
- [ ] 결제 주기: monthly  
  “You can choose a monthly or annual subscription.” · [페이지에서 보기](https://claude.com/pricing#:~:text=You%20can%20choose%20a%20monthly%20or%20annual%20subscription.)
- [ ] 학습 끄기 가능: 예  
  “We give you the choice to allow your data to be used to improve future Claude models. We will train new models using data from Free, Pro, and Max accounts when this setting is on (including when you use Claude Code from these accounts).” · [페이지에서 보기](https://code.claude.com/docs/en/data-usage#:~:text=We%20give%20you%20the%20choice,Claude%20Code%20from%20these%20accounts%29.)
- [ ] 학습 끄기 가능: 예  
  “Model training” · [페이지에서 보기](https://claude.com/pricing#:~:text=Model%20training)
- [ ] 사용 기기: 웹사이트, 아이폰 앱, 안드로이드 앱, 윈도우 프로그램, 맥 프로그램  
  “Chat on web, iOS, Android and Desktop” · [페이지에서 보기](https://claude.com/pricing#:~:text=Chat%20on%20web%2C%20iOS%2C%20Android%20and%20Desktop)
- [ ] 사용 기기: 웹사이트, 아이폰 앱, 안드로이드 앱, 윈도우 프로그램, 맥 프로그램  
  “Download Claude Desktop for Mac or Windows.” · [페이지에서 보기](https://support.claude.com/en/articles/8114491-get-started-with-claude#:~:text=Download%20Claude%20Desktop%20for%20Mac%20or%20Windows.)
- [ ] 가입 방법: 구글 계정, 이메일  
  “When you open Claude on a web browser (claude.ai), the desktop app, or a mobile app, you will see two different options for logging in to your Claude account.” · [페이지에서 보기](https://support.claude.com/en/articles/13189465-log-in-to-your-claude-account#:~:text=When%20you%20open%20Claude%20on,in%20to%20your%20Claude%20account.)
- [ ] 가입 방법: 구글 계정, 이메일  
  “Continue with Google” · [페이지에서 보기](https://support.claude.com/en/articles/13189465-log-in-to-your-claude-account#:~:text=Continue%20with%20Google)
- [ ] 가입 방법: 구글 계정, 이메일  
  “Continue with email” · [페이지에서 보기](https://support.claude.com/en/articles/13189465-log-in-to-your-claude-account#:~:text=Continue%20with%20email)
- [ ] 한국어: 메뉴까지 한국어, 품질 좋음  
  “Claude is available in multiple languages on web and desktop applications.” · [페이지에서 보기](https://support.claude.com/en/articles/10769299-how-to-use-claude-in-your-preferred-language#:~:text=Claude%20is%20available%20in%20multiple,on%20web%20and%20desktop%20applications.)
- [ ] 한국어: 메뉴까지 한국어, 품질 좋음  
  “Korean” · [페이지에서 보기](https://support.claude.com/en/articles/10769299-how-to-use-claude-in-your-preferred-language#:~:text=Korean)
- [ ] 한국어: 메뉴까지 한국어, 품질 좋음  
  “Claude has extensive training in English and performs well in many other common languages.” · [페이지에서 보기](https://support.claude.com/en/articles/8114491-get-started-with-claude#:~:text=Claude%20has%20extensive%20training%20in,in%20many%20other%20common%20languages.)
- [ ] ✓ 질문하고 글 쓰기 — 대화로 질문하고 답 받기  
  “— Ask something quick, or hand off a long, complex task that keeps working after you close your laptop.” · [페이지에서 보기](https://claude.com/product/overview#:~:text=Ask%20something%20quick%2C%20or%20hand,after%20you%20close%20your%20laptop.)
- [ ] ✓ 질문하고 글 쓰기 — 글 초안 써주기  
  “Claude can help you draft everything from a text message or an email to a screenplay or a novel.” · [페이지에서 보기](https://support.claude.com/en/articles/7996845-what-are-some-things-i-can-use-claude-for#:~:text=Claude%20can%20help%20you%20draft,a%20screenplay%20or%20a%20novel.)
- [ ] ✓ 질문하고 글 쓰기 — 쓴 글 다듬기 (말투·맞춤법)  
  “People often use Claude to proofread, translate, summarize, or convert files.” · [페이지에서 보기](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content#:~:text=People%20often%20use%20Claude%20to,translate%2C%20summarize%2C%20or%20convert%20files.)
- [ ] ✓ 질문하고 글 쓰기 — 파일·사진 올려서 물어보기  
  “This article explains how to upload documents and images to Claude, including supported file types, size limits, and how to get started.” · [페이지에서 보기](https://support.claude.com/en/articles/8241126-upload-files-to-claude#:~:text=This%20article%20explains%20how%20to,and%20how%20to%20get%20started.)
- [ ] ✓ 긴 문서·PDF 요약 — PDF·워드 파일 올리기  
  “Claude analyzes both text and visual elements (like images, charts, and graphics) in PDFs of 100 pages or fewer.” · [페이지에서 보기](https://support.claude.com/en/articles/8241126-upload-files-to-claude#:~:text=Claude%20analyzes%20both%20text%20and,of%20100%20pages%20or%20fewer.)
- [ ] ✓ 긴 문서·PDF 요약 — 요약  
  “Claude is great at generating concise summaries of long articles, news stories, documents, conversations, or even books!” · [페이지에서 보기](https://support.claude.com/en/articles/7996845-what-are-some-things-i-can-use-claude-for#:~:text=Claude%20is%20great%20at%20generating,documents%2C%20conversations%2C%20or%20even%20books%21)
- [ ] ✓ 발표자료(PPT) 만들기 — 주제만 주면 슬라이드 만들기  
  “Prompt Claude using natural language to generate Excel spreadsheets, PowerPoint presentations, Word documents, and PDF files that you can download and use immediately.” · [페이지에서 보기](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude#:~:text=Prompt%20Claude%20using%20natural%20language,can%20download%20and%20use%20immediately.)
- [ ] ✓ 발표자료(PPT) 만들기 — 가진 문서로 슬라이드 만들기  
  “You can create financial models in Excel with working formulas, perform advanced analyses on uploaded data, produce reports with charts and visualizations, and generate presentations from your documents—all without specialized software skills.” · [페이지에서 보기](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude#:~:text=You%20can%20create%20financial%20models,documents%E2%80%94all%20without%20specialized%20software%20skills.)
- [ ] ✓ 발표자료(PPT) 만들기 — PPT 파일로 내보내기  
  “Claude can create Excel spreadsheets (.xlsx), PowerPoint presentations (.pptx), Word documents (.docx), and PDF files.” · [페이지에서 보기](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude#:~:text=Claude%20can%20create%20Excel%20spreadsheets,documents%20%28.docx%29%2C%20and%20PDF%20files.)
- [ ] ✓ 엑셀·표 정리 — 표 파일 올리기  
  “You can also upload CSV, TSV, and other files for data analysis and visualization.” · [페이지에서 보기](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude#:~:text=You%20can%20also%20upload%20CSV%2C,for%20data%20analysis%20and%20visualization.)
- [ ] ✓ 엑셀·표 정리 — 수식 만들어주기  
  “You can create financial models in Excel with working formulas, perform advanced analyses on uploaded data, produce reports with charts and visualizations, and generate presentations from your documents—all without specialized software skills.” · [페이지에서 보기](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude#:~:text=You%20can%20create%20financial%20models,documents%E2%80%94all%20without%20specialized%20software%20skills.)
- [ ] ✓ 엑셀·표 정리 — 차트 만들기  
  “Claude can create data visualizations in image files like PNG.” · [페이지에서 보기](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude#:~:text=Claude%20can%20create%20data%20visualizations%20in%20image%20files%20like%20PNG.)
- [ ] ✓ 자료 조사 — 답에 출처 링크 표시  
  “Every response includes citations, so you can easily verify sources yourself.” · [페이지에서 보기](https://support.claude.com/en/articles/10684626-enable-and-use-web-search#:~:text=Every%20response%20includes%20citations%2C%20so,can%20easily%20verify%20sources%20yourself.)
- [ ] ✓ 자료 조사 — 최신 웹 검색  
  “You can have Claude search the internet to provide you with up-to-date information and insights when using the following models:” · [페이지에서 보기](https://support.claude.com/en/articles/10684626-enable-and-use-web-search#:~:text=You%20can%20have%20Claude%20search,when%20using%20the%20following%20models%3A)
- [ ] ✓ 자료 조사 — 여러 자료 비교 정리  
  “It can do things like compare business competitors, update outdated internal documents with info from the web, help you prioritize or action items from your calendar and email, and more.” · [페이지에서 보기](https://support.claude.com/en/articles/11095361-when-should-i-use-web-search-extended-thinking-and-research#:~:text=It%20can%20do%20things%20like,calendar%20and%20email%2C%20and%20more.)
- [ ] ✓ 자료 조사 — 긴 조사 보고서 만들기  
  “Research is optimal for comprehensive information gathering requiring five or more tool calls over 1-3 minutes, creating in-depth reports by synthesizing information from multiple sources across the web and your integrations.” · [페이지에서 보기](https://support.claude.com/en/articles/11095361-when-should-i-use-web-search-extended-thinking-and-research#:~:text=Research%20is%20optimal%20for%20comprehensive,the%20web%20and%20your%20integrations.)
- [ ] ✓ 번역 — 문장·글 번역  
  “While Claude is best at English due to its training data, Claude knows more than a dozen languages and can translate between them to varying degrees of success.” · [페이지에서 보기](https://support.claude.com/en/articles/7996845-what-are-some-things-i-can-use-claude-for#:~:text=While%20Claude%20is%20best%20at,to%20varying%20degrees%20of%20success.)

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] 한국어 점수: 메뉴까지 한국어, 품질 좋음 (3점)
- [ ] 한 줄 설명: 질문에 답하고, 글을 쓰고 다듬고, 긴 문서를 읽고 정리해주는 대화형 AI예요
- [ ] 시작 3단계: 1) claude.ai에서 구글 계정이나 이메일로 가입하기 2) 입력창에 하고 싶은 일을 문장으로 쓰기 3) 문서 파일을 올려 요약이나 수정을 부탁하기
- [ ] 주의할 점: 무료는 5시간마다 쓸 수 있는 양이 정해져 있어요

**5. Claude 메모**

- 유료 가격: Pro는 월 결제 20달러, 연 결제는 월 17달러(200달러 한 번에)예요. 매달 내는 가격 20달러/monthly로 넣었어요. 연 결제 기준으로 바꿀지 정해 주세요.
- 학습 정책: '설정을 켜면 학습에 쓴다, 고를 수 있다'는 문장은 있어서 opt_out=yes로 했어요. 처음 설정이 켜져 있는지(기본값)는 개인정보 페이지(privacy.anthropic.com → privacy.claude.com으로 이동)가 허용 도메인이 아니라 확인하지 못해 unknown이에요. privacy.claude.com을 허용하면 다시 확인할게요. 보안 조건은 opt_out=yes라서 통과해요.
- 가격표의 'Model training' 줄은 Free·Pro·Max 모두 'Opt-out'으로 표시돼 있어요 (표 칸이라 문장 대신 줄 이름을 근거로 남겼어요).
- 근거 중 학습 정책 문장은 Claude Code 문서(code.claude.com)에 있지만 Free·Pro·Max 계정 전체에 대한 설명이에요.
- 한국어 3점(메뉴까지 한국어, 품질 좋음)은 제안값이에요. 메뉴 한국어 지원은 확인했고, 품질은 '많이 쓰는 언어에서 잘 한다'는 문장만 있어요.
- 기능 체크리스트: P01 4개, P03 2개(문서에 질문하기·원문 위치 표시는 문장을 못 찾음), P04 3개(디자인 자동 정리는 못 찾음), P08 3개(데이터 정리 문장은 못 찾음), P09 4개. 번역(P07)은 기본 기능(문장·글 번역) 1개만 근거가 있어요. 공식 문서에 "영어를 가장 잘하고, 그 밖에 포르투갈어·프랑스어·독일어를 특히 잘한다"고 적혀 있고 한국어는 따로 언급이 없어요. 연구(Research) 기능은 유료 요금제 전용이에요.
- 공식 도메인에 claude.ai(채팅 화면)도 넣었어요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote claude --verified YYYY-MM-DD
```

<a id="general-manus"></a>
### Manus (`manus`) · 비개발자용

공식 주소: https://manus.im/  
공식 도메인: `manus.im`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (39개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “\[Free Plan Price: $0/month\]” · [페이지에서 보기](https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus#:~:text=%5BFree%20Plan%20Price%3A%20%240%2Fmonth%5D)
- [ ] 무료 한도: 매일 300크레딧 (한 달에 최대 1,500크레딧, 가벼운 모델에만 쓸 수 있음)  
  “Features: Daily Refresh Credits: 300 credits provided daily for quickly answering simple questions.” · [페이지에서 보기](https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus#:~:text=Features%3A%20Daily%20Refresh%20Credits%3A%20300,for%20quickly%20answering%20simple%20questions.)
- [ ] 무료 한도: 매일 300크레딧 (한 달에 최대 1,500크레딧, 가벼운 모델에만 쓸 수 있음)  
  “The monthly consumption limit for daily refresh credits for free users is set to 1,500 credits; paid users have no limit. Daily credits can only be used for Manus 2.0 lite.” · [페이지에서 보기](https://help.manus.im/en/articles/11711097-what-are-the-rules-for-credits-consumption-and-how-can-i-obtain-them#:~:text=The%20monthly%20consumption%20limit%20for,used%20for%20Manus%202.0%20lite.)
- [ ] 무료 한도: 매일 300크레딧 (한 달에 최대 1,500크레딧, 가벼운 모델에만 쓸 수 있음)  
  “Daily refresh credits will not be added to your main credit balance. If you have 100 daily credits left at the end of the day, they will disappear at the reset time.” · [페이지에서 보기](https://help.manus.im/en/articles/11711121-will-my-daily-refresh-credits-accumulate-or-reset#:~:text=Daily%20refresh%20credits%20will%20not,disappear%20at%20the%20reset%20time.)
- [ ] 유료 가격: 월 20달러부터  
  “\[Pro Plan Price 1: Starting from $20/month (Enjoy a 17% discount with annual billing)\]” · [페이지에서 보기](https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus#:~:text=%5BPro%20Plan%20Price%201%3A%20Starting,17%25%20discount%20with%20annual%20billing%29%5D)
- [ ] 결제 주기: monthly  
  “The refresh timing depends on whether you are on a monthly or annual plan.” · [페이지에서 보기](https://help.manus.im/en/articles/11711097-what-are-the-rules-for-credits-consumption-and-how-can-i-obtain-them#:~:text=The%20refresh%20timing%20depends%20on,a%20monthly%20or%20annual%20plan.)
- [ ] 사용 기기: 웹사이트, 아이폰 앱, 안드로이드 앱, 윈도우 프로그램, 맥 프로그램  
  “The AI agent that doesn't just think, it delivers. Available for macOS, Windows, iOS and Android.” · [페이지에서 보기](https://manus.im/download#:~:text=The%20AI%20agent%20that%20doesn%27t,macOS%2C%20Windows%2C%20iOS%20and%20Android.)
- [ ] 사용 기기: 웹사이트, 아이폰 앱, 안드로이드 앱, 윈도우 프로그램, 맥 프로그램  
  “Yes, our online AI image generator works entirely in your browser.” · [페이지에서 보기](https://manus.im/tools/ai-image-generator#:~:text=Yes%2C%20our%20online%20AI%20image,works%20entirely%20in%20your%20browser.)
- [ ] 가입 방법: 구글 계정, 애플 계정, 마이크로소프트 계정, 이메일  
  “If you log in with a Google/Apple/Microsoft account, you don't need to verify your phone number.” · [페이지에서 보기](https://help.manus.im/en/articles/11712162-why-do-i-need-to-verify-my-phone-number#:~:text=If%20you%20log%20in%20with,to%20verify%20your%20phone%20number.)
- [ ] 가입 방법: 구글 계정, 애플 계정, 마이크로소프트 계정, 이메일  
  “If you log in with your email, you must verify your phone number.” · [페이지에서 보기](https://help.manus.im/en/articles/11712162-why-do-i-need-to-verify-my-phone-number#:~:text=If%20you%20log%20in%20with,must%20verify%20your%20phone%20number.)
- [ ] 가입 방법: 구글 계정, 애플 계정, 마이크로소프트 계정, 이메일  
  “We also support login with a Google/Apple account in the” · [페이지에서 보기](https://help.manus.im/en/articles/11712156-how-can-i-register-without-a-phone-number#:~:text=We%20also%20support%20login%20with%20a%20Google%2FApple%20account%20in%20the)
- [ ] 한국어: 메뉴까지 한국어, 품질 좋음  
  “무엇을 도와드릴까요?” · [페이지에서 보기](https://manus.im/ko#:~:text=%EB%AC%B4%EC%97%87%EC%9D%84%20%EB%8F%84%EC%99%80%EB%93%9C%EB%A6%B4%EA%B9%8C%EC%9A%94%3F)
- [ ] 한국어: 메뉴까지 한국어, 품질 좋음  
  “It also supports a wide range of languages, including Japanese, Korean, Arabic, and more.” · [페이지에서 보기](https://manus.im/tools/nano-banana-pro-slides#:~:text=It%20also%20supports%20a%20wide,Japanese%2C%20Korean%2C%20Arabic%2C%20and%20more.)
- [ ] 한국어: 메뉴까지 한국어, 품질 좋음  
  “What languages are supported? All major languages.” · [페이지에서 보기](https://manus.im/docs/features/slides.md#:~:text=What%20languages%20are%20supported%3F%20All%20major%20languages.)
- [ ] ✓ 질문하고 글 쓰기 — 대화로 질문하고 답 받기  
  “Both Free and Pro users have access to Chat Mode.” · [페이지에서 보기](https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus#:~:text=Both%20Free%20and%20Pro%20users%20have%20access%20to%20Chat%20Mode.)
- [ ] ✓ 질문하고 글 쓰기 — 글 초안 써주기  
  “Use the generated summary immediately to prompt Manus to draft follow-up emails, create presentations, or build project outlines within the same task.” · [페이지에서 보기](https://manus.im/docs/features/meeting-minutes.md#:~:text=Use%20the%20generated%20summary%20immediately,outlines%20within%20the%20same%20task.)
- [ ] ✓ 질문하고 글 쓰기 — 파일·사진 올려서 물어보기  
  “Analyze and extract info from images” · [페이지에서 보기](https://manus.im/docs/features/multi-modal.md#:~:text=Analyze%20and%20extract%20info%20from%20images)
- [ ] ✓ 질문하고 글 쓰기 — 파일·사진 올려서 물어보기  
  “Analyze this screenshot and extract all the text” · [페이지에서 보기](https://manus.im/docs/features/multi-modal.md#:~:text=Analyze%20this%20screenshot%20and%20extract%20all%20the%20text)
- [ ] ✓ 회의·강의 녹음 정리 — 받아쓰기  
  “An auto-transcription will appear on the screen as you speak.” · [페이지에서 보기](https://manus.im/docs/features/meeting-minutes.md#:~:text=An%20auto%2Dtranscription%20will%20appear%20on%20the%20screen%20as%20you%20speak.)
- [ ] ✓ 회의·강의 녹음 정리 — 녹음 파일 올리기  
  “Transcribe this interview recording” · [페이지에서 보기](https://manus.im/docs/features/multi-modal.md#:~:text=Transcribe%20this%20interview%20recording)
- [ ] ✓ 회의·강의 녹음 정리 — 녹음 파일 올리기  
  “(Upload audio file)” · [페이지에서 보기](https://manus.im/docs/features/multi-modal.md#:~:text=%28Upload%20audio%20file%29)
- [ ] ✓ 회의·강의 녹음 정리 — 요약  
  “It delivers a structured summary highlighting the key points, attendees, and a clear breakdown of action items.” · [페이지에서 보기](https://manus.im/docs/features/meeting-minutes.md#:~:text=It%20delivers%20a%20structured%20summary,clear%20breakdown%20of%20action%20items.)
- [ ] ✓ 회의·강의 녹음 정리 — 말한 사람 구분  
  “Intelligent Speaker Recognition: Manus identifies different speakers during the recording and recognizes when names are mentioned.” · [페이지에서 보기](https://manus.im/docs/features/meeting-minutes.md#:~:text=Intelligent%20Speaker%20Recognition%3A%20Manus%20identifies,recognizes%20when%20names%20are%20mentioned.)
- [ ] ✓ 발표자료(PPT) 만들기 — 주제만 주면 슬라이드 만들기  
  “Tell Manus AI your topic, audience, and key messages. It's as simple as writing an email.” · [페이지에서 보기](https://manus.im/tools/nano-banana-pro-slides#:~:text=Tell%20Manus%20AI%20your%20topic%2C,simple%20as%20writing%20an%20email.)
- [ ] ✓ 발표자료(PPT) 만들기 — 가진 문서로 슬라이드 만들기  
  “Turn this research report into a 20-slide conference presentation” · [페이지에서 보기](https://manus.im/docs/features/slides.md#:~:text=Turn%20this%20research%20report%20into%20a%2020%2Dslide%20conference%20presentation)
- [ ] ✓ 발표자료(PPT) 만들기 — 디자인 자동 정리  
  “Manus handles structure, design, and content—ready to present in a boardroom, classroom, or online.” · [페이지에서 보기](https://manus.im/download#:~:text=Manus%20handles%20structure%2C%20design%2C%20and,a%20boardroom%2C%20classroom%2C%20or%20online.)
- [ ] ✓ 발표자료(PPT) 만들기 — PPT 파일로 내보내기  
  “PowerPoint (.pptx): Fully editable in PowerPoint or Google Slides” · [페이지에서 보기](https://manus.im/docs/features/slides.md#:~:text=PowerPoint%20%28.pptx%29%3A%20Fully%20editable%20in%20PowerPoint%20or%20Google%20Slides)
- [ ] ✓ 이미지 만들기 — 글로 설명하면 이미지 만들기  
  “Create custom images from descriptions” · [페이지에서 보기](https://manus.im/docs/features/multi-modal.md#:~:text=Create%20custom%20images%20from%20descriptions)
- [ ] ✓ 엑셀·표 정리 — 표 파일 올리기  
  “Provide your data file (CSV, Excel, or other formats).” · [페이지에서 보기](https://manus.im/docs/features/data-visualization.md#:~:text=Provide%20your%20data%20file%20%28CSV%2C%20Excel%2C%20or%20other%20formats%29.)
- [ ] ✓ 엑셀·표 정리 — 차트 만들기  
  “Manus transforms raw data files into polished visual insights without requiring spreadsheet expertise or manual chart creation.” · [페이지에서 보기](https://manus.im/docs/features/data-visualization.md#:~:text=Manus%20transforms%20raw%20data%20files,expertise%20or%20manual%20chart%20creation.)
- [ ] ✓ 자료 조사 — 최신 웹 검색  
  “All Manus AI features in one place: build apps, create media, research the web, automate recurring work and connect the tools you already use.” · [페이지에서 보기](https://manus.im/features#:~:text=All%20Manus%20AI%20features%20in,the%20tools%20you%20already%20use.)
- [ ] ✓ 자료 조사 — 여러 자료 비교 정리  
  “Compare 100 consumer sneaker models.” · [페이지에서 보기](https://manus.im/docs/features/wide-research.md#:~:text=Compare%20100%20consumer%20sneaker%20models.)
- [ ] ✓ 자료 조사 — 긴 조사 보고서 만들기  
  “The main agent collects all completed sub-tasks and assembles them into your requested format (table, report, dataset, etc.)” · [페이지에서 보기](https://manus.im/docs/features/wide-research.md#:~:text=The%20main%20agent%20collects%20all,format%20%28table%2C%20report%2C%20dataset%2C%20etc.%29)
- [ ] ✓ 목소리·나레이션 만들기 — 글을 음성으로 바꾸기  
  “Convert text to natural speech” · [페이지에서 보기](https://manus.im/docs/features/multi-modal.md#:~:text=Convert%20text%20to%20natural%20speech)
- [ ] ✓ 목소리·나레이션 만들기 — 감정·속도 조절  
  “Professional, friendly, casual, energetic, calm” · [페이지에서 보기](https://manus.im/docs/features/multi-modal.md#:~:text=Professional%2C%20friendly%2C%20casual%2C%20energetic%2C%20calm)
- [ ] ✓ 목소리·나레이션 만들기 — 감정·속도 조절  
  “Fast, moderate, slow” · [페이지에서 보기](https://manus.im/docs/features/multi-modal.md#:~:text=Fast%2C%20moderate%2C%20slow)
- [ ] cautions  
  “Manus AI's image generator is available to users on our Pro plan.” · [페이지에서 보기](https://manus.im/tools/ai-image-generator#:~:text=Manus%20AI%27s%20image%20generator%20is,users%20on%20our%20Pro%20plan.)
- [ ] cautions  
  “This feature is currently only available to paid users.” · [페이지에서 보기](https://help.manus.im/en/articles/11960169-what-is-wide-research#:~:text=This%20feature%20is%20currently%20only%20available%20to%20paid%20users.)
- [ ] cautions  
  “It is not intended for recording online meetings.” · [페이지에서 보기](https://manus.im/docs/features/meeting-minutes.md#:~:text=It%20is%20not%20intended%20for%20recording%20online%20meetings.)

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] 한국어 점수: 메뉴까지 한국어, 품질 좋음 (3점)
- [ ] 한 줄 설명: 할 일을 맡기면 스스로 조사하고 슬라이드·보고서 같은 결과물까지 만들어주는 AI 비서예요
- [ ] 시작 3단계: 1) manus.im에서 구글이나 애플 계정으로 가입하기 2) 입력창에 맡기고 싶은 일을 문장으로 자세히 쓰기 3) 만들어진 결과물을 보고 고칠 점을 말해 다시 부탁하기
- [ ] 주의할 점: 무료는 매일 받는 사용량이 정해져 있고, 남은 양은 다음 날로 넘어가지 않아요 / 이미지 만들기, 여러 자료를 한꺼번에 조사하는 기능 등 일부는 유료 요금제에서만 돼요 / 이메일로 가입하면 휴대폰 번호 인증을 해야 해요 / 회의 기록 기능은 직접 만나서 하는 회의용이고, 온라인 회의 녹음용이 아니에요

**5. Claude 메모**

- 가격 페이지(manus.im/pricing)와 개인정보 처리방침(manus.im/privacy)은 화면을 스크립트가 그려서 글자로 읽을 수 없었어요. 가격은 도움말 센터(help.manus.im) 글로 채웠는데, 그 글에도 '실제 가격 페이지에 표시된 것이 기준'이라는 문장(Everything is subject to what is displayed on the actual pricing page.)이 있어요. 가격 페이지에서 한 번 더 확인해 주세요.
- 유료 가격: 가장 싼 Pro는 월 20달러부터(4,000크레딧)이고, 연 결제하면 17% 할인이라고만 적혀 있어요(연 결제 금액은 숫자로 못 봤어요). 7일 무료 체험은 월 40달러 Pro에만 있다고 적혀 있어요.
- 학습 정책: 개인정보 처리방침을 못 읽어서 기본값·끄기 모두 unknown이에요. 다만 가격 안내에 팀 요금제 기능으로 'Data Training Opt-Out: Supports opting out of data training to protect privacy.'라는 줄이 있어서, 개인 요금제(무료·Pro)는 학습 끄기가 없을 수도 있어요. 처리방침에서 꼭 확인해 주세요.
- 가입 방법: 구글·애플·마이크로소프트 계정, 이메일이 돼요. 이메일 가입은 휴대폰 번호 인증이 필수예요(login 값에 phone은 넣지 않았어요).
- 한국어 3점은 제안값이에요. manus.im/ko에서 메뉴가 한국어로 나오는 건 확인했고, 품질은 '주요 언어 모두 지원' 문장만 있어요. 슬라이드의 한국어 지원 문장은 유료 전용 이미지 모델(Nano Banana Pro) 설명이에요.
- 기능 근거 중 manus.im/docs/... 는 공식 문서의 글자판(.md 주소)을 그대로 받아서 읽었어요. 문서 화면 주소는 .md를 뺀 주소예요.
- 유료 전용일 수 있는 기능: 이미지 만들기(P05)는 '이미지 생성기는 Pro 요금제'라고 적혀 있고, 조사(P09)의 비교·보고서 근거는 유료 전용인 'Wide Research' 문서에서 가져왔어요. 웹 조사 자체는 기능 소개 페이지 문장이 근거예요. 답에 출처 링크 표시(P09.sources)는 문장을 못 찾았어요.
- 회의 녹음(P02): 'Meeting Minutes'는 모든 요금제에서 쓸 수 있고 녹음은 무료, 정리할 때 크레딧이 든다고 해요. 녹음 파일 올리기 근거는 문서의 예시 요청('Transcribe this interview recording' + '(Upload audio file)')이에요.
- 음성(P10): 글을 음성으로 바꾸기, 말투(Tone)·빠르기(Pace) 고르기가 문서의 '목소리 옵션'에 있어요. 설정 버튼인지, 요청 문장에 적는 방식인지는 문서로 알 수 없어요. 음성 파일 내려받기·목소리 여러 개는 근거 문장을 못 찾았어요.
- 번역(P07), 문서 요약(P03)은 문서에서 직접 문장을 못 찾아 넣지 않았어요. 회의 정리 기능 안의 영상(Video) 만들기는 자막 기능이 아니라서 P06에 넣지 않았어요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote manus --verified YYYY-MM-DD
```

<a id="general-grok"></a>
### Grok (`grok`) · 비개발자용

공식 주소: https://grok.com/  
공식 도메인: `grok.com`, `x.ai`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (22개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Grok is free to start.” · [페이지에서 보기](https://docs.x.ai/grok/overview#:~:text=Grok%20is%20free%20to%20start.)
- [ ] 무료 한도: 무료로 쓸 수 있는 양이 정해져 있어요 (정확한 양은 공식 안내에 없음)  
  “You will still have access to Grok's free tier limits on Chat and Voice” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=You%20will%20still%20have%20access,limits%20on%20Chat%20and%20Voice)
- [ ] 무료 한도: 무료로 쓸 수 있는 양이 정해져 있어요 (정확한 양은 공식 안내에 없음)  
  “Paid SuperGrok plans raise your limits and unlock more across every product, drawing from a single weekly usage allowance you can spend however you like.” · [페이지에서 보기](https://docs.x.ai/grok/overview#:~:text=Paid%20SuperGrok%20plans%20raise%20your,can%20spend%20however%20you%20like.)
- [ ] 사용 기기: 웹사이트, 아이폰 앱, 안드로이드 앱  
  “this page collects the most common questions about our consumer-facing Grok website and apps (grok.com, iOS, and Android).” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=this%20page%20collects%20the%20most,apps%20%28grok.com%2C%20iOS%2C%20and%20Android%29.)
- [ ] 사용 기기: 웹사이트, 아이폰 앱, 안드로이드 앱  
  “and in the iOS and Android apps. Sign in once and your conversations, settings, and subscription stay in sync across every platform.” · [페이지에서 보기](https://docs.x.ai/grok/overview#:~:text=and%20in%20the%20iOS%20and,in%20sync%20across%20every%20platform.)
- [ ] 가입 방법: 구글 계정, 애플 계정, 이메일  
  “Make sure you're signed in with the same account everywhere (e.g. an Apple/X/Google login).” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=Make%20sure%20you%27re%20signed%20in,everywhere%20%28e.g.%20an%20Apple%2FX%2FGoogle%20login%29.)
- [ ] 가입 방법: 구글 계정, 애플 계정, 이메일  
  “sign in with a new personal email / Google / X account and link it at accounts.x.ai.” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=sign%20in%20with%20a%20new,and%20link%20it%20at%20accounts.x.ai.)
- [ ] ✓ 질문하고 글 쓰기 — 대화로 질문하고 답 받기  
  “ask questions, brainstorm, write, and work through problems in a natural back-and-forth.” · [페이지에서 보기](https://docs.x.ai/grok/overview#:~:text=ask%20questions%2C%20brainstorm%2C%20write%2C%20and,problems%20in%20a%20natural%20back%2Dand%2Dforth.)
- [ ] ✓ 질문하고 글 쓰기 — 글 초안 써주기  
  “ask questions, brainstorm, write, and work through problems in a natural back-and-forth.” · [페이지에서 보기](https://docs.x.ai/grok/overview#:~:text=ask%20questions%2C%20brainstorm%2C%20write%2C%20and,problems%20in%20a%20natural%20back%2Dand%2Dforth.)
- [ ] ✓ 질문하고 글 쓰기 — 쓴 글 다듬기 (말투·맞춤법)  
  “summarize complex papers, rewrite in different styles, turn presentations into outlines, or simplify technical docs.” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=summarize%20complex%20papers%2C%20rewrite%20in,outlines%2C%20or%20simplify%20technical%20docs.)
- [ ] ✓ 질문하고 글 쓰기 — 파일·사진 올려서 물어보기  
  “Grok supports uploading a wide variety of file types directly in chats on the web, iOS, and Android apps — enabling analysis, summarization, data extraction, code processing, image understanding, audio/video handling, and more.” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=Grok%20supports%20uploading%20a%20wide,understanding%2C%20audio%2Fvideo%20handling%2C%20and%20more.)
- [ ] ✓ 회의·강의 녹음 정리 — 받아쓰기  
  “understand images and charts, debug or run code, transcribe and interpret audio/video, or visualize data from CSVs and XLSXs.” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=understand%20images%20and%20charts%2C%20debug,data%20from%20CSVs%20and%20XLSXs.)
- [ ] ✓ 회의·강의 녹음 정리 — 녹음 파일 올리기  
  “MP3, WAV, M4A, OGG, FLAC, AAC” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=MP3%2C%20WAV%2C%20M4A%2C%20OGG%2C%20FLAC%2C%20AAC)
- [ ] ✓ 긴 문서·PDF 요약 — PDF·워드 파일 올리기  
  “PDF, DOCX, TXT, CSV, XLSX, PPTX” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=PDF%2C%20DOCX%2C%20TXT%2C%20CSV%2C%20XLSX%2C%20PPTX)
- [ ] ✓ 긴 문서·PDF 요약 — 요약  
  “summarize complex papers, rewrite in different styles, turn presentations into outlines, or simplify technical docs.” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=summarize%20complex%20papers%2C%20rewrite%20in,outlines%2C%20or%20simplify%20technical%20docs.)
- [ ] ✓ 긴 문서·PDF 요약 — 문서 내용으로 질문하기  
  “pull specific data, quotes, metadata, tables, or sections from PDFs and spreadsheets.” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=pull%20specific%20data%2C%20quotes%2C%20metadata%2C,sections%20from%20PDFs%20and%20spreadsheets.)
- [ ] ✓ 긴 문서·PDF 요약 — 문서 내용으로 질문하기  
  “Just ask naturally — for example: "Summarize this PDF and extract the key tables,"” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=Just%20ask%20naturally%20%E2%80%94%20for,and%20extract%20the%20key%20tables%2C%22)
- [ ] ✓ 이미지 만들기 — 글로 설명하면 이미지 만들기  
  “Create images and video” · [페이지에서 보기](https://docs.x.ai/grok/overview#:~:text=Create%20images%20and%20video)
- [ ] ✓ 엑셀·표 정리 — 표 파일 올리기  
  “combine insights from multiple files, compare and contrast documents, analyze spreadsheets, or generate new content.” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=combine%20insights%20from%20multiple%20files%2C,spreadsheets%2C%20or%20generate%20new%20content.)
- [ ] ✓ 엑셀·표 정리 — 차트 만들기  
  “understand images and charts, debug or run code, transcribe and interpret audio/video, or visualize data from CSVs and XLSXs.” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=understand%20images%20and%20charts%2C%20debug,data%20from%20CSVs%20and%20XLSXs.)
- [ ] cautions  
  “Generated images and videos include a Grok watermark to indicate that the content was created with AI. There is no setting to remove the watermark.” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=Generated%20images%20and%20videos%20include,setting%20to%20remove%20the%20watermark.)
- [ ] cautions  
  “Some audio and video files upload successfully but have variable transcription quality.” · [페이지에서 보기](https://docs.x.ai/grok/faq#:~:text=Some%20audio%20and%20video%20files,but%20have%20variable%20transcription%20quality.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `price.paid_from_usd`
- [ ] `price.billing`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] 한국어 점수: 결과는 한국어 가능 (2점)
- [ ] 한 줄 설명: 대화로 묻고 답하고, 올린 파일을 읽어 정리하고, 그림과 영상도 만들어주는 AI예요
- [ ] 시작 3단계: 1) grok.com에서 구글·애플 계정이나 이메일로 가입하기 2) 입력창에 궁금한 것이나 부탁할 일을 문장으로 쓰기 3) 입력창 옆 + 버튼으로 파일을 올려 요약이나 정리를 부탁하기
- [ ] 주의할 점: 무료로 쓸 수 있는 양이 정해져 있어요 / 만든 그림과 영상에는 AI로 만들었다는 표시가 붙고 지울 수 없어요 / 녹음·영상 파일은 받아쓰기 품질이 들쭉날쭉할 수 있어요

**5. Claude 메모**

- 가격 페이지(grok.com/plans)는 스크립트가 화면을 그려서 글자로 읽을 수 없었어요. 유료(SuperGrok) 가격과 결제 주기는 todo로 남겼어요. 공식 문서에는 '무료로 시작, 유료는 한도가 늘어남'이라는 문장만 있어요.
- 무료 한도: 공식 문서에 무료 사용량의 정확한 양이 없어서 '양이 정해져 있음'으로만 적었어요. 문서에는 2026년 6월부터 유료 사용자는 '주간 사용량 한 묶음'을 모든 기능에 나눠 쓴다고 되어 있어요.
- 학습 정책: 개인정보 처리방침(x.ai/legal/privacy-policy)은 접속이 막혀(403) 못 읽어서 unknown이에요. 참고로 개발자용 보안 문서(docs.x.ai/developers/faq/security)에 'If the "improve the model" toggle is enabled from grok.com or mobile data controls settings, these chats via Build mode and build sessions, including data from created apps, may be used for product and model improvements.'라는 문장이 있어요. grok.com 설정에 '모델 개선' 켜고 끄기가 있다는 뜻이지만, 일반 대화가 아닌 'Build 모드'에 대한 문장이라 opt_out 근거로 쓰지 않았어요. 처리방침에서 일반 대화의 기본값과 끄기를 확인해 주세요.
- 가입 방법: 문서에 애플·구글·X(옛 트위터) 계정·이메일로 로그인하는 문장이 있어요. X 계정은 login 값 목록에 없어서 뺐어요.
- 사용 기기: 웹·아이폰·안드로이드 앱만 확인했어요. 윈도우·맥 전용 앱 문장은 못 찾았어요.
- 한국어 2점은 제안값이에요. 한국어 메뉴나 한국어 품질에 대한 공식 문장을 못 찾았어요(grok.com/ko는 없는 주소). 직접 확인해 주세요.
- 공식 문서에서 회사 이름이 'SpaceXSI'로 나와요(예: 'Grok is SpaceXSI's assistant'). 공식 도메인은 docs.x.ai라 그대로 출처로 썼어요. 운영사 이름이 바뀐 건지 확인해 주세요.
- 공식 도메인에 x.ai(공식 문서 docs.x.ai)를 넣었어요. x.ai 첫 화면은 접속이 막혀 읽지 않았어요.
- 기능 체크리스트: P01 4개(초안 쓰기는 'write' 한 단어, 다듬기는 'rewrite in different styles' 문장이 근거), P03 3개(원문 위치 표시는 못 찾음), P08 2개, P05 기본 기능 1개, P02는 받아쓰기·녹음 파일 올리기 2개(받아쓰기 품질이 들쭉날쭉하다는 문장이 있어 회의 녹음 정리 추천에 넣을지 정해 주세요). 웹 검색(P09)·번역(P07)·음성(P10)은 일반 사용자용 문서에서 문장을 못 찾았어요(개발자용 문서에는 웹 검색·음성 기능이 있지만 개발자 도구 설명이라 쓰지 않았어요).

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote grok --verified YYYY-MM-DD
```

<a id="general-figure-labs"></a>
### FigureLabs (`figure-labs`) · 비개발자용

공식 주소: https://chat.figurelabs.ai/ko  
공식 도메인: `figurelabs.ai`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (1개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 한국어: 결과는 한국어 가능  
  “워크스페이스를 불러오는 중...” · [페이지에서 보기](https://chat.figurelabs.ai/ko#:~:text=%EC%9B%8C%ED%81%AC%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%A5%BC%20%EB%B6%88%EB%9F%AC%EC%98%A4%EB%8A%94%20%EC%A4%91...)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `price.free`
- [ ] `price.free_limit`
- [ ] `price.paid_from_usd`
- [ ] `price.billing`
- [ ] `privacy.trains_on_input_default`
- [ ] `privacy.opt_out`
- [ ] `platforms`
- [ ] `login`
- [ ] `features`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] 한국어 점수: 결과는 한국어 가능 (2점)
- [ ] 한 줄 설명: 연구 논문이나 발표에 넣을 과학 그림을 AI로 만들어주는 작업 공간이에요
- [ ] 시작 3단계: 1) chat.figurelabs.ai에 들어가 가입하기 2) 만들고 싶은 그림을 문장으로 설명하기 3) 만들어진 그림을 보고 고칠 점을 말해 다시 부탁하기
- [ ] 주의할 점: 없음

**5. Claude 메모**

- chat.figurelabs.ai 화면은 스크립트가 그려서 '워크스페이스를 불러오는 중...' 한 줄 말고는 글자로 읽을 수 없었어요. 가격·무료 여부·학습 정책·사용 기기·가입 방법·기능 모두 직접 확인이 필요해요.
- /pricing, /privacy, /terms 주소는 모두 '없는 페이지(404)'였고, 회사 첫 화면(figurelabs.ai)은 접속이 막혀 읽지 못했어요. 가격·개인정보 처리방침이 있는 공식 페이지 주소를 알려 주시면 다시 읽을게요.
- 한 줄 설명은 페이지 정보(설명 문구) 'AI-powered scientific figure generation workspace'만 보고 새로 썼어요(pages/figure-labs/meta-ko.txt). 실제로 무엇을 하는 도구인지 확인해 주세요. 과학 논문용 그림이라 비개발자 목적 중 이미지 만들기(P05)나 발표 자료(P04)에 맞는지도 정해 주세요.
- 시작 3단계는 화면을 못 보고 일반적인 순서로 쓴 제안이에요. 실제 화면과 맞게 고쳐 주세요.
- 이름: 페이지 제목이 'FigureLabs Workspace'라서 이름을 'FigureLabs'로 적었어요. 'Figure Labs'로 띄어 쓸지 정해 주세요.
- 한국어 2점은 제안값이에요. /ko 주소에서 불러오는 중 문구가 한국어로 나오는 것만 확인했어요. 메뉴와 결과가 한국어로 되는지는 확인하지 못했어요.
- 공식 도메인을 figurelabs.ai로 넣었어요. chat.figurelabs.ai가 이 회사의 공식 주소가 맞는지 확인해 주세요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote figure-labs --verified YYYY-MM-DD
```

## 개발자용 (37개)

<a id="dev-claude-code"></a>
### Claude Code (`claude-code`) · 개발자용

공식 주소: https://code.claude.com/docs/en/overview  
공식 도메인: `claude.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (17개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 안 돼요  
  “Is Claude Code included in my plan?” · [페이지에서 보기](https://claude.com/pricing#:~:text=Is%20Claude%20Code%20included%20in%20my%20plan%3F)
- [ ] 무료 사용: 안 돼요  
  “Claude Code is included in all paid plans. It shares the same usage limits as the rest of your plan, so your work in the terminal and your chats draw from one pool.” · [페이지에서 보기](https://claude.com/pricing#:~:text=Claude%20Code%20is%20included%20in,chats%20draw%20from%20one%20pool.)
- [ ] 유료 가격: 월 20달러부터  
  “$20 if billed monthly.” · [페이지에서 보기](https://claude.com/pricing#:~:text=%2420%20if%20billed%20monthly.)
- [ ] 유료 가격: 월 20달러부터  
  “The Pro plan gives you everything in a Free plan with more usage and more of Claude's capabilities. That includes Claude Code, along with projects to organize your chats and documents, access to more Claude models, and Claude for Microsoft 365.” · [페이지에서 보기](https://claude.com/pricing#:~:text=The%20Pro%20plan%20gives%20you,and%20Claude%20for%20Microsoft%20365.)
- [ ] 학습 끄기 가능: 예  
  “We give you the choice to allow your data to be used to improve future Claude models. We will train new models using data from Free, Pro, and Max accounts when this setting is on (including when you use Claude Code from these accounts).” · [페이지에서 보기](https://code.claude.com/docs/en/data-usage#:~:text=We%20give%20you%20the%20choice,Claude%20Code%20from%20these%20accounts%29.)
- [ ] 학습 메모: Team·Enterprise·API(상업 약관)는 코드와 프롬프트를 학습에 쓰지 않아요  
  “Anthropic does not train generative models using code or prompts sent to Claude Code under commercial terms, unless the customer has chosen to provide their data to us for model improvement” · [페이지에서 보기](https://code.claude.com/docs/en/data-usage#:~:text=Anthropic%20does%20not%20train%20generative,to%20us%20for%20model%20improvement)
- [ ] 쓰는 형태: CLI, IDE 확장, 데스크톱 앱, 웹  
  “Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools. Available in your terminal, IDE, desktop app, and browser.” · [페이지에서 보기](https://code.claude.com/docs/en/overview#:~:text=Claude%20Code%20is%20an%20agentic,IDE%2C%20desktop%20app%2C%20and%20browser.)
- [ ] 쓰는 형태: CLI, IDE 확장, 데스크톱 앱, 웹  
  “Claude Code runs on several surfaces: the terminal, IDE extensions, a desktop app, and the web.” · [페이지에서 보기](https://code.claude.com/docs/en/overview#:~:text=Claude%20Code%20runs%20on%20several,desktop%20app%2C%20and%20the%20web.)
- [ ] ✓ AI와 같이 코드 짜기 — 저장소 전체 읽고 이해  
  “It understands your entire codebase and can work across multiple files and tools to get things done.” · [페이지에서 보기](https://code.claude.com/docs/en/overview#:~:text=It%20understands%20your%20entire%20codebase,tools%20to%20get%20things%20done.)
- [ ] ✓ AI와 같이 코드 짜기 — 여러 파일 한 번에 수정  
  “Describe what you want in plain language. Claude Code plans the approach, writes the code across multiple files, and verifies it works.” · [페이지에서 보기](https://code.claude.com/docs/en/overview#:~:text=Describe%20what%20you%20want%20in,files%2C%20and%20verifies%20it%20works.)
- [ ] ✓ AI와 같이 코드 짜기 — 명령·테스트 실행  
  “Claude Code is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools.” · [페이지에서 보기](https://code.claude.com/docs/en/overview#:~:text=Claude%20Code%20is%20an%20agentic,integrates%20with%20your%20development%20tools.)
- [ ] ✓ AI와 같이 코드 짜기 — 결과를 PR로 올리기  
  “Claude Code works directly with git. It stages changes, writes commit messages, creates branches, and opens pull requests.” · [페이지에서 보기](https://code.claude.com/docs/en/overview#:~:text=Claude%20Code%20works%20directly%20with,branches%2C%20and%20opens%20pull%20requests.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — PR 자동 리뷰 코멘트  
  “In CI, you can automate code review and issue triage with” · [페이지에서 보기](https://code.claude.com/docs/en/overview#:~:text=In%20CI%2C%20you%20can%20automate,review%20and%20issue%20triage%20with)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 보안 취약점 검사  
  “"review these changed files for security issues"” · [페이지에서 보기](https://code.claude.com/docs/en/overview#:~:text=%22review%20these%20changed%20files%20for%20security%20issues%22)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 테스트 코드 생성  
  “Claude Code handles the tedious tasks that eat up your day: writing tests for untested code, fixing lint errors across a project, resolving merge conflicts, updating dependencies, and writing release notes.” · [페이지에서 보기](https://code.claude.com/docs/en/overview#:~:text=Claude%20Code%20handles%20the%20tedious,dependencies%2C%20and%20writing%20release%20notes.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “Review diffs visually, run multiple sessions side by side, schedule recurring tasks, and start cloud sessions.” · [페이지에서 보기](https://code.claude.com/docs/en/overview#:~:text=Review%20diffs%20visually%2C%20run%20multiple,tasks%2C%20and%20start%20cloud%20sessions.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “With MCP, Claude Code can read your design docs in Google Drive, update tickets in Jira, pull data from Slack, or use your own custom tooling.” · [페이지에서 보기](https://code.claude.com/docs/en/overview#:~:text=With%20MCP%2C%20Claude%20Code%20can,use%20your%20own%20custom%20tooling.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: AI와 같이 코드 짜기
- [ ] 한 줄 설명: 내 프로젝트 코드를 읽고 고치고 명령까지 실행해주는 코딩 에이전트예요. 터미널, 에디터, 데스크톱 앱, 웹에서 써요
- [ ] 시작 3단계: 1) Claude Pro 이상 요금제나 Anthropic Console 계정 준비하기 2) 공식 문서의 설치 명령으로 터미널에 설치하기 (또는 VS Code 확장 설치) 3) 프로젝트 폴더에서 실행하고 할 일을 문장으로 부탁하기
- [ ] 주의할 점: 무료 요금제로는 쓸 수 없어요 / 파일을 고치고 명령을 실행할 수 있으니 바뀌는 내용을 확인하고 허락하세요

**5. Claude 메모**

- 무료 여부: 가격표 비교 표에서 'Claude Code' 줄이 Free 칸은 No, Pro·Max는 Yes예요. 그래서 free=false로 했어요. 별도로 Console(API) 계정으로 쓴 만큼 내는 방법도 있어요.
- 유료 가격: Pro 월 결제 20달러 기준이에요 (연 결제는 월 17달러).
- 오픈소스 여부: 공식 문서에는 '사용은 이용 약관(Consumer/Commercial Terms)을 따른다', '배포된 바이너리를 바꾸면 안 된다'는 문장만 있고 오픈소스라는 말은 없어요. GitHub 저장소(github.com/anthropics/claude-code)는 공식 도메인이 아니라 근거로 쓰지 않았어요. 오픈소스가 아니면 open_source=false로 채우고 todo에서 지워 주세요.
- 학습 정책: 개인 요금제(Free·Pro·Max)는 '설정을 켜면 학습' + 고를 수 있음 → opt_out=yes. 처음 설정값은 확인 못 해서 unknown이에요.
- 기능 체크리스트: coding_agents 4개, code_review 3개(리뷰 제안 바로 적용은 문장을 못 찾음), automation 2개(앱끼리 연결하는 워크플로·AI 단계는 해당 없음). code_review의 보안 검사 근거는 문서의 명령 예시 문장("review these changed files for security issues")이에요. 문서 메뉴에 "Security scans"도 있어요. pr_review 근거 문장 뒤에는 "GitHub Actions", "GitLab CI/CD" 링크가 이어져요.
- AI 여부(yes), 섹션(official), 대표 목적(coding_agents)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote claude-code --verified YYYY-MM-DD --dev
```

<a id="dev-lovable"></a>
### Lovable (`lovable`) · 개발자용

공식 주소: https://lovable.dev/  
공식 도메인: `lovable.dev`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (14개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Starting to build on Lovable is free.” · [페이지에서 보기](https://lovable.dev/pricing#:~:text=Starting%20to%20build%20on%20Lovable%20is%20free.)
- [ ] 무료 한도: 하루 5 크레딧 (한 달 최대 30)  
  “The free plan includes a daily grant of 5 build credits (up to 30 a month), plus monthly grants of 20 Cloud credits.” · [페이지에서 보기](https://lovable.dev/pricing#:~:text=The%20free%20plan%20includes%20a,grants%20of%2020%20Cloud%20credits.)
- [ ] 유료 가격: 월 25달러부터  
  “Prices in USD. The annual column shows the yearly charge and the equivalent monthly rate.” · [페이지에서 보기](https://docs.lovable.dev/introduction/subscription-plans#:~:text=Prices%20in%20USD.%20The%20annual,and%20the%20equivalent%20monthly%20rate.)
- [ ] 유료 가격: 월 25달러부터  
  “$25” · [페이지에서 보기](https://docs.lovable.dev/introduction/subscription-plans#:~:text=%2425)
- [ ] 결제 주기: monthly  
  “Each tier is billed monthly or annually. Annual billing gives you two months free compared with paying monthly.” · [페이지에서 보기](https://docs.lovable.dev/introduction/subscription-plans#:~:text=Each%20tier%20is%20billed%20monthly,free%20compared%20with%20paying%20monthly.)
- [ ] 기본으로 학습에 씀: 예  
  “As of September 9, 2026, customer data from Free and Pro plans may be used to train, develop, and improve Lovable’s AI models and AI-powered features, as described in Section 5 of the updated Privacy Policy.” · [페이지에서 보기](https://docs.lovable.dev/features/business/data-opt-out#:~:text=As%20of%20September%209%2C%202026%2C,of%20the%20updated%20Privacy%20Policy.)
- [ ] 학습 끄기 가능: 예  
  “Free and Pro: individual users can opt their own data out of AI model training at any time with an account-level setting.” · [페이지에서 보기](https://docs.lovable.dev/features/business/data-opt-out#:~:text=Free%20and%20Pro%3A%20individual%20users,time%20with%20an%20account%2Dlevel%20setting.)
- [ ] 학습 메모: Business·Enterprise 요금제는 기본으로 학습에서 빠져요  
  “Business and Enterprise: workspace data is governed by your organization’s agreement with Lovable, including your Data Processing Agreement, and is excluded from model training by default.” · [페이지에서 보기](https://docs.lovable.dev/features/business/data-opt-out#:~:text=Business%20and%20Enterprise%3A%20workspace%20data,from%20model%20training%20by%20default.)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “Lovable is a full-stack AI development platform for building, iterating on, and deploying web applications using natural language, with real code, security, and enterprise governance.” · [페이지에서 보기](https://docs.lovable.dev/introduction/welcome#:~:text=Lovable%20is%20a%20full%2Dstack%20AI,code%2C%20security%2C%20and%20enterprise%20governance.)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “Lovable also works beyond the browser: build from the desktop app or the mobile app” · [페이지에서 보기](https://docs.lovable.dev/introduction/welcome#:~:text=Lovable%20also%20works%20beyond%20the,app%20or%20the%20mobile%20app)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 문장으로 앱 생성  
  “You describe what you want to build, and Lovable generates a working application that includes frontend, backend, database, authentication, and integrations, all backed by editable code.” · [페이지에서 보기](https://docs.lovable.dev/introduction/welcome#:~:text=You%20describe%20what%20you%20want,all%20backed%20by%20editable%20code.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 백엔드·DB·인증 포함  
  “You describe what you want to build, and Lovable generates a working application that includes frontend, backend, database, authentication, and integrations, all backed by editable code.” · [페이지에서 보기](https://docs.lovable.dev/introduction/welcome#:~:text=You%20describe%20what%20you%20want,all%20backed%20by%20editable%20code.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 바로 배포  
  “Publish it to a live URL” · [페이지에서 보기](https://docs.lovable.dev/introduction/welcome#:~:text=Publish%20it%20to%20a%20live%20URL)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 코드 내보내기·GitHub 연동  
  “produces a codebase that can be synced to GitHub, GitLab, or Bitbucket with” · [페이지에서 보기](https://docs.lovable.dev/introduction/welcome#:~:text=produces%20a%20codebase%20that%20can,GitHub%2C%20GitLab%2C%20or%20Bitbucket%20with)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 말로 설명해서 앱 통째로 만들기
- [ ] 한 줄 설명: 만들고 싶은 웹 앱을 말로 설명하면 화면·서버·데이터베이스까지 갖춘 앱을 만들어줘요
- [ ] 시작 3단계: 1) lovable.dev에서 이메일·구글·GitHub·애플 계정으로 무료 가입하기 2) 만들고 싶은 앱을 문장으로 설명하기 3) 미리보기를 보면서 고칠 점을 대화로 부탁하기
- [ ] 주의할 점: 무료·Pro는 내 프로젝트 내용이 기본으로 학습에 쓰여요. 계정 설정에서 끌 수 있어요 / 무료는 하루 5 크레딧이라 큰 작업은 금방 다 써요

**5. Claude 메모**

- 유료 가격: 'Pro tiers' 표의 첫 줄(100 credits)이 Monthly billing $25, Annual billing $250 ($21/month)예요. 표 칸이라 '$25'만 근거로 남겼어요. 월 결제 25달러로 넣었어요.
- 가격 페이지(lovable.dev/pricing)의 요금 카드는 스크립트로 그려져서 글자로 안 읽혔어요. 가격은 공식 문서(docs.lovable.dev)의 요금제 페이지 기준이에요.
- 학습 정책: 2026년 9월 9일부터 Free·Pro 데이터가 학습에 쓰일 수 있고(trains=yes), 계정 설정에서 끌 수 있어요(opt_out=yes). 보안 조건은 통과해요.
- 쓰는 형태: 웹(브라우저)과 데스크톱 앱 문장이 있어요. 모바일 앱도 언급되지만 개발자용 forms 값에는 모바일 항목이 없어서 넣지 않았어요.
- 오픈소스 여부: 공식 페이지에서 관련 문장을 못 찾았어요. 오픈소스가 아니면 open_source=false로 채우고 todo에서 지워 주세요.
- 기능 체크리스트: app_builders 4개. 화면 디자인(design_ui)은 공식 페이지가 시안 만들기 용도로 소개하는 문장을 못 찾아서 넣지 않았어요 (예전 제안의 design_ui 1점 삭제).
- AI 여부(yes), 섹션(official), 대표 목적(app_builders)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote lovable --verified YYYY-MM-DD --dev
```

<a id="dev-vercel"></a>
### Vercel (`vercel`) · 개발자용

공식 주소: https://vercel.com  
공식 도메인: `vercel.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (16개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Hobby $0 /mo.” · [페이지에서 보기](https://vercel.com/pricing#:~:text=Hobby%20%240%20%2Fmo.)
- [ ] 무료 한도: Hobby 요금제 (개인·비상업용, 사용량 한도 있음)  
  “You shall only use the Services under a Hobby plan for your personal or non-commercial use.” · [페이지에서 보기](https://vercel.com/legal/terms#:~:text=You%20shall%20only%20use%20the,your%20personal%20or%20non%2Dcommercial%20use.)
- [ ] 무료 한도: Hobby 요금제 (개인·비상업용, 사용량 한도 있음)  
  “The perfect starting place for your web app or personal project.” · [페이지에서 보기](https://vercel.com/pricing#:~:text=The%20perfect%20starting%20place%20for,web%20app%20or%20personal%20project.)
- [ ] 유료 가격: 월 20달러부터  
  “Pro Popular $20 /mo.” · [페이지에서 보기](https://vercel.com/pricing#:~:text=Pro%20Popular%20%2420%20%2Fmo.)
- [ ] 유료 가격: 월 20달러부터  
  “Developer seat 1 $20 / month” · [페이지에서 보기](https://vercel.com/pricing#:~:text=Developer%20seat%201%20%2420%20%2F%20month)
- [ ] 기본으로 학습에 씀: 예  
  “In addition, if you are on a Hobby plan or trial Pro plan, you agree that we may use Your Content to train our artificial intelligence (“AI”) and machine learning models” · [페이지에서 보기](https://vercel.com/legal/terms#:~:text=In%20addition%2C%20if%20you%20are,%28%E2%80%9CAI%E2%80%9D%29%20and%20machine%20learning%20models)
- [ ] 학습 끄기 가능: 예  
  “If you are on a paid Pro plan, Model Training is not enabled by default and you may opt in to Model Training. You may opt-out of Model Training at any time by adjusting your Team account settings or by upgrading to an Enterprise plan.” · [페이지에서 보기](https://vercel.com/legal/terms#:~:text=If%20you%20are%20on%20a,upgrading%20to%20an%20Enterprise%20plan.)
- [ ] 학습 끄기 가능: 예  
  “Opt-out of Model Training as described in Section 3 of the Terms of Service.” · [페이지에서 보기](https://vercel.com/legal/privacy-policy#:~:text=Opt%2Dout%20of%20Model%20Training%20as,of%20the%20Terms%20of%20Service.)
- [ ] 쓰는 형태: 클라우드 서비스, CLI  
  “Import your repo, deploy in seconds” · [페이지에서 보기](https://vercel.com/pricing#:~:text=Import%20your%20repo%2C%20deploy%20in%20seconds)
- [ ] 쓰는 형태: 클라우드 서비스, CLI  
  “With the command-line interface (CLI) you can interact with the Vercel platform using a terminal, or through an automated system” · [페이지에서 보기](https://vercel.com/docs/cli#:~:text=With%20the%20command%2Dline%20interface%20%28CLI%29,or%20through%20an%20automated%20system)
- [ ] ✓ 배포·인프라·CI/CD — Git 푸시하면 자동 배포  
  “Vercel allows for automatic deployments on every branch push” · [페이지에서 보기](https://vercel.com/docs/git#:~:text=Vercel%20allows%20for%20automatic%20deployments%20on%20every%20branch%20push)
- [ ] ✓ 배포·인프라·CI/CD — 미리보기 배포  
  “By default, Vercel creates a preview deployment when you:” · [페이지에서 보기](https://vercel.com/docs/deployments/environments#:~:text=By%20default%2C%20Vercel%20creates%20a%20preview%20deployment%20when%20you%3A)
- [ ] ✓ 배포·인프라·CI/CD — 로그·모니터링  
  “Use logs to find failing requests, traces to inspect one request path, and metrics to compare behavior over time.” · [페이지에서 보기](https://vercel.com/docs/observability#:~:text=Use%20logs%20to%20find%20failing,to%20compare%20behavior%20over%20time.)
- [ ] ✓ 배포·인프라·CI/CD — AI로 오류 원인 분석  
  “Use Vercel Agent Investigations to analyze anomaly alerts, failed deployments, runtime errors, and cost or performance issues. Vercel Agent queries relevant logs and metrics, identifies possible causes, and summarizes its findings.” · [페이지에서 보기](https://vercel.com/docs/agent#:~:text=Use%20Vercel%20Agent%20Investigations%20to,causes%2C%20and%20summarizes%20its%20findings.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — PR 자동 리뷰 코멘트  
  “Get Sandbox-validated suggestions on your pull requests.” · [페이지에서 보기](https://vercel.com/docs/agent#:~:text=Get%20Sandbox%2Dvalidated%20suggestions%20on%20your%20pull%20requests.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 보안 취약점 검사  
  “Code Review can identify security vulnerabilities, logic errors, and performance issues, then validate proposed fixes with your builds, tests, and linters.” · [페이지에서 보기](https://vercel.com/docs/agent#:~:text=Code%20Review%20can%20identify%20security,your%20builds%2C%20tests%2C%20and%20linters.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 배포·인프라·CI/CD
- [ ] 한 줄 설명: Git 저장소를 연결하면 푸시할 때마다 웹앱을 빌드하고 배포해주는 호스팅 플랫폼이에요. 배포 실패 원인을 찾아주는 AI 에이전트도 있어요
- [ ] 시작 3단계: 1) Vercel 계정을 만들고 GitHub 같은 Git 저장소를 연결하기 2) 프로젝트를 가져오면(Import) 첫 배포가 자동으로 끝나요 (또는 터미널에서 Vercel CLI로 배포) 3) 브랜치에 푸시해서 미리보기 주소로 확인하고, 기본 브랜치에 합치면 실서비스에 반영돼요
- [ ] 주의할 점: 무료 Hobby 요금제는 개인·비상업용으로만 쓸 수 있어요 / 사용량에 따라 요금이 늘어나니 지출 한도를 걸어 두세요 / Vercel Agent의 코드 리뷰·원인 분석은 베타이고 Pro 이상에서만 써요

**5. Claude 메모**

- 유료 가격: Pro 카드가 '$20 /mo.'이고 기능 표에 'Developer seat 1 $20 / month'가 있어요. 개발자 좌석당 월 20달러(사용 크레딧 20달러 포함)로 읽었어요. 그 위로는 사용량 과금이에요. 연 결제 가격은 페이지에서 못 찾았어요.
- 무료 한도: 가격표에 항목별 한도(예: 'CDN Requests 1M / month included', 'Fast Data Transfer 100 GB / month included')가 있지만 표 칸이라 요약만 했어요. 약관에 'Hobby는 개인·비상업용'이라는 문장이 있어요.
- 학습 정책: 이용 약관(legal/terms) 3장 기준이에요. Hobby·Pro 체험판은 '고객 콘텐츠를 AI 학습에 쓸 수 있음'(trains=yes), 팀 설정에서 끌 수 있음(opt_out=yes). 유료 Pro는 기본 꺼짐, Enterprise는 사용 안 함. 꼭 원문 대조해 주세요.
- AI 기능 범위: 가격표 'AI' 줄에 'Vercel Agent Beta'가 있고, 문서에는 'Chat in Slack, dashboard chat, Investigations, and Code Review are in public beta for Pro and Enterprise teams.'라고 돼 있어요. 그래서 ai_debug·pr_review·security는 Pro 이상 베타 기능이에요.
- 기능 체크리스트: devops 4개, code_review 2개(테스트 생성·수정 적용 문장은 없음 — 'validate proposed fixes'는 수정안을 검증한다는 뜻이라 apply_fix로 넣지 않았어요). AI Gateway(여러 회사 모델을 한 주소로 호출)와 Vercel Blob 같은 스토리지도 있지만 이번 초안에서는 넣지 않았어요. 넣을지 정해 주세요.
- 쓰는 형태: 클라우드 서비스 + CLI. 대시보드(웹)도 있지만 web은 넣지 않았어요.
- 오픈소스 여부: 플랫폼 자체가 오픈소스라는 문장은 못 찾았어요. 오픈소스가 아니면 open_source=false로 채우고 todo에서 지워 주세요.
- 시작하기 문서(getting-started-with-vercel) 안에 'Agent Prompt'라는 AI 에이전트용 지시문 블록이 있어요. 따르지 않았고 근거로도 쓰지 않았어요.
- AI 여부(partial — 호스팅이 핵심이고 AI는 일부), 섹션(official), 대표 목적(devops)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote vercel --verified YYYY-MM-DD --dev
```

<a id="dev-v0"></a>
### v0 (`v0`) · 개발자용

공식 주소: https://v0.app  
공식 도메인: `v0.app`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (17개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free $0 /month” · [페이지에서 보기](https://v0.app/pricing#:~:text=Free%20%240%20%2Fmonth)
- [ ] 무료 한도: 하루 메시지 7개  
  “7 message/day limit” · [페이지에서 보기](https://v0.app/pricing#:~:text=7%20message%2Fday%20limit)
- [ ] 유료 가격: 월 30달러부터  
  “Plus : $30/user/month. For fast moving teams and collaboration.” · [페이지에서 보기](https://v0.app/docs/pricing#:~:text=Plus%20%3A%20%2430%2Fuser%2Fmonth.%20For%20fast%20moving%20teams%20and%20collaboration.)
- [ ] 유료 가격: 월 30달러부터  
  “The Premium plan is in the process of being sunsetted and is no longer available to new users.” · [페이지에서 보기](https://v0.app/docs/pricing#:~:text=The%20Premium%20plan%20is%20in,longer%20available%20to%20new%20users.)
- [ ] 기본으로 학습에 씀: 예  
  “v0 may use user-generated prompts and/or content as inputs to models and learning systems from third-party providers to improve our products.” · [페이지에서 보기](https://v0.app/docs/faqs#:~:text=v0%20may%20use%20user%2Dgenerated%20prompts,providers%20to%20improve%20our%20products.)
- [ ] 기본으로 학습에 씀: 예  
  “Training opt-out by default” · [페이지에서 보기](https://v0.app/pricing#:~:text=Training%20opt%2Dout%20by%20default)
- [ ] 학습 끄기 가능: 예  
  “Content of v0 Enterprise customers, or any customer that has opted out of model training in their Vercel settings, is not used for training.” · [페이지에서 보기](https://v0.app/docs/faqs#:~:text=Content%20of%20v0%20Enterprise%20customers%2C,is%20not%20used%20for%20training.)
- [ ] 학습 끄기 가능: 예  
  “Users can change their opt out of such use and sharing at any time through their Team Settings or by purchasing the appropriate subscription.” · [페이지에서 보기](https://v0.app/policy#:~:text=Users%20can%20change%20their%20opt,by%20purchasing%20the%20appropriate%20subscription.)
- [ ] 쓰는 형태: 웹  
  “Actions in the v0 web app use your v0 role” · [페이지에서 보기](https://v0.app/docs/github#:~:text=Actions%20in%20the%20v0%20web%20app%20use%20your%20v0%20role)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 문장으로 앱 생성  
  “v0 is an AI agent that helps anyone create real code and full-stack apps and agents.” · [페이지에서 보기](https://v0.app/docs#:~:text=v0%20is%20an%20AI%20agent,and%20full%2Dstack%20apps%20and%20agents.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 백엔드·DB·인증 포함  
  “v0 can transform prototypes into full-stack applications. In a new chat or existing generation, ask v0 to implement features that require data persistence, API calls, or backend logic.” · [페이지에서 보기](https://v0.app/docs/full-stack-apps#:~:text=v0%20can%20transform%20prototypes%20into,API%20calls%2C%20or%20backend%20logic.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 백엔드·DB·인증 포함  
  “v0 enables simple, one-click database integrations with popular providers, including” · [페이지에서 보기](https://v0.app/docs/databases#:~:text=v0%20enables%20simple%2C%20one%2Dclick%20database%20integrations%20with%20popular%20providers%2C%20including)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 바로 배포  
  “v0 deploys projects to Vercel.” · [페이지에서 보기](https://v0.app/docs/deployments#:~:text=v0%20deploys%20projects%20to%20Vercel.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 코드 내보내기·GitHub 연동  
  “Connect a v0 project to GitHub to keep its code in a repository, work on isolated branches, preview changes, run CI, and publish through pull requests.” · [페이지에서 보기](https://v0.app/docs/github#:~:text=Connect%20a%20v0%20project%20to,and%20publish%20through%20pull%20requests.)
- [ ] ✓ 화면 디자인·시안 만들기 — 문장으로 화면 시안 생성  
  “Create high-fidelity UIs from your wireframes or mockups.” · [페이지에서 보기](https://v0.app/docs#:~:text=Create%20high%2Dfidelity%20UIs%20from%20your%20wireframes%20or%20mockups.)
- [ ] ✓ 화면 디자인·시안 만들기 — 컴포넌트·디자인 시스템  
  “Design Systems 2.0 lets you teach v0 your design system once, so chats can build with your real components, tokens, and conventions.” · [페이지에서 보기](https://v0.app/docs/design-systems-2#:~:text=Design%20Systems%202.0%20lets%20you,real%20components%2C%20tokens%2C%20and%20conventions.)
- [ ] ✓ 화면 디자인·시안 만들기 — 클릭되는 프로토타입  
  “v0 changes this by enabling early, continuous validation with interactive prototypes.” · [페이지에서 보기](https://v0.app/docs/prototyping#:~:text=v0%20changes%20this%20by%20enabling,continuous%20validation%20with%20interactive%20prototypes.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 말로 설명해서 앱 통째로 만들기
- [ ] 한 줄 설명: 만들고 싶은 화면이나 앱을 문장으로 설명하면 Next.js 코드로 만들어주고 Vercel에 바로 올려주는 Vercel의 AI 도구예요
- [ ] 시작 3단계: 1) v0.app에 Vercel 계정으로 로그인하기 2) 만들고 싶은 화면이나 기능을 문장으로 적고, 결과를 보며 계속 고쳐 달라고 하기 3) Publish로 Vercel에 배포하거나 GitHub에 연결해 코드를 저장소로 가져가기
- [ ] 주의할 점: 무료는 하루 메시지 7개라 금방 막혀요 / 유료는 크레딧(토큰) 기준이라 큰 작업일수록 빨리 줄어요 / 기본 설정에서는 입력과 결과가 학습에 쓰일 수 있으니 팀 설정을 확인하세요

**5. Claude 메모**

- 유료 가격: 문서 요금제 페이지 기준 Plus 사용자당 월 30달러(월 30달러 크레딧 포함)예요. Premium(월 20달러)은 '신규 가입 불가'라 제외했어요. 가격 페이지(v0.app/pricing)의 Plus 카드에는 '$30 $ 90 /user/month'처럼 숫자 두 개가 붙어 읽혀요(스크립트로 바뀌는 값으로 보여요). 실제 화면을 열어 확인해 주세요. 연 결제 가격은 못 찾았어요.
- 무료 한도: 가격 페이지 'Free' 카드의 '7 message/day limit'. 가격 페이지 끝에 '$5 in one-time credits for new users' 문구도 있어요.
- 학습 정책: FAQ에 '프롬프트·콘텐츠를 제품 개선에 쓸 수 있다', Enterprise 또는 Vercel 설정에서 끈 고객은 제외라고 돼 있어요. 가격표에서 Business에만 'Training opt-out by default'가 있어서 Free·Plus는 기본 켜짐으로 보고 trains=yes, opt_out=yes로 했어요. AI 정책(v0.app/policy)에는 'Hobby·Pro 체험판은 끄지 않으면 사용, 유료 Pro는 켜지 않으면 사용 안 함'이라는 Vercel 요금제 기준 문장이 있어요. v0 Plus와 Vercel Pro 관계는 원문 대조가 필요해요.
- 쓰는 형태: 웹(web). 사이트 메뉴에 'iOS'가 있지만 개발자용 forms에 모바일 값이 없어서 넣지 않았어요.
- 기능 체크리스트: app_builders 4개, design_ui 3개(코드 내보내기는 design_ui에도 해당되지만 GitHub 근거를 app_builders 쪽에만 걸었어요. design_ui.export_code도 같은 근거로 넣을지 정해 주세요). 문서에 Figma 연동, Design mode도 있어요.
- 공식 도메인: v0 페이지는 모두 v0.app에 있어서 official_domains에 v0.app만 넣었어요. 결제는 vercel.com에서 해요('Centralized billing on vercel.com').
- 오픈소스 여부: 관련 문장을 못 찾았어요. 오픈소스가 아니면 open_source=false로 채우고 todo에서 지워 주세요.
- AI 여부(yes), 섹션(official), 대표 목적(app_builders)은 제안값이에요. Vercel과 별개 툴로 나눴어요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote v0 --verified YYYY-MM-DD --dev
```

<a id="dev-pulumi"></a>
### Pulumi (`pulumi`) · 개발자용

공식 주소: https://www.pulumi.com  
공식 도메인: `pulumi.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (16개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Start for free. Stay free forever for open source and individuals, or scale with advanced editions for your team.” · [페이지에서 보기](https://www.pulumi.com/pricing/#:~:text=Start%20for%20free.%20Stay%20free,advanced%20editions%20for%20your%20team.)
- [ ] 무료 한도: 개인 1명, 워크플로 500분까지  
  “1 user” · [페이지에서 보기](https://www.pulumi.com/pricing/#:~:text=1%20user)
- [ ] 무료 한도: 개인 1명, 워크플로 500분까지  
  “Up to 500 workflow minutes” · [페이지에서 보기](https://www.pulumi.com/pricing/#:~:text=Up%20to%20500%20workflow%20minutes)
- [ ] 유료 가격: 월 40달러부터  
  “Essentials Managed infrastructure fundamentals for your whole team. $40 /month Includes 40 Credits” · [페이지에서 보기](https://www.pulumi.com/pricing/#:~:text=Essentials%20Managed%20infrastructure%20fundamentals%20for,%2440%20%2Fmonth%20Includes%2040%20Credits)
- [ ] 오픈소스: 예  
  “Pulumi's open source infrastructure as code SDK supports TypeScript, Python, Go, .NET, Java, YAML, and HCL.” · [페이지에서 보기](https://www.pulumi.com/docs/iac/#:~:text=Pulumi%27s%20open%20source%20infrastructure%20as,.NET%2C%20Java%2C%20YAML%2C%20and%20HCL.)
- [ ] 오픈소스: 예  
  “Open source and free for individuals.” · [페이지에서 보기](https://www.pulumi.com/#:~:text=Open%20source%20and%20free%20for%20individuals.)
- [ ] repo_url  
  “pulumi/pulumi” · [페이지에서 보기](https://www.pulumi.com/#:~:text=pulumi%2Fpulumi)
- [ ] 쓰는 형태: CLI, 라이브러리, 클라우드 서비스  
  “You don’t need a Pulumi Cloud account to install the CLI.” · [페이지에서 보기](https://www.pulumi.com/docs/install/#:~:text=You%20don%E2%80%99t%20need%20a%20Pulumi,account%20to%20install%20the%20CLI.)
- [ ] 쓰는 형태: CLI, 라이브러리, 클라우드 서비스  
  “Pulumi's open source infrastructure as code SDK supports TypeScript, Python, Go, .NET, Java, YAML, and HCL.” · [페이지에서 보기](https://www.pulumi.com/docs/iac/#:~:text=Pulumi%27s%20open%20source%20infrastructure%20as,.NET%2C%20Java%2C%20YAML%2C%20and%20HCL.)
- [ ] 쓰는 형태: CLI, 라이브러리, 클라우드 서비스  
  “Pulumi Deployments is a managed service that runs Pulumi operations” · [페이지에서 보기](https://www.pulumi.com/docs/deployments/deployments/#:~:text=Pulumi%20Deployments%20is%20a%20managed%20service%20that%20runs%20Pulumi%20operations)
- [ ] ✓ 배포·인프라·CI/CD — Git 푸시하면 자동 배포  
  “deployments can run automatically from your version control system” · [페이지에서 보기](https://www.pulumi.com/docs/deployments/deployments/#:~:text=deployments%20can%20run%20automatically%20from%20your%20version%20control%20system)
- [ ] ✓ 배포·인프라·CI/CD — 미리보기 배포  
  “Review stacks are ephemeral cloud environments powered by Pulumi Deployments. They are created automatically when a pull request is opened, updated on each new commit, and destroyed when the pull request is merged or closed.” · [페이지에서 보기](https://www.pulumi.com/docs/deployments/deployments/review-stacks/#:~:text=Review%20stacks%20are%20ephemeral%20cloud,request%20is%20merged%20or%20closed.)
- [ ] ✓ 배포·인프라·CI/CD — AI로 오류 원인 분석  
  “Ask why a deployment failed or what’s misconfigured. Neo investigates and explains what went wrong.” · [페이지에서 보기](https://www.pulumi.com/product/neo/#:~:text=Ask%20why%20a%20deployment%20failed,and%20explains%20what%20went%20wrong.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — PR 자동 리뷰 코멘트  
  “Neo code reviews analyze pull requests against what Pulumi Cloud knows about your running infrastructure and leave feedback in the pull request.” · [페이지에서 보기](https://www.pulumi.com/docs/ai/neo/code-reviews/#:~:text=Neo%20code%20reviews%20analyze%20pull,feedback%20in%20the%20pull%20request.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “The form asks for a name, the prompt (which includes the same integration selector as an ad-hoc task), and the frequency (hourly, daily, weekdays, or weekly). Save the automation and it begins running at the next scheduled tick.” · [페이지에서 보기](https://www.pulumi.com/docs/ai/neo/automations/#:~:text=The%20form%20asks%20for%20a,at%20the%20next%20scheduled%20tick.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “MCP integrations connect Neo to external services that expose a Model Context Protocol server” · [페이지에서 보기](https://www.pulumi.com/docs/ai/neo/integrations/mcp/#:~:text=MCP%20integrations%20connect%20Neo%20to,a%20Model%20Context%20Protocol%20server)

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 배포·인프라·CI/CD
- [ ] 한 줄 설명: 클라우드 인프라를 TypeScript·Python 같은 프로그래밍 언어 코드로 정의하고 배포하는 도구예요. 인프라 전용 AI 에이전트 Neo도 붙어 있어요
- [ ] 시작 3단계: 1) 공식 설치 안내대로 Pulumi CLI 설치하기 (예: macOS는 Homebrew) 2) 새 폴더에서 프로젝트를 만들고 익숙한 언어로 만들 클라우드 자원을 코드로 적기 3) 변경 내용을 미리 본 뒤 배포 명령으로 실제 클라우드에 반영하기
- [ ] 주의할 점: 실제 클라우드(AWS 등)에 자원을 만들기 때문에 그쪽 요금이 따로 나와요 / Neo는 토큰 사용량만큼 요금이 붙어요 / AI가 제안한 인프라 변경은 미리보기 결과를 확인하고 승인하세요

**5. Claude 메모**

- 유료 가격: Essentials '$40 /month', 'Includes 40 Credits', 'Up to 500 managed resources.'예요. 크레딧 기반이라 자원 수·사용량에 따라 더 나올 수 있어요. 연 결제 가격은 못 찾았어요. Neo는 모든 요금제에서 '$3/M tokens'로 따로 과금돼요(가격표 표 칸).
- 무료 한도: Free 카드의 '1 user', 'Up to 500 workflow minutes'를 요약했어요. 설치 문서에 'Pulumi Cloud is free for individuals'라는 문장도 있어요.
- 학습 정책: 개인정보 처리방침(pulumi.com/privacy)과 Neo 문서(설정, 모델 제공자)에서 AI 학습 관련 문장을 못 찾았어요. 그래서 unknown이에요. Neo 문서에는 'Pulumi Neo is Pulumi’s own infrastructure agent, powered by Anthropic’s Claude'라는 문장이 있어요.
- 오픈소스: 공식 문서에 'Pulumi's open source infrastructure as code SDK', 홈에 'Open source and free for individuals.'가 있어요. 저장소 주소는 홈페이지의 'pulumi/pulumi' 링크(github.com/pulumi/pulumi)에서 가져왔어요. GitHub 페이지 자체는 열지 않았어요. 오픈소스는 엔진·SDK이고 Pulumi Cloud와 Neo는 회사 서비스예요. 그래서 section은 official로 뒀어요.
- 쓰는 형태: CLI, 라이브러리(SDK), 클라우드 서비스(Pulumi Cloud·Deployments). 관리 문서에 'deploy self-hosted infrastructure'라는 말이 있지만 범위(기업용 자체 설치)가 불분명해서 self_host는 넣지 않았어요.
- 기능 체크리스트: devops 3개(로그·모니터링은 이번에 근거 문장을 못 골라서 뺐어요). 미리보기 배포(preview)는 PR마다 임시 환경을 만드는 Review Stacks 근거예요. code_review는 PR 리뷰 1개. automation 2개는 Neo 예약 작업(Automations)과 외부 MCP 서버 연결이에요. Neo가 IaC 코드를 고쳐 PR을 연다는 문서(Pull Requests)도 있어 coding_agents로 볼 여지도 있어요.
- 페이지 주소: /product/pulumi-ai/, /legal/privacy-policy/, /opensource/는 404라서 쓰지 않았어요.
- AI 여부(partial — 인프라 코드 도구가 핵심이고 AI는 Neo), 섹션(official), 대표 목적(devops)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote pulumi --verified YYYY-MM-DD --dev
```

<a id="dev-cloudflare"></a>
### Cloudflare Workers (`cloudflare`) · 개발자용

공식 주소: https://developers.cloudflare.com/workers/  
공식 도메인: `cloudflare.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (15개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “By default, users have access to the Workers Free plan. The Workers Free plan includes limited usage of Workers, Pages Functions, Workers KV and Hyperdrive.” · [페이지에서 보기](https://developers.cloudflare.com/workers/platform/pricing/#:~:text=By%20default%2C%20users%20have%20access,Functions%2C%20Workers%20KV%20and%20Hyperdrive.)
- [ ] 무료 한도: Workers 요청 하루 10만 건, Workers AI 하루 1만 뉴런  
  “Free 100,000 per day” · [페이지에서 보기](https://developers.cloudflare.com/workers/platform/pricing/#:~:text=Free%20100%2C000%20per%20day)
- [ ] 무료 한도: Workers 요청 하루 10만 건, Workers AI 하루 1만 뉴런  
  “Our free allocation allows anyone to use a total of 10,000 Neurons per day at no charge” · [페이지에서 보기](https://developers.cloudflare.com/workers-ai/platform/pricing/#:~:text=Our%20free%20allocation%20allows%20anyone,per%20day%20at%20no%20charge)
- [ ] 유료 가격: 월 5달러부터  
  “The Workers Paid plan includes Workers, Pages Functions, Workers KV, Hyperdrive, and Durable Objects usage for a minimum charge of $5 USD per month for an account.” · [페이지에서 보기](https://developers.cloudflare.com/workers/platform/pricing/#:~:text=The%20Workers%20Paid%20plan%20includes,per%20month%20for%20an%20account.)
- [ ] 기본으로 학습에 씀: 아니요  
  “Cloudflare does not use Customer Content processed by Workers AI to train AI models.” · [페이지에서 보기](https://developers.cloudflare.com/workers-ai/platform/data-usage/#:~:text=Cloudflare%20does%20not%20use%20Customer,AI%20to%20train%20AI%20models.)
- [ ] 쓰는 형태: 클라우드 서비스, CLI  
  “A serverless platform for building, deploying, and scaling apps across Cloudflare's global network” · [페이지에서 보기](https://developers.cloudflare.com/workers/#:~:text=A%20serverless%20platform%20for%20building%2C,apps%20across%20Cloudflare%27s%20global%20network)
- [ ] 쓰는 형태: 클라우드 서비스, CLI  
  “Wrangler, the Cloudflare Developer Platform command-line interface (CLI), allows you to manage Worker projects.” · [페이지에서 보기](https://developers.cloudflare.com/workers/wrangler/#:~:text=Wrangler%2C%20the%20Cloudflare%20Developer%20Platform,you%20to%20manage%20Worker%20projects.)
- [ ] ✓ 배포·인프라·CI/CD — Git 푸시하면 자동 배포  
  “enabling automated builds and deployments for your Worker on push.” · [페이지에서 보기](https://developers.cloudflare.com/workers/ci-cd/builds/#:~:text=enabling%20automated%20builds%20and%20deployments%20for%20your%20Worker%20on%20push.)
- [ ] ✓ 배포·인프라·CI/CD — 미리보기 배포  
  “A preview deployment is generated so you can test before merging” · [페이지에서 보기](https://developers.cloudflare.com/workers/ci-cd/builds/#:~:text=A%20preview%20deployment%20is%20generated,you%20can%20test%20before%20merging)
- [ ] ✓ 배포·인프라·CI/CD — 로그·모니터링  
  “Access log events in near real-time. Real-time logs provide immediate feedback and visibility into the health of your Cloudflare Worker.” · [페이지에서 보기](https://developers.cloudflare.com/workers/observability/logs/#:~:text=Access%20log%20events%20in%20near,health%20of%20your%20Cloudflare%20Worker.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 데이터베이스  
  “D1 is Cloudflare's managed, serverless database with SQLite's SQL semantics, built-in disaster recovery, and Worker and HTTP API access.” · [페이지에서 보기](https://developers.cloudflare.com/d1/#:~:text=D1%20is%20Cloudflare%27s%20managed%2C%20serverless,Worker%20and%20HTTP%20API%20access.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 파일 스토리지  
  “Cloudflare R2 Storage allows developers to store large amounts of unstructured data without the costly egress bandwidth fees associated with typical cloud storage services.” · [페이지에서 보기](https://developers.cloudflare.com/r2/#:~:text=Cloudflare%20R2%20Storage%20allows%20developers,with%20typical%20cloud%20storage%20services.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 모델 실행 (클라우드 또는 로컬)  
  “Run machine learning models, powered by serverless GPUs, on Cloudflare's global network.” · [페이지에서 보기](https://developers.cloudflare.com/workers-ai/#:~:text=Run%20machine%20learning%20models%2C%20powered,GPUs%2C%20on%20Cloudflare%27s%20global%20network.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 문서 연결 검색 (RAG)  
  “AI Search lets you add search to any application or agent without having to build an entire retrieval infrastructure. Create an instance, give it your data, and search it with natural language.” · [페이지에서 보기](https://developers.cloudflare.com/ai-search/#:~:text=AI%20Search%20lets%20you%20add,search%20it%20with%20natural%20language.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 벡터 DB 연동  
  “Vectorize is a globally distributed vector database that enables you to build full-stack, AI-powered applications with Cloudflare Workers” · [페이지에서 보기](https://developers.cloudflare.com/vectorize/#:~:text=Vectorize%20is%20a%20globally%20distributed,AI%2Dpowered%20applications%20with%20Cloudflare%20Workers)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 배포·인프라·CI/CD
- [ ] 한 줄 설명: Cloudflare 전 세계 네트워크 위에서 서버 없이 앱을 돌리는 개발자 플랫폼이에요. DB·파일 저장소와 AI 모델 실행, 벡터 DB까지 한곳에서 붙여요
- [ ] 시작 3단계: 1) Cloudflare 계정 만들기 (무료 플랜으로 시작) 2) 터미널에서 Wrangler(공식 CLI)로 새 Worker 프로젝트 만들고 배포하기 3) 필요하면 D1(DB), R2(파일 저장소), Workers AI를 바인딩으로 연결하기
- [ ] 주의할 점: 무료 플랜은 하루 사용 한도를 넘으면 요청이 실패해요 / 유료 플랜은 계정당 월 최소 5달러에 사용량만큼 더 붙어요 / 제품마다 요금과 한도가 따로라 쓰는 제품의 요금 문서를 각각 확인하세요

**5. Claude 메모**

- 이름·범위: Cloudflare 전체가 아니라 개발자 플랫폼(Workers와 함께 쓰는 D1·R2·Workers AI·Vectorize·AI Search)으로 잡고 이름을 'Cloudflare Workers'로 했어요. 이름과 url(Workers 문서)을 정해 주세요. official_domains는 cloudflare.com 하나(www, developers 하위 도메인 포함)예요.
- 가격 페이지: www.cloudflare.com/plans/developer-platform/ 은 글자로 읽으면 메뉴만 나오고 요금 카드가 없어요(스크립트로 그려지는 듯). 그래서 근거는 공식 문서(developers.cloudflare.com)의 Workers·Workers AI 요금 페이지예요.
- 유료 가격: Workers Paid는 '계정당 월 최소 5달러' + 사용량 과금이에요. 연 결제는 못 찾았어요.
- 무료 한도: Workers 요금 표의 Free 줄 'Requests 100,000 per day'(표 칸을 이어 읽은 것)와 Workers AI '10,000 Neurons per day'예요. D1·R2 등 다른 제품 무료 한도는 따로 있어요.
- 학습 정책: Workers AI 데이터 사용 문서에 'Customer Content를 AI 모델 학습에 쓰지 않는다'는 문장이 있어 trains=no로 했어요. 범위는 Workers AI에 한정돼요. 끌 수 있는 설정 얘기는 없어서 opt_out은 unknown이에요. 꼭 원문 대조해 주세요.
- 기능 체크리스트: devops 3개(AI 오류 분석 문장 없음), backend_database 2개(인증·자연어 쿼리 문장 없음), data_ml 3개(평가·실험 기록 없음). Agents SDK, Workflows, Cron Triggers 같은 자동화 기능도 문서에 있지만 이번에는 넣지 않았어요.
- 오픈소스 여부: 플랫폼 전체가 오픈소스라는 문장은 못 찾았어요(런타임 workerd 저장소는 공식 도메인이 아니라 확인 안 함). 오픈소스가 아니면 open_source=false로 채우고 todo에서 지워 주세요.
- AI 여부(partial), 섹션(official), 대표 목적(devops — data_ml도 후보)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote cloudflare --verified YYYY-MM-DD --dev
```

<a id="dev-google-ai-studio"></a>
### Google AI Studio (`google-ai-studio`) · 개발자용

공식 주소: https://aistudio.google.com/  
공식 도메인: `aistudio.google.com`, `ai.google.dev`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (13개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Google AI Studio usage is free of charge in all available regions” · [페이지에서 보기](https://ai.google.dev/gemini-api/docs/pricing#:~:text=Google%20AI%20Studio%20usage%20is,charge%20in%20all%20available%20regions)
- [ ] 무료 한도: 무료 등급 한도 안에서 일부 모델만 (모델마다 한도가 달라요)  
  “New accounts begin on the Free Tier, which allows access to certain models in the Gemini API and AI Studio, up to the models' free tier rate limits” · [페이지에서 보기](https://ai.google.dev/gemini-api/docs/billing#:~:text=New%20accounts%20begin%20on%20the,models%27%20free%20tier%20rate%20limits)
- [ ] 무료 한도: 무료 등급 한도 안에서 일부 모델만 (모델마다 한도가 달라요)  
  “Gemini 4 Argon is not available on the Free plan.” · [페이지에서 보기](https://ai.google.dev/gemini-api/docs/google-ai-plans#:~:text=Gemini%204%20Argon%20is%20not%20available%20on%20the%20Free%20plan.)
- [ ] 기본으로 학습에 씀: 예  
  “When you use Unpaid Services, including, for example, Google AI Studio and the unpaid quota on Gemini API, Google uses the content you submit to the Services and any generated responses to provide, improve, and develop Google products and services and machine learning technologies” · [페이지에서 보기](https://ai.google.dev/gemini-api/terms#:~:text=When%20you%20use%20Unpaid%20Services%2C,services%20and%20machine%20learning%20technologies)
- [ ] 학습 메모: 무료로 쓰면 입력과 답변이 구글 제품·모델 개선에 쓰이고 사람이 검토할 수도 있어요. 결제 계정이 연결된 클라우드 프로젝트로 쓰면 개선에 쓰지 않아요 (유럽·스위스·영국은 무료여도 쓰지 않음)  
  “To help with quality and improve our products, human reviewers may read, annotate, and process your API input and output.” · [페이지에서 보기](https://ai.google.dev/gemini-api/terms#:~:text=To%20help%20with%20quality%20and,your%20API%20input%20and%20output.)
- [ ] 학습 메모: 무료로 쓰면 입력과 답변이 구글 제품·모델 개선에 쓰이고 사람이 검토할 수도 있어요. 결제 계정이 연결된 클라우드 프로젝트로 쓰면 개선에 쓰지 않아요 (유럽·스위스·영국은 무료여도 쓰지 않음)  
  “Your access to Google AI Studio is a "Paid Service" even when it is offered free of charge, as long as the account you are using to access Google AI Studio has access to a Cloud Project with an associated and active” · [페이지에서 보기](https://ai.google.dev/gemini-api/terms#:~:text=Your%20access%20to%20Google%20AI,with%20an%20associated%20and%20active)
- [ ] 학습 메모: 무료로 쓰면 입력과 답변이 구글 제품·모델 개선에 쓰이고 사람이 검토할 수도 있어요. 결제 계정이 연결된 클라우드 프로젝트로 쓰면 개선에 쓰지 않아요 (유럽·스위스·영국은 무료여도 쓰지 않음)  
  “When you use Paid Services, including, for example, the paid quota of the Gemini API, Google doesn't use your prompts (including associated system instructions, cached content, and files such as images, videos, or documents) or responses to improve our products” · [페이지에서 보기](https://ai.google.dev/gemini-api/terms#:~:text=When%20you%20use%20Paid%20Services%2C,responses%20to%20improve%20our%20products)
- [ ] 쓰는 형태: 웹  
  “Google AI plan benefits for developer usage apply only within the Google AI Studio web interface.” · [페이지에서 보기](https://ai.google.dev/gemini-api/docs/google-ai-plans#:~:text=Google%20AI%20plan%20benefits%20for,Google%20AI%20Studio%20web%20interface.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 문장으로 앱 생성  
  “Google AI Studio supports building web apps with full-stack runtimes and native Android apps with Kotlin and Jetpack Compose — all through natural language prompting.” · [페이지에서 보기](https://ai.google.dev/gemini-api/docs/aistudio-build-mode#:~:text=Google%20AI%20Studio%20supports%20building,all%20through%20natural%20language%20prompting.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 백엔드·DB·인증 포함  
  “Google AI Studio now makes it easy to add a database or authentication to your app through a Firebase integration” · [페이지에서 보기](https://ai.google.dev/gemini-api/docs/aistudio-fullstack#:~:text=Google%20AI%20Studio%20now%20makes,app%20through%20a%20Firebase%20integration)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 바로 배포  
  “Google AI Studio lets you to deploy your full-stack applications directly from Build mode.” · [페이지에서 보기](https://ai.google.dev/gemini-api/docs/aistudio-deploying#:~:text=Google%20AI%20Studio%20lets%20you,applications%20directly%20from%20Build%20mode.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 코드 내보내기·GitHub 연동  
  “Connect your app to a GitHub repository to enable two-way sync.” · [페이지에서 보기](https://ai.google.dev/gemini-api/docs/aistudio-build-mode#:~:text=Connect%20your%20app%20to%20a,repository%20to%20enable%20two%2Dway%20sync.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 모델 실행 (클라우드 또는 로컬)  
  “Google AI Studio lets you quickly try out models and experiment with different prompts.” · [페이지에서 보기](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart#:~:text=Google%20AI%20Studio%20lets%20you,and%20experiment%20with%20different%20prompts.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `price.paid_from_usd`
- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 말로 설명해서 앱 통째로 만들기
- [ ] 한 줄 설명: Gemini 모델을 브라우저에서 바로 시험해 보고, 문장으로 설명해서 풀스택 웹앱·안드로이드 앱까지 만들어 볼 수 있는 구글의 개발자용 작업 공간이에요
- [ ] 시작 3단계: 1) 구글 계정으로 AI Studio에 로그인하기 2) Playground에서 모델을 골라 프롬프트를 시험하거나, Build 모드에서 만들고 싶은 앱을 문장으로 적기 3) 마음에 들면 'Get code'로 API 코드를 받거나, 만든 앱을 GitHub에 연결하거나 Cloud Run에 배포하기
- [ ] 주의할 점: 무료로 쓸 때는 입력 내용이 학습과 사람 검토에 쓰일 수 있으니 회사 기밀이나 개인정보를 넣지 마세요 / 배포(Cloud Run)나 유료 모델·API를 쓰면 구글 클라우드 요금이 따로 나올 수 있어요

**5. Claude 메모**

- aistudio.google.com 첫 화면은 스크립트로 그려져서 글자가 거의 안 읽혔어요(17바이트). 그래서 근거는 모두 ai.google.dev 문서에서 가져왔어요. url은 실제 서비스 주소(aistudio.google.com)로 두었어요.
- 무료 여부: 가격 페이지에 'Google AI Studio usage is free of charge in all available regions' 문장이 있어 free=true예요. 무료 한도는 '무료 등급의 모델별 한도'라서 숫자 하나로 적을 수 없어요. Gemini 4 Argon은 무료로 못 써요.
- 유료 가격: AI Studio 안에서 더 많이 쓰려면 Google AI Pro·Ultra 구독을 쓰는데, 이 구독 가격은 허용된 공식 페이지(ai.google.dev 등)에 숫자로 안 나와요. 그래서 paid_from_usd=null, todo에 넣었어요. 별도로 Gemini API는 쓴 만큼 내는 방식(최소 5달러 선결제, 모델마다 100만 토큰당 가격)이에요. AI Studio 자체 사용료가 아니라서 paid_from_usd에 넣지 않았어요. J가 'Pro 구독 가격'과 'API 종량제' 중 어떤 것을 기준으로 할지 정해 주세요. billing도 그에 맞춰 바꿔 주세요(지금 unknown).
- 학습 정책: 약관에 무료(Unpaid Services) 사용은 입력·답변을 제품과 머신러닝 기술 개선에 쓴다고 명확히 적혀 있어 trains_on_input_default=yes예요. 끄는 설정 문장은 없고, 결제 계정이 연결된 클라우드 프로젝트에 접근하는 계정이면 무료여도 'Paid Service'로 보고 개선에 안 써요. 이게 '거부 가능(opt_out)'인지는 해석이라 unknown으로 두었어요. J가 정해 주세요. 유럽·스위스·영국은 무료여도 Paid Service 규칙이 적용돼요.
- 오픈소스 여부: 공식 문서에서 오픈소스라는 문장을 못 찾았어요. 회사 웹 서비스라 아마 false일 텐데 근거가 없어 null + todo예요.
- 기능 체크리스트: app_builders 4개(Build 모드), data_ml은 run_models 1개(Playground). Build 모드 문서에 'Multi-file management', Firebase Firestore·Authentication 자동 설정도 있지만, coding_agents·backend_database 목적까지 넣으면 이 툴이 과하게 여러 목적에 나올 것 같아 넣지 않았어요. 넣을지 J가 정해 주세요.
- AI 여부(yes), 섹션(official), 대표 목적(app_builders)은 제안값이에요. 모델 시험이 핵심 용도라고 보면 data_ml도 후보예요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote google-ai-studio --verified YYYY-MM-DD --dev
```

<a id="dev-antigravity"></a>
### Google Antigravity (`antigravity`) · 개발자용

공식 주소: https://antigravity.google/  
공식 도메인: `antigravity.google`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (18개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “$0/month Experience Antigravity without a subscription plan” · [페이지에서 보기](https://antigravity.google/pricing#:~:text=%240%2Fmonth%20Experience%20Antigravity%20without%20a%20subscription%20plan)
- [ ] 무료 사용: 돼요  
  “Available at no charge” · [페이지에서 보기](https://antigravity.google/#:~:text=Available%20at%20no%20charge)
- [ ] 무료 한도: 매주 다시 채워지는 기본 사용량 (주간 한도 있음)  
  “Users not on Google AI Pro or Ultra plans receive the following benefits: A meaningful quota, refreshed weekly A weekly rate limit” · [페이지에서 보기](https://antigravity.google/docs/plans#:~:text=Users%20not%20on%20Google%20AI,weekly%20A%20weekly%20rate%20limit)
- [ ] 기본으로 학습에 씀: 예  
  “We use Interactions to evaluate, develop, and improve Google and Alphabet research, products, services and machine learning technologies.” · [페이지에서 보기](https://antigravity.google/terms#:~:text=We%20use%20Interactions%20to%20evaluate%2C,services%20and%20machine%20learning%20technologies.)
- [ ] 학습 끄기 가능: 예  
  “If you don’t want your Interactions used in this way, navigate to settings to change your preference on how such data is used.” · [페이지에서 보기](https://antigravity.google/terms#:~:text=If%20you%20don%E2%80%99t%20want%20your,how%20such%20data%20is%20used.)
- [ ] 학습 메모: 개인 계정은 사용 기록(Interactions)이 구글 제품·머신러닝 개선에 쓰이고 직원이 볼 수 있어요. 설정에서 바꿀 수 있어요. 팀(Gemini Enterprise)은 Google Cloud 약관을 따라요  
  “Google employees and contractors may access, view, review and use Interactions.” · [페이지에서 보기](https://antigravity.google/terms#:~:text=Google%20employees%20and%20contractors%20may,view%2C%20review%20and%20use%20Interactions.)
- [ ] 학습 메모: 개인 계정은 사용 기록(Interactions)이 구글 제품·머신러닝 개선에 쓰이고 직원이 볼 수 있어요. 설정에서 바꿀 수 있어요. 팀(Gemini Enterprise)은 Google Cloud 약관을 따라요  
  “Google Antigravity is available to individual accounts under terms derived from Google’s Terms of Service, and to teams under Google Cloud terms in Gemini Enterprise.” · [페이지에서 보기](https://antigravity.google/docs/plans#:~:text=Google%20Antigravity%20is%20available%20to,Cloud%20terms%20in%20Gemini%20Enterprise.)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, IDE 확장, 라이브러리  
  “Available on macOS, Windows, Linux, and Googlebook” · [페이지에서 보기](https://antigravity.google/#:~:text=Available%20on%20macOS%2C%20Windows%2C%20Linux%2C%20and%20Googlebook)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, IDE 확장, 라이브러리  
  “The lightweight, fast, terminal-first surface to work with Antigravity agents.” · [페이지에서 보기](https://antigravity.google/#:~:text=The%20lightweight%2C%20fast%2C%20terminal%2Dfirst%20surface%20to%20work%20with%20Antigravity%20agents.)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, IDE 확장, 라이브러리  
  “Editor extensions that embed agentic capabilities, inline completions, and side-panel interactions directly in your IDE.” · [페이지에서 보기](https://antigravity.google/docs/overview#:~:text=Editor%20extensions%20that%20embed%20agentic,interactions%20directly%20in%20your%20IDE.)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, IDE 확장, 라이브러리  
  “A programmatic Python SDK for building, customizing, and deploying autonomous AI agents and harnesses in your own applications and CI/CD pipelines.” · [페이지에서 보기](https://antigravity.google/docs/overview#:~:text=A%20programmatic%20Python%20SDK%20for,own%20applications%20and%20CI%2FCD%20pipelines.)
- [ ] ✓ AI와 같이 코드 짜기 — 저장소 전체 읽고 이해  
  “The fully-featured, agentic IDE. Complete with the agent manager, artifacts, and a deep understanding of your codebase.” · [페이지에서 보기](https://antigravity.google/product#:~:text=The%20fully%2Dfeatured%2C%20agentic%20IDE.%20Complete,deep%20understanding%20of%20your%20codebase.)
- [ ] ✓ AI와 같이 코드 짜기 — 여러 파일 한 번에 수정  
  “Agentic workflows, tool executions, and multi-file code editing for Visual Studio 2026.” · [페이지에서 보기](https://antigravity.google/download#:~:text=Agentic%20workflows%2C%20tool%20executions%2C%20and,editing%20for%20Visual%20Studio%202026.)
- [ ] ✓ AI와 같이 코드 짜기 — 명령·테스트 실행  
  “Run autonomous coding agents, execute shell commands directly, and manage background subagents all from your keyboard.” · [페이지에서 보기](https://antigravity.google/product#:~:text=Run%20autonomous%20coding%20agents%2C%20execute,subagents%20all%20from%20your%20keyboard.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 테스트 코드 생성  
  “Build deterministic mocks, record-and-replay harnesses, and unit tests verified against your local test runner.” · [페이지에서 보기](https://antigravity.google/use-cases/automated-testing#:~:text=Build%20deterministic%20mocks%2C%20record%2Dand%2Dreplay%20harnesses%2C,against%20your%20local%20test%20runner.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 수정 제안 바로 적용  
  “Ingest reviewer feedback across a PR, apply targeted fixes, run unit tests, and push updated commits in a single turn.” · [페이지에서 보기](https://antigravity.google/use-cases/daily-operations#:~:text=Ingest%20reviewer%20feedback%20across%20a,commits%20in%20a%20single%20turn.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “Set a one-time timer or a recurring cron schedule that wakes the agent with an instruction, without blocking the conversation while it waits.” · [페이지에서 보기](https://antigravity.google/docs/commands/schedule#:~:text=Set%20a%20one%2Dtime%20timer%20or,the%20conversation%20while%20it%20waits.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “In this guide, you’ll learn how to connect and configure MCP servers across Antigravity products.” · [페이지에서 보기](https://antigravity.google/docs/mcp#:~:text=In%20this%20guide%2C%20you%E2%80%99ll%20learn,MCP%20servers%20across%20Antigravity%20products.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `price.paid_from_usd`
- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: AI와 같이 코드 짜기
- [ ] 한 줄 설명: 구글이 만든 에이전트 중심 개발 도구예요. 데스크톱 앱·전용 IDE·터미널·에디터 확장에서 여러 AI 에이전트에게 코드 작업을 맡기고 결과를 검토해요
- [ ] 시작 3단계: 1) 공식 사이트에서 내 운영체제용 앱을 받거나, 터미널용 CLI를 설치하기 (VS Code 등은 확장 설치) 2) 구글 계정으로 로그인하고 작업할 프로젝트 폴더를 열기 3) 에이전트에게 할 일을 문장으로 맡기고, 계획·변경 내용(diff)을 확인한 뒤 승인하기
- [ ] 주의할 점: 기본 설정에서는 사용 기록이 구글 서비스 개선에 쓰일 수 있으니 회사 코드라면 설정을 먼저 확인하세요 / 에이전트가 터미널 명령을 실행하고 파일을 고칠 수 있으니 권한 설정과 바뀐 내용을 확인하세요 / 무료는 주간 한도가 있고, 더 쓰려면 Google AI Pro·Ultra 구독이 필요해요

**5. Claude 메모**

- 페이지는 gzip 압축으로 와서 curl에 --compressed를 붙여 받았어요. 글자는 정상으로 읽혔어요.
- 무료 여부: 가격 페이지의 개인 요금 '$0/month'와 첫 화면 'Available at no charge'로 free=true예요. 무료 한도는 숫자가 없고 '매주 채워지는 기본 사용량 + 주간 한도'라고만 나와요.
- 유료 가격: 다음 단계는 Google AI Pro·Ultra 구독인데 가격 페이지에 가격 숫자가 없어요('Get Pro' 버튼만 있음). 그래서 paid_from_usd=null, todo예요. 팀용 Gemini Enterprise Standard/Plus는 '좌석당 월 30달러부터'라고 적혀 있지만 개인 최저 유료 플랜이 아니라 넣지 않았어요. 그 밖에 API 종량제(쓴 만큼)와 AI 크레딧 추가 구매도 있어요.
- 학습 정책: 개인 약관에 '사용 기록(Interactions)을 구글·알파벳 연구, 제품, 머신러닝 기술 개선에 쓴다'와 '원하지 않으면 설정에서 바꾸라'는 문장이 있어 trains_on_input_default=yes, opt_out=yes로 했어요. Interactions에 코드·프롬프트가 들어가는지는 'user data, interaction data'라고만 적혀 있어요. 꼭 원문을 확인해 주세요. Gemini Enterprise·Google Cloud로 쓰는 팀은 이 약관이 적용되지 않아요.
- 오픈소스 여부: 약관은 내려받아 쓰는 서비스 약관(Google Antigravity Additional Terms)만 있고 오픈소스라는 문장은 없어요. 아마 false일 텐데 근거가 약해서 null + todo예요.
- 쓰는 형태: 데스크톱 앱(macOS·Windows·Linux), 전용 IDE(데스크톱으로 묶음), CLI, IDE 확장(VS Code·Visual Studio·JetBrains·Zed·Xcode), Python SDK(library). 브라우저 원격 조종(Remote Control)은 내 컴퓨터 세션을 조종하는 기능이라 web으로 넣지 않았어요.
- 기능 체크리스트: coding_agents 3개(PR 올리기는 공식 문장을 못 찾음, '커밋 푸시'까지만 나옴). code_review는 tests와 apply_fix(리뷰 의견 받아 수정 적용, 활용 사례 페이지 문장). 같은 페이지에 '팀 규칙으로 리뷰 전 검사(pre-review checks)'가 있지만 PR에 자동 리뷰 코멘트를 다는 기능이라는 문장은 아니라서 pr_review는 넣지 않았어요. automation은 일정 실행(/schedule)과 MCP 연결 2개.
- 블로그 글(antigravity.google/blog)은 공식 도메인이지만 블로그라 근거로 쓰지 않았어요. 다운로드 페이지에 설치 스크립트 명령이 있지만 받거나 실행하지 않았어요.
- AI 여부(yes), 섹션(official), 대표 목적(coding_agents)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote antigravity --verified YYYY-MM-DD --dev
```

<a id="dev-linear"></a>
### Linear (`linear`) · 개발자용

공식 주소: https://linear.app/ai  
공식 도메인: `linear.app`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (16개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free $0 Free for everyone” · [페이지에서 보기](https://linear.app/pricing#:~:text=Free%20%240%20Free%20for%20everyone)
- [ ] 무료 한도: 팀 2개, 이슈 250개까지 (코드 작업은 유료)  
  “Unlimited members 2 teams 250 issues” · [페이지에서 보기](https://linear.app/pricing#:~:text=Unlimited%20members%202%20teams%20250%20issues)
- [ ] 무료 한도: 팀 2개, 이슈 250개까지 (코드 작업은 유료)  
  “Coding sessions are supported on paid plans. Usage draws from your workspace’s AI credits.” · [페이지에서 보기](https://linear.app/docs/coding-sessions#:~:text=Coding%20sessions%20are%20supported%20on,from%20your%20workspace%E2%80%99s%20AI%20credits.)
- [ ] 유료 가격: 연 10달러부터  
  “Basic $10 per user/month” · [페이지에서 보기](https://linear.app/pricing#:~:text=Basic%20%2410%20per%20user%2Fmonth)
- [ ] 결제 주기: yearly  
  “$10 per user/month Billed yearly” · [페이지에서 보기](https://linear.app/pricing#:~:text=%2410%20per%20user%2Fmonth%20Billed%20yearly)
- [ ] 학습 메모: AI 기능의 학습 정책은 공식 페이지에서 찾지 못했어요. 코드 작업(Coding sessions)은 기본으로 데이터를 보관하지 않는 모델을 쓴다고 해요  
  “By default, coding sessions use the latest zero-data-retention models.” · [페이지에서 보기](https://linear.app/docs/ai-credits#:~:text=By%20default%2C%20coding%20sessions%20use%20the%20latest%20zero%2Ddata%2Dretention%20models.)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “Available for web, macOS, Windows, iOS, and Android.” · [페이지에서 보기](https://linear.app/download#:~:text=Available%20for%20web%2C%20macOS%2C%20Windows%2C%20iOS%2C%20and%20Android.)
- [ ] ✓ 기획하고 같이 일하기 — 이슈·작업 관리  
  “Issues, projects, cycles, initiatives” · [페이지에서 보기](https://linear.app/pricing#:~:text=Issues%2C%20projects%2C%20cycles%2C%20initiatives)
- [ ] ✓ 기획하고 같이 일하기 — PRD 등 문서 초안 생성  
  “Draft a new document on this project that comprehensively outlines the feature.” · [페이지에서 보기](https://linear.app/docs/linear-agent#:~:text=Draft%20a%20new%20document%20on,that%20comprehensively%20outlines%20the%20feature.)
- [ ] ✓ AI와 같이 코드 짜기 — 저장소 전체 읽고 이해  
  “Linear Agent reads your codebase, writes code with frontier models, and streams its work back as reviewable diffs, all visible across the org.” · [페이지에서 보기](https://linear.app/ai#:~:text=Linear%20Agent%20reads%20your%20codebase%2C,all%20visible%20across%20the%20org.)
- [ ] ✓ AI와 같이 코드 짜기 — 명령·테스트 실행  
  “Delegate a well-scoped issue to Linear, and the agent writes and tests the change in a secure cloud environment, then returns a draft pull request for review.” · [페이지에서 보기](https://linear.app/docs/coding-sessions#:~:text=Delegate%20a%20well%2Dscoped%20issue%20to,draft%20pull%20request%20for%20review.)
- [ ] ✓ AI와 같이 코드 짜기 — 결과를 PR로 올리기  
  “Delegate a well-scoped issue to Linear, and the agent writes and tests the change in a secure cloud environment, then returns a draft pull request for review.” · [페이지에서 보기](https://linear.app/docs/coding-sessions#:~:text=Delegate%20a%20well%2Dscoped%20issue%20to,draft%20pull%20request%20for%20review.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 테스트 코드 생성  
  “Address review comments, rebase branches, fix lint issues, or add tests” · [페이지에서 보기](https://linear.app/docs/coding-sessions#:~:text=Address%20review%20comments%2C%20rebase%20branches%2C,lint%20issues%2C%20or%20add%20tests)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 수정 제안 바로 적용  
  “You can also delegate code review actions to the Linear Agent directly to address any left review comments from other teammates” · [페이지에서 보기](https://linear.app/docs/coding-sessions#:~:text=You%20can%20also%20delegate%20code,review%20comments%20from%20other%20teammates)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “Loops run Linear Agent workflows in the background on a schedule or in response to supported Linear, Slack, and GitHub events.” · [페이지에서 보기](https://linear.app/docs/linear-agent#:~:text=Loops%20run%20Linear%20Agent%20workflows,Linear%2C%20Slack%2C%20and%20GitHub%20events.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “Linear Agent can connect to MCP servers to access tools and data outside of Linear.” · [페이지에서 보기](https://linear.app/docs/linear-agent#:~:text=Linear%20Agent%20can%20connect%20to,and%20data%20outside%20of%20Linear.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `privacy.trains_on_input_default`
- [ ] `privacy.opt_out`
- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 기획하고 같이 일하기
- [ ] 한 줄 설명: 이슈·프로젝트를 관리하는 협업 도구예요. 안에 든 AI 에이전트가 진행 상황을 정리하고, 이슈를 맡기면 코드를 고쳐 PR 초안까지 만들어 줘요
- [ ] 시작 3단계: 1) Linear에 가입해서 워크스페이스와 팀 만들기 2) 이슈를 만들고 ⌘/Ctrl + J로 Linear Agent 채팅을 열어 요약·문서 초안을 부탁하기 3) 코드까지 맡기려면 유료 요금제에서 GitHub를 연결하고 AI 크레딧을 충전한 뒤 이슈를 Linear에 맡기기
- [ ] 주의할 점: AI가 코드를 고쳐 주는 기능(Coding sessions)은 유료 요금제에서만 되고, 쓴 만큼 AI 크레딧이 따로 빠져나가요 / 무료는 이슈 250개까지라 팀이 커지면 금방 차요 / Linear 자체는 이슈 관리 도구이고 AI는 그 안의 기능이에요

**5. Claude 메모**

- 유료 가격: 가격 페이지에는 Basic '$10 per user/month, Billed yearly'만 보여요. 월 결제 가격 전환 버튼은 스크립트라 월 결제 숫자를 못 읽었어요. 그래서 paid_from_usd=10, billing=yearly로 두었어요. 월 결제 기준이 필요하면 J가 확인해서 바꿔 주세요. 이 값은 사용자 한 명당 가격이에요.
- AI 크레딧: Coding sessions와 Loops는 요금제와 별도로 AI 크레딧(선불, 최소 충전 10달러)에서 빠져나가요. 다른 AI 기능은 요금제에 포함돼요. 가격표의 Free 칸에도 'Linear Agent', 'Agent platform'이 있어요.
- 학습 정책: 개인정보 처리방침, 데이터 처리 부록(DPA), 보안 페이지, AI 문서에서 '고객 데이터로 AI를 학습한다/안 한다'는 문장을 못 찾았어요. 그래서 둘 다 unknown + todo예요. docs/ai-security 같은 주소는 Not found였어요. 코드 작업은 기본으로 'zero-data-retention' 모델을 쓴다는 문장만 있어요.
- 오픈소스 여부: 공식 페이지에 오픈소스라는 문장이 없어요. 회사 서비스라 아마 false인데 근거가 없어 null + todo예요.
- 쓰는 형태: 웹과 데스크톱(macOS·Windows) 앱. 모바일(iOS·Android) 앱도 있지만 forms 목록에 모바일이 없어 뺐어요.
- 기능 체크리스트: planning 2개(이슈 관리, 문서 초안: 문서의 예시 프롬프트 'Draft a new document...'를 근거로 함. PRD라는 말은 없음). coding_agents 3개(여러 파일 수정 문장은 못 찾음). run_commands와 open_pr는 같은 문장('writes and tests the change ... returns a draft pull request')을 근거로 했어요. 코드는 Linear가 직접 짜는 게 아니라 Claude Code나 Codex를 써서 Linear Agent가 돌려요. code_review 2개(테스트 추가, 리뷰 의견 반영). PR 자동 리뷰 코멘트 문장은 없어요('Guided reviews'는 사람이 diff를 보기 쉽게 정리해 주는 기능). automation 2개(Loops 일정·이벤트 실행, MCP 서버 연결).
- AI 여부(partial: AI는 이슈 관리 도구의 일부), 섹션(official), 대표 목적(planning)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote linear --verified YYYY-MM-DD --dev
```

<a id="dev-bolt"></a>
### Bolt (`bolt`) · 개발자용

공식 주소: https://bolt.new  
공식 도메인: `bolt.new`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (16개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free $0 /month Free forever, no card required” · [페이지에서 보기](https://bolt.new/pricing#:~:text=Free%20%240%20%2Fmonth%20Free%20forever%2C%20no%20card%20required)
- [ ] 무료 한도: 한 달 토큰 100만 개 (하루 30만 개까지)  
  “1M tokens/month to try Bolt” · [페이지에서 보기](https://bolt.new/pricing#:~:text=1M%20tokens%2Fmonth%20to%20try%20Bolt)
- [ ] 무료 한도: 한 달 토큰 100만 개 (하루 30만 개까지)  
  “Daily Token Limit 300K No Limit No Limit No Limit” · [페이지에서 보기](https://bolt.new/pricing#:~:text=Daily%20Token%20Limit%20300K%20No%20Limit%20No%20Limit%20No%20Limit)
- [ ] 유료 가격: 연 18달러부터  
  “Pro $18 \* /month Total of $216 $300 / year Billed annually” · [페이지에서 보기](https://bolt.new/pricing#:~:text=Pro%20%2418%20%2A%20%2Fmonth%20Total,%24300%20%2F%20year%20Billed%20annually)
- [ ] 학습 메모: MSA·DPA 계약을 맺은 Teams·Enterprise 고객은 학습과 데이터 공유에서 빠진다고 해요. 개인 요금제 정책은 개인정보처리방침(stackblitz.com)에서 확인해야 해요  
  “Enterprise and Team customers under an MSA or DPA are excluded from model training and data sharing.” · [페이지에서 보기](https://bolt.new/platform/security#:~:text=Enterprise%20and%20Team%20customers%20under,model%20training%20and%20data%20sharing.)
- [ ] 쓰는 형태: 웹  
  “No setup. No installs. Just open Bolt.new and start.” · [페이지에서 보기](https://bolt.new/use-cases/ai-app-builder#:~:text=No%20setup.%20No%20installs.%20Just%20open%20Bolt.new%20and%20start.)
- [ ] 쓰는 형태: 웹  
  “All generated code lives in a full browser-based IDE.” · [페이지에서 보기](https://bolt.new/use-cases/ai-app-builder#:~:text=All%20generated%20code%20lives%20in%20a%20full%20browser%2Dbased%20IDE.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 문장으로 앱 생성  
  “Describe your app in plain language and let Bolt do the rest. Create a ready-to-publish app in under two minutes.” · [페이지에서 보기](https://bolt.new/use-cases/ai-app-builder#:~:text=Describe%20your%20app%20in%20plain,app%20in%20under%20two%20minutes.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 백엔드·DB·인증 포함  
  “Need user auth, a database, or a third-party API? Bolt can generate the full back-end alongside your app in the same project.” · [페이지에서 보기](https://bolt.new/use-cases/ai-app-builder#:~:text=Need%20user%20auth%2C%20a%20database%2C,app%20in%20the%20same%20project.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 바로 배포  
  “Bolt publishes to a live URL automatically. Connect a custom domain in minutes, no server management, no DevOps required.” · [페이지에서 보기](https://bolt.new/use-cases/ai-app-builder#:~:text=Bolt%20publishes%20to%20a%20live,server%20management%2C%20no%20DevOps%20required.)
- [ ] ✓ 화면 디자인·시안 만들기 — 문장으로 화면 시안 생성  
  “Describe the interface, logic, and layout you want and the AI applies it or iterate from the code editor.” · [페이지에서 보기](https://bolt.new/use-cases/ai-app-builder#:~:text=Describe%20the%20interface%2C%20logic%2C%20and,iterate%20from%20the%20code%20editor.)
- [ ] ✓ 화면 디자인·시안 만들기 — 컴포넌트·디자인 시스템  
  “Import design systems from GitHub, private NPM registries, or Storybook” · [페이지에서 보기](https://bolt.new/enterprise#:~:text=Import%20design%20systems%20from%20GitHub%2C%20private%20NPM%20registries%2C%20or%20Storybook)
- [ ] ✓ 화면 디자인·시안 만들기 — 클릭되는 프로토타입  
  “Describe your prototype in plain language and let Bolt do the rest.” · [페이지에서 보기](https://bolt.new/use-cases/ai-prototyping-tools#:~:text=Describe%20your%20prototype%20in%20plain,let%20Bolt%20do%20the%20rest.)
- [ ] ✓ 화면 디자인·시안 만들기 — 클릭되는 프로토타입  
  “Build a clickable prototype for a mobile banking app with onboarding flow, dashboard, transaction history, and send money screen.” · [페이지에서 보기](https://bolt.new/use-cases/ai-prototyping-tools#:~:text=Build%20a%20clickable%20prototype%20for,history%2C%20and%20send%20money%20screen.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 보안 취약점 검사  
  “The Bolt.new security agent reads your project, writes the fixes, and applies them” · [페이지에서 보기](https://bolt.new/platform/security#:~:text=The%20Bolt.new%20security%20agent%20reads,the%20fixes%2C%20and%20applies%20them)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 수정 제안 바로 적용  
  “When an issue is found, one button analyzes it, applies the fix, and publishes the secured version, at no extra cost.” · [페이지에서 보기](https://bolt.new/platform/security#:~:text=When%20an%20issue%20is%20found%2C,version%2C%20at%20no%20extra%20cost.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 말로 설명해서 앱 통째로 만들기
- [ ] 한 줄 설명: 만들 앱을 채팅으로 설명하면 브라우저 안에서 코드를 짜고 DB·로그인·호스팅까지 붙여 바로 올려주는 앱 빌더예요
- [ ] 시작 3단계: 1) bolt.new에 들어가 무료로 가입하기 (카드 등록 없음) 2) 입력창에 만들 앱의 화면·기능을 문장으로 적고 Build now 누르기 3) 미리보기를 보며 추가 요청이나 코드 직접 수정으로 다듬은 뒤 배포 버튼으로 공개 주소 만들기
- [ ] 주의할 점: 토큰은 프로젝트 파일을 AI와 맞추는 데 주로 쓰여서 프로젝트가 커질수록 메시지당 소모가 커져요 / 무료로 배포한 사이트에는 Bolt 표시가 붙고 내 도메인을 연결할 수 없어요 / 학습 정책이 공식 사이트 안에서 확인되지 않아요. 민감한 코드는 개인정보처리방침을 먼저 보세요

**5. Claude 메모**

- 유료 가격: 가격 페이지 글자에는 연 결제 가격만 보여요 (Pro 월 18달러, 연 216달러, 원래 가격으로 연 300달러가 함께 표시). 월 결제 토글 가격은 스크립트로 바뀌어서 확인 못 했어요. 그래서 18달러 + billing "yearly"로 했어요. 연 300달러를 12로 나누면 월 25달러라 월 결제는 25달러일 가능성이 있지만 문장이 없어서 넣지 않았어요. 가격 옆 "*"는 "Plus applicable taxes"예요.
- 무료 한도: 비교 표에 무료는 월 토큰 1M, 하루 토큰 한도 300K로 나와요.
- 학습 정책: 보안 페이지의 '학습에 쓰나요?' 답은 "Privacy Policy에 설명돼 있다" + "MSA·DPA가 있는 Enterprise·Team 고객은 학습·데이터 공유에서 제외"뿐이에요. 개인정보처리방침이 stackblitz.com(운영사 StackBlitz 도메인)에 있어서 허용된 호스트가 아니라 읽지 않았어요. 그래서 trains_on_input_default·opt_out 모두 unknown이에요. stackblitz.com을 official_domains에 넣을지 J가 정해 주세요.
- 도움말 센터(support.bolt.new)는 이 환경의 프록시가 연결을 막아서(403) 못 읽었어요. 그래서 배울 거리(learn)를 비워 뒀고, 코드 내보내기·GitHub 연동(export_code)도 근거 문장을 못 찾아 넣지 않았어요. 홈 화면에 "or start from Figma GitHub" 버튼 글자만 있어요 (GitHub에서 시작하기 = 가져오기라서 내보내기 근거로는 쓰지 않음).
- design_ui.components 근거는 Enterprise 페이지의 디자인 시스템 가져오기 문장이에요. 가격표에서 "Design System Knowledge"는 Teams 이상에만 있어요.
- code_review.security·apply_fix는 보안 페이지의 '보안 에이전트가 프로젝트를 읽고 고치고 적용' 문장이에요. PR 리뷰 기능은 아니에요. 넣는 게 과하다고 보면 빼 주세요.
- 오픈소스 여부: 공식 페이지에 오픈소스라는 문장이 없어요. null + todo로 뒀어요.
- AI 여부(yes), 섹션(official), 대표 목적(app_builders)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote bolt --verified YYYY-MM-DD --dev
```

<a id="dev-replit"></a>
### Replit (`replit`) · 개발자용

공식 주소: https://replit.com  
공식 도메인: `replit.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (24개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Starter $0 For exploring what's possible with our new generative tools. Explore what's possible: Free daily usage” · [페이지에서 보기](https://replit.com#:~:text=Starter%20%240%20For%20exploring%20what%27s,what%27s%20possible%3A%20Free%20daily%20usage)
- [ ] 무료 사용: 돼요  
  “The Starter plan gives you everything you need to start building on Replit. Create apps and publish your first project — all at no cost.” · [페이지에서 보기](https://docs.replit.com/billing/plans/starter-plan#:~:text=The%20Starter%20plan%20gives%20you,%E2%80%94%20all%20at%20no%20cost.)
- [ ] 무료 한도: 에이전트 하루 무료 크레딧(월 상한 있음), 게시 앱 1개 (30일 뒤 내려감)  
  “Starter plan users receive daily credits for Agent usage, up to a monthly cap. These credits reset daily, giving you a fresh allowance to work with Agent each day.” · [페이지에서 보기](https://docs.replit.com/billing/plans/starter-plan#:~:text=Starter%20plan%20users%20receive%20daily,work%20with%20Agent%20each%20day.)
- [ ] 무료 한도: 에이전트 하루 무료 크레딧(월 상한 있음), 게시 앱 1개 (30일 뒤 내려감)  
  “This published link will automatically go down after 30 days.” · [페이지에서 보기](https://docs.replit.com/billing/plans/starter-plan#:~:text=This%20published%20link%20will%20automatically%20go%20down%20after%2030%20days.)
- [ ] 무료 한도: 에이전트 하루 무료 크레딧(월 상한 있음), 게시 앱 1개 (30일 뒤 내려감)  
  “Publish 1 live project” · [페이지에서 보기](https://replit.com#:~:text=Publish%201%20live%20project)
- [ ] 유료 가격: 월 20달러부터  
  “Core $20 $18 / month, billed annually” · [페이지에서 보기](https://replit.com/pricing#:~:text=Core%20%2420%20%2418%20%2F%20month%2C%20billed%20annually)
- [ ] 기본으로 학습에 씀: 예  
  “We use content you provide, including your prompts, instructions, context, and responses generated for you, to help develop and improve our models and AI features.” · [페이지에서 보기](https://docs.replit.com/legal-and-security-info/model-improvement#:~:text=We%20use%20content%20you%20provide%2C,our%20models%20and%20AI%20features.)
- [ ] 학습 끄기 가능: 예  
  “Pro users can opt out from their content being used to develop and improve our models.” · [페이지에서 보기](https://docs.replit.com/legal-and-security-info/model-improvement#:~:text=Pro%20users%20can%20opt%20out,develop%20and%20improve%20our%20models.)
- [ ] 학습 끄기 가능: 예  
  “This control is available to Pro users. For Enterprise users, Replit does not use customer content to train its models.” · [페이지에서 보기](https://docs.replit.com/legal-and-security-info/model-improvement#:~:text=This%20control%20is%20available%20to,content%20to%20train%20its%20models.)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “Choose where you want to use Replit, then sign in or create an account. Start on the web, in the Desktop App, or in the Mobile App.” · [페이지에서 보기](https://docs.replit.com#:~:text=Choose%20where%20you%20want%20to,or%20in%20the%20Mobile%20App.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 문장으로 앱 생성  
  “Describe and publish your project. Replit writes production-ready code, evolves it, and stays out of your way.” · [페이지에서 보기](https://replit.com#:~:text=Describe%20and%20publish%20your%20project.,stays%20out%20of%20your%20way.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 백엔드·DB·인증 포함  
  “Built-in services with zero setup- Authentication, Database, Hosting, and Monitoring, enabling you to build fully scalable apps easily and securely from day one.” · [페이지에서 보기](https://replit.com#:~:text=Built%2Din%20services%20with%20zero%20setup%2D,and%20securely%20from%20day%20one.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 바로 배포  
  “Publishing is a feature that saves a snapshot of your Replit App to the cloud, where everyone can interact with it.” · [페이지에서 보기](https://docs.replit.com/learn/projects-and-artifacts/replit-deployments#:~:text=Publishing%20is%20a%20feature%20that,everyone%20can%20interact%20with%20it.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 코드 내보내기·GitHub 연동  
  “When it looks right, Agent commits it to a branch, pushes it, and opens the pull request with the description filled in.” · [페이지에서 보기](https://docs.replit.com/use-cases/ship-github-change#:~:text=When%20it%20looks%20right%2C%20Agent,with%20the%20description%20filled%20in.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 데이터베이스  
  “Backed by a fully-managed PostgresSQL database that scales with your app.” · [페이지에서 보기](https://docs.replit.com/learn/projects-and-artifacts/storage-and-databases#:~:text=Backed%20by%20a%20fully%2Dmanaged%20PostgresSQL,that%20scales%20with%20your%20app.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 인증  
  “Replit ships two built-in auth options. Both are provisioned by Agent — no separate dashboard signup, no copy-pasting of OAuth keys.” · [페이지에서 보기](https://docs.replit.com/learn/projects-and-artifacts/auth#:~:text=Replit%20ships%20two%20built%2Din%20auth,no%20copy%2Dpasting%20of%20OAuth%20keys.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 파일 스토리지  
  “Ideal for unstructured data and large files, such as images, videos, and documents.” · [페이지에서 보기](https://docs.replit.com/learn/projects-and-artifacts/storage-and-databases#:~:text=Ideal%20for%20unstructured%20data%20and,as%20images%2C%20videos%2C%20and%20documents.)
- [ ] ✓ 화면 디자인·시안 만들기 — 문장으로 화면 시안 생성  
  “Replit Design is a design suite to generate design frames from prompts, explore the AI’s suggestions, and keep everything on brand with design systems.” · [페이지에서 보기](https://docs.replit.com/design/what-is-replit-design#:~:text=Replit%20Design%20is%20a%20design,on%20brand%20with%20design%20systems.)
- [ ] ✓ 화면 디자인·시안 만들기 — 컴포넌트·디자인 시스템  
  “Design system : start from a saved system so your first frame is already on brand.” · [페이지에서 보기](https://docs.replit.com/design/what-is-replit-design#:~:text=Design%20system%20%3A%20start%20from,frame%20is%20already%20on%20brand.)
- [ ] ✓ 화면 디자인·시안 만들기 — 클릭되는 프로토타입  
  “You describe what you want, and Replit Design generates interactive mockups you can explore and refine.” · [페이지에서 보기](https://docs.replit.com/design/what-is-replit-design#:~:text=You%20describe%20what%20you%20want%2C,you%20can%20explore%20and%20refine.)
- [ ] ✓ AI와 같이 코드 짜기 — 저장소 전체 읽고 이해  
  “It reads the repository, installs dependencies, and asks for anything it can’t infer, like a missing environment variable.” · [페이지에서 보기](https://docs.replit.com/use-cases/ship-github-change#:~:text=It%20reads%20the%20repository%2C%20installs,like%20a%20missing%20environment%20variable.)
- [ ] ✓ AI와 같이 코드 짜기 — 결과를 PR로 올리기  
  “When it looks right, Agent commits it to a branch, pushes it, and opens the pull request with the description filled in.” · [페이지에서 보기](https://docs.replit.com/use-cases/ship-github-change#:~:text=When%20it%20looks%20right%2C%20Agent,with%20the%20description%20filled%20in.)
- [ ] ✓ 배포·인프라·CI/CD — 로그·모니터링  
  “Access built-in logging & analytics” · [페이지에서 보기](https://docs.replit.com/billing/plans/replit-core#:~:text=Access%20built%2Din%20logging%20%26%20analytics)
- [ ] ✓ 배포·인프라·CI/CD — 로그·모니터링  
  “Publishing includes tools to monitor your published app status and view web analytics.” · [페이지에서 보기](https://docs.replit.com/learn/projects-and-artifacts/replit-deployments#:~:text=Publishing%20includes%20tools%20to%20monitor,status%20and%20view%20web%20analytics.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 말로 설명해서 앱 통째로 만들기
- [ ] 한 줄 설명: 채팅으로 원하는 앱을 말하면 에이전트가 코드를 짜고 DB·로그인·게시까지 클라우드 안에서 처리해주는 개발 플랫폼이에요
- [ ] 시작 3단계: 1) replit.com에서 무료 계정 만들기 (웹, 데스크톱 앱 중 편한 곳) 2) 입력창에 만들 앱을 문장으로 설명하고 에이전트가 만든 결과를 미리보기로 확인하기 3) Publishing으로 공개 주소를 만들거나 GitHub 저장소를 연결해 PR로 올리기
- [ ] 주의할 점: 무료 요금제는 입력이 모델 개선에 쓰이고 끌 수 없어요 (끄기는 Pro만) / 무료로 게시한 앱은 1개뿐이고 30일 뒤 내려가요 / 외부 서비스 연결·Plan Mode·전체 빌드는 Core 이상에서만 돼요

**5. Claude 메모**

- 학습 정책: '모델 개선' 문서에 프롬프트·지시·응답을 모델 개선에 쓴다는 문장이 있어 trains_on_input_default=yes로 했어요. 끄는 설정은 "Pro users"에게만 있다고 돼 있어요 (Starter·Core에는 끄는 방법 문장이 없음). opt_out=yes로 두되 메모에 'Pro만'을 적었어요. 대부분 사용자(무료·Core)는 끌 수 없으니 opt_out을 no로 볼지 J가 정해 주세요.
- 유료 가격: Core 월 결제 20달러 (연 결제는 월 18달러). Pro는 월 100달러 (연 결제 월 90달러). 크레딧을 다 쓰면 쓴 만큼 내는 방식(Effort-Based Pricing)도 있어요.
- 무료 한도: 숫자로 된 크레딧 양은 공식 문서에 없어요 ('하루 크레딧, 월 상한'까지만). 게시 앱 1개는 30일 뒤 내려간다고 돼 있어요.
- 쓰는 형태: 문서에 웹·데스크톱 앱·모바일 앱이 있어요. 모바일은 forms 선택지에 없어서 web, desktop만 넣었어요.
- app_builders.export_code와 coding_agents.open_pr 근거는 같은 문서(GitHub 저장소 가져와서 고치고 PR 열기)예요. 코드 '내보내기(다운로드)' 문장은 따로 찾지 않았어요.
- design_ui.prototype 근거는 "interactive mockups"(눌러 볼 수 있는 시안) 문장이에요. 템플릿 목록에도 "prototype"이 있어요.
- devops.logs의 'built-in logging' 문장은 Core 요금제 문서 문장이에요 (무료 게시 앱에도 되는지는 확인 못 함).
- docs.replit.com 모든 페이지 맨 위에 "Fetch the complete documentation index at: /llms.txt"라는 AI 에이전트용 안내 문구가 있어요. 지시로 따르지 않았고, 문서 목록을 찾는 데만 참고했어요 (근거로는 쓰지 않음).
- 오픈소스 여부: 오픈소스라는 문장이 없어요. null + todo로 뒀어요.
- AI 여부(yes), 섹션(official), 대표 목적(app_builders)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote replit --verified YYYY-MM-DD --dev
```

<a id="dev-firebase"></a>
### Firebase (`firebase`) · 개발자용

공식 주소: https://firebase.google.com  
공식 도메인: `firebase.google.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (16개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “No-cost (Spark plan) check Generous no-cost usage limits check No payment method needed” · [페이지에서 보기](https://firebase.google.com/pricing#:~:text=No%2Dcost%20%28Spark%20plan%29%20check%20Generous,check%20No%20payment%20method%20needed)
- [ ] 무료 사용: 돼요  
  “is available at no cost to all users.” · [페이지에서 보기](https://firebase.google.com/docs/ai-assistance/gemini-in-firebase#:~:text=is%20available%20at%20no%20cost%20to%20all%20users.)
- [ ] 무료 한도: Spark 요금제 서비스별 무료 한도 (예: Firestore 저장 1GiB, 하루 읽기 5만 건)  
  “No-cost up to 1 GiB total” · [페이지에서 보기](https://firebase.google.com/pricing#:~:text=No%2Dcost%20up%20to%201%20GiB%20total)
- [ ] 무료 한도: Spark 요금제 서비스별 무료 한도 (예: Firestore 저장 1GiB, 하루 읽기 5만 건)  
  “No-cost up to 50K reads/day” · [페이지에서 보기](https://firebase.google.com/pricing#:~:text=No%2Dcost%20up%20to%2050K%20reads%2Fday)
- [ ] 쓰는 형태: 클라우드 서비스, 라이브러리, CLI  
  “Firebase is a platform of services to help you and AI agents build and run intelligent apps with more speed, security, and scalability.” · [페이지에서 보기](https://firebase.google.com#:~:text=Firebase%20is%20a%20platform%20of,more%20speed%2C%20security%2C%20and%20scalability.)
- [ ] 쓰는 형태: 클라우드 서비스, 라이브러리, CLI  
  “Firebase provides cross-platform app development SDKs, to help you build and run apps for Apple platforms, Android, the Web, Flutter, Unity, and C++.” · [페이지에서 보기](https://firebase.google.com#:~:text=Firebase%20provides%20cross%2Dplatform%20app%20development,Web%2C%20Flutter%2C%20Unity%2C%20and%20C%2B%2B.)
- [ ] 쓰는 형태: 클라우드 서비스, 라이브러리, CLI  
  “In your local environment, you can use the Firebase CLI and SQL Connect VS Code extension to generate, test, and develop on your app with the emulator.” · [페이지에서 보기](https://firebase.google.com/docs/data-connect/ai-assistance#:~:text=In%20your%20local%20environment%2C%20you,your%20app%20with%20the%20emulator.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 데이터베이스  
  “is a flexible, scalable database for mobile, web, and server development from” · [페이지에서 보기](https://firebase.google.com/docs/firestore#:~:text=is%20a%20flexible%2C%20scalable%20database,web%2C%20and%20server%20development%20from)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 인증  
  “provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.” · [페이지에서 보기](https://firebase.google.com/docs/auth#:~:text=provides%20backend%20services%2C%20easy%2Dto%2Duse%20SDKs%2C,authenticate%20users%20to%20your%20app.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 파일 스토리지  
  “is a powerful, simple, and cost-effective object storage service built for Google scale.” · [페이지에서 보기](https://firebase.google.com/docs/storage#:~:text=is%20a%20powerful%2C%20simple%2C%20and,service%20built%20for%20Google%20scale.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 자연어로 쿼리·스키마 생성  
  “Describe your app, data model, or a desired query or mutation in natural language, and Gemini in Firebase generates the SQL Connect equivalent.” · [페이지에서 보기](https://firebase.google.com/docs/data-connect/ai-assistance#:~:text=Describe%20your%20app%2C%20data%20model%2C,generates%20the%20SQL%20Connect%20equivalent.)
- [ ] ✓ 배포·인프라·CI/CD — Git 푸시하면 자동 배포  
  “can automatically deploy every time you push to a specific branch.” · [페이지에서 보기](https://firebase.google.com/docs/app-hosting#:~:text=can%20automatically%20deploy%20every%20time,push%20to%20a%20specific%20branch.)
- [ ] ✓ 배포·인프라·CI/CD — 로그·모니터링  
  “Access logs and metrics, add a custom domain, and manually trigger rollouts from the” · [페이지에서 보기](https://firebase.google.com/docs/app-hosting#:~:text=Access%20logs%20and%20metrics%2C%20add,manually%20trigger%20rollouts%20from%20the)
- [ ] ✓ 배포·인프라·CI/CD — AI로 오류 원인 분석  
  “AI assistance provides actionable insights into your app's crashes, including a full description of the issue, information about possible root causes, and suggestions on how you can fix the issue.” · [페이지에서 보기](https://firebase.google.com/docs/ai-assistance/gemini-in-firebase#:~:text=AI%20assistance%20provides%20actionable%20insights,you%20can%20fix%20the%20issue.)
- [ ] ✓ 배포·인프라·CI/CD — AI로 오류 원인 분석  
  “can decipher error messages and provide clear explanations and mitigations. It can also analyze logs, suggesting steps to resolve problems quickly.” · [페이지에서 보기](https://firebase.google.com/docs/ai-assistance/gemini-in-firebase#:~:text=can%20decipher%20error%20messages%20and,steps%20to%20resolve%20problems%20quickly.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 모델 실행 (클라우드 또는 로컬)  
  “gives you access to the latest generative AI models from Google: the Gemini models.” · [페이지에서 보기](https://firebase.google.com/docs/ai-logic#:~:text=gives%20you%20access%20to%20the,from%20Google%3A%20the%20Gemini%20models.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 백엔드·데이터베이스 붙이기
- [ ] 한 줄 설명: DB·인증·파일 저장·호스팅을 한곳에서 붙이는 Google의 앱 백엔드 플랫폼이에요. Gemini로 쿼리 생성이나 크래시 원인 분석도 도와줘요
- [ ] 시작 3단계: 1) Firebase 콘솔에서 Google 계정으로 새 프로젝트 만들기 2) 쓸 서비스(Firestore, Authentication, Storage 등)를 켜고 내 앱에 SDK 추가하기 3) 필요하면 Gemini in Firebase를 켜서 쿼리 생성·오류 분석 도움 받기
- [ ] 주의할 점: 무료(Spark) 한도를 넘기려면 결제 계정을 연결한 Blaze(쓴 만큼 결제)로 바꿔야 하고, 그 뒤엔 사용량만큼 요금이 나와요 / AI 기능은 플랫폼의 일부예요. 앱을 통째로 만들어주는 도구는 아니에요 / Gemini in Firebase는 보안 규칙(Security Rules)을 직접 만들어주지 못해요

**5. Claude 메모**

- AI 여부: Firebase는 백엔드 플랫폼이고 AI(Gemini in Firebase, Firebase AI Logic)는 그 일부라서 ai_native=partial로 제안해요.
- 유료 가격: 유료는 Blaze(쓴 만큼 결제) 하나라 고정 월 가격이 없어요. paid_from_usd=null, billing=unknown으로 뒀어요. 가격 페이지에 '자격이 되면 300달러 무료 크레딧' 문구가 있어요. Gemini in Firebase 자체는 모든 사용자에게 무료라고 돼 있어요.
- 무료 한도: 서비스마다 달라요. 예시로 Firestore 저장 1GiB, 읽기 하루 5만 건(가격표)을 적었어요. Authentication은 월 활성 사용자 5만 명까지 무료예요.
- 학습 정책: Gemini in Firebase 문서는 데이터 사용을 cloud.google.com 문서(How Gemini products in Google Cloud use your data)로 넘겨요. 허용된 호스트가 아니라 읽지 않아서 unknown이에요. cloud.google.com을 official_domains에 넣을지 J가 정해 주세요.
- 근거 문장 일부는 페이지에서 제품 이름(Cloud Firestore, Firebase Authentication 등)이 따로 줄로 나뉘어 있어서 이름 뒤 부분만 인용했어요 (예: database 근거는 'Cloud Firestore' 다음 문장).
- devops.logs 근거 문장은 "...from the Firebase console."로 이어져요 (App Hosting). devops.preview(미리보기 배포)는 문서 메뉴 이름만 보여서 넣지 않았어요. data_ml의 벡터 검색도 메뉴 이름만 있어서 뺐어요.
- 쓰는 형태: 클라우드 서비스 + SDK(library) + Firebase CLI. SQL Connect용 VS Code 확장도 있지만 Firebase 전체의 형태는 아니라서 ide_extension은 넣지 않았어요.
- 오픈소스 여부: 서비스가 오픈소스라는 문장이 없어요 (SDK는 GitHub에 있다는 링크만 있음). null + todo로 뒀어요. 서비스 자체는 아니라고 보면 false로 채워 주세요.
- Firebase Studio(별도 도구)는 2026-06-22부터 신규 가입이 막혔고 2027-03-22 종료 예정이에요. 이 초안은 Firebase 백엔드 플랫폼만 다뤄요.
- 섹션(official), 대표 목적(backend_database)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote firebase --verified YYYY-MM-DD --dev
```

<a id="dev-supabase"></a>
### Supabase (`supabase`) · 개발자용

공식 주소: https://supabase.com  
공식 도메인: `supabase.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (22개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Perfect for passion projects & simple websites.” · [페이지에서 보기](https://supabase.com/pricing#:~:text=Perfect%20for%20passion%20projects%20%26%20simple%20websites.)
- [ ] 무료 사용: 돼요  
  “Start building for free, collaborate with your team, then scale to millions of users” · [페이지에서 보기](https://supabase.com/pricing#:~:text=Start%20building%20for%20free%2C%20collaborate,scale%20to%20millions%20of%20users)
- [ ] 무료 한도: Free 요금제 (DB 500MB·파일 1GB·월 활성 사용자 5만 명, 활성 프로젝트 2개, 1주일 안 쓰면 일시 정지)  
  “Free projects are paused after 1 week of inactivity. Limit of 2 active projects.” · [페이지에서 보기](https://supabase.com/pricing#:~:text=Free%20projects%20are%20paused%20after,Limit%20of%202%20active%20projects.)
- [ ] 무료 한도: Free 요금제 (DB 500MB·파일 1GB·월 활성 사용자 5만 명, 활성 프로젝트 2개, 1주일 안 쓰면 일시 정지)  
  “500 MB database size” · [페이지에서 보기](https://supabase.com/pricing#:~:text=500%20MB%20database%20size)
- [ ] 무료 한도: Free 요금제 (DB 500MB·파일 1GB·월 활성 사용자 5만 명, 활성 프로젝트 2개, 1주일 안 쓰면 일시 정지)  
  “50,000 monthly active users” · [페이지에서 보기](https://supabase.com/pricing#:~:text=50%2C000%20monthly%20active%20users)
- [ ] 무료 한도: Free 요금제 (DB 500MB·파일 1GB·월 활성 사용자 5만 명, 활성 프로젝트 2개, 1주일 안 쓰면 일시 정지)  
  “1 GB file storage” · [페이지에서 보기](https://supabase.com/pricing#:~:text=1%20GB%20file%20storage)
- [ ] 유료 가격: 월 25달러부터  
  “Most Popular For production applications with the power to scale. Get Started From $ 25 / month” · [페이지에서 보기](https://supabase.com/pricing#:~:text=Most%20Popular%20For%20production%20applications,From%20%24%2025%20%2F%20month)
- [ ] 유료 가격: 월 25달러부터  
  “For production applications with the power to scale.” · [페이지에서 보기](https://supabase.com/pricing#:~:text=For%20production%20applications%20with%20the%20power%20to%20scale.)
- [ ] 유료 가격: 월 25달러부터  
  “Paid plans include $10/mo in compute credits, enough to cover one Micro instance.” · [페이지에서 보기](https://supabase.com/pricing#:~:text=Paid%20plans%20include%20%2410%2Fmo%20in,to%20cover%20one%20Micro%20instance.)
- [ ] 학습 메모: AI 어시스턴트에 넣은 질문과 답, DB 구조(메타데이터)는 수집해 서비스 개선에 쓴다고 해요. 모델 학습 여부는 공식 문장을 못 찾았어요  
  “When you submit a query through our Supabase AI tool, we will collect the content of your query (i.e. your inputs or prompts), and the corresponding generated output.” · [페이지에서 보기](https://supabase.com/privacy#:~:text=When%20you%20submit%20a%20query,and%20the%20corresponding%20generated%20output.)
- [ ] 학습 메모: AI 어시스턴트에 넣은 질문과 답, DB 구조(메타데이터)는 수집해 서비스 개선에 쓴다고 해요. 모델 학습 여부는 공식 문장을 못 찾았어요  
  “We use this information to assess the performance of the chatbot tool and improve the Service.” · [페이지에서 보기](https://supabase.com/privacy#:~:text=We%20use%20this%20information%20to,tool%20and%20improve%20the%20Service.)
- [ ] 오픈소스: 예  
  “Supabase is an open source company, actively fostering collaboration” · [페이지에서 보기](https://supabase.com/open-source#:~:text=Supabase%20is%20an%20open%20source%20company%2C%20actively%20fostering%20collaboration)
- [ ] 오픈소스: 예  
  “Supabase is built in the open because we believe great developer tools should be transparent, inspectable, and owned by the community. Read, contribute, self-host.” · [페이지에서 보기](https://supabase.com/#:~:text=Supabase%20is%20built%20in%20the,the%20community.%20Read%2C%20contribute%2C%20self%2Dhost.)
- [ ] 쓰는 형태: 클라우드 서비스, 셀프 호스팅, CLI  
  “Start your project with a Postgres database. Add Authentication, Data APIs, Edge Functions, Realtime Data, Storage, and Vector embeddings.” · [페이지에서 보기](https://supabase.com/#:~:text=Start%20your%20project%20with%20a,Data%2C%20Storage%2C%20and%20Vector%20embeddings.)
- [ ] 쓰는 형태: 클라우드 서비스, 셀프 호스팅, CLI  
  “Install and run your own Supabase on your computer, server, or cloud infrastructure.” · [페이지에서 보기](https://supabase.com/docs/guides/self-hosting#:~:text=Install%20and%20run%20your%20own,computer%2C%20server%2C%20or%20cloud%20infrastructure.)
- [ ] 쓰는 형태: 클라우드 서비스, 셀프 호스팅, CLI  
  “The Supabase CLI runs the entire Supabase stack on your own machine or in a CI environment, so you can build and test locally, then connect your project to a hosted one when you're ready to deploy.” · [페이지에서 보기](https://supabase.com/docs/guides/local-development/cli/getting-started#:~:text=The%20Supabase%20CLI%20runs%20the,when%20you%27re%20ready%20to%20deploy.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 데이터베이스  
  “a full Postgres database” · [페이지에서 보기](https://supabase.com/#:~:text=a%20full%20Postgres%20database)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 인증  
  “Add user sign ups and logins” · [페이지에서 보기](https://supabase.com/#:~:text=Add%20user%20sign%20ups%20and%20logins)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 파일 스토리지  
  “large files, from videos to images.” · [페이지에서 보기](https://supabase.com/#:~:text=large%20files%2C%20from%20videos%20to%20images.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 자연어로 쿼리·스키마 생성  
  “Data Insights Discovery: Execute queries using natural language and view results in a clear format.” · [페이지에서 보기](https://supabase.com/features/ai-assistant#:~:text=Data%20Insights%20Discovery%3A%20Execute%20queries,results%20in%20a%20clear%20format.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 자연어로 쿼리·스키마 생성  
  “For instance, when designing a new database schema, it can generate all necessary SQL queries based on your specifications” · [페이지에서 보기](https://supabase.com/features/ai-assistant#:~:text=For%20instance%2C%20when%20designing%20a,queries%20based%20on%20your%20specifications)
- [ ] ✓ 데이터·모델·RAG 다루기 — 벡터 DB 연동  
  “Supabase provides an open source toolkit for developing AI applications using Postgres and pgvector. Use the Supabase client libraries to store, index, and query your vector embeddings at scale.” · [페이지에서 보기](https://supabase.com/docs/guides/ai#:~:text=Supabase%20provides%20an%20open%20source,your%20vector%20embeddings%20at%20scale.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `privacy.trains_on_input_default`
- [ ] `privacy.opt_out`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 백엔드·데이터베이스 붙이기
- [ ] 한 줄 설명: Postgres 데이터베이스에 인증·파일 저장·실시간·벡터 검색을 한 번에 붙여주는 백엔드 플랫폼이에요. 대시보드의 AI 어시스턴트가 SQL과 스키마를 같이 짜줘요
- [ ] 시작 3단계: 1) supabase.com에서 가입하고 새 프로젝트(Postgres DB) 만들기 2) 대시보드 Table Editor나 SQL Editor로 테이블 만들기 (AI 어시스턴트에 문장으로 부탁해도 돼요) 3) 프로젝트 URL과 키로 클라이언트 라이브러리를 연결해 앱에서 쓰기
- [ ] 주의할 점: 무료 프로젝트는 1주일 동안 안 쓰면 일시 정지돼요 / AI 어시스턴트는 아직 공개 알파 단계예요 / Row Level Security(RLS) 정책을 꼭 설정해야 데이터가 안전해요

**5. Claude 메모**

- 무료 한도: 가격표 Free 칸의 숫자(DB 500MB, 파일 1GB, 월 활성 사용자 5만, egress 5GB)와 '1주일 안 쓰면 정지, 활성 프로젝트 2개' 문장을 묶었어요.
- 유료 가격: Pro는 'From $25 / month'예요 (텍스트 추출에서 $와 25가 줄로 나뉘어 근거 문장에 띄어쓰기가 들어가 있어요). 프로젝트 추가(월 10달러부터)·컴퓨트·사용량은 따로 붙어요. Team은 월 599달러부터.
- 학습 정책: 개인정보 처리방침에 AI 어시스턴트 입력·출력과 DB 구조(메타데이터)를 수집하고 OpenAI·Amazon Bedrock에 넘기며 '서비스 개선'에 쓴다는 문장만 있어요. 모델 학습이라는 명확한 문장이 없어서 unknown으로 두고 todo에 넣었어요. 처리방침에 'AI 관련 제3자 공유 동의는 계정 설정에서 바꿀 수 있다'는 문장도 있어요 (If you have provided consent to share certain data with third-party partners in relation to our AI-powered services, you can update your preferences or withdraw your consent at any time through your account settings.) — 이걸 opt_out으로 볼지 J가 정해 주세요.
- 오픈소스: 공식 사이트에 'Supabase is an open source company' 문장이 있고, 홈의 'View on GitHub' 링크가 github.com/supabase, 상단 별 수 링크가 github.com/supabase/supabase예요. 라이선스 종류는 공식 도메인에서 확인 못 했어요 (GitHub는 열지 않았어요).
- 기능 체크리스트: backend_database 4개(자연어 쿼리 근거는 AI 어시스턴트 기능 페이지), data_ml은 벡터 DB 1개만. Cron·MCP 서버·Edge Functions 안의 오픈소스 임베딩 모델 실행도 있지만 체크리스트 항목과 딱 맞는 문장이 아니라 넣지 않았어요.
- 쓰는 형태: cloud_service·self_host·cli. 클라이언트 라이브러리(supabase-js 등)도 있지만 제품 자체를 라이브러리로 쓰는 건 아니라 library는 뺐어요.
- AI 여부(partial: AI 어시스턴트·벡터는 일부 기능이고 본체는 DB 플랫폼), 섹션(official), 대표 목적(backend_database)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote supabase --verified YYYY-MM-DD --dev
```

<a id="dev-neon"></a>
### Neon (`neon`) · 개발자용

공식 주소: https://neon.com  
공식 도메인: `neon.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (15개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “The Free plan is permanent (not a trial); no credit card required.” · [페이지에서 보기](https://neon.com/pricing#:~:text=The%20Free%20plan%20is%20permanent,trial%29%3B%20no%20credit%20card%20required.)
- [ ] 무료 한도: Free 요금제 (카드 없이 계속 무료, 프로젝트당 DB 1GB·컴퓨트 월 100 CU-hours, 5분 안 쓰면 자동 정지)  
  “Free is capped at 1 GB of Postgres storage per project and 20 GB total across all projects.” · [페이지에서 보기](https://neon.com/pricing#:~:text=Free%20is%20capped%20at%201,GB%20total%20across%20all%20projects.)
- [ ] 무료 한도: Free 요금제 (카드 없이 계속 무료, 프로젝트당 DB 1GB·컴퓨트 월 100 CU-hours, 5분 안 쓰면 자동 정지)  
  “\| Compute \| 100 CU-hours/project” · [페이지에서 보기](https://neon.com/pricing#:~:text=%7C%20Compute%20%7C%20100%20CU%2Dhours%2Fproject)
- [ ] 무료 한도: Free 요금제 (카드 없이 계속 무료, 프로젝트당 DB 1GB·컴퓨트 월 100 CU-hours, 5분 안 쓰면 자동 정지)  
  “Always enabled on Free (suspends after 5 min, cannot be turned off)” · [페이지에서 보기](https://neon.com/pricing#:~:text=Always%20enabled%20on%20Free%20%28suspends,min%2C%20cannot%20be%20turned%20off%29)
- [ ] 결제 주기: monthly  
  “Paid plans are pay-as-you-go: usage is metered hourly and billed at the end of the month, with no monthly minimum.” · [페이지에서 보기](https://neon.com/pricing#:~:text=Paid%20plans%20are%20pay%2Das%2Dyou%2Dgo%3A%20usage,month%2C%20with%20no%20monthly%20minimum.)
- [ ] 학습 메모: SQL 에디터의 AI 기능은 DB 스키마만 Amazon Bedrock에 보내고 실제 데이터는 보내지 않는다고 해요. 학습 여부는 공식 도메인에서 확인 못 했어요  
  “To enable these capabilities, we share your database schema with the AI agent, but \*\*no actual data is shared\*\*.” · [페이지에서 보기](https://neon.com/docs/security/ai-use-in-neon#:~:text=To%20enable%20these%20capabilities%2C%20we,%2A%2Ano%20actual%20data%20is%20shared%2A%2A.)
- [ ] 쓰는 형태: 클라우드 서비스, CLI  
  “Neon is a complete set of cloud backend primitives built around Lakebase Postgres, for developers, startups, and agent platforms, from Databricks.” · [페이지에서 보기](https://neon.com/pricing#:~:text=Neon%20is%20a%20complete%20set,and%20agent%20platforms%2C%20from%20Databricks.)
- [ ] 쓰는 형태: 클라우드 서비스, CLI  
  “One CLI for every Neon surface: manage Postgres, Functions, Storage, the Data API, and Managed Better Auth from the terminal, with branch-scoped workflows built in.” · [페이지에서 보기](https://neon.com/docs/cli#:~:text=One%20CLI%20for%20every%20Neon,with%20branch%2Dscoped%20workflows%20built%20in.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 데이터베이스  
  “Serverless Postgres with branching, autoscaling, scale to zero, and instant restore.” · [페이지에서 보기](https://neon.com/docs/introduction#:~:text=Serverless%20Postgres%20with%20branching%2C%20autoscaling%2C,to%20zero%2C%20and%20instant%20restore.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 인증  
  “Neon's managed Better Auth keeps your users and sessions in your own Postgres database, so your auth state branches with your data.” · [페이지에서 보기](https://neon.com/docs/auth/overview#:~:text=Neon%27s%20managed%20Better%20Auth%20keeps,state%20branches%20with%20your%20data.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 파일 스토리지  
  “S3-style object storage that lives in your backend, so your files branch and fork copy-on-write with your data.” · [페이지에서 보기](https://neon.com/docs/storage/overview#:~:text=S3%2Dstyle%20object%20storage%20that%20lives,fork%20copy%2Don%2Dwrite%20with%20your%20data.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 자연어로 쿼리·스키마 생성  
  “\*\*SQL generation\*\*: Easily convert natural language requests to SQL.” · [페이지에서 보기](https://neon.com/docs/get-started/query-with-neon-sql-editor#:~:text=%2A%2ASQL%20generation%2A%2A%3A%20Easily%20convert%20natural%20language%20requests%20to%20SQL.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 모델 실행 (클라우드 또는 로컬)  
  “One API for frontier and open-source models at provider prices with no markup, built into your Neon project.” · [페이지에서 보기](https://neon.com/docs/introduction#:~:text=One%20API%20for%20frontier%20and,built%20into%20your%20Neon%20project.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 문서 연결 검색 (RAG)  
  “Vector, keyword, and hybrid search built into Postgres, so agent retrieval and RAG need no separate vector store.” · [페이지에서 보기](https://neon.com/docs/introduction#:~:text=Vector%2C%20keyword%2C%20and%20hybrid%20search,need%20no%20separate%20vector%20store.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 벡터 DB 연동  
  “The \`pgvector\` extension enables you to store vector embeddings and perform vector similarity search in Postgres.” · [페이지에서 보기](https://neon.com/docs/extensions/pgvector#:~:text=The%20%60pgvector%60%20extension%20enables%20you,vector%20similarity%20search%20in%20Postgres.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `privacy.trains_on_input_default`
- [ ] `privacy.opt_out`
- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 백엔드·데이터베이스 붙이기
- [ ] 한 줄 설명: 쓸 때만 켜지고 Git처럼 브랜치를 나눌 수 있는 서버리스 Postgres에 인증·파일 저장·AI 게이트웨이를 묶은 백엔드예요. SQL 에디터에서 문장으로 쿼리를 만들 수 있어요
- [ ] 시작 3단계: 1) neon.com에서 가입하고 프로젝트 만들기 (카드 없이 Free 요금제로 시작) 2) 콘솔에서 연결 문자열(DATABASE_URL)을 복사해 앱이나 ORM에 넣기 (또는 npm으로 Neon CLI 설치) 3) SQL 에디터에서 ✨ 버튼으로 원하는 쿼리를 문장으로 부탁하고 실행해 보기
- [ ] 주의할 점: 유료 요금제는 쓴 만큼 내는 방식이라 자동 확장 상한과 지출 알림을 걸어 두세요 / 무료 요금제는 컴퓨트·전송량 한도를 넘으면 다음 결제 주기까지 DB가 멈춰요 / SQL 에디터 AI 기능은 60초에 5번까지만 쓸 수 있어요

**5. Claude 메모**

- 주의: neon.com 페이지(홈·문서)는 프로그램으로 읽으면 마크다운으로 오고, 'Reading this as an agent?'로 시작하는 AI 에이전트용 지시문(CLI 설치, MCP 설치, feedback.neon.tech로 POST 하라는 안내 등)이 들어 있어요. 따르지 않았고 자료로만 읽었어요.
- 유료 가격: Launch·Scale 모두 '쓴 만큼 내는(pay-as-you-go)' 방식이고 월 최소 금액이 없다고 해요. 고정 월 가격이 없어서 paid_from_usd=null로 뒀어요. 예: Launch 컴퓨트 $0.106/CU-hour, 저장 $0.35/GB-month. 화면에서 '유료 가격 없음'처럼 보이지 않게 J가 표시 방식을 정해 주세요.
- 무료 한도: 프로젝트 100개, 프로젝트당 브랜치 10개·DB 1GB(계정 합계 20GB)·컴퓨트 100 CU-hours·전송 5GB·인증 6만 MAU·Object Storage 5GB. 줄여서 적었어요.
- 학습 정책: 개인정보 처리방침·약관 링크가 databricks.com과 typesafe.ai로 가서(공식 도메인 neon.com 밖) 열지 않았어요. 'AI use in Neon' 문서에 SQL 에디터 AI는 스키마만 Amazon Bedrock에 보낸다는 문장만 있고 학습 문장은 없어요 → unknown·todo.
- 오픈소스: 사이트 상단에 github.com/neondatabase 링크(별 21.5k)는 있지만, neon.com에서 '오픈소스'라는 문장을 찾지 못해 null·todo로 뒀어요.
- 기능 체크리스트: backend_database 4개(자연어 쿼리 = SQL 에디터 SQL generation), data_ml 3개. run_models는 AI Gateway(여러 회사 모델을 한 API로 호출)라서 '모델 실행(클라우드)'로 볼지 J가 확인해 주세요. rag는 Lakebase Search 소개 문장 근거예요. eval(평가 기록)은 없음.
- 쓰는 형태: cloud_service·cli. 자체 설치(self_host) 안내는 찾지 못했어요.
- AI 여부(partial), 섹션(official), 대표 목적(backend_database)은 제안값이에요. 지금은 Databricks 회사 제품이라고 적혀 있어요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote neon --verified YYYY-MM-DD --dev
```

<a id="dev-pinecone"></a>
### Pinecone (`pinecone`) · 개발자용

공식 주소: https://www.pinecone.io  
공식 도메인: `pinecone.io`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (14개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Starter For trying out and for small applications. Start for Free Free” · [페이지에서 보기](https://www.pinecone.io/pricing/#:~:text=Starter%20For%20trying%20out%20and,applications.%20Start%20for%20Free%20Free)
- [ ] 무료 한도: Starter 요금제 (저장 2GB·쓰기 월 200만·읽기 월 100만 단위·인덱스 5개, AWS us-east-1만)  
  “Storage Up to 2 GB” · [페이지에서 보기](https://www.pinecone.io/pricing/#:~:text=Storage%20Up%20to%202%20GB)
- [ ] 무료 한도: Starter 요금제 (저장 2GB·쓰기 월 200만·읽기 월 100만 단위·인덱스 5개, AWS us-east-1만)  
  “Write Units Up to 2M/mo” · [페이지에서 보기](https://www.pinecone.io/pricing/#:~:text=Write%20Units%20Up%20to%202M%2Fmo)
- [ ] 무료 한도: Starter 요금제 (저장 2GB·쓰기 월 200만·읽기 월 100만 단위·인덱스 5개, AWS us-east-1만)  
  “Read Units Up to 1M/mo” · [페이지에서 보기](https://www.pinecone.io/pricing/#:~:text=Read%20Units%20Up%20to%201M%2Fmo)
- [ ] 무료 한도: Starter 요금제 (저장 2GB·쓰기 월 200만·읽기 월 100만 단위·인덱스 5개, AWS us-east-1만)  
  “Indexes Up to 5” · [페이지에서 보기](https://www.pinecone.io/pricing/#:~:text=Indexes%20Up%20to%205)
- [ ] 무료 한도: Starter 요금제 (저장 2GB·쓰기 월 200만·읽기 월 100만 단위·인덱스 5개, AWS us-east-1만)  
  “Region Availability us-east-1” · [페이지에서 보기](https://www.pinecone.io/pricing/#:~:text=Region%20Availability%20us%2Deast%2D1)
- [ ] 유료 가격: 월 20달러부터  
  “Builder NEW For solo developers and small teams. Get Started $20/month flat” · [페이지에서 보기](https://www.pinecone.io/pricing/#:~:text=Builder%20NEW%20For%20solo%20developers,teams.%20Get%20Started%20%2420%2Fmonth%20flat)
- [ ] 학습 메모: 기본 계약(MSA)은 고객 데이터를 서비스 제공·개선에 쓴다고만 해요. AI 기능 약관은 PDF라서 읽지 않았어요  
  “Subject to this Agreement and the DPA, Pinecone may use Customer Data to provide, maintain, operate, improve, and support Services used by Customer” · [페이지에서 보기](https://www.pinecone.io/legal/master-subscription-agreement/#:~:text=Subject%20to%20this%20Agreement%20and,support%20Services%20used%20by%20Customer)
- [ ] 쓰는 형태: 클라우드 서비스  
  “Pinecone runs on fully managed infrastructure that scales with you.” · [페이지에서 보기](https://www.pinecone.io/pricing/#:~:text=Pinecone%20runs%20on%20fully%20managed%20infrastructure%20that%20scales%20with%20you.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 벡터 DB 연동  
  “Backed by distributed object storage for scalable, highly-available, serverless vector search.” · [페이지에서 보기](https://www.pinecone.io/product/database/#:~:text=Backed%20by%20distributed%20object%20storage,scalable%2C%20highly%2Davailable%2C%20serverless%20vector%20search.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 문서 연결 검색 (RAG)  
  “Add the Pinecone Assistant node to any workflow. Connect your data sources, upload files, and start querying. Automatic chunking, embedding, and retrieval included.” · [페이지에서 보기](https://www.pinecone.io/product/assistant/#:~:text=Add%20the%20Pinecone%20Assistant%20node,chunking%2C%20embedding%2C%20and%20retrieval%20included.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 문서 연결 검색 (RAG)  
  “Optimized retrieval and reranking deliver grounded answers - tested up to 12% more accurate vs. OpenAI Assistants.” · [페이지에서 보기](https://www.pinecone.io/product/assistant/#:~:text=Optimized%20retrieval%20and%20reranking%20deliver,more%20accurate%20vs.%20OpenAI%20Assistants.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 모델 실행 (클라우드 또는 로컬)  
  “Inference - Embedding llama-text-embed-v2 5M tokens/mo included” · [페이지에서 보기](https://www.pinecone.io/pricing/#:~:text=Inference%20%2D%20Embedding%20llama%2Dtext%2Dembed%2Dv2%205M%20tokens%2Fmo%20included)
- [ ] ✓ 데이터·모델·RAG 다루기 — 모델 실행 (클라우드 또는 로컬)  
  “Search, upsert, and rerank from the same index.” · [페이지에서 보기](https://www.pinecone.io/#:~:text=Search%2C%20upsert%2C%20and%20rerank%20from%20the%20same%20index.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `privacy.trains_on_input_default`
- [ ] `privacy.opt_out`
- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 데이터·모델·RAG 다루기
- [ ] 한 줄 설명: 임베딩을 저장하고 의미로 찾아주는 관리형 벡터 데이터베이스예요. 파일만 올리면 근거 있는 답을 주는 Assistant와 임베딩·재정렬 모델도 같이 써요
- [ ] 시작 3단계: 1) pinecone.io에서 무료(Starter)로 가입하고 API 키 받기 2) 콘솔이나 SDK로 인덱스를 만들고 임베딩(벡터)을 넣기 (내장 임베딩 모델을 써도 돼요) 3) 질문을 벡터로 바꿔 검색하거나, Assistant에 파일을 올려 RAG 답변 받아 보기
- [ ] 주의할 점: 무료 요금제는 AWS us-east-1 지역만 쓸 수 있어요 / Standard 이상은 월 최소 사용료가 있고 넘으면 쓴 만큼 더 내요 / 공식 문서 사이트(docs.pinecone.io)는 이번에 읽지 못해서 세부 기능은 확인이 더 필요해요

**5. Claude 메모**

- 읽지 못한 페이지: docs.pinecone.io(공식 문서)는 이 환경의 프록시가 연결을 막아서 하나도 못 읽었어요. 그래서 근거는 www.pinecone.io 페이지에서만 가져왔어요. learn 링크의 docs.pinecone.io는 J가 열리는지 확인해 주세요.
- 유료 가격: 가장 싼 유료는 Builder 월 20달러 정액이에요. Standard는 월 최소 50달러(넘으면 쓴 만큼), Enterprise는 월 최소 500달러.
- 학습 정책: 개인정보 처리방침에는 학습 관련 문장이 없고, MSA에는 '서비스 제공·유지·개선에 쓸 수 있다'는 문장만 있어요. 'Pinecone AI Services Addendum'은 PDF라서 내려받지 않았어요(규칙상). 그 문서에 학습 조항이 있을 수 있으니 J가 직접 확인해 주세요 → unknown·todo.
- 오픈소스: 오픈소스라는 문장도, 아니라는 문장도 찾지 못해 null·todo. 사이트 하단에 github.com/pinecone-io 링크(SDK 등)만 있어요.
- 기능 체크리스트(data_ml 3개): vector_db(벡터 DB 본체), rag(Assistant: 파일 업로드·자동 청킹·검색), run_models(Inference: 임베딩·재정렬 모델을 Pinecone이 실행, 가격표 근거). run_models를 '모델 실행'으로 볼지 J가 정해 주세요. 가격표에 Assistant 'Evaluation Processed Tokens' 항목이 있지만 기능 설명 문장이 아니라 eval은 넣지 않았어요.
- 쓰는 형태: cloud_service만 넣었어요. 홈에 CLI·MCP·Claude Code 플러그인 탭과 Python SDK 예시가 있고, Enterprise용 BYOC(내 클라우드 계정에서 실행)도 있지만 정식 설명 문장을 문서에서 확인하지 못했어요.
- AI 여부: 벡터 DB 자체는 AI 모델이 아니지만 제품 전체가 AI 앱용(검색·Assistant·임베딩 모델)이라 yes로 제안했어요. partial이 맞다고 보면 바꿔 주세요. 섹션(official), 대표 목적(data_ml)도 제안값이에요.
- official_domains는 pinecone.io로 넣어 www·docs 하위 도메인을 같이 허용했어요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote pinecone --verified YYYY-MM-DD --dev
```

<a id="dev-hugging-face"></a>
### Hugging Face (`hugging-face`) · 개발자용

공식 주소: https://huggingface.co  
공식 도메인: `huggingface.co`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (13개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “At Hugging Face we aim to provide the AI community with significant volumes of free storage space for public repositories” · [페이지에서 보기](https://huggingface.co/docs/hub/storage-limits#:~:text=At%20Hugging%20Face%20we%20aim,storage%20space%20for%20public%20repositories)
- [ ] 무료 사용: 돼요  
  “On-demand GPU hardware. Starting at $0.” · [페이지에서 보기](https://huggingface.co/pricing#:~:text=On%2Ddemand%20GPU%20hardware.%20Starting%20at%20%240.)
- [ ] 무료 한도: 무료 계정 (공개 저장소는 최선 제공, 비공개 저장 100GB, 기본 CPU Spaces 무료. Inference Providers는 크레딧을 사야 써요)  
  “Free user or org Best-effort\* 100GB” · [페이지에서 보기](https://huggingface.co/docs/hub/storage-limits#:~:text=Free%20user%20or%20org%20Best%2Deffort%2A%20100GB)
- [ ] 무료 한도: 무료 계정 (공개 저장소는 최선 제공, 비공개 저장 100GB, 기본 CPU Spaces 무료. Inference Providers는 크레딧을 사야 써요)  
  “Free users can use Inference Providers by purchasing credits, or by upgrading to” · [페이지에서 보기](https://huggingface.co/docs/inference-providers/pricing#:~:text=Free%20users%20can%20use%20Inference,credits%2C%20or%20by%20upgrading%20to)
- [ ] 유료 가격: 월 9달러부터  
  “PRO Account Boost your personal HF experience $9 /month” · [페이지에서 보기](https://huggingface.co/pricing#:~:text=PRO%20Account%20Boost%20your%20personal%20HF%20experience%20%249%20%2Fmonth)
- [ ] 기본으로 학습에 씀: 아니요  
  “Hugging Face does not store any user data for training purposes. We do not store the request body or response when routing requests through Hugging Face. Logs are kept for debugging purposes for up to 30 days, but no user data or tokens are stored.” · [페이지에서 보기](https://huggingface.co/docs/inference-providers/security#:~:text=Hugging%20Face%20does%20not%20store,data%20or%20tokens%20are%20stored.)
- [ ] 쓰는 형태: 웹, 라이브러리, CLI, 클라우드 서비스  
  “The platform where the machine learning community collaborates on models, datasets, and applications.” · [페이지에서 보기](https://huggingface.co/#:~:text=The%20platform%20where%20the%20machine,on%20models%2C%20datasets%2C%20and%20applications.)
- [ ] 쓰는 형태: 웹, 라이브러리, CLI, 클라우드 서비스  
  “Transformers provides everything you need for inference or training with state-of-the-art pretrained models.” · [페이지에서 보기](https://huggingface.co/docs/transformers/index#:~:text=Transformers%20provides%20everything%20you%20need,training%20with%20state%2Dof%2Dthe%2Dart%20pretrained%20models.)
- [ ] 쓰는 형태: 웹, 라이브러리, CLI, 클라우드 서비스  
  “This tool allows you to interact with the Hugging Face Hub directly from a terminal.” · [페이지에서 보기](https://huggingface.co/docs/huggingface_hub/guides/cli#:~:text=This%20tool%20allows%20you%20to,Hub%20directly%20from%20a%20terminal.)
- [ ] 쓰는 형태: 웹, 라이브러리, CLI, 클라우드 서비스  
  “where you or your organization(s) can run inference via application programming interface on machine learning models publicly or privately hosted on our Model Hub” · [페이지에서 보기](https://huggingface.co/terms-of-service#:~:text=where%20you%20or%20your%20organization%28s%29,hosted%20on%20our%20Model%20Hub)
- [ ] ✓ 데이터·모델·RAG 다루기 — 모델 실행 (클라우드 또는 로컬)  
  “Easily run models from top-tier providers like fal, Replicate, Together AI, and others.” · [페이지에서 보기](https://huggingface.co/docs/inference-providers/index#:~:text=Easily%20run%20models%20from%20top%2Dtier,Replicate%2C%20Together%20AI%2C%20and%20others.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 모델 실행 (클라우드 또는 로컬)  
  “Simple and optimized inference class for many machine learning tasks like text generation, image segmentation, automatic speech recognition, document question answering, and more.” · [페이지에서 보기](https://huggingface.co/docs/transformers/index#:~:text=Simple%20and%20optimized%20inference%20class,document%20question%20answering%2C%20and%20more.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 평가·실험 기록  
  “Packed with ML features, like model eval, dataset viewer and much more.” · [페이지에서 보기](https://huggingface.co/pricing#:~:text=Packed%20with%20ML%20features%2C%20like,dataset%20viewer%20and%20much%20more.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 데이터·모델·RAG 다루기
- [ ] 한 줄 설명: 공개 AI 모델·데이터셋·데모 앱(Spaces)을 찾고 올리는 모델 허브예요. 여러 회사 모델을 API 하나로 호출하고 Transformers 같은 라이브러리로 직접 돌릴 수도 있어요
- [ ] 시작 3단계: 1) huggingface.co에서 무료로 가입하고 접근 토큰 만들기 2) Models에서 원하는 모델을 찾아 모델 카드의 사용법과 라이선스 확인하기 3) Transformers로 내 컴퓨터에서 돌리거나, Inference Providers API로 바로 호출해 보기
- [ ] 주의할 점: 모델마다 라이선스가 달라서 상업적으로 쓸 수 있는지 모델 카드에서 확인하세요 / 무료 계정은 Inference Providers 월 포함 크레딧이 없어서 크레딧을 사야 해요 / 누구나 올리는 저장소라 모르는 모델·코드는 내려받기 전에 확인하세요

**5. Claude 메모**

- 범위: Hugging Face Hub(웹)·Inference Providers·라이브러리(Transformers 등)를 한 항목으로 묶었어요. 따로 나눌지 J가 정해 주세요.
- 유료 가격: PRO 월 9달러(개인). Team은 사용자당 월 20달러, Enterprise 사용자당 월 50달러. Spaces GPU·Inference Endpoints·Inference Providers는 쓴 만큼 따로 내요.
- 무료 한도: 저장 공간 문서의 '무료 사용자: 공개 best-effort, 비공개 100GB'와 Inference Providers 가격 문서의 '무료 사용자는 크레딧 구매 필요' 문장을 근거로 했어요. 가격표 하드웨어 표에서 CPU Basic·ZeroGPU 칸은 FREE로 보이지만 텍스트 추출에서 줄이 나뉘어 근거는 'Starting at $0.' 문장으로 남겼어요.
- 학습 정책: Inference Providers 보안 문서의 '학습 목적으로 사용자 데이터를 저장하지 않는다' 문장으로 no로 했어요. Hub에 올린 모델·데이터셋, HuggingChat 등 다른 서비스에 대한 문장은 아니에요. 개인정보 처리방침에는 '서비스 개선 연구·분석' 문장만 있어요. opt_out은 근거가 없어 unknown이에요.
- 오픈소스: 약관에 'Hugging Face Open-Sources Libraries', Hub 문서에 'largest open-source collection of models, datasets, and demos'라는 말은 있지만, Hub 서비스 자체가 오픈소스라는 문장은 없어요. 라이브러리(Transformers 등)는 오픈소스로 보이지만 라이선스는 GitHub에서 확인해야 해서 null·todo로 뒀어요.
- 기능 체크리스트(data_ml 2개): run_models(Inference Providers·Transformers), eval(가격표 'model eval' 문장 — 근거가 짧으니 J가 확인해 주세요. 문서 목록에 Evaluate·Lighteval·Leaderboards도 있어요). Inference Providers 소개에 'embeddings for semantic search, RAG systems'가 있지만 문서 연결 검색 기능 자체는 아니라 rag는 넣지 않았어요. vector_db 없음.
- AI 여부(yes), 섹션(official), 대표 목적(data_ml)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote hugging-face --verified YYYY-MM-DD --dev
```

<a id="dev-langsmith"></a>
### LangSmith (`langsmith`) · 개발자용

공식 주소: https://www.langchain.com/langsmith  
공식 도메인: `langchain.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (13개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Developer For solo users getting started. $0 / seat per month then pay as you go Start for free” · [페이지에서 보기](https://www.langchain.com/pricing#:~:text=Developer%20For%20solo%20users%20getting,you%20go%20Start%20for%20free)
- [ ] 무료 한도: Developer 요금제 (1명, 기본 트레이스 월 5천 개, 넘으면 쓴 만큼)  
  “Up to 5k base traces / mo, then pay-as-you-go” · [페이지에서 보기](https://www.langchain.com/pricing#:~:text=Up%20to%205k%20base%20traces%20%2F%20mo%2C%20then%20pay%2Das%2Dyou%2Dgo)
- [ ] 무료 한도: Developer 요금제 (1명, 기본 트레이스 월 5천 개, 넘으면 쓴 만큼)  
  “Our Developer plan is a great choice for personal projects. You will have 1 free seat with access to LangSmith (5k base traces/month included).” · [페이지에서 보기](https://www.langchain.com/pricing#:~:text=Our%20Developer%20plan%20is%20a,LangSmith%20%285k%20base%20traces%2Fmonth%20included%29.)
- [ ] 유료 가격: 월 39달러부터  
  “Plus For teams building and deploying agents. $39 / seat per month” · [페이지에서 보기](https://www.langchain.com/pricing#:~:text=Plus%20For%20teams%20building%20and,%2439%20%2F%20seat%20per%20month)
- [ ] 결제 주기: monthly  
  “For the Developer or Plus Plan, seats are billed monthly on the 1st or pro-rated if added mid-month (no credit for removed seats); traces are billed monthly in arrears for your usage.” · [페이지에서 보기](https://www.langchain.com/pricing#:~:text=For%20the%20Developer%20or%20Plus,in%20arrears%20for%20your%20usage.)
- [ ] 기본으로 학습에 씀: 아니요  
  “No. LangSmith does not use your data to train models. Your traces, prompts, and outputs remain private to your organization.” · [페이지에서 보기](https://www.langchain.com/pricing#:~:text=No.%20LangSmith%20does%20not%20use,remain%20private%20to%20your%20organization.)
- [ ] 기본으로 학습에 씀: 아니요  
  “LangChain agrees that it will not use Customer Data to train on, develop, or otherwise improve its products, including any large language models.” · [페이지에서 보기](https://www.langchain.com/terms-of-service#:~:text=LangChain%20agrees%20that%20it%20will,including%20any%20large%20language%20models.)
- [ ] 쓰는 형태: 클라우드 서비스, 셀프 호스팅, 라이브러리  
  “LangSmith offers managed cloud, bring-your-own-cloud (BYOC), and self-hosted options for teams with data residency requirements.” · [페이지에서 보기](https://www.langchain.com/langsmith#:~:text=LangSmith%20offers%20managed%20cloud%2C%20bring%2Dyour%2Down%2Dcloud,teams%20with%20data%20residency%20requirements.)
- [ ] 쓰는 형태: 클라우드 서비스, 셀프 호스팅, 라이브러리  
  “Trace your preferred framework or integrate LangSmith with any agent stack using our Python, Typescript, Go, or Java SDKs.” · [페이지에서 보기](https://www.langchain.com/langsmith#:~:text=Trace%20your%20preferred%20framework%20or,Typescript%2C%20Go%2C%20or%20Java%20SDKs.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 평가·실험 기록  
  “Evaluation is the core of testing: it scores your agent’s outputs against datasets and criteria so you can benchmark versions, catch regressions, and track quality over time.” · [페이지에서 보기](https://docs.langchain.com/langsmith/evaluation#:~:text=Evaluation%20is%20the%20core%20of,and%20track%20quality%20over%20time.)
- [ ] ✓ 배포·인프라·CI/CD — 로그·모니터링  
  “Get a real-time view of how your agents are performing. Spot issues early, understand impact, and start triaging.” · [페이지에서 보기](https://www.langchain.com/langsmith#:~:text=Get%20a%20real%2Dtime%20view%20of,understand%20impact%2C%20and%20start%20triaging.)
- [ ] ✓ 배포·인프라·CI/CD — 로그·모니터링  
  “Webhook and Pagerduty alerts” · [페이지에서 보기](https://www.langchain.com/langsmith#:~:text=Webhook%20and%20Pagerduty%20alerts)
- [ ] ✓ 배포·인프라·CI/CD — AI로 오류 원인 분석  
  “Automatically detect recurring issues in your traces, diagnose their root cause, and resolve them with LangSmith Engine.” · [페이지에서 보기](https://docs.langchain.com/langsmith/home#:~:text=Automatically%20detect%20recurring%20issues%20in,resolve%20them%20with%20LangSmith%20Engine.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 데이터·모델·RAG 다루기
- [ ] 한 줄 설명: LLM 앱과 에이전트가 단계마다 무엇을 했는지 추적(트레이싱)하고, 데이터셋으로 답변 품질을 평가·비교하는 관측 플랫폼이에요. LangChain 말고 다른 프레임워크에도 붙여요
- [ ] 시작 3단계: 1) smith.langchain.com에서 가입하고(카드 필요 없음) 설정에서 API 키 만들기 2) 앱에 환경 변수나 Python·TypeScript SDK로 트레이싱 붙이기 3) 트레이스를 데이터셋으로 모아 평가(Evaluation)를 돌리고 버전끼리 비교하기
- [ ] 주의할 점: 기본 트레이스는 14일만 보관돼요 (오래 두려면 추가 요금) / 무료 한도를 넘는 트레이스와 배포·샌드박스 등은 쓴 만큼 요금이 붙어요 / 자체 설치(self-hosted)는 Enterprise 요금제에서 영업팀 상담이 필요해요

**5. Claude 메모**

- 유료 가격: Plus 사용자(seat)당 월 39달러 + 쓴 만큼(트레이스·배포·LSU). Enterprise는 맞춤 가격·연 청구.
- 학습 정책: 가격 FAQ('LangSmith does not use your data to train models')와 약관 4.2 문장으로 no. 끄고 켜는 설정은 따로 없어 opt_out은 unknown으로 뒀어요. 개인정보 처리방침에서는 학습 관련 문장을 찾지 못했어요.
- 오픈소스: 사이트 메뉴에서 LangChain·LangGraph·deepagents는 'Open Source' 묶음, LangSmith는 'LangSmith Platform' 묶음이라 LangSmith 자체는 오픈소스가 아닌 것으로 보이지만, 명확한 문장이 없어 null·todo로 뒀어요.
- 기능 체크리스트: data_ml는 eval 1개(평가·실험 기록이 핵심 기능). devops의 logs(모니터링·알림)와 ai_debug(LangSmith Engine이 트레이스에서 반복 문제를 찾아 원인 진단)도 넣었어요. 배포 도구가 아니라 LLM 앱 관측 도구라서 devops 결과에 나오는 게 맞는지 J가 판단해 주세요. 제품에 Deployment(에이전트 배포)도 있지만 Git 푸시 자동 배포 문장은 확인 못 했어요.
- 쓰는 형태: cloud_service(관리형 클라우드), self_host(Enterprise), library(SDK). 웹 화면(smith.langchain.com)은 클라우드 서비스 화면이라 web은 따로 넣지 않았어요.
- AI 여부(yes: LLM·에이전트 전용 도구), 섹션(official), 대표 목적(data_ml)은 제안값이에요. LangChain 회사 제품이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote langsmith --verified YYYY-MM-DD --dev
```

<a id="dev-ollama"></a>
### Ollama (`ollama`) · 개발자용

공식 주소: https://ollama.com  
공식 도메인: `ollama.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (8개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free $0 Use any cloud model with pay-as-you-go usage credits. Includes: Run models locally Starter usage credits included” · [페이지에서 보기](https://ollama.com/pricing#:~:text=Free%20%240%20Use%20any%20cloud,locally%20Starter%20usage%20credits%20included)
- [ ] 무료 한도: 내 컴퓨터에서 돌리는 건 무제한, 클라우드는 시작용 크레딧과 일부 모델만  
  “Free accounts include a starter amount of usage for a smaller set of starter models. Buying usage credits unlocks all models. Running models on your own hardware is always unlimited.” · [페이지에서 보기](https://ollama.com/pricing#:~:text=Free%20accounts%20include%20a%20starter,own%20hardware%20is%20always%20unlimited.)
- [ ] 유료 가격: 월 20달러부터  
  “$20 / mo. or $200/yr billed annually” · [페이지에서 보기](https://ollama.com/pricing#:~:text=%2420%20%2F%20mo.%20or%20%24200%2Fyr%20billed%20annually)
- [ ] 기본으로 학습에 씀: 아니요  
  “Prompt or response data is never logged or trained on.” · [페이지에서 보기](https://ollama.com/pricing#:~:text=Prompt%20or%20response%20data%20is%20never%20logged%20or%20trained%20on.)
- [ ] 기본으로 학습에 씀: 아니요  
  “Ollama runs locally. We don’t see your prompts or data when you run locally. When using cloud-hosted models, we process your prompts and responses transiently to provide the service and never train on it.” · [페이지에서 보기](https://ollama.com/privacy#:~:text=Ollama%20runs%20locally.%20We%20don%E2%80%99t,and%20never%20train%20on%20it.)
- [ ] 쓰는 형태: CLI, 클라우드 서비스  
  “In the CLI, a cloud model name ends in :cloud, for example gemma4:cloud.” · [페이지에서 보기](https://ollama.com/download#:~:text=In%20the%20CLI%2C%20a%20cloud,in%20%3Acloud%2C%20for%20example%20gemma4%3Acloud.)
- [ ] 쓰는 형태: CLI, 클라우드 서비스  
  “Access the latest open models with complete privacy locally or in the cloud.” · [페이지에서 보기](https://ollama.com/#:~:text=Access%20the%20latest%20open%20models,locally%20or%20in%20the%20cloud.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 모델 실행 (클라우드 또는 로컬)  
  “Ollama runs open models in two ways: - Locally, on this computer.” · [페이지에서 보기](https://ollama.com/download#:~:text=Ollama%20runs%20open%20models%20in,%2D%20Locally%2C%20on%20this%20computer.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 데이터·모델·RAG 다루기
- [ ] 한 줄 설명: 공개된 오픈 모델을 내 컴퓨터에서 바로 돌리거나, 무거운 모델은 Ollama 클라우드에서 돌려 쓰는 도구예요
- [ ] 시작 3단계: 1) 공식 다운로드 페이지에서 내 운영체제용 Ollama 설치하기 2) 모델 목록에서 내 컴퓨터 메모리에 맞는 모델 고르기 3) 터미널에서 모델을 실행해 대화하거나, 내 코드에서 Ollama API 부르기
- [ ] 주의할 점: 큰 모델은 GPU가 약한 컴퓨터에서 느려요. 이럴 땐 클라우드 모델을 고려하세요 / 클라우드 모델은 대부분 유료 요금제나 크레딧이 필요해요

**5. Claude 메모**

- 읽을 수 있었던 곳: ollama.com의 홈·가격·개인정보·다운로드 페이지. 공식 문서(docs.ollama.com)는 이 환경에서 접속이 막혀서(프록시 차단) 못 읽었어요. 배울 거리의 docs.ollama.com 링크는 홈페이지 'Docs' 메뉴가 가리키는 주소라 넣었지만 직접 열어 확인하지는 못했어요.
- 다운로드 페이지에 AI 에이전트에게 주는 지시문("Building with an agent?" 아래 'Set up Ollama so I can build with open models...', 설치 스크립트 실행·문서 읽기 지시)이 들어 있어요. 따르지 않았고, 쓰는 형태(cli)와 기능 근거로 그 안의 사실 문장만 인용했어요. 다른 근거를 원하면 문서에서 바꿔 주세요.
- 오픈소스 여부: 홈페이지가 github.com/ollama/ollama로 링크하지만, 읽은 공식 페이지에 '오픈소스'라는 문장이나 라이선스 문장이 없어서 null + todo로 뒀어요. 확인되면 open_source=true, repo_url=https://github.com/ollama/ollama 로 채워 주세요.
- 쓰는 형태: macOS·Windows 데스크톱 앱, Python·JavaScript 라이브러리는 문서에서 확인해야 해서 넣지 않았어요 (desktop, library 후보).
- 유료 가격: Pro 월 20달러 (연 200달러). Max 월 100달러, Team 월 500달러. 클라우드 모델은 100만 토큰당 가격으로 크레딧이 차감돼요. 무료는 동시 요청 1개.
- 학습 정책: 가격표 FAQ와 개인정보 페이지 모두 '학습에 쓰지 않는다'고 해서 no. 끌 수 있는 설정 자체가 필요 없어서 opt_out은 unknown으로 뒀어요 (Cloudflare 초안과 같은 방식).
- 기능 체크리스트: data_ml의 모델 실행 1개만. 모델 목록에 임베딩 모델(Embedding 14개)이 있지만 RAG·벡터 DB 기능을 직접 소개하는 문장은 못 찾았어요. 도구 호출(tool calling) 지원 문장은 모델 기능이라 automation.tools로 세지 않았어요.
- AI 여부(yes), 섹션(official), 대표 목적(data_ml)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote ollama --verified YYYY-MM-DD --dev
```

<a id="dev-lm-studio"></a>
### LM Studio (`lm-studio`) · 개발자용

공식 주소: https://lmstudio.ai  
공식 도메인: `lmstudio.ai`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (16개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Can I use Bionic for free? Yes. The Free plan includes Bionic Agent and local model support.” · [페이지에서 보기](https://lmstudio.ai/pricing#:~:text=Can%20I%20use%20Bionic%20for,Agent%20and%20local%20model%20support.)
- [ ] 무료 한도: 로컬 모델 실행과 Bionic 에이전트는 무료, 웹 검색은 제한적  
  “Free $ 0 Run local LLMs on your machine Includes: Bionic Agent Run local LLMs using llama.cpp and MLX State-of-the-art offline voice transcription LM Link for up to 5 devices Limited web search” · [페이지에서 보기](https://lmstudio.ai/pricing#:~:text=Free%20%24%200%20Run%20local,5%20devices%20Limited%20web%20search)
- [ ] 유료 가격: 월 20달러부터  
  “Bionic+ $ 20 USD / month Private, US-hosted OSS models.” · [페이지에서 보기](https://lmstudio.ai/pricing#:~:text=Bionic%2B%20%24%2020%20USD%20%2F%20month%20Private%2C%20US%2Dhosted%20OSS%20models.)
- [ ] 기본으로 학습에 씀: 아니요  
  “If you download and run models locally, none of your messages, chat histories, and documents are ever transmitted from your system - everything is saved locally on your device.” · [페이지에서 보기](https://lmstudio.ai/privacy#:~:text=If%20you%20download%20and%20run,saved%20locally%20on%20your%20device.)
- [ ] 기본으로 학습에 씀: 아니요  
  “Your request and the generated response is not retained after the request completes, and your data is not used for training or any other purpose.” · [페이지에서 보기](https://lmstudio.ai/privacy#:~:text=Your%20request%20and%20the%20generated,training%20or%20any%20other%20purpose.)
- [ ] 오픈소스: 아니요  
  “You acknowledge that the Software and its structure, organization, and source code constitute valuable trade secrets and Confidential information of Company and its suppliers.” · [페이지에서 보기](https://lmstudio.ai/terms#:~:text=You%20acknowledge%20that%20the%20Software,of%20Company%20and%20its%20suppliers.)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, 라이브러리, 셀프 호스팅  
  “LM Studio is available for macOS, Windows, and Linux.” · [페이지에서 보기](https://lmstudio.ai/docs#:~:text=LM%20Studio%20is%20available%20for%20macOS%2C%20Windows%2C%20and%20Linux.)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, 라이브러리, 셀프 호스팅  
  “Use lms for chat, model downloads, daemon management, server control, and publishing.” · [페이지에서 보기](https://lmstudio.ai/docs#:~:text=Use%20lms%20for%20chat%2C%20model,management%2C%20server%20control%2C%20and%20publishing.)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, 라이브러리, 셀프 호스팅  
  “Use lmstudio-python to load models, generate text, embed content, and build agents.” · [페이지에서 보기](https://lmstudio.ai/docs#:~:text=Use%20lmstudio%2Dpython%20to%20load%20models%2C,embed%20content%2C%20and%20build%20agents.)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, 라이브러리, 셀프 호스팅  
  “llmster is LM Studio's headless daemon for servers, cloud instances, and CI.” · [페이지에서 보기](https://lmstudio.ai/download#:~:text=llmster%20is%20LM%20Studio%27s%20headless,servers%2C%20cloud%20instances%2C%20and%20CI.)
- [ ] ✓ 데이터·모델·RAG 다루기 — 모델 실행 (클라우드 또는 로컬)  
  “Download and run local LLMs like gpt-oss or Llama, Qwen” · [페이지에서 보기](https://lmstudio.ai/docs#:~:text=Download%20and%20run%20local%20LLMs%20like%20gpt%2Doss%20or%20Llama%2C%20Qwen)
- [ ] ✓ 데이터·모델·RAG 다루기 — 문서 연결 검색 (RAG)  
  “You can attach documents to your chat messages and interact with them entirely offline, also known as "RAG".” · [페이지에서 보기](https://lmstudio.ai/docs#:~:text=You%20can%20attach%20documents%20to,offline%2C%20also%20known%20as%20%22RAG%22.)
- [ ] ✓ AI와 같이 코드 짜기 — 저장소 전체 읽고 이해  
  “Bionic can inspect local codebases, explain unfamiliar code, and help you make changes.” · [페이지에서 보기](https://lmstudio.ai/docs/bionic/agent/code-project#:~:text=Bionic%20can%20inspect%20local%20codebases%2C,and%20help%20you%20make%20changes.)
- [ ] ✓ AI와 같이 코드 짜기 — 여러 파일 한 번에 수정  
  “Refactoring code across several files.” · [페이지에서 보기](https://lmstudio.ai/docs/bionic/agent/code-project#:~:text=Refactoring%20code%20across%20several%20files.)
- [ ] ✓ AI와 같이 코드 짜기 — 명령·테스트 실행  
  “Find the code that validates uploaded images. Explain the current flow, add support for the new size limit, update the tests, and run only the relevant test suite.” · [페이지에서 보기](https://lmstudio.ai/docs/bionic/agent/code-project#:~:text=Find%20the%20code%20that%20validates,only%20the%20relevant%20test%20suite.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “Connect MCP servers and use them with local models” · [페이지에서 보기](https://lmstudio.ai/docs#:~:text=Connect%20MCP%20servers%20and%20use%20them%20with%20local%20models)

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 데이터·모델·RAG 다루기
- [ ] 한 줄 설명: 오픈 모델을 내려받아 내 컴퓨터에서 채팅·API 서버로 돌리는 데스크톱 앱이에요. 코딩·문서 작업용 에이전트 앱 Bionic도 함께 나와요
- [ ] 시작 3단계: 1) 공식 다운로드 페이지에서 LM Studio(또는 에이전트 앱 Bionic) 설치하기 2) 앱 안에서 내 컴퓨터 사양에 맞는 모델 내려받기 3) 채팅으로 써 보거나, 로컬 서버를 켜고 OpenAI 호환 API로 내 코드에서 부르기
- [ ] 주의할 점: 모델 성능과 속도는 내 컴퓨터의 메모리·GPU에 따라 크게 달라요 / 코딩 프로젝트에서는 에이전트가 파일을 고치고 명령을 실행하니 바뀐 내용을 확인하세요 / LM Studio와 Bionic은 따로 설치하는 별개 앱이에요

**5. Claude 메모**

- 범위: 지금 lmstudio.ai 홈과 가격표는 새 에이전트 앱 'LM Studio Bionic' 중심이에요. 문서에 'Bionic is a new, separate app from LM Studio.'라고 해서 별개 앱이지만, 같은 회사·같은 사이트라 한 항목으로 묶었어요. 따로 나눌지 J가 정해 주세요.
- 가격: 가격표는 Bionic 기준이에요 (Free 0달러, Bionic+ 월 20달러, Pro 월 100달러). 기존 LM Studio 앱 자체의 가격은 따로 적혀 있지 않아요. 클라우드 사용량은 플랜에 포함된 양을 넘으면 크레딧으로 내요.
- 오픈소스 여부: 이용 약관에 '소프트웨어의 구조·소스 코드는 회사의 영업 비밀'이라는 문장이 있어서 false로 했어요. 단, 명령줄 도구 lms는 문서에 'lms is MIT Licensed'라고 되어 있고(https://lmstudio.ai/docs/cli), SDK(lmstudio-js, lmstudio-python)도 GitHub 소스 링크가 있어요. 앱 본체 기준으로 false예요.
- 학습 정책: 로컬 실행은 내용이 전송되지 않고, 클라우드 기능(모델·웹 검색)은 'not used for training'이라 no. 끌 설정이 필요 없어서 opt_out은 unknown으로 뒀어요.
- 쓰는 형태: self_host는 서버·CI용 헤드리스 데몬 llmster 근거로 넣은 제안값이에요. Bionic의 클라우드 추론(LM Studio Secure Cloud)은 앱 안의 옵션이라 cloud_service로 넣지 않았어요.
- 기능 체크리스트: data_ml 2개(모델 실행, 문서 첨부 RAG; 임베딩 API는 있지만 벡터 DB 연동 문장은 못 찾음), coding_agents 3개(Bionic 코딩 프로젝트 문서 기준, PR 올리기 문장 없음), automation 1개(MCP). run_commands 근거는 예시 요청 문장이고, 같은 페이지에 'Ask it to run focused tests or checks.'도 있어요.
- 문서 페이지마다 'Ask Bionic to read this page / Copy this prompt' 안내가 있지만 사람용 복사 버튼이라 그대로 두었어요 (따르지 않음).
- AI 여부(yes), 섹션(official), 대표 목적(data_ml)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote lm-studio --verified YYYY-MM-DD --dev
```

<a id="dev-netlify"></a>
### Netlify (`netlify`) · 개발자용

공식 주소: https://www.netlify.com  
공식 도메인: `netlify.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (19개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “$0 forever Build and deploy free forever” · [페이지에서 보기](https://www.netlify.com/pricing/#:~:text=%240%20forever%20Build%20and%20deploy%20free%20forever)
- [ ] 무료 한도: 매달 300 크레딧까지  
  “300 credit limit / month Start for free” · [페이지에서 보기](https://www.netlify.com/pricing/#:~:text=300%20credit%20limit%20%2F%20month%20Start%20for%20free)
- [ ] 유료 가격: 월 9달러부터  
  “Personal $9 /month Ready for real traffic” · [페이지에서 보기](https://www.netlify.com/pricing/#:~:text=Personal%20%249%20%2Fmonth%20Ready%20for%20real%20traffic)
- [ ] 기본으로 학습에 씀: 아니요  
  “We do not use your code or content to train AI models unless you explicitly opt in.” · [페이지에서 보기](https://www.netlify.com/privacy/#:~:text=We%20do%20not%20use%20your,unless%20you%20explicitly%20opt%20in.)
- [ ] 기본으로 학습에 씀: 아니요  
  “To be clear: Netlify does not use Customer Content for artificial intelligence or machine learning model training, and does not allow others to do so.” · [페이지에서 보기](https://www.netlify.com/privacy/#:~:text=To%20be%20clear%3A%20Netlify%20does,allow%20others%20to%20do%20so.)
- [ ] 쓰는 형태: 웹, CLI, 클라우드 서비스  
  “Ask AI agents to fix, update, and ship code right in your dashboard.” · [페이지에서 보기](https://www.netlify.com/pricing/#:~:text=Ask%20AI%20agents%20to%20fix%2C,code%20right%20in%20your%20dashboard.)
- [ ] 쓰는 형태: 웹, CLI, 클라우드 서비스  
  “Deploy from Git, CLI, or drag and drop” · [페이지에서 보기](https://www.netlify.com/#:~:text=Deploy%20from%20Git%2C%20CLI%2C%20or%20drag%20and%20drop)
- [ ] 쓰는 형태: 웹, CLI, 클라우드 서비스  
  “Every Netlify project runs on a global edge network with 100+ locations.” · [페이지에서 보기](https://www.netlify.com/platform/#:~:text=Every%20Netlify%20project%20runs%20on,edge%20network%20with%20100%2B%20locations.)
- [ ] ✓ 배포·인프라·CI/CD — Git 푸시하면 자동 배포  
  “Auto-deploy on every push. Every PR gets a preview URL.” · [페이지에서 보기](https://www.netlify.com/#:~:text=Auto%2Ddeploy%20on%20every%20push.%20Every%20PR%20gets%20a%20preview%20URL.)
- [ ] ✓ 배포·인프라·CI/CD — 미리보기 배포  
  “Each pull or merge request gets its own persistent preview URL so teams can see changes before they ship.” · [페이지에서 보기](https://www.netlify.com/platform/core/deploy-previews/#:~:text=Each%20pull%20or%20merge%20request,see%20changes%20before%20they%20ship.)
- [ ] ✓ 배포·인프라·CI/CD — 로그·모니터링  
  “Track performance and diagnose issues in one view designed for your project.” · [페이지에서 보기](https://www.netlify.com/platform/observability/#:~:text=Track%20performance%20and%20diagnose%20issues,view%20designed%20for%20your%20project.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 문장으로 앱 생성  
  “Spin up a new project from a prompt or iterate directly on your live app.” · [페이지에서 보기](https://www.netlify.com/platform/#:~:text=Spin%20up%20a%20new%20project,directly%20on%20your%20live%20app.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 백엔드·DB·인증 포함  
  “Serverless functions, databases, auth, storage, AI model access, and more. All integrated and ready the moment your project starts.” · [페이지에서 보기](https://www.netlify.com/platform/#:~:text=Serverless%20functions%2C%20databases%2C%20auth%2C%20storage%2C,the%20moment%20your%20project%20starts.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 바로 배포  
  “Start new projects or improve existing ones with agents running on production infrastructure from the first prompt.” · [페이지에서 보기](https://www.netlify.com/platform/agent-runners/#:~:text=Start%20new%20projects%20or%20improve,infrastructure%20from%20the%20first%20prompt.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 코드 내보내기·GitHub 연동  
  “Describe what you need in a prompt. Agent Runners writes the code in your repository, deploys a preview, and opens a pull request.” · [페이지에서 보기](https://www.netlify.com/solutions/prototypes/#:~:text=Describe%20what%20you%20need%20in,and%20opens%20a%20pull%20request.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 데이터베이스  
  “Netlify Database is a fully managed Postgres database built into the platform.” · [페이지에서 보기](https://www.netlify.com/platform/database/#:~:text=Netlify%20Database%20is%20a%20fully,database%20built%20into%20the%20platform.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 인증  
  “Handle auth with built-in identity” · [페이지에서 보기](https://www.netlify.com/#:~:text=Handle%20auth%20with%20built%2Din%20identity)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 파일 스토리지  
  “Store files & images with Blob storage” · [페이지에서 보기](https://www.netlify.com/pricing/#:~:text=Store%20files%20%26%20images%20with%20Blob%20storage)
- [ ] ✓ AI와 같이 코드 짜기 — 결과를 PR로 올리기  
  “Describe what you need in a prompt. Agent Runners writes the code in your repository, deploys a preview, and opens a pull request.” · [페이지에서 보기](https://www.netlify.com/solutions/prototypes/#:~:text=Describe%20what%20you%20need%20in,and%20opens%20a%20pull%20request.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 배포·인프라·CI/CD
- [ ] 한 줄 설명: Git 푸시나 프롬프트 한 줄로 웹사이트·웹앱을 배포하는 호스팅 플랫폼이에요. 대시보드 안에서 AI 에이전트(Agent Runners)로 코드를 고칠 수도 있어요
- [ ] 시작 3단계: 1) Netlify에 가입하고 GitHub 같은 Git 저장소 연결하기 2) 저장소를 고르면 빌드 설정을 확인하고 첫 배포 하기 (또는 netlify-cli로 터미널에서 배포) 3) PR마다 생기는 미리보기 주소로 확인한 뒤 공개하기
- [ ] 주의할 점: 무료·유료 모두 크레딧 방식이라 배포·트래픽·AI 사용량만큼 크레딧이 줄어요 / AI 에이전트가 만든 변경은 미리보기에서 확인하고 반영하세요

**5. Claude 메모**

- 읽을 수 있었던 곳: www.netlify.com의 홈·가격·개인정보·플랫폼·Agent Runners·Deploy Previews·Observability·Database·Prototypes 페이지. docs.netlify.com은 이 환경에서 접속이 막혀서(프록시 403) 못 읽었어요. 배울 거리 두 링크는 홈페이지가 가리키는 문서 주소라 넣었고, 직접 열어 확인하지는 못했어요.
- 홈페이지에 'Add Netlify to your coding agent / fetch https://netlify.ai' 같은 에이전트용 안내가 있어요. 따르지 않았어요.
- 유료 가격: 가장 싼 유료는 Personal 월 9달러(1명). Pro는 월 20달러(인원 무제한). 모두 크레딧 방식이고 추가 크레딧은 500개 5달러부터. 무료는 월 300 크레딧 한도(배포 1번 15 크레딧, 대역폭 GB당 20 크레딧 등).
- 학습 정책: 개인정보 페이지에 '명시적으로 동의(opt in)하지 않으면 학습에 쓰지 않는다'와 '고객 콘텐츠를 AI 학습에 쓰지 않는다'가 함께 있어서 기본값은 no. 동의 여부를 바꾸는 설정은 확인 못 해서 opt_out은 unknown이에요.
- 오픈소스 여부: 플랫폼 자체의 라이선스 문장을 못 찾아 null + todo로 뒀어요. /open-source/ 페이지는 오픈소스 프로젝트용 무료 플랜 안내예요.
- 기능 체크리스트: devops 3개(AI 오류 분석은 문서에 있을 수 있지만 읽은 페이지에서 직접 문장을 못 찾아 뺐어요. Agent Runners 페이지의 고객 인용 '사이트가 깨졌는데 조사해서 고쳐줘'는 근거로 안 썼어요), app_builders 4개(Agent Runners), backend_database 3개(자연어 쿼리는 'AI 도구가 DB가 필요한지 판단해 만들어 준다'는 문장만 있어서 뺐어요), coding_agents 1개(PR 올리기). app_builders.export_code와 coding_agents.open_pr은 같은 문장을 근거로 썼어요.
- AI 여부(partial: 배포 플랫폼에 AI 에이전트·AI Gateway가 붙은 형태), 섹션(official), 대표 목적(devops)은 제안값이에요. app_builders를 대표 목적으로 볼 수도 있어요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote netlify --verified YYYY-MM-DD --dev
```

<a id="dev-railway"></a>
### Railway (`railway`) · 개발자용

공식 주소: https://railway.com  
공식 도메인: `railway.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (16개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free $ 0 per month Perfect for getting started and deploying small apps on Railway” · [페이지에서 보기](https://railway.com/pricing#:~:text=Free%20%24%200%20per%20month,deploying%20small%20apps%20on%20Railway)
- [ ] 무료 한도: 30일 체험 크레딧 5달러, 이후 Free 요금제는 서비스당 1 vCPU·0.5GB RAM  
  “Start with a 30-day free trial with $5 credits, then $1 per month Up to 1 vCPU / 0.5 GB RAM per service” · [페이지에서 보기](https://railway.com/pricing#:~:text=Start%20with%20a%2030%2Dday%20free,0.5%20GB%20RAM%20per%20service)
- [ ] 유료 가격: 월 5달러부터  
  “Hobby $ 5 minimum usage For hobbyist developers building side projects Includes $5 of monthly usage credits” · [페이지에서 보기](https://railway.com/pricing#:~:text=Hobby%20%24%205%20minimum%20usage,%245%20of%20monthly%20usage%20credits)
- [ ] 쓰는 형태: 웹, CLI, 클라우드 서비스  
  “Sandbox VMs for the Railway Agent in the dashboard” · [페이지에서 보기](https://railway.com/changelog/2026-05-22-chat-agent-sandbox#:~:text=Sandbox%20VMs%20for%20the%20Railway%20Agent%20in%20the%20dashboard)
- [ ] 쓰는 형태: 웹, CLI, 클라우드 서비스  
  “Orchestrate applications from the command line.” · [페이지에서 보기](https://railway.com/features#:~:text=Orchestrate%20applications%20from%20the%20command%20line.)
- [ ] 쓰는 형태: 웹, CLI, 클라우드 서비스  
  “With the all-in-one intelligent cloud provider” · [페이지에서 보기](https://railway.com/#:~:text=With%20the%20all%2Din%2Done%20intelligent%20cloud%20provider)
- [ ] ✓ 배포·인프라·CI/CD — Git 푸시하면 자동 배포  
  “Connect your repo, Railway handles the rest. Auto-config, instant previews, no new tools to learn.” · [페이지에서 보기](https://railway.com/#:~:text=Connect%20your%20repo%2C%20Railway%20handles,no%20new%20tools%20to%20learn.)
- [ ] ✓ 배포·인프라·CI/CD — Git 푸시하면 자동 배포  
  “GitHub branch deploys” · [페이지에서 보기](https://railway.com/features#:~:text=GitHub%20branch%20deploys)
- [ ] ✓ 배포·인프라·CI/CD — 미리보기 배포  
  “Every pull request gets its own preview. No surprises after merge.” · [페이지에서 보기](https://railway.com/#:~:text=Every%20pull%20request%20gets%20its,preview.%20No%20surprises%20after%20merge.)
- [ ] ✓ 배포·인프라·CI/CD — 로그·모니터링  
  “Trace requests, monitor resource usage, set custom alerts, and track logs.” · [페이지에서 보기](https://railway.com/#:~:text=Trace%20requests%2C%20monitor%20resource%20usage%2C,custom%20alerts%2C%20and%20track%20logs.)
- [ ] ✓ AI와 같이 코드 짜기 — 명령·테스트 실행  
  “plus a set of tools to clone a repository, read and write files, run commands in the foreground or background, and open a pull request back to the source repo when the work is done.” · [페이지에서 보기](https://railway.com/changelog/2026-05-22-chat-agent-sandbox#:~:text=plus%20a%20set%20of%20tools,when%20the%20work%20is%20done.)
- [ ] ✓ AI와 같이 코드 짜기 — 결과를 PR로 올리기  
  “plus a set of tools to clone a repository, read and write files, run commands in the foreground or background, and open a pull request back to the source repo when the work is done.” · [페이지에서 보기](https://railway.com/changelog/2026-05-22-chat-agent-sandbox#:~:text=plus%20a%20set%20of%20tools,when%20the%20work%20is%20done.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 데이터베이스  
  “Spin-up any database, with built-in backups.” · [페이지에서 보기](https://railway.com/features#:~:text=Spin%2Dup%20any%20database%2C%20with%20built%2Din%20backups.)
- [ ] ✓ 백엔드·데이터베이스 붙이기 — 파일 스토리지  
  “Object Storage $ 0.015 per GB-month free egress” · [페이지에서 보기](https://railway.com/pricing#:~:text=Object%20Storage%20%24%200.015%20per%20GB%2Dmonth%20free%20egress)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “Configure a job to run on a fixed schedule.” · [페이지에서 보기](https://railway.com/features#:~:text=Configure%20a%20job%20to%20run%20on%20a%20fixed%20schedule.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “Connect Notion, Linear, or Sentry through OAuth, or register a custom remote MCP server.” · [페이지에서 보기](https://railway.com/changelog/2026-08-14-access-groups#:~:text=Connect%20Notion%2C%20Linear%2C%20or%20Sentry,a%20custom%20remote%20MCP%20server.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 배포·인프라·CI/CD
- [ ] 한 줄 설명: 저장소를 연결하면 앱·데이터베이스·크론 작업을 알아서 설정해 띄워 주는 클라우드 플랫폼이에요. 대시보드의 Railway Agent에게 말로 작업을 맡길 수도 있어요
- [ ] 시작 3단계: 1) Railway에 가입하고 새 프로젝트에서 GitHub 저장소 연결하기 2) 필요하면 같은 프로젝트에 Postgres 같은 데이터베이스 추가하기 3) 배포가 끝나면 로그·지표를 확인하고, PR마다 생기는 미리보기 환경으로 변경 검토하기
- [ ] 주의할 점: 쓴 만큼(초 단위 CPU·메모리 등) 요금이 나와요. 사용 한도를 정해 두세요 / Railway Agent의 코드 작업(샌드박스)은 아직 시험 기능이에요

**5. Claude 메모**

- 읽을 수 있었던 곳: railway.com의 홈·가격·기능·에이전트·개인정보·이용 약관·변경 기록(changelog) 페이지. docs.railway.com은 이 환경에서 접속이 막혀서(프록시 403) 못 읽었어요. 배울 거리의 docs.railway.com은 홈페이지가 가리키는 주소라 넣었지만 직접 열어 보지 못했어요.
- 에이전트 페이지에 'curl -fsSL agents.railway.com |' 같은 설치 명령이 있어요. 실행하지 않았어요.
- AI 기능 근거는 대부분 변경 기록(changelog) 글이에요. Railway Agent 샌드박스(코드 수정·명령 실행·PR)는 'Priority Boarding'에서 플래그를 켜야 쓰는 시험 기능이고, Agent Connectors(MCP)도 베타예요. 정식 기능 페이지에는 아직 설명이 없어요. 그래도 셀지 J가 정해 주세요.
- 무료 여부: 가격표에 Free $0 요금제가 있어요. 다만 'then $1 per month' 문구가 '월 1달러 크레딧'인지 '월 1달러 요금'인지 페이지만으로는 확실하지 않아서 free_limit에는 체험 크레딧과 자원 한도만 적었어요. 문서로 확인해 주세요.
- 유료 가격: Hobby는 '최소 사용량 월 5달러'(5달러 크레딧 포함, 넘으면 쓴 만큼). Pro는 최소 월 20달러. 실제 요금은 초 단위 사용량 기준이에요.
- 학습 정책: 개인정보 페이지·약관에 AI 학습 관련 문장이 없어서 unknown이에요.
- 오픈소스 여부: 약관에 '서비스의 소스 코드를 얻으려는 시도(디컴파일 등) 금지' 문장은 있지만 라이선스를 밝히는 문장은 아니라서 null + todo로 뒀어요. 약관에 페이지 자동 수집(crawl/scrape) 금지 조항도 있어요 — 이번에는 필요한 몇 페이지만 열었어요.
- 기능 체크리스트: devops 3개(AI 오류 분석은 '배포·로그 확인' 문장만 있고 원인 분석을 직접 소개하는 문장이 없어 뺐어요. auto_deploy는 '저장소 연결·GitHub 브랜치 배포' 문장이라 '푸시하면 자동 배포'를 직접 말하지는 않아요 — J 확인), coding_agents 2개(시험 기능), backend_database 2개(인증 'Railway Authentication'은 배포 주소에 로그인을 거는 Enterprise 기능이라 앱 인증으로 세지 않음), automation 2개(크론 작업, 에이전트 MCP 연결).
- AI 여부(partial), 섹션(official), 대표 목적(devops)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote railway --verified YYYY-MM-DD --dev
```

<a id="dev-notion"></a>
### Notion AI (`notion`) · 개발자용

공식 주소: https://www.notion.com/product/ai  
공식 도메인: `notion.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (15개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free $0 per member / month For individuals to organize personal projects and life.” · [페이지에서 보기](https://www.notion.com/pricing#:~:text=Free%20%240%20per%20member%20%2F,organize%20personal%20projects%20and%20life.)
- [ ] 무료 한도: AI는 체험용 사용량만 (Free·Plus 요금제)  
  “Users on the Free and Plus Plans get a limited number of complimentary AI responses so they can try Notion AI features out.” · [페이지에서 보기](https://www.notion.com/help/notion-ai-faqs#:~:text=Users%20on%20the%20Free%20and,try%20Notion%20AI%20features%20out.)
- [ ] 무료 한도: AI는 체험용 사용량만 (Free·Plus 요금제)  
  “Trial AI capabilities like generating docs, or autofilling databases” · [페이지에서 보기](https://www.notion.com/pricing#:~:text=Trial%20AI%20capabilities%20like%20generating%20docs%2C%20or%20autofilling%20databases)
- [ ] 유료 가격: 연 20달러부터  
  “Business Recommended $20 per member / month” · [페이지에서 보기](https://www.notion.com/pricing#:~:text=Business%20Recommended%20%2420%20per%20member%20%2F%20month)
- [ ] 유료 가격: 연 20달러부터  
  “Notion AI is included with Notion’s Business and Enterprise plans, with core features like Notion Agent, AI Meeting Notes, and Enterprise Search.” · [페이지에서 보기](https://www.notion.com/product/ai#:~:text=Notion%20AI%20is%20included%20with,Meeting%20Notes%2C%20and%20Enterprise%20Search.)
- [ ] 기본으로 학습에 씀: 아니요  
  “By default, your customer data is not used to train models.” · [페이지에서 보기](https://www.notion.com/help/notion-ai-security-practices#:~:text=By%20default%2C%20your%20customer%20data,not%20used%20to%20train%20models.)
- [ ] 기본으로 학습에 씀: 아니요  
  “Notion AI will not use your data to train our models unless you opt in to a request to share your data.” · [페이지에서 보기](https://www.notion.com/product/ai#:~:text=Notion%20AI%20will%20not%20use,request%20to%20share%20your%20data.)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “Notion on desktop, web, & mobile” · [페이지에서 보기](https://www.notion.com/help/notion-ai-faqs#:~:text=Notion%20on%20desktop%2C%20web%2C%20%26%20mobile)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “A faster experience on Notion Desktop.” · [페이지에서 보기](https://www.notion.com/download#:~:text=A%20faster%20experience%20on%20Notion%20Desktop.)
- [ ] ✓ 기획하고 같이 일하기 — PRD 등 문서 초안 생성  
  “Improve writing or generate drafts with AI blocks directly in your pages.” · [페이지에서 보기](https://www.notion.com/product/ai#:~:text=Improve%20writing%20or%20generate%20drafts,blocks%20directly%20in%20your%20pages.)
- [ ] ✓ 기획하고 같이 일하기 — 이슈·작업 관리  
  “Organize hundreds or thousands of items in one place, like projects or tasks” · [페이지에서 보기](https://www.notion.com/pricing#:~:text=Organize%20hundreds%20or%20thousands%20of,place%2C%20like%20projects%20or%20tasks)
- [ ] ✓ 업무 자동화·에이전트 연결 — 앱끼리 연결하는 워크플로  
  “With Custom Agents, you build shared workflows that automate recurring work for your team” · [페이지에서 보기](https://www.notion.com/help/custom-agent#:~:text=With%20Custom%20Agents%2C%20you%20build,recurring%20work%20for%20your%20team)
- [ ] ✓ 업무 자동화·에이전트 연결 — 앱끼리 연결하는 워크플로  
  “They run inside Notion and connect across Slack, Mail, Calendar, and more!” · [페이지에서 보기](https://www.notion.com/product/agents#:~:text=They%20run%20inside%20Notion%20and,Slack%2C%20Mail%2C%20Calendar%2C%20and%20more%21)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “Run on a schedule (daily, weekly, monthly, weekends only, and more).” · [페이지에서 보기](https://www.notion.com/help/custom-agent#:~:text=Run%20on%20a%20schedule%20%28daily%2C,monthly%2C%20weekends%20only%2C%20and%20more%29.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “Connect to external apps via the Model Context Protocol.” · [페이지에서 보기](https://www.notion.com/product/agents#:~:text=Connect%20to%20external%20apps%20via%20the%20Model%20Context%20Protocol.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 기획하고 같이 일하기
- [ ] 한 줄 설명: 문서·할 일 데이터베이스를 쓰는 협업 공간에 AI가 들어 있어요. 문서 초안을 쓰고, 정해 둔 일정에 맞춰 반복 업무를 돌리는 에이전트를 만들 수 있어요
- [ ] 시작 3단계: 1) Notion에 가입해서 워크스페이스 만들기 2) 페이지에서 스페이스 키나 Notion Agent 채팅으로 문서 초안·요약 부탁하기 3) 반복 업무는 Business 요금제에서 Custom Agent를 만들어 일정이나 이벤트 트리거를 걸기
- [ ] 주의할 점: Free·Plus 요금제는 AI를 체험할 만큼만 쓸 수 있어요. AI를 제대로 쓰려면 Business 이상이에요 / Custom Agents는 요금제와 별도로 Notion 크레딧을 써요 / Notion 자체는 문서·협업 도구이고 AI는 그 안의 기능이에요

**5. Claude 메모**

- 유료 가격: 가격 페이지는 기본으로 '연 결제'가 선택된 상태로 읽혀서(Plus $10, Business $20) billing=yearly로 두었어요. 페이지 안 가격 데이터(화면 글자가 아님)에는 월 결제 Plus $12, Business $24로 보여요. 월 결제 기준이 필요하면 J가 확인해서 바꿔 주세요.
- 유료 가격 기준 요금제: Notion AI(Notion Agent·회의록·검색)는 Business부터 포함이라 Business $20을 넣었어요. Notion 자체의 가장 싼 유료 요금제는 Plus $10이지만 AI는 체험용만이에요. 어느 쪽으로 할지 J가 정해 주세요.
- Custom Agents는 Notion 크레딧(1,000크레딧당 10달러)을 따로 써요. 무료 요금제(Free)에도 AI 체험 사용량이 있어서 free=true로 했어요.
- 학습 정책: '기본으로 고객 데이터를 학습에 쓰지 않는다', '데이터 공유 요청에 동의(opt in)할 때만 쓴다'는 문장이 있어 trains=no로 했어요. 끄는 설정 얘기가 아니라서 opt_out은 unknown이에요.
- 오픈소스 여부: 공식 페이지에 관련 문장이 없어 null + todo예요.
- 쓰는 형태: 웹·데스크톱(macOS·Windows). 웹 근거는 도움말 메뉴 제목('Notion on desktop, web, & mobile')이에요. 모바일 앱도 있지만 forms 목록에 없어 뺐어요. 개발자 플랫폼 CLI(Workers 배포용)는 Notion AI 사용 형태가 아니라 넣지 않았어요.
- 기능 체크리스트: planning 2개(문서 초안, 이슈·작업 관리 - 근거는 '프로젝트나 할 일을 한곳에 정리' 데이터베이스 문장). 화이트보드·실시간 공동 편집은 AI 페이지에서 직접 소개하는 문장을 못 찾아 뺐어요(이미지 생성으로 다이어그램을 만든다는 문장은 있음). automation 3개(Custom Agents 워크플로·Slack/메일/캘린더 연결, 일정 트리거, MCP 연결). '워크플로 안에 AI 단계'는 Custom Agent 자체가 AI라 애매해서 뺐어요.
- AI 여부(partial: 문서·협업 도구의 일부), 섹션(official), 대표 목적(planning)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote notion --verified YYYY-MM-DD --dev
```

<a id="dev-miro"></a>
### Miro AI (`miro`) · 개발자용

공식 주소: https://miro.com/ai/  
공식 도메인: `miro.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (17개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Yes, Miro has a free plan with unlimited team members.” · [페이지에서 보기](https://miro.com/pricing/#:~:text=Yes%2C%20Miro%20has%20a%20free%20plan%20with%20unlimited%20team%20members.)
- [ ] 무료 한도: 편집 가능한 보드 3개, AI 크레딧 월 10개  
  “You get up to 3 editable boards and with 10 credits per month you have the ability to try AI for generating diagrams, tables, and summaries.” · [페이지에서 보기](https://miro.com/pricing/#:~:text=You%20get%20up%20to%203,generating%20diagrams%2C%20tables%2C%20and%20summaries.)
- [ ] 유료 가격: 연 8달러부터  
  “For small teams collaborating regularly with unlimited boards $ 8 /month per member, billed yearly” · [페이지에서 보기](https://miro.com/pricing/#:~:text=For%20small%20teams%20collaborating%20regularly,%2Fmonth%20per%20member%2C%20billed%20yearly)
- [ ] 결제 주기: yearly  
  “Annual billing saves 20% over monthly.” · [페이지에서 보기](https://miro.com/pricing/#:~:text=Annual%20billing%20saves%2020%25%20over%20monthly.)
- [ ] 기본으로 학습에 씀: 아니요  
  “Does Miro use my data to train AI? No, your data is not used to train Miro AI models.” · [페이지에서 보기](https://miro.com/pricing/#:~:text=Does%20Miro%20use%20my%20data,to%20train%20Miro%20AI%20models.)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “Collaborate anywhere with Miro on all of your devices” · [페이지에서 보기](https://miro.com/apps/#:~:text=Collaborate%20anywhere%20with%20Miro%20on%20all%20of%20your%20devices)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “Download for Windows 64-bit” · [페이지에서 보기](https://miro.com/apps/#:~:text=Download%20for%20Windows%2064%2Dbit)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “Miro Lite is a whiteboard online, great for creating quick sketches, brainstorming ideas, and drawing basic flowcharts and diagrams. It has the same basic features as Miro” · [페이지에서 보기](https://miro.com/online-whiteboard/#:~:text=Miro%20Lite%20is%20a%20whiteboard,same%20basic%20features%20as%20Miro)
- [ ] ✓ 기획하고 같이 일하기 — PRD 등 문서 초안 생성  
  “You've created a Flow that turns brainstorms into PRDs in minutes not hours?” · [페이지에서 보기](https://miro.com/ai/flows/#:~:text=You%27ve%20created%20a%20Flow%20that,PRDs%20in%20minutes%20not%20hours%3F)
- [ ] ✓ 기획하고 같이 일하기 — 이슈·작업 관리  
  “Data tables with nesting and tree views to organize and track more complex work across teams and initiatives” · [페이지에서 보기](https://miro.com/pricing/#:~:text=Data%20tables%20with%20nesting%20and,work%20across%20teams%20and%20initiatives)
- [ ] ✓ 기획하고 같이 일하기 — 이슈·작업 관리  
  “Plan sprints and roadmaps on your canvas with Jira, Asana, Linear, ClickUp, Azure, and more with two-way sync included” · [페이지에서 보기](https://miro.com/pricing/#:~:text=Plan%20sprints%20and%20roadmaps%20on,more%20with%20two%2Dway%20sync%20included)
- [ ] ✓ 기획하고 같이 일하기 — 화이트보드·다이어그램  
  “4,700+ shapes to map technical systems, cloud infrastructure, and business processes with Mermaid, UML, AWS, BPMN, and more” · [페이지에서 보기](https://miro.com/pricing/#:~:text=4%2C700%2B%20shapes%20to%20map%20technical,UML%2C%20AWS%2C%20BPMN%2C%20and%20more)
- [ ] ✓ 기획하고 같이 일하기 — 실시간 공동 편집  
  “Work with AI as a team – multiple cursors, simultaneous edits, full visibility.” · [페이지에서 보기](https://miro.com/ai/flows/#:~:text=Work%20with%20AI%20as%20a,cursors%2C%20simultaneous%20edits%2C%20full%20visibility.)
- [ ] ✓ 화면 디자인·시안 만들기 — 문장으로 화면 시안 생성  
  “Kickstart your design process by generating initial prototype flows and screen variations from simple text prompts, screenshots, or existing low-fidelity designs.” · [페이지에서 보기](https://miro.com/ai/prototype-ai/#:~:text=Kickstart%20your%20design%20process%20by,screenshots%2C%20or%20existing%20low%2Dfidelity%20designs.)
- [ ] ✓ 화면 디자인·시안 만들기 — 클릭되는 프로토타입  
  “With minimal manual effort, turn static screens into clickable prototypes, allowing you to visualize user journeys and test navigation early.” · [페이지에서 보기](https://miro.com/ai/prototype-ai/#:~:text=With%20minimal%20manual%20effort%2C%20turn,journeys%20and%20test%20navigation%20early.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 워크플로 안에 AI 단계 넣기  
  “Visual, multi-step AI workflows your whole team can build and run – together.” · [페이지에서 보기](https://miro.com/ai/#:~:text=Visual%2C%20multi%2Dstep%20AI%20workflows%20your,build%20and%20run%20%E2%80%93%20together.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “Connect Miro to tools like Slack, Jira and Microsoft Copilot – or set up custom connections with your own tools. And when work needs to happen outside Miro, Flows can take action there too.” · [페이지에서 보기](https://miro.com/ai/flows/#:~:text=Connect%20Miro%20to%20tools%20like,can%20take%20action%20there%20too.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 기획하고 같이 일하기
- [ ] 한 줄 설명: 팀이 같이 쓰는 화이트보드에 AI가 붙어 있어요. 보드 내용으로 다이어그램·기획 문서·클릭되는 프로토타입을 만들고, 여러 단계 AI 워크플로를 짤 수 있어요
- [ ] 시작 3단계: 1) Miro에 무료로 가입해서 보드 만들기 2) 보드에 메모·자료를 올리고 AI로 다이어그램이나 요약, 기획 문서 만들어 보기 3) 화면 아이디어는 문장이나 스크린샷으로 프로토타입을 생성해 팀과 같이 다듬기
- [ ] 주의할 점: 무료 요금제는 편집 가능한 보드가 3개뿐이고 AI 크레딧도 월 10개라 맛보기 수준이에요 / 프로토타입 생성·AI 워크플로·데이터 테이블은 Business 요금제 기능으로 소개돼 있어요 / Miro 자체는 화이트보드 협업 도구이고 AI는 그 안의 기능이에요

**5. Claude 메모**

- 유료 가격: 가격 페이지 글자로는 Starter '$8 /month per member, billed yearly'만 보여요. 월 결제 가격은 화면 전환 버튼(스크립트) 뒤에 있어 못 읽었어요. 그래서 paid_from_usd=8, billing=yearly예요. 사용자 한 명당 가격이에요.
- 학습 정책: 가격 페이지 FAQ의 'your data is not used to train Miro AI models' 문장으로 trains=no. 끄는 설정 얘기는 없어 opt_out=unknown이에요. 꼭 원문 대조해 주세요.
- 읽지 못한 페이지: help.miro.com(도움말)은 이 환경의 프록시가 접속을 막아서(403) 읽지 못했어요. 그래서 배울 거리는 miro.com의 AI 플레이북 페이지 하나만 넣었어요.
- 쓰는 형태: 데스크톱(macOS·Windows)은 앱 페이지 근거. 웹은 'Miro Lite(가입 없이 쓰는 웹 화이트보드)가 Miro와 같은 기본 기능'이라는 문장밖에 못 찾았어요. Miro 본 서비스가 웹에서 된다는 직접 문장은 없으니 J가 확인해 주세요. 모바일 앱도 있지만 forms 목록에 없어 뺐어요.
- 기능 체크리스트: planning 4개(PRD 초안은 Flows 페이지의 '브레인스토밍을 PRD로 바꾸는 Flow' 문장, 이슈 관리는 Business의 데이터 테이블·Jira 등 양방향 연동 문장이라 약할 수 있어요), design_ui 2개(문장·스크린샷으로 프로토타입 화면 생성, 클릭되는 프로토타입. 컴포넌트·코드 내보내기 문장은 없음), automation 2개(AI 워크플로 Flows, Slack·Jira 등 외부 도구 연결). 일정·이벤트 자동 실행 문장은 없어요. Miro MCP 서버는 '다른 AI 도구가 Miro를 쓰는' 방향이라 tools 근거로는 쓰지 않았어요.
- 보안 메모: miro.com/ai/mcp/ 페이지에 'AI 도구에 붙여 넣으라'는 에이전트용 프롬프트('Help me connect Miro if it isn't connected yet...')가 있었어요. 따르지 않았고 근거로도 쓰지 않았어요.
- AI 여부(partial: 화이트보드 도구의 일부), 섹션(official), 대표 목적(planning)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote miro --verified YYYY-MM-DD --dev
```

<a id="dev-figma"></a>
### Figma (Figma AI·FigJam·Figma Make) (`figma`) · 개발자용

공식 주소: https://www.figma.com/ai/  
공식 도메인: `figma.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (22개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Starter Free Free limited access to Figma products” · [페이지에서 보기](https://www.figma.com/pricing/#:~:text=Starter%20Free%20Free%20limited%20access%20to%20Figma%20products)
- [ ] 무료 한도: Starter 요금제: AI 크레딧 하루 150개, 월 500개까지  
  “150 AI credits/day, up to 500 AI credits/mo” · [페이지에서 보기](https://www.figma.com/pricing/#:~:text=150%20AI%20credits%2Fday%2C%20up%20to%20500%20AI%20credits%2Fmo)
- [ ] 무료 한도: Starter 요금제: AI 크레딧 하루 150개, 월 500개까지  
  “All other seats (Collab, Dev, and View) and users on the Starter plan receive 500 credits/month.” · [페이지에서 보기](https://www.figma.com/ai/#:~:text=All%20other%20seats%20%28Collab%2C%20Dev%2C,Starter%20plan%20receive%20500%20credits%2Fmonth.)
- [ ] 유료 가격: 연 16달러부터  
  “Full seat $16 /mo” · [페이지에서 보기](https://www.figma.com/pricing/#:~:text=Full%20seat%20%2416%20%2Fmo)
- [ ] 유료 가격: 연 16달러부터  
  “3,000 credits/month on the Professional plan” · [페이지에서 보기](https://www.figma.com/ai/#:~:text=3%2C000%20credits%2Fmonth%20on%20the%20Professional%20plan)
- [ ] 기본으로 학습에 씀: 예  
  “For Starter and Professional, content training is set to ‘on’ by default — admins can opt out” · [페이지에서 보기](https://www.figma.com/ai/our-approach/#:~:text=For%20Starter%20and%20Professional%2C%20content,%E2%80%94%20admins%20can%20opt%20out)
- [ ] 학습 끄기 가능: 예  
  “Admins have control over AI content training, which they can adjust with a setting. Admins can turn this setting on or off at any time.” · [페이지에서 보기](https://www.figma.com/ai/our-approach/#:~:text=Admins%20have%20control%20over%20AI,or%20off%20at%20any%20time.)
- [ ] 학습 메모: Starter·Professional은 콘텐츠 학습이 처음부터 켜져 있고 관리자가 끌 수 있어요. Organization·Enterprise는 처음부터 꺼져 있어요  
  “For Organization and Enterprise, content training is set to ‘off’ by default” · [페이지에서 보기](https://www.figma.com/ai/our-approach/#:~:text=For%20Organization%20and%20Enterprise%2C%20content,set%20to%20%E2%80%98off%E2%80%99%20by%20default)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “The Figma interface is available in the following languages across web, desktop, and mobile apps:” · [페이지에서 보기](https://www.figma.com/downloads/#:~:text=The%20Figma%20interface%20is%20available,web%2C%20desktop%2C%20and%20mobile%20apps%3A)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “Desktop app for macOS” · [페이지에서 보기](https://www.figma.com/downloads/#:~:text=Desktop%20app%20for%20macOS)
- [ ] ✓ 화면 디자인·시안 만들기 — 문장으로 화면 시안 생성  
  “Use the Figma agent to generate new design directions, create diagrams, edit images, search your files, and more.” · [페이지에서 보기](https://www.figma.com/ai/#:~:text=Use%20the%20Figma%20agent%20to,search%20your%20files%2C%20and%20more.)
- [ ] ✓ 화면 디자인·시안 만들기 — 컴포넌트·디자인 시스템  
  “Create a reusable design component out of any collection of objects or layers.” · [페이지에서 보기](https://www.figma.com/pricing/#:~:text=Create%20a%20reusable%20design%20component,collection%20of%20objects%20or%20layers.)
- [ ] ✓ 화면 디자인·시안 만들기 — 컴포넌트·디자인 시스템  
  “Create design systems with shared assets for your team to use.” · [페이지에서 보기](https://www.figma.com/pricing/#:~:text=Create%20design%20systems%20with%20shared,for%20your%20team%20to%20use.)
- [ ] ✓ 화면 디자인·시안 만들기 — 클릭되는 프로토타입  
  “Create prototypes with interactive overlays that simulate how a user may interact with your design.” · [페이지에서 보기](https://www.figma.com/pricing/#:~:text=Create%20prototypes%20with%20interactive%20overlays,may%20interact%20with%20your%20design.)
- [ ] ✓ 화면 디자인·시안 만들기 — 코드로 내보내기  
  “Turn your design into a code-backed prototype, or build it into production with Figma’s MCP server.” · [페이지에서 보기](https://www.figma.com/ai/#:~:text=Turn%20your%20design%20into%20a,production%20with%20Figma%E2%80%99s%20MCP%20server.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 문장으로 앱 생성  
  “Generate a functional prototype or web app via prompt.” · [페이지에서 보기](https://www.figma.com/pricing/#:~:text=Generate%20a%20functional%20prototype%20or%20web%20app%20via%20prompt.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 백엔드·DB·인증 포함  
  “Connect to Supabase to add user authentication, store user data, connect private APIs, and more.” · [페이지에서 보기](https://www.figma.com/pricing/#:~:text=Connect%20to%20Supabase%20to%20add,connect%20private%20APIs%2C%20and%20more.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 바로 배포  
  “Publish your functional prototype or web app as a website with a dedicated URL.” · [페이지에서 보기](https://www.figma.com/pricing/#:~:text=Publish%20your%20functional%20prototype%20or,website%20with%20a%20dedicated%20URL.)
- [ ] ✓ 말로 설명해서 앱 통째로 만들기 — 코드 내보내기·GitHub 연동  
  “Create a pull request from Figma Make to ship to production.” · [페이지에서 보기](https://www.figma.com/ai/#:~:text=Create%20a%20pull%20request%20from,Make%20to%20ship%20to%20production.)
- [ ] ✓ 기획하고 같이 일하기 — 화이트보드·다이어그램  
  “Work through complex user flows, processes, and systems with shapes and connectors that snap to the grid.” · [페이지에서 보기](https://www.figma.com/figjam/#:~:text=Work%20through%20complex%20user%20flows%2C,that%20snap%20to%20the%20grid.)
- [ ] ✓ 기획하고 같이 일하기 — 실시간 공동 편집  
  “From brainstorm to build and everything in between, FigJam makes it easy for teams to collaborate in real time.” · [페이지에서 보기](https://www.figma.com/figjam/#:~:text=From%20brainstorm%20to%20build%20and,to%20collaborate%20in%20real%20time.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “Connect to external tools via the MCP, allowing you to work with documents, tasks, and data from other apps as context for your app or prototype.” · [페이지에서 보기](https://www.figma.com/make/#:~:text=Connect%20to%20external%20tools%20via,for%20your%20app%20or%20prototype.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 화면 디자인·시안 만들기
- [ ] 한 줄 설명: UI 디자인 도구에 AI가 들어 있어요. 에이전트로 시안을 만들고, Figma Make에서는 문장으로 프로토타입·웹앱을 만들어 바로 게시할 수 있어요. FigJam 화이트보드도 함께 써요
- [ ] 시작 3단계: 1) Figma에 무료(Starter)로 가입하기 2) 관리자 설정에서 콘텐츠 학습(Content training)을 끌지 먼저 정하기 3) 디자인 파일에서 Figma 에이전트로 시안을 만들거나, Figma Make에 만들 앱을 문장으로 설명하기
- [ ] 주의할 점: 무료·Professional 팀은 내 디자인이 AI 학습에 쓰이는 설정이 기본으로 켜져 있어요 / AI 기능은 크레딧을 쓰고, 무료는 월 500크레딧까지예요 / Figma Make에서 기존 코드베이스로 PR을 올리는 기능은 베타·준비 중으로 소개돼 있어요

**5. Claude 메모**

- 한 초안으로 묶음: 지시대로 Figma Design의 AI, FigJam, Figma Make를 'figma' 하나로 넣었어요.
- 유료 가격: 가격 페이지는 'Annual(연 결제)'이 선택된 상태로 읽혀서 Professional Full seat $16/월을 넣고 billing=yearly로 했어요(버튼 설명에 'Annual selected'). 월 결제 가격은 글자로 못 읽었어요. Dev seat $12, Collab seat는 숫자를 못 읽었는데, AI를 제대로 쓰는 좌석은 Full seat이라 그 값을 썼어요. J가 확인해 주세요.
- 학습 정책: Starter·Professional은 '콘텐츠 학습이 기본으로 켜짐, 관리자가 끌 수 있음' → trains=yes, opt_out=yes. Organization·Enterprise는 기본 꺼짐. 같은 페이지의 'We do not use paid files to train AI models'는 커뮤니티의 유료 파일 얘기라 요금제와는 관계없어요. 꼭 원문 대조해 주세요.
- 쓰는 형태: 웹·데스크톱(macOS·Windows). 모바일 앱도 있지만 forms 목록에 없어 뺐어요. MCP 서버는 다른 도구와 연결하는 통로라 형태로 넣지 않았어요.
- 기능 체크리스트: design_ui 4개(코드 내보내기는 Dev Mode·MCP 서버로 실제 코드로 옮긴다는 문장), app_builders 4개(Figma Make: 문장으로 앱 생성, Supabase 백엔드·인증, URL로 게시, PR 올리기). app_builders.export_code 근거('Create a pull request from Figma Make')는 로컬 코드베이스용 Make가 베타·'Coming soon'으로 표시된 기능이에요. planning 2개는 FigJam(화이트보드, 실시간 협업). automation.tools(Make의 MCP 커넥터)는 업무 자동화 목적과는 거리가 있어 J가 뺄지 정해 주세요.
- 오픈소스 여부: 공식 페이지에 관련 문장이 없어 null + todo예요.
- AI 여부(partial: 디자인 도구의 일부. Figma Make만 보면 yes에 가까움), 섹션(official), 대표 목적(design_ui, 대안 app_builders)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote figma --verified YYYY-MM-DD --dev
```

<a id="dev-atlassian-rovo"></a>
### Atlassian Rovo (`atlassian-rovo`) · 개발자용

공식 주소: https://www.atlassian.com/software/rovo  
공식 도메인: `atlassian.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (14개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 안 돼요  
  “Rovo is available to all customers with a Standard, Premium, or Enterprise Cloud plan of Jira, Confluence, Service Collection, or Teamwork Collection.” · [페이지에서 보기](https://www.atlassian.com/software/rovo#:~:text=Rovo%20is%20available%20to%20all,Service%20Collection%2C%20or%20Teamwork%20Collection.)
- [ ] 무료 한도: 무료 없음  
  “Customers can trial Rovo through a trial of our Standard, Premium, or Enterprise plan of Jira, Confluence, and Jira Service Management.” · [페이지에서 보기](https://www.atlassian.com/software/rovo/pricing#:~:text=Customers%20can%20trial%20Rovo%20through,Confluence%2C%20and%20Jira%20Service%20Management.)
- [ ] 학습 메모: 외부 AI 회사(OpenAI·Anthropic·Google 등)는 입력·출력을 보관하거나 학습에 쓰지 않는다고 해요. Atlassian은 데이터 기여 설정에 따라 메타데이터로 자체 오픈 모델을 미세 조정할 수 있다고 해요  
  “Our third-party hosted LLM partners, including OpenAI, Anthropic, and Google, operate under strict zero data retention (ZDR) agreements.” · [페이지에서 보기](https://www.atlassian.com/trust/ai#:~:text=Our%20third%2Dparty%20hosted%20LLM%20partners%2C,zero%20data%20retention%20%28ZDR%29%20agreements.)
- [ ] 학습 메모: 외부 AI 회사(OpenAI·Anthropic·Google 등)는 입력·출력을 보관하거나 학습에 쓰지 않는다고 해요. Atlassian은 데이터 기여 설정에 따라 메타데이터로 자체 오픈 모델을 미세 조정할 수 있다고 해요  
  “This use of contributed data is subject to data contribution settings, and we apply robust safeguards, including de-identifying and aggregating all contributed metadata before use.” · [페이지에서 보기](https://www.atlassian.com/trust/ai#:~:text=This%20use%20of%20contributed%20data,all%20contributed%20metadata%20before%20use.)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “Access Rovo across your Atlassian apps, the browser extension, and everywhere else you work.” · [페이지에서 보기](https://www.atlassian.com/software/rovo#:~:text=Access%20Rovo%20across%20your%20Atlassian,and%20everywhere%20else%20you%20work.)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “going directly to chat.rovo.com” · [페이지에서 보기](https://www.atlassian.com/software/rovo/pricing#:~:text=going%20directly%20to%20chat.rovo.com)
- [ ] 쓰는 형태: 웹, 데스크톱 앱  
  “Download Rovo for mobile and desktop to chat, run agents, and access your team’s knowledge, wherever you work.” · [페이지에서 보기](https://www.atlassian.com/software/rovo/downloads#:~:text=Download%20Rovo%20for%20mobile%20and,team%E2%80%99s%20knowledge%2C%20wherever%20you%20work.)
- [ ] ✓ 기획하고 같이 일하기 — PRD 등 문서 초안 생성  
  “Rovo works alongside your team wherever they work—suggesting, drafting, and surfacing help before you have to ask.” · [페이지에서 보기](https://www.atlassian.com/software/rovo#:~:text=Rovo%20works%20alongside%20your%20team,before%20you%20have%20to%20ask.)
- [ ] ✓ 기획하고 같이 일하기 — 이슈·작업 관리  
  “Dig deeper, speed up onboarding, and take action faster - create Jira tickets, send Slack messages, or set up Google Calendar meetings—just ask!” · [페이지에서 보기](https://www.atlassian.com/software/rovo/features#:~:text=Dig%20deeper%2C%20speed%20up%20onboarding%2C,up%20Google%20Calendar%20meetings%E2%80%94just%20ask%21)
- [ ] ✓ 업무 자동화·에이전트 연결 — 앱끼리 연결하는 워크플로  
  “Workflows that trigger agents and actions automatically across your tools.” · [페이지에서 보기](https://www.atlassian.com/software/rovo/features#:~:text=Workflows%20that%20trigger%20agents%20and%20actions%20automatically%20across%20your%20tools.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 워크플로 안에 AI 단계 넣기  
  “Build agents, automations, and apps from a simple prompt in a no-code workspace.” · [페이지에서 보기](https://www.atlassian.com/software/rovo/features#:~:text=Build%20agents%2C%20automations%2C%20and%20apps,prompt%20in%20a%20no%2Dcode%20workspace.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 워크플로 안에 AI 단계 넣기  
  “Workflows that trigger agents and actions automatically across your tools.” · [페이지에서 보기](https://www.atlassian.com/software/rovo/features#:~:text=Workflows%20that%20trigger%20agents%20and%20actions%20automatically%20across%20your%20tools.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “Workflows that trigger agents and actions automatically across your tools.” · [페이지에서 보기](https://www.atlassian.com/software/rovo/features#:~:text=Workflows%20that%20trigger%20agents%20and%20actions%20automatically%20across%20your%20tools.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “Connect your third party SaaS apps to Rovo” · [페이지에서 보기](https://www.atlassian.com/software/rovo#:~:text=Connect%20your%20third%20party%20SaaS%20apps%20to%20Rovo)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `price.paid_from_usd`
- [ ] `privacy.trains_on_input_default`
- [ ] `privacy.opt_out`
- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 업무 자동화·에이전트 연결
- [ ] 한 줄 설명: Jira·Confluence에 들어 있는 AI예요. 회사 문서와 연결된 앱을 검색해 답하고, 채팅으로 Jira 티켓을 만들고, 트리거로 도는 에이전트·자동화를 만들 수 있어요
- [ ] 시작 3단계: 1) Jira나 Confluence Cloud를 Standard 이상 요금제(또는 체험판)로 준비하기 2) 앱 안의 Rovo Search·Chat이나 chat.rovo.com에서 질문하고 Jira 티켓 만들기를 부탁하기 3) Rovo Studio에서 문장으로 에이전트·자동화를 만들고 트리거 걸기
- [ ] 주의할 점: Jira·Confluence 무료 요금제에서는 Rovo 검색·채팅·에이전트를 쓸 수 없어요 / AI 사용량은 Rovo 크레딧으로 계산되고, 기본 설정에서는 한도를 넘으면 추가 요금이 붙어요 / 코딩 에이전트 Rovo Dev는 요금과 크레딧이 따로예요

**5. Claude 메모**

- 무료 여부: Rovo(검색·채팅·에이전트)는 Jira·Confluence 등의 Standard 이상 Cloud 요금제에 들어 있어서 free=false로 했어요. 다만 Teamwork Collection 무료 요금제에 'AI-driven reporting (Create interactive charts with Rovo...)'이 있고, 크레딧이 떨어져도 'Rovo Search in Atlassian apps, summaries' 같은 무료 AI 기능은 계속된다는 문장이 있어요. J가 판단해 주세요.
- 유료 가격(todo): 가장 싼 길은 Jira Standard일 텐데 Jira 가격 페이지가 스크립트로만 그려져 숫자를 못 읽었어요. 읽힌 값은 Teamwork Collection Standard '$14.02 per user / month'(월 결제 화면)뿐이에요(https://www.atlassian.com/collections/teamwork/pricing). 그래서 null + todo로 두었어요. billing=monthly는 자리값이에요.
- 학습 정책(todo): '외부 LLM 회사는 학습에 쓰지 않는다'는 문장과 'Atlassian이 데이터 기여 설정(data contribution settings)에 따라 메타데이터로 자체 오픈 모델을 미세 조정할 수 있다'는 문장만 있어요. 그 설정의 기본값과 끄는 방법이 안 나와서 둘 다 unknown이에요.
- 쓰는 형태: 웹(Atlassian 앱 안, chat.rovo.com, 브라우저 확장)·데스크톱(macOS·Windows). 모바일도 있지만 forms 목록에 없어 뺐어요. 홈 페이지의 'In the command line → Rovo Dev'와 가격 페이지의 'Rovo CLI'는 Rovo Dev(코딩 에이전트, 요금 따로) 쪽이라 cli는 넣지 않았어요. Rovo Dev는 coding_agents·code_review용으로 따로 초안을 만들지 J가 정해 주세요.
- 기능 체크리스트: planning 2개(문서 초안 근거는 '제안하고 초안을 쓴다'는 일반 문장이라 약해요. PRD라는 말은 없음. 이슈 관리는 채팅으로 Jira 티켓 만들기). 화이트보드·공동 편집은 Confluence 기능이라 Rovo 기능으로 넣지 않았어요. automation 4개는 Rovo Studio의 'Automations: Workflows that trigger agents and actions automatically across your tools' 한 문장에 기대고 있어요(트리거가 일정인지 이벤트인지는 안 나옴). 외부 도구 연결 근거는 Rovo 커넥터(서드파티 SaaS 연결) 문장이에요. Atlassian MCP 서버는 '다른 AI 도구가 Atlassian을 쓰는' 방향이라 근거로 쓰지 않았어요.
- 오픈소스 여부: 공식 페이지에 관련 문장이 없어 null + todo예요.
- AI 여부(yes), 섹션(official), 대표 목적(automation, 대안 planning)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote atlassian-rovo --verified YYYY-MM-DD --dev
```

<a id="dev-uizard"></a>
### Uizard (`uizard`) · 개발자용

공식 주소: https://uizard.io/  
공식 도메인: `uizard.io`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (17개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free for everyone $0 For students and hobbyists” · [페이지에서 보기](https://uizard.io/pricing/#:~:text=Free%20for%20everyone%20%240%20For%20students%20and%20hobbyists)
- [ ] 무료 한도: AI 생성 월 3번, 프로젝트 2개  
  “3 AI generations per month” · [페이지에서 보기](https://uizard.io/pricing/#:~:text=3%20AI%20generations%20per%20month)
- [ ] 무료 한도: AI 생성 월 3번, 프로젝트 2개  
  “2 projects” · [페이지에서 보기](https://uizard.io/pricing/#:~:text=2%20projects)
- [ ] 유료 가격: 연 12달러부터  
  “$12 per month (if billed annually)” · [페이지에서 보기](https://uizard.io/pricing/#:~:text=%2412%20per%20month%20%28if%20billed%20annually%29)
- [ ] 결제 주기: yearly  
  “Billed annually Save 40% $12 per month For startups and organizations” · [페이지에서 보기](https://uizard.io/pricing/#:~:text=Billed%20annually%20Save%2040%25%20%2412,month%20For%20startups%20and%20organizations)
- [ ] 기본으로 학습에 씀: 예  
  “Design of graphical user interfaces, prototypes, design systems, design files, wireframes, screenshots created and uploaded by users of the Free and Pro plans may be used for the purpose of fine-tuning and training machine learning AI models to improve the overall quality of the Services.” · [페이지에서 보기](https://uizard.io/terms-of-service/#:~:text=Design%20of%20graphical%20user%20interfaces%2C,overall%20quality%20of%20the%20Services.)
- [ ] 학습 메모: Free·Pro 요금제에서 만든·올린 디자인은 AI 모델 학습에 쓰일 수 있어요. Business·Enterprise는 쓰지 않는다고 해요  
  “Design of graphical user interfaces, prototypes, design systems, design files, wireframes, screenshots created and uploaded by customers of the Business and Enterprise plans are not utilized for fine-tuning and training machine learning AI models.” · [페이지에서 보기](https://uizard.io/terms-of-service/#:~:text=Design%20of%20graphical%20user%20interfaces%2C,training%20machine%20learning%20AI%20models.)
- [ ] 쓰는 형태: 웹  
  “in connection the provision of our online services found at uizard.io” · [페이지에서 보기](https://uizard.io/privacy/#:~:text=in%20connection%20the%20provision%20of,online%20services%20found%20at%20uizard.io)
- [ ] 쓰는 형태: 웹  
  “personal computer with appropriate software, including updated operating systems, compatible web browsers and the like” · [페이지에서 보기](https://uizard.io/terms-of-service/#:~:text=personal%20computer%20with%20appropriate%20software%2C,web%20browsers%20and%20the%20like)
- [ ] ✓ 화면 디자인·시안 만들기 — 문장으로 화면 시안 생성  
  “No ideas left behind... generate multi-screen, editable prototypes in seconds using simple text.” · [페이지에서 보기](https://uizard.io/#:~:text=No%20ideas%20left%20behind...%20generate,in%20seconds%20using%20simple%20text.)
- [ ] ✓ 화면 디자인·시안 만들기 — 문장으로 화면 시안 생성  
  “Generate screen design from text” · [페이지에서 보기](https://uizard.io/pricing/#:~:text=Generate%20screen%20design%20from%20text)
- [ ] ✓ 화면 디자인·시안 만들기 — 컴포넌트·디자인 시스템  
  “Generate UIs that match your design system and brand guidelines with brand kit.” · [페이지에서 보기](https://uizard.io/autodesigner/#:~:text=Generate%20UIs%20that%20match%20your,brand%20guidelines%20with%20brand%20kit.)
- [ ] ✓ 화면 디자인·시안 만들기 — 컴포넌트·디자인 시스템  
  “Team asset libraries” · [페이지에서 보기](https://uizard.io/pricing/#:~:text=Team%20asset%20libraries)
- [ ] ✓ 화면 디자인·시안 만들기 — 클릭되는 프로토타입  
  “Essentially, Autodesigner 2.0 empowers you to go from idea to sharable, interactive prototype with plain english.” · [페이지에서 보기](https://uizard.io/autodesigner/#:~:text=Essentially%2C%20Autodesigner%202.0%20empowers%20you,interactive%20prototype%20with%20plain%20english.)
- [ ] ✓ 화면 디자인·시안 만들기 — 코드로 내보내기  
  “Developer handoff in CSS and React components” · [페이지에서 보기](https://uizard.io/pricing/#:~:text=Developer%20handoff%20in%20CSS%20and%20React%20components)
- [ ] ✓ 기획하고 같이 일하기 — 실시간 공동 편집  
  “Collaborate in real-time with AI and your entire product team.” · [페이지에서 보기](https://uizard.io/#:~:text=Collaborate%20in%20real%2Dtime%20with%20AI%20and%20your%20entire%20product%20team.)
- [ ] ✓ 기획하고 같이 일하기 — 실시간 공동 편집  
  “Multiplayer real-time collaboration” · [페이지에서 보기](https://uizard.io/pricing/#:~:text=Multiplayer%20real%2Dtime%20collaboration)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 화면 디자인·시안 만들기
- [ ] 한 줄 설명: 만들 앱을 문장으로 설명하거나 스크린샷·손그림을 올리면 여러 화면짜리 UI 시안과 클릭되는 프로토타입을 만들어 주는 AI 디자인 도구예요
- [ ] 시작 3단계: 1) Uizard에 무료로 가입하기 2) 기기 종류를 고르고 만들 앱을 문장으로 설명해 화면 시안 만들기 3) 화면을 고치고 연결해 프로토타입으로 공유하기 (유료는 React·CSS로 개발자에게 넘기기)
- [ ] 주의할 점: 무료·Pro 요금제에서 만든 디자인은 AI 학습에 쓰일 수 있다고 약관에 적혀 있어요 / 무료는 AI 생성이 월 3번뿐이고, 최신 AI 엔진(Autodesigner 2.0)은 Pro부터예요 / 코드는 개발자 전달용(React·CSS)이라 완성된 앱이 만들어지는 건 아니에요

**5. Claude 메모**

- 유료 가격: 가격 페이지에는 Pro '$12 per month (if billed annually)'만 있고 월 결제 가격은 안 보여요. 그래서 paid_from_usd=12, billing=yearly예요.
- 학습 정책: 이용 약관 8.14.1에 'Free·Pro 요금제 사용자가 만들거나 올린 디자인은 AI 모델 학습에 쓰일 수 있다'고 있어 trains=yes로 했어요(Business·Enterprise는 안 씀). 개인정보 처리방침에는 AI 학습 얘기가 없어요. 끄는 설정 얘기는 없어 opt_out=unknown이에요. 꼭 원문 대조해 주세요.
- 회사: 개인정보 처리방침·약관의 회사 주소가 'Uizard c/o Miro'로 되어 있어요(Miro 소속으로 보임). Miro 초안과 함께 볼 때 참고하세요.
- 읽지 못한 페이지: 도움말 사이트(support.uizard.io)는 이 환경의 프록시가 접속을 막아서 읽지 못했어요. 배울 거리는 uizard.io 블로그의 공식 사용 가이드 하나만 넣었어요.
- 쓰는 형태: 웹 서비스라는 직접 문장은 없고, '온라인 서비스(uizard.io)'와 약관의 '호환 웹 브라우저' 문장으로 web만 넣었어요. 데스크톱 앱 페이지는 못 찾았어요.
- 기능 체크리스트: design_ui 4개(컴포넌트 근거는 브랜드 키트로 디자인 시스템에 맞춰 생성 + 가격표의 'Team asset libraries' 행, 코드 내보내기는 유료 요금제의 React·CSS 개발자 전달). planning.realtime은 가격표의 'Multiplayer real-time collaboration'. 가격표의 기능별 요금제 표시(✓)는 글자로 안 읽혀서 어느 요금제에 있는지는 확인 못 했어요.
- 오픈소스 여부: 공식 페이지에 관련 문장이 없어 null + todo예요.
- AI 여부(yes: 'AI-first'로 시작한 디자인 도구), 섹션(official), 대표 목적(design_ui)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote uizard --verified YYYY-MM-DD --dev
```

<a id="dev-cursor"></a>
### Cursor (`cursor`) · 개발자용

공식 주소: https://cursor.com  
공식 도메인: `cursor.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (21개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free $0 /month Get started Get started with: Limited AI usage AI Features Limited agent requests Limited Chat requests” · [페이지에서 보기](https://cursor.com/pricing#:~:text=Free%20%240%20%2Fmonth%20Get%20started,agent%20requests%20Limited%20Chat%20requests)
- [ ] 무료 한도: 에이전트·채팅 요청 수가 제한된 무료 요금제  
  “Free $0 /month Get started Get started with: Limited AI usage AI Features Limited agent requests Limited Chat requests” · [페이지에서 보기](https://cursor.com/pricing#:~:text=Free%20%240%20%2Fmonth%20Get%20started,agent%20requests%20Limited%20Chat%20requests)
- [ ] 유료 가격: 월 8달러부터  
  “Plus $8 /month Get Plus Our introductory plan: Shared AI usage pool AI Features Cursor” · [페이지에서 보기](https://cursor.com/pricing#:~:text=Plus%20%248%20%2Fmonth%20Get%20Plus,usage%20pool%20AI%20Features%20Cursor)
- [ ] 유료 가격: 월 8달러부터  
  “\*Only Grok models are available on this plan” · [페이지에서 보기](https://cursor.com/pricing#:~:text=%2AOnly%20Grok%20models%20are%20available%20on%20this%20plan)
- [ ] 학습 끄기 가능: 예  
  “Privacy Mode is available to anyone (free or Pro). New team members inherit the team's Privacy Mode settings. When enabled, we will not train on your data.” · [페이지에서 보기](https://cursor.com/security#:~:text=Privacy%20Mode%20is%20available%20to,not%20train%20on%20your%20data.)
- [ ] 학습 끄기 가능: 예  
  “If you choose to turn off “Privacy Mode”: we may use and store codebase data, prompts, editor actions, code snippets, and other code data and actions to improve our AI features and train our models.” · [페이지에서 보기](https://cursor.com/en-US/data-use#:~:text=If%20you%20choose%20to%20turn,features%20and%20train%20our%20models.)
- [ ] 학습 메모: 설정에서 Privacy Mode를 켜면 코드 데이터를 학습에 쓰지 않아요. 끄면 코드·프롬프트를 학습에 쓸 수 있어요  
  “Privacy mode can be enabled in settings or by a team admin. When it is enabled, we guarantee that code data is not used for training by us or our model providers.” · [페이지에서 보기](https://cursor.com/pricing#:~:text=Privacy%20mode%20can%20be%20enabled,us%20or%20our%20model%20providers.)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, 웹, IDE 확장  
  “Download Cursor. Open the app and sign in. Then pick a folder and start with a small task.” · [페이지에서 보기](https://cursor.com/docs/get-started/quickstart#:~:text=Download%20Cursor.%20Open%20the%20app,start%20with%20a%20small%20task.)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, 웹, IDE 확장  
  “Cursor CLI lets you interact with AI agents directly from your terminal to write, review, and modify code.” · [페이지에서 보기](https://cursor.com/docs/cli/overview#:~:text=Cursor%20CLI%20lets%20you%20interact,write%2C%20review%2C%20and%20modify%20code.)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, 웹, IDE 확장  
  “Pick up your Cloud Agent tasks on web or mobile at” · [페이지에서 보기](https://cursor.com/docs/cli/overview#:~:text=Pick%20up%20your%20Cloud%20Agent,on%20web%20or%20mobile%20at)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, 웹, IDE 확장  
  “Use Cursor's AI agent in IntelliJ IDEA, PyCharm, WebStorm, and other JetBrains IDEs through the” · [페이지에서 보기](https://cursor.com/docs/integrations/jetbrains#:~:text=Use%20Cursor%27s%20AI%20agent%20in,other%20JetBrains%20IDEs%20through%20the)
- [ ] ✓ AI와 같이 코드 짜기 — 저장소 전체 읽고 이해  
  “Cursor will search your repo, read relevant files, and summarize how the project fits together.” · [페이지에서 보기](https://cursor.com/docs/get-started/quickstart#:~:text=Cursor%20will%20search%20your%20repo%2C,how%20the%20project%20fits%20together.)
- [ ] ✓ AI와 같이 코드 짜기 — 여러 파일 한 번에 수정  
  “Now that you know the basics, use Plan Mode for bigger changes. It works well when the task spans multiple files, needs research, or needs approval before coding.” · [페이지에서 보기](https://cursor.com/docs/get-started/quickstart#:~:text=Now%20that%20you%20know%20the,or%20needs%20approval%20before%20coding.)
- [ ] ✓ AI와 같이 코드 짜기 — 여러 파일 한 번에 수정  
  “The agent can inspect the full workspace, make coordinated changes, and open pull requests in the repos it changes.” · [페이지에서 보기](https://cursor.com/docs/cloud-agent#:~:text=The%20agent%20can%20inspect%20the,in%20the%20repos%20it%20changes.)
- [ ] ✓ AI와 같이 코드 짜기 — 명령·테스트 실행  
  “Agent is Cursor's assistant that can complete complex coding tasks independently, run terminal commands, and edit code.” · [페이지에서 보기](https://cursor.com/docs/agent/overview#:~:text=Agent%20is%20Cursor%27s%20assistant%20that,terminal%20commands%2C%20and%20edit%20code.)
- [ ] ✓ AI와 같이 코드 짜기 — 결과를 PR로 올리기  
  “Cloud agents produce merge-ready PRs with artifacts to demo their changes.” · [페이지에서 보기](https://cursor.com/docs/cloud-agent#:~:text=Cloud%20agents%20produce%20merge%2Dready%20PRs,artifacts%20to%20demo%20their%20changes.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — PR 자동 리뷰 코멘트  
  “Bugbot analyzes PR diffs and leaves comments with explanations and fix suggestions. It runs automatically on each PR update or manually when triggered.” · [페이지에서 보기](https://cursor.com/docs/bugbot#:~:text=Bugbot%20analyzes%20PR%20diffs%20and,update%20or%20manually%20when%20triggered.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 보안 취약점 검사  
  “Bugbot reviews pull requests and identifies bugs, security issues, and code quality problems.” · [페이지에서 보기](https://cursor.com/docs/bugbot#:~:text=Bugbot%20reviews%20pull%20requests%20and,issues%2C%20and%20code%20quality%20problems.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 수정 제안 바로 적용  
  “Bugbot Autofix automatically spawns a Cloud Agent to fix bugs found during PR reviews.” · [페이지에서 보기](https://cursor.com/docs/bugbot#:~:text=Bugbot%20Autofix%20automatically%20spawns%20a,bugs%20found%20during%20PR%20reviews.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “Scheduled triggers run on a recurring schedule. Choose from preset options or enter a cron expression for precise control.” · [페이지에서 보기](https://cursor.com/docs/cloud-agent/automations#:~:text=Scheduled%20triggers%20run%20on%20a,cron%20expression%20for%20precise%20control.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “MCP connects Cursor to external systems and data. Instead of explaining your project structure repeatedly, integrate directly with your tools.” · [페이지에서 보기](https://cursor.com/docs/mcp#:~:text=MCP%20connects%20Cursor%20to%20external,integrate%20directly%20with%20your%20tools.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: AI와 같이 코드 짜기
- [ ] 한 줄 설명: 에디터 안에서 AI 에이전트에게 코드 작업을 맡기는 AI IDE예요. 터미널 CLI, 클라우드 에이전트, PR 자동 리뷰(Bugbot)도 있어요
- [ ] 시작 3단계: 1) 공식 사이트에서 Cursor 앱을 내려받아 설치하고 로그인하기 2) 작업할 프로젝트 폴더를 열고 설정에서 Privacy Mode 확인하기 3) 에이전트 창에 할 일을 문장으로 적고, 바뀐 diff를 검토하기
- [ ] 주의할 점: Plus(월 8달러) 요금제는 Grok 모델만 쓸 수 있고, 다른 회사 모델은 쓴 만큼 따로 내야 해요 / Privacy Mode를 끄면 코드와 프롬프트가 학습에 쓰일 수 있어요 / 에이전트가 파일을 고치고 명령을 실행하니 바뀐 내용을 꼭 확인하세요

**5. Claude 메모**

- 가격 페이지가 크게 바뀌었어요: 'Cursor is now a part of SpaceX' 이후 요금제가 X(트위터) 구독과 묶여 Free $0 / Plus $8 / Premium $30 / Super $100 / Ultra $200 (모두 /month)이고, 결제는 'X Subscription Corp'이 한다고 적혀 있어요. 꼭 직접 열어 확인해 주세요.
- 유료 가격: 가장 싼 유료는 Plus 월 8달러(구매 링크가 yearly=false)인데, '*Only Grok models are available on this plan', 'Plus is recommended for social creators with limited AI usage'라고 돼 있어요. 클라우드 에이전트·Bugbot 코드 리뷰는 Premium(월 30달러)부터예요(비교 표에서 Free·Plus는 —). 개발자 기준 대표 가격을 30달러로 할지 J가 정해 주세요. 다른 회사 모델은 API 가격으로 따로 청구돼요.
- 무료: 비교 표에서 Cursor Agent 줄은 Free도 ✓, 사용량은 'Limited'예요.
- 학습 정책: Privacy Mode를 켜면 학습 안 함, 끄면 학습에 쓸 수 있음 → opt_out=yes. 처음 기본값(켜짐/꺼짐)을 밝힌 문장은 못 찾아서 trains_on_input_default=unknown이에요.
- 오픈소스 여부: 공식 페이지에 오픈소스라는 말이 없어요. 근거 문장이 없어 null + todo로 뒀어요.
- forms: ide_extension은 JetBrains IDE에서 ACP로 Cursor 에이전트를 쓰는 연동 문서를 근거로 했어요(별도 플러그인 설치 후 사용). 넣을지 J가 판단해 주세요. web은 클라우드 에이전트를 웹·모바일에서 이어 본다는 문장이 근거예요.
- 기능: code_review의 tests(테스트 생성)는 예시 명령('add comprehensive tests')뿐이라 넣지 않았어요. automation의 workflow·ai_step은 해당 문장이 분명하지 않아 뺐어요. 문서에 Design Mode도 있지만 design_ui는 넣지 않았어요.
- docs.cursor.com은 cursor.com/docs로 바뀐 것으로 보여서 cursor.com/docs 문서를 읽었어요. 홈 페이지와 /features는 같은 내용이었어요. 문서에 설치용 curl|bash 명령이 있지만 실행하지 않았어요.
- AI 여부(yes), 섹션(official), 대표 목적(coding_agents)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote cursor --verified YYYY-MM-DD --dev
```

<a id="dev-github-copilot"></a>
### GitHub Copilot (`github-copilot`) · 개발자용

공식 주소: https://github.com/features/copilot  
공식 도메인: `github.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (21개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “This plan includes limited access to a selection of Copilot features allowing you to try AI-powered coding assistance at no cost.” · [페이지에서 보기](https://docs.github.com/en/copilot/get-started/plans#:~:text=This%20plan%20includes%20limited%20access,coding%20assistance%20at%20no%20cost.)
- [ ] 무료 한도: Copilot Free: 자동완성 월 2,000회, 정해진 AI 크레딧, 모델은 자동 선택만  
  “Limited to 2000 completions per month on Copilot Free.” · [페이지에서 보기](https://docs.github.com/en/copilot/get-started/plans#:~:text=Limited%20to%202000%20completions%20per%20month%20on%20Copilot%20Free.)
- [ ] 무료 한도: Copilot Free: 자동완성 월 2,000회, 정해진 AI 크레딧, 모델은 자동 선택만  
  “Copilot Free Free An allowance of GitHub AI Credits Limited Auto model selection only” · [페이지에서 보기](https://docs.github.com/en/copilot/get-started/plans#:~:text=Copilot%20Free%20Free%20An%20allowance,Limited%20Auto%20model%20selection%20only)
- [ ] 유료 가격: 월 10달러부터  
  “Copilot Pro $10 USD per month (free for some users) Base: 1,000 A selection of models” · [페이지에서 보기](https://docs.github.com/en/copilot/get-started/plans#:~:text=Copilot%20Pro%20%2410%20USD%20per,1%2C000%20A%20selection%20of%20models)
- [ ] 기본으로 학습에 씀: 예  
  “plan, GitHub may use your interactions with GitHub features and services—including inputs, outputs, code snippets, and associated context—to train and improve AI models.” · [페이지에서 보기](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#:~:text=plan%2C%20GitHub%20may%20use%20your,train%20and%20improve%20AI%20models.)
- [ ] 학습 끄기 가능: 예  
  “You can opt-out from allowing your data to be used for training in your personal settings for GitHub Copilot.” · [페이지에서 보기](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#:~:text=You%20can%20opt%2Dout%20from%20allowing,personal%20settings%20for%20GitHub%20Copilot.)
- [ ] 학습 메모: 2026년 4월 24일부터 Free·Pro·Pro+·Max는 입력·출력·코드 조각을 학습에 쓸 수 있고 설정에서 끌 수 있어요. Business·Enterprise는 학습에 쓰지 않아요  
  “GitHub does not use Copilot Business or Copilot Enterprise customer data to train AI models.” · [페이지에서 보기](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#:~:text=GitHub%20does%20not%20use%20Copilot,data%20to%20train%20AI%20models.)
- [ ] 쓰는 형태: IDE 확장, CLI, 데스크톱 앱, 웹  
  “In addition to the configuration for the GitHub Copilot plugin in your supported IDE, you can configure settings for GitHub Copilot on GitHub.” · [페이지에서 보기](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#:~:text=In%20addition%20to%20the%20configuration,for%20GitHub%20Copilot%20on%20GitHub.)
- [ ] 쓰는 형태: IDE 확장, CLI, 데스크톱 앱, 웹  
  “All plans include Copilot CLI and the Copilot app.” · [페이지에서 보기](https://docs.github.com/en/copilot/get-started/plans#:~:text=All%20plans%20include%20Copilot%20CLI%20and%20the%20Copilot%20app.)
- [ ] 쓰는 형태: IDE 확장, CLI, 데스크톱 앱, 웹  
  “The GitHub Copilot app is a desktop application for directing agent-driven development.” · [페이지에서 보기](https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/about-github-copilot-agents#:~:text=The%20GitHub%20Copilot%20app%20is,application%20for%20directing%20agent%2Ddriven%20development.)
- [ ] 쓰는 형태: IDE 확장, CLI, 데스크톱 앱, 웹  
  “Copilot Chat in IDEs Inline chat Slash commands Copilot Chat in GitHub Mobile Copilot Chat in GitHub” · [페이지에서 보기](https://docs.github.com/en/copilot/get-started/plans#:~:text=Copilot%20Chat%20in%20IDEs%20Inline,Mobile%20Copilot%20Chat%20in%20GitHub)
- [ ] 쓰는 형태: IDE 확장, CLI, 데스크톱 앱, 웹  
  “The command-line interface (CLI) for GitHub Copilot allows you to use Copilot directly from your terminal.” · [페이지에서 보기](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-cli#:~:text=The%20command%2Dline%20interface%20%28CLI%29%20for,Copilot%20directly%20from%20your%20terminal.)
- [ ] ✓ AI와 같이 코드 짜기 — 저장소 전체 읽고 이해  
  “For example, when you ask an agent to fix a bug, it can search a repository, identify the relevant files, edit the code, run tests, and revise its changes in response to test failures.” · [페이지에서 보기](https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/about-github-copilot-agents#:~:text=For%20example%2C%20when%20you%20ask,in%20response%20to%20test%20failures.)
- [ ] ✓ AI와 같이 코드 짜기 — 여러 파일 한 번에 수정  
  “Agent mode in supported IDEs provides a collaborative experience in your local development environment. The agent can identify files to change, propose edits, run commands, and respond to your feedback while you work.” · [페이지에서 보기](https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/about-github-copilot-agents#:~:text=Agent%20mode%20in%20supported%20IDEs,your%20feedback%20while%20you%20work.)
- [ ] ✓ AI와 같이 코드 짜기 — 명령·테스트 실행  
  “GitHub Copilot CLI lets you work with an agent from your terminal. The agent can answer questions, modify files, run commands, and complete multi-step tasks in local or sandboxed environments.” · [페이지에서 보기](https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/about-github-copilot-agents#:~:text=GitHub%20Copilot%20CLI%20lets%20you,in%20local%20or%20sandboxed%20environments.)
- [ ] ✓ AI와 같이 코드 짜기 — 결과를 PR로 올리기  
  “Copilot cloud agent allows you to assign Copilot to GitHub issues, or prompt Copilot to undertake a task autonomously, such as deep research of a repository, planning, or code changes, with the option to create a pull request when you're ready.” · [페이지에서 보기](https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies#:~:text=Copilot%20cloud%20agent%20allows%20you,pull%20request%20when%20you%27re%20ready.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — PR 자동 리뷰 코멘트  
  “Copilot reviews your pull requests, identifies issues, and suggests fixes you can apply in a couple of clicks.” · [페이지에서 보기](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/code-review#:~:text=Copilot%20reviews%20your%20pull%20requests%2C,in%20a%20couple%20of%20clicks.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 보안 취약점 검사  
  “Provides fast, targeted feedback on common issues such as bugs, security vulnerabilities, and style inconsistencies.” · [페이지에서 보기](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/code-review#:~:text=Provides%20fast%2C%20targeted%20feedback%20on,security%20vulnerabilities%2C%20and%20style%20inconsistencies.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 수정 제안 바로 적용  
  “It reviews your code from multiple angles to identify issues and suggest fixes. You can apply suggested changes with a couple of clicks.” · [페이지에서 보기](https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/code-review#:~:text=It%20reviews%20your%20code%20from,with%20a%20couple%20of%20clicks.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “You can configure agents to perform recurring or event-driven work. For example, an agent can triage new issues, investigate continuous integration failures, or prepare a scheduled report.” · [페이지에서 보기](https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/about-github-copilot-agents#:~:text=You%20can%20configure%20agents%20to,or%20prepare%20a%20scheduled%20report.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “MCP servers allow you to give Copilot access to different data sources and tools.” · [페이지에서 보기](https://docs.github.com/en/copilot/concepts/copilot-surfaces/copilot-cli#:~:text=MCP%20servers%20allow%20you%20to,different%20data%20sources%20and%20tools.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: AI와 같이 코드 짜기
- [ ] 한 줄 설명: GitHub에 붙어 있는 AI 코딩 도우미예요. 에디터 자동완성·채팅부터 이슈를 맡기면 PR로 돌려주는 에이전트, PR 리뷰까지 해요
- [ ] 시작 3단계: 1) GitHub 계정으로 로그인하고 Copilot 설정에서 Copilot Free 켜기 (또는 Pro 구독) 2) Copilot 설정에서 'AI 모델 학습에 내 데이터 사용' 항목을 원하는 대로 바꾸기 3) VS Code 등 에디터에 Copilot 확장을 설치하거나 Copilot CLI로 시작하기
- [ ] 주의할 점: 개인 요금제(Free·Pro·Pro+·Max)는 기본으로 대화·코드가 학습에 쓰일 수 있으니 설정에서 꺼 두세요 / 클라우드 에이전트는 유료 요금제에서만 쓸 수 있어요 / 에이전트가 만든 PR은 직접 검토하고 합치세요

**5. Claude 메모**

- github.com 페이지(features/copilot, features/copilot/plans, pricing)는 이 작업 환경의 프록시가 막아서(세션 저장소 제한 안내 문구가 돌아옴) 읽지 못했어요. 그래서 근거는 모두 docs.github.com 문서예요. url은 github.com/features/copilot로 뒀지만 sources에는 넣지 않았어요. 직접 열어 확인해 주세요.
- 유료 가격: Copilot Pro 월 10달러('(free for some users)' — 학생·교사·인기 오픈소스 메인테이너). Pro+ 39달러, Max 100달러, Business 19달러/좌석, Enterprise 39달러/좌석. AI 크레딧 기반 사용량 과금이고 초과분은 크레딧당 0.01달러(조직 기준), 자동완성은 유료 요금제에서 무제한이에요. 연 결제 가격은 확인 못 했어요.
- 무료: Copilot Free는 조직·기업으로 Copilot을 받지 않은 개인 개발자만 쓸 수 있어요. 클라우드 에이전트는 'available for all paid Copilot plans'라서 무료로는 안 돼요(open_pr 기능은 유료).
- 학습 정책: 2026-04-24부터 개인 요금제는 'may use ... to train' + 설정에서 끌 수 있음 → 기본값 yes, opt_out yes로 했어요. 'may'라는 표현이라 J가 한 번 더 확인해 주세요. Business·Enterprise는 학습 안 함.
- 기능: multi_file 근거는 IDE 에이전트 모드의 'identify files to change, propose edits' 문장이에요(‘여러 파일’이라는 말이 직접 있진 않아요). tests(테스트 생성)는 문서 메뉴에 'Generate unit tests' 튜토리얼 제목만 보여서 넣지 않았어요. 넣으려면 해당 튜토리얼 문서를 확인해 주세요.
- 오픈소스 여부: 문서에 Copilot 자체가 오픈소스라는 문장이 없어요('All Docs are open source'는 문서 얘기). null + todo.
- AI 여부(yes), 섹션(official), 대표 목적(coding_agents)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote github-copilot --verified YYYY-MM-DD --dev
```

<a id="dev-kiro"></a>
### Kiro (`kiro`) · 개발자용

공식 주소: https://kiro.dev  
공식 도메인: `kiro.dev`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (20개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “KIRO FREE $0 per month 50 credits Access to open weight models\* and Claude Sonnet 4.5” · [페이지에서 보기](https://kiro.dev/pricing#:~:text=KIRO%20FREE%20%240%20per%20month,models%2A%20and%20Claude%20Sonnet%204.5)
- [ ] 무료 한도: 월 50크레딧, 오픈 웨이트 모델과 Claude Sonnet 4.5만 (사용량 제한 있음)  
  “New users can start with the perpetual Kiro Free tier, which includes 50 credits. The Free Tier includes access to open weight models and Claude Sonnet 4.5, with limits.” · [페이지에서 보기](https://kiro.dev/pricing#:~:text=New%20users%20can%20start%20with,Claude%20Sonnet%204.5%2C%20with%20limits.)
- [ ] 유료 가격: 월 20달러부터  
  “You can upgrade to paid tiers ranging from Pro ($20/month), Pro+ ($40/month), Pro Max ($100/month), to Power ($200/month) for increased capacity.” · [페이지에서 보기](https://kiro.dev/pricing#:~:text=You%20can%20upgrade%20to%20paid,Power%20%28%24200%2Fmonth%29%20for%20increased%20capacity.)
- [ ] 기본으로 학습에 씀: 예  
  “By default, Kiro collects usage data, errors, crash reports, and other metrics as well as content for service improvement from Kiro Free Tier users and Kiro individual subscribers.” · [페이지에서 보기](https://kiro.dev/docs/privacy-and-security/data-protection/#:~:text=By%20default%2C%20Kiro%20collects%20usage,users%20and%20Kiro%20individual%20subscribers.)
- [ ] 기본으로 학습에 씀: 예  
  “Kiro may use this content, for example, to provide better responses to common questions, fix Kiro operational issues, for de-bugging, or for model training.” · [페이지에서 보기](https://kiro.dev/docs/privacy-and-security/data-protection/#:~:text=Kiro%20may%20use%20this%20content%2C,de%2Dbugging%2C%20or%20for%20model%20training.)
- [ ] 학습 끄기 가능: 예  
  “You can opt out of content collection at any time using the opt-out mechanism described in our \[documentation\](/docs/privacy-and-security/data-protection/#opt-out-of-data-sharing).” · [페이지에서 보기](https://kiro.dev/faq#:~:text=You%20can%20opt%20out%20of,mechanism%20described%20in%20our%20%5Bdocumentation%5D%28%2Fdocs%2Fprivacy%2Dand%2Dsecurity%2Fdata%2Dprotection%2F%23opt%2Dout%2Dof%2Ddata%2Dsharing%29.)
- [ ] 학습 메모: Free와 소셜 로그인·Builder ID로 쓰는 개인 구독은 기본으로 질문·코드를 서비스 개선(모델 학습 포함)에 쓸 수 있고 설정에서 끌 수 있어요. IAM Identity Center로 쓰는 유료 사용자는 쓰지 않아요  
  “We do not use content from Kiro Pro, Pro+, Pro Max, or Power users that access Kiro through AWS IAM Identity Center or external identity provider.” · [페이지에서 보기](https://kiro.dev/faq#:~:text=We%20do%20not%20use%20content,Center%20or%20external%20identity%20provider.)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, 웹, IDE 확장  
  “Kiro is available as a desktop IDE, a command-line interface, a web app, a mobile app, and a personal AI agent (Crew).” · [페이지에서 보기](https://kiro.dev/docs/getting-started/installation/#:~:text=Kiro%20is%20available%20as%20a,a%20personal%20AI%20agent%20%28Crew%29.)
- [ ] 쓰는 형태: 데스크톱 앱, CLI, 웹, IDE 확장  
  “Because the boundary is standard ACP, compatible editors like JetBrains IDEs and Zed can use Kiro as their agent too.” · [페이지에서 보기](https://kiro.dev/docs/how-kiro-works/#:~:text=Because%20the%20boundary%20is%20standard,Kiro%20as%20their%20agent%20too.)
- [ ] ✓ AI와 같이 코드 짜기 — 저장소 전체 읽고 이해  
  “It understands your codebase and speeds up development through adaptive, natural dialogue.” · [페이지에서 보기](https://kiro.dev/faq#:~:text=It%20understands%20your%20codebase%20and,development%20through%20adaptive%2C%20natural%20dialogue.)
- [ ] ✓ AI와 같이 코드 짜기 — 저장소 전체 읽고 이해  
  “Interact with your code through natural language conversations with full project context.” · [페이지에서 보기](https://kiro.dev/docs/ide/#:~:text=Interact%20with%20your%20code%20through,conversations%20with%20full%20project%20context.)
- [ ] ✓ AI와 같이 코드 짜기 — 여러 파일 한 번에 수정  
  “Connect your GitHub or GitLab repositories or both, describe what you need, and Kiro writes code, coordinates changes across repos, and opens pull requests.” · [페이지에서 보기](https://kiro.dev/faq#:~:text=Connect%20your%20GitHub%20or%20GitLab,repos%2C%20and%20opens%20pull%20requests.)
- [ ] ✓ AI와 같이 코드 짜기 — 명령·테스트 실행  
  “Built-in tools read and edit files, run shell commands, and search the web.” · [페이지에서 보기](https://kiro.dev/docs/how-kiro-works/#:~:text=Built%2Din%20tools%20read%20and%20edit,commands%2C%20and%20search%20the%20web.)
- [ ] ✓ AI와 같이 코드 짜기 — 결과를 PR로 올리기  
  “Let the agent own the outcome — it plans, codes, and opens PRs” · [페이지에서 보기](https://kiro.dev/docs/web/#:~:text=Let%20the%20agent%20own%20the,plans%2C%20codes%2C%20and%20opens%20PRs)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — PR 자동 리뷰 코멘트  
  “Run the headless CLI in CI/CD to review PRs and fix bugs without opening an editor.” · [페이지에서 보기](https://kiro.dev#:~:text=Run%20the%20headless%20CLI%20in,bugs%20without%20opening%20an%20editor.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 테스트 코드 생성  
  “- auto-create tests, docs, or translations when new source files appear” · [페이지에서 보기](https://kiro.dev/docs/hooks/#:~:text=auto%2Dcreate%20tests%2C%20docs%2C%20or%20translations%20when%20new%20source%20files%20appear)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “Automations let Kiro Web run a prompt against your GitHub or GitLab repositories on a schedule, without you starting a session.” · [페이지에서 보기](https://kiro.dev/docs/web/automations/#:~:text=Automations%20let%20Kiro%20Web%20run,without%20you%20starting%20a%20session.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “Hooks run shell commands or agent prompts automatically when specific events happen in your session - the agent modifies a file, invokes a tool, or completes a task.” · [페이지에서 보기](https://kiro.dev/docs/hooks/#:~:text=Hooks%20run%20shell%20commands%20or,tool%2C%20or%20completes%20a%20task.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “Model Context Protocol (MCP) extends Kiro's capabilities by connecting to specialized servers that provide additional tools and context.” · [페이지에서 보기](https://kiro.dev/docs/mcp/#:~:text=Model%20Context%20Protocol%20%28MCP%29%20extends,provide%20additional%20tools%20and%20context.)
- [ ] ✓ 기획하고 같이 일하기 — PRD 등 문서 초안 생성  
  “By using specs, Kiro works alongside you to define requirements, system design, and tasks to be implemented before writing any code.” · [페이지에서 보기](https://kiro.dev/faq#:~:text=By%20using%20specs%2C%20Kiro%20works,implemented%20before%20writing%20any%20code.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: AI와 같이 코드 짜기
- [ ] 한 줄 설명: AWS가 만든 AI 코딩 에이전트예요. 요구사항·설계·작업 목록(스펙)을 먼저 만들고 그대로 구현해요. IDE·CLI·웹에서 써요
- [ ] 시작 3단계: 1) 공식 사이트에서 Kiro IDE를 내려받아 설치하기 (또는 Kiro CLI 설치) 2) GitHub·Google·AWS Builder ID로 로그인하고 설정에서 데이터 공유(콘텐츠 수집) 여부 정하기 3) 프로젝트 폴더를 열고 만들 기능을 스펙 모드로 설명해 요구사항·설계·작업 목록부터 받기
- [ ] 주의할 점: 무료·개인 구독은 기본으로 대화와 코드가 서비스 개선에 쓰일 수 있으니 설정에서 꺼 두세요 / 웹 버전(Kiro Web)과 예약 자동화는 유료 요금제에서만 돼요 / 크레딧은 작업 복잡도와 모델에 따라 다르게 줄어들고, 남은 크레딧은 다음 달로 넘어가지 않아요

**5. Claude 메모**

- 유료 가격: Pro 월 20달러(가격 페이지 표기는 'per user / month'). Pro+ 40, Pro Max 100, Power 200달러. 추가 크레딧은 개당 0.04달러. 처음 유료로 올릴 때 20달러 크레딧을 줘요. 연 결제 가격은 못 봤어요.
- 무료: Kiro Free는 기간 제한 없는 무료 등급(50크레딧). 다만 Kiro Web(브라우저 에이전트, PR 열기)과 예약 자동화는 'available on Pro, Pro+, Pro Max, and Power plans'라서 무료로는 안 돼요. open_pr·automation.triggers(예약) 근거가 Web 기능이에요(hooks 이벤트 실행은 IDE·CLI에서도 됨).
- 학습 정책: Free·개인 구독(소셜 로그인·Builder ID)은 '기본으로' 콘텐츠를 서비스 개선에 수집하고, 그 용도에 'model training'이 포함돼요 → 기본값 yes, opt_out yes. IAM Identity Center·외부 IdP로 쓰는 유료 사용자는 사용 안 함. Free 사용자는 opt-out해도 남용 탐지용으로 입력을 최대 60일 저장할 수 있다고 돼 있어요.
- 오픈소스 여부: 'Kiro Crew'(개인 에이전트 워크스페이스)는 오픈소스라고 적혀 있지만 Kiro IDE·CLI 자체가 오픈소스라는 문장은 없어요. null + todo.
- 기능: pr_review 근거는 홈의 'headless CLI in CI/CD to review PRs' 문장이라 '자동 리뷰 코멘트'까지 명시되진 않았어요. tests 근거는 hooks 문서의 예시 목록('auto-create tests ... when new source files appear')이에요. planning.doc_draft는 스펙(요구사항·설계·작업 문서 생성) 기능이라 넣었어요 — PRD와 같은 기능으로 볼지 J가 정해 주세요. apply_fix는 근거가 약해서 뺐어요.
- forms: ide_extension은 ACP로 JetBrains·Zed에서 Kiro를 에이전트로 쓸 수 있다는 문장이 근거예요. 모바일 앱(iOS TestFlight 초기 접근)도 있지만 forms 항목에 없어 뺐어요.
- AI 여부(yes), 섹션(official), 대표 목적(coding_agents)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote kiro --verified YYYY-MM-DD --dev
```

<a id="dev-coderabbit"></a>
### CodeRabbit (`coderabbit`) · 개발자용

공식 주소: https://www.coderabbit.ai  
공식 도메인: `coderabbit.ai`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (17개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Sign up for CodeRabbit using GitHub or GitLab, install CodeRabbit on a public repository, and receive free reviews forever for public repositories.” · [페이지에서 보기](https://www.coderabbit.ai/pricing#:~:text=Sign%20up%20for%20CodeRabbit%20using,reviews%20forever%20for%20public%20repositories.)
- [ ] 무료 사용: 돼요  
  “Developers can install the VS Code plugin for quick reviews on every committed and uncommitted change, no subscription needed.” · [페이지에서 보기](https://www.coderabbit.ai/ide#:~:text=Developers%20can%20install%20the%20VS,uncommitted%20change%2C%20no%20subscription%20needed.)
- [ ] 무료 한도: 공개 저장소 PR 리뷰는 계속 무료, VS Code 확장의 가벼운 리뷰는 구독 없이 가능 (사용량 제한 있음)  
  “Sign up for CodeRabbit using GitHub or GitLab, install CodeRabbit on a public repository, and receive free reviews forever for public repositories.” · [페이지에서 보기](https://www.coderabbit.ai/pricing#:~:text=Sign%20up%20for%20CodeRabbit%20using,reviews%20forever%20for%20public%20repositories.)
- [ ] 무료 한도: 공개 저장소 PR 리뷰는 계속 무료, VS Code 확장의 가벼운 리뷰는 구독 없이 가능 (사용량 제한 있음)  
  “Rate limits vary by plan and product surface.” · [페이지에서 보기](https://www.coderabbit.ai/ide#:~:text=Rate%20limits%20vary%20by%20plan%20and%20product%20surface.)
- [ ] 유료 가격: 월 30달러부터  
  “No. Essentials retains the current Pro price of $30 per developer per month, or $24 per developer per month when billed annually.” · [페이지에서 보기](https://www.coderabbit.ai/pricing#:~:text=No.%20Essentials%20retains%20the%20current,per%20month%20when%20billed%20annually.)
- [ ] 학습 메모: 개인정보 처리방침: 코드 리뷰 중 모은 개인정보는 학습에 쓰지 않지만, 오픈소스 프로젝트는 학습에 쓴다고 해요  
  “Neither CodeRabbit nor OpenAI or Anthropic uses personal information collected as part of the code review to train, refine, or otherwise influence our models or any third-party models.” · [페이지에서 보기](https://www.coderabbit.ai/privacy-policy#:~:text=Neither%20CodeRabbit%20nor%20OpenAI%20or,models%20or%20any%20third%2Dparty%20models.)
- [ ] 학습 메모: 개인정보 처리방침: 코드 리뷰 중 모은 개인정보는 학습에 쓰지 않지만, 오픈소스 프로젝트는 학습에 쓴다고 해요  
  “The above representation does not apply to open-source projects (OSS). We use OSS to train our systems.” · [페이지에서 보기](https://www.coderabbit.ai/privacy-policy#:~:text=The%20above%20representation%20does%20not,OSS%20to%20train%20our%20systems.)
- [ ] 쓰는 형태: 클라우드 서비스, IDE 확장, CLI, 셀프 호스팅  
  “Agentic code reviews in PR, CLI, IDE, and in agent loops” · [페이지에서 보기](https://www.coderabbit.ai/pricing#:~:text=Agentic%20code%20reviews%20in%20PR%2C,IDE%2C%20and%20in%20agent%20loops)
- [ ] 쓰는 형태: 클라우드 서비스, IDE 확장, CLI, 셀프 호스팅  
  “CodeRabbit CLI is an AI code review tool that runs directly in your terminal.” · [페이지에서 보기](https://www.coderabbit.ai/cli#:~:text=CodeRabbit%20CLI%20is%20an%20AI,runs%20directly%20in%20your%20terminal.)
- [ ] 쓰는 형태: 클라우드 서비스, IDE 확장, CLI, 셀프 호스팅  
  “Developers can install the VS Code plugin for quick reviews on every committed and uncommitted change, no subscription needed.” · [페이지에서 보기](https://www.coderabbit.ai/ide#:~:text=Developers%20can%20install%20the%20VS,uncommitted%20change%2C%20no%20subscription%20needed.)
- [ ] 쓰는 형태: 클라우드 서비스, IDE 확장, CLI, 셀프 호스팅  
  “Custom deployment options, including self-hosting and company-selected SaaS regions” · [페이지에서 보기](https://www.coderabbit.ai/pricing#:~:text=Custom%20deployment%20options%2C%20including%20self%2Dhosting%20and%20company%2Dselected%20SaaS%20regions)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — PR 자동 리뷰 코멘트  
  “AI Code Review at the PR Plain language summary & walkthrough with described changes, diagrams, and related/linked issues” · [페이지에서 보기](https://www.coderabbit.ai/pricing#:~:text=AI%20Code%20Review%20at%20the,changes%2C%20diagrams%2C%20and%20related%2Flinked%20issues)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 보안 취약점 검사  
  “Security Code Review Static analysis, secrets, dependency, and infrastructure checks” · [페이지에서 보기](https://www.coderabbit.ai/pricing#:~:text=Security%20Code%20Review%20Static%20analysis%2C%20secrets%2C%20dependency%2C%20and%20infrastructure%20checks)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 보안 취약점 검사  
  “Identifies and acts on security vulnerabilities in near-real time. On every repo and every PR.” · [페이지에서 보기](https://www.coderabbit.ai/security#:~:text=Identifies%20and%20acts%20on%20security,every%20repo%20and%20every%20PR.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 테스트 코드 생성  
  “Unit Tests Generate comprehensive tests automatically for PRs, including edge cases and error conditions” · [페이지에서 보기](https://www.coderabbit.ai/pricing#:~:text=Unit%20Tests%20Generate%20comprehensive%20tests,edge%20cases%20and%20error%20conditions)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 수정 제안 바로 적용  
  “Autofix One-click code changes for unresolved findings” · [페이지에서 보기](https://www.coderabbit.ai/pricing#:~:text=Autofix%20One%2Dclick%20code%20changes%20for%20unresolved%20findings)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 수정 제안 바로 적용  
  “Use one-click fixes in CLI to easily incorporate review comments back into your codebase with just one click.” · [페이지에서 보기](https://www.coderabbit.ai/cli#:~:text=Use%20one%2Dclick%20fixes%20in%20CLI,codebase%20with%20just%20one%20click.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 코드 리뷰·품질 검사 받기
- [ ] 한 줄 설명: PR이 올라오면 AI가 줄 단위로 리뷰 코멘트를 달아주는 코드 리뷰 도구예요. VS Code 확장과 CLI로 커밋 전에도 리뷰받을 수 있어요
- [ ] 시작 3단계: 1) GitHub 또는 GitLab 계정으로 CodeRabbit에 가입하기 2) 리뷰받을 저장소에 CodeRabbit 앱을 설치하기 (공개 저장소는 무료) 3) PR을 올리고 CodeRabbit이 단 코멘트를 읽고, 필요하면 한 번에 고치기 적용하기
- [ ] 주의할 점: 오픈소스(공개) 저장소의 코드는 학습에 쓰인다고 밝히고 있어요 / 비공개 저장소 PR 리뷰는 유료(14일 체험)이고, 테스트 생성은 Team, 보안 리뷰는 Advanced 요금제부터예요 / AI 리뷰는 사람 리뷰를 대신하지 않으니 중요한 변경은 직접 확인하세요

**5. Claude 메모**

- docs.coderabbit.ai는 403(자동 읽기 차단)이라 읽지 못했어요. 근거는 www.coderabbit.ai 페이지만 썼어요. learn의 문서 링크는 열어서 확인해 주세요.
- 유료 가격: 가장 싼 유료는 Essentials(옛 Pro) 월 결제 30달러/개발자(연 결제는 월 24달러). 가격 페이지는 기본이 연 결제 표시라 화면에 $24가 먼저 보여요. Team 60(연 48), Advanced 연 72달러. PR을 만드는 개발자만 과금. 한도 넘으면 파일당 0.25달러, 에이전트는 분당 0.40달러.
- 무료: 공개 저장소 리뷰는 '영원히 무료', VS Code 확장은 '구독 없이' 가벼운 리뷰. 비공개 저장소 PR 리뷰는 14일 체험 후 유료예요. 무료 사용량 한도 숫자는 문서(차단됨)에 있다고 해서 확인 못 했어요.
- 학습 정책: 개인정보 처리방침에 '리뷰 중 모은 개인정보(personal information)는 학습 안 함, 단 오픈소스 프로젝트는 학습에 사용' 문장만 있어요. 비공개 코드 자체에 대한 학습 여부·끄는 방법 문장은 못 찾아서 둘 다 unknown이에요. 공개 저장소로 무료로 쓰면 학습에 쓰이는 것으로 보여요 — J가 확인해 주세요.
- 기능: code_review 4개 모두 가격 페이지 비교 표 항목이 근거라 요금제별로 달라요(테스트 생성=Team 이상, 보안 리뷰=Advanced 이상, Autofix=Essentials 이상). 'CodeRabbit AI Engineer'(PR에서 클라우드 코딩 에이전트 실행)와 MCP 연결도 있지만 리뷰 보조 기능이라 coding_agents·automation에는 넣지 않았어요.
- forms: self_host는 Enterprise의 'Custom deployment options, including self-hosting' 문장이 근거예요(엔터프라이즈 한정). cloud_service는 GitHub/GitLab 앱으로 PR을 리뷰하는 형태예요.
- 오픈소스 여부: 공식 페이지에 CodeRabbit 자체가 오픈소스라는 문장이 없어요. null + todo. CLI 페이지에 설치용 curl|sh 명령이 있지만 실행하지 않았어요.
- AI 여부(yes), 섹션(official), 대표 목적(code_review)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote coderabbit --verified YYYY-MM-DD --dev
```

<a id="dev-greptile"></a>
### Greptile (`greptile`) · 개발자용

공식 주소: https://www.greptile.com  
공식 도메인: `greptile.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (13개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Starter Best for individual developers Free Get started for free How it works 1 active developer 50 free credits per month” · [페이지에서 보기](https://www.greptile.com/pricing#:~:text=Starter%20Best%20for%20individual%20developers,50%20free%20credits%20per%20month)
- [ ] 무료 한도: Starter: 개발자 1명, 월 50크레딧 (기본 리뷰 1회 = 1크레딧)  
  “Starter is free for one developer and includes 50 credits per month.” · [페이지에서 보기](https://www.greptile.com/pricing#:~:text=Starter%20is%20free%20for%20one,includes%2050%20credits%20per%20month.)
- [ ] 무료 한도: Starter: 개발자 1명, 월 50크레딧 (기본 리뷰 1회 = 1크레딧)  
  “Base review: 1 credit” · [페이지에서 보기](https://www.greptile.com/pricing#:~:text=Base%20review%3A%201%20credit)
- [ ] 기본으로 학습에 씀: 예  
  “Greptile may aggregate and anonymize Customer Data ("De-Identified Data") for analytical purposes and to monitor, improve, or expand our services, and may use such data to train and improve artificial intelligence algorithms and models ("AI Training and Learnings").” · [페이지에서 보기](https://www.greptile.com/security#:~:text=Greptile%20may%20aggregate%20and%20anonymize,models%20%28%22AI%20Training%20and%20Learnings%22%29.)
- [ ] 학습 끄기 가능: 예  
  “To opt your organization out of AI training, an organization admin can open Organization Settings , go to Data & Privacy , and turn off Help us improve Greptile” · [페이지에서 보기](https://www.greptile.com/security#:~:text=To%20opt%20your%20organization%20out,off%20Help%20us%20improve%20Greptile)
- [ ] 쓰는 형태: 클라우드 서비스, CLI, 셀프 호스팅  
  “Greptile is an AI code review agent that automatically reviews every pull request with complete understanding of your codebase.” · [페이지에서 보기](https://www.greptile.com/docs/introduction#:~:text=Greptile%20is%20an%20AI%20code,complete%20understanding%20of%20your%20codebase.)
- [ ] 쓰는 형태: 클라우드 서비스, CLI, 셀프 호스팅  
  “Review code without leaving your terminal” · [페이지에서 보기](https://www.greptile.com/cli#:~:text=Review%20code%20without%20leaving%20your%20terminal)
- [ ] 쓰는 형태: 클라우드 서비스, CLI, 셀프 호스팅  
  “Self-host in your own infrastructure” · [페이지에서 보기](https://www.greptile.com/pricing#:~:text=Self%2Dhost%20in%20your%20own%20infrastructure)
- [ ] 쓰는 형태: 클라우드 서비스, CLI, 셀프 호스팅  
  “Deploy in your infrastructure with Docker/Kubernetes, air-gapped environments, and custom LLMs” · [페이지에서 보기](https://www.greptile.com/docs/introduction#:~:text=Deploy%20in%20your%20infrastructure%20with,air%2Dgapped%20environments%2C%20and%20custom%20LLMs)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — PR 자동 리뷰 코멘트  
  “On every pull request, Greptile analyzes changes with full context. Posts findings in ~3 minutes as PR comments with suggested fixes.” · [페이지에서 보기](https://www.greptile.com/docs/introduction#:~:text=On%20every%20pull%20request%2C%20Greptile,PR%20comments%20with%20suggested%20fixes.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 보안 취약점 검사  
  “Greptile pairs static scanning with an AI security agent to catch vulnerabilities in every pull request.” · [페이지에서 보기](https://www.greptile.com/security-check#:~:text=Greptile%20pairs%20static%20scanning%20with,vulnerabilities%20in%20every%20pull%20request.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 테스트 코드 생성  
  “Automatically generate unit tests for new and changed code in every PR” · [페이지에서 보기](https://www.greptile.com/cli#:~:text=Automatically%20generate%20unit%20tests%20for,changed%20code%20in%20every%20PR)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 수정 제안 바로 적용  
  “Address any comment with a one click fix directly to your preferred coding agent” · [페이지에서 보기](https://www.greptile.com/cli#:~:text=Address%20any%20comment%20with%20a,to%20your%20preferred%20coding%20agent)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 코드 리뷰·품질 검사 받기
- [ ] 한 줄 설명: 저장소 전체를 그래프로 이해한 뒤 PR마다 버그·보안 문제를 찾아 코멘트로 알려주는 AI 코드 리뷰 도구예요
- [ ] 시작 3단계: 1) GitHub 또는 GitLab 계정을 연결해 Greptile에 가입하기 2) 리뷰받을 저장소를 켜고, 조직 설정의 Data & Privacy에서 학습 사용 여부 정하기 3) PR을 올리면 몇 분 안에 달리는 리뷰 코멘트를 확인하기
- [ ] 주의할 점: 기본 설정에서는 익명화한 고객 데이터가 AI 학습에 쓰일 수 있으니 필요하면 꺼 두세요 / 유료(Pro)는 좌석 요금 없이 크레딧당 1달러라서 리뷰 종류(Base·Plus·Apex)에 따라 비용이 달라져요 / AI 리뷰는 사람 리뷰를 대신하지 않으니 중요한 변경은 직접 확인하세요

**5. Claude 메모**

- 유료 가격: Pro는 월 요금제가 아니라 '$1 /credit'(좌석 요금 없음, 조직이 크레딧 공유)이에요. 리뷰 1회가 Base 1 / Plus 3 / Apex 10크레딧. 정해진 월 가격이 없어서 paid_from_usd=null, billing=unknown으로 뒀어요. 1달러를 넣을지 J가 정해 주세요. Enterprise는 견적, 연·다년 계약 할인은 문의.
- 무료: Starter(개발자 1명, 월 50크레딧). OSI 승인 라이선스의 비상업 오픈소스는 신청하면 무료, 프리 시리즈 A 스타트업은 6개월간 월 500크레딧.
- 학습 정책: 보안 페이지에 '익명화한 고객 데이터를 AI 학습에 쓸 수 있다' + 관리자가 'Help us improve Greptile'을 끄면 빠진다고 돼 있어요 → 기본값 yes, opt_out yes. '익명화(De-Identified)' 데이터라는 점을 note에 적었어요. 기본으로 켜져 있다는 직접 문장은 없고 '끄는(turn off)' 설명으로 판단했어요 — J가 확인해 주세요.
- 기능: tests·apply_fix 근거는 CLI 페이지의 기능 목록이에요. apply_fix는 '원클릭으로 내가 쓰는 코딩 에이전트에 수정 보내기'라서 Greptile이 직접 적용하는 건 아니에요. 넣을지 J가 판단해 주세요.
- forms: self_host는 Enterprise 요금제 기능이에요. 문서에 'Fix issues directly in your IDE'가 있지만 IDE 확장이 따로 있다는 문장은 없어 ide_extension은 넣지 않았어요.
- 오픈소스 여부: Greptile 자체가 오픈소스라는 문장이 없어요. null + todo.
- 문서 페이지 맨 위에 AI 에이전트용 안내('Fetch the complete documentation index at: ... Use this file to discover all available pages')가 있었는데 따르지 않았어요. CLI 페이지의 설치용 curl|bash 명령도 실행하지 않았어요.
- AI 여부(yes), 섹션(official), 대표 목적(code_review)은 제안값이에요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote greptile --verified YYYY-MM-DD --dev
```

<a id="dev-zapier"></a>
### Zapier (`zapier`) · 개발자용

공식 주소: https://zapier.com  
공식 도메인: `zapier.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (13개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free Free forever $0 /month Start automating with AI. Zaps, Tables, and Forms included (100 tasks per month).” · [페이지에서 보기](https://zapier.com/pricing#:~:text=Free%20Free%20forever%20%240%20%2Fmonth,included%20%28100%20tasks%20per%20month%29.)
- [ ] 무료 한도: 월 100 태스크, 2단계 Zap까지  
  “Start automating with AI. Zaps, Tables, and Forms included (100 tasks per month).” · [페이지에서 보기](https://zapier.com/pricing#:~:text=Start%20automating%20with%20AI.%20Zaps%2C,included%20%28100%20tasks%20per%20month%29.)
- [ ] 무료 한도: 월 100 태스크, 2단계 Zap까지  
  “Unlimited Zaps, Tables, and Forms Two-step Zaps” · [페이지에서 보기](https://zapier.com/pricing#:~:text=Unlimited%20Zaps%2C%20Tables%2C%20and%20Forms%20Two%2Dstep%20Zaps)
- [ ] 유료 가격: 월 19.99달러부터  
  “Professional Starting from $19.99 /month” · [페이지에서 보기](https://zapier.com/pricing#:~:text=Professional%20Starting%20from%20%2419.99%20%2Fmonth)
- [ ] 결제 주기: monthly  
  “Pay monthly Pay yearly (Save 33%)” · [페이지에서 보기](https://zapier.com/pricing#:~:text=Pay%20monthly%20Pay%20yearly%20%28Save%2033%25%29)
- [ ] 기본으로 학습에 씀: 아니요  
  “We don’t train on the data that runs through your workflows, on any plan.” · [페이지에서 보기](https://zapier.com/security-compliance#:~:text=We%20don%E2%80%99t%20train%20on%20the,your%20workflows%2C%20on%20any%20plan.)
- [ ] 학습 끄기 가능: 예  
  “To improve AI features, Zapier may learn from how workflows are built: the structure, not the contents. Enterprise accounts are opted out of even that automatically; other plans can opt out with one form .” · [페이지에서 보기](https://zapier.com/security-compliance#:~:text=To%20improve%20AI%20features%2C%20Zapier,out%20with%20one%20form%20.)
- [ ] 쓰는 형태: 클라우드 서비스, 라이브러리, CLI  
  “Build anywhere. Run on Zapier. Govern in one place.” · [페이지에서 보기](https://zapier.com/#:~:text=Build%20anywhere.%20Run%20on%20Zapier.%20Govern%20in%20one%20place.)
- [ ] 쓰는 형태: 클라우드 서비스, 라이브러리, CLI  
  “Zapier SDK runs in code files. Zapier CLI runs in your terminal.” · [페이지에서 보기](https://zapier.com/sdk#:~:text=Zapier%20SDK%20runs%20in%20code,CLI%20runs%20in%20your%20terminal.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 앱끼리 연결하는 워크플로  
  “A Zap is an automated workflow that completes work across your apps without someone prompting it each time.” · [페이지에서 보기](https://zapier.com/#:~:text=A%20Zap%20is%20an%20automated,someone%20prompting%20it%20each%20time.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 워크플로 안에 AI 단계 넣기  
  “AI handles a single task in a workflow, like writing or summarizing. Deterministic steps handle the rest.” · [페이지에서 보기](https://zapier.com/#:~:text=AI%20handles%20a%20single%20task,Deterministic%20steps%20handle%20the%20rest.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “Set a trigger once and your workflow runs on its own, every time, without you prompting it in chat.” · [페이지에서 보기](https://zapier.com/#:~:text=Set%20a%20trigger%20once%20and,you%20prompting%20it%20in%20chat.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “Use Zapier MCP to connect your AI to the apps your business runs on, then test and refine your workflow without leaving the conversation.” · [페이지에서 보기](https://zapier.com/#:~:text=Use%20Zapier%20MCP%20to%20connect,workflow%20without%20leaving%20the%20conversation.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 업무 자동화·에이전트 연결
- [ ] 한 줄 설명: 수천 개 앱을 트리거와 액션으로 엮어 반복 업무를 자동으로 돌리는 노코드 자동화 플랫폼이에요. 워크플로 안에 AI 단계와 에이전트를 넣을 수 있고, MCP·SDK로 AI 도구에서도 불러 써요
- [ ] 시작 3단계: 1) zapier.com에서 이메일이나 Google 계정으로 무료 가입하기 2) 트리거가 될 앱과 이어서 실행할 액션 앱을 골라 첫 Zap 만들기 3) 테스트 실행으로 결과를 확인한 뒤 Zap 켜기
- [ ] 주의할 점: 무료 요금제는 월 100 태스크, 2단계 Zap까지라 여러 단계 워크플로는 유료 요금제가 필요해요 / AI 단계·코드 실행·SDK 사용도 태스크로 계산돼요. 쓰는 양에 따라 요금 구간이 올라가요

**5. Claude 메모**

- 유료 가격: 가격표 첫 화면(월 결제 선택 상태)의 Professional 'Starting from $19.99 /month' 기준이에요. 같은 페이지 HTML에서 연 결제 표시는 'billed annually'가 따로 붙고 33% 할인이라, 19.99달러를 월 결제 가격으로 봤어요. 태스크 수(100~2M)를 고르면 가격이 올라가요. Team은 69달러부터예요.
- 무료 한도: 월 100 태스크, 2단계 Zap(여러 단계는 Professional부터). 가격표에는 'AI steps, code, and SDK now all follow the same task-based pricing model'이라는 안내도 있어요. SDK는 '오픈 베타 동안 무료'라고 별도로 써 있어요.
- 학습 정책: 보안 페이지 FAQ에 '워크플로로 오가는 데이터는 어떤 요금제에서도 학습하지 않는다'는 문장이 있어 trains_on_input_default=no로 했어요. 다만 '워크플로를 만드는 방식(구조)은 AI 기능 개선에 쓸 수 있고, Enterprise는 자동 제외, 다른 요금제는 신청서(one form)로 제외'라서 opt_out=yes로 했어요. 구조 학습이 기본으로 켜져 있다는 점을 J가 어떻게 표시할지 정해 주세요.
- 쓰는 형태: 웹 편집기(가격표 'Visual editor', 'Visual no-code editor')로 쓰지만 '브라우저에서 쓴다'는 문장은 못 찾아 web은 넣지 않았어요. 넣는다면 J가 정해 주세요. cloud_service는 'Run on Zapier', library·cli는 SDK 페이지의 'Zapier SDK runs in code files. Zapier CLI runs in your terminal.' 근거예요.
- 오픈소스 여부: 공식 페이지에서 관련 문장을 못 찾았어요. 홈 메뉴에 github.com/zapier 링크는 있지만 제품 자체가 오픈소스라는 말은 없어요 → null + todo.
- features.automation.tools 근거는 Zapier MCP(내 AI 도구를 Zapier에 연결된 앱과 잇는 기능)예요. 'Zapier가 외부 MCP 서버를 불러 쓰는 것'과는 방향이 반대라 J가 맞는지 확인해 주세요.
- help.zapier.com은 접속이 안 돼서(응답 없음) 읽지 못했어요. 배울 거리의 docs.zapier.com/sdk 링크는 SDK 페이지의 'Read the docs' 링크에서 가져왔고 직접 열어 보지는 않았어요.
- AI 여부는 partial(자동화 플랫폼 + AI 단계·에이전트), 대표 목적은 automation을 제안해요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote zapier --verified YYYY-MM-DD --dev
```

<a id="dev-make"></a>
### Make (`make`) · 개발자용

공식 주소: https://www.make.com/  
공식 도메인: `make.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (9개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free $0 /mo Exploring visual-first automation” · [페이지에서 보기](https://www.make.com/pricing#:~:text=Free%20%240%20%2Fmo%20Exploring%20visual%2Dfirst%20automation)
- [ ] 무료 한도: 월 1,000 크레딧, 실행 간격 최소 15분  
  “Free includes: 1,000 credits/month No-code visual workflow builder 3,500+ apps Routers & filters Customer support 15-minute minimum interval between runs” · [페이지에서 보기](https://www.make.com/pricing#:~:text=Free%20includes%3A%201%2C000%20credits%2Fmonth%20No%2Dcode,15%2Dminute%20minimum%20interval%20between%20runs)
- [ ] 쓰는 형태: 클라우드 서비스  
  “Our infrastructure resides within Amazon AWS EC2 private instances (Amazon VPC) with Amazon Enterprise support in place.” · [페이지에서 보기](https://www.make.com/security#:~:text=Our%20infrastructure%20resides%20within%20Amazon,Amazon%20Enterprise%20support%20in%20place.)
- [ ] 쓰는 형태: 클라우드 서비스  
  “Build, test, debug and run in one visual environment.” · [페이지에서 보기](https://www.make.com/#:~:text=Build%2C%20test%2C%20debug%20and%20run%20in%20one%20visual%20environment.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 앱끼리 연결하는 워크플로  
  “Make is an AI automation platform. You build automated workflows and AI agents visually, connect them to the apps and data you already use, and see everything running in one place.” · [페이지에서 보기](https://www.make.com/#:~:text=Make%20is%20an%20AI%20automation,everything%20running%20in%20one%20place.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 워크플로 안에 AI 단계 넣기  
  “With Make, you can plug GenAI apps and LLMs directly into your processes. Generate content, classify data, enrich records, or summarize customer feedback – all inside the same visual workflow.” · [페이지에서 보기](https://www.make.com/ai-automation#:~:text=With%20Make%2C%20you%20can%20plug,inside%20the%20same%20visual%20workflow.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “More control with scheduled scenarios, down to the minute” · [페이지에서 보기](https://www.make.com/pricing#:~:text=More%20control%20with%20scheduled%20scenarios%2C%20down%20to%20the%20minute)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “Incoming webhooks will be queued up to the amount of webhook queue storage you have available and will then be processed once your scenarios resume with added credits.” · [페이지에서 보기](https://www.make.com/pricing#:~:text=Incoming%20webhooks%20will%20be%20queued,scenarios%20resume%20with%20added%20credits.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “Establish Make as your centralized orchestration hub by seamlessly connecting internal and external services using the Model Context Protocol Server and Client.” · [페이지에서 보기](https://www.make.com/ai-automation#:~:text=Establish%20Make%20as%20your%20centralized,Context%20Protocol%20Server%20and%20Client.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `price.paid_from_usd`
- [ ] `price.billing`
- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 업무 자동화·에이전트 연결
- [ ] 한 줄 설명: 앱과 데이터를 캔버스 위에서 끌어다 이어 시나리오(자동화 흐름)를 만드는 비주얼 자동화 플랫폼이에요. LLM 단계와 AI 에이전트를 같은 화면에서 붙일 수 있어요
- [ ] 시작 3단계: 1) make.com에서 무료로 가입하기 (카드 등록 없음) 2) 새 시나리오를 열고 트리거 앱과 이어질 모듈을 캔버스에 놓기 3) 한 번 실행해 결과를 확인한 뒤 일정(스케줄)을 켜기
- [ ] 주의할 점: 모듈이 동작할 때마다 크레딧이 빠지고, AI 기능은 크레딧을 더 쓸 수 있어요. 크레딧이 떨어지면 시나리오가 멈춰요 / 학습 정책이 공식 페이지에 분명히 나와 있지 않아요. 민감한 데이터를 흘려보내기 전에 약관을 확인하세요

**5. Claude 메모**

- www.make.com/en 과 /en/pricing 는 Cloudflare 확인 화면('Just a moment...', 403)이라 못 읽었고, www.make.com/ 과 /pricing 은 읽혔어요. help.make.com은 접속이 안 됐어요(응답 없음).
- 유료 가격(todo): 가격표 글자에는 'Core Save 15 % $9 /mo', '$0.90 /1,000 credits'(10,000 크레딧 기준)만 있어요. 'Monthly billing / Annual billing' 전환 버튼이 있고 가격 옆에 'Save 15%'가 붙어 있어서 9달러는 연 결제 기준일 가능성이 커 보여요. 월 결제 가격은 화면 스크립트로 바뀌어 글자로 못 읽었어요. J가 브라우저에서 월 결제 가격을 확인해 paid_from_usd·billing을 채워 주세요. 크레딧 수를 고르면 가격이 달라져요.
- 학습 정책: 개인정보 처리방침에는 'Google Workspace API 데이터는 일반 AI/ML 모델 학습에 쓰지 않는다'는 문장만 있어요. 일반 사용자 데이터에 대한 문장은 없어 unknown으로 뒀어요.
- 쓰는 형태: 웹 캔버스에서 쓰는 서비스지만 '브라우저에서 쓴다'는 문장은 못 찾아 web은 넣지 않았어요. cloud_service 근거는 보안 페이지의 AWS 인프라 문장이에요. 가격표에 'MCP server', 'Access to the Make API'도 있어요.
- 오픈소스 여부: 관련 문장을 못 찾았어요 → null + todo.
- features.automation.triggers는 '분 단위 일정 실행'(Core부터)과 웹훅 수신 문장이 근거예요. 무료 요금제는 실행 간격이 최소 15분이에요.
- AI 여부는 partial(자동화 플랫폼 + AI 단계·에이전트·Maia 어시스턴트), 대표 목적은 automation을 제안해요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote make --verified YYYY-MM-DD --dev
```

<a id="dev-n8n"></a>
### n8n (`n8n`) · 개발자용

공식 주소: https://n8n.io/  
공식 도메인: `n8n.io`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (15개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Want to run n8n for free Self-hosted (Community edition) Free with almost the complete feature set” · [페이지에서 보기](https://docs.n8n.io/choose-how-to-use-n8n#:~:text=Want%20to%20run%20n8n%20for,almost%20the%20complete%20feature%20set)
- [ ] 무료 한도: 셀프 호스팅 Community Edition은 무료 (n8n Cloud는 체험판만)  
  “Free option ⚠️ Free trial available ✅ Free Community edition with most features” · [페이지에서 보기](https://docs.n8n.io/choose-how-to-use-n8n#:~:text=Free%20option%20%E2%9A%A0%EF%B8%8F%20Free%20trial,Community%20edition%20with%20most%20features)
- [ ] 무료 한도: 셀프 호스팅 Community Edition은 무료 (n8n Cloud는 체험판만)  
  “A standard, self-hosted version of n8n is available on GitHub.” · [페이지에서 보기](https://n8n.io/pricing/#:~:text=A%20standard%2C%20self%2Dhosted%20version%20of%20n8n%20is%20available%20on%20GitHub.)
- [ ] 기본으로 학습에 씀: 아니요  
  “Data is only sent to AI services if your workspace has opted in to use the Assistant, which is on by default for n8n Cloud. Node-specific data is transmitted only during a direct interaction with the Assistant. This data is not used to train the AI services' models.” · [페이지에서 보기](https://docs.n8n.io/privacy-and-security#:~:text=Data%20is%20only%20sent%20to,train%20the%20AI%20services%27%20models.)
- [ ] 오픈소스: 아니요  
  “Although n8n's source code is available under the Sustainable Use License, according to the Open Source Initiative (OSI), open source licenses can't include limitations on use, so we do not call ourselves open source.” · [페이지에서 보기](https://docs.n8n.io/n8n-community-license#:~:text=Although%20n8n%27s%20source%20code%20is,not%20call%20ourselves%20open%20source.)
- [ ] 오픈소스: 아니요  
  “n8n is a fair-code licensed workflow automation tool that combines AI features with business process automation.” · [페이지에서 보기](https://docs.n8n.io/#:~:text=n8n%20is%20a%20fair%2Dcode%20licensed,features%20with%20business%20process%20automation.)
- [ ] 쓰는 형태: 클라우드 서비스, 셀프 호스팅  
  “n8n offers two primary deployment options: n8n Cloud (fully-managed) and Self-hosted (deploy on your own infrastructure).” · [페이지에서 보기](https://docs.n8n.io/choose-how-to-use-n8n#:~:text=n8n%20offers%20two%20primary%20deployment,%28deploy%20on%20your%20own%20infrastructure%29.)
- [ ] 쓰는 형태: 클라우드 서비스, 셀프 호스팅  
  “Deploy on-prem or with Docker to keep your data in your own environment. Access the source code on GitHub, or use the hosted version.” · [페이지에서 보기](https://n8n.io/#:~:text=Deploy%20on%2Dprem%20or%20with%20Docker,or%20use%20the%20hosted%20version.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 앱끼리 연결하는 워크플로  
  “Connect n8n to just about any tool you can think of. 500+ native integrations.” · [페이지에서 보기](https://n8n.io/#:~:text=Connect%20n8n%20to%20just%20about,think%20of.%20500%2B%20native%20integrations.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 워크플로 안에 AI 단계 넣기  
  “AI Agent node and AI steps” · [페이지에서 보기](https://n8n.io/pricing/#:~:text=AI%20Agent%20node%20and%20AI%20steps)
- [ ] ✓ 업무 자동화·에이전트 연결 — 워크플로 안에 AI 단계 넣기  
  “n8n is a fair-code licensed workflow automation tool that combines AI features with business process automation.” · [페이지에서 보기](https://docs.n8n.io/#:~:text=n8n%20is%20a%20fair%2Dcode%20licensed,features%20with%20business%20process%20automation.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “Trigger from webhooks, queues” · [페이지에서 보기](https://n8n.io/pricing/#:~:text=Trigger%20from%20webhooks%2C%20queues)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “Scheduled workflows: For workflows triggered on a regular schedule, count how many times the schedule runs in a month.” · [페이지에서 보기](https://n8n.io/pricing/#:~:text=Scheduled%20workflows%3A%20For%20workflows%20triggered,schedule%20runs%20in%20a%20month.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “Any API via HTTP. Any agent or coding assistant via MCP.” · [페이지에서 보기](https://n8n.io/#:~:text=Any%20API%20via%20HTTP.%20Any,or%20coding%20assistant%20via%20MCP.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “MCP Client” · [페이지에서 보기](https://n8n.io/pricing/#:~:text=MCP%20Client)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `price.paid_from_usd`
- [ ] `price.billing`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 업무 자동화·에이전트 연결
- [ ] 한 줄 설명: 노드를 이어 워크플로와 AI 에이전트를 만드는 자동화 도구예요. n8n 클라우드로 쓰거나 Docker로 내 서버에 직접 올릴 수 있고, 필요하면 코드 단계도 넣어요
- [ ] 시작 3단계: 1) n8n Cloud 무료 체험에 가입하거나, 공식 문서대로 Docker로 내 서버에 설치하기 2) 편집기에서 트리거 노드(일정·웹훅 등)와 이어서 실행할 노드를 연결하기 3) 테스트 실행으로 각 단계 결과를 확인한 뒤 워크플로를 켜기
- [ ] 주의할 점: 소스는 공개돼 있지만 Sustainable Use License라서 OSI 기준 오픈소스가 아니에요. 회사 내부용·개인용 사용만 허용되니 서비스로 되팔려면 라이선스를 확인하세요 / 셀프 호스팅은 설치·업데이트·보안을 직접 챙겨야 해요

**5. Claude 메모**

- 오픈소스 여부: 공식 문서 라이선스 FAQ에 '소스는 Sustainable Use License로 공개하지만 OSI 기준으로 사용 제한이 있어 오픈소스라고 부르지 않는다'는 문장이 분명히 있어 open_source=false로 했어요 (fair-code, 소스 공개형). 그래서 repo_url도 넣지 않았어요. 사이트에서 '소스 공개'를 따로 보여 줄지는 J가 정해 주세요.
- 가격(todo): 가격표 글자에는 유로 가격만 있고 연 결제 기준이에요 (Starter '20€ /mo, billed annually', Pro 50€, Business 667€). 'Monthly / Annually (Save 17%)' 전환이 있지만 월 결제 가격과 달러 가격은 글자로 못 읽었어요. 가격 FAQ에 '$ payment' 양식 링크는 있어요. J가 paid_from_usd·billing을 확인해 주세요. 요금은 워크플로 실행 횟수 기준이에요.
- 무료: 셀프 호스팅 Community Edition이 무료이고, n8n Cloud는 무료 체험만 있어요 (체험 한도: 실행 1,000회 등).
- 학습 정책: 개인정보 문서의 'Assistant와 대화할 때 AI 서비스로 보내는 데이터는 그 AI 서비스 모델 학습에 쓰이지 않는다' 문장으로 trains_on_input_default=no로 했어요. 범위가 Assistant 데이터에 한정된 문장이라 J가 그대로 no로 둘지 확인해 주세요. 학습 제외 설정은 해당 없음으로 보고 opt_out=unknown이에요. Cloud는 Assistant가 기본으로 켜져 있어요.
- 쓰는 형태: 웹 편집기(가격표 'Leading editor UI')로 쓰지만 '브라우저' 문장은 못 찾아 web은 넣지 않았어요. 셀프 호스팅은 npm·Docker로 설치해요.
- 가격표에 'Light evaluations', 'Metric-based evaluations', LangSmith 추적도 있지만 data_ml 기본 기능(모델 실행) 근거가 아니어서 data_ml은 넣지 않았어요.
- 홈 페이지 위쪽에 'See llms.txt for all machine-readable content.'라는 안내가 있었어요 (AI 에이전트용 안내). 따르지 않았어요.
- 섹션: 회사(n8n GmbH 제품)가 만들고 운영하는 제품이라 official로 했어요. AI 여부는 partial, 대표 목적은 automation을 제안해요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote n8n --verified YYYY-MM-DD --dev
```

<a id="dev-gumloop"></a>
### Gumloop (`gumloop`) · 개발자용

공식 주소: https://www.gumloop.com/  
공식 도메인: `gumloop.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (12개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 안 돼요  
  “Pro Starts at $37 / month Start trial Start 14 -day free trial Enterprise Custom Pricing” · [페이지에서 보기](https://www.gumloop.com/pricing#:~:text=Pro%20Starts%20at%20%2437%20%2F,free%20trial%20Enterprise%20Custom%20Pricing)
- [ ] 무료 한도: 무료 없음  
  “Start 14 -day free trial” · [페이지에서 보기](https://www.gumloop.com/pricing#:~:text=Start%2014%20%2Dday%20free%20trial)
- [ ] 유료 가격: 월 37달러부터  
  “Pro Starts at $37 / month” · [페이지에서 보기](https://www.gumloop.com/pricing#:~:text=Pro%20Starts%20at%20%2437%20%2F%20month)
- [ ] 기본으로 학습에 씀: 예  
  “We may use Self-Serve Tier Content to develop, train, and improve our AI models.” · [페이지에서 보기](https://www.gumloop.com/privacy-policy#:~:text=We%20may%20use%20Self%2DServe%20Tier,and%20improve%20our%20AI%20models.)
- [ ] 학습 메모: 셀프서브(Pro) 요금제의 콘텐츠는 Gumloop 자체 AI 모델 학습에 쓸 수 있다고 밝혀요. Enterprise는 서면 요청이 없으면 학습에 쓰지 않아요  
  “We do not use Content from the Enterprise Tier to train AI models unless you ask us to in writing.” · [페이지에서 보기](https://www.gumloop.com/privacy-policy#:~:text=We%20do%20not%20use%20Content,ask%20us%20to%20in%20writing.)
- [ ] 쓰는 형태: 클라우드 서비스, CLI  
  “Sign in once, then run agents, call MCP tools, search Company Brain, and manage skills and artifacts from your terminal.” · [페이지에서 보기](https://www.gumloop.com/products/cli#:~:text=Sign%20in%20once%2C%20then%20run,and%20artifacts%20from%20your%20terminal.)
- [ ] 쓰는 형태: 클라우드 서비스, CLI  
  “The agent infrastructure powering the world's most AI-native companies” · [페이지에서 보기](https://www.gumloop.com/#:~:text=The%20agent%20infrastructure%20powering%20the%20world%27s%20most%20AI%2Dnative%20companies)
- [ ] ✓ 업무 자동화·에이전트 연결 — 앱끼리 연결하는 워크플로  
  “Create AI agents that understand your business, work across your tools, and take work from idea to outcome.” · [페이지에서 보기](https://www.gumloop.com/pricing#:~:text=Create%20AI%20agents%20that%20understand,work%20from%20idea%20to%20outcome.)
- [ ] ✓ 업무 자동화·에이전트 연결 — 앱끼리 연결하는 워크플로  
  “App triggers Recurring tasks 400+ Connectors” · [페이지에서 보기](https://www.gumloop.com/#:~:text=App%20triggers%20Recurring%20tasks%20400%2B%20Connectors)
- [ ] ✓ 업무 자동화·에이전트 연결 — 일정·이벤트로 자동 실행  
  “App triggers Recurring tasks” · [페이지에서 보기](https://www.gumloop.com/#:~:text=App%20triggers%20Recurring%20tasks)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “List your connected servers , browse the tools each one exposes, and call any of them with inline JSON args” · [페이지에서 보기](https://www.gumloop.com/products/cli#:~:text=List%20your%20connected%20servers%20%2C,them%20with%20inline%20JSON%20args)
- [ ] ✓ 업무 자동화·에이전트 연결 — 외부 도구 연결 (MCP 등)  
  “Gumball can now set up custom MCPs for apps Gumloop doesn't have yet.” · [페이지에서 보기](https://www.gumloop.com/#:~:text=Gumball%20can%20now%20set%20up,apps%20Gumloop%20doesn%27t%20have%20yet.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI가 핵심
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 업무 자동화·에이전트 연결
- [ ] 한 줄 설명: 업무 앱과 연결된 AI 에이전트를 만들어 팀이 함께 쓰게 하는 플랫폼이에요. 앱 이벤트나 일정으로 자동 실행하고, CLI로 터미널에서도 에이전트와 MCP 도구를 불러요
- [ ] 시작 3단계: 1) gumloop.com에서 가입하고 Pro 14일 무료 체험 시작하기 2) 에이전트를 만들고 Slack·Gmail 같은 커넥터와 지시문 넣기 3) 앱 트리거나 반복 일정을 붙여 자동으로 돌려 보기
- [ ] 주의할 점: 무료 요금제가 없고, 체험이 끝나면 유료(월 37달러부터) 요금제가 필요해요 / Pro 같은 셀프서브 요금제에 넣은 콘텐츠는 Gumloop AI 모델 학습에 쓰일 수 있어요. 민감한 데이터는 조심하세요

**5. Claude 메모**

- 무료 여부: 가격표에 Pro('Starts at $37 / month', 14일 무료 체험)와 Enterprise만 있어 free=false로 했어요. 월 결제인지 연 결제인지 따로 적혀 있지 않아 '/ month' 표기대로 monthly로 뒀어요. 크레딧(월 20k) + 오케스트레이션 수수료 8%가 붙는 구조예요.
- 학습 정책: 개인정보 처리방침 21조에 '셀프서브 요금제 콘텐츠는 우리 AI 모델 학습에 쓸 수 있다'는 문장이 있어 trains_on_input_default=yes로 했어요. 셀프서브 사용자가 끌 수 있다는 문장은 없고 Enterprise만 서면 요청 시 예외라 opt_out=unknown이에요. 이용 약관에도 같은 취지 문장이 있어요. 'OpenAI·Anthropic과 학습하지 않기로 계약했다'는 문장도 있어요.
- 기능: workflow 근거가 '에이전트가 여러 도구에 걸쳐 일한다' + '400+ Connectors'예요. 워크플로 빌더 자체는 가격표에 'Workflows (Legacy)'로만 나와서 J가 workflow를 셀지 확인해 주세요. ai_step(워크플로 안 AI 단계)은 직접 소개 문장을 못 찾아 넣지 않았어요.
- 쓰는 형태: 웹 앱으로 쓰지만 '브라우저에서 쓴다'는 문장이 없어 web은 넣지 않았어요. cloud_service 근거 문장이 약해서('The agent infrastructure ...') J가 확인해 주세요.
- docs.gumloop.com은 화면 스크립트로 그려져 글자가 비어 읽지 못했어요 (배울 거리 링크는 가격표 하단 'Docs' 링크에서 가져옴).
- 오픈소스 여부: 관련 문장 없음 → null + todo. 운영사는 AgentHub Inc.예요.
- AI 여부는 yes(AI 에이전트 플랫폼), 대표 목적은 automation을 제안해요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote gumloop --verified YYYY-MM-DD --dev
```

<a id="dev-snyk"></a>
### Snyk (`snyk`) · 개발자용

공식 주소: https://snyk.io/  
공식 도메인: `snyk.io`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (10개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free For individual developers and small teams looking to stay secure as they build. Join for free $0 / month billed monthly” · [페이지에서 보기](https://snyk.io/plans/#:~:text=Free%20For%20individual%20developers%20and,%240%20%2F%20month%20billed%20monthly)
- [ ] 무료 한도: Snyk Code(SAST) 월 100회 테스트, 프로젝트 5개  
  “Projects ? 5 100 Snyk Code (SAST) ? 100 tests / month 1,000 tests / month” · [페이지에서 보기](https://snyk.io/plans/#:~:text=Projects%20%3F%205%20100%20Snyk,month%201%2C000%20tests%20%2F%20month)
- [ ] 유료 가격: 월 25달러부터  
  “Starting at $25 / month billed monthly” · [페이지에서 보기](https://snyk.io/plans/#:~:text=Starting%20at%20%2425%20%2F%20month%20billed%20monthly)
- [ ] 기본으로 학습에 씀: 아니요  
  “Our specialized model is built and refined by top-tier researchers who use training data from millions of permissively licensed open source projects with verified code fixes — never customer data.” · [페이지에서 보기](https://snyk.io/platform/deepcode-ai/#:~:text=Our%20specialized%20model%20is%20built,fixes%20%E2%80%94%20never%20customer%20data.)
- [ ] 쓰는 형태: IDE 확장, CLI, 클라우드 서비스  
  “Integrations with IDE, CLI, and source code managers” · [페이지에서 보기](https://snyk.io/plans/#:~:text=Integrations%20with%20IDE%2C%20CLI%2C%20and%20source%20code%20managers)
- [ ] 쓰는 형태: IDE 확장, CLI, 클라우드 서비스  
  “The region where your data is hosted follows local agreements, and it may not align with your own location.” · [페이지에서 보기](https://snyk.io/plans/#:~:text=The%20region%20where%20your%20data,align%20with%20your%20own%20location.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — PR 자동 리뷰 코멘트  
  “Get real-time, in-line results with complete, automatic scans and 80%-accurate fixes, in your IDE and pull requests.” · [페이지에서 보기](https://snyk.io/product/snyk-code/#:~:text=Get%20real%2Dtime%2C%20in%2Dline%20results%20with,your%20IDE%20and%20pull%20requests.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — PR 자동 리뷰 코멘트  
  “Automatically scan every PR and repo for a status report to assess, prioritize, and fix existing issues.” · [페이지에서 보기](https://snyk.io/product/snyk-code/#:~:text=Automatically%20scan%20every%20PR%20and,prioritize%2C%20and%20fix%20existing%20issues.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 보안 취약점 검사  
  “Find and auto-fix the most critical unsafe code up to 50x faster, with pre-validated fixes from a static application security testing tool built by and for developers.” · [페이지에서 보기](https://snyk.io/product/snyk-code/#:~:text=Find%20and%20auto%2Dfix%20the%20most,built%20by%20and%20for%20developers.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 수정 제안 바로 적용  
  “Find code vulnerabilities, understand more with dev-friendly context-specific explanations, and instantly apply auto-fixes with one click.” · [페이지에서 보기](https://snyk.io/product/snyk-code/#:~:text=Find%20code%20vulnerabilities%2C%20understand%20more,apply%20auto%2Dfixes%20with%20one%20click.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 코드 리뷰·품질 검사 받기
- [ ] 한 줄 설명: 코드·오픈소스 의존성·컨테이너·IaC의 보안 취약점을 찾아 알려 주는 보안 검사 플랫폼이에요. IDE와 PR에서 바로 검사하고 AI 자동 수정(Agent Fix)도 제안해요
- [ ] 시작 3단계: 1) snyk.io에서 GitHub이나 Google 계정으로 무료 가입하기 2) 저장소를 연결하거나 IDE 플러그인·CLI를 설치해 첫 검사 돌리기 3) 찾은 취약점의 설명과 수정 제안을 보고 PR 검사를 켜기
- [ ] 주의할 점: 무료 요금제는 제품마다 월 테스트 횟수 한도가 있어요 (Snyk Code는 월 100회) / Evo(AI 펜테스트·코딩 에이전트 보안 등) 기능은 무료·Team 요금제에 없고 Enterprise 계약이 필요해요

**5. Claude 메모**

- 가격: Free 0달러, Team 'Starting at $25 / month billed monthly'(개발자 10명까지). Enterprise는 크레딧제(1크레딧=1달러)로 영업 문의예요.
- 무료 한도: 비교표에서 Projects Free 5 / Team 100, Snyk Code(SAST) Free 월 100회 / Team 월 1,000회예요 (줄마다 '?' 도움말 아이콘 글자가 끼어 있어요). 오픈소스·IaC·컨테이너 줄의 숫자는 글자로 안 보여서 넣지 않았어요. Agent Fix 자동 수정은 Free에 '(limited time only)'로 붙어 있어요.
- 학습 정책: DeepCode AI 페이지의 '학습 데이터는 허용 라이선스 오픈소스 프로젝트 — 고객 데이터는 절대 쓰지 않음' 문장으로 trains_on_input_default=no로 했어요. Snyk Code 페이지는 프런티어 모델에 few-shot 프롬프트로 지침을 넣는다고 해요(외부 모델 사용). 외부 모델의 학습 여부 문장은 없어요. opt_out은 해당 문장이 없어 unknown이에요.
- PR 리뷰(pr_review): 'PR마다 자동 검사·상태 보고', 'PR 안 인라인 결과' 문장이 근거예요. 일반적인 코드 리뷰 코멘트가 아니라 보안 검사 결과라서 J가 셀지 확인해 주세요. 테스트 생성(tests)은 근거가 없어 넣지 않았어요.
- 쓰는 형태: cloud_service 근거는 가격 페이지의 지역 호스팅 문장(app.snyk.io 등)이에요. 웹 대시보드가 있지만 '브라우저' 문장은 없어 web은 넣지 않았어요.
- 오픈소스 여부: 관련 문장 없음 → null + todo. docs.snyk.io는 화면 스크립트로 그려져 글자가 비어 읽지 못했어요(배울 거리 링크만 넣음).
- 가격·제품 페이지 하단에 'llms.txt' 링크가 있었어요(따르지 않음). AI 여부는 partial(보안 검사 도구 + AI 수정·분석), 대표 목적은 code_review를 제안해요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote snyk --verified YYYY-MM-DD --dev
```

<a id="dev-sonarqube"></a>
### SonarQube (`sonarqube`) · 개발자용

공식 주소: https://www.sonarsource.com/  
공식 도메인: `sonarsource.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (13개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Developers Free forever SonarQube Team Plan, free for your private projects up to 50k LOC. No card, no expiry.” · [페이지에서 보기](https://www.sonarsource.com/plans-and-pricing/#:~:text=Developers%20Free%20forever%20SonarQube%20Team,LOC.%20No%20card%2C%20no%20expiry.)
- [ ] 무료 한도: 비공개 프로젝트 5만 줄(50k LOC)까지 무료  
  “We also offer a free tier that allows you to explore SonarQube using your private projects up to a maximum of 50k LoC.” · [페이지에서 보기](https://www.sonarsource.com/plans-and-pricing/#:~:text=We%20also%20offer%20a%20free,a%20maximum%20of%2050k%20LoC.)
- [ ] 유료 가격: 월 34달러부터  
  “SonarQube plan pricing starts at $34 monthly for analysis of up to 100k LOC.” · [페이지에서 보기](https://www.sonarsource.com/plans-and-pricing/#:~:text=SonarQube%20plan%20pricing%20starts%20at,of%20up%20to%20100k%20LOC.)
- [ ] 결제 주기: monthly  
  “For the Team plan, payment is completed online via credit card and will happen automatically every month.” · [페이지에서 보기](https://www.sonarsource.com/plans-and-pricing/#:~:text=For%20the%20Team%20plan%2C%20payment,will%20happen%20automatically%20every%20month.)
- [ ] 쓰는 형태: 클라우드 서비스, 셀프 호스팅, IDE 확장, CLI  
  “SonarQube Server is our self-managed static analysis solution.” · [페이지에서 보기](https://www.sonarsource.com/plans-and-pricing/#:~:text=SonarQube%20Server%20is%20our%20self%2Dmanaged%20static%20analysis%20solution.)
- [ ] 쓰는 형태: 클라우드 서비스, 셀프 호스팅, IDE 확장, CLI  
  “try the full capabilities of either managed SaaS or self-hosted solutions before making any commitment.” · [페이지에서 보기](https://www.sonarsource.com/plans-and-pricing/#:~:text=try%20the%20full%20capabilities%20of,solutions%20before%20making%20any%20commitment.)
- [ ] 쓰는 형태: 클라우드 서비스, 셀프 호스팅, IDE 확장, CLI  
  “SonarQube for IDE Free extension. On-the-fly analysis and guidance as you type.” · [페이지에서 보기](https://www.sonarsource.com/plans-and-pricing/#:~:text=SonarQube%20for%20IDE%20Free%20extension.,and%20guidance%20as%20you%20type.)
- [ ] 쓰는 형태: 클라우드 서비스, 셀프 호스팅, IDE 확장, CLI  
  “SonarQube CLI Run analysis from any terminal, CI pipeline, or coding agent.” · [페이지에서 보기](https://www.sonarsource.com/plans-and-pricing/#:~:text=SonarQube%20CLI%20Run%20analysis%20from,CI%20pipeline%2C%20or%20coding%20agent.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — PR 자동 리뷰 코멘트  
  “Gitar reviews pull requests directly on GitHub (along with GitLab , Bitbucket , and Azure DevOps ), appearing as status checks and inline comments on the PR you already have open.” · [페이지에서 보기](https://www.sonarsource.com/solutions/code-review/ai/#:~:text=Gitar%20reviews%20pull%20requests%20directly,PR%20you%20already%20have%20open.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — PR 자동 리뷰 코멘트  
  “Finds bugs, vulnerabilities, and security hotspots across 30+ languages on every pull request.” · [페이지에서 보기](https://www.sonarsource.com/plans-and-pricing/#:~:text=Finds%20bugs%2C%20vulnerabilities%2C%20and%20security,languages%20on%20every%20pull%20request.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 보안 취약점 검사  
  “Identifies injection vulnerabilities by simulating the flow of data through every code path to find deeply hidden vulnerabilities” · [페이지에서 보기](https://www.sonarsource.com/solutions/automated-code-review/#:~:text=Identifies%20injection%20vulnerabilities%20by%20simulating,to%20find%20deeply%20hidden%20vulnerabilities)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 수정 제안 바로 적용  
  “It identifies issues, explains them, and generates a fix it can commit to the branch.” · [페이지에서 보기](https://www.sonarsource.com/solutions/code-review/ai/#:~:text=It%20identifies%20issues%2C%20explains%20them%2C,can%20commit%20to%20the%20branch.)
- [ ] 오픈소스: 확인 필요  
  “Every Sonar project released under the GPL and LGPL: the SonarQube Server core, scanners, IDE clients, CI/CD integrations, the plugin API, and the tooling we build in the open.” · [페이지에서 보기](https://www.sonarsource.com/open-source/#:~:text=Every%20Sonar%20project%20released%20under,we%20build%20in%20the%20open.)

**3. J가 채울 칸** — 공식 페이지를 직접 보고 값과 근거를 채운 뒤 `todo`에서 지워요

- [ ] `open_source`
- [ ] `privacy.trains_on_input_default`
- [ ] `privacy.opt_out`

**4. J가 정하는 값** — Claude의 제안이에요. 그대로 두거나 초안에서 고쳐요

- [ ] AI 여부: AI 기능 일부
- [ ] 섹션: 공식 AI 툴
- [ ] 대표 목적: 코드 리뷰·품질 검사 받기
- [ ] 한 줄 설명: 코드의 버그·취약점·품질 문제를 정적 분석으로 잡아내는 코드 품질·보안 검사 도구예요. PR마다 검사하고, Sonar의 Gitar가 AI로 PR을 리뷰하고 수정까지 올려요
- [ ] 시작 3단계: 1) SonarQube Cloud에 가입해 GitHub 같은 저장소를 연결하기 (또는 IDE 확장 설치) 2) 프로젝트 첫 분석을 돌려 버그·취약점·코드 냄새 결과 보기 3) 품질 게이트를 정해 기준에 못 미치는 PR을 막도록 설정하기
- [ ] 주의할 점: 무료는 비공개 코드 5만 줄까지예요. 그 이상은 줄 수(LOC)에 따라 요금이 올라가요 / AI PR 리뷰·자동 수정은 별도 제품(Gitar)이고 요금도 따로예요

**5. Claude 메모**

- id·이름: 회사는 Sonar(sonarsource.com)이고 제품은 SonarQube(Cloud·Server·for IDE·CLI)예요. AI PR 리뷰·자동 수정(pr_review의 인라인 코멘트, apply_fix)은 Sonar의 별도 제품 Gitar 근거예요. Gitar를 SonarQube 항목에 포함해 셀지, 따로 둘지 J가 정해 주세요. SonarQube 자체도 'every pull request'마다 검사하고 PR을 막는 품질 게이트가 있어요.
- 가격: SonarQube Team '$34 monthly'(10만 줄까지), 결제는 매달 자동이에요. 같은 페이지 FAQ 아래쪽에는 'prices start at $32 per month (previously listed at $65)'라는 다른 숫자도 있어 J가 확인해 주세요. Gitar는 '$20 /user/mo, billed annually'(연 결제)라 기준에서 뺐어요. 셀프 호스팅 Server는 인스턴스별 연 단위 가격이에요.
- 무료: 비공개 프로젝트 5만 줄까지 영구 무료, 공개 OSI 라이선스 저장소는 무료(SonarQube for OSS), IDE 확장 무료, Community Build 무료 다운로드.
- 오픈소스 여부(todo): 오픈소스 페이지에 'SonarQube Server core, scanners, IDE clients 등은 GPL·LGPL'이라는 문장이 있지만, 같은 페이지에 '언어 분석기, MCP 서버, AI 도구는 Sonar Source-Available License(SSAL)'라고 나와요. 유료 Cloud·Server 에디션도 있어 '오픈 코어' 구조예요. 그래서 true/false를 정하지 않고 null + todo로 뒀어요. 저장소는 github.com/SonarSource(오픈소스 페이지의 'View on GitHub' 링크)예요.
- 학습 정책(todo): 신뢰 센터·가격·AI 리뷰 페이지에서 고객 코드를 AI 학습에 쓰는지에 대한 문장을 못 찾았어요. Enterprise 설명에 'zero data retention and BYOK with LLMs', Gitar 설명에 'zero data retention'이 있어요. 개인정보 처리방침(/company/privacy/)은 읽지 않았어요.
- AI 여부는 partial(정적 분석 도구 + AI 리뷰·수정), 대표 목적은 code_review를 제안해요. 테스트 생성(tests)은 근거가 없어 넣지 않았어요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote sonarqube --verified YYYY-MM-DD --dev
```
