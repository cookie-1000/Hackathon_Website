import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/nav";

export default function AuthPage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Authentication</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Sign in to save and match.</h1>
          <p className="mt-5 max-w-xl text-slate-300">
            This MVP includes a Supabase client scaffold. Add your project URL and anon key to enable real auth.
          </p>
        </div>
        <form className="glass rounded-lg p-6">
          <ShieldCheck className="text-teal-300" size={30} />
          <h2 className="mt-5 text-2xl font-semibold">Email login</h2>
          <label className="mt-6 grid gap-2 text-sm font-medium text-slate-300">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
            />
          </label>
          <label className="mt-5 grid gap-2 text-sm font-medium text-slate-300">
            Password
            <input
              type="password"
              placeholder="••••••••"
              className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 text-white outline-none transition focus:border-teal-300"
            />
          </label>
          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-teal-300 px-5 py-3 font-semibold text-slate-950">
            <Mail size={18} />
            Continue
          </button>
          <p className="mt-4 text-center text-sm text-slate-400">
            New here?{" "}
            <Link href="/profile" className="text-teal-300">
              Create your profile
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
