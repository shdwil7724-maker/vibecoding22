const skills = ["TypeScript", "React", "Next.js", "Git"];

const links = [
  { label: "GitHub", href: "https://github.com/shdwil7724-maker/vibecoding22" },
  { label: "이메일", href: "mailto:hello@example.com" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <main className="w-full max-w-lg space-y-10">
        {/* 프로필 */}
        <section className="space-y-4 text-center">
          <div
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-3xl font-bold text-white shadow-lg"
            aria-hidden
          >
            수환
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              정수환
            </h1>
            <p className="mt-2 text-lg text-sky-600 dark:text-sky-400">
              개발을 배우고 있는 주니어 개발자
            </p>
          </div>
          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            사용자 경험을 고민하며 웹을 만듭니다. GitHub Pages 배포 테스트용
            자기소개 사이트입니다.
          </p>
        </section>

        {/* 관심 분야 */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
            관심 분야
          </h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* 연락처 */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            연락처
          </h2>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <footer className="border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500 dark:border-zinc-800">
          © {new Date().getFullYear()} 정수환 · GitHub Pages 테스트
        </footer>
      </main>
    </div>
  );
}
