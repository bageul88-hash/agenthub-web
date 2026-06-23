// ────────────────────────────────────────────
// Interfaces
// ────────────────────────────────────────────

export interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  categorySlug: string;
  badge?: "NEW" | "HOT";
  price: string;
  rating: number;
  usageCount: number;
  creatorName: string;
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  agentCount: number;
  description: string;
  color: string;
}

export interface RankingItem {
  rank: number;
  name: string;
  category: string;
  weeklyGrowth: number;
  price: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initial: string;
  type: "buyer" | "seller" | "winner";
  color: string;
}

// ────────────────────────────────────────────
// Categories (8개)
// ────────────────────────────────────────────

export const categories: Category[] = [
  {
    slug: "marketing",
    name: "마케팅",
    icon: "Megaphone",
    agentCount: 234,
    description: "광고·SNS·콘텐츠 마케팅 자동화 에이전트",
    color: "#7F77DD",
  },
  {
    slug: "writing",
    name: "글쓰기·콘텐츠",
    icon: "PenTool",
    agentCount: 189,
    description: "블로그·스크립트·카피라이팅 자동 작성 에이전트",
    color: "#534AB7",
  },
  {
    slug: "dev",
    name: "개발·코딩",
    icon: "Code2",
    agentCount: 156,
    description: "코드 리뷰·생성·최적화·문서화 에이전트",
    color: "#1D9E75",
  },
  {
    slug: "design",
    name: "디자인",
    icon: "Palette",
    agentCount: 112,
    description: "디자인 프롬프트·피드백·브랜딩 에이전트",
    color: "#EF9F27",
  },
  {
    slug: "analytics",
    name: "데이터 분석",
    icon: "BarChart2",
    agentCount: 143,
    description: "데이터 리포트·감성 분석·트렌드 예측 에이전트",
    color: "#3C3489",
  },
  {
    slug: "support",
    name: "고객 응대",
    icon: "MessageSquare",
    agentCount: 98,
    description: "24시간 자동 응대·FAQ·상담 에이전트",
    color: "#7F77DD",
  },
  {
    slug: "automation",
    name: "업무 자동화",
    icon: "Zap",
    agentCount: 201,
    description: "이메일·보고서·일정·슬랙 업무 자동화 에이전트",
    color: "#26205A",
  },
  {
    slug: "education",
    name: "교육·학습",
    icon: "BookOpen",
    agentCount: 87,
    description: "영어·코딩·면접·자격증 학습 도우미 에이전트",
    color: "#EF9F27",
  },
];

// ────────────────────────────────────────────
// All Agents (120개 — 카테고리별 15개)
// ────────────────────────────────────────────

