import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Users, CheckCircle2, Landmark, Truck, Scale, AlertTriangle, Search, ClipboardCheck, MapPin, FileCheck2, Info } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import Slider, { type SlideData } from '@/components/Slider';
import CardSlider from '@/components/CardSlider';
import LogoTicker from '@/components/LogoTicker';
import LogoCard from '@/components/LogoCard';
import { partnerGroups, LOGO_MAP, TICKER_LOGOS } from '@/lib/partners';
import { blogPosts } from '@/lib/blogPosts';

export const metadata: Metadata = {
  title: "Links Valuers — Kenya's Trusted Vehicle Valuation Authority",
  description:
    "Kenya's leading vehicle valuation firm. Licensed by M.A.A.K and regulated by I.R.A. 1M+ valuations completed. 99.7% acceptance rate. 2hr-24hr delivery. Book today.",
  alternates: { canonical: '/' },
  openGraph: {
    title: "Links Valuers — Kenya's Trusted Vehicle Valuation Authority",
    description: 'Licensed by M.A.A.K, regulated by I.R.A. 1M+ valuations, 99.7% acceptance, 2hr-24hr delivery across Kenya.',
    type: 'website'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Links Valuers & Assessors Ltd',
  url: 'https://www.linksvaluers.com',
  telephone: '+254722388260',
  email: 'info@linksvaluers.com',
  image: 'https://www.linksvaluers.com/images/IMG-20260610-WA0054.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Pamstech House, 3rd Floor, Woodvale Groove, Westlands',
    addressLocality: 'Nairobi',
    addressCountry: 'KE'
  },
  geo: { '@type': 'GeoCoordinates', latitude: -1.2635, longitude: 36.806 },
  openingHours: ['Mo 07:30-17:00', 'Tu-Fr 08:00-17:00', 'Sa-Su 09:00-13:00'],
  priceRange: 'KES'
};

const PROMO_SLIDES: SlideData[] = [
  {
    image: '/images/ai/deal-sealed.jpg',
    alt: 'Handshake sealing a vehicle finance deal in a dealership showroom',
    eyebrow: "Trusted by Kenya's Lenders",
    title: 'Every Deal Deserves a Number You Can Trust',
    text: 'Banks, SACCOs, and microfinance institutions rely on Links for collateral valuations that hold up at every stage of the loan cycle.',
    cta: { label: 'Book a Valuation', href: '/book-valuation' }
  },
  {
    image: '/images/ai/fleet-owner-confidence.jpg',
    alt: 'Confident businessman beside his vehicle in a dealership showroom',
    eyebrow: 'Fleet & Corporate Clients',
    title: 'Confidence Before Every Vehicle Decision™',
    text: 'From single vehicles to 200-unit fleets, our valuers deliver consistent, defensible reports your finance team can rely on.',
    cta: { label: 'View Fleet Valuation', href: '/services#fleet-valuation' }
  },
  {
    image: '/images/ai/new-car-joy.jpg',
    alt: 'Woman smiling as she steps into her newly purchased car',
    eyebrow: 'Speed Without Compromise',
    title: 'From Inspection to Approval — in Hours, Not Days',
    text: 'Our 2–24 hour turnaround keeps financing, insurance, and sales moving — without cutting corners on accuracy.',
    cta: { label: 'Book a Valuation', href: '/book-valuation' }
  },
  {
    image: '/images/ai/vehicle-handover.jpg',
    alt: 'Dealership representative holding keys during a vehicle handover',
    eyebrow: 'Nationwide Coverage',
    title: '25 Branches. One Trusted Standard.',
    text: 'Wherever your vehicle is in Kenya, a certified Links assessor is never far away.',
    cta: { label: 'Find a Branch', href: '/branches' }
  },
  {
    image: '/images/ai/showroom-consultation.jpg',
    alt: 'Client consultation taking place inside a vehicle showroom',
    eyebrow: 'Independently Verified',
    title: 'Every Valuation, Backed by Evidence',
    text: 'Licensed by M.A.A.K and regulated by I.R.A, every Links report is built on verifiable market data — not opinion.',
    cta: { label: 'About Links', href: '/about' }
  }
];

const SERVICES = [
  { icon: ShieldCheck, title: 'Insurance Valuation', text: 'Pre-insurance and claim settlement valuations that insurers trust for fair, defensible outcomes.', href: '/services#insurance-valuation' },
  { icon: Landmark, title: 'Bank Valuation', text: 'Precise loan collateral assessment and portfolio risk management for financial institutions.', href: '/services#bank-valuation' },
  { icon: Truck, title: 'Fleet Valuation', text: 'Comprehensive fleet assessment for asset management, disposal, and insurance coverage.', href: '/services#fleet-valuation' },
  { icon: Scale, title: 'Court Reports', text: 'Expert reports admissible in court, prepared with the rigour legal professionals demand.', href: '/services#court-reports' },
  { icon: AlertTriangle, title: 'Accident Assessment', text: 'Thorough post-accident damage assessment and repair cost estimation for claims.', href: '/services#accident-assessment' },
  { icon: Search, title: 'Pre-Purchase Inspection', text: 'Detailed condition reports that protect buyers from hidden defects and overvaluation.', href: '/services#pre-purchase-inspection' }
];

