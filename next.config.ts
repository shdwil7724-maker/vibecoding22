import type { NextConfig } from "next";

// GitHub Pages CI에서만 정적 export + basePath 적용 (Vercel은 기본 Next.js 빌드)
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "vibecoding22";
const basePath = isGitHubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const } : {}),
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: isGitHubPages,
  },
};

export default nextConfig;
