// services/promptEngineering.ts
/**
 * AI 학습 로직 기반 프롬프트 엔지니어링 시스템
 * 
 * 구조:
 * 1. 시스템 프롬프트 (System Prompt)
 * 2. 지식 베이스 (Knowledge Base / RAG)
 * 3. Few-Shot 예시 (Examples)
 * 4. 사용자 요청 (User Request)
 */

import { Task } from '../types';
import { knowledgeBase } from './knowledgeBase';

// ============================================
// 1. 시스템 프롬프트 정의
// ============================================

const SYSTEM_PROMPTS = {
  PM_EXPERT: `당신은 글로벌 IT 기업에서 10년 이상 경력을 가진 수석 프로젝트 매니저입니다.

[당신의 역할]
- 업무를 명확하고 실행 가능한 단위로 분해하는 전문가
- 팀원들이 즉시 이해하고 실행할 수 있는 가이드를 제공
- 산업 표준과 베스트 프랙티스를 항상 준수

[당신의 커뮤니케이션 스타일]
- 구체적이고 측정 가능한 언어 사용
- 모호함을 배제하고 명확성을 최우선으로
- 전문적이면서도 이해하기 쉬운 톤

[당신의 작업 원칙]
- 품질과 완성도를 중시
- 실행 가능성과 현실성 고려
- 팀의 역량과 리소스를 감안한 제안`,

  QA_EXPERT: `당신은 엔터프라이즈급 소프트웨어 품질 보증을 담당하는 QA 리더입니다.

[당신의 역할]
- 업무의 완료 조건(Definition of Done)을 명확히 정의
- 품질 기준과 검증 방법을 구체화
- 릴리스 승인의 최종 게이트키퍼

[당신의 작업 원칙]
- 모든 조건은 측정 가능하고 검증 가능해야 함
- 개발, 테스트, 문서화, 배포, 보안을 균형있게 고려
- 비즈니스 가치와 기술적 완성도를 모두 만족`,

  TECH_LEAD: `당신은 최신 기술 트렌드에 정통한 수석 엔지니어입니다.

[당신의 역할]
- 복잡한 기술 문제에 대한 솔루션 설계
- 아키텍처 의사결정 및 구현 가이드 제공
- 코드 품질과 유지보수성 확보

[당신의 작업 원칙]
- 실용적이고 확장 가능한 솔루션 선호
- 과도한 엔지니어링 지양, 적절한 복잡도 유지
- 팀의 기술 스택과 역량을 고려한 제안`,

  ASSISTANT: `당신은 업무를 돕는 친절하고 전문적인 AI 어시스턴트입니다.

[당신의 역할]
- 사용자의 질문에 정확하고 유용한 답변 제공
- 업무 컨텍스트를 이해하고 관련된 조언 제공
- 필요시 추가 질문으로 명확성 확보`
};

// ============================================
// 2. Few-Shot 예시 라이브러리
// ============================================

interface FewShotExample {
  task: Partial<Task>;
  output: any;
  rationale?: string;
}

const EXECUTION_PLAN_EXAMPLES: FewShotExample[] = [
  {
    task: {
      title: '사용자 대시보드 성능 개선',
      type: '기능',
      description: '현재 대시보드 로딩이 5초 이상 걸리는 문제를 해결하고 1초 이내로 개선'
    },
    output: [
      { title: '성능 병목 지점 분석 및 프로파일링' },
      { title: '불필요한 API 호출 제거 및 데이터 페칭 최적화' },
      { title: '컴포넌트 메모이제이션 및 가상화 적용' },
      { title: '번들 사이즈 분석 및 Code Splitting 구현' },
      { title: '성능 테스트 및 목표치 달성 검증' }
    ],
    rationale: '성능 개선은 분석 → 최적화 → 검증 순서로 진행. 측정 가능한 목표(1초) 제시'
  },
  {
    task: {
      title: '로그인 페이지 인증 버그 수정',
      type: '버그',
      description: '특정 이메일 형식에서 로그인이 실패하는 이슈'
    },
    output: [
      { title: '버그 재현 및 영향 범위 확인' },
      { title: '인증 로직 코드 분석 및 원인 파악' },
      { title: '이메일 검증 로직 수정 및 로컬 테스트' },
      { title: '회귀 테스트 및 QA 검증' }
    ],
    rationale: '버그 수정은 재현 → 원인 파악 → 수정 → 검증 흐름. 4단계로 간결하게'
  }
];

