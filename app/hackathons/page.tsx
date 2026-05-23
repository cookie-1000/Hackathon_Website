import { Filter } from "lucide-react";
import { HackathonCard } from "@/components/hackathon-card";
import { Nav } from "@/components/nav";
import { hackathons } from "@/lib/data";

export default function HackathonsPage() {
  const tags = ["All", "AI", "Finance", "Healthcare", "Beginner-friendly", "Hybrid"];

  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Directory</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Hackathons</h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              Curated student hackathons with location, prizes, themes, and team-friendly tags.
            </p>
          </div>
          <button className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-100">
            <Filter size={16} />
            Filters
          </button>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-slate-200 transition hover:bg-teal-300 hover:text-slate-950"
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {hackathons.map((hackathon) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} />
          ))}
        </div>
      </section>
    </main>
  );
}
