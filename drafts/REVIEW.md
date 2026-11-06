# 초안 검토 체크리스트

`node scripts/review-checklist.js`로 만든 파일이에요. 직접 고치지 말고, 초안이 바뀌면 다시 만들어요.

툴마다 순서대로 확인해요: ① 공식 도메인 → ② 근거 문장 대조 → ③ 비어 있는 칸 채우기 → ④ 제안값 정하기 → ⑥ 확정.
근거 링크는 크롬·엣지에서 열면 그 문장이 노랗게 강조돼요. 강조가 안 되면 Ctrl+F(맥은 ⌘+F)로 문장 앞부분을 찾아요.

| 툴 | 사이트 | 근거 | J가 채울 칸 |
| --- | --- | --- | --- |
| [tl;dv](#general-tldv) | 비개발자용 | 9개 | `price.free_limit` `price.paid_from_usd` `price.billing` `platforms` `login` |
| [Grok](#general-grok) | 비개발자용 | 22개 | `price.paid_from_usd` `price.billing` |
| [Claude Code](#dev-claude-code) | 개발자용 | 17개 | `open_source` |
| [Cloudflare Workers](#dev-cloudflare) | 개발자용 | 15개 | `open_source` |
| [Google AI Studio](#dev-google-ai-studio) | 개발자용 | 13개 | `price.paid_from_usd` `open_source` |
| [Google Antigravity](#dev-antigravity) | 개발자용 | 18개 | `price.paid_from_usd` |
| [Linear](#dev-linear) | 개발자용 | 14개 | `privacy.trains_on_input_default` `privacy.opt_out` `price.paid_from_usd` `price.billing` |
| [Bolt](#dev-bolt) | 개발자용 | 15개 | `open_source` `price.paid_from_usd` `price.billing` |
| [Supabase](#dev-supabase) | 개발자용 | 22개 | `privacy.trains_on_input_default` `privacy.opt_out` |
| [Neon](#dev-neon) | 개발자용 | 15개 | `privacy.trains_on_input_default` `privacy.opt_out` `open_source` |
| [Pinecone](#dev-pinecone) | 개발자용 | 14개 | `privacy.trains_on_input_default` `privacy.opt_out` |
| [Hugging Face](#dev-hugging-face) | 개발자용 | 13개 | `open_source` |
| [LangSmith](#dev-langsmith) | 개발자용 | 13개 | `open_source` |
| [Ollama](#dev-ollama) | 개발자용 | 8개 | `open_source` |
| [Notion AI](#dev-notion) | 개발자용 | 13개 | `price.paid_from_usd` `price.billing` |
| [Miro AI](#dev-miro) | 개발자용 | 15개 | `price.paid_from_usd` `price.billing` |
| [Figma (Figma AI·FigJam·Figma Make)](#dev-figma) | 개발자용 | 20개 | `price.paid_from_usd` `price.billing` |
| [Atlassian Rovo](#dev-atlassian-rovo) | 개발자용 | 14개 | `price.paid_from_usd` `privacy.trains_on_input_default` `privacy.opt_out` |
| [Uizard](#dev-uizard) | 개발자용 | 15개 | `price.paid_from_usd` `price.billing` |
| [GitHub Copilot](#dev-github-copilot) | 개발자용 | 21개 | `open_source` |
| [Kiro](#dev-kiro) | 개발자용 | 20개 | `open_source` |
| [Make](#dev-make) | 개발자용 | 9개 | `price.paid_from_usd` `price.billing` |
| [n8n](#dev-n8n) | 개발자용 | 15개 | `price.paid_from_usd` `price.billing` |
| [SonarQube](#dev-sonarqube) | 개발자용 | 11개 | `open_source` `privacy.trains_on_input_default` `privacy.opt_out` |

## 비개발자용 (2개)

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

## 개발자용 (22개)

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
- 쓰는 형태: 데스크톱 앱(macOS·Windows·Linux), 전용 IDE(데스크톱으로 묶음), CLI, IDE 확장(VS Code·Visual Studio·JetBrains·Zed·Xcode), Python SDK(library). 브라우저 원격 조종(Remote Control)은 내 컴퓨터 세션을 조종하는 기능이라 web으로 넣지 않았어요.
- 기능 체크리스트: coding_agents 3개(PR 올리기는 공식 문장을 못 찾음, '커밋 푸시'까지만 나옴). code_review는 tests와 apply_fix(리뷰 의견 받아 수정 적용, 활용 사례 페이지 문장). 같은 페이지에 '팀 규칙으로 리뷰 전 검사(pre-review checks)'가 있지만 PR에 자동 리뷰 코멘트를 다는 기능이라는 문장은 아니라서 pr_review는 넣지 않았어요. automation은 일정 실행(/schedule)과 MCP 연결 2개.
- 블로그 글(antigravity.google/blog)은 공식 도메인이지만 블로그라 근거로 쓰지 않았어요. 다운로드 페이지에 설치 스크립트 명령이 있지만 받거나 실행하지 않았어요.
- AI 여부(yes), 섹션(official), 대표 목적(coding_agents)은 제안값이에요.
- 오픈소스: 공식 첫 화면에 소스 저장소(GitHub·GitLab) 링크가 없어요. 그래서 오픈소스 아님(false)으로 넣었어요 (2026-11-06 규칙: 공식 저장소가 없으면 근거 없이 false).

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

**2. 근거 대조** (14개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free $0 Free for everyone” · [페이지에서 보기](https://linear.app/pricing#:~:text=Free%20%240%20Free%20for%20everyone)
- [ ] 무료 한도: 팀 2개, 이슈 250개까지 (코드 작업은 유료)  
  “Unlimited members 2 teams 250 issues” · [페이지에서 보기](https://linear.app/pricing#:~:text=Unlimited%20members%202%20teams%20250%20issues)
- [ ] 무료 한도: 팀 2개, 이슈 250개까지 (코드 작업은 유료)  
  “Coding sessions are supported on paid plans. Usage draws from your workspace’s AI credits.” · [페이지에서 보기](https://linear.app/docs/coding-sessions#:~:text=Coding%20sessions%20are%20supported%20on,from%20your%20workspace%E2%80%99s%20AI%20credits.)
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
- [ ] `price.paid_from_usd`
- [ ] `price.billing`

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
- 쓰는 형태: 웹과 데스크톱(macOS·Windows) 앱. 모바일(iOS·Android) 앱도 있지만 forms 목록에 모바일이 없어 뺐어요.
- 기능 체크리스트: planning 2개(이슈 관리, 문서 초안: 문서의 예시 프롬프트 'Draft a new document...'를 근거로 함. PRD라는 말은 없음). coding_agents 3개(여러 파일 수정 문장은 못 찾음). run_commands와 open_pr는 같은 문장('writes and tests the change ... returns a draft pull request')을 근거로 했어요. 코드는 Linear가 직접 짜는 게 아니라 Claude Code나 Codex를 써서 Linear Agent가 돌려요. code_review 2개(테스트 추가, 리뷰 의견 반영). PR 자동 리뷰 코멘트 문장은 없어요('Guided reviews'는 사람이 diff를 보기 쉽게 정리해 주는 기능). automation 2개(Loops 일정·이벤트 실행, MCP 서버 연결).
- AI 여부(partial: AI는 이슈 관리 도구의 일부), 섹션(official), 대표 목적(planning)은 제안값이에요.
- 유료 가격은 월 결제 기준으로 넣기로 했어요 (J 결정, 2026-10-23). 가격 페이지에서 글자로 읽히는 건 연 결제 월 10달러뿐이에요. 월/연 전환 버튼을 월 결제로 바꿔 가장 싼 유료 요금제 가격을 확인하고 채워 주세요.
- 오픈소스: 공식 첫 화면에 회사 GitHub 계정(github.com/linear) 링크는 있지만 이 제품 자체의 소스 저장소 링크는 없어요. 그래서 오픈소스 아님(false)으로 넣었어요 (2026-11-06 규칙: 공식 저장소가 없으면 근거 없이 false).

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

**2. 근거 대조** (15개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free $0 /month Free forever, no card required” · [페이지에서 보기](https://bolt.new/pricing#:~:text=Free%20%240%20%2Fmonth%20Free%20forever%2C%20no%20card%20required)
- [ ] 무료 한도: 한 달 토큰 100만 개 (하루 30만 개까지)  
  “1M tokens/month to try Bolt” · [페이지에서 보기](https://bolt.new/pricing#:~:text=1M%20tokens%2Fmonth%20to%20try%20Bolt)
- [ ] 무료 한도: 한 달 토큰 100만 개 (하루 30만 개까지)  
  “Daily Token Limit 300K No Limit No Limit No Limit” · [페이지에서 보기](https://bolt.new/pricing#:~:text=Daily%20Token%20Limit%20300K%20No%20Limit%20No%20Limit%20No%20Limit)
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
- [ ] `price.paid_from_usd`
- [ ] `price.billing`

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
- 유료 가격은 월 결제 기준으로 넣기로 했어요 (J 결정, 2026-10-23). 가격 페이지에서 글자로 읽히는 건 연 결제 Pro 월 18달러뿐이에요. 월/연 전환 버튼을 월 결제로 바꿔 가장 싼 유료 요금제 가격을 확인하고 채워 주세요.

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote bolt --verified YYYY-MM-DD --dev
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
- 기능 체크리스트(data_ml 3개): vector_db(벡터 DB 본체), rag(Assistant: 파일 업로드·자동 청킹·검색), run_models(Inference: 임베딩·재정렬 모델을 Pinecone이 실행, 가격표 근거). run_models를 '모델 실행'으로 볼지 J가 정해 주세요. 가격표에 Assistant 'Evaluation Processed Tokens' 항목이 있지만 기능 설명 문장이 아니라 eval은 넣지 않았어요.
- 쓰는 형태: cloud_service만 넣었어요. 홈에 CLI·MCP·Claude Code 플러그인 탭과 Python SDK 예시가 있고, Enterprise용 BYOC(내 클라우드 계정에서 실행)도 있지만 정식 설명 문장을 문서에서 확인하지 못했어요.
- AI 여부: 벡터 DB 자체는 AI 모델이 아니지만 제품 전체가 AI 앱용(검색·Assistant·임베딩 모델)이라 yes로 제안했어요. partial이 맞다고 보면 바꿔 주세요. 섹션(official), 대표 목적(data_ml)도 제안값이에요.
- official_domains는 pinecone.io로 넣어 www·docs 하위 도메인을 같이 허용했어요.
- 오픈소스: 공식 첫 화면에 회사 GitHub 계정(github.com/pinecone-io) 링크는 있지만 이 제품 자체의 소스 저장소 링크는 없어요. 그래서 오픈소스 아님(false)으로 넣었어요 (2026-11-06 규칙: 공식 저장소가 없으면 근거 없이 false).

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

<a id="dev-notion"></a>
### Notion AI (`notion`) · 개발자용

공식 주소: https://www.notion.com/product/ai  
공식 도메인: `notion.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (13개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free $0 per member / month For individuals to organize personal projects and life.” · [페이지에서 보기](https://www.notion.com/pricing#:~:text=Free%20%240%20per%20member%20%2F,organize%20personal%20projects%20and%20life.)
- [ ] 무료 한도: AI는 체험용 사용량만 (Free·Plus 요금제)  
  “Users on the Free and Plus Plans get a limited number of complimentary AI responses so they can try Notion AI features out.” · [페이지에서 보기](https://www.notion.com/help/notion-ai-faqs#:~:text=Users%20on%20the%20Free%20and,try%20Notion%20AI%20features%20out.)
- [ ] 무료 한도: AI는 체험용 사용량만 (Free·Plus 요금제)  
  “Trial AI capabilities like generating docs, or autofilling databases” · [페이지에서 보기](https://www.notion.com/pricing#:~:text=Trial%20AI%20capabilities%20like%20generating%20docs%2C%20or%20autofilling%20databases)
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

- [ ] `price.paid_from_usd`
- [ ] `price.billing`

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
- 쓰는 형태: 웹·데스크톱(macOS·Windows). 웹 근거는 도움말 메뉴 제목('Notion on desktop, web, & mobile')이에요. 모바일 앱도 있지만 forms 목록에 없어 뺐어요. 개발자 플랫폼 CLI(Workers 배포용)는 Notion AI 사용 형태가 아니라 넣지 않았어요.
- 기능 체크리스트: planning 2개(문서 초안, 이슈·작업 관리 - 근거는 '프로젝트나 할 일을 한곳에 정리' 데이터베이스 문장). 화이트보드·실시간 공동 편집은 AI 페이지에서 직접 소개하는 문장을 못 찾아 뺐어요(이미지 생성으로 다이어그램을 만든다는 문장은 있음). automation 3개(Custom Agents 워크플로·Slack/메일/캘린더 연결, 일정 트리거, MCP 연결). '워크플로 안에 AI 단계'는 Custom Agent 자체가 AI라 애매해서 뺐어요.
- AI 여부(partial: 문서·협업 도구의 일부), 섹션(official), 대표 목적(planning)은 제안값이에요.
- 유료 가격은 월 결제 기준으로 넣기로 했어요 (J 결정, 2026-10-23). 가격 페이지에서 글자로 읽히는 건 연 결제 Plus 월 10달러 / Business 월 20달러뿐이에요. 월/연 전환 버튼을 월 결제로 바꿔 가장 싼 유료 요금제 가격을 확인하고 채워 주세요.
- 오픈소스: 공식 첫 화면에 소스 저장소(GitHub·GitLab) 링크가 없어요. 그래서 오픈소스 아님(false)으로 넣었어요 (2026-11-06 규칙: 공식 저장소가 없으면 근거 없이 false).

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

**2. 근거 대조** (15개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Yes, Miro has a free plan with unlimited team members.” · [페이지에서 보기](https://miro.com/pricing/#:~:text=Yes%2C%20Miro%20has%20a%20free%20plan%20with%20unlimited%20team%20members.)
- [ ] 무료 한도: 편집 가능한 보드 3개, AI 크레딧 월 10개  
  “You get up to 3 editable boards and with 10 credits per month you have the ability to try AI for generating diagrams, tables, and summaries.” · [페이지에서 보기](https://miro.com/pricing/#:~:text=You%20get%20up%20to%203,generating%20diagrams%2C%20tables%2C%20and%20summaries.)
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

- [ ] `price.paid_from_usd`
- [ ] `price.billing`

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
- 유료 가격은 월 결제 기준으로 넣기로 했어요 (J 결정, 2026-10-23). 가격 페이지에서 글자로 읽히는 건 연 결제 Starter 월 8달러뿐이에요. 월/연 전환 버튼을 월 결제로 바꿔 가장 싼 유료 요금제 가격을 확인하고 채워 주세요.
- 오픈소스: 공식 첫 화면에 소스 저장소(GitHub·GitLab) 링크가 없어요. 그래서 오픈소스 아님(false)으로 넣었어요 (2026-11-06 규칙: 공식 저장소가 없으면 근거 없이 false).

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

**2. 근거 대조** (20개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Starter Free Free limited access to Figma products” · [페이지에서 보기](https://www.figma.com/pricing/#:~:text=Starter%20Free%20Free%20limited%20access%20to%20Figma%20products)
- [ ] 무료 한도: Starter 요금제: AI 크레딧 하루 150개, 월 500개까지  
  “150 AI credits/day, up to 500 AI credits/mo” · [페이지에서 보기](https://www.figma.com/pricing/#:~:text=150%20AI%20credits%2Fday%2C%20up%20to%20500%20AI%20credits%2Fmo)
- [ ] 무료 한도: Starter 요금제: AI 크레딧 하루 150개, 월 500개까지  
  “All other seats (Collab, Dev, and View) and users on the Starter plan receive 500 credits/month.” · [페이지에서 보기](https://www.figma.com/ai/#:~:text=All%20other%20seats%20%28Collab%2C%20Dev%2C,Starter%20plan%20receive%20500%20credits%2Fmonth.)
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

- [ ] `price.paid_from_usd`
- [ ] `price.billing`

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
- AI 여부(partial: 디자인 도구의 일부. Figma Make만 보면 yes에 가까움), 섹션(official), 대표 목적(design_ui, 대안 app_builders)은 제안값이에요.
- 유료 가격은 월 결제 기준으로 넣기로 했어요 (J 결정, 2026-10-23). 가격 페이지에서 글자로 읽히는 건 연 결제 Professional 월 16달러뿐이에요. 월/연 전환 버튼을 월 결제로 바꿔 가장 싼 유료 요금제 가격을 확인하고 채워 주세요.
- 오픈소스: 공식 첫 화면에 소스 저장소(GitHub·GitLab) 링크가 없어요. 그래서 오픈소스 아님(false)으로 넣었어요 (2026-11-06 규칙: 공식 저장소가 없으면 근거 없이 false).

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
- AI 여부(yes), 섹션(official), 대표 목적(automation, 대안 planning)은 제안값이에요.
- 코딩 에이전트 Rovo Dev는 이번에는 따로 넣지 않기로 했어요 (J 결정).
- 오픈소스: 공식 첫 화면에 소스 저장소(GitHub·GitLab) 링크가 없어요. 그래서 오픈소스 아님(false)으로 넣었어요 (2026-11-06 규칙: 공식 저장소가 없으면 근거 없이 false).

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

**2. 근거 대조** (15개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

- [ ] 무료 사용: 돼요  
  “Free for everyone $0 For students and hobbyists” · [페이지에서 보기](https://uizard.io/pricing/#:~:text=Free%20for%20everyone%20%240%20For%20students%20and%20hobbyists)
- [ ] 무료 한도: AI 생성 월 3번, 프로젝트 2개  
  “3 AI generations per month” · [페이지에서 보기](https://uizard.io/pricing/#:~:text=3%20AI%20generations%20per%20month)
- [ ] 무료 한도: AI 생성 월 3번, 프로젝트 2개  
  “2 projects” · [페이지에서 보기](https://uizard.io/pricing/#:~:text=2%20projects)
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

- [ ] `price.paid_from_usd`
- [ ] `price.billing`

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
- AI 여부(yes: 'AI-first'로 시작한 디자인 도구), 섹션(official), 대표 목적(design_ui)은 제안값이에요.
- 유료 가격은 월 결제 기준으로 넣기로 했어요 (J 결정, 2026-10-23). 가격 페이지에서 글자로 읽히는 건 연 결제 Pro 월 12달러뿐이에요. 월/연 전환 버튼을 월 결제로 바꿔 가장 싼 유료 요금제 가격을 확인하고 채워 주세요.
- 오픈소스: 공식 첫 화면에 소스 저장소(GitHub·GitLab) 링크가 없어요. 그래서 오픈소스 아님(false)으로 넣었어요 (2026-11-06 규칙: 공식 저장소가 없으면 근거 없이 false).

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote uizard --verified YYYY-MM-DD --dev
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
- features.automation.triggers는 '분 단위 일정 실행'(Core부터)과 웹훅 수신 문장이 근거예요. 무료 요금제는 실행 간격이 최소 15분이에요.
- AI 여부는 partial(자동화 플랫폼 + AI 단계·에이전트·Maia 어시스턴트), 대표 목적은 automation을 제안해요.
- 오픈소스: 공식 첫 화면에 소스 저장소(GitHub·GitLab) 링크가 없어요. 그래서 오픈소스 아님(false)으로 넣었어요 (2026-11-06 규칙: 공식 저장소가 없으면 근거 없이 false).

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

<a id="dev-sonarqube"></a>
### SonarQube (`sonarqube`) · 개발자용

공식 주소: https://www.sonarsource.com/  
공식 도메인: `sonarsource.com`

**1. 공식 도메인 확인**

- [ ] 공식 주소와 공식 도메인이 진짜 회사 주소예요 (철자가 살짝 다른 가짜 주소가 아님)

**2. 근거 대조** (11개) — 링크를 열면 그 문장이 강조돼요. 문장이 있고, 값과 뜻이 맞으면 체크

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
  “Finds bugs, vulnerabilities, and security hotspots across 30+ languages on every pull request.” · [페이지에서 보기](https://www.sonarsource.com/plans-and-pricing/#:~:text=Finds%20bugs%2C%20vulnerabilities%2C%20and%20security,languages%20on%20every%20pull%20request.)
- [ ] ✓ 코드 리뷰·품질 검사 받기 — 보안 취약점 검사  
  “Identifies injection vulnerabilities by simulating the flow of data through every code path to find deeply hidden vulnerabilities” · [페이지에서 보기](https://www.sonarsource.com/solutions/automated-code-review/#:~:text=Identifies%20injection%20vulnerabilities%20by%20simulating,to%20find%20deeply%20hidden%20vulnerabilities)
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
- AI 리뷰 제품 Gitar는 별도 제품이라 넣지 않기로 했어요 (J 결정). Gitar 근거만 있던 "수정 제안 바로 적용"을 빼고, PR 리뷰는 요금 페이지의 "모든 PR에서 버그·취약점을 찾는다" 문장만 근거로 남겼어요. 가격은 요금 페이지의 "starts at $34 monthly" 기준이에요 (FAQ의 $32는 예전 표기로 보여요).

**6. 확정** (todo가 비어야 해요. 날짜는 대조한 날)

```sh
node scripts/draft.js promote sonarqube --verified YYYY-MM-DD --dev
```
