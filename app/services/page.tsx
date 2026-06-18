import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Our Services — Vehicle Valuation, Inspection & Assessment',
  description:
    'Complete vehicle valuation services: insurance, bank collateral, fleet assessment, court reports, accident assessment, and pre-purchase inspections across Kenya.',
  alternates: { canonical: '/services' }
};

const SERVICES = [
  {
    id: 'insurance-valuation',
    title: 'Insurance Valuation',
    tag: 'Pre-insurance and claim settlement valuations insurers trust.',
    paragraphs: [
      "Before a vehicle is insured, its true market value must be independently established. Links provides pre-insurance valuations that give underwriters the accurate, defensible figures they need — and insurers' claims departments the settlement assessments they can action without dispute.",
      "We are accepted by 100+ insurance companies across Kenya. Our reports are structured to meet I.R.A compliance standards and include GPS-verified inspection records, high-resolution photo documentation, and market comparable data traceable to source."
    ],
    ctaLabel: 'Request an Insurance Valuation',
    type: 'insurance',
    image: '/images/IMG-20260610-WA0054.jpg',
    imageAlt: 'Links assessor examining a vehicle engine bay for an insurance valuation'
  },
  {
    id: 'bank-valuation',
    title: 'Bank Valuation',
    tag: 'Precise loan collateral assessment for financial institutions.',
    paragraphs: [
      "When a bank extends a vehicle-secured loan, the quality of the collateral valuation determines the quality of the lending decision. Links provides loan collateral assessments and portfolio revaluations that Kenya's top banks rely on — from individual auto loans to multi-county fleet portfolios.",
      'Our bank reports include current market value, forced sale value, and depreciation projections in a format aligned with CBK loan classification guidelines. Our 2–24 hour turnaround means lending decisions are never held up waiting for a valuation.'
    ],
    ctaLabel: 'Request a Bank Valuation',
    type: 'bank',
    image: '/images/IMG-20260610-WA0091.jpg',
    imageAlt: 'A Links director reviewing valuation reports at the office'
  },
  {
    id: 'fleet-valuation',
    title: 'Fleet Valuation',
    tag: 'Comprehensive fleet assessment for organisations managing vehicle assets.',
    paragraphs: [
      'Managing a fleet of vehicles means managing significant capital assets. Whether you need an annual portfolio revaluation for insurance renewal, a disposal assessment before decommissioning vehicles, or a compliance valuation for regulatory reporting — Links deploys multiple assessors simultaneously to deliver consistent, accurate results on your schedule.',
      'We have conducted fleet valuations ranging from 10-vehicle SME fleets to 340-vehicle nationwide bank portfolios. Our GPS-tagged reporting system ensures every vehicle in your fleet is traceable and every valuation is auditable.'
    ],
    ctaLabel: 'Request a Fleet Valuation',
    type: 'fleet',
    image: '/images/IMG-20260610-WA0047.jpg',
    imageAlt: 'The Links team of certified field assessors'
  },
  {
    id: 'court-reports',
    title: 'Court Reports',
    tag: 'Expert reports prepared for legal proceedings and dispute resolution.',
    paragraphs: [
      'When a vehicle valuation becomes the subject of legal dispute — in insurance claims litigation, loan default proceedings, or accident liability cases — the quality of the expert report is decisive. Links produces court-admissible expert valuation reports prepared with the rigour and formatting that courts and legal counsel require.',
      "Our principal valuers are available to provide expert witness testimony when required. Every court report includes a methodology statement, full market evidence, and the assessor's certified credentials."
    ],
    ctaLabel: 'Request a Court Report',
    type: 'court',
    image: '/images/IMG-20260610-WA0073.jpg',
    imageAlt: 'A Links valuer preparing a certified report at a desk'
  },
  {
    id: 'accident-assessment',
    title: 'Accident Assessment',
    tag: 'Thorough post-accident damage assessment and repair cost estimation.',
    paragraphs: [
      'After a vehicle accident, the speed and accuracy of the damage assessment determines how quickly a claim is resolved. Links provides rapid-response accident assessments for insurers and vehicle owners — documenting damage, estimating repair costs, and assessing write-off threshold where relevant.',
      'Our assessors are deployed within 24 hours of request across all 25 branch areas. GPS-tagged photography documents the exact location and condition of the vehicle at the time of inspection.'
    ],
    ctaLabel: 'Request an Accident Assessment',
    type: 'accident',
    image: '/images/IMG-20260610-WA0056.jpg',
    imageAlt: 'A Links assessor documenting damage on an accident vehicle'
  },
  {
    id: 'pre-purchase-inspection',
    title: 'Pre-Purchase Inspection',
    tag: 'Protect yourself from hidden defects before you buy.',
    paragraphs: [
      "Buying a used vehicle in Kenya without an independent inspection is a risk no informed buyer should take. Links' pre-purchase inspection gives you a comprehensive, unbiased condition report — covering mechanical condition, body integrity, mileage verification, and current market value — before you commit to a purchase.",
      "Our pre-purchase reports are delivered within 2–24 hours and include a clear summary verdict: fair value, overpriced, or cause for caution. We tell you what you're actually buying."
    ],
    ctaLabel: 'Book a Pre-Purchase Inspection',
    type: 'pre-purchase',
    image: '/images/ai/digital-valuation-tools.jpg',
    imageAlt: 'A Links professional reviewing a digital valuation report'
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <Image src="/images/IMG-20260610-WA0163.jpg" alt="A certified Links assessor inspecting a vehicle during a valuation" fill style={{ objectFit: 'cover' }} priority />
        </div>
        <div className="container page-hero__inner">
          <span className="eyebrow">What We Do</span>
          <h1 className="display">Valuation Solutions for Every Vehicle Decision</h1>
          <p className="lead">
            From a single insurance pre-assessment to a 300-vehicle fleet revaluation — Links has the certified
            expertise, the nationwide reach, and the technology to deliver a report you can rely on. Every time.
          </p>
        </div>
      </section>

      {SERVICES.map((svc) => (
        <section className="svc-detail" id={svc.id} key={svc.id}>
          <div className="container svc-detail__grid">
            <Reveal>
              <h2>{svc.title}</h2>
              <div className="svc-tag">{svc.tag}</div>
              {svc.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <Link className="btn btn--primary" href={`/book-valuation?type=${svc.type}`}>
                {svc.ctaLabel}
              </Link>
            </Reveal>
            <Reveal className="svc-detail__media">
              <Image src={svc.image} alt={svc.imageAlt} width={640} height={480} style={{ width: '100%', height: 'auto' }} />
            </Reveal>
          </div>
        </section>
      ))}

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
