import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";
import { categories, siteConfig } from "@/lib/site";

const featuredArticles = articles.slice(0, 3);

const marketTips = [
  "투자 전 본인의 목표·기간·위험 감내 수준을 먼저 정하세요.",
  "한 종목에 전 재산을 몰지 말고 분산 투자를 고려하세요.",
  "뉴스 헤드라인보다 기업 실적과 사업 구조를 함께 확인하세요.",
  "손실 구간에서 감정적 매매를 피하고 미리 정한 규칙을 지키세요.",
];

export default function Home() {
  return (
    <div className="flex-1">
      {/* 히어로 */}
      <section className="border-b border-slate-200 bg-white/70">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Stock Investment Guide
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-bold leading-tight text-slate-900">
            주식 투자, 기초부터 차근차근
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/articles"
              className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-700"
            >
              아티클 보기
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              사이트 소개
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-10 lg:grid-cols-[1fr_280px]">
        <div className="space-y-10">
          {/* 카테고리 */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900">주제별 가이드</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <h3 className="font-semibold text-slate-900">{category.label}</h3>
                  <p className="mt-2 text-sm text-slate-600">{category.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 추천 글 */}
          <section>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-slate-900">추천 아티클</h2>
              <Link href="/articles" className="text-sm font-medium text-emerald-700 hover:underline">
                전체 보기
              </Link>
            </div>
            <div className="mt-5 space-y-4">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </section>

          {/* 투자 체크리스트 */}
          <section className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
            <h2 className="text-xl font-bold text-slate-900">초보 투자자 체크리스트</h2>
            <ul className="mt-4 space-y-3">
              {marketTips.map((tip) => (
                <li key={tip} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                  <span className="mt-1 text-emerald-600" aria-hidden>
                    ✓
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* 사이드바 — AdSense 슬롯 자리 */}
        <aside className="space-y-6">
          <AdSlot label="AdSense 광고 영역 (승인 후 연결)" />
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold text-slate-900">이 사이트는</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              주식 투자 입문자를 위한 기본 개념, 시장 지표, ETF·배당 정보를
              정리하는 콘텐츠 허브입니다. 실제 매매 판단은 본인의 책임 하에
              이루어져야 합니다.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
