# Links Valuers & Assessors Ltd — Website

Static, mobile-first marketing site built to the v1.0 redesign brief.
**Tagline:** Confidence Before Every Vehicle Decision™

## Pages
| File | URL | Purpose |
|------|-----|---------|
| `index.html` | `/` | Home — hero, trust strip, stats, services, process, why-Links, testimonial, clients, CTA |
| `about.html` | `/about` | Story, mission/vision, values, dual-licensing, leadership (5), awards |
| `services.html` | `/services` | 6 service detail sections with deep-link anchors (`#insurance-valuation`, etc.) |
| `branches.html` | `/branches` | Map embed, branch directory, mobile assessors |
| `clients.html` | `/clients` | Client pills (Banks / Insurers / SACCOs), testimonials, case study |
| `faqs.html` | `/faqs` | Category-tabbed JS accordion + FAQPage schema |
| `contact.html` | `/contact` | Contact details, form, Westlands map, LocalBusiness schema |
| `book-valuation.html` | `/book-valuation` | Booking form (accepts `?type=` prefill from service CTAs) |

## Structure
- `css/styles.css` — full design system (tokens, components, responsive)
- `js/main.js` — mobile menu, scroll reveal, animated counters, FAQ accordion/tabs, form demo + WhatsApp prefill, service-type prefill
- `assets/logo.png` — official Links logo (favicon / brand mark)
- `images/` — photography (+ `images/Management/` headshots)
- `robots.txt`, `sitemap.xml` — SEO

## Design tokens
Dark `#0F1A10` · Green `#3CAA5A` · Orange `#E8761A` · Off-white `#F8F8F6` · Grey `#888888`
Display: **Barlow Condensed** 800 / Body: **Inter** — both via Google Fonts.

## Run locally
```
python -m http.server 5500
```
Then open http://localhost:5500

## Before going live (per brief)
1. **Forms** are demo-only (client-side). Wire the `<form data-demo>` elements to Formspree / WPForms / Netlify Forms / SMTP. WhatsApp fallback already works (`wa.me/254708412668`).
2. **Maps** use keyless Google embeds. Swap for the Google Maps Embed **API** with custom green markers and per-branch info panels.
3. **Images** → convert to WebP + add `srcset`/responsive sizes for Lighthouse 90+. Hero is already preloaded.
4. Replace placeholder **Privacy Policy / Terms** links in the footer.
5. Set real canonical/OG domain if different from `www.linksvaluers.com`.
