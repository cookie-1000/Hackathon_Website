import Link from "next/link";
import { Compass, LayoutDashboard, Sparkles, UserRound, UsersRound } from "lucide-react";

const links = [
  { href: "/hackathons", label: "Hackathons", icon: Compass },
  { href: "/teams", label: "Teams", icon: UsersRound },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/profile", label: "Profile", icon: UserRound },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-[#06070a]/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-lg bg-teal-400 text-slate-950">
            <Sparkles size={19} />
          </span>
          <span className="text-lg font-semibold tracking-tight">HackFlow</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                <Icon size={16} />
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/auth"
          className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
        >
          Sign in
        </Link>
      </nav>
    </header>
  );
}
