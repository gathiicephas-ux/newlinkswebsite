import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import LogoCard from '@/components/LogoCard';
import { partnerGroups, DOMAIN_MAP } from '@/lib/partners';

export const metadata: Metadata = {
  title: "Our Clients — Trusted by Kenya's Leading Banks, Insurers & Corporates",
  description:
    "100+ insurance companies, banks, SACCOs and microfinance institutions trust Links Valuers. See who we work with and why they choose us.",
  alternates: { canonical: '/clients' }
};

const TESTIMONIALS = [
  {
    quote:
      'Links has been our trusted valuation partner for over five years. Their reports are consistently accurate, delivered on time, and accepted without question by our credit committee.',
    name: 'Wanjiku Kamau',
    role: 'Head of Asset Finance, Leading Kenyan Bank'
  },
  {
    quote: 'I like the way the valuer was very welcoming and humble. I mostly loved the way they handled my car. I am very impressed.',
    name: 'Advocate Nyaga',
    role: 'Individual Client'
  },
  {
    quote: 'Links delivered under extreme pressure and ahead of schedule. Their professionalism under tight deadlines is unmatched in the Kenyan market.',
    name: 'Chief Risk Officer',
    role: 'Top-Tier Kenyan Bank — Fleet Valuation Project'
  }
];

export default function ClientsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <Image src="/images/IMG-20260610-WA0111.jpg" alt="The Links Valuers team trusted by Kenya's leading institutions" fill style={{ objectFit: 'cover' }} priority />
        </div>
        <div className="container page-hero__inner">
          <span className="eyebrow">Trusted By</span>
          <h1 className="display">Kenya&rsquo;s Leading Institutions Trust Links</h1>
          <p className="lead">
            Over 100 insurance companies, banks, SACCOs, and microfinance institutions have chosen Links Valuers as
            their preferred vehicle valuation partner. This is not coincidence — it reflects a decade of consistent
            accuracy, reliability, and the institutional credibility that only a dual-licensed firm can deliver.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">Our Clients</span>
            <h2 className="section-title">Who We Work With</h2>
          </Reveal>
          <Reveal>
            <>
              {partnerGroups.map((group) => {
                const colorClass = group.pillClass === 'pill--orange' ? 'logo-grid-init--orange'
                  : group.pillClass === 'pill--green'  ? 'logo-grid-init--green'
                  : group.pillClass === 'pill--blue'   ? 'logo-grid-init--blue'
                  : 'logo-grid-init--purple';
                return (
                  <div className="client-group" key={group.key}>
                    <h4>{group.label}</h4>
                    <div className="logo-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
                      {group.partners.map((p) => (
                        <LogoCard key={p} name={p} domain={DOMAIN_MAP[p]} colorClass={colorClass} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          </Reveal>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">In Their Words</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </Reveal>
          <Reveal className="testi-grid">
            <>
              {TESTIMONIALS.map((t) => (
                <div className="testi-card" key={t.name}>
                  <div className="stars">★★★★★</div>
                  <p>&ldquo;{t.quote}&rdquo;</p>
                  <cite><b>{t.name}</b>{t.role}</cite>
                </div>
              ))}
            </>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Case Study</span>
            <h2 className="section-title">Nationwide Fleet Valuation for a Leading Kenyan Bank</h2>
          </Reveal>
          <Reveal className="case">
            <>
              <div className="case__body">
                <h4>The Challenge</h4>
                <p>
                  A top-tier Kenyan commercial bank needed to revalue its entire motor vehicle loan portfolio of 340
                  vehicles across 12 counties within 30 days — a regulatory compliance requirement with zero margin for
                  error.
                </p>
                <h4>Our Approach</h4>
                <p>
                  Links deployed 18 certified assessors across all 12 counties simultaneously, using GPS-tagged digital
                  inspection tools and our proprietary market intelligence database to ensure consistency and accuracy
                  across every valuation.
                </p>
                <h4>The Outcome</h4>
                <p>
                  All 340 vehicles were inspected and valued within 22 days — 8 days ahead of the regulatory deadline.
                  The bank&rsquo;s compliance team accepted every report on first submission. The portfolio revaluation
                  also revealed KES 47M in previously unaccounted depreciation — a finding that materially improved the
                  bank&rsquo;s risk position.
                </p>
              </div>
              <div className="case__metrics">
                <div className="metric"><div className="v">340</div><div className="k">Vehicles Inspected</div></div>
                <div className="metric"><div className="v">22 days</div><div className="k">To Complete — 8 days ahead of deadline</div></div>
                <div className="metric"><div className="v">12</div><div className="k">Counties Covered</div></div>
                <div className="metric"><div className="v">100%</div><div className="k">First-Submission Acceptance</div></div>
                <div className="metric"><div className="v">KES 47M</div><div className="k">Hidden Depreciation Identified</div></div>
              </div>
            </>
          </Reveal>
        </div>
      </section>

      <section className="section bg-dark cta-close">
        <Reveal className="container">
          <h2 className="section-title">Start With a Valuation You Can Trust</h2>
          <p>
            Whether you&rsquo;re financing, insuring, buying, or managing a fleet — Links delivers independent
            valuations trusted by Kenya&rsquo;s top institutions.
          </p>
          <div className="cta-close__btns">
            <Link className="btn btn--primary" href="/book-valuation">Book a Valuation</Link>
            <Link className="btn btn--ghost" href="/contact">Contact Our Team</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
