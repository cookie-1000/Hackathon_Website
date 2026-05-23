"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export function AuthForm() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [signedInEmail, setSignedInEmail] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getUser().then(({ data }) => {
      setSignedInEmail(data.user?.email ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedInEmail(session?.user.email ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!supabase) {
      setMessage("Add your Supabase URL and anon key in .env.local, then restart npm run dev.");
      return;
    }

    setLoading(true);
    const authCall =
      mode === "signup"
        ? supabase.auth.signUp({ email, password })
        : supabase.auth.signInWithPassword({ email, password });

    const { error } = await authCall;
    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      mode === "signup"
        ? "Account created. Check your email if confirmations are enabled, then build your profile."
        : "Signed in. You can now save your HackFlow profile."
    );
  }

  async function signOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
    setSignedInEmail(null);
    setMessage("Signed out.");
  }

  return (
    <div className="glass rounded-lg p-6">
      <ShieldCheck className="text-teal-300" size={30} />
      <h2 className="mt-5 text-2xl font-semibold">{mode === "signin" ? "Email login" : "Create account"}</h2>

      {!isSupabaseConfigured ? (
        <div className="mt-5 rounded-lg border border-amber-300/30 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
          Supabase is not configured yet. Create `.env.local` from `.env.example`, add your keys, and restart the dev server.
        </div>
      ) : null}

      {signedInEmail ? (
        <div className="mt-5 rounded-lg bg-slate-900 p-4">
          <p className="text-sm text-slate-300">Signed in as</p>
          <p className="mt-1 font-medium text-white">{signedInEmail}</p>
          <button
            type="button"
            onClick={signOut}
            className="mt-4 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
          >
            Sign out
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="mt-6 grid gap-2 text-sm font-medium text-slate-300">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
            />
          </label>
          <label className="mt-5 grid gap-2 text-sm font-medium text-slate-300">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="At least 6 characters"
              required
              minLength={6}
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
            />
          </label>
          <button
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-teal-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-teal-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Mail size={18} />
            {loading ? "Working..." : mode === "signin" ? "Sign in" : "Sign up"}
          </button>
        </form>
      )}

      {message ? <p className="mt-4 rounded-lg bg-slate-900 p-3 text-sm text-slate-300">{message}</p> : null}

      <div className="mt-4 flex items-center justify-between gap-3 text-sm text-slate-400">
        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="text-teal-300"
        >
          {mode === "signin" ? "Need an account?" : "Already have an account?"}
        </button>
        <Link href="/profile" className="text-teal-300">
          Profile
        </Link>
      </div>
    </div>
  );
}
