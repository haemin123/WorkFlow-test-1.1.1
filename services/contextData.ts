// services/contextData.ts

// NOTE: This is a simplified RAG implementation.
// In a production environment, you would use a Vector Database or embeddings.
// For now, we manually inject key summaries of our internal docs.

export const DESIGN_SYSTEM_CONTEXT = `
[Design System Summary]
1. Colors:
   - Background: Google Grey (#F8F9FA)
   - Text: #202124 (Primary), #5F6368 (Secondary)
   - Brand: Google Blue (#1A73E8)
2. Typography:
   - Font Family: 'Inter', 'Pretendard', sans-serif
3. UI Components:
   - Rounded Corners: rounded-xl (standard)
   - Shadows: shadow-sm (default), shadow-md (hover)
   - Icons: Lucide React (stroke-width: 2px)
4. Motion:
   - Duration: 0.2s ~ 0.3s
   - Easing: ease-out
`;

export const WORKFLOW_CONTEXT = `
[Workflow & Development Rules]
1. Task Management:
   - All tasks must have Acceptance Criteria (DoD).
   - Status Flow: REQUESTED -> WIP -> CHECKED (Review/Approve) -> DONE.
   - Priority: HIGH, MEDIUM, LOW.
2. Code & Release:
   - SSOT: Code is the source of truth.
   - Docs: 'docs/AI_FEATURES.md' is auto-generated from 'services/prompts.ts'.
   - Build: Always verify with 'npm run build' before pushing.
3. Commit Messages:
   - Use conventional commits (feat, fix, docs, style, refactor).
   - Commit messages are used for 'changelog.json'.
`;

export const DOD_CONTEXT = `
[Definition of Done (DoD) Guidelines]
Based on 'docs/DOD_GUIDE.md', adhere to these rules when generating Acceptance Criteria:

1. **General Principles**:
   - Clarity: Must be objectively verifiable.
   - Measurability: Use specific metrics where possible.
   - Completeness: Cover functional, quality, and documentation aspects.

2. **Task Type Specifics**:
   - **Frontend**: UI/UX compliance, Cross-browser check, Responsive design, Accessibility (WCAG), Unit tests.
   - **Backend**: API Spec (Swagger), Unit/Integration tests, Error handling, Security/Auth check, Logging.
   - **Bug Fix**: Root cause identified, Regression test passed, QA verified.
   - **Design**: Prototype approved, Hand-off completed, Design system compliance.
   - **DevOps**: IaC code, Monitoring set, Backup plan, Security group check.

3. **Priority Adjustments**:
   - **P0 (Urgent)**: Focus on core functionality, immediate testing, production verification.
   - **P1 (High)**: Standard DoD (Tests, Code Review, Docs).
   - **P2/P3**: Extended DoD (Performance optimization, Refactoring, Best practices).

4. **Required Checklist Items**:
   - Functional requirements met.
   - Tests passed (Unit/Integration).
   - Code review approved.
   - Documentation updated.
   - Build & Deployment verified.
`;

export const getSystemContext = () => {
    return `
    SYSTEM CONTEXT (STRICTLY FOLLOW THESE RULES):
    
    ${DESIGN_SYSTEM_CONTEXT}
    
    ${WORKFLOW_CONTEXT}
    
    When generating content, ensure it aligns with the Design System and Workflow Rules above.
    `;
};

export const getDoDContext = () => {
    return `
    DOD GENERATION CONTEXT (STRICTLY FOLLOW THESE RULES):

    ${DOD_CONTEXT}

    ${WORKFLOW_CONTEXT}

    Generate specific, measurable, and realistic Acceptance Criteria based on the task type and priority.
    `;
};
