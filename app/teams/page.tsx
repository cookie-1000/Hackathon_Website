import { Search, SlidersHorizontal } from "lucide-react";
import { Nav } from "@/components/nav";
import { ProfileCard } from "@/components/profile-card";
import { teammates } from "@/lib/data";

export default function TeamsPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Team matching</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Find builders who fit.</h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              Match by skills, interests, experience level, and availability before the hackathon starts.
            </p>
          </div>
          <button className="inline-flex w-fit items-center gap-2 rounded-lg bg-teal-300 px-4 py-2.5 text-sm font-semibold text-slate-950">
            <SlidersHorizontal size={16} />
            Match filters
          </button>
        </div>
        <div className="mt-8 flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950 px-4 py-3">
          <Search size={18} className="text-slate-500" />
          <span className="text-sm text-slate-500">Search skills, interests, schools, or roles</span>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {teammates.map((teammate) => (
            <ProfileCard key={teammate.id} teammate={teammate} />
          ))}
        </div>
      </section>
    </main>
  );
}
