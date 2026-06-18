export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ol'; items: string[] }
  | { type: 'ul'; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  dateLabel: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'breakdown-accident-first-hour',
    title: 'What To Do in the First Hour After a Breakdown or Accident',
    category: 'Accident Assessment',
    dateLabel: 'June 9, 2026',
    readTime: '4 min read',
    excerpt:
      "A clear head and the right steps in the first 60 minutes protect your safety, your claim, and your payout — here's the checklist our assessors wish every driver carried.",
    image: '/images/ai/roadside-assistance.jpg',
    imageAlt: 'Woman checking her car engine after a roadside breakdown',
    body: [
      {
        type: 'p',
        text: "A breakdown or accident is stressful, and the decisions you make in the first hour often matter more than anything that happens afterward. Here's a clear sequence to follow."
      },
      {
        type: 'ol',
        items: [
          '<b>Get safe first.</b> Move to the hard shoulder or roadside where possible, turn on hazard lights, and place a warning triangle if you carry one. On Kenyan highways, visibility is your biggest risk in the first few minutes.',
          "<b>Document before you touch anything.</b> Photograph the scene from multiple angles: your vehicle, the other vehicle (if any), the road position, registration plates, and any visible damage. Insurers and assessors rely heavily on first-on-scene photos — they're far harder to dispute than a verbal account days later.",
          '<b>Exchange the right details.</b> Name, phone number, vehicle registration, and insurance company for every party involved. Witness contact details are often the deciding factor in a disputed claim.',
          '<b>Call it in early.</b> Notify your insurer and, if the damage is significant, request an independent assessment before any repair work begins. Repairing first and assessing later is the single biggest reason claims get challenged or underpaid.',
          "<b>Don't accept a verbal estimate on the roadside.</b> Garages and informal assessors will often quote a number on the spot. That figure carries no weight with an insurer or a court — a certified report does."
        ]
      },
      { type: 'h3', text: 'Why This Matters For Your Claim' },
      {
        type: 'p',
        text: "Most disputed insurance payouts in Kenya come down to one issue: the value or extent of damage wasn't independently verified before repairs started. Once a vehicle has been repaired, reconstructing the original damage is difficult — and insurers know it. An assessor on the scene, or within hours, protects the figure you're entitled to."
      },
      {
        type: 'p',
        text: "Links dispatches certified assessors within 2–24 hours of a request, including mobile assessment if you can't bring the vehicle in. The goal isn't just a number — it's a record that holds up if your claim is questioned."
      }
    ]
  },
  {
    slug: 'gps-tagged-digital-reports',
    title: 'Why GPS-Tagged Digital Reports Are Changing Valuation in Kenya',
    category: 'Technology',
    dateLabel: 'June 2, 2026',
    readTime: '5 min read',
    excerpt:
      "Paper reports can be copied, backdated, or disputed. Here's how geo-tagged, timestamped digital valuations are closing that loophole for banks and insurers.",
    image: '/images/ai/digital-valuation-tools.jpg',
    imageAlt: 'Valuer using in-car digital tools to capture vehicle data',
    body: [
      {
        type: 'p',
        text: "For years, a vehicle valuation in Kenya meant a paper certificate — a signature, a stamp, and a figure that was difficult to verify once it left the assessor's hands. That's changing fast, and it's changing because the cost of a disputed report has become too high for banks, insurers, and SACCOs to ignore."
      },
      { type: 'h3', text: 'The Problem With Paper' },
      {
        type: 'p',
        text: "A paper report can be backdated, photocopied, or — in rare but real cases — altered after the fact. There's no way to confirm exactly when or where the inspection happened, which makes it vulnerable to dispute long after the transaction is done. For a bank financing a loan against a vehicle, or an insurer paying out a six-figure claim, that uncertainty is expensive."
      },
      { type: 'h3', text: 'What A Digital, GPS-Tagged Report Actually Proves' },
      {
        type: 'p',
        text: "Every Links inspection is logged digitally, with the assessor's location and timestamp embedded directly in the report — three things any financial institution can verify instantly:"
      },
      {
        type: 'ul',
        items: [
          '<b>Where</b> the inspection happened — confirming the vehicle was physically present at the stated branch or location.',
          '<b>When</b> it happened — removing any ambiguity about backdating.',
          '<b>Who</b> conducted it — tying the report to a specific certified assessor, not just a company stamp.'
        ]
      },
      { type: 'h3', text: 'Why This Matters Beyond Convenience' },
      {
        type: 'p',
        text: "A digital trail doesn't just speed up administration — it changes the legal weight of the document. Court reports and insurance disputes increasingly hinge on whether a valuation can be independently corroborated. A GPS-tagged, time-stamped report answers that question before it's even asked."
      },
      {
        type: 'p',
        text: "It's also faster. Digital capture means our quality control team can review and counter-sign a report the same day it's submitted from the field — a major reason Links can guarantee 2–24 hour delivery without compromising the dual-review process every report goes through."
      },
      {
        type: 'p',
        text: "<b>If you're financing, insuring, or settling a claim on a vehicle</b>, ask whether the valuation report includes a verifiable digital timestamp and location. If it doesn't, you're relying on trust alone — and in a six- or seven-figure transaction, that's a gap worth closing."
      }
    ]
  },
  {
    slug: 'inside-a-links-inspection',
    title: 'Inside a Links Inspection: What We Actually Check',
    category: 'Quality Control',
    dateLabel: 'May 26, 2026',
    readTime: '5 min read',
    excerpt:
      "From chassis numbers to paint-depth gauges — a look at the multi-point process behind every certificate, and why a second reviewer signs off on each one.",
    image: '/images/ai/quality-inspection.jpg',
    imageAlt: 'Assessor inspecting a vehicle tyre during a valuation',
    body: [
      {
        type: 'p',
        text: "\"Valuation\" sounds like a single number, but it's the output of a fairly detailed physical process. Here's what actually happens during a Links inspection, and why the detail matters."
      },
      {
        type: 'ol',
        items: [
          '<b>Identity verification.</b> Chassis number, engine number, and registration are cross-checked against the logbook and, where relevant, NTSA records — the step that catches cloned plates and mismatched documents before they become someone else\'s problem.',
          '<b>Exterior condition.</b> Panel alignment, paint depth (to detect prior respray or accident repair), tyre wear, glass condition, and lighting. A respray that looks perfect to the eye often shows up clearly on a paint-depth gauge.',
          '<b>Mechanical and structural check.</b> Engine condition, suspension, brakes, and — critically for accident history — chassis and frame alignment. This is where hidden accident damage usually surfaces.',
          '<b>Interior and electronics.</b> Upholstery condition, dashboard electronics, infotainment, and safety features such as airbags and ABS where fitted.',
          "<b>Market comparison.</b> The vehicle's condition is benchmarked against current comparable sales data for that make, model, year, and mileage band — not a generic depreciation table.",
          '<b>Documentation and photography.</b> Every finding is photographed and logged against the digital report, with GPS and timestamp data attached.'
        ]
      },
      { type: 'h3', text: 'The Step Most Firms Skip: The Second Review' },
      {
        type: 'p',
        text: "Once the assessor submits findings, a senior valuer who was not on-site reviews the full report — photographs, data, and calculated figure — before it's released. This dual-review step is what gets Links to a 99.7% first-submission acceptance rate with banks and insurers: errors and inconsistencies get caught before the report ever reaches the client, not after a credit committee or claims desk flags it."
      },
      {
        type: 'p',
        text: "If you're selling, insuring, or using a vehicle as collateral, understanding what's actually being checked helps you prepare — clean the vehicle, gather service records, and fix anything that's a quick win before the inspection. A worn wiper blade is cheap; a flagged structural issue is not."
      }
    ]
  },
  {
    slug: 'speed-up-insurance-claims',
    title: "Insurance Claim Stuck? Here's How an Independent Valuation Speeds It Up",
    category: 'Insurance',
    dateLabel: 'May 19, 2026',
    readTime: '4 min read',
    excerpt:
      'Most claim delays come down to one thing: disputed value. An independently verified report removes the argument before it starts.',
    image: '/images/ai/accident-claim-assessment.jpg',
    imageAlt: 'Insurance agent reviewing a personal accident claim form',
    body: [
      {
        type: 'p',
        text: "If you've ever waited weeks on an insurance claim with no clear answer, there's a good chance the holdup has nothing to do with paperwork volume — it's a disagreement over value."
      },
      { type: 'h3', text: 'The Most Common Reason Claims Stall' },
      {
        type: 'p',
        text: "An insurer's internal assessment and a claimant's expectation rarely match exactly, especially after an accident. Without an independent, evidence-based figure that both sides recognise, the claim sits in a back-and-forth that can run for weeks while the vehicle stays off the road."
      },
      { type: 'h3', text: 'What An Independent Valuation Actually Changes' },
      {
        type: 'p',
        text: "A report from a firm with no financial stake in the outcome — licensed by M.A.A.K and regulated by I.R.A, in Links' case, — gives the claims desk a number it can act on without further negotiation. It isn't our job to argue for a higher or lower figure; it's our job to document what the vehicle is actually worth, supported by market data, photographs, and a verifiable inspection trail."
      },
      {
        type: 'p',
        text: "This works in both directions. Insurers move faster because they're not negotiating with the claimant directly. Claimants get paid faster because the figure isn't being challenged on the way through."
      },
      { type: 'h3', text: 'Three Things That Speed Up Your Specific Claim' },
      {
        type: 'ul',
        items: [
          "<b>Submit the independent report early</b> — don't wait for the insurer to commission their own; a report submitted alongside your initial claim removes a full round of back-and-forth.",
          '<b>Make sure the report is current</b> — a valuation from before the accident describes a different vehicle. Post-incident reports need to reflect the damage as it stands.',
          '<b>Check the assessor is recognised by your insurer</b> — most major Kenyan insurers already work with Links directly, which removes any question over whether the report will be accepted.'
        ]
      },
      {
        type: 'p',
        text: "A claim that's properly documented from day one rarely stalls. Most of the delay we see in the market isn't due to insurer reluctance — it's due to a missing, late, or disputed valuation."
      }
    ]
  },
  {
    slug: 'pre-purchase-inspection-used-car',
    title: "Buying a Used Car in Kenya? Don't Skip This One Step",
    category: 'Pre-Purchase',
    dateLabel: 'May 12, 2026',
    readTime: '4 min read',
    excerpt:
      "A small inspection fee has saved Links clients millions in hidden accident damage, flood history, and odometer fraud. Here's what it covers.",
    image: '/images/ai/client-consultation.jpg',
    imageAlt: 'Client consulting with a dealership representative beside a car',
    body: [
      {
        type: 'p',
        text: "Kenya's used car market moves fast, and a good deal can disappear within hours of being listed. That pressure is exactly why so many buyers skip the one step that protects them most: an independent pre-purchase inspection."
      },
      { type: 'h3', text: 'What A Pre-Purchase Inspection Actually Catches' },
      {
        type: 'p',
        text: 'A vehicle that looks clean in photos and drives well on a short test can still be hiding expensive problems. The inspections that turn up the most costly surprises are usually checking for:'
      },
      {
        type: 'ul',
        items: [
          "<b>Prior accident damage</b> — repaired structural damage doesn't always show on the surface, but it shows on a frame and paint-depth check.",
          '<b>Odometer tampering</b> — a mismatch between mileage, wear patterns, and service history is one of the most common forms of used-car fraud in this market.',
          '<b>Flood or water damage</b> — especially relevant for vehicles previously based in low-lying or coastal areas; corrosion in non-obvious places is a strong indicator.',
          '<b>Outstanding finance or disputed ownership</b> — logbook and chassis verification can flag issues before money changes hands, not after.'
        ]
      },
      { type: 'h3', text: 'The Cost Math Is Simple' },
      {
        type: 'p',
        text: "An independent inspection is a small, fixed cost relative to the price of the vehicle. Against that, the typical cost of discovering hidden accident repair or engine issues after purchase runs into hundreds of thousands of shillings — sometimes more than the car is worth fixing. We've seen clients walk away from \"good deals\" after an inspection flagged exactly this kind of issue, saving them from a purchase that would have cost far more long-term."
      },
      { type: 'h3', text: 'How It Works With Links' },
      {
        type: 'p',
        text: "You don't need to own the vehicle to request an inspection — sellers and buyers both use this service, and a Links assessor can meet you at the vehicle's location, including dealership forecourts and private sales. Reports are delivered within 2–24 hours, so it doesn't have to slow down a fast-moving deal."
      },
      {
        type: 'p',
        text: 'If a seller is reluctant to allow an independent inspection before sale, treat that as information in itself.'
      }
    ]
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
