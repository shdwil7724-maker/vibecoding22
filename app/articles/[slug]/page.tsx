import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import { articles, getArticleBySlug } from "@/lib/articles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "글을 찾을 수 없음" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-5xl px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div>
          <Link
            href="/articles"
            className="text-sm font-medium text-emerald-700 hover:underline"
          >
            ← 아티클 목록
          </Link>

          <header className="mt-6 border-b border-slate-200 pb-6">
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <span className="rounded-full bg-emerald-50 px-2 py-1 font-medium text-emerald-700">
                {article.categoryLabel}
              </span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime} 읽기</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900">
              {article.title}
            </h1>
            <p className="mt-4 text-lg text-slate-600">{article.excerpt}</p>
          </header>

          <div className="prose-content mt-8">
            {article.content.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
            본 글은 일반적인 투자 정보 제공을 목적으로 하며, 특정 종목의
            매수·매도를 권유하지 않습니다. 투자 결정과 손익에 대한 책임은
            전적으로 투자자 본인에게 있습니다.
          </div>
        </div>

        <aside className="space-y-6">
          <AdSlot />
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="font-semibold text-slate-900">다른 글 보기</h2>
            <ul className="mt-4 space-y-3">
              {articles
                .filter((item) => item.slug !== article.slug)
                .slice(0, 3)
                .map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/articles/${item.slug}`}
                      className="text-sm text-slate-700 hover:text-emerald-700"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
