import { CalendarDays, MapPin, Trophy } from "lucide-react";
import type { Hackathon } from "@/lib/data";

export function HackathonCard({ hackathon }: { hackathon: Hackathon }) {
  return (
    <article className="glass rounded-lg p-5 transition hover:-translate-y-1 hover:border-teal-300/50">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-teal-300">{hackathon.difficulty}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{hackathon.name}</h3>
        </div>
        <span className="rounded-lg border border-slate-700 px-3 py-1 text-sm text-slate-300">
          {hackathon.applicants}
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{hackathon.theme}</p>
      <div className="mt-5 grid gap-3 text-sm text-slate-300">
        <span className="flex items-center gap-2">
          <CalendarDays size={16} className="text-teal-300" />
          {hackathon.date}
        </span>
        <span className="flex items-center gap-2">
          <MapPin size={16} className="text-rose-300" />
          {hackathon.location}
        </span>
        <span className="flex items-center gap-2">
          <Trophy size={16} className="text-amber-300" />
          {hackathon.prizes} in prizes
        </span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {hackathon.tags.map((tag) => (
          <span key={tag} className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs text-slate-200">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
