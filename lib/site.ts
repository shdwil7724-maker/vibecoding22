/** 배포 환경에 맞는 사이트 절대 URL (sitemap, RSS, robots 등) */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.GITHUB_PAGES === "true") {
    const repoName =
      process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "vibecoding22";
    return `https://shdwil7724-maker.github.io/${repoName}`;
  }

  return "https://vibecoding22.vercel.app";
}

export const siteConfig = {
  name: "스톡 인사이트",
  description:
    "주식 투자 초보자를 위한 기초 지식, 시장 분석, ETF·배당 정보를 쉽게 정리한 투자 가이드 블로그입니다.",
  url: resolveSiteUrl(),
  author: "정수환",
  email: "hello@example.com",
  googleAnalyticsId: "G-C4ENSZKLY1",
};

export const navItems = [
  { label: "홈", href: "/" },
  { label: "아티클", href: "/articles" },
  { label: "소개", href: "/about" },
  { label: "문의", href: "/contact" },
];

export const categories = [
  { id: "basics", label: "투자 기초", description: "처음 시작하는 분을 위한 기본 개념" },
  { id: "analysis", label: "시장 분석", description: "지표와 시장 흐름 이해하기" },
  { id: "etf", label: "ETF", description: "분산 투자와 상품 선택" },
  { id: "dividend", label: "배당", description: "배당주와 현금 흐름" },
];
