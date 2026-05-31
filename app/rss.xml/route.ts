import { generateRssXml } from "@/lib/feeds";

export const dynamic = "force-static";

export function GET() {
  const body = generateRssXml();

  return new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
