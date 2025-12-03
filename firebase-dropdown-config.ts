// firebase-dropdown-config.ts
// Firebase Firestore에 저장할 조직 데이터 구조

export interface OrganizationData {
  departments: {
    본부: string[];
    팀매핑: Record<string, string[]>;
  };
  positions: {
    직급: string[];
    직책: string[];
  };
}

export const INITIAL_ORGANIZATION_DATA: OrganizationData = {
  departments: {
    "본부": [
      "AD본부",
      "SI본부",
      "DI본부",
      "인사"
    ],
    "팀매핑": {
      "AD본부": [
        "PM1팀",
        "PM2팀",
        "PM3팀"
      ],
      "SI본부": [
        "PM1팀",
        "PM2팀"
      ],
      "DI본부": [
        "DI팀"
      ],
      "인사": [
        "인사팀",
        "재무팀",
        "총무팀"
      ]
    }
  },
  positions: {
    "직급": [
      "대표이사",
      "이사",
      "상무",
      "차장",
      "과장",
      "대리",
      "사원"
    ],
    "직책": [
      "대표이사",
      "본부장",
      "팀장",
      "파트원"
    ]
  }
};

// Firestore 컬렉션 및 문서 경로
export const FIRESTORE_PATHS = {
  ORGANIZATION_DATA: 'system/organizationData'
} as const;
