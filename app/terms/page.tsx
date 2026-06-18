import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing the use of the Links Valuers & Assessors Ltd website and valuation services.',
  alternates: { canonical: '/terms' }
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <span className="eyebrow">Legal</span>
        <h1 className="section-title">Terms of Service</h1>
        <p className="muted" style={{ marginTop: 8 }}>Last updated: June 2026</p>

        <p style={{ marginTop: 24 }}>
          These terms govern your use of this website and the booking of valuation services through it. By using
          this site or booking a service, you agree to these terms.
        </p>

        <h3 style={{ marginTop: 28, fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '1.25rem' }}>Our Services</h3>
        <p style={{ marginTop: 10 }}>
          Links Valuers &amp; Assessors Ltd is licensed by the Motor Assessors Association of Kenya (M.A.A.K) and the
          Insurance Regulatory Authority (I.R.A). Valuation reports are prepared by certified assessors based on
          physical inspection and prevailing market data at the time of inspection.
        </p>

        <h3 style={{ marginTop: 28, fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '1.25rem' }}>Booking &amp; Payment</h3>
        <p style={{ marginTop: 10 }}>
          Booking a valuation through this website is a request for service; it is confirmed once our team contacts
          you, typically within 2 business hours. Pricing is communicated and agreed directly with you before any
          inspection takes place.
        </p>

        <h3 style={{ marginTop: 28, fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '1.25rem' }}>Report Accuracy</h3>
        <p style={{ marginTop: 10 }}>
          Our reports reflect the condition of the vehicle and the market data available at the time of inspection.
          Valuations are not guarantees of resale price and may differ from figures produced by other assessors or
          at a later date.
        </p>

        <h3 style={{ marginTop: 28, fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '1.25rem' }}>Website Use</h3>
        <p style={{ marginTop: 10 }}>
          You agree to provide accurate information when using forms or the website chat assistant on this site, and
          not to use the site for any unlawful purpose.
        </p>

        <h3 style={{ marginTop: 28, fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '1.25rem' }}>Contact</h3>
        <p style={{ marginTop: 10 }}>
          Questions about these terms can be directed to <a href="mailto:info@linksvaluers.com">info@linksvaluers.com</a>{' '}
          or 0722 388 260.
        </p>
      </div>
    </section>
  );
}
