# Gauntlex

An AI-guided, project-based coding education platform delivering the 01-edu
curriculum one task at a time. See [Gauntlex.md](Gauntlex.md) for the full
product description and [01-CURRICULUM-MAP.md](01-CURRICULUM-MAP.md) for the
curriculum research this platform is built on.

## Repo layout

```
frontend/   Vite + React + TypeScript, Clerk auth, React Router
backend/    Go HTTP API — Postgres (Neon) store, provider-agnostic AI client
            for the Guide/Auditor, Docker-based sandbox test runner
sandbox/    Standalone Dockerfiles for the per-language sandbox execution
            images the backend runs submissions in (not part of the Go module)
```

## Local development

### Prerequisites

- Node 20+, Go 1.26+, Docker
- A [Neon](https://neon.tech) Postgres database
- A [Clerk](https://clerk.com) application (frontend publishable key +
  backend secret key)
- An API key for at least one AI provider: Anthropic or OpenAI

### 1. Database

Run the migration in `backend/migrations/0001_init.sql` against your Neon
database, e.g.:

```bash
psql "$DATABASE_URL" -f backend/migrations/0001_init.sql
```

There's no curriculum data seeded yet — loading `01-CURRICULUM-MAP.md`'s
proposed arrangement into `tracks`/`phases`/`subjects` rows is a follow-up
content task, not part of this scaffold.

### 2. Backend

```bash
cd backend
cp .env.example .env   # fill in DATABASE_URL, CLERK_SECRET_KEY, and an AI provider key
go run ./cmd/server
```

Health check: `curl http://localhost:8080/health`

Build the sandbox execution images once (needed before any submission can
actually be graded — see `sandbox/README.md`):

```bash
./sandbox/images/build-all.sh
```

### 3. Frontend

```bash
cd frontend
cp .env.example .env.local   # fill in VITE_CLERK_PUBLISHABLE_KEY
npm install
npm run dev
```

Opens on `http://localhost:5173`. Sign in via Clerk, then `/dashboard` calls
the backend's `/api/me/current-subject` (Clerk JWT verified server-side).

## Deployment

- Frontend → Vercel, config in `frontend/vercel.json`, target
  `gauntlex.vercel.app` per `Gauntlex.md`.
- Backend → Render, config in `render.yaml` (Docker runtime, builds
  `backend/Dockerfile`). Set the same env vars from `backend/.env.example` in
  Render's dashboard — `sync: false` vars in `render.yaml` are secrets not
  committed anywhere.

## CI

`.github/workflows/frontend-ci.yml` and `backend-ci.yml` build/lint/test each
half of the app independently, path-scoped so a backend-only change doesn't
trigger a frontend build and vice versa.

## What's scaffolded vs. what's not

This is the stack setup, not the product build. Wired up and working:

- Frontend boots, routes, and gates `/dashboard` behind Clerk auth.
- Backend boots, verifies Clerk session JWTs, connects to Postgres, and
  serves one real endpoint (`/api/me/current-subject`) that seeds a new
  user's progress and returns their current subject.
- The AI client abstraction (`backend/internal/ai`) and Docker sandbox
  runner (`backend/internal/sandbox`) are implemented and buildable, but not
  yet wired into any HTTP route — there's no Guide chat endpoint, no
  submission endpoint, and no Auditor endpoint yet. That's the next layer of
  actual feature work, not stack setup.
- No curriculum data is loaded into the database yet.
- No UI styling — plain unstyled markup throughout, intentionally, pending
  the UI style guide.
