import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentHub — 내 업무에 딱 맞는 AI 에이전트를, 지금 바로.",
  description:
    "AgentHub는 AI 에이전트 크리에이터와 업무 자동화가 필요한 사용자를 연결하는 국내 최초 AI 에이전트 마켓플레이스입니다.",
  keywords: ["AI 에이전트", "마켓플레이스", "업무 자동화", "AgentHub", "인공지능"],
  openGraph: {
    title: "AgentHub — AI 에이전트 마켓플레이스",
    description: "내 업무에 딱 맞는 AI 에이전트를, 지금 바로.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
