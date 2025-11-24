# 커밋, 릴리즈 및 배포 워크플로우

**Nexus-AI**는 "Single Source of Truth (SSOT)" 원칙을 따릅니다. 코드가 곧 문서이며, 자동화된 스크립트를 통해 릴리즈 프로세스를 관리합니다.

---

## 1. 개발 및 문서화 (Development)

기능 개발 시, 코드를 수정하면 관련 문서와 레지스트리가 자동으로 동기화될 수 있도록 다음 규칙을 따른다.

*   **AI 기능 추가/수정**: `services/prompts.ts` 내의 `AI_FEATURES` 배열을 수정한다.
    *   `SettingsPage` 레지스트리에 자동 반영됨.
    *   `npm run build` 또는 `npm run gen:docs` 실행 시 `docs/AI_FEATURES.md` 파일이 자동 생성됨.
*   **디자인/개발 가이드**: `DESIGN_SYSTEM.md` 또는 `DEVELOPER_GUIDE.md`를 수정하면, `SettingsPage`에서 즉시 최신본을 다운로드할 수 있다.

## 2. 릴리즈 및 Changelog (Release)

작업이 완료되고 배포할 준비가 되면, 수동으로 파일을 수정하지 않고 자동화 스크립트를 사용한다.

1.  **릴리즈 스크립트 실행**:
    ```bash
    npm run release
    ```
2.  **프롬프트 입력**:
    *   **Version**: 새 버전 번호 입력 (Enter 입력 시 Patch 버전 자동 증가).
    *   **Title**: 릴리즈 제목 입력.
    *   **Description**: 변경 사항 요약 (HTML 태그 사용 가능).
3.  **자동 수행 작업**:
    *   `package.json` 버전 업데이트.
    *   `data/changelog.json` 최상단에 새 항목 추가.

## 3. 커밋, 푸시 및 배포 (Commit, Push & Deploy)

1.  **빌드 테스트 (자동 문서 생성 포함)**:
    ```bash
    npm run build
    ```
    *   이 과정에서 `scripts/generate-docs.ts`가 실행되어 문서를 최신화하고, 빌드 오류가 없는지 확인합니다.
2.  **커밋 및 푸시 (Commit & Push)**:
    *   빌드가 성공하면 **즉시 커밋하고 원격 저장소에 푸시**합니다.
    ```bash
    git add .
    git commit -m "chore(release): bump to v[버전]"  # 또는 기능별 커밋 메시지
    git push
    ```
3.  **배포 (Deploy)**:
    *   커밋 및 푸시가 완료된 후, 사용자에게 최종 배포 여부를 묻고 승인 시 배포를 진행합니다.

---

### ✅ SSOT 체크포인트

*   `services/prompts.ts`의 `AI_FEATURES`가 최신인가? (자동 문서화 대상)
*   `npm run release`를 통해 `changelog.json`을 갱신했는가?
*   `docs/` 폴더 내의 문서가 빌드 후 갱신되었는가?