export const allAgents: Agent[] = [
  // ── 마케팅 (marketing) ─────────────────────
  {
    id: "1",
    name: "인스타그램 자동 게시 에이전트",
    description: "하루 3~5개 인스타 게시물을 자동으로 기획·작성·예약까지.",
    category: "마케팅",
    categorySlug: "marketing",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.9,
    usageCount: 1240,
    creatorName: "김민준",
  },
  {
    id: "7",
    name: "페이스북 광고 카피 자동 생성기",
    description: "상품 정보 입력만 하면 클릭률 높은 페이스북·인스타 광고 카피 즉시 완성.",
    category: "마케팅",
    categorySlug: "marketing",
    price: "₩11,900/월",
    rating: 4.7,
    usageCount: 876,
    creatorName: "오지현",
  },
  {
    id: "8",
    name: "네이버 스마트스토어 상품 설명 생성기",
    description: "상품명·키워드만 넣으면 SEO 최적화된 스마트스토어 상품 상세 설명 자동 작성.",
    category: "마케팅",
    categorySlug: "marketing",
    badge: "HOT",
    price: "₩7,900/월",
    rating: 4.8,
    usageCount: 1540,
    creatorName: "이채원",
  },
  {
    id: "9",
    name: "유튜브 썸네일 아이디어 에이전트",
    description: "영상 제목을 입력하면 조회수 높이는 썸네일 콘셉트 5가지를 제안해줘요.",
    category: "마케팅",
    categorySlug: "marketing",
    badge: "NEW",
    price: "₩6,900/월",
    rating: 4.5,
    usageCount: 432,
    creatorName: "정우진",
  },
  {
    id: "10",
    name: "이메일 뉴스레터 자동 작성 에이전트",
    description: "주제 키워드와 타깃 독자를 입력하면 구독자 유지율을 높이는 뉴스레터 초안 생성.",
    category: "마케팅",
    categorySlug: "marketing",
    price: "₩9,900/월",
    rating: 4.6,
    usageCount: 567,
    creatorName: "한미라",
  },
  {
    id: "11",
    name: "브랜드 소셜미디어 분석 에이전트",
    description: "경쟁사 SNS 트렌드를 분석해 나에게 맞는 콘텐츠 전략을 자동 리포트로 제공.",
    category: "마케팅",
    categorySlug: "marketing",
    price: "₩19,900/월",
    rating: 4.7,
    usageCount: 389,
    creatorName: "임수빈",
  },

  // ── 글쓰기·콘텐츠 (writing) ────────────────
  {
    id: "2",
    name: "AI 블로그 SEO 라이터",
    description: "키워드 하나로 네이버·구글 상위 노출 최적화 블로그 글 완성.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    badge: "HOT",
    price: "₩12,900/월",
    rating: 4.8,
    usageCount: 892,
    creatorName: "이수진",
  },
  {
    id: "12",
    name: "유튜브 스크립트 작성기",
    description: "영상 주제와 길이를 입력하면 자연스러운 유튜브 대본을 완성도 높게 작성.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.9,
    usageCount: 1120,
    creatorName: "조승현",
  },
  {
    id: "13",
    name: "보도자료 자동 작성기",
    description: "행사·제품·서비스 정보를 입력하면 언론사 배포용 보도자료를 자동으로 작성.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    price: "₩14,900/월",
    rating: 4.7,
    usageCount: 234,
    creatorName: "김태희",
  },
  {
    id: "14",
    name: "카드뉴스 콘텐츠 기획 에이전트",
    description: "트렌드 주제를 입력하면 인스타그램 카드뉴스 10장 구성과 텍스트를 자동 기획.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    badge: "NEW",
    price: "₩8,900/월",
    rating: 4.6,
    usageCount: 445,
    creatorName: "박나은",
  },
  {
    id: "15",
    name: "한국어 교정·맞춤법 검사 에이전트",
    description: "긴 문서도 맞춤법·문체·어색한 표현까지 한 번에 교정해주는 전문 교열 에이전트.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    price: "₩5,900/월",
    rating: 4.8,
    usageCount: 2100,
    creatorName: "윤지호",
  },
  {
    id: "16",
    name: "소설·스토리 창작 도우미",
    description: "장르와 주인공 설정만 입력하면 플롯·챕터 구성과 초안을 함께 써드려요.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    price: "₩9,900/월",
    rating: 4.5,
    usageCount: 678,
    creatorName: "최지우",
  },

  // ── 개발·코딩 (dev) ──────────────────────────
  {
    id: "5",
    name: "GitHub 코드 리뷰 도우미",
    description: "PR 링크만 넣으면 버그·보안·성능 이슈를 자동으로 리뷰해줘요.",
    category: "개발·코딩",
    categorySlug: "dev",
    price: "₩9,900/월",
    rating: 4.9,
    usageCount: 1089,
    creatorName: "강동현",
  },
  {
    id: "17",
    name: "React 컴포넌트 생성기",
    description: "UI 설명을 입력하면 TypeScript + Tailwind 기반 React 컴포넌트 코드를 즉시 생성.",
    category: "개발·코딩",
    categorySlug: "dev",
    badge: "HOT",
    price: "₩14,900/월",
    rating: 4.8,
    usageCount: 945,
    creatorName: "신민준",
  },
  {
    id: "18",
    name: "SQL 쿼리 최적화 에이전트",
    description: "느린 쿼리를 붙여넣으면 실행 계획 분석 후 최적화된 쿼리로 바꿔드려요.",
    category: "개발·코딩",
    categorySlug: "dev",
    price: "₩11,900/월",
    rating: 4.7,
    usageCount: 567,
    creatorName: "이도훈",
  },
  {
    id: "19",
    name: "API 문서 자동 생성기",
    description: "코드나 엔드포인트를 입력하면 Swagger·Notion 형식의 API 문서를 자동 작성.",
    category: "개발·코딩",
    categorySlug: "dev",
    badge: "NEW",
    price: "₩9,900/월",
    rating: 4.6,
    usageCount: 312,
    creatorName: "한지수",
  },
  {
    id: "20",
    name: "버그 리포트 분석 에이전트",
    description: "에러 로그나 스택 트레이스를 붙이면 원인 분석과 수정 방법을 단계별로 안내.",
    category: "개발·코딩",
    categorySlug: "dev",
    price: "₩7,900/월",
    rating: 4.8,
    usageCount: 789,
    creatorName: "오준혁",
  },
  {
    id: "21",
    name: "코드 리팩토링 도우미",
    description: "레거시 코드를 클린 코드 원칙에 맞게 자동으로 구조 개선 및 주석 추가.",
    category: "개발·코딩",
    categorySlug: "dev",
    price: "₩9,900/월",
    rating: 4.7,
    usageCount: 456,
    creatorName: "장서윤",
  },

  // ── 디자인 (design) ────────────────────────
  {
    id: "22",
    name: "AI 디자인 프롬프트 메이커",
    description: "원하는 이미지를 설명하면 Midjourney·DALL-E용 고품질 프롬프트를 즉시 생성.",
    category: "디자인",
    categorySlug: "design",
    badge: "HOT",
    price: "₩6,900/월",
    rating: 4.8,
    usageCount: 1890,
    creatorName: "김예린",
  },
  {
    id: "23",
    name: "Figma 프로토타입 피드백 에이전트",
    description: "Figma 링크를 공유하면 UX 원칙 기반으로 개선점을 상세하게 리뷰해드려요.",
    category: "디자인",
    categorySlug: "design",
    badge: "NEW",
    price: "₩11,900/월",
    rating: 4.7,
    usageCount: 278,
    creatorName: "박선우",
  },
  {
    id: "24",
    name: "브랜드 컬러 팔레트 추천기",
    description: "업종과 브랜드 키워드를 입력하면 어울리는 컬러 팔레트와 활용 가이드 제공.",
    category: "디자인",
    categorySlug: "design",
    price: "₩5,900/월",
    rating: 4.6,
    usageCount: 543,
    creatorName: "이유진",
  },
  {
    id: "25",
    name: "UI 텍스트 카피 에이전트",
    description: "버튼·알림·온보딩 문구를 입력하면 전환율 높이는 마이크로카피로 개선.",
    category: "디자인",
    categorySlug: "design",
    price: "₩7,900/월",
    rating: 4.7,
    usageCount: 321,
    creatorName: "정수민",
  },
  {
    id: "26",
    name: "로고 아이디어 브레인스토밍",
    description: "브랜드 가치와 업종을 입력하면 로고 컨셉·심볼·스타일 방향을 10가지 제안.",
    category: "디자인",
    categorySlug: "design",
    price: "₩8,900/월",
    rating: 4.5,
    usageCount: 412,
    creatorName: "오민지",
  },

  // ── 데이터 분석 (analytics) ─────────────────
  {
    id: "4",
    name: "데이터 분석 리포트 자동화",
    description: "엑셀·구글시트 데이터를 업로드하면 인사이트 리포트 자동 생성.",
    category: "데이터 분석",
    categorySlug: "analytics",
    badge: "NEW",
    price: "₩14,900/월",
    rating: 4.8,
    usageCount: 437,
    creatorName: "최은혜",
  },
  {
    id: "27",
    name: "고객 리뷰 감성 분석기",
    description: "쇼핑몰·앱스토어 리뷰를 붙이면 긍정·부정·중립 비율과 개선 포인트를 즉시 분석.",
    category: "데이터 분석",
    categorySlug: "analytics",
    badge: "HOT",
    price: "₩11,900/월",
    rating: 4.9,
    usageCount: 1230,
    creatorName: "류민성",
  },
  {
    id: "28",
    name: "매출 트렌드 예측 에이전트",
    description: "과거 매출 데이터를 입력하면 다음 분기 예측치와 성장 전략을 리포트로 제공.",
    category: "데이터 분석",
    categorySlug: "analytics",
    price: "₩19,900/월",
    rating: 4.7,
    usageCount: 198,
    creatorName: "김현수",
  },
  {
    id: "29",
    name: "A/B 테스트 결과 분석기",
    description: "A/B 테스트 데이터를 붙이면 통계적 유의성과 승리 변형을 자동으로 판정.",
    category: "데이터 분석",
    categorySlug: "analytics",
    price: "₩9,900/월",
    rating: 4.6,
    usageCount: 345,
    creatorName: "손은지",
  },
  {
    id: "30",
    name: "GA4 리포트 해석 에이전트",
    description: "구글 애널리틱스 4 데이터를 붙이면 비전문가도 이해할 수 있는 인사이트로 요약.",
    category: "데이터 분석",
    categorySlug: "analytics",
    badge: "NEW",
    price: "₩8,900/월",
    rating: 4.7,
    usageCount: 567,
    creatorName: "정민아",
  },
  {
    id: "31",
    name: "경쟁사 가격 모니터링 에이전트",
    description: "경쟁사 URL을 등록하면 가격 변동을 모니터링하고 대응 전략을 자동 알림.",
    category: "데이터 분석",
    categorySlug: "analytics",
    price: "₩14,900/월",
    rating: 4.5,
    usageCount: 234,
    creatorName: "박성준",
  },

  // ── 고객 응대 (support) ─────────────────────
  {
    id: "3",
    name: "카카오 채널 자동 응답봇",
    description: "카카오 비즈니스 채널 고객 문의를 24시간 자동으로 응대.",
    category: "고객 응대",
    categorySlug: "support",
    badge: "NEW",
    price: "₩19,900/월",
    rating: 4.7,
    usageCount: 654,
    creatorName: "박정훈",
  },
  {
    id: "32",
    name: "네이버 스토어 문의 자동 분류기",
    description: "쌓인 문의를 배송·환불·상품 문의로 자동 분류하고 답변 템플릿을 매칭.",
    category: "고객 응대",
    categorySlug: "support",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.8,
    usageCount: 987,
    creatorName: "이민호",
  },
  {
    id: "33",
    name: "FAQ 자동 생성 에이전트",
    description: "서비스 소개나 제품 설명을 입력하면 고객이 자주 묻는 FAQ 30문 30답을 자동 생성.",
    category: "고객 응대",
    categorySlug: "support",
    price: "₩7,900/월",
    rating: 4.6,
    usageCount: 432,
    creatorName: "최서연",
  },
  {
    id: "34",
    name: "1:1 채팅 상담 에이전트",
    description: "웹사이트에 삽입하면 제품·서비스 관련 질문에 실시간으로 응답하는 AI 상담사.",
    category: "고객 응대",
    categorySlug: "support",
    price: "₩29,900/월",
    rating: 4.7,
    usageCount: 312,
    creatorName: "한동훈",
  },
  {
    id: "35",
    name: "반품·환불 처리 자동화",
    description: "반품 요청 메시지를 분석해 사유 분류·승인 판단·답변 초안을 자동으로 처리.",
    category: "고객 응대",
    categorySlug: "support",
    badge: "NEW",
    price: "₩11,900/월",
    rating: 4.5,
    usageCount: 289,
    creatorName: "임지현",
  },
  {
    id: "36",
    name: "고객 만족도 설문 분석기",
    description: "설문 응답 텍스트를 분석해 핵심 불만·칭찬 포인트를 카테고리별로 정리.",
    category: "고객 응대",
    categorySlug: "support",
    price: "₩8,900/월",
    rating: 4.6,
    usageCount: 198,
    creatorName: "조현진",
  },

  // ── 업무 자동화 (automation) ────────────────
  {
    id: "6",
    name: "회의록 자동 요약 에이전트",
    description: "Zoom·Teams·Google Meet 녹음 파일을 요약·액션아이템 정리.",
    category: "업무 자동화",
    categorySlug: "automation",
    price: "₩7,900/월",
    rating: 4.6,
    usageCount: 2310,
    creatorName: "윤서연",
  },
  {
    id: "37",
    name: "GPT 이메일 자동 답장",
    description: "받은 이메일의 맥락을 분석해 적절한 답장 초안을 3가지 톤으로 제안.",
    category: "업무 자동화",
    categorySlug: "automation",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.9,
    usageCount: 2840,
    creatorName: "김도현",
  },
  {
    id: "38",
    name: "주간 업무 보고서 자동화",
    description: "할 일 목록과 완료 작업을 입력하면 임원 보고용 주간 업무 보고서를 자동 작성.",
    category: "업무 자동화",
    categorySlug: "automation",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.8,
    usageCount: 1560,
    creatorName: "박지원",
  },
  {
    id: "39",
    name: "슬랙 업무 알림 정리 에이전트",
    description: "슬랙 채널 대화를 요약해 중요 공지·할 일·결정사항을 일목요연하게 정리.",
    category: "업무 자동화",
    categorySlug: "automation",
    badge: "NEW",
    price: "₩11,900/월",
    rating: 4.6,
    usageCount: 678,
    creatorName: "이강민",
  },
  {
    id: "40",
    name: "캘린더 일정 자동 정리기",
    description: "이메일·메신저 대화에서 약속 내용을 추출해 구글 캘린더 일정으로 자동 생성.",
    category: "업무 자동화",
    categorySlug: "automation",
    price: "₩7,900/월",
    rating: 4.7,
    usageCount: 890,
    creatorName: "최유리",
  },
  {
    id: "41",
    name: "영수증·지출 자동 분류 에이전트",
    description: "영수증 사진을 업로드하면 항목·금액·날짜를 자동으로 지출 카테고리별로 정리.",
    category: "업무 자동화",
    categorySlug: "automation",
    price: "₩5,900/월",
    rating: 4.5,
    usageCount: 1120,
    creatorName: "송민석",
  },

  // ── 교육·학습 (education) ───────────────────
  {
    id: "42",
    name: "영어 회화 연습 에이전트",
    description: "주제를 정하면 원어민 수준의 영어 회화 상대가 되어드립니다. 교정 피드백 제공.",
    category: "교육·학습",
    categorySlug: "education",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.9,
    usageCount: 3210,
    creatorName: "권지수",
  },
  {
    id: "43",
    name: "코딩 튜터 에이전트",
    description: "파이썬·자바스크립트·SQL 등 원하는 언어로 단계별 설명과 실습 문제를 제공.",
    category: "교육·학습",
    categorySlug: "education",
    badge: "HOT",
    price: "₩14,900/월",
    rating: 4.8,
    usageCount: 1890,
    creatorName: "남준혁",
  },
  {
    id: "44",
    name: "취업 면접 준비 도우미",
    description: "회사·직무를 입력하면 예상 질문 50개와 STAR 기법 기반 답변 전략을 제시.",
    category: "교육·학습",
    categorySlug: "education",
    badge: "NEW",
    price: "₩9,900/월",
    rating: 4.7,
    usageCount: 2100,
    creatorName: "고은비",
  },
  {
    id: "45",
    name: "자격증 문제 풀이 에이전트",
    description: "정보처리기사·SQLD·토익 등 자격증 기출문제를 틀린 이유와 함께 상세 해설.",
    category: "교육·학습",
    categorySlug: "education",
    price: "₩7,900/월",
    rating: 4.6,
    usageCount: 1456,
    creatorName: "백지훈",
  },
  {
    id: "46",
    name: "독서 요약·노트 정리 에이전트",
    description: "책의 핵심 내용·챕터 요약·인상 깊은 문장을 구조화된 노트로 자동 정리.",
    category: "교육·학습",
    categorySlug: "education",
    price: "₩5,900/월",
    rating: 4.7,
    usageCount: 987,
    creatorName: "서지안",
  },

  // ── 마케팅 추가 (marketing) ─────────────────
  {
    id: "47",
    name: "당근마켓 판매글 자동 작성기",
    description: "상품 사진·상태·가격을 입력하면 당근마켓에 최적화된 판매 게시글을 즉시 완성.",
    category: "마케팅",
    categorySlug: "marketing",
    badge: "HOT",
    price: "₩4,900/월",
    rating: 4.8,
    usageCount: 1430,
    creatorName: "김지훈",
  },
  {
    id: "48",
    name: "고객 리뷰 답글 자동 생성기",
    description: "별점과 리뷰 내용을 입력하면 감사·사과·해명 유형별 맞춤 답글 초안 3가지 제안.",
    category: "마케팅",
    categorySlug: "marketing",
    price: "₩6,900/월",
    rating: 4.7,
    usageCount: 890,
    creatorName: "이서연",
  },
  {
    id: "49",
    name: "릴스·쇼츠 스크립트 작성기",
    description: "주제와 타깃 연령을 입력하면 60초 이내 릴스·쇼츠 영상 대본과 자막을 자동 작성.",
    category: "마케팅",
    categorySlug: "marketing",
    badge: "NEW",
    price: "₩7,900/월",
    rating: 4.6,
    usageCount: 543,
    creatorName: "박도연",
  },
  {
    id: "50",
    name: "블로그 체험단 모집글 생성기",
    description: "제품명·혜택·조건을 입력하면 SNS·블로그 체험단 모집공고를 클릭률 높게 작성.",
    category: "마케팅",
    categorySlug: "marketing",
    price: "₩5,900/월",
    rating: 4.5,
    usageCount: 678,
    creatorName: "최민지",
  },
  {
    id: "51",
    name: "카카오 채널 홍보 메시지 작성기",
    description: "이벤트·신상품 정보를 입력하면 카카오 채널 친구톡·알림톡 메시지를 자동 생성.",
    category: "마케팅",
    categorySlug: "marketing",
    price: "₩8,900/월",
    rating: 4.7,
    usageCount: 412,
    creatorName: "정수아",
  },
  {
    id: "52",
    name: "네이버 플레이스 소개글 최적화기",
    description: "업종·서비스·위치를 입력하면 네이버 플레이스 검색 노출에 최적화된 업체 소개글 완성.",
    category: "마케팅",
    categorySlug: "marketing",
    price: "₩6,900/월",
    rating: 4.8,
    usageCount: 765,
    creatorName: "한승우",
  },
  {
    id: "53",
    name: "키워드 광고 A/B 카피 에이전트",
    description: "상품과 핵심 키워드를 입력하면 네이버·구글 검색광고용 A/B 테스트 카피 5쌍 생성.",
    category: "마케팅",
    categorySlug: "marketing",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.9,
    usageCount: 1102,
    creatorName: "임현우",
  },
  {
    id: "54",
    name: "인플루언서 협업 제안 메일 작성기",
    description: "브랜드와 채널 정보를 입력하면 인플루언서에게 보낼 협업 DM·이메일 초안을 작성.",
    category: "마케팅",
    categorySlug: "marketing",
    price: "₩5,900/월",
    rating: 4.5,
    usageCount: 334,
    creatorName: "오채영",
  },
  {
    id: "55",
    name: "시즌 프로모션 캘린더 기획 에이전트",
    description: "업종과 연도를 입력하면 12개월 시즌별 프로모션 주제와 콘텐츠 아이디어를 자동 기획.",
    category: "마케팅",
    categorySlug: "marketing",
    price: "₩11,900/월",
    rating: 4.6,
    usageCount: 289,
    creatorName: "강예은",
  },

  // ── 글쓰기·콘텐츠 추가 (writing) ─────────────
  {
    id: "56",
    name: "자기소개서 첨삭·강화 에이전트",
    description: "초안을 붙이면 직무별 핵심 역량을 강조해 합격률 높이는 자소서로 다듬어줍니다.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.9,
    usageCount: 2340,
    creatorName: "황지원",
  },
  {
    id: "57",
    name: "쇼핑몰 상세페이지 카피 작성기",
    description: "상품 특징과 타깃을 입력하면 구매 전환율을 높이는 상세페이지 섹션별 카피를 완성.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    price: "₩8,900/월",
    rating: 4.7,
    usageCount: 987,
    creatorName: "신채원",
  },
  {
    id: "58",
    name: "사내 공지·안내문 자동 작성기",
    description: "공지 내용과 대상 부서를 입력하면 전문적이고 읽기 쉬운 사내 공지문을 즉시 작성.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    price: "₩5,900/월",
    rating: 4.6,
    usageCount: 543,
    creatorName: "고민준",
  },
  {
    id: "59",
    name: "영어 이메일 번역·작성 에이전트",
    description: "한국어 내용을 입력하면 비즈니스 영어 이메일로 번역·작성하고 격식 수위도 조절.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    badge: "HOT",
    price: "₩7,900/월",
    rating: 4.8,
    usageCount: 1780,
    creatorName: "류지수",
  },
  {
    id: "60",
    name: "팟캐스트 오프닝·대본 생성기",
    description: "에피소드 주제와 게스트 정보를 입력하면 도입부·진행 대본·마무리 멘트를 자동 완성.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    price: "₩6,900/월",
    rating: 4.5,
    usageCount: 312,
    creatorName: "백수진",
  },
  {
    id: "61",
    name: "IR 피치덱 텍스트 작성 에이전트",
    description: "서비스 개요와 시장 규모를 입력하면 투자자를 설득하는 IR 피치덱 슬라이드 문구 완성.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    badge: "NEW",
    price: "₩14,900/월",
    rating: 4.7,
    usageCount: 198,
    creatorName: "문성호",
  },
  {
    id: "62",
    name: "학술 논문 3줄 요약 에이전트",
    description: "논문 제목·초록을 붙이면 핵심 연구 목적·방법·결론을 3줄로 요약해드려요.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    price: "₩4,900/월",
    rating: 4.6,
    usageCount: 876,
    creatorName: "전민서",
  },
  {
    id: "63",
    name: "서평·독후감 작성 도우미",
    description: "책 제목과 인상 깊은 구절을 입력하면 나만의 서평·독후감 초안을 자동으로 작성.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    price: "₩4,900/월",
    rating: 4.4,
    usageCount: 432,
    creatorName: "안지현",
  },
  {
    id: "64",
    name: "웹툰 시나리오 기획 에이전트",
    description: "장르와 주인공 설정을 입력하면 1화 시놉시스·에피소드 구성·주요 대사를 자동 생성.",
    category: "글쓰기·콘텐츠",
    categorySlug: "writing",
    price: "₩9,900/월",
    rating: 4.5,
    usageCount: 267,
    creatorName: "송민하",
  },

  // ── 개발·코딩 추가 (dev) ─────────────────────
  {
    id: "65",
    name: "정규식 생성 에이전트",
    description: "원하는 텍스트 패턴을 설명하면 정확한 정규표현식과 테스트 케이스를 즉시 생성.",
    category: "개발·코딩",
    categorySlug: "dev",
    price: "₩4,900/월",
    rating: 4.8,
    usageCount: 1230,
    creatorName: "김준서",
  },
  {
    id: "66",
    name: "Git 커밋 메시지 자동 생성기",
    description: "변경된 코드나 diff를 붙이면 Conventional Commits 형식의 커밋 메시지를 자동 작성.",
    category: "개발·코딩",
    categorySlug: "dev",
    badge: "HOT",
    price: "₩4,900/월",
    rating: 4.9,
    usageCount: 2100,
    creatorName: "이태준",
  },
  {
    id: "67",
    name: "단위 테스트 코드 자동 작성기",
    description: "함수나 클래스 코드를 붙이면 Jest·Pytest 등 주요 프레임워크 기반 테스트 코드 생성.",
    category: "개발·코딩",
    categorySlug: "dev",
    badge: "NEW",
    price: "₩9,900/월",
    rating: 4.7,
    usageCount: 678,
    creatorName: "박재원",
  },
  {
    id: "68",
    name: "파이썬 데이터 처리 스크립트 생성기",
    description: "원하는 데이터 변환 로직을 설명하면 pandas·numpy 기반 파이썬 스크립트를 즉시 생성.",
    category: "개발·코딩",
    categorySlug: "dev",
    price: "₩7,900/월",
    rating: 4.6,
    usageCount: 543,
    creatorName: "최현진",
  },
  {
    id: "69",
    name: "기능 명세서·기술 스펙 작성 에이전트",
    description: "서비스 아이디어와 요구사항을 입력하면 개발팀이 바로 착수할 수 있는 스펙 문서 완성.",
    category: "개발·코딩",
    categorySlug: "dev",
    price: "₩11,900/월",
    rating: 4.7,
    usageCount: 389,
    creatorName: "윤도현",
  },
  {
    id: "70",
    name: "TypeScript 타입 정의 자동 생성기",
    description: "JSON 응답이나 API 스펙을 붙이면 TypeScript interface·type 정의를 자동으로 생성.",
    category: "개발·코딩",
    categorySlug: "dev",
    price: "₩6,900/월",
    rating: 4.8,
    usageCount: 897,
    creatorName: "송지민",
  },
  {
    id: "71",
    name: "Docker Compose 설정 생성기",
    description: "서비스 구성(앱·DB·캐시 등)을 설명하면 바로 실행 가능한 docker-compose.yml을 생성.",
    category: "개발·코딩",
    categorySlug: "dev",
    price: "₩7,900/월",
    rating: 4.6,
    usageCount: 456,
    creatorName: "임성민",
  },
  {
    id: "72",
    name: "코드 보안 취약점 진단 에이전트",
    description: "코드를 붙이면 OWASP Top 10 기준으로 SQL 인젝션·XSS 등 보안 취약점을 자동 진단.",
    category: "개발·코딩",
    categorySlug: "dev",
    badge: "HOT",
    price: "₩14,900/월",
    rating: 4.9,
    usageCount: 765,
    creatorName: "한지훈",
  },
  {
    id: "73",
    name: "데이터베이스 스키마 설계 도우미",
    description: "서비스 요구사항을 설명하면 정규화된 ERD와 SQL DDL 스크립트를 자동으로 설계.",
    category: "개발·코딩",
    categorySlug: "dev",
    price: "₩9,900/월",
    rating: 4.7,
    usageCount: 312,
    creatorName: "조예림",
  },

  // ── 디자인 추가 (design) ──────────────────────
  {
    id: "74",
    name: "유튜브 썸네일 텍스트·배색 기획기",
    description: "영상 제목과 분위기를 입력하면 클릭률 높은 썸네일 텍스트·배색·구도 방향을 제안.",
    category: "디자인",
    categorySlug: "design",
    badge: "HOT",
    price: "₩6,900/월",
    rating: 4.8,
    usageCount: 1234,
    creatorName: "이나연",
  },
  {
    id: "75",
    name: "UI 와이어프레임 설명 자동 작성기",
    description: "화면 목적과 주요 기능을 설명하면 개발·디자인팀에 전달할 와이어프레임 명세를 작성.",
    category: "디자인",
    categorySlug: "design",
    price: "₩8,900/월",
    rating: 4.6,
    usageCount: 289,
    creatorName: "김도윤",
  },
  {
    id: "76",
    name: "디자인 시스템 명세서 작성 에이전트",
    description: "컬러·타이포·컴포넌트 목록을 입력하면 팀이 공유할 디자인 시스템 가이드 문서를 완성.",
    category: "디자인",
    categorySlug: "design",
    badge: "NEW",
    price: "₩11,900/월",
    rating: 4.7,
    usageCount: 178,
    creatorName: "박하은",
  },
  {
    id: "77",
    name: "폰트 페어링 추천 에이전트",
    description: "브랜드 키워드와 서비스 성격을 입력하면 어울리는 한·영 폰트 조합을 3가지 추천.",
    category: "디자인",
    categorySlug: "design",
    price: "₩4,900/월",
    rating: 4.5,
    usageCount: 654,
    creatorName: "정예진",
  },
  {
    id: "78",
    name: "인스타 스토리 레이아웃 기획기",
    description: "콘텐츠 주제를 입력하면 인스타 스토리 15컷 구성·텍스트 배치·배색 가이드를 제안.",
    category: "디자인",
    categorySlug: "design",
    price: "₩5,900/월",
    rating: 4.6,
    usageCount: 432,
    creatorName: "최서아",
  },
  {
    id: "79",
    name: "PPT 슬라이드 구성 제안 에이전트",
    description: "발표 주제와 청중을 입력하면 스토리라인·슬라이드 구성·핵심 메시지를 자동 기획.",
    category: "디자인",
    categorySlug: "design",
    badge: "HOT",
    price: "₩7,900/월",
    rating: 4.8,
    usageCount: 987,
    creatorName: "남지우",
  },
  {
    id: "80",
    name: "온라인 배너 광고 카피+레이아웃 기획기",
    description: "제품과 프로모션 내용을 입력하면 GDN·SNS 배너용 카피와 레이아웃 방향을 제안.",
    category: "디자인",
    categorySlug: "design",
    price: "₩6,900/월",
    rating: 4.7,
    usageCount: 345,
    creatorName: "오승아",
  },
  {
    id: "81",
    name: "랜딩페이지 섹션 구성 제안 에이전트",
    description: "서비스 특장점을 입력하면 전환율을 높이는 랜딩페이지 섹션 순서와 카피 방향을 제안.",
    category: "디자인",
    categorySlug: "design",
    price: "₩9,900/월",
    rating: 4.7,
    usageCount: 412,
    creatorName: "강민서",
  },
  {
    id: "82",
    name: "제품 패키지 디자인 컨셉 기획기",
    description: "제품 유형·브랜드 톤을 입력하면 패키지 색상·형태·소재·인쇄 방향 컨셉을 10가지 제안.",
    category: "디자인",
    categorySlug: "design",
    badge: "NEW",
    price: "₩8,900/월",
    rating: 4.6,
    usageCount: 234,
    creatorName: "유민준",
  },
  {
    id: "83",
    name: "아이콘 세트 스타일 가이드 작성 에이전트",
    description: "서비스 성격과 사용 화면을 설명하면 아이콘 스타일·사이즈·선 두께 가이드를 자동 작성.",
    category: "디자인",
    categorySlug: "design",
    price: "₩5,900/월",
    rating: 4.5,
    usageCount: 189,
    creatorName: "한예슬",
  },

  // ── 데이터 분석 추가 (analytics) ──────────────
  {
    id: "84",
    name: "설문 응답 자동 집계·분석기",
    description: "구글 폼·네이버 폼 결과를 붙이면 응답 패턴·핵심 인사이트를 표와 요약으로 정리.",
    category: "데이터 분석",
    categorySlug: "analytics",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.8,
    usageCount: 876,
    creatorName: "이준영",
  },
  {
    id: "85",
    name: "KPI 주간 대시보드 리포트 작성기",
    description: "목표 KPI와 실적 숫자를 입력하면 경영진 보고용 주간 KPI 리포트를 자동으로 작성.",
    category: "데이터 분석",
    categorySlug: "analytics",
    price: "₩14,900/월",
    rating: 4.7,
    usageCount: 345,
    creatorName: "박성민",
  },
  {
    id: "86",
    name: "SNS 채널 인사이트 분석 에이전트",
    description: "인스타·유튜브·틱톡 채널 통계를 붙이면 성장 병목과 개선 콘텐츠 전략을 리포트로 제공.",
    category: "데이터 분석",
    categorySlug: "analytics",
    badge: "NEW",
    price: "₩11,900/월",
    rating: 4.6,
    usageCount: 432,
    creatorName: "최지민",
  },
  {
    id: "87",
    name: "재무제표 핵심 지표 요약 에이전트",
    description: "손익계산서·재무상태표를 붙이면 비전문가도 이해할 수 있는 재무 건전성 요약을 제공.",
    category: "데이터 분석",
    categorySlug: "analytics",
    price: "₩9,900/월",
    rating: 4.7,
    usageCount: 289,
    creatorName: "강동욱",
  },
  {
    id: "88",
    name: "고객 세그멘테이션 자동 분류기",
    description: "구매 이력·행동 데이터를 입력하면 RFM 분석 기반으로 고객군을 자동 세분화.",
    category: "데이터 분석",
    categorySlug: "analytics",
    badge: "HOT",
    price: "₩19,900/월",
    rating: 4.8,
    usageCount: 198,
    creatorName: "임재현",
  },
  {
    id: "89",
    name: "서버·앱 에러 로그 패턴 분석기",
    description: "에러 로그를 붙이면 반복 패턴을 분류하고 우선순위별 해결 방향을 리포트로 제공.",
    category: "데이터 분석",
    categorySlug: "analytics",
    price: "₩11,900/월",
    rating: 4.6,
    usageCount: 234,
    creatorName: "정현아",
  },
  {
    id: "90",
    name: "경쟁사 제품 비교 리서치 에이전트",
    description: "경쟁사명과 비교 기준을 입력하면 기능·가격·리뷰를 표 형식으로 자동 비교 분석.",
    category: "데이터 분석",
    categorySlug: "analytics",
    price: "₩14,900/월",
    rating: 4.7,
    usageCount: 312,
    creatorName: "서민호",
  },
  {
    id: "91",
    name: "마케팅 채널별 ROI 분석기",
    description: "채널별 광고비·전환수를 입력하면 ROAS·CPA·ROI를 자동 계산하고 예산 배분을 제안.",
    category: "데이터 분석",
    categorySlug: "analytics",
    badge: "NEW",
    price: "₩9,900/월",
    rating: 4.6,
    usageCount: 267,
    creatorName: "오지수",
  },
  {
    id: "92",
    name: "상품 리뷰 키워드 트렌드 분석기",
    description: "리뷰 텍스트를 대량 입력하면 자주 언급되는 키워드·감성 트렌드를 시각적으로 정리.",
    category: "데이터 분석",
    categorySlug: "analytics",
    price: "₩8,900/월",
    rating: 4.5,
    usageCount: 345,
    creatorName: "권다인",
  },

  // ── 고객 응대 추가 (support) ──────────────────
  {
    id: "93",
    name: "컴플레인 답변 초안 생성 에이전트",
    description: "불만 내용과 사실관계를 입력하면 사과·해결책·보상 제안이 담긴 답변 초안을 작성.",
    category: "고객 응대",
    categorySlug: "support",
    badge: "HOT",
    price: "₩7,900/월",
    rating: 4.8,
    usageCount: 1120,
    creatorName: "김민서",
  },
  {
    id: "94",
    name: "구매 전 문의 자동 답변 에이전트",
    description: "상품 상세페이지와 FAQ를 학습시켜 구매 전 사이즈·배송·재고 문의를 자동으로 답변.",
    category: "고객 응대",
    categorySlug: "support",
    price: "₩11,900/월",
    rating: 4.7,
    usageCount: 654,
    creatorName: "이준기",
  },
  {
    id: "95",
    name: "배송 지연 안내 메시지 생성기",
    description: "지연 원인과 예상 도착일을 입력하면 고객 이탈을 최소화하는 배송 지연 안내문을 작성.",
    category: "고객 응대",
    categorySlug: "support",
    price: "₩4,900/월",
    rating: 4.6,
    usageCount: 432,
    creatorName: "박시현",
  },
  {
    id: "96",
    name: "VIP 고객 감사 멘트 작성 에이전트",
    description: "고객 이름과 구매 이력을 입력하면 개인화된 VIP 감사 카드·이메일 문구를 자동 작성.",
    category: "고객 응대",
    categorySlug: "support",
    badge: "NEW",
    price: "₩6,900/월",
    rating: 4.7,
    usageCount: 289,
    creatorName: "최예원",
  },
  {
    id: "97",
    name: "불만 고객 에스컬레이션 판단 에이전트",
    description: "고객 메시지를 분석해 즉시 대응·담당자 이관·법무 검토 필요 여부를 자동으로 분류.",
    category: "고객 응대",
    categorySlug: "support",
    price: "₩9,900/월",
    rating: 4.6,
    usageCount: 198,
    creatorName: "강도현",
  },
  {
    id: "98",
    name: "인앱 고객 채팅 자동 응답 에이전트",
    description: "앱 내 채팅 문의를 실시간 분류하고 DB 연동 없이도 80%의 반복 질문을 자동 처리.",
    category: "고객 응대",
    categorySlug: "support",
    price: "₩19,900/월",
    rating: 4.7,
    usageCount: 345,
    creatorName: "임나연",
  },
  {
    id: "99",
    name: "콜센터 상담 스크립트 생성기",
    description: "상품·서비스 정보를 입력하면 인바운드 상담원이 바로 쓸 수 있는 응대 스크립트 완성.",
    category: "고객 응대",
    categorySlug: "support",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.8,
    usageCount: 567,
    creatorName: "정지훈",
  },
  {
    id: "100",
    name: "리뷰 감성 태깅·분류 에이전트",
    description: "수백 건의 리뷰를 붙이면 긍부정·주제별로 자동 태그를 달고 개선 우선순위를 도출.",
    category: "고객 응대",
    categorySlug: "support",
    price: "₩8,900/월",
    rating: 4.6,
    usageCount: 234,
    creatorName: "서하준",
  },
  {
    id: "101",
    name: "CS 인수인계 안내 자동화 에이전트",
    description: "이전 상담 내역을 붙이면 다음 담당자가 바로 파악할 수 있는 인수인계 메모를 자동 작성.",
    category: "고객 응대",
    categorySlug: "support",
    price: "₩5,900/월",
    rating: 4.5,
    usageCount: 178,
    creatorName: "오민지",
  },

  // ── 업무 자동화 추가 (automation) ─────────────
  {
    id: "102",
    name: "프로젝트 주간 현황 요약 에이전트",
    description: "진행 중인 태스크와 완료 목록을 입력하면 PM·임원 보고용 주간 현황 리포트 자동 작성.",
    category: "업무 자동화",
    categorySlug: "automation",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.8,
    usageCount: 1340,
    creatorName: "김재현",
  },
  {
    id: "103",
    name: "회의 안건·아젠다 자동 생성기",
    description: "회의 목적과 참석자를 입력하면 시간 배분이 포함된 아젠다와 사전 공유 메시지를 완성.",
    category: "업무 자동화",
    categorySlug: "automation",
    price: "₩5,900/월",
    rating: 4.7,
    usageCount: 876,
    creatorName: "이소연",
  },
  {
    id: "104",
    name: "업무 SOP 매뉴얼 자동 작성기",
    description: "반복 업무의 단계를 설명하면 신입도 따라할 수 있는 표준 업무 절차서를 자동 완성.",
    category: "업무 자동화",
    categorySlug: "automation",
    badge: "NEW",
    price: "₩7,900/월",
    rating: 4.6,
    usageCount: 456,
    creatorName: "박현우",
  },
  {
    id: "105",
    name: "인사 공지·공문 작성 에이전트",
    description: "공지 유형(채용·조직개편·복리후생 등)과 내용을 입력하면 격식 맞는 인사 공지문 완성.",
    category: "업무 자동화",
    categorySlug: "automation",
    price: "₩6,900/월",
    rating: 4.6,
    usageCount: 345,
    creatorName: "최도훈",
  },
  {
    id: "106",
    name: "계약서 핵심 조항 3줄 요약기",
    description: "계약서 텍스트를 붙이면 핵심 의무·기간·위약 조항을 비전문가 눈높이로 3줄 요약.",
    category: "업무 자동화",
    categorySlug: "automation",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.9,
    usageCount: 987,
    creatorName: "윤서영",
  },
  {
    id: "107",
    name: "업무 인수인계서 자동 작성기",
    description: "담당 업무 목록을 입력하면 후임자가 바로 온보딩할 수 있는 체계적인 인수인계서 완성.",
    category: "업무 자동화",
    categorySlug: "automation",
    price: "₩6,900/월",
    rating: 4.7,
    usageCount: 543,
    creatorName: "강지현",
  },
  {
    id: "108",
    name: "업계 뉴스 클리핑 일일 요약기",
    description: "업종 키워드를 등록하면 하루 기사를 모아 중요도 순으로 3줄씩 요약한 브리핑을 작성.",
    category: "업무 자동화",
    categorySlug: "automation",
    price: "₩7,900/월",
    rating: 4.5,
    usageCount: 678,
    creatorName: "임성준",
  },
  {
    id: "109",
    name: "출장·경비 보고서 자동 작성기",
    description: "영수증 내역과 출장 목적을 입력하면 회사 양식에 맞는 경비 보고서를 자동으로 완성.",
    category: "업무 자동화",
    categorySlug: "automation",
    badge: "NEW",
    price: "₩5,900/월",
    rating: 4.6,
    usageCount: 789,
    creatorName: "한민준",
  },
  {
    id: "110",
    name: "Notion 데이터베이스 자동 입력 에이전트",
    description: "이메일·문서에서 정보를 추출해 Notion 데이터베이스 속성에 맞게 자동으로 정리.",
    category: "업무 자동화",
    categorySlug: "automation",
    price: "₩8,900/월",
    rating: 4.7,
    usageCount: 432,
    creatorName: "조민아",
  },

  // ── 교육·학습 추가 (education) ────────────────
  {
    id: "111",
    name: "주제별 영어 단어장 자동 생성기",
    description: "학습 주제와 수준을 입력하면 예문·발음 기호·동의어가 포함된 맞춤 단어장을 생성.",
    category: "교육·학습",
    categorySlug: "education",
    badge: "HOT",
    price: "₩4,900/월",
    rating: 4.8,
    usageCount: 2340,
    creatorName: "이지민",
  },
  {
    id: "112",
    name: "수학 서술형 문제 단계별 풀이 도우미",
    description: "풀이가 막힌 수학 문제를 붙이면 단계별 풀이 과정과 핵심 개념을 설명해줍니다.",
    category: "교육·학습",
    categorySlug: "education",
    price: "₩6,900/월",
    rating: 4.7,
    usageCount: 1567,
    creatorName: "박준혁",
  },
  {
    id: "113",
    name: "한국사 시험 핵심 개념 요약 에이전트",
    description: "시험 범위와 시대를 입력하면 수능·한국사능력검정 대비 핵심 개념을 표로 정리.",
    category: "교육·학습",
    categorySlug: "education",
    badge: "NEW",
    price: "₩5,900/월",
    rating: 4.6,
    usageCount: 1234,
    creatorName: "최수빈",
  },
  {
    id: "114",
    name: "개인 맞춤 학습 플랜 생성기",
    description: "목표 시험·현재 수준·학습 가능 시간을 입력하면 주차별 맞춤 학습 계획을 자동 생성.",
    category: "교육·학습",
    categorySlug: "education",
    badge: "HOT",
    price: "₩7,900/월",
    rating: 4.8,
    usageCount: 1890,
    creatorName: "강민정",
  },
  {
    id: "115",
    name: "영어 작문 교정·피드백 에이전트",
    description: "영어 글쓰기 초안을 붙이면 문법·표현·자연스러움을 교정하고 개선 이유를 설명.",
    category: "교육·학습",
    categorySlug: "education",
    price: "₩6,900/월",
    rating: 4.7,
    usageCount: 1456,
    creatorName: "윤하은",
  },
  {
    id: "116",
    name: "IT 기술 면접 질문 생성 에이전트",
    description: "지원 직무와 기술 스택을 입력하면 실제 면접에서 나올 기술 질문·예상 답변을 생성.",
    category: "교육·학습",
    categorySlug: "education",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.9,
    usageCount: 2100,
    creatorName: "임태현",
  },
  {
    id: "117",
    name: "발표·스피치 원고 코칭 에이전트",
    description: "발표 주제와 청중을 입력하면 3분·5분·10분 맞춤 스피치 원고와 타이밍 팁을 제공.",
    category: "교육·학습",
    categorySlug: "education",
    price: "₩7,900/월",
    rating: 4.6,
    usageCount: 789,
    creatorName: "한지우",
  },
  {
    id: "118",
    name: "독해 지문 요약·OX 퀴즈 생성기",
    description: "지문을 붙이면 핵심 요약과 이해도를 확인하는 OX·4지선다 퀴즈를 자동으로 생성.",
    category: "교육·학습",
    categorySlug: "education",
    price: "₩4,900/월",
    rating: 4.5,
    usageCount: 987,
    creatorName: "정다연",
  },
  {
    id: "119",
    name: "토플·아이엘츠 에세이 첨삭기",
    description: "영어 에세이 초안을 붙이면 토플·아이엘츠 채점 기준으로 점수 예상과 구체적 개선 제안.",
    category: "교육·학습",
    categorySlug: "education",
    badge: "NEW",
    price: "₩9,900/월",
    rating: 4.8,
    usageCount: 654,
    creatorName: "서준호",
  },
  {
    id: "120",
    name: "SQLD·정보처리기사 기출 해설기",
    description: "기출 문제를 붙이면 정답 이유와 오답 함정, 관련 개념까지 체계적으로 해설.",
    category: "교육·학습",
    categorySlug: "education",
    price: "₩6,900/월",
    rating: 4.7,
    usageCount: 876,
    creatorName: "노예진",
  },
];

