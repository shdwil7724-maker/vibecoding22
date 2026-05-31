import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white/80">
      <div className="mx-auto max-w-5xl space-y-4 px-6 py-8 text-sm text-slate-600">
        <p className="leading-relaxed">
          {siteConfig.name}는 투자 교육 목적의 정보를 제공합니다. 게시된 내용은
          투자 권유가 아니며, 모든 투자 결정과 그에 따른 손익은 투자자 본인에게
          있습니다.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="hover:text-emerald-700">
            사이트 소개
          </Link>
          <Link href="/privacy" className="hover:text-emerald-700">
            개인정보처리방침
          </Link>
          <Link href="/contact" className="hover:text-emerald-700">
            문의하기
          </Link>
          <a
            href="/rss.xml"
            className="hover:text-emerald-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            RSS
          </a>
        </div>
        <p className="text-slate-500">
          © {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
