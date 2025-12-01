// services/knowledgeBase.ts

// 기본 가이드 문서 내용 (하드코딩)
const GUIDES: Record<string, string> = {
  EXECUTION_PLAN_GUIDE: `
# 실행 계획 가이드

## 일반
1. 요구사항 분석 및 기획
2. 기술 설계 및 아키텍처 검토
3. 구현 및 개발
4. 테스트 및 검증
5. 배포 및 모니터링

## 기능
1. UI/UX 디자인 검토
2. 프론트엔드/백엔드 인터페이스 정의
3. 핵심 로직 구현
4. 단위 테스트 작성
5. 통합 테스트 수행

## 버그
1. 버그 재현 및 로그 분석
2. 원인 파악 및 디버깅
3. 핫픽스 개발
4. 회귀 테스트
5. 패치 배포
`,
  DOD_GUIDE: `
# 완료 조건(DoD) 가이드

## 일반
- 모든 기능 요구사항이 충족되었습니다.
- 코드 리뷰가 완료되고 승인되었습니다.
- CI/CD 파이프라인을 통과했습니다.

## 기능
- UI가 디자인 시안과 일치합니다.
- 크로스 브라우저 테스트를 통과했습니다.
- 모바일 반응형이 확인되었습니다.

## 버그
- 해당 버그가 더 이상 재현되지 않습니다.
- 기존 기능에 부작용이 없음을 확인했습니다(회귀 테스트).
`
};

/**
 * 지식 베이스 로딩 및 관리 서비스
 * (클라이언트 사이드 호환 버전)
 */
class KnowledgeBase {
  private cache: Map<string, string> = new Map();

  constructor() {}

  /**
   * 가이드 내용 로드
   * @param guideName 가이드 이름 (예: EXECUTION_PLAN_GUIDE)
   */
  async loadGuide(guideName: string): Promise<string> {
    // 1. 캐시 확인
    if (this.cache.has(guideName)) {
      return this.cache.get(guideName)!;
    }

    // 2. 내장 가이드 확인
    const content = GUIDES[guideName];
    if (content) {
        this.cache.set(guideName, content);
        return content;
    }

    console.warn(`⚠️ [KnowledgeBase] Guide not found: ${guideName}`);
    return '';
  }

  /**
   * 특정 섹션만 추출 (토큰 절약용)
   */
  extractSection(content: string, sectionTitle: string): string {
    const regex = new RegExp(`## ${sectionTitle}[\\s\\S]*?(?=##|$)`, 'i');
    const match = content.match(regex);
    return match ? match[0] : '';
  }

  /**
   * 태스크 타입에 따라 관련 섹션만 추출
   */
  async getRelevantContext(guideName: string, taskType: string): Promise<string> {
    const fullGuide = await this.loadGuide(guideName);
    
    if (!fullGuide) return '';

    // 태스크 타입 매핑 (간소화)
    const sectionMap: Record<string, string[]> = {
      '버그': ['버그', '일반'],
      '기능': ['기능', '일반'],
      '디자인': ['기능', '일반'], // 디자인 전용 섹션이 없으면 기능/일반 사용
      'default': ['일반']
    };

    const targetSections = sectionMap[taskType] || sectionMap['default'];

    const contexts = targetSections
      .map(section => this.extractSection(fullGuide, section))
      .filter(section => section.length > 0);

    return contexts.length > 0 ? contexts.join('\n\n---\n\n') : fullGuide;
  }
}

// 싱글톤 인스턴스 export
export const knowledgeBase = new KnowledgeBase();