// ────────────────────────────────────────────
// Featured agents (메인 홈 — 최초 6개)
// ────────────────────────────────────────────

export const featuredAgents: Agent[] = allAgents.filter((a) =>
  ["1", "2", "3", "4", "5", "6"].includes(a.id)
);

// ────────────────────────────────────────────
// Weekly Ranking
// ────────────────────────────────────────────

export const weeklyRanking: RankingItem[] = [
  { rank: 1, name: "GPT 이메일 자동 답장", category: "자동화", weeklyGrowth: 312, price: "₩9,900/월" },
  { rank: 2, name: "유튜브 스크립트 작성기", category: "글쓰기", weeklyGrowth: 287, price: "₩12,900/월" },
  { rank: 3, name: "인스타그램 자동 게시 에이전트", category: "마케팅", weeklyGrowth: 241, price: "₩9,900/월" },
  { rank: 4, name: "고객 리뷰 감성 분석기", category: "분석", weeklyGrowth: 198, price: "₩11,900/월" },
  { rank: 5, name: "네이버 스마트스토어 상품 설명 생성기", category: "마케팅", weeklyGrowth: 176, price: "₩7,900/월" },
  { rank: 6, name: "카카오 채널 자동 응답봇", category: "고객응대", weeklyGrowth: 153, price: "₩19,900/월" },
  { rank: 7, name: "주간 업무 보고서 자동화", category: "자동화", weeklyGrowth: 134, price: "₩9,900/월" },
  { rank: 8, name: "React 컴포넌트 생성기", category: "개발", weeklyGrowth: 121, price: "₩14,900/월" },
  { rank: 9, name: "AI 디자인 프롬프트 메이커", category: "디자인", weeklyGrowth: 108, price: "₩6,900/월" },
  { rank: 10, name: "영어 이메일 번역·작성 에이전트", category: "글쓰기", weeklyGrowth: 97, price: "₩7,900/월" },
];

