import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/song", label: "Songs" },
  { href: "/vocabulary", label: "Vocab" },
  { href: "/grammar", label: "Grammar" },
  { href: "/review", label: "Review" },
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen pb-24">
      <header className="sticky top-0 z-20 border-b border-line bg-paper/90 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
          <Link href="/" className="font-extrabold tracking-normal text-ink">
            Florence Japanese
          </Link>
          <span className="rounded-full bg-soft px-3 py-1 text-xs font-semibold text-accent-dark">
            Songs
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-5 sm:px-6">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 px-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-1 py-2 text-center text-[11px] font-semibold text-muted transition hover:bg-soft hover:text-accent-dark"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <nav className="mx-auto hidden max-w-5xl px-6 pb-8 md:block">
        <div className="flex flex-wrap justify-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-muted transition hover:border-accent hover:text-accent-dark"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
