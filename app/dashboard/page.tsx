import { Bell, Bookmark, Inbox, UserRound } from "lucide-react";
import { HackathonCard } from "@/components/hackathon-card";
import { Nav } from "@/components/nav";
import { hackathons } from "@/lib/data";

export default function DashboardPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Dashboard</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Your HackFlow hub</h1>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { icon: Bookmark, label: "Saved hackathons", value: "3" },
            { icon: Inbox, label: "Team requests", value: "7" },
            { icon: Bell, label: "Upcoming deadlines", value: "2" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="glass rounded-lg p-6">
                <Icon className="text-teal-300" size={24} />
                <p className="mt-5 text-4xl font-semibold">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.label}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="text-2xl font-semibold">Saved hackathons</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {hackathons.slice(0, 2).map((hackathon) => (
                <HackathonCard key={hackathon.id} hackathon={hackathon} />
              ))}
            </div>
          </div>
          <aside className="glass h-fit rounded-lg p-6">
            <UserRound className="text-teal-300" size={26} />
            <h2 className="mt-5 text-2xl font-semibold">Profile strength</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Add project links and preferred roles to improve teammate matches.
            </p>
            <div className="mt-5 h-2 rounded-full bg-slate-800">
              <div className="h-2 w-3/4 rounded-full bg-teal-300" />
            </div>
            <p className="mt-3 text-sm text-slate-400">75% complete</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
