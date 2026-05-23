import { MessageCircle, SignalHigh } from "lucide-react";
import type { Teammate } from "@/lib/data";

export function ProfileCard({ teammate }: { teammate: Teammate }) {
  return (
    <article className="glass rounded-lg p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="grid size-12 place-items-center rounded-lg bg-slate-800 text-lg font-bold text-teal-200">
            {teammate.name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </div>
          <h3 className="mt-4 text-lg font-semibold">{teammate.name}</h3>
          <p className="text-sm text-slate-400">{teammate.school}</p>
        </div>
        <span
          className={`rounded-lg px-2.5 py-1 text-xs font-medium ${
            teammate.looking ? "bg-teal-400/15 text-teal-200" : "bg-slate-800 text-slate-400"
          }`}
        >
          {teammate.looking ? "Looking" : "Booked"}
        </span>
      </div>
      <p className="mt-4 text-sm text-slate-300">{teammate.role}</p>
      <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
        <SignalHigh size={16} className="text-teal-300" />
        {teammate.experience}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {[...teammate.skills, ...teammate.interests].map((item) => (
          <span key={item} className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs text-slate-200">
            {item}
          </span>
        ))}
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-teal-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-200">
        <MessageCircle size={16} />
        Request teammate
      </button>
    </article>
  );
}
