# Links Valuers & Assessors — Full Project Documentation

> A complete reference for the Links Valuers website: what's been built, how it's
> structured, where content lives, and what's still outstanding. Written so this
> can be handed to anyone — a new developer, a marketing hire, or Cephas himself
> — and they can pick up exactly where things stand without re-deriving context.

**Client:** Links Valuers & Assessors Ltd
**Tagline:** *Confidence Before Every Vehicle Decision™*
**Industry:** Vehicle valuation & assessment (insurance, bank collateral, fleet, court reports, pre-purchase, accident assessment) — Kenya
**Repo:** `gathiicephas-ux/linksvaluers` on GitHub
**Intended production domain:** `www.linksvaluers.com` (see [Known Issues](#9-known-issues--pending-items) — not yet pointed at a host)

> ⚠️ **June 2026 migration:** the site was rebuilt from a hand-rolled static
> HTML/CSS/JS site (originally hosted on GitHub Pages) to **Next.js**. GitHub
> Pages cannot run a Next.js app with server features (it only serves static
> files), so hosting needs to move to **Vercel** (recommended) or similar — see
> [Deployment](#2-tech-stack--hosting). The old static files have been removed
> from the repo; their content lives on in the Next.js pages below.

---

## 1. Tech Stack & Hosting

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript** |
| Styles | A single `app/globals.css` design-system file (CSS custom properties) — ported 1:1 from the original site, no Tailwind |
| Icons | **lucide-react** for generic UI icons; hand-drawn SVGs for brand/social marks (`components/icons/SocialIcons.tsx`, `components/WhatsAppIcon.tsx`) — lucide ships no brand icons |
| Fonts | **Barlow Condensed** + **Inter**, self-hosted via `next/font/google` (no external request at runtime — faster than the old Google Fonts `<link>` tags) |
| Images | `next/image` throughout — automatic resizing/format negotiation (AVIF/WebP), lazy-loading below the fold. Requires the `sharp` package for fast optimization (installed as a dependency) |
| Forms / email | **FormSubmit.co**, now called **server-side** from `app/api/leads/route.ts` instead of directly from the browser |
| Chat widget | Custom rule-based React chatbot (`components/Chatbot.tsx`) — no AI API, no separate backend. See [`CHATBOT.md`](CHATBOT.md) |
| Maps | Keyless Google Maps `iframe` embed (unchanged from before) |
| Hosting | **Vercel** (recommended — zero-config Next.js deploys, serverless functions for `/api/leads`) |

### Running locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

### Building / running production locally
```bash
npm run build
npm start
```

### Deploying
Connect the GitHub repo to a Vercel project (or run `vercel`) — it auto-detects
Next.js and deploys on every push to `main`. No build configuration needed.

⚠️ **GitHub Pages will no longer work** for this repo — it can only serve
static files, and this site now has a server-side API route (`/api/leads`)
and on-demand image optimization. If `gathiicephas-ux.github.io/linksvaluers/`
was bookmarked anywhere, it needs to be replaced with the new Vercel URL once
deployed.

---

## 2. Site Map

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Home — hero, trust strip, stats, AI-image promo slider, services, process timeline, why-Links comparison, testimonial, client pills, blog teaser slider, closing CTA |
| `/about` | `app/about/page.tsx` | Story, mission/vision, values, dual-licensing, leadership grid (6), team gallery slider, awards |
| `/services` | `app/services/page.tsx` | 6 service detail sections with anchor IDs (`#insurance-valuation`, `#bank-valuation`, `#fleet-valuation`, `#court-reports`, `#accident-assessment`, `#pre-purchase-inspection`) |
| `/branches` | `app/branches/page.tsx` | Map embed, branch directory, mobile assessor info |
| `/clients` | `app/clients/page.tsx` | Full exhaustive partner list — 68 institutions across 4 categories |
| `/faqs` | `app/faqs/page.tsx` | Category-tabbed accordion (General / Insurance / Bank / Fleet / Pre-Purchase) + FAQPage schema + avatar callout |
| `/blog`, `/blog/[slug]` | `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` | Blog index + 5 individually-routed articles (statically generated) |
| `/contact` | `app/contact/page.tsx` | Contact details, working contact form, Westlands map, LocalBusiness schema, avatar callout |
| `/book-valuation` | `app/book-valuation/page.tsx` | Booking form (accepts `?type=` prefill from service CTAs across the site) |
| `/privacy`, `/terms` | `app/privacy/page.tsx`, `app/terms/page.tsx` | Real policy pages (previously `href="#"` placeholders in the footer — fixed during the migration) |
| `/robots.txt`, `/sitemap.xml` | `app/robots.ts`, `app/sitemap.ts` | Generated dynamically (the sitemap pulls blog slugs from `lib/blogPosts.ts` automatically, so new posts no longer need a manual sitemap edit) |

All pages share `app/layout.tsx`: header/nav, mobile menu, footer, WhatsApp
float button, and the chatbot widget.

---

## 3. Design System

Defined in `app/globals.css` (`:root` block):

| Token | Value | Use |
|---|---|---|
| `--dark` | `#0F1A10` | Primary dark background / text-on-light |
| `--green` | `#3CAA5A` | Primary brand accent (CTAs, links, highlights) |
| `--orange` | `#E8761A` | Secondary accent (badges, dots) |
| `--off-white` | `#F8F8F6` | Light section backgrounds |
| `--grey` / `--grey-light` | `#888888` / `#cfd6d0` | Body copy on light/dark |
| `--radius-card` / `--radius-btn` | `8px` / `4px` | Corner rounding |
| `--shadow-card` / `--shadow-lift` | subtle / pronounced | Resting vs. hover elevation |
| `--font-display` / `--font-body` | Barlow Condensed / Inter | Mapped to `next/font` CSS variables in `app/layout.tsx` |

### Reusable components (`components/`)
- **Header / Footer** — shared chrome, `Header.tsx` manages mobile menu state via `usePathname()` + React state (replacing the old vanilla-JS body-class toggle)
- **Reveal** — scroll-fade-in wrapper (IntersectionObserver), replaces the old global `.reveal` JS scan
- **Counter** — animated stat count-up, same visual behaviour as before, now a typed component taking `value`/`prefix`/`suffix` props
- **Slider** — generic carousel (`variant="default" | "promo"`), used for both the About team gallery and the homepage AI-image promo slider
- **CardSlider** — separate multi-card carousel engine for the homepage blog teaser, steps by one card width
- **FaqAccordion** — category tabs + accordion, data-driven from `lib/faqs.ts`
- **BookingForm / ContactForm** — client components that POST JSON to `/api/leads`
- **Chatbot** — full rule-based chat widget; see [`CHATBOT.md`](CHATBOT.md)
- **AvatarCallout** — small reusable avatar+text card (FAQs, Contact, blog posts, homepage blog section)
- **icons/SocialIcons.tsx**, **WhatsAppIcon.tsx** — hand-drawn brand SVGs (lucide-react has no Facebook/Instagram/X/TikTok/YouTube/WhatsApp icons)

---

## 4. Content Inventory

### Partner / client list (68 institutions — `lib/partners.ts`)
| Category | Count | Pill color |
|---|---|---|
| Insurance Companies | 23 | Orange |
| Banks | 8 | Green |
| SACCOs | 10 | Blue |
| Micro-Finance Banks | 27 | Purple |

`lib/partners.ts` holds both the full list (`/clients`) and a curated
`featured` subset per category (homepage), with a "+N more" count computed
automatically from the difference — no more manually keeping two HTML lists
in sync.

### Leadership team (`/about`, defined inline in `app/about/page.tsx`)
Reuben Muiruri (Director of Business Operations), Jane Kanyeki (Business
Development Manager), Stephen Kiragu (Head of Quality Control and Valuation),
Caren Chepkoech (Head of Administration), Grace Wanjiru (Customer Service
Representative), Dorcas Kanee (Head of Finance & HR).

### Blog articles (`lib/blogPosts.ts`, 5 posts, each its own route)
| # | Title | Category | Route |
|---|---|---|---|
| 1 | What To Do in the First Hour After a Breakdown or Accident | Accident Assessment | `/blog/breakdown-accident-first-hour` |
| 2 | Why GPS-Tagged Digital Reports Are Changing Valuation in Kenya | Technology | `/blog/gps-tagged-digital-reports` |
| 3 | Inside a Links Inspection: What We Actually Check | Quality Control | `/blog/inside-a-links-inspection` |
| 4 | Insurance Claim Stuck? Here's How an Independent Valuation Speeds It Up | Insurance | `/blog/speed-up-insurance-claims` |
| 5 | Buying a Used Car in Kenya? Don't Skip This One Step | Pre-Purchase | `/blog/pre-purchase-inspection-used-car` |

Adding a 6th post is now just adding one object to the `blogPosts` array in
`lib/blogPosts.ts` — it automatically gets its own route, sitemap entry, and
appears in the homepage teaser slider and `/blog` index.

### FAQ categories (`lib/faqs.ts`)
General, Insurance, Bank/Finance, Fleet, Pre-Purchase — each a tab-filtered
accordion group.

### Key brand facts referenced throughout the site
1M+ valuations completed · 99.7% first-submission acceptance · 25+ branches ·
4–48 hour turnaround · 100+ insurance & finance partners · 12+ years in
operation · Dual-licensed by **M.A.A.K** and **I.R.A**.

---

## 5. Interactive Features

| Feature | Where | How it works |
|---|---|---|
| Mobile menu | All pages | React state in `Header.tsx`, closes on route change |
| FAQ accordion + category tabs | `/faqs` | `FaqAccordion` component, data-driven |
| Animated stat counters | Homepage, `/branches` | `Counter` component, counts up on scroll-into-view |
| Scroll-reveal animations | All pages | `Reveal` component wrapping sections |
| Team gallery slider | `/about` | `Slider` component, default variant |
| AI-image promo slider | Homepage | `Slider` component, `promo` variant (bold text overlays) |
| Blog card slider | Homepage | `CardSlider` component, steps one card at a time |
| Booking form | `/book-valuation` | `BookingForm` → POSTs to `/api/leads` → FormSubmit (+ optional Telegram) |
| Contact form | `/contact` | `ContactForm` → same `/api/leads` pattern |
| Chatbot widget | All pages | Rule-based Q&A + lead capture → `/api/leads`. **Full documentation in [`CHATBOT.md`](CHATBOT.md)** |
| WhatsApp deep links | All pages (floating button + form fallbacks) | Pre-filled `wa.me` links |

---

## 6. Image Asset Inventory

All images live under `public/` (Next.js serves anything here at the matching
root URL path, e.g. `public/images/ai/deal-sealed.jpg` → `/images/ai/deal-sealed.jpg`).
Filenames were normalized to lowercase-kebab-case during the migration (no
spaces) for cleaner URLs — e.g. `Deal Sealed.jpg` → `deal-sealed.jpg`.

| Folder | Contents | Used for |
|---|---|---|
| `public/assets/logo.png` | Official Links logo | Header/footer brand mark, favicon |
| `public/images/Management/` | Original 5 leadership headshots | Superseded by sharper root-level versions (kept for reference; not linked from any page) |
| `public/images/` (root) | Sharper leadership headshots (`reuben-muiruri.jpg`, etc.), team slider photos (`full-team.jpg`, `valuations-team.jpg`, `marketing-department.jpg`, `administration-departments.jpg`), plus candid `IMG-20260610-WA00xx` / `IMG-20260615-WA00xx` site photos | Leadership grid, About team slider, homepage hero |
| `public/images/ai/` | 10 stock photos, resized/compressed (originally 1.7–17MB each, now 140–370KB) | Homepage promo slider (5) + blog cards/articles (5) |
| `public/images/avatar/` | `links-chatbot.png` (in active use) and `links-bot.png` (⚠️ **not used** — has "R245,000" baked into the artwork, wrong currency for KES market) | Chatbot widget, avatar callouts |
| `public/images/links favicon/`, `public/images/logo/` | Extra brand asset exports | Not currently referenced by any page — candidates for cleanup |

Several candid photos (`IMG-20260615-WA0004/5/6/9/11/14/19.jpg`) are uploaded
but not yet placed anywhere — available for future slider slots if more
visual variety is wanted.

---

## 7. Third-Party Integrations

| Service | Used for | Setup needed |
|---|---|---|
| **FormSubmit.co** | Booking form, Contact form, Chatbot lead capture — all forward to `info@linksvaluers.com`, called server-side from `app/api/leads/route.ts` | ⚠️ First-ever submission triggers a one-time "Activation Required" confirmation email to that inbox. Someone needs to click the link once; after that, every submission delivers automatically. |
| **Telegram (optional)** | Instant push notification the moment a lead comes in, in parallel with the FormSubmit email | Create a bot via `@BotFather`, message it once, fetch `https://api.telegram.org/bot<token>/getUpdates` to find the chat id, then set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` as Vercel environment variables. Entirely optional — leads still email fine without it. |
| **Google Fonts** | Barlow Condensed, Inter | None — self-hosted automatically via `next/font/google`, no runtime request to Google |
| **Google Maps (embed)** | `/branches`, `/contact` | Keyless `iframe` embed — works, but no API key means no custom markers/styling. Noted as a "before going live" upgrade. |
| **WhatsApp (`wa.me`)** | Floating button + form fallback links | None — just deep links to `+254 708 412 668` |
| **Vercel** | Hosting + serverless functions for `/api/leads` | Connect the GitHub repo at vercel.com; auto-deploys on push to `main` |

---

## 8. SEO

- Every page sets a unique `<title>` / description via Next.js `Metadata` exports, with canonical URLs against `https://www.linksvaluers.com`.
- Homepage and `/contact` carry `LocalBusiness` JSON-LD schema; `/faqs` carries `FAQPage` JSON-LD schema.
- `og:title` / `og:description` / `og:type` set on the homepage for social link previews.
- `/robots.txt` and `/sitemap.xml` are generated dynamically (`app/robots.ts`, `app/sitemap.ts`) — the sitemap includes all static routes plus every blog post automatically.

---

## 9. Known Issues / Pending Items

1. **Hosting migration not yet done.** The app is built and verified locally
   (`npm run build` succeeds, all routes return 200) but needs to actually be
   deployed to Vercel (or similar) — GitHub Pages cannot run it.
2. **Custom domain not yet live.** Point `www.linksvaluers.com` DNS at the new
   host once chosen, and add it in that host's project settings.
3. **Maps use a keyless embed.** Functional, but upgrading to a proper Google
   Maps Embed API key would allow custom green branded markers and per-branch
   info panels.
4. **`public/images/Management/`, `public/images/links favicon/`, `public/images/logo/`**
   contain assets superseded or unused by any current page — candidates for
   cleanup once confirmed unnecessary.
5. **FormSubmit activation** — confirm the one-time activation email has
   actually been clicked; otherwise leads/bookings/messages will silently fail
   to deliver.
6. **Telegram instant notifications are optional and unconfigured** — works
   fine without them (email-only), but worth setting up if instant push to a
   phone is wanted. See section 7 above.
7. **Chatbot is rule-based, not AI** — see [`CHATBOT.md`](CHATBOT.md) for full
   detail and future upgrade paths if a real AI-backed assistant is wanted
   later.

---

## 10. Change History (high-level)

| Commit / milestone | Summary |
|---|---|
| *(this migration)* | Full rebuild from static HTML/CSS/JS to Next.js + TypeScript + React; real `/api/leads` backend for instant lead notifications; real Privacy/Terms pages; image filenames normalized; `sharp` added for fast image optimization |
| `7f00ba1` | Update footer social links to real profiles (Facebook, Instagram, X, TikTok, YouTube) |
| `fe28755` | Add full project documentation and chatbot reference doc |
| `6161ff3` | Add hovering AI chatbot widget with lead capture across all pages |
| `542630a` | Add AI-image promo slider, blog with content, and brand avatar across site |
| `464eeac` | Wire booking and contact forms to send real emails via FormSubmit |
| `bfaaa93` | Update turnaround time to 4–48hrs, expand partner list to 68 institutions, add team gallery slider |
| `c711525` | About: feature Links logo beside Mission & Vision |
| `f632274` | Use official Links logo PNG across site |
| `e7c691e` | Links Valuers & Assessors website — full multi-page redesign (initial static-HTML build) |

---

## 11. Where To Go Next

- **General quick-start / dev setup** → `README.md`
- **Chatbot widget deep-dive (editing answers, lead flow, etc.)** → `CHATBOT.md`
- **This file** → the single source of truth for overall project state

*Last updated: June 16, 2026 (Next.js migration).*
