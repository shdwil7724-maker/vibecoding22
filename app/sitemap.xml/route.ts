import { generateSitemapXml } from "@/lib/feeds";

export const dynamic = "force-static";

export function GET() {
  const body = generateSitemapXml();

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
