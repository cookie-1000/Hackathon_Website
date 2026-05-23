import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarSearch, UsersRound, Zap } from "lucide-react";
import { HackathonCard } from "@/components/hackathon-card";
import { Nav } from "@/components/nav";
import { SectionHeading } from "@/components/section-heading";
import { hackathons, stats } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Nav />
      <section className="relative overflow-hidden">
        <div className="quiet-grid absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-28">
          <div>
            <p className="inline-flex rounded-lg border border-teal-300/30 bg-teal-300/10 px-3 py-1 text-sm font-medium text-teal-200">
              LinkedIn + Devpost + team matching for student builders
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Find your next hackathon and the team to win it.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              HackFlow helps high school and university students discover credible hackathons,
              save opportunities, and match with teammates by skills, interests, and experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/hackathons"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-200"
              >
                Explore hackathons
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/teams"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Find teammates
              </Link>
            </div>
          </div>
          <div className="glass rounded-lg p-5">
            <div className="grid gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-slate-900/70 p-5">
                  <p className="text-4xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Featured" title="Hackathons worth your weekend">
          Browse curated events with theme, difficulty, location, and prize info in one clean place.
        </SectionHeading>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {hackathons.slice(0, 3).map((hackathon) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-950/55">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <SectionHeading eyebrow="Why join" title="Built for the messy middle of hackathons">
            The hard part is not just registering. It is choosing the right event, finding aligned
            teammates, and staying organized after the excitement starts.
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: CalendarSearch, title: "Discover faster", text: "Filter by tags like AI, finance, healthcare, beginner-friendly, and hybrid." },
              { icon: UsersRound, title: "Match intentionally", text: "Show your skills and find students who want the same kind of project." },
              { icon: BadgeCheck, title: "Stay organized", text: "Save events, track requests, and keep your profile ready for the next build." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-lg border border-slate-800 p-6">
                  <Icon className="text-teal-300" size={28} />
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="glass flex flex-col items-start justify-between gap-6 rounded-lg p-8 md:flex-row md:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-teal-300">
              <Zap size={16} />
              MVP-ready
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Create a profile and start matching.</h2>
          </div>
          <Link
            href="/profile"
            className="rounded-lg bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-200"
          >
            Build profile
          </Link>
        </div>
      </section>
    </main>
  );
}
