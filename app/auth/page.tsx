import { AuthForm } from "@/components/auth-form";
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
            Create an account, sign in, and then save your teammate profile to Supabase.
          </p>
        </div>
        <AuthForm />
      </section>
    </main>
  );
}
