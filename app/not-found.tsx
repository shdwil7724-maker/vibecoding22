import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-slate-900">404</h1>
      <p className="mt-4 text-slate-600">요청하신 페이지를 찾을 수 없습니다.</p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-700"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
