import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

export type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export type SitemapEntry = {
  path: string;
  lastModified: Date;
  changeFrequency: ChangeFrequency;
  priority: number;
};

/** 배포 URL 기준 절대 경로 생성 */
export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

/** XML 특수문자 이스케이프 */
function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** RFC 822 형식 날짜 (RSS pubDate용) */
function toRssDate(dateString: string): string {
  return new Date(`${dateString}T09:00:00+09:00`).toUTCString();
}

const staticPages: Omit<SitemapEntry, "lastModified">[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/articles", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
];

/** sitemap.xml에 포함할 전체 URL 목록 */
export function getSitemapEntries(): SitemapEntry[] {
  const now = new Date();

  const pageEntries: SitemapEntry[] = staticPages.map((page) => ({
    ...page,
    lastModified: now,
  }));

  const articleEntries: SitemapEntry[] = articles.map((article) => ({
    path: `/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pageEntries, ...articleEntries];
}

/** RSS 2.0 XML 생성 */
export function generateRssXml(): string {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const latestDate =
    sortedArticles[0]?.date ?? new Date().toISOString().slice(0, 10);

  const items = sortedArticles
    .map(
      (article) => `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${escapeXml(absoluteUrl(`/articles/${article.slug}`))}</link>
      <guid isPermaLink="true">${escapeXml(absoluteUrl(`/articles/${article.slug}`))}</guid>
      <pubDate>${toRssDate(article.date)}</pubDate>
      <description>${escapeXml(article.excerpt)}</description>
      <category>${escapeXml(article.categoryLabel)}</category>
    </item>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${escapeXml(siteConfig.url)}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>ko</language>
    <lastBuildDate>${toRssDate(latestDate)}</lastBuildDate>
    <atom:link href="${escapeXml(absoluteUrl("/rss.xml"))}" rel="self" type="application/rss+xml" />
    <managingEditor>${escapeXml(siteConfig.email)} (${escapeXml(siteConfig.author)})</managingEditor>
    <webMaster>${escapeXml(siteConfig.email)} (${escapeXml(siteConfig.author)})</webMaster>${items}
  </channel>
</rss>`;
}
