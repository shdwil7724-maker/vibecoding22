import type { MetadataRoute } from "next";
import { absoluteUrl, getSitemapEntries } from "@/lib/feeds";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries().map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