// ────────────────────────────────────────────
// Testimonials
// ────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "인스타 게시물 매일 올리는 게 너무 힘들었는데, AgentHub 에이전트 하나로 1주일치 콘텐츠를 30분 만에 완성했어요. 팔로워도 덩달아 늘었고요.",
    name: "김수진",
    role: "스몰브랜드 대표 · 서울",
    initial: "김",
    type: "buyer",
    color: "#7F77DD",
  },
  {
    id: "2",
    quote:
      "코딩 하나도 몰라도 에이전트를 쓸 수 있다는 게 신기했어요. 고객 문의 자동 응대 에이전트 하나 켜놨더니 야근이 없어졌습니다.",
    name: "박태영",
    role: "온라인 쇼핑몰 운영자 · 부산",
    initial: "박",
    type: "buyer",
    color: "#1D9E75",
  },
  {
    id: "3",
    quote:
      "에이전트 하나 올렸는데 한 달 만에 구독자 200명 넘었어요. 월 수익이 생각보다 훨씬 크게 나와서 지금은 풀타임 크리에이터로 전향했습니다.",
    name: "이준혁",
    role: "AI 에이전트 크리에이터 · 대전",
    initial: "이",
    type: "seller",
    color: "#EF9F27",
  },
  {
    id: "4",
    quote:
      "AgentHub 콘테스트에서 수상하면서 프리미엄 노출도 받고 투자자 미팅 기회도 생겼어요. 부업으로 시작했다가 사업으로 이어졌습니다.",
    name: "최유나",
    role: "Build Challenge 2026 수상자 · 인천",
    initial: "최",
    type: "winner",
    color: "#534AB7",
  },
];

