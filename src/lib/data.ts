export interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  badge?: "NEW" | "HOT";
  price: string;
  rating: number;
  usageCount: number;
  creatorName: string;
}

export interface RankingItem {
  rank: number;
  name: string;
  category: string;
  weeklyGrowth: number;
  price: string;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  agentCount: number;
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

export const featuredAgents: Agent[] = [
  {
    id: "1",
    name: "인스타그램 자동 게시 에이전트",
    description: "하루 3~5개 인스타 게시물을 자동으로 기획·작성·예약까지.",
    category: "마케팅",
    badge: "HOT",
    price: "₩9,900/월",
    rating: 4.9,
    usageCount: 1240,
    creatorName: "김민준",
  },
  {
    id: "2",
    name: "AI 블로그 SEO 라이터",
    description: "키워드 하나로 네이버·구글 상위 노출 최적화 블로그 글 완성.",
    category: "글쓰기",
    badge: "HOT",
    price: "₩12,900/월",
    rating: 4.8,
    usageCount: 892,
    creatorName: "이수진",
  },
  {
    id: "3",
    name: "카카오 채널 자동 응답봇",
    description: "카카오 비즈니스 채널 고객 문의를 24시간 자동으로 응대.",
    category: "고객응대",
    badge: "NEW",
    price: "₩19,900/월",
    rating: 4.7,
    usageCount: 654,
    creatorName: "박정훈",
  },
  {
    id: "4",
    name: "데이터 분석 리포트 자동화",
    description: "엑셀·구글시트 데이터를 업로드하면 인사이트 리포트 자동 생성.",
    category: "분석",
    badge: "NEW",
    price: "₩14,900/월",
    rating: 4.8,
    usageCount: 437,
    creatorName: "최은혜",
  },
  {
    id: "5",
    name: "GitHub 코드 리뷰 도우미",
    description: "PR 링크만 넣으면 버그·보안·성능 이슈를 자동으로 리뷰해줘요.",
    category: "개발",
    price: "₩9,900/월",
    rating: 4.9,
    usageCount: 1089,
    creatorName: "강동현",
  },
  {
    id: "6",
    name: "회의록 자동 요약 에이전트",
    description: "Zoom·Teams·Google Meet 녹음 파일을 요약·액션아이템 정리.",
    category: "자동화",
    price: "₩7,900/월",
    rating: 4.6,
    usageCount: 2310,
    creatorName: "윤서연",
  },
];

export const weeklyRanking: RankingItem[] = [
  { rank: 1, name: "GPT 이메일 자동 답장", category: "자동화", weeklyGrowth: 312, price: "₩9,900/월" },
  { rank: 2, name: "유튜브 스크립트 작성기", category: "글쓰기", weeklyGrowth: 287, price: "₩12,900/월" },
  { rank: 3, name: "인스타그램 자동 게시 에이전트", category: "마케팅", weeklyGrowth: 241, price: "₩9,900/월" },
  { rank: 4, name: "고객 리뷰 감성 분석기", category: "분석", weeklyGrowth: 198, price: "₩11,900/월" },
  { rank: 5, name: "네이버 스마트스토어 상품 설명 생성", category: "마케팅", weeklyGrowth: 176, price: "₩7,900/월" },
  { rank: 6, name: "카카오 채널 자동 응답봇", category: "고객응대", weeklyGrowth: 153, price: "₩19,900/월" },
  { rank: 7, name: "주간 업무 보고서 자동화", category: "자동화", weeklyGrowth: 134, price: "₩9,900/월" },
  { rank: 8, name: "React 컴포넌트 생성기", category: "개발", weeklyGrowth: 121, price: "₩14,900/월" },
  { rank: 9, name: "AI 디자인 프롬프트 메이커", category: "디자인", weeklyGrowth: 108, price: "₩6,900/월" },
  { rank: 10, name: "영어 이메일 번역·작성 에이전트", category: "글쓰기", weeklyGrowth: 97, price: "₩7,900/월" },
];

export const categories: Category[] = [
  { id: "marketing", name: "마케팅", iconName: "Megaphone", agentCount: 234 },
  { id: "writing", name: "글쓰기·콘텐츠", iconName: "PenTool", agentCount: 189 },
  { id: "dev", name: "개발·코딩", iconName: "Code2", agentCount: 156 },
  { id: "design", name: "디자인", iconName: "Palette", agentCount: 112 },
  { id: "analytics", name: "데이터 분석", iconName: "BarChart2", agentCount: 143 },
  { id: "support", name: "고객 응대", iconName: "MessageSquare", agentCount: 98 },
  { id: "automation", name: "업무 자동화", iconName: "Zap", agentCount: 201 },
  { id: "education", name: "교육·학습", iconName: "BookOpen", agentCount: 87 },
];

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
