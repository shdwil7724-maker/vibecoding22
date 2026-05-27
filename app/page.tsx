const skills = ["TypeScript", "React", "Next.js", "Git"];

const links = [
  { label: "GitHub", href: "https://github.com/shdwil7724-maker/vibecoding22" },
  { label: "이메일", href: "mailto:hello@example.com" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <main className="w-full max-w-lg space-y-10 rounded-3xl border border-white/60 bg-white/50 p-8 shadow-lg shadow-purple-200/40 backdrop-blur-sm">
        {/* 프로필 */}
        <section className="space-y-4 text-center">
          <div
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#c4b5fd] via-[#f9a8d4] to-[#a7f3d0] text-3xl font-bold text-white shadow-md shadow-pink-200/50"
            aria-hidden
          >
            수환
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#5b4b6f]">
              정수환
            </h1>
            <p className="mt-2 text-lg text-[#a78bfa]">
              개발을 배우고 있는 주니어 개발자
            </p>
          </div>
          <p className="text-base leading-relaxed text-[#7c7390]">
            사용자 경험을 고민하며 웹을 만듭니다. GitHub Pages 배포 테스트용
            자기소개 사이트입니다.
          </p>
        </section>

        {/* 관심 분야 */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#9d8fb8]">
            관심 분야
          </h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-purple-100 bg-[#f3e8ff] px-3 py-1 text-sm text-[#7c6b9e]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* 연락처 */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#9d8fb8]">
            연락처
          </h2>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-full bg-gradient-to-r from-[#c4b5fd] to-[#f9a8d4] px-5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <footer className="border-t border-purple-100/80 pt-6 text-center text-sm text-[#9d8fb8]">
          © {new Date().getFullYear()} 정수환 · GitHub Pages 테스트
        </footer>
      </main>
    </div>
  );
}
