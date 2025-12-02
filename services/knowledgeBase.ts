// services/knowledgeBase.ts
// @ts-ignore
import executionGuideRaw from '../docs/Execution plan guide.md?raw';
// @ts-ignore
import dodGuideRaw from '../docs/DOD_GUIDE.md?raw';

// 가이드 문서 내용 로드 (파일 import 방식)
const GUIDES: Record<string, string> = {
  EXECUTION_PLAN_GUIDE: executionGuideRaw,
  DOD_GUIDE: dodGuideRaw
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
   */
  async loadGuide(guideName: string): Promise<string> {
    if (this.cache.has(guideName)) {
      return this.cache.get(guideName)!;
    }
    
    // GUIDES 상수에 있는 내용 사용
    const content = GUIDES[guideName];
    if (content) {
        this.cache.set(guideName, content);
        return content;
    }
    
    console.warn(`⚠️ [KnowledgeBase] Guide not found: ${guideName}`);
    return '';
  }

  /**
   * 특정 섹션만 추출
   */
  extractSection(content: string, sectionTitle: string): string {
    const regex = new RegExp(`(#{2,3})\\s+${sectionTitle}[\\s\\S]*?(?=(#{2,3})\\s|$)`, 'i');
    const match = content.match(regex);
    return match ? match[0] : '';
  }

  /**
   * 태스크 타입에 따라 관련 섹션만 추출
   * gemini-2.0-flash-exp 모델은 컨텍스트 윈도우가 크므로 전체를 넣습니다.
   */
  async getRelevantContext(guideName: string, taskType: string): Promise<string> {
    const fullGuide = await this.loadGuide(guideName);
    return fullGuide || '';
  }
}

// 싱글톤 인스턴스 export
export const knowledgeBase = new KnowledgeBase();
