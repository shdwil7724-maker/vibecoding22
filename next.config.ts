import type { NextConfig } from "next";

// GitHub Pages(프로젝트 페이지) 배포 시 저장소 이름을 basePath로 사용
const repoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "vibecoding22";
const basePath =
  process.env.GITHUB_PAGES === "true" ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
