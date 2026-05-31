import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${siteConfig.name}의 개인정보 처리 및 쿠키·광고 관련 안내`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900">개인정보처리방침</h1>
      <p className="mt-3 text-sm text-slate-500">최종 수정일: 2026년 5월 27일</p>

      <div className="prose-content mt-8 space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-slate-900">1. 개요</h2>
          <p>
            {siteConfig.name}(이하 &quot;사이트&quot;)는 이용자의 개인정보를
            중요하게 생각하며, 관련 법령을 준수합니다. 본 방침은 사이트 이용
            시 수집·이용되는 정보와 그 처리 방법을 설명합니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">2. 수집하는 정보</h2>
          <p>
            사이트는 기본적으로 회원가입 없이 콘텐츠를 열람할 수 있습니다.
            문의 시 이메일 등 이용자가 직접 제공하는 정보, Google Analytics
            또는 Google AdSense 등 제3자 서비스를 통해 수집될 수 있는 접속
            로그·쿠키·기기 정보·IP 주소 등이 포함될 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">3. 정보 이용 목적</h2>
          <p>
            수집된 정보는 사이트 운영, 통계 분석, 광고 게재, 문의 응대, 서비스
            품질 개선 목적으로 이용될 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">4. 쿠키 및 광고</h2>
          <p>
            Google AdSense 등 광고 파트너는 쿠키를 사용해 이용자의 관심사에
            기반한 광고를 제공할 수 있습니다. Google의 광고 쿠키 사용에 대한
            자세한 내용은 Google 광고 정책 및 개인정보처리방침을 참고하시기
            바랍니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-slate-900">5. 문의</h2>
          <p>
            개인정보 관련 문의는{" "}
            <Link href="/contact" className="text-emerald-700 hover:underline">
              문의하기
            </Link>{" "}
            페이지 또는 {siteConfig.email}으로 연락해 주세요.
          </p>
        </section>
      </div>
    </div>
  );
}
