import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "문의하기",
  description: `${siteConfig.name}에 대한 문의 및 제휴 안내`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900">문의하기</h1>
      <p className="mt-3 text-slate-600">
        콘텐츠 제안, 오류 수정, 광고·제휴 문의는 아래 이메일로 연락해 주세요.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-slate-900">사이트명</dt>
            <dd className="mt-1 text-slate-600">{siteConfig.name}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">운영자</dt>
            <dd className="mt-1 text-slate-600">{siteConfig.author}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900">이메일</dt>
            <dd className="mt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-emerald-700 hover:underline"
              >
                {siteConfig.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <p className="prose-content mt-6 text-sm">
        영업일 기준 3~5일 내 답변을 드리도록 노력합니다. 투자 종목 추천이나
        개인 자문은 제공하지 않습니다.
      </p>
    </div>
  );
}
