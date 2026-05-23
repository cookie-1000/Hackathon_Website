# HackFlow

HackFlow is a hackathon discovery and team formation MVP for high school and university students.

## Features

- Modern landing page
- Hackathon directory with tags, dates, locations, prizes, and difficulty
- Team matching page with student profile cards
- Dashboard for saved hackathons, requests, and profile progress
- Profile form for skills, interests, and availability
- Supabase client scaffold for authentication and database integration

## Run locally

```bash
npm install
npm run dev
```

## Supabase setup

Create `.env.local` from `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Then run the SQL in `supabase/schema.sql` inside the Supabase SQL editor.

Suggested tables for the next phase:

- `profiles`
- `hackathons`
- `saved_hackathons`
- `team_requests`
