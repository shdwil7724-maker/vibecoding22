import Link from "next/link";
import type { Article } from "@/lib/articles";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md">
      <div className="mb-3 flex items-center gap-2 text-xs text-slate-500">
        <span className="rounded-full bg-emerald-50 px-2 py-1 font-medium text-emerald-700">
          {article.categoryLabel}
        </span>
        <span>{article.date}</span>
        <span>·</span>
        <span>{article.readTime} 읽기</span>
      </div>
      <h2 className="text-xl font-bold text-slate-900">
        <Link href={`/articles/${article.slug}`} className="hover:text-emerald-700">
          {article.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {article.excerpt}
      </p>
      <Link
        href={`/articles/${article.slug}`}
        className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:underline"
      >
        자세히 읽기 →
      </Link>
    </article>
  );
}
