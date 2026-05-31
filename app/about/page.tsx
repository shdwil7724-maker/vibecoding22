import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "사이트 소개",
  description: `${siteConfig.name}의 목적과 운영 방침을 소개합니다.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900">사이트 소개</h1>

      <div className="prose-content mt-8 space-y-4">
        <p>
          {siteConfig.name}는 주식 투자를 처음 접하는 분들이 기본 개념부터
          차근차근 이해할 수 있도록 정보를 정리하는 콘텐츠 사이트입니다.
        </p>
        <p>
          PER·PBR 같은 가치 지표, ETF와 개별주식의 차이, 배당주와 성장주의
          특징, 장기 투자와 단기 매매의 마음가짐 등 실무에서 자주 궁금해하는
          주제를 중심으로 글을 제공합니다.
        </p>
        <p>
          운영자 {siteConfig.author}는 투자 교육 콘텐츠를 통해 독자들이
          스스로 판단할 수 있는 기반을 만드는 것을 목표로 합니다. 본 사이트의
          글은 참고 자료이며, 특정 금융상품이나 종목을 추천하지 않습니다.
        </p>
        <p>
          앞으로 시장 이슈 해설, ETF 비교, 배당 전략, 투자 심리 등 주식과
          관련된 다양한 주제의 콘텐츠를 꾸준히 업데이트할 예정입니다.
        </p>
      </div>
    </div>
  );
}
