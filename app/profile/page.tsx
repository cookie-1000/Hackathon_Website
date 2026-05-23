import { Nav } from "@/components/nav";
import { ProfileForm } from "@/components/profile-form";

export default function ProfilePage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-5xl px-5 py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Profile</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Build your teammate profile</h1>
        <ProfileForm />
      </section>
    </main>
  );
}
