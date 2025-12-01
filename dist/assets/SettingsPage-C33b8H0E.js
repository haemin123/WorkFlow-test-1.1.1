import{c as g,r as d,j as e,k as x,S as u,t as h}from"./index-BWhNYll5.js";import{B as p,C as b}from"./code-2-CO-YXxR7.js";import{C as y}from"./chevron-down-BzVFte0D.js";const f=g("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),l=g("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]),v=g("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]),S=[{version:"1.8.18",date:"2025-12-01",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.17",date:"2025-11-28",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.16",date:"2025-11-28",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.15",date:"2025-11-28",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.14",date:"2025-11-28",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.13",date:"2025-11-28",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.12",date:"2025-11-28",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.11",date:"2025-11-28",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.10",date:"2025-11-27",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.9",date:"2025-11-27",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.8",date:"2025-11-27",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.7",date:"2025-11-27",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.6",date:"2025-11-27",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.5",date:"2025-11-27",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.4",date:"2025-11-27",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.3",date:"2025-11-27",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.2",date:"2025-11-27",title:"Changes before Firebase Studio auto-run",description:"No description provided."},{version:"1.8.2",date:"2025-11-26",title:"fix(ai-service): update gemini model version and fix firestore undefined issue",description:"<h3>🐛 버그 수정</h3><ul><li><strong>Gemini 모델 버전 업데이트:</strong> <code>gemini-1.5-flash</code> 모델의 API 지원 종료(또는 접근 불가)로 인해 <code>v1beta</code> API에서 404 오류가 발생하던 문제를 확인하고, 최신 <code>gemini-2.0-flash</code> 및 <code>gemini-2.5-pro</code> 모델로 마이그레이션했습니다.</li><li><strong>Firestore 저장 오류 해결:</strong> AI가 생성한 선택적 필드(Optional fields)가 <code>undefined</code> 값을 포함할 경우 Firestore 저장 시 <code>Function updateDoc() called with invalid data</code> 오류가 발생하는 문제를 해결했습니다. 저장 직전 데이터를 정제(sanitize)하여 <code>undefined</code> 값을 자동으로 제거하는 로직을 추가했습니다.</li><li><strong>TaskStatus 타입 호환성 확보:</strong> <code>TaskStatus.SENT</code>가 타입 정의에서 제거되었음에도 런타임 코드에서 참조하여 빌드 오류가 발생하던 문제를 수정하여, 기존 데이터와의 호환성을 유지하면서 빌드가 정상적으로 수행되도록 개선했습니다.</li></ul><h3>🚀 배포 및 안정성</h3><ul><li><strong>배포 환경 검증:</strong> 수정 사항을 적용하여 프로덕션 빌드 및 Firebase Hosting 재배포를 완료했습니다.</li></ul>"},{version:"1.8.1",date:"2025-11-25",title:"docs(workflow): update workflow guide with automated release process",description:"No description provided."},{version:"1.8.0",date:"2025-11-23",title:"지능형 업무 상세 모달 및 생산성 도구 강화",description:"<h3>✨ 새로운 기능 (Intelligent Task Detail Modal)</h3><ul><li><strong>2단 레이아웃 UI:</strong> 업무 상세 모달을 좌측 사이드바(네비게이션)와 우측 콘텐츠 영역으로 분리하여 정보 접근성을 높였습니다.</li><li><strong>AI 생산성 도구 통합:</strong> Gemini AI를 활용하여 다음 기능들을 모달 내에서 즉시 생성할 수 있습니다:<ul><li><strong>실행 전략 (Strategy):</strong> 단계별 업무 가이드 생성</li><li><strong>완료 조건 (DoD):</strong> QA 및 배포를 위한 검증 기준 자동 생성</li><li><strong>솔루션 초안 (Solution Draft):</strong> 개발 구현을 위한 기술 문서 및 코드 스니펫 작성</li><li><strong>학습 자료 (Resources):</strong> 관련 기술 문서 및 튜토리얼 링크 추천</li></ul></li><li><strong>인라인 에디팅:</strong> 제목, 설명, 상태 등을 클릭 한 번으로 수정할 수 있는 직관적인 UX를 제공합니다.</li></ul><h3>🔧 기술적 개선</h3><ul><li><strong>데이터 구조 확장:</strong> <code>Task</code> 인터페이스에 <code>aiAnalysis</code> 필드를 고도화하여 다양한 AI 분석 결과를 저장하도록 개선했습니다.</li><li><strong>프롬프트 서비스 업데이트:</strong> <code>AI_FEATURES</code> 레지스트리에 새로운 기능들을 추가하고 문서를 자동화했습니다.</li></ul>"},{version:"1.7.0",date:"2025-11-23",title:"자동화된 릴리즈 및 문서화 시스템 구축",description:"<h3>🚀 시스템 개선</h3><ul><li><strong>SSOT 기반 데이터 구조:</strong> <code>services/prompts.ts</code>를 메타데이터 중심의 <code>AI_FEATURES</code> 구조로 개편하여, 코드 수정이 문서와 UI에 즉시 반영되도록 했습니다.</li><li><strong>릴리즈 자동화:</strong> <code>npm run release</code> 명령어를 통해 버전 관리와 Changelog 작성을 자동화했습니다.</li><li><strong>문서 자동 생성:</strong> 빌드 시 <code>scripts/generate-docs.ts</code>가 실행되어 최신 코드를 기반으로 Markdown 문서를 자동 생성합니다.</li></ul>"},{version:"1.6.0",date:"2025-11-23",title:"업무 생성 UX 개선 및 배포 시스템 안정화",description:"<h3>✨ UX 개선</h3><ul><li>업무 생성 방식을 개선하여 '새 요청 만들기' 버튼 클릭 시 임시 업무가 생성되도록 변경했습니다. 이제 모달 창 내에서 '업무 생성 완료' 버튼을 클릭해야만 최종적으로 업무가 저장되어 사용자 실수를 줄였습니다.</li></ul><h3>🐛 버그 수정</h3><ul><li>배포 시 <code>Icons.tsx</code> 모듈 내보내기 문제로 인한 빌드 실패 오류를 해결했습니다. 누락된 아이콘(<code>FileCode</code>, <code>CheckSquare</code>)을 추가하여 안정적인 빌드 환경을 구축했습니다.</li></ul>"},{version:"1.5.0",date:"2025-11-22",title:"Cypress 테스트 시스템 도입 시도 및 롤백",description:`<h3>✅ 테스트</h3><ul><li>Cypress를 도입하여 애플리케이션의 주요 기능에 대한 자동화된 End-to-End 테스트 환경을 구축했습니다. 이를 통해 기능의 안정성을 지속적으로 검증할 수 있게 되었습니다.</li></ul><h3>🤖 자동화</h3><ul><li>테스트 실행 결과가 '인사이트 > 기능 상태 대시보드'에 자동으로 반영되도록 Node.js 기반의 리포팅 스크립트를 구현했습니다. 이제 대시보드는 실제 테스트 결과를 기반으로 한 "살아있는" 데이터를 보여줍니다.</li></ul><h3>🔧 CI/CD</h3><ul><li><code>npm run test</code> 스크립트를 전체 테스트 파이프라인과 연동하여, 향후 CI/CD 환경에서 코드 품질을 자동으로 검증할 수 있는 기반을 마련했습니다.</li></ul><h3>↩️ 롤백</h3><p>현재 개발 환경의 GUI 라이브러리 부재로 인해 Cypress가 정상 작동하지 않음을 확인하고, 관련 설정을 모두 제거하여 프로젝트 안정성을 확보했습니다. 테스트 자동화는 추후 CI/CD 환경에서 재도입을 검토합니다.</p>`},{version:"1.4.0",date:"2025-11-22",title:"팀 인사이트 대시보드(Insights) 출시",description:"<h3>✨ 새로운 기능</h3><ul><li>데이터 기반의 의사결정을 돕는 '팀 인사이트' 기능이 추가되었습니다. Gemini AI가 주간 업무 흐름을 분석하여 핵심 인사이트를 제공합니다.</li></ul><h3>📊 KPI 지표</h3><ul><li>마감 초과(Overdue), 주간 속도(Velocity), 정체된 업무(Stuck), 긴급 처리율(Resolution) 등 4가지 핵심 지표를 통해 팀의 상태를 직관적으로 파악할 수 있습니다.</li></ul><h3>🎨 UI 개선</h3><ul><li>디자인 시스템 가이드를 준수하여 폰트 크기, 아이콘, 컬러 팔레트를 재정비했습니다. 특히 AI 분석 로딩 시 스켈레톤 UI를 적용하여 사용자 경험을 개선했습니다.</li></ul>"},{version:"1.3.0",date:"2025-11-22",title:"칸반 보드 구조 개선 및 데이터 최신화",description:"<h3>♻️ 리팩토링</h3><ul><li>거대해진 <code>Kanban.tsx</code> 파일을 <code>TaskCard</code>, <code>KanbanColumn</code>, <code>KanbanToolbar</code> 컴포넌트로 분리하여 코드의 가독성과 유지보수성을 대폭 향상시켰습니다.</li><li>날짜 포맷팅 로직을 <code>utils/formatters.ts</code>로 분리하고 재사용성을 높였습니다.</li></ul><h3>📅 데이터 업데이트</h3><ul><li>프로젝트 내의 모든 날짜 데이터(초기 태스크, Changelog)를 2025년 11월 기준으로 최신화하고, 날짜 표기가 한국 시간대(KST)를 따르도록 개선했습니다.</li></ul>"},{version:"1.2.1",date:"2025-11-22",title:"UI 버그 및 타입스크립트 오류 수정",description:"<h3>🐛 버그 수정</h3><ul><li><code>TaskStatus</code> 타입 참조 오류로 인해 앱 빌드가 실패하던 문제를 해결했습니다.</li><li>사이드바의 로고 이미지가 찌그러져 보이던 현상을 이미지 원본 비율을 유지하도록 수정했습니다.</li></ul><h3>🚀 개선</h3><ul><li>표준적이지 않은 CSS <code>@import</code> 방식의 폰트 로딩을 HTML <code>&lt;link&gt;</code> 태그 방식으로 변경하여 안정성을 개선했습니다.</li></ul>"},{version:"1.2.0",date:"2025-11-21",title:"Changelog UI 개선 및 히스토리 기록",description:"<h3>✨ 새로운 기능 및 개선</h3><ul><li>Changelog의 각 버전 내용을 접고 펼 수 있는 아코디언 UI를 적용하여 가독성을 향상시켰습니다.</li><li>최신 버전의 변경사항이 기본적으로 펼쳐지도록 하여 사용 편의성을 높였습니다.</li></ul><h3>📝 문서</h3><p>아이콘 모듈 로딩 오류의 원인이었던 개발 서버 캐시 문제와 그 해결 과정을 <code>changelog.json</code>에 상세히 기록하여, 유사한 문제를 겪을 다른 개발자들에게 좋은 학습 자료가 되도록 했습니다.</p>"},{version:"1.1.0",date:"2025-11-20",title:"Changelog 페이지 구축 및 개발 서버 캐시 이슈 해결",description:"<h3>✨ 새로운 기능</h3><ul><li>프로젝트의 변경 이력과 주요 기능의 상태를 한눈에 확인할 수 있는 <strong>Changelog & 기능 상태 페이지</strong>를 추가했습니다. (<code>components/ChangelogPage.tsx</code>)</li><li>사이드바에 Changelog 메뉴를 연동하여 접근성을 높였습니다. (<code>components/Layout.tsx</code>, <code>App.tsx</code>)</li><li>Changelog 데이터 관리를 위한 <code>changelog.json</code>, <code>features.json</code> 데이터 구조를 정의했습니다.</li></ul><h3>😥 겪었던 어려움</h3><p><code>lucide-react</code> 라이브러리에서 <code>GitCommit</code>, <code>AlertTriangle</code> 등의 아이콘을 새로 추가했지만, 브라우저에서 <code>SyntaxError: The requested module does not provide an export named '...'</code> 오류가 지속적으로 발생했습니다. <code>components/Icons.tsx</code> 파일에 아이콘을 정상적으로 추가하고 export했음에도 불구하고, 이를 import하는 컴포넌트에서 모듈을 찾지 못하는 문제가 있었습니다.</p><h3>💡 해결 방법 및 학습 내용</h3><p>이 문제의 핵심 원인은 <strong>개발 서버의 캐시(cache)</strong>였습니다. Vite, Next.js와 같은 최신 프론트엔드 개발 도구는 빠른 개발 경험을 위해 한번 빌드한 모듈 정보를 캐싱합니다. 이 때문에 <code>Icons.tsx</code> 파일의 변경 사항이 즉시 반영되지 않고, 이전 버전의 캐시된 모듈 정보를 계속 참조하여 오류가 발생했던 것입니다.</p><p>단순히 코드를 수정하는 것만으로는 해결되지 않았고, <strong><code>npm run dev</code> 명령어로 개발 서버를 완전히 재시작</strong>하여 캐시를 비우고 모든 모듈을 새로 불러오게 한 후에야 문제가 해결되었습니다.</p><p><strong>배운 점:</strong> 프론트엔드 개발 중, 특히 모듈(export/import) 관련 문제가 코드 수정으로 명확히 해결되지 않을 때는, 코드 자체의 문제보다는 <strong>개발 환경의 캐시 문제</strong>일 가능성을 높게 의심하고, 개발 서버를 재시작해보는 것이 아주 효과적인 해결책이 될 수 있다는 것을 배웠습니다.</p>"},{version:"1.0.0",date:"2025-11-15",title:"칸반 보드 및 AI 분석 기능",description:"<h3>✨ 새로운 기능</h3><ul><li>기본 칸반 보드 UI 구현 (업무 생성, 상태 변경, 삭제)</li><li>Gemini AI를 활용한 업무 자동 분석 및 제안 기능 추가</li></ul><h3>😥 겪었던 어려움</h3><p>AI가 제안하는 내용의 일관성을 유지하고, 사용자가 원하는 결과물을 생성하도록 프롬프트를 튜닝하는 과정이 복잡했습니다.</p><h3>💡 해결 방법</h3><p><code>services/prompts.ts</code> 파일을 생성하여 프롬프드와 비즈니스 로직을 분리했습니다. 이를 통해 AI의 역할을 명확히 정의하고, 응답 결과물의 퀄리티를 안정적으로 관리할 수 있게 되었습니다.</p>"}],r=[{id:"draftTask",name:"스마트 업무 초안 (Smart Draft)",description:"사용자의 거친 아이디어를 분석하여 표준, 상세, 간결 등 3가지 스타일의 전문적인 업무 명세서를 제안합니다.",model:"gemini-pro",tags:["Creation","Drafting"],promptGenerator:t=>`
      당신은 IT 선도 기업의 수석 PM(Project Manager)입니다.
      사용자가 입력한 거친(Rough) 업무 아이디어를 분석하여, 개발팀이나 디자인팀이 즉시 착수할 수 있는 "전문적인 업무 명세서" 초안을 3가지 스타일로 제안하세요.

      [입력 메시지]
      "${t}"
      
      [작성 지침]
      다음 3가지 스타일의 옵션을 포함한 리스트를 생성하세요:
      1. "표준(Standard)": 균형 잡힌 전문적인 스타일.
      2. "상세(Detailed)": 배경, 상세 요건, 기대 효과 등을 매우 구체적으로 기술.
      3. "간결(Concise)": 핵심만 빠르게 파악할 수 있는 요약 스타일.

      각 항목은 다음 필드를 포함해야 합니다:
      - title: 명확하고 전문적인 제목 (한국어)
      - description: 스타일(표준/상세/간결)에 맞춘 상세 설명 (한국어, 줄바꿈 포함)
      - priority: 'HIGH', 'MEDIUM', 'LOW' 중 택1
      - product: 제품군 추론
      - type: 업무 유형 (버그, 기능, UX 등)
      - styleTag: "표준", "상세", "간결" 중 하나

      응답은 JSON 배열(Array)이어야 합니다.
    `},{id:"analyzeTask",name:"전략 분석 (Strategy Analysis)",description:"업무의 핵심 맥락을 분석하고, 실행을 위한 단계별 가이드와 예상 리스크를 도출합니다.",model:"gemini-pro",tags:["Analysis","Strategy"],promptGenerator:t=>`
      당신은 시니어 프로젝트 매니저이자 기술 튜터입니다.
      다음 업무를 분석하여 실무자가 **가장 먼저 파악해야 할 핵심 지식(Context)**과 **구체적인 실행 전략**을 제시하세요.

      [업무 정보]
      제목: ${t.title}
      제품: ${t.product}
      설명: ${t.description}
      
      [요청 사항]
      1. strategy 필드에는 다음 내용을 마크다운 형식으로 작성하세요:
         - 🧐 **핵심 파악 사항**: 이 업무를 시작하기 전 반드시 알아야 할 개념, 기술 스택, 혹은 비즈니스 맥락. (1차적으로 무엇을 알아야 하는지)
         - 🚀 **단계별 실행 가이드**: 구체적인 Action Item 기반의 전략.
         - 💡 **성공 팁**: 예상되는 어려움이나 효율성을 높이는 팁.
         - ⚠️ **리스크 요인**: 발생 가능한 잠재적 문제와 대응 방안.
      
      2. suggestedResources 필드에는 업무와 관련된 양질의 학습 자료(문서, 블로그 등) 2개를 추천하세요.
      
      모든 응답은 "한국어"로 작성해주세요.
    `},{id:"generateSubtasks",name:"하위 업무 생성 (Subtask Breakdown)",description:"하나의 큰 업무를 실행 가능한 단위의 체크리스트(4~6개)로 자동 분해합니다.",model:"gemini-pro",tags:["Planning","Breakdown"],promptGenerator:t=>`
      다음 업무를 4-6개의 실행 가능한 체크리스트 항목(하위 업무)으로 분해해주세요.
      업무: ${t.title}
      문맥: ${t.description}
      응답은 한국어 JSON 배열입니다.
    `},{id:"generateAcceptanceCriteria",name:"완료 조건 생성 (DoD Generator)",description:"QA 및 배포를 위해 업무가 충족해야 할 구체적인 검증 기준(DoD)을 생성합니다.",model:"gemini-pro",tags:["QA","Validation"],promptGenerator:t=>`
      다음 업무의 완료 조건(Definition of Done)을 생성해주세요.
      
      [강력한 제약 사항]
      1. **반드시 정확히 7개의 항목**으로 구성된 JSON 배열을 반환해야 합니다.
      2. 7개 미만도, 7개 초과도 허용되지 않습니다. 무조건 7개를 맞추세요.
      3. 각 항목은 "개발, 테스트, 문서화, 배포, 보안, 성능, 승인" 관점을 골고루 포함해야 합니다.
      4. 한국어로 작성해주세요.

      [업무 정보]
      제목: ${t.title}
      설명: ${t.description}
      
      [출력 예시]
      ["기능 요구사항 충족 확인", "단위 테스트 통과", "코드 리뷰 승인", "API 문서 업데이트", "배포 환경 검증", "보안 스캔 통과", "PO 승인 완료"]
    `},{id:"generateSolutionDraft",name:"솔루션 초안 작성 (Solution Draft)",description:"기능 구현을 위한 기술적인 접근 방식, 코드 스니펫 또는 문서 초안을 마크다운으로 작성합니다.",model:"gemini-pro",tags:["Engineering","Solution"],promptGenerator:t=>`
      당신은 수석 엔지니어입니다. 다음 업무를 구현하기 위한 기술적인 솔루션 초안을 마크다운 형식으로 작성해주세요.
      필요하다면 코드 스니펫(Code Snippet)이나 아키텍처 설명을 포함하세요.
      
      [업무 정보]
      제목: ${t.title}
      설명: ${t.description}
      기술 스택: React, TypeScript, Tailwind CSS
      
      응답은 마크다운 텍스트로만 작성해주세요.
    `},{id:"recommendResources",name:"학습 자료 추천 (Resource Recommender)",description:"업무 해결에 도움이 되는 최신 기술 문서, 블로그, 튜토리얼 링크를 추천합니다.",model:"gemini-pro",tags:["Learning","Research"],promptGenerator:t=>`
      다음 업무와 관련된 양질의 학습 자료(기술 문서, 공식 가이드, 튜토리얼) 3가지를 추천해주세요.
      
      [업무 정보]
      제목: ${t.title}
      설명: ${t.description}
      
      응답은 다음 필드를 가진 JSON 배열이어야 합니다:
      - title: 자료 제목
      - url: 링크 (실제 존재하는 URL이거나 검색 가능한 키워드 기반의 가상의 URL)
      - description: 추천 이유 (한 줄 요약)
    `},{id:"chatGuideSystem",name:"AI 가이드 시스템 프롬프트",description:"업무 컨텍스트를 기반으로 사용자 질문에 답변하는 AI 어시스턴트의 페르소나를 정의합니다.",model:"gemini-pro",tags:["Chat","System"],promptGenerator:t=>`System: 당신은 다음 업무를 돕는 친절한 어시스턴트입니다. 제목: ${t.title}, 설명: ${t.description}. 답변은 한국어로 작성하세요.`},{id:"generateInsights",name:"팀 인사이트 분석 (Team Insights)",description:"전체 프로젝트 데이터를 분석하여 KPI 지표와 함께 주간 핵심 인사이트 리포트를 생성합니다.",model:"gemini-pro",tags:["Analytics","Reporting"],promptGenerator:(t,n)=>`
      당신은 데이터 기반으로 팀의 성과를 분석하는 AI 전문가입니다.
      아래 제공된 프로젝트 데이터를 분석하여, 팀 리더에게 제공할 **주간 핵심 인사이트**를 2~3문장으로 요약해 주세요.

      [데이터]
      - 전체 업무 수: ${n.total}
      - 완료율: ${n.completionRate}%
      - 진행 중 업무: ${n.inProgress}
      - 마감 기한 초과: ${n.overdue}
      - 업무가 가장 많은 팀원: ${n.busiestMember}
      
      [분석 지침]
      1. 현재 팀의 **긍정적인 흐름**을 먼저 언급하세요 (예: 완료율이 높음, 진행이 원활함).
      2. **주의가 필요한 부분**이나 **리스크**(예: 특정 인원 과부하, 마감 초과)를 부드럽게 지적하세요.
      3. 구체적인 **액션 아이템**을 하나 제안하세요.
      4. 어조는 전문적이면서도 격려하는 톤으로 작성하세요.
      5. 답변은 JSON이 아닌 **일반 텍스트(String)**로 주세요.
    `}];r.find(t=>t.id==="draftTask").promptGenerator,r.find(t=>t.id==="analyzeTask").promptGenerator,r.find(t=>t.id==="generateSubtasks").promptGenerator,r.find(t=>t.id==="generateAcceptanceCriteria").promptGenerator,r.find(t=>t.id==="generateSolutionDraft").promptGenerator,r.find(t=>t.id==="recommendResources").promptGenerator,r.find(t=>t.id==="chatGuideSystem").promptGenerator,r.find(t=>t.id==="generateInsights").promptGenerator;const N='# Baro.ai Design System\n\n## 1. Design Philosophy (디자인 철학)\n**"Tech Minimalist & Clarity"**\nBaro.ai의 디자인은 Google의 최신 디자인 트렌드와 A-GO 컨셉에서 영감을 받았습니다. 불필요한 장식을 배제하고, **"순백색의 캔버스 위에 놓인 지능적인 도구"**를 지향합니다.\n\n*   **Clean (청결함):** 과도한 그라데이션이나 어두운 배경을 배제하고, White & Light Grey 톤을 사용하여 정보의 가독성을 극대화합니다.\n*   **Fluid (유동성):** 둥근 모서리(Rounded Corners)와 부드러운 그림자를 사용하여 딱딱한 업무 도구가 아닌, 유연한 사고를 돕는 도구임을 암시합니다.\n*   **Tech-Native:** 배경의 미세한 도트 패턴(Dot Matrix)은 데이터와 네트워크의 연결성을 시각적으로 표현합니다.\n\n---\n\n## 2. Typography (타이포그래피)\n\n### Font Family\n*   **Primary (Korean):** `Pretendard` (Web Font) - 가독성이 뛰어난 현대적인 한글 산세리프\n*   **Primary (English):** `Inter` (Google Fonts) - UI에 최적화된 영문 폰트\n*   **Fallbacks:** `sans-serif`\n\n### Scale & Usage\n| Role | Size | Weight | Letter Spacing | Usage |\n| :--- | :--- | :--- | :--- | :--- |\n| **Display** | `text-2xl` (24px) | Bold (700) | `tracking-tight` | 메인 헤더, 브랜드 로고, KPI 수치 |\n| **Heading 1** | `text-xl` (20px) | Bold (700) | `leading-tight` | 모달/카드 제목 |\n| **Heading 2** | `text-lg` (18px) | Bold (700) | Default | 섹션 타이틀 |\n| **Body** | `text-base` (16px) | Regular (400) | `leading-relaxed` | 본문, 긴 설명 텍스트 |\n| **UI Label** | `text-sm` (14px) | Medium (500) | Default | 버튼, 입력 필드, 리스트 아이템 |\n| **Caption** | `text-xs` (12px) | Medium (500) | Default | 메타 데이터, 태그, 날짜, KPI 제목 |\n\n---\n\n## 3. Color Palette (색상 팔레트)\n\n### Neutral (Grayscale)\n*   **Background:** `#FFFFFF` (Pure White) - 메인 컨텐츠 영역\n*   **Canvas:** `#F8F9FA` (Google Grey 50) - 사이드바, 모달 컨텍스트 영역\n*   **Primary Text:** `#202124` (Google Grey 900) - 주요 텍스트\n*   **Secondary Text:** `#5F6368` (Google Grey 700) - 설명, 보조 텍스트\n*   **Border:** `#E8EAED`, `#DADCE0` - 구분선\n\n### Brand & Accent\n*   **Brand Blue:** `#1A73E8` (Primary Action, Links)\n*   **Brand Black:** `#000000` (Primary CTA Button)\n*   **Brand Teal:** `#306364` (Workload Charts) - 데이터 시각화용 포인트 컬러\n*   **Insights Dark:** `#111827` (bg-gray-900) - AI 인사이트 및 통계 카드 배경 (강렬한 대비)\n\n### State Colors\n*   **Success:** `text-green-600` / `bg-green-50`\n*   **Warning:** `text-orange-600` / `bg-orange-50`\n*   **Danger:** `text-red-600` / `bg-red-50`\n\n---\n\n## 4. UI Components (컴포넌트 스타일)\n\n### A. Background Pattern (배경 패턴)\n순수한 흰색 배경에 기술적인 느낌을 주기 위해 미세한 도트 패턴을 적용합니다.\n```css\nbody {\n  background-color: #ffffff;\n  background-image: radial-gradient(#E1E3E6 1.5px, transparent 1.5px);\n  background-size: 32px 32px;\n}\n```\n\n### B. Cards (Clean Card)\n유리 같은 질감보다는, 종이 위에 떠 있는 듯한 깨끗한 느낌을 줍니다.\n*   **Background:** `rgba(255, 255, 255, 0.8)` + `backdrop-filter: blur(8px)`\n*   **Border:** `1px solid #E8EAED`\n*   **Shadow (Default):** `box-shadow: 0 1px 2px rgba(60,64,67,0.05), 0 2px 6px 2px rgba(60,64,67,0.05)`\n*   **Hover Effect:** `transform: translateY(-1px)`, Shadow 증가.\n*   **Radius:** `rounded-2xl`\n\n### C. Buttons (버튼)\n*   **Shape:** `rounded-full` (캡슐 형태, Pill Shape)\n*   **Primary CTA:** `bg-black text-white` (그림자 포함)\n*   **Secondary:** `bg-blue-50 text-blue-700`\n*   **Ghost/Nav:** `text-gray-500 hover:bg-gray-50`\n\n### D. StatCard (대시보드 카드)\n*   **Style:** 높은 가독성을 위해 검정 배경의 아이콘 박스와 배지를 사용합니다.\n*   **Icon Box:** `w-10 h-10`, `bg-gray-900`, `text-white`\n*   **Badge:** `text-xs`, `bg-gray-900`, `text-white`\n\n### E. Sidebar Logo\n*   **Type:** Image (`public/logo.png`)\n*   **Size:** `h-8` (Height 32px), Width `auto`\n*   **Fit:** `object-contain`으로 비율 유지\n\n---\n\n## 5. Motion & Effects (모션 및 효과)\n\n### Transitions\n모든 상호작용은 즉각적이지만 부드러워야 합니다.\n*   **Duration:** `0.2s` ~ `0.3s`\n*   **Ease:** `ease-out`\n*   **Properties:** `transform`, `box-shadow`, `background-color`, `color`\n\n### Animations\n*   **Fade In:** 콘텐츠 로드 시 부드럽게 나타나는 효과.\n*   **Pulse:** AI 분석 로딩 시 스켈레톤 UI에 적용되는 반짝임 효과.\n\n---\n\n## 6. Iconography (아이콘)\n*   **Library:** Lucide React\n*   **Style:** Stroke width `2px` (기본)\n*   **Usage:** 텍스트와 함께 사용하여 직관성을 높이거나, 버튼의 액션을 명확히 할 때 사용합니다.\n',I=`# Nexus AI Developer Guide

본 문서는 Nexus AI 프로젝트의 아키텍처, 폴더 구조, 그리고 개발 규칙을 설명합니다.
본 프로젝트는 **"Vite + React Standard Architecture"**를 따르며, 유지보수성과 확장성을 최우선으로 설계되었습니다.

## 🏗 1. 프로젝트 구조 (Project Structure)

\`\`\`
/
├── components/        # UI 컴포넌트 (재사용 가능)
│   ├── Layout.tsx     # 전역 레이아웃 (사이드바, 네비게이션)
│   ├── Kanban.tsx     # 칸반 보드 메인 (TaskCard, Column, Toolbar 조합)
│   ├── TaskCard.tsx   # 개별 업무 카드 컴포넌트
│   ├── KanbanColumn.tsx  # 칸반 컬럼 및 드래그앤드롭 영역
│   ├── KanbanToolbar.tsx # 필터, 검색, 정렬 툴바
│   ├── Insights.tsx   # 팀 인사이트 대시보드 (KPI 및 차트)
│   ├── SettingsPage.tsx # 문서 허브 및 설정 페이지
│   ├── AIModal.tsx    # AI 분석 및 상세 모달
│   ├── GeminiPage.tsx # 독립된 AI 채팅 페이지
│   ├── Icons.tsx      # 아이콘 모음 (Lucide wrapper)
│   └── AIViews.tsx    # 모달 내부의 탭별 서브 뷰 (Draft, Strategy 등)
├── services/          # 비즈니스 로직 및 API 호출 계층
│   ├── geminiService.ts # Google GenAI API 연동 로직
│   ├── taskService.ts   # 업무 데이터 CRUD (LocalStorage 연동)
│   └── prompts.ts       # AI 프롬프트 템플릿 관리
├── utils/             # 순수 유틸리티 함수
│   ├── taskHelpers.ts   # 정렬, 필터링 등 데이터 가공 로직
│   └── formatters.ts    # 날짜 포맷팅 등 공통 유틸리티
├── types.ts           # 전역 타입 정의 (Interface, Enum)
├── constants.ts       # 상수, Mock 데이터, 환경 설정
├── App.tsx            # 라우팅 및 상태 조합 (Composition Root)
└── index.css          # 전역 스타일 및 Tailwind 설정
\`\`\`

## 🧩 2. 핵심 아키텍처 패턴

### A. 관심사의 분리 (Separation of Concerns)
*   **UI Components**: 오직 렌더링과 사용자 이벤트 처리만 담당합니다. \`Kanban.tsx\`를 \`TaskCard\`, \`Column\`, \`Toolbar\`로 분리하여 유지보수성을 높였습니다.
*   **Services**: 데이터 페칭, AI 호출, 상태 변경 로직을 캡슐화합니다. 현재는 \`localStorage\`를 사용하여 백엔드 없이 데이터 영속성을 보장합니다.
*   **Types**: 데이터 모델(\`Task\`, \`User\` 등)은 \`types.ts\`에서 중앙 관리하여 순환 참조를 방지합니다.

### B. 프롬프트 엔지니어링 관리 (Prompt Management)
*   \`services/prompts.ts\` 파일에서 모든 프롬프트를 관리합니다.
*   '문서 허브(SettingsPage)' 기능은 이 파일을 동적으로 분석하여 개발자가 언제든 최신 프롬프트 명세를 다운로드할 수 있도록 지원합니다.

### C. 스타일링 전략 (Styling Strategy)
*   **Tailwind CSS**: 유틸리티 클래스를 사용하여 빠르게 스타일링합니다.
*   **Design System**: \`index.css\`와 \`DESIGN_SYSTEM.md\`에 정의된 컬러 팔레트와 타이포그래피 규칙(Pretendard, Inter)을 준수합니다.

## 💻 3. 개발 규칙 (Conventions)

### Naming
*   **Components**: PascalCase (예: \`KanbanBoard.tsx\`)
*   **Functions/Variables**: camelCase (예: \`handleTaskClick\`, \`isLoading\`)
*   **Interfaces**: PascalCase (예: \`Task\`, \`AIAnalysis\`)
*   **Constants**: UPPER_SNAKE_CASE (예: \`MAX_TOKENS\`, \`INITIAL_TASKS\`)

### State Management
*   로컬 UI 상태는 \`useState\`를 사용합니다.
*   전역 데이터는 \`App.tsx\`가 \`taskService\`를 통해 로드하고 하위 컴포넌트에 전달하는 방식을 사용합니다.
*   \`taskService\` 내부적으로 \`localStorage\`를 사용하여 데이터의 생성, 수정, 삭제를 브라우저에 영구 저장합니다.

### AI Integration Rules
*   \`@google/genai\` SDK를 사용합니다.
*   API 키는 반드시 \`process.env.API_KEY\`를 통해 접근합니다.
*   \`Insights.tsx\`에서는 페이지 로드 시 자동으로 AI 분석을 실행하며, 로딩 중에는 스켈레톤 UI를 표시하여 사용자 경험을 최적화합니다.

## 🔄 4. 데이터 흐름 (Data Flow Example: Insights)

1.  **Page Load**: 사용자가 '인사이트' 메뉴 클릭 시 \`Insights.tsx\` 마운트.
2.  **Effect**: \`useEffect\`에서 \`getWeeklyInsight\` 호출.
3.  **Service**: \`geminiService\`가 현재 태스크 목록(\`tasks\`)과 통계 데이터를 취합.
4.  **API Call**: Google Gemini로 분석 프롬프트 전송.
5.  **Response**: AI가 생성한 분석 텍스트 반환.
6.  **UI Update**: 스켈레톤 UI가 사라지고 분석 결과 표시.

---
문서 업데이트 날짜: 2025-11-22
`,c=(t,n)=>{const o=new Blob([t],{type:"text/markdown"}),i=URL.createObjectURL(o),s=document.createElement("a");s.href=i,s.download=n,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)},C=()=>{const t=()=>{let n=`# Baro.ai - AI Prompt Engineering Document

`;n+=`This document is auto-generated based on \`services/prompts.ts\` (Single Source of Truth).

---

`,r.forEach(o=>{const i=o.promptGenerator.toString();n+=`## ${o.name} (${o.id})
`,n+=`- **Description**: ${o.description}
`,n+=`- **Model**: ${o.model}
`,n+=`- **Tags**: ${o.tags.join(", ")}

`,n+=`### Prompt Logic
`,n+="```javascript\n",n+=`${i}
`,n+=`\`\`\`

---

`}),c(n,"Baro.ai-Prompts-Documentation.md")};return e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(u,{className:"w-6 h-6 text-blue-600"}),e.jsx("h3",{className:"text-lg font-bold text-gray-900",children:"AI Features Registry"})]}),e.jsxs("button",{onClick:t,className:"px-3 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center gap-2 hover:bg-gray-700 transition-colors",children:[e.jsx(l,{className:"w-3 h-3"}),e.jsx("span",{children:"AI 설계 문서 (.md)"})]})]}),e.jsx("p",{className:"text-sm text-gray-500 mb-6",children:"현재 활성화된 AI 기능 목록입니다. 문서를 다운로드하면 각 기능의 상세 프롬프트를 확인할 수 있습니다."}),e.jsx("div",{className:"space-y-3",children:r.map(n=>e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors",children:[e.jsxs("div",{className:"flex justify-between items-start mb-3",children:[e.jsxs("div",{className:"flex flex-col gap-0.5",children:[e.jsx("p",{className:"font-bold text-sm text-gray-800",children:n.name}),e.jsx("p",{className:"text-xs text-gray-400 font-mono",children:n.model})]}),e.jsx("span",{className:"text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full border border-green-200 shrink-0 ml-2",children:"Active"})]}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:n.tags.map(o=>e.jsx("span",{className:"px-2 py-1 bg-white border border-gray-200 text-gray-500 text-[10px] rounded-md font-medium",children:o},o))})]},n.id))})]}),e.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(f,{className:"w-6 h-6 text-indigo-600"}),e.jsx("h3",{className:"text-lg font-bold text-gray-900",children:"데이터 관리"})]}),e.jsx("p",{className:"text-sm text-gray-500 mb-6",children:"현재 브라우저에 저장된 모든 업무 데이터를 JSON 파일로 내보내 백업할 수 있습니다."}),e.jsxs("button",{onClick:()=>h.exportTasks(),className:"w-full px-4 py-2.5 bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold rounded-lg hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2",children:[e.jsx(l,{className:"w-4 h-4"}),"업무 데이터 내보내기 (.json)"]})]})]}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(b,{className:"w-6 h-6 text-purple-600"}),e.jsx("h3",{className:"text-lg font-bold text-gray-900",children:"UI Components Registry"})]}),e.jsx("p",{className:"text-sm text-gray-500 mb-6",children:"Baro.ai의 핵심 UI 컴포넌트 목록입니다."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-100",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("p",{className:"font-bold text-sm text-gray-800",children:"Kanban Board"}),e.jsx("span",{className:"text-xs font-bold text-gray-500 bg-gray-200 px-2.5 py-1 rounded-full",children:"Rendered"})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"HTML5 Drag & Drop API, TaskStatus Enum 기반"})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg border border-gray-100",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("p",{className:"font-bold text-sm text-gray-800",children:"Insights Dashboard"}),e.jsx("span",{className:"text-xs font-bold text-gray-500 bg-gray-200 px-2.5 py-1 rounded-full",children:"Rendered"})]}),e.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"실시간 데이터 분석 및 KPI 시각화"})]})]})]}),e.jsxs("div",{className:"bg-white p-6 rounded-2xl border border-gray-100 shadow-sm",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(p,{className:"w-6 h-6 text-emerald-600"}),e.jsx("h3",{className:"text-lg font-bold text-gray-900",children:"개발 문서"})]}),e.jsx("p",{className:"text-sm text-gray-500 mb-6",children:"프로젝트의 핵심 가이드 문서를 다운로드할 수 있습니다."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("button",{onClick:()=>c(N,"DESIGN_SYSTEM.md"),className:"w-full px-4 py-2.5 bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-bold rounded-lg hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2",children:[e.jsx(l,{className:"w-4 h-4"}),"디자인 시스템 가이드 (.md)"]}),e.jsxs("button",{onClick:()=>c(I,"DEVELOPER_GUIDE.md"),className:"w-full px-4 py-2.5 bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-bold rounded-lg hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2",children:[e.jsx(l,{className:"w-4 h-4"}),"개발 가이드 (.md)"]})]})]})]})]})},j=({changelog:t})=>{const[n,o]=d.useState([]);d.useEffect(()=>{t.length>0&&o([t[0].version])},[t]);const i=s=>{o(a=>a.includes(s)?a.filter(m=>m!==s):[...a,s])};return e.jsx("div",{className:"relative border-l-2 border-gray-200/80 ml-4 space-y-8",children:t.map(s=>{const a=n.includes(s.version);return e.jsxs("div",{className:"pl-8 relative",children:[e.jsx("div",{className:"absolute -left-[9px] top-1.5 w-4 h-4 bg-white rounded-full border-4 border-blue-500"}),e.jsxs("div",{className:"bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all hover:shadow-md",children:[e.jsxs("div",{className:"p-5 cursor-pointer flex items-center justify-between bg-gray-50/50",onClick:()=>i(s.version),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100",children:["v",s.version]}),e.jsx("span",{className:"text-xs text-gray-400 font-medium",children:s.date})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h3",{className:"text-sm font-bold text-gray-800",children:s.title}),e.jsx(y,{className:`w-4 h-4 text-gray-400 transition-transform ${a?"rotate-180":""}`})]})]}),a&&e.jsx("div",{className:"p-6 pt-2 prose prose-sm max-w-none text-gray-600 leading-relaxed border-t border-gray-100",dangerouslySetInnerHTML:{__html:s.description}})]})]},s.version)})})},D=()=>{const[t,n]=d.useState("DOC_HUB"),[o,i]=d.useState([]);return d.useEffect(()=>{i(S)},[]),e.jsx("div",{className:"h-full overflow-y-auto custom-scrollbar p-8 bg-gray-50/50 font-sans",children:e.jsxs("div",{className:"max-w-5xl mx-auto",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[e.jsx("div",{className:"w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg",children:e.jsx(x,{className:"w-6 h-6 text-white"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900 tracking-tight",children:"Settings & Documentation"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"애플리케이션 설정 및 개발자 문서를 관리합니다."})]})]}),e.jsxs("div",{className:"flex items-center gap-2 mb-8 border-b border-gray-200",children:[e.jsxs("button",{onClick:()=>n("DOC_HUB"),className:`px-4 py-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2
                    ${t==="DOC_HUB"?"border-gray-900 text-gray-900":"border-transparent text-gray-400 hover:text-gray-600"}`,children:[e.jsx(p,{className:"w-4 h-4"}),"문서 허브"]}),e.jsxs("button",{onClick:()=>n("CHANGELOG"),className:`px-4 py-3 text-sm font-bold border-b-2 transition-colors flex items-center gap-2
                    ${t==="CHANGELOG"?"border-gray-900 text-gray-900":"border-transparent text-gray-400 hover:text-gray-600"}`,children:[e.jsx(v,{className:"w-4 h-4"}),"변경 이력"]})]}),e.jsxs("div",{className:"animate-fade-in",children:[t==="DOC_HUB"&&e.jsx(C,{}),t==="CHANGELOG"&&e.jsx(j,{changelog:o})]})]})})};export{D as SettingsPage};