// ────────────────────────────────────────────
// Helper functions
// ────────────────────────────────────────────

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAgentsByCategory(slug: string): Agent[] {
  return allAgents.filter((a) => a.categorySlug === slug);
}

export function parsePriceKRW(price: string): number {
  return parseInt(price.replace(/[^0-9]/g, ""), 10);
}

// ────────────────────────────────────────────
// Creator page content
// ────────────────────────────────────────────

export interface CreatorBenefit {
  icon: string;
  title: string;
  text: string;
}

export interface CreatorStep {
  no: number;
  icon: string;
  title: string;
  text: string;
}

export interface CreatorStory {
  name: string;
  role: string;
  income: string;
  text: string;
  initial: string;
  color: string;
}

export interface CreatorFaqItem {
  q: string;
  a: string;
}

export const creatorContent = {
  benefits: [
    {
      icon: "TrendingUp",
      title: "패시브 수익 창출",
      text: "한 번 만든 에이전트가 자는 동안에도 구독 수익을 만들어줘요. 별도 운영 없이 자동으로 정산됩니다.",
    },
    {
      icon: "Zap",
      title: "코딩 없이 등록 가능",
      text: "프롬프트 작성 수준이면 충분합니다. 개발 경험이 없어도 누구나 에이전트를 등록할 수 있어요.",
    },
    {
      icon: "Megaphone",
      title: "AgentHub 마케팅 지원",
      text: "품질 심사를 통과한 에이전트는 메인 추천·뉴스레터·이메일 캠페인에 우선 노출됩니다.",
    },
    {
      icon: "Users",
      title: "8,000명+ 사용자 접근",
      text: "이미 활성화된 마켓에 바로 올릴 수 있어요. 직접 마케팅 없이도 즉시 노출이 시작됩니다.",
    },
  ] satisfies CreatorBenefit[],

  steps: [
    {
      no: 1,
      icon: "FileText",
      title: "등록 신청",
      text: "이름·이메일·에이전트 종류를 입력해 신청서를 제출합니다. (약 5분)",
    },
    {
      no: 2,
      icon: "Bot",
      title: "에이전트 등록",
      text: "승인 후 대시보드에서 프롬프트·설명·카테고리·가격을 설정해 업로드합니다.",
    },
    {
      no: 3,
      icon: "ShieldCheck",
      title: "품질 심사",
      text: "AgentHub 팀이 영업일 기준 2~3일 내 에이전트 품질·안정성을 검수합니다.",
    },
    {
      no: 4,
      icon: "CreditCard",
      title: "판매 시작 · 월 정산",
      text: "심사 통과 즉시 마켓에 노출됩니다. 매월 25일 판매액의 70%를 정산해드려요.",
    },
  ] satisfies CreatorStep[],

  stories: [
    {
      name: "이준혁",
      role: "마케팅 에이전트 크리에이터",
      income: "₩720,000/월",
      text: "퇴근 후 주말에 만든 인스타 게시물 에이전트가 입소문을 타더니 구독자가 72명 넘었어요. 직장 다니면서 월 70만 원이 들어오는 게 아직도 신기합니다.",
      initial: "이",
      color: "#7F77DD",
    },
    {
      name: "서지원",
      role: "개발·코딩 에이전트 크리에이터",
      income: "₩1,340,000/월",
      text: "GitHub PR 리뷰 에이전트 하나로 시작했는데 지금은 세 개 에이전트를 운영 중이에요. 총 구독자 합산 130명 넘어서 月 130만 원 정도 들어옵니다.",
      initial: "서",
      color: "#1D9E75",
    },
    {
      name: "박나은",
      role: "글쓰기·콘텐츠 에이전트 크리에이터",
      income: "₩450,000/월",
      text: "블로그 대행 일을 하다 만든 SEO 라이터 에이전트예요. 처음엔 제 업무 효율용이었는데 AgentHub에 올렸더니 한 달 만에 구독자 45명이 생겼어요.",
      initial: "박",
      color: "#EF9F27",
    },
  ] satisfies CreatorStory[],

  faqs: [
    {
      q: "코딩을 전혀 몰라도 크리에이터가 될 수 있나요?",
      a: "네, 가능합니다. AgentHub 에이전트는 프롬프트(지시문) 작성 수준으로 만들 수 있어요. 코딩 지식이 전혀 없어도 신청·등록·운영까지 모두 가능합니다.",
    },
    {
      q: "수익은 어떻게, 언제 정산되나요?",
      a: "매월 25일에 전월 판매액의 70%를 등록하신 계좌로 정산해드려요. 최소 정산 금액은 ₩10,000이며, 미달 시 다음 달로 이월됩니다.",
    },
    {
      q: "에이전트 등록 수수료나 초기 비용이 있나요?",
      a: "없습니다. 등록·심사·마켓 노출 모두 무료입니다. 판매가 발생했을 때만 수수료(30%)가 차감되는 구조라 리스크 없이 시작하실 수 있어요.",
    },
    {
      q: "품질 심사에서 탈락하면 어떻게 되나요?",
      a: "탈락 시 구체적인 개선 사항을 안내드려요. 개선 후 재신청은 횟수 제한 없이 가능합니다. 심사 기준(품질·안전성·중복 여부)은 크리에이터 가이드에서 확인하실 수 있어요.",
    },
  ] satisfies CreatorFaqItem[],
};

