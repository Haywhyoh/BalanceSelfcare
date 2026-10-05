# Balance Self-Care

Next.js marketing site for **Balance Self-Care** — a mental health and wellness practice offering virtual psychotherapy (Ontario, 16+), workshops, and presentations.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Jane App for booking (`/book` redirects externally)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Key routes

| Route | Purpose |
|-------|---------|
| `/` | Home |
| `/about` | Vision, purpose, expertise |
| `/services` | Service overview |
| `/services/psychotherapy` | Ontario therapy details |
| `/services/workshops` | Workshops |
| `/services/presentations` | Presentations |
| `/team` | Clinician grid |
| `/team/[slug]` | Therapist bios |
| `/contact` | Jane booking + inquiry form |
| `/book` | Redirects to Jane App |
| `/privacy`, `/terms` | Legal |
| `/blog` | Placeholder (noindex) |

WordPress URL redirects (e.g. `/about-rachel/` → `/team/rachel-grant`) are configured in `next.config.ts`.

## Contact form

`POST /api/contact` currently validates and logs inquiries. Wire it to an email provider (Resend, Formspree, etc.) before production launch.