const DOD_EXAMPLES: FewShotExample[] = [
  {
    task: {
      title: '결제 모듈 API 개발',
      type: '백엔드',
      description: '신용카드 및 계좌이체 결제 처리 API 구현'
    },
    output: [
      'REST API 엔드포인트가 설계 명세에 따라 구현되었습니다',
      '단위 테스트 및 통합 테스트가 작성되고 모두 통과했습니다',
      'PCI-DSS 보안 요구사항을 충족합니다',
      'API 문서가 Swagger로 작성되고 개발자 포털에 게시되었습니다',
      '부하 테스트를 통해 초당 100건 이상 처리 가능함을 확인했습니다',
      '에러 핸들링 및 트랜잭션 롤백이 적절히 구현되었습니다',
      'PO 및 보안팀의 최종 승인을 받았습니다'
    ],
    rationale: '결제 기능은 보안이 중요. PCI-DSS 및 부하 테스트 포함'
  }
];

// ============================================
// 3. 프롬프트 빌더 클래스
// ============================================

class PromptBuilder {
  private sections: string[] = [];

  /**
   * 시스템 프롬프트 추가
   */
  addSystemPrompt(role: keyof typeof SYSTEM_PROMPTS): this {
    this.sections.push(`# 시스템 역할 (System Role)\n\n${SYSTEM_PROMPTS[role]}`);
    return this;
  }

  /**
   * 지식 베이스 추가 (RAG)
   */
  async addKnowledgeBase(guideName: string, taskType?: string): Promise<this> {
    const context = taskType 
      ? await knowledgeBase.getRelevantContext(guideName, taskType)
      : await knowledgeBase.loadGuide(guideName);

    if (context) {
      this.sections.push(`# 지식 베이스 (Knowledge Base)\n\n${context}`);
    }
    return this;
  }

  /**
   * Few-Shot 예시 추가
   */
  addFewShotExamples(examples: FewShotExample[], format: 'execution' | 'dod' = 'execution'): this {
    if (examples.length === 0) return this;

    let exampleText = '# 우수 사례 (Few-Shot Examples)\n\n';
    exampleText += '다음은 고품질 결과물의 예시입니다. 이 패턴을 참고하여 응답하세요:\n\n';

    examples.forEach((example, idx) => {
      exampleText += `## 예시 ${idx + 1}\n`;
      exampleText += `**업무:** ${example.task.title}\n`;
      exampleText += `**타입:** ${example.task.type}\n`;
      if (example.task.description) {
        exampleText += `**설명:** ${example.task.description}\n`;
      }
      exampleText += `\n**결과:**\n`;
      exampleText += '```json\n';
      exampleText += JSON.stringify(example.output, null, 2);
      exampleText += '\n```\n';
      if (example.rationale) {
        exampleText += `\n**설명:** ${example.rationale}\n`;
      }
      exampleText += '\n---\n\n';
    });

    this.sections.push(exampleText);
    return this;
  }

  /**
   * 제약 조건 추가
   */
  addConstraints(constraints: string[]): this {
    let constraintText = '# 제약 조건 (Constraints)\n\n';
    constraintText += '다음 규칙을 **반드시** 준수해야 합니다:\n\n';
    constraints.forEach((constraint, idx) => {
      constraintText += `${idx + 1}. ${constraint}\n`;
    });
    this.sections.push(constraintText);
    return this;
  }

