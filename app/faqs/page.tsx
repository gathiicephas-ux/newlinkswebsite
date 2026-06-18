import type { Metadata } from 'next';
import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';
import AvatarCallout from '@/components/AvatarCallout';
import { faqCategories } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'FAQs — Vehicle Valuation Questions Answered',
  description: "Everything you need to know about vehicle valuations in Kenya — for insurance, bank loans, fleet management, and more.",
  alternates: { canonical: '/faqs' }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a vehicle valuation and why do I need one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A vehicle valuation is a certified assessment of your vehicle's current market value, conducted by a licensed assessor. It is required for insurance underwriting, bank loan applications, fleet management, legal proceedings, and pre-purchase decisions. An independent valuation protects both buyer and seller from mispricing."
      }
    },
    {
      '@type': 'Question',
      name: 'How long does a Links valuation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The physical inspection takes 1–2 hours depending on the vehicle type. The full report — including market research, analysis, and quality review — is delivered within 2–24 hours of inspection.'
      }
    },
    {
      '@type': 'Question',
      name: 'What documents do I need for a valuation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You will need the vehicle logbook, your national ID or passport, and the current insurance certificate (for insurance valuations). For bank valuations, the lending institution may have additional documentation requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is your valuation accepted by all banks and insurance companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Links reports are accepted by 100+ insurance and financial institutions across Kenya, with a 99.7% first-submission acceptance rate. We are licensed by both M.A.A.K and I.R.A.'
      }
    }
  ]
};

export default function FaqsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-dark" style={{ paddingBlock: 64 }}>
        <div className="container">
          <span className="eyebrow">Help Centre</span>
          <h1 className="display" style={{ color: '#fff', fontSize: 'clamp(2.4rem,5vw,3.6rem)' }}>Frequently Asked Questions</h1>
          <p className="lead" style={{ marginTop: 14 }}>
            Everything you need to know about vehicle valuations in Kenya — for insurance, bank loans, fleet
            management, pre-purchase, and more.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <AvatarCallout>
            <b>Can&rsquo;t find what you&rsquo;re looking for?</b> Chat with our team directly on{' '}
            <a href="https://wa.me/254708412668" target="_blank" rel="noopener noreferrer">WhatsApp</a> — we usually
            reply within minutes.
          </AvatarCallout>
          <div style={{ marginTop: 36 }}>
            <FaqAccordion categories={faqCategories} />
          </div>
        </div>
      </section>

      <section className="section bg-dark cta-close" style={{ background: 'var(--dark-2)' }}>
        <div className="container">
          <h2 className="section-title">Still Have Questions?</h2>
          <p>Our team responds within 2 business hours. Call, email, or message us on WhatsApp — or book your valuation online now.</p>
          <div className="cta-close__btns">
            <Link className="btn btn--primary" href="/book-valuation">Book a Valuation</Link>
            <Link className="btn btn--ghost" href="/contact">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
