"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Check, Code2, GraduationCap, Lightbulb, ToggleLeft, ToggleRight } from "lucide-react";
import { emptyProfile, commaTextToList, listToCommaText, type Profile } from "@/lib/profile";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

type FormState = Omit<Profile, "skills" | "interests"> & {
  skills: string;
  interests: string;
};

function toFormState(profile: Profile): FormState {
  return {
    ...profile,
    skills: listToCommaText(profile.skills),
    interests: listToCommaText(profile.interests),
  };
}

function fallbackProfile(): FormState {
  return toFormState({
    ...emptyProfile("demo-user"),
    name: "Siddh Mistry",
    school: "Your school",
    role: "Full-stack developer",
    experience: "Intermediate",
    skills: ["React", "Next.js", "Supabase", "Pitching"],
    interests: ["AI", "Finance", "Hackathons", "Startups"],
    bio: "I like building polished MVPs and pitching practical product ideas.",
  });
}

export function ProfileForm() {
  const [profile, setProfile] = useState<FormState>(fallbackProfile);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadProfile() {
      if (!supabase) {
        setLoading(false);
        return;
      }

      const { data: userData } = await supabase.auth.getUser();
      const user = userData.user;

      if (!user) {
        setLoading(false);
        setMessage("Sign in first to save this profile to Supabase.");
        return;
      }

      setUserId(user.id);

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user.id)
        .maybeSingle();

      if (error) {
        setMessage(error.message);
      } else if (data) {
        setProfile(toFormState(data as Profile));
      } else {
        setProfile(toFormState(emptyProfile(user.id)));
      }

      setLoading(false);
    }

    loadProfile();
  }, []);

  const preview = useMemo(
    () => [
      { icon: Code2, label: "Top skills", text: profile.skills || "Add skills" },
      { icon: Lightbulb, label: "Interests", text: profile.interests || "Add interests" },
      { icon: GraduationCap, label: "Level", text: profile.experience || "Choose a level" },
    ],
    [profile]
  );

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setProfile((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!supabase || !isSupabaseConfigured) {
      setMessage("Connect Supabase in .env.local before saving profiles.");
      return;
    }

    if (!userId) {
      setMessage("Sign in before saving your profile.");
      return;
    }

    setSaving(true);

    const payload: Profile = {
      ...profile,
      user_id: userId,
      skills: commaTextToList(profile.skills),
      interests: commaTextToList(profile.interests),
    };

    const { error } = await supabase.from("profiles").upsert(payload, { onConflict: "user_id" });
    setSaving(false);

    setMessage(error ? error.message : "Profile saved to Supabase.");
  }

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
      <form onSubmit={handleSubmit} className="glass rounded-lg p-6">
        {!isSupabaseConfigured ? (
          <div className="mb-5 rounded-lg border border-amber-300/30 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
            Supabase is not configured yet, so this page is showing editable demo data.
          </div>
        ) : null}
        {loading ? <p className="text-sm text-slate-400">Loading profile...</p> : null}
        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-slate-300">
            Name
            <input
              value={profile.name}
              onChange={(event) => updateField("name", event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-300">
            School
            <input
              value={profile.school}
              onChange={(event) => updateField("school", event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-300">
            Primary role
            <input
              value={profile.role}
              onChange={(event) => updateField("role", event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-300">
            Experience
            <select
              value={profile.experience}
              onChange={(event) => updateField("experience", event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </label>
        </div>
        <label className="mt-5 grid gap-2 text-sm font-medium text-slate-300">
          Skills
          <input
            value={profile.skills}
            onChange={(event) => updateField("skills", event.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
          />
        </label>
        <label className="mt-5 grid gap-2 text-sm font-medium text-slate-300">
          Interests
          <input
            value={profile.interests}
            onChange={(event) => updateField("interests", event.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
          />
        </label>
        <label className="mt-5 grid gap-2 text-sm font-medium text-slate-300">
          Bio
          <textarea
            value={profile.bio}
            onChange={(event) => updateField("bio", event.target.value)}
            className="min-h-32 rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
          />
        </label>
        <button
          disabled={saving}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Check size={18} />
          {saving ? "Saving..." : "Save profile"}
        </button>
        {message ? <p className="mt-4 rounded-lg bg-slate-900 p-3 text-sm text-slate-300">{message}</p> : null}
      </form>
      <aside className="glass h-fit rounded-lg p-6">
        <button
          type="button"
          onClick={() => updateField("looking_for_team", !profile.looking_for_team)}
          className="flex w-full items-center justify-between gap-4 text-left"
        >
          <h2 className="text-xl font-semibold">Looking for teammates</h2>
          {profile.looking_for_team ? (
            <ToggleRight className="text-teal-300" size={34} />
          ) : (
            <ToggleLeft className="text-slate-500" size={34} />
          )}
        </button>
        <div className="mt-6 grid gap-4">
          {preview.map((item) => {
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
  );
}