  /**
   * 사용자 요청 추가
   */
  addUserRequest(task: Task, instruction: string): this {
    let requestText = '# 사용자 요청 (User Request)\n\n';
    requestText += `${instruction}\n\n`;
    requestText += `## 업무 정보\n`;
    requestText += `- **제목:** ${task.title}\n`;
    if (task.description) {
      requestText += `- **설명:** ${task.description}\n`;
    }
    if (task.product) {
      requestText += `- **제품:** ${task.product}\n`;
    }
    if (task.type) {
      requestText += `- **타입:** ${task.type}\n`;
    }
    if (task.priority) {
      requestText += `- **우선순위:** ${task.priority}\n`;
    }

    this.sections.push(requestText);
    return this;
  }

  /**
   * 출력 형식 지정
   */
  addOutputFormat(format: string): this {
    this.sections.push(`# 출력 형식 (Output Format)\n\n${format}`);
    return this;
  }

  /**
   * 최종 프롬프트 생성
   */
  build(): string {
    return this.sections.join('\n\n');
  }

  /**
   * 프롬프트 크기 확인 (디버깅용)
   */
  getSize(): { chars: number; estimatedTokens: number } {
    const prompt = this.build();
    return {
      chars: prompt.length,
      estimatedTokens: Math.ceil(prompt.length / 4) // 대략적인 토큰 추정
    };
  }
}

// ============================================
// 4. 고수준 프롬프트 생성 함수
// ============================================

/**
 * 실행 전략 생성 프롬프트
 */
export async function buildExecutionPlanPrompt(task: Task): Promise<string> {
  const builder = new PromptBuilder();

  // 메서드 체이닝 분리 (await 때문)
  builder.addSystemPrompt('PM_EXPERT');
  
  await builder.addKnowledgeBase('EXECUTION_PLAN_GUIDE', task.type || '일반');
  
  builder
    .addFewShotExamples(
      EXECUTION_PLAN_EXAMPLES.filter(ex => 
        !task.type || ex.task.type === task.type
      ).slice(0, 2),
      'execution'
    )
    .addConstraints([
      '4-6개의 실행 가능한 단계로 분해해야 합니다',
      '각 단계는 동사로 시작하는 구체적인 액션이어야 합니다',
      '논리적 순서로 배열해야 합니다 (계획 → 설계 → 구현 → 검증 → 배포)',
      '지식 베이스의 패턴을 참고하되, 업무의 특성을 반영해야 합니다',
      '한국어로 작성해야 합니다'
    ])
    .addUserRequest(
      task,
      '위 업무를 실행 가능한 단계로 분해해주세요.'
    )
    .addOutputFormat(
      '다음 JSON 배열 형식으로 출력하세요:\n```json\n[{"title": "단계1"}, {"title": "단계2"}, ...]\n```'
    );

  return builder.build();
}

/**
 * 완료 조건 생성 프롬프트
 */
export async function buildDoDPrompt(task: Task): Promise<string> {
  const builder = new PromptBuilder();

  // 메서드 체이닝 분리 (await 때문)
  builder.addSystemPrompt('QA_EXPERT');
  
  await builder.addKnowledgeBase('DOD_GUIDE', task.type || '일반');
  
  builder
    .addFewShotExamples(
      DOD_EXAMPLES.filter(ex => 
        !task.type || ex.task.type === task.type
      ).slice(0, 1),
      'dod'
    )
    .addConstraints([
      '**반드시 정확히 7개의 항목**으로 구성해야 합니다 (7개 미만이나 초과 절대 불가)',
      '각 항목은 "~되었습니다" 형태의 완료형 문장이어야 합니다',
      '개발, 테스트, 문서화, 배포, 보안, 성능, 승인 관점을 골고루 포함해야 합니다',
      '측정 가능하고 검증 가능한 조건이어야 합니다',
      '지식 베이스의 베스트 프랙티스를 참고해야 합니다',
      '한국어로 작성해야 합니다'
    ])
    .addUserRequest(
      task,
      '위 업무의 완료 조건(Definition of Done)을 생성해주세요.'
    )
    .addOutputFormat(
      '다음 JSON 배열 형식으로 출력하세요:\n```json\n["조건1", "조건2", "조건3", "조건4", "조건5", "조건6", "조건7"]\n```'
    );

  return builder.build();
}

/**
 * 솔루션 초안 생성 프롬프트
 */
