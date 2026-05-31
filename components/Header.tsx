import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-slate-900">
          {siteConfig.name}
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-emerald-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