// ────────────────────────────────────────────
// Contest page content — Build Challenge 2026
// ────────────────────────────────────────────

export interface ContestPrize {
  rank: string;
  label: string;
  amount: string;
  perks: string[];
  highlight?: boolean;
}

export interface ContestTimelineItem {
  date: string;
  label: string;
  text: string;
  done?: boolean;
}

export interface ContestCriterion {
  title: string;
  weight: number;
  text: string;
}

export interface ContestFaqItem {
  q: string;
  a: string;
}

export const contestContent = {
  title: "Build Challenge 2026",
  theme: "당신의 첫 AI 에이전트를 만들어보세요",
  period: "2026.07.01 ~ 2026.08.31",
  deadline: "2026.08.31",
  totalPrize: "₩10,000,000",

  prizes: [
    {
      rank: "🥇",
      label: "대상",
      amount: "₩5,000,000",
      perks: ["마켓 메인 6개월 우선 노출", "정산 비율 75% 우대", "AgentHub 공식 파트너 뱃지"],
      highlight: true,
    },
    {
      rank: "🥈",
      label: "우수상",
      amount: "₩2,000,000",
      perks: ["마켓 Featured 3개월 노출", "정산 비율 72% 우대", "AgentHub 공식 인증서"],
      highlight: false,
    },
    {
      rank: "🥉",
      label: "인기상",
      amount: "₩1,000,000",
      perks: ["마켓 추천 1개월 노출", "AgentHub 공식 굿즈", "뉴스레터 크리에이터 소개"],
      highlight: false,
    },
  ] satisfies ContestPrize[],

  timeline: [
    {
      date: "2026.07.01",
      label: "접수 시작",
      text: "참가 신청서 제출 가능. AgentHub 대시보드에서 에이전트 등록 시작.",
      done: true,
    },
    {
      date: "2026.08.31",
      label: "접수 마감",
      text: "참가 신청 및 에이전트 최종 제출 마감. 이후 수정 불가.",
      done: false,
    },
    {
      date: "2026.09.01 ~ 09.14",
      label: "심사 진행",
      text: "AgentHub 심사위원단이 완성도·실용성·창의성·사용자 평가 기준으로 심사.",
      done: false,
    },
    {
      date: "2026.09.20",
      label: "수상 발표",
      text: "공식 홈페이지·이메일·SNS를 통해 수상자 발표. 시상금은 발표 후 5영업일 내 지급.",
      done: false,
    },
  ] satisfies ContestTimelineItem[],

  criteria: [
    {
      title: "완성도",
      weight: 30,
      text: "에이전트가 설명한 기능을 안정적으로 실행하며 오류 없이 동작하는가.",
    },
    {
      title: "실용성",
      weight: 30,
      text: "실제 업무나 일상에서 바로 활용할 수 있는 명확한 사용 사례가 있는가.",
    },
    {
      title: "창의성",
      weight: 25,
      text: "기존 에이전트와 차별화된 독창적인 아이디어나 접근 방식을 담고 있는가.",
    },
    {
      title: "사용자 평가",
      weight: 15,
      text: "베타 테스터 피드백 점수와 초기 구독자 반응을 종합해 반영.",
    },
  ] satisfies ContestCriterion[],

  winnerAgentIds: ["37", "12", "22"],

  faqs: [
    {
      q: "참가 자격에 제한이 있나요?",
      a: "없습니다. 나이·경력·코딩 여부 상관없이 누구나 참가할 수 있어요. 개인·팀(최대 3인) 모두 가능합니다.",
    },
    {
      q: "에이전트는 어떻게 제출하나요?",
      a: "신청서 제출 후 승인 이메일을 받으시면, AgentHub 크리에이터 대시보드에서 에이전트를 등록·제출할 수 있어요. 마감일 전까지 수정이 가능합니다.",
    },
    {
      q: "이미 마켓에 출시된 에이전트도 참가 가능한가요?",
      a: "네, 기출시 에이전트도 참가 신청 가능합니다. 단, 2026년 7월 1일 이후에 주요 기능 업데이트가 있어야 참가 인정됩니다.",
    },
    {
      q: "수상하지 못해도 제출한 에이전트는 마켓에 남나요?",
      a: "물론입니다. 품질 심사를 통과한 에이전트는 수상 여부와 무관하게 AgentHub 마켓에 계속 노출되고 구독 수익을 받을 수 있어요.",
    },
  ] satisfies ContestFaqItem[],
};
