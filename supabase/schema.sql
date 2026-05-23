create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  name text not null default '',
  school text not null default '',
  role text not null default '',
  experience text not null default 'Beginner',
  skills text[] not null default '{}',
  interests text[] not null default '{}',
  bio text not null default '',
  looking_for_team boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.hackathons (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  starts_at date,
  location text not null default '',
  prizes text not null default '',
  tags text[] not null default '{}',
  difficulty text not null default 'Beginner',
  theme text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists public.saved_hackathons (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  hackathon_id uuid not null references public.hackathons(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, hackathon_id)
);

create table if not exists public.team_requests (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid not null references auth.users(id) on delete cascade,
  receiver_id uuid not null references auth.users(id) on delete cascade,
  message text not null default '',
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.hackathons enable row level security;
alter table public.saved_hackathons enable row level security;
alter table public.team_requests enable row level security;

drop policy if exists "Profiles are public to signed-in users" on public.profiles;
create policy "Profiles are public to signed-in users"
on public.profiles for select
to authenticated
using (true);

drop policy if exists "Users create their own profile" on public.profiles;
create policy "Users create their own profile"
on public.profiles for insert
to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Users update their own profile" on public.profiles;
create policy "Users update their own profile"
on public.profiles for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Hackathons are public" on public.hackathons;
create policy "Hackathons are public"
on public.hackathons for select
to anon, authenticated
using (true);

drop policy if exists "Users manage their saved hackathons" on public.saved_hackathons;
create policy "Users manage their saved hackathons"
on public.saved_hackathons for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

drop policy if exists "Users see their team requests" on public.team_requests;
create policy "Users see their team requests"
on public.team_requests for select
to authenticated
using (auth.uid() = sender_id or auth.uid() = receiver_id);

drop policy if exists "Users send team requests" on public.team_requests;
create policy "Users send team requests"
on public.team_requests for insert
to authenticated
with check (auth.uid() = sender_id);

drop policy if exists "Receivers update request status" on public.team_requests;
create policy "Receivers update request status"
on public.team_requests for update
to authenticated
using (auth.uid() = receiver_id)
with check (auth.uid() = receiver_id);
