import { Check, Code2, GraduationCap, Lightbulb, ToggleRight } from "lucide-react";
import { Nav } from "@/components/nav";

export default function ProfilePage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-5xl px-5 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Profile</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Build your teammate profile</h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
          <form className="glass rounded-lg p-6">
            <div className="grid gap-5 md:grid-cols-2">
              {[
                { label: "Name", value: "Siddh Mistry" },
                { label: "School", value: "Your school" },
                { label: "Primary role", value: "Full-stack developer" },
                { label: "Experience", value: "Beginner / Intermediate" },
              ].map((field) => (
                <label key={field.label} className="grid gap-2 text-sm font-medium text-slate-300">
                  {field.label}
                  <input
                    defaultValue={field.value}
                    className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
                  />
                </label>
              ))}
            </div>
            <label className="mt-5 grid gap-2 text-sm font-medium text-slate-300">
              Skills
              <input
                defaultValue="React, Next.js, Supabase, Pitching"
                className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
              />
            </label>
            <label className="mt-5 grid gap-2 text-sm font-medium text-slate-300">
              Interests
              <input
                defaultValue="AI, Finance, Hackathons, Startups"
                className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
              />
            </label>
            <label className="mt-5 grid gap-2 text-sm font-medium text-slate-300">
              Bio
              <textarea
                defaultValue="I like building polished MVPs and pitching practical product ideas."
                className="min-h-32 rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
              />
            </label>
            <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal-300 px-5 py-3 font-semibold text-slate-950">
              <Check size={18} />
              Save profile
            </button>
          </form>
          <aside className="glass h-fit rounded-lg p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">Looking for teammates</h2>
              <ToggleRight className="text-teal-300" size={34} />
            </div>
            <div className="mt-6 grid gap-4">
              {[
                { icon: Code2, label: "Top skills", text: "React, Supabase, pitching" },
                { icon: Lightbulb, label: "Interests", text: "AI, finance, startup tools" },
                { icon: GraduationCap, label: "Level", text: "Intermediate builder" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-lg bg-slate-900 p-4">
                    <Icon className="text-teal-300" size={20} />
                    <p className="mt-3 font-medium">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