const TIMELINE = [
  { n: '01', title: 'Request', text: 'Client submits valuation request via phone, email, or online portal.' },
  { n: '02', title: 'Inspection', text: 'Certified assessor conducts a thorough physical vehicle examination.' },
  { n: '03', title: 'Research', text: 'Market data and comparable vehicle sales analysed in depth.' },
  { n: '04', title: 'Analysis', text: 'Valuation calculated using standardised industry methodology.' },
  { n: '05', title: 'Quality Check', text: 'Senior valuer reviews report for accuracy and compliance.' },
  { n: '06', title: 'Report', text: 'Certified report delivered digitally within 2–24 hours.' }
];

const PILLARS = [
  { icon: ShieldCheck, title: 'Licensed & Regulated', text: 'Licensed by M.A.A.K and regulated by I.R.A — the only firm of our scale in Kenya with both.' },
  { icon: ClipboardCheck, title: 'Independently Verified', text: 'Our valuations are based on market data, not opinion. Every figure is traceable to verifiable evidence.' },
  { icon: MapPin, title: 'Nationwide Coverage', text: '25 branches across Kenya means we inspect vehicles wherever they are — no location is too remote.' },
  { icon: FileCheck2, title: 'Dual-Review Quality Control', text: 'Every report checked by a second senior valuer before delivery — accuracy institutions stake decisions on.' }
];