export async function buildSolutionDraftPrompt(task: Task): Promise<string> {
  const builder = new PromptBuilder();

  builder
    .addSystemPrompt('TECH_LEAD')
    .addConstraints([
      '마크다운 형식으로 작성해야 합니다',
      '코드 예시는 TypeScript/React를 사용해야 합니다',
      '실용적이고 구현 가능한 솔루션을 제시해야 합니다',
      '아키텍처 다이어그램이 필요한 경우 텍스트로 설명해야 합니다'
    ])
    .addUserRequest(
      task,
      '위 업무를 구현하기 위한 기술적 솔루션 초안을 작성해주세요.'
    )
    .addOutputFormat(
      '마크다운 형식으로 다음 섹션을 포함하세요:\n- 구현 접근 방식\n- 주요 기술 스택\n- 코드 예시\n- 고려사항'
    );

  return builder.build();
}

/**
 * 학습 자료 추천 프롬프트
 */
export async function buildResourceRecommendationPrompt(task: Task): Promise<string> {
  const builder = new PromptBuilder();

  builder
    .addSystemPrompt('TECH_LEAD')
    .addConstraints([
      '공식 문서나 신뢰할 수 있는 출처를 우선해야 합니다',
      '실무에 바로 적용 가능한 자료를 추천해야 합니다',
      '최신 기술 트렌드를 반영해야 합니다',
      '정확히 3개의 자료를 추천해야 합니다'
    ])
    .addUserRequest(
      task,
      '위 업무와 관련된 학습 자료를 추천해주세요.'
    )
    .addOutputFormat(
      '다음 JSON 배열 형식으로 출력하세요:\n```json\n[{"title": "자료명", "url": "링크", "description": "추천 이유"}]\n```'
    );

  return builder.build();
}

/**
 * AI 채팅 시스템 프롬프트
 */
export function buildChatSystemPrompt(task: Task): string {
  return `${SYSTEM_PROMPTS.ASSISTANT}

[현재 업무 컨텍스트]
제목: ${task.title}
설명: ${task.description || '(설명 없음)'}
타입: ${task.type || '일반'}
우선순위: ${task.priority || 'MEDIUM'}

[지침]
- 위 업무와 관련된 질문에 정확하고 유용하게 답변하세요
- 필요시 업무 개선 제안을 제공하세요
- 친절하고 전문적인 톤을 유지하세요
- 한국어로 답변하세요`;
}

// ============================================
// 5. 프롬프트 최적화 유틸리티
// ============================================

/**
 * 프롬프트 크기 최적화
 */
export function optimizePromptSize(prompt: string, maxTokens: number = 6000): string {
  const estimatedTokens = Math.ceil(prompt.length / 4);
  
  if (estimatedTokens <= maxTokens) {
    return prompt;
  }

  console.warn(`⚠️ 프롬프트 크기 초과: ${estimatedTokens} tokens (최대: ${maxTokens})`);
  
  // 지식 베이스 섹션 축소
  const sections = prompt.split('# 지식 베이스');
  if (sections.length > 1) {
    const knowledgeBase = sections[1].split('\n\n# ')[0];
    const truncated = knowledgeBase.substring(0, Math.floor(knowledgeBase.length * 0.6));
    return sections[0] + '# 지식 베이스\n' + truncated + '\n\n# ' + sections[1].split('\n\n# ').slice(1).join('\n\n# ');
  }

  return prompt;
}

/**
 * Few-Shot 예시 동적 선택
 */
export function selectBestExamples(
  task: Task,
  examples: FewShotExample[],
  maxExamples: number = 2
): FewShotExample[] {
  // 업무 타입이 일치하는 예시 우선
  const matched = examples.filter(ex => ex.task.type === task.type);
  const other = examples.filter(ex => ex.task.type !== task.type);
  
  return [...matched, ...other].slice(0, maxExamples);
}

// Export
export default {
  buildExecutionPlanPrompt,
  buildDoDPrompt,
  buildSolutionDraftPrompt,
  buildResourceRecommendationPrompt,
  buildChatSystemPrompt,
  optimizePromptSize,
  selectBestExamples
};