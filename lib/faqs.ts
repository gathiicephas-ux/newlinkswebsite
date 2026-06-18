import type { FaqCategory } from '@/components/FaqAccordion';

export const faqCategories: FaqCategory[] = [
  {
    key: 'general',
    label: 'General',
    items: [
      {
        q: 'What is a vehicle valuation and why do I need one?',
        a: "A vehicle valuation is a certified assessment of your vehicle's current market value, conducted by a licensed assessor. It is required for insurance underwriting, bank loan applications, fleet management, legal proceedings, and pre-purchase decisions. An independent valuation protects both buyer and seller from mispricing."
      },
      {
        q: 'How long does a Links valuation take?',
        a: 'The physical inspection takes 1–2 hours depending on the vehicle type. The full report — including market research, analysis, and quality review — is delivered within 2–24 hours of inspection.'
      },
      {
        q: 'What documents do I need for a valuation?',
        a: "You will need: the vehicle logbook, your national ID or passport, and the current insurance certificate (for insurance valuations). For bank valuations, the lending institution may have additional documentation requirements — your loan officer will advise."
      },
      {
        q: 'Can you come to my location for the inspection?',
        a: 'Yes. Links has 25 branches across Kenya and 50+ mobile assessors who can travel to your location. Simply book online, by phone, or by email and we will arrange the inspection at your preferred location.'
      },
      {
        q: 'Is your valuation accepted by all banks and insurance companies?',
        a: 'Links reports are accepted by 100+ insurance and financial institutions across Kenya, with a 99.7% first-submission acceptance rate. We are licensed by both M.A.A.K and I.R.A, which means our reports carry authority across both insurance and banking contexts.'
      }
    ]
  },
  {
    key: 'insurance',
    label: 'Insurance',
    items: [
      {
        q: 'Why does my insurer require a valuation before issuing a policy?',
        a: "Insurers require an independent valuation to establish the agreed value of your vehicle — the figure used to settle a total-loss claim. Without a current valuation, there is often a dispute between the insurer's market value estimate and what the policyholder believes their vehicle is worth. A Links report eliminates that dispute."
      },
      {
        q: 'How often should I get a vehicle valuation for insurance purposes?',
        a: 'Ideally at every policy renewal — or at a minimum every 2 years. Vehicle values fluctuate with market conditions, import duty changes, and exchange rate movements. An outdated valuation may leave you underinsured.'
      },
      {
        q: 'Can Links help with accident damage assessment for a claim?',
        a: 'Yes. Our accident assessment service provides rapid post-accident damage documentation and repair cost estimation specifically designed for insurance claim processing. We are deployed within 24 hours of request.'
      }
    ]
  },
  {
    key: 'bank',
    label: 'Bank / Finance',
    items: [
      {
        q: 'My bank has asked for a valuation before approving my car loan. How do I proceed?',
        a: 'Contact Links by phone (0722 388 260), email (info@linksvaluers.com), or book online at linksvaluers.com. Bring your logbook and ID to the inspection. We will deliver the certified report to you and your bank within 2–24 hours.'
      },
      {
        q: "Can Links value a vehicle I haven't purchased yet (for finance pre-approval)?",
        a: "Yes. We can conduct a pre-purchase inspection and valuation on a vehicle you are considering purchasing. This confirms the vehicle's condition and fair market value before you commit to financing."
      },
      {
        q: 'What is a "forced sale value" and why do banks ask for it?',
        a: 'Forced sale value (FSV) is the price a vehicle would realise if sold quickly under financial pressure — typically 70–80% of open market value. Banks use FSV to assess worst-case collateral recovery in the event of loan default. Links reports include both open market value and FSV where required.'
      }
    ]
  },
  {
    key: 'fleet',
    label: 'Fleet',
    items: [
      {
        q: 'How quickly can Links conduct a large fleet valuation?',
        a: 'This depends on fleet size and geographic spread. For our record engagement, Links assessed 340 vehicles across 12 counties in 22 days by deploying 18 assessors simultaneously. We will scope timelines and resource requirements based on your specific fleet.'
      },
      {
        q: 'Do you provide fleet valuation for SACCO or public sector fleets?',
        a: 'Yes. We have conducted valuations for SACCOs, county governments, parastatals, and national government agencies. Our reports meet public procurement and audit requirements.'
      }
    ]
  },
  {
    key: 'prepurchase',
    label: 'Pre-Purchase',
    items: [
      {
        q: 'I am buying a second-hand car. What does a Links pre-purchase inspection cover?',
        a: 'Our pre-purchase inspection covers: exterior body condition (dents, rust, paint quality), interior condition, mechanical assessment (engine, transmission, suspension), electrical systems, mileage verification, and current fair market value. You receive a clear summary verdict — fair value, overpriced, or cause for caution — so you can negotiate or walk away with confidence.'
      },
      {
        q: "Can you inspect a vehicle at a dealership or private seller's location?",
        a: 'Yes. We come to wherever the vehicle is. Simply provide the address when booking and a certified assessor will attend at the agreed time.'
      }
    ]
  }
];
