# Links Valuers & Assessors Ltd — Website

Next.js (App Router) + TypeScript site for Links Valuers, Kenya's vehicle valuation authority.
**Tagline:** Confidence Before Every Vehicle Decision™

> Migrated from a hand-rolled static HTML/CSS/JS site to Next.js in June 2026 for faster page loads
> (self-hosted fonts, optimized images, code-split client JS) and real backend capability
> (server-side lead notifications via `/api/leads`). See `PROJECT.md` for the full history.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- Plain CSS design system (`app/globals.css`) — no Tailwind, ported 1:1 from the original site
- **lucide-react** for UI icons; hand-drawn SVGs for brand/social marks (`components/icons/`)
- **FormSubmit.co** for email delivery (no backend email service needed) — see `/api/leads`
- Hosting: **Vercel** (recommended) — see `PROJECT.md` for deploy steps

## Pages

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Home — hero, stats, promo slider, services, process, comparison, testimonial, clients, blog teaser |
| `/about` | `app/about/page.tsx` | Story, mission/vision, values, licensing, leadership, team gallery slider, awards |
| `/services` | `app/services/page.tsx` | 6 service detail sections with anchor IDs |
| `/branches` | `app/branches/page.tsx` | Map embed, branch directory, mobile assessors |
| `/clients` | `app/clients/page.tsx` | Full 68-partner list, testimonials, case study |
| `/faqs` | `app/faqs/page.tsx` | Category-tabbed accordion + FAQPage schema |
| `/blog`, `/blog/[slug]` | `app/blog/` | 5 articles, dynamic per-post routes |
| `/contact` | `app/contact/page.tsx` | Contact form, map, LocalBusiness schema |
| `/book-valuation` | `app/book-valuation/page.tsx` | Booking form (`?type=` prefill supported) |
| `/privacy`, `/terms` | `app/privacy/`, `app/terms/` | Real policy pages (previously placeholder links) |

## Structure

- `app/` — routes (App Router), `layout.tsx` (fonts + header/footer/chatbot), `globals.css`
- `components/` — shared React components (Header, Footer, Slider, CardSlider, Chatbot, forms, etc.)
- `lib/` — typed data: `blogPosts.ts`, `partners.ts`, `faqs.ts`
- `public/` — images, logo, favicon (served at root URL paths)
- `app/api/leads/route.ts` — server-side endpoint all 3 forms post to (see below)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build & run production locally

```bash
npm run build
npm start
```

## Lead notifications (`/api/leads`)

Booking form, contact form, and chatbot lead capture all POST JSON to `/api/leads`, which:
1. Forwards to FormSubmit (`info@linksvaluers.com`) — same zero-signup email relay as before, now
   called server-side instead of from the browser.
2. Optionally pings a Telegram chat **instantly** if `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`
   are set as environment variables (Vercel → Project → Settings → Environment Variables). Fully
   optional — the route works without them, just without the instant push.

⚠️ The first-ever submission to FormSubmit triggers a one-time confirmation email to
`info@linksvaluers.com` — it must be clicked once before delivery starts working.

## Before going fully live

1. Point `www.linksvaluers.com` DNS at Vercel and add the domain in the Vercel project settings.
2. Click the FormSubmit confirmation email (see above) once it arrives.
3. Optionally set up the Telegram bot for instant lead pings (see `/api/leads/route.ts` comments).
4. Swap the keyless Google Maps `iframe` embeds for the Maps Embed API with a real key if custom
   markers/styling are wanted (`app/branches/page.tsx`, `app/contact/page.tsx`).

Full project history and architecture notes: see [`PROJECT.md`](PROJECT.md).
Chatbot widget deep-dive: see [`CHATBOT.md`](CHATBOT.md).
