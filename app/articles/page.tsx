import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "아티클",
  description: "주식 투자 기초, 시장 분석, ETF, 배당 관련 아티클 모음",
};

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-slate-900">아티클</h1>
        <p className="mt-3 text-slate-600">
          {siteConfig.name}에서 제공하는 주식·투자 관련 글 목록입니다.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px]">
        <div className="space-y-4">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <aside>
          <AdSlot />
        </aside>
      </div>
    </div>
  );
}