const COMPARISON = [
  ['Turnaround Time', '3–7 days', '2–24 hours'],
  ['Branch Coverage', 'Major cities only', 'Nationwide – 25 branches'],
  ['Licensing', 'Single license', 'M.A.A.K + I.R.A dual'],
  ['Technology', 'Manual processes', 'Digital, GPS-tagged reports'],
  ['Quality Control', 'Single review', 'Dual-review system'],
  ['Acceptance Rate', 'Sometimes challenged', '99.7% first-time acceptance'],
  ['Track Record', 'Limited', '14+ years, 1M+ valuations'],
  ['Partner Institutions', 'Few', '100+ insurance & finance']
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero">
        <div className="hero__bg">
          <Image src="/images/IMG-20260610-WA0054.jpg" alt="Certified Links assessor inspecting a vehicle engine bay during a valuation" fill style={{ objectFit: 'cover' }} priority />
        </div>
        <div className="container hero__inner">
          <span className="eyebrow">Kenya&rsquo;s Trusted Vehicle Valuation Authority</span>
          <h1 className="display">Confidence Before Every Vehicle <span className="accent-green">Decision™</span></h1>
          <p className="hero__lead">
            For over 14 years, Kenya&rsquo;s leading banks, insurers, and corporations have relied on Links for
            valuations that stand up to scrutiny — in the boardroom and in court.
          </p>
          <div className="hero__cta">
            <Link className="btn btn--primary" href="/book-valuation">Book a Valuation</Link>
            <Link className="btn btn--ghost" href="/services">View Our Services</Link>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div className="container trust-strip__inner">
          <div className="trust-item"><ShieldCheck className="ico" /> Licensed by M.A.A.K</div>
          <div className="trust-item"><ShieldCheck className="ico" /> Licensed by I.R.A</div>
          <div className="trust-item"><Users className="ico" /> 100+ Insurance &amp; Finance Partners</div>
          <div className="trust-item"><CheckCircle2 className="ico" /> 99.7% First-Submission Acceptance</div>
        </div>
      </div>

      <LogoTicker logos={TICKER_LOGOS} />

      <section className="section bg-dark">
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">By the Numbers</span>
            <h2 className="section-title">The Scale of Trust Speaks for Itself</h2>
          </Reveal>
          <Reveal className="stats-grid">
            <>
              <div className="stat"><div className="stat__num"><Counter value={1} suffix="M+" /></div><div className="stat__label">Valuations Completed</div><div className="stat__sub">Across Kenya since 2012</div></div>
              <div className="stat"><div className="stat__num"><Counter value={99.7} suffix="%" /></div><div className="stat__label">Acceptance Rate</div><div className="stat__sub">Accepted on first submission by institutions</div></div>
              <div className="stat"><div className="stat__num"><Counter value={25} suffix="+" /></div><div className="stat__label">Branches Nationwide</div><div className="stat__sub">Across all 47 counties</div></div>
              <div className="stat"><div className="stat__num">2–24<span style={{ fontSize: '1.4rem' }}>hrs</span></div><div className="stat__label">Delivery Time</div><div className="stat__sub">Industry-leading turnaround, guaranteed</div></div>
              <div className="stat"><div className="stat__num"><Counter value={100} suffix="+" /></div><div className="stat__label">Finance Partners</div><div className="stat__sub">Banks, insurers, SACCOs &amp; MFBs trust Links</div></div>
              <div className="stat"><div className="stat__num"><Counter value={14} suffix="+" /></div><div className="stat__label">Years of Excellence</div><div className="stat__sub">14 years of leadership in vehicle valuation</div></div>
            </>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <Slider slides={PROMO_SLIDES} variant="promo" />
          </Reveal>
        </div>
      </section>

      <section className="section bg-dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">Valuation Solutions for Every Vehicle Decision</h2>
          </Reveal>
          <Reveal className="cards-3">
            <>
              {SERVICES.map((svc) => {
                const Icon = svc.icon;
                return (
                  <Link className="svc-card" href={svc.href} key={svc.title}>
                    <div className="svc-card__icon"><Icon className="ico" /></div>
                    <h3>{svc.title}</h3>
                    <p>{svc.text}</p>
                    <span className="svc-card__more">Learn more →</span>
                  </Link>
                );
              })}
            </>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--dark-2)' }}>
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">How It Works</span>
            <h2 className="section-title">The Valuation Journey</h2>
          </Reveal>
          <Reveal className="timeline">
            <>
              {TIMELINE.map((step) => (
                <div className="tstep" key={step.n}>
                  <div className="tstep__num">{step.n}</div>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              ))}
            </>
          </Reveal>
          <Reveal className="callout">
            <>
              <Info className="ico" />
              <p>
                Our dual-review quality control system means every report is checked by a second senior valuer before
                delivery — ensuring accuracy that financial institutions can stake their decisions on.
              </p>
            </>
          </Reveal>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Why Choose Links</span>
            <h2 className="section-title">Every Financial Decision Deserves a Valuation You Can Trust</h2>
          </Reveal>
          <div className="why-grid">
            <Reveal>
              <>
                {PILLARS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div className="pillar" key={p.title}>
                      <div className="pillar__icon"><Icon className="ico" /></div>
                      <div><h4>{p.title}</h4><p>{p.text}</p></div>
                    </div>
                  );
                })}
              </>
            </Reveal>
            <Reveal>
              <table className="cmp-table">
                <thead><tr><th>Feature</th><th>Others</th><th>Links Valuers</th></tr></thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td>{row[1]}</td>
                      <td className="col-links">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container">
          <Reveal className="quote-block">
            <>
              <span className="eyebrow">Trusted By</span>
              <div className="qmark">&ldquo;</div>
              <blockquote>
                Links has been our trusted valuation partner for over five years. Their reports are consistently
                accurate, delivered on time, and accepted without question by our credit committee.
              </blockquote>
              <cite><b>Wanjiku Kamau</b> — Head of Asset Finance, Leading Kenyan Bank</cite>
            </>
          </Reveal>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">Trusted By</span>
            <h2 className="section-title">Kenya&rsquo;s Leading Institutions</h2>
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
                    <div className="logo-grid">
                      {group.featured.map((p) => (
                        <LogoCard key={p} name={p} src={LOGO_MAP[p]} colorClass={colorClass} />
                      ))}
                    </div>
                  </div>
                );
              })}
              <div style={{ marginTop: 36, textAlign: 'center' }}>
                <Link className="btn btn--ghost" href="/clients">View All 100+ Partners</Link>
              </div>
            </>
          </Reveal>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">Links Insights</span>
            <h2 className="section-title">Straight Talk on Vehicle Valuation</h2>
            <p className="lead" style={{ margin: '14px auto 0' }}>
              Practical guidance from the team that values over a million vehicles a year — for owners, fleet
              managers, and finance professionals across Kenya.
            </p>
          </Reveal>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
            <div className="avatar-badge">
              <div className="avatar-badge__img">
                <Image src="/images/avatar/links-chatbot.png" width={56} height={56} alt="Links Valuation Assistant avatar" />
              </div>
              <span className="avatar-badge__text"><b>Curated by the Links Team</b>Practical, field-tested advice — not theory.</span>
            </div>
          </div>
          <Reveal>
            <CardSlider posts={blogPosts} />
          </Reveal>
          <div style={{ marginTop: 32, textAlign: 'center' }}>
            <Link className="btn btn--outline-dark" href="/blog">Read More Insights</Link>
          </div>
        </div>
      </section>

      <section className="section bg-dark cta-close" style={{ background: 'var(--dark-2)' }}>
        <Reveal className="container">
          <>
            <h2 className="section-title">Start With a Valuation You Can Trust</h2>
            <p>
              Whether you&rsquo;re financing, insuring, buying, or managing a fleet — Links delivers independent
              valuations trusted by Kenya&rsquo;s top institutions.
            </p>
            <div className="cta-close__btns">
              <Link className="btn btn--primary" href="/book-valuation">Book a Valuation</Link>
              <Link className="btn btn--ghost" href="/contact">Contact Our Team</Link>
            </div>
            <p className="cta-close__contact">
              Phone: <a href="tel:+254722388260">0722 388 260</a> / <a href="tel:+254708412668">0708 412 668</a>
              &nbsp;|&nbsp; Email: <a href="mailto:info@linksvaluers.com">info@linksvaluers.com</a> &nbsp;|&nbsp; Office:
              Pamstech House, 3rd Floor, Westlands
            </p>
          </>
        </Reveal>
      </section>
    </>
  );
}
