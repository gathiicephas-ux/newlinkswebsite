import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Links Valuers & Assessors Ltd collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy' }
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <span className="eyebrow">Legal</span>
        <h1 className="section-title">Privacy Policy</h1>
        <p className="muted" style={{ marginTop: 8 }}>Last updated: June 2026</p>

        <p style={{ marginTop: 24 }}>
          Links Valuers &amp; Assessors Ltd (&ldquo;Links&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
          privacy. This policy explains what information we collect when you use this website or our services, how
          we use it, and the choices you have.
        </p>

        <h3 style={{ marginTop: 28, fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '1.25rem' }}>Information We Collect</h3>
        <p style={{ marginTop: 10 }}>
          When you book a valuation, contact us, or chat with our website assistant, we collect the details you
          provide directly — typically your name, phone number, email address, vehicle details, and the nature of
          your enquiry. We do not collect payment information through this website.
        </p>

        <h3 style={{ marginTop: 28, fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '1.25rem' }}>How We Use It</h3>
        <p style={{ marginTop: 10 }}>
          We use the information you provide to respond to your enquiry, schedule and deliver valuation services,
          and — where you have agreed — to follow up about our services. We do not sell your personal information to
          third parties.
        </p>

        <h3 style={{ marginTop: 28, fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '1.25rem' }}>Third-Party Services</h3>
        <p style={{ marginTop: 10 }}>
          Form submissions on this site are processed via our own server and trusted email-delivery infrastructure
          so our team can respond quickly. We do not share your details with advertisers.
        </p>

        <h3 style={{ marginTop: 28, fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '1.25rem' }}>Your Rights</h3>
        <p style={{ marginTop: 10 }}>
          You can ask us at any time what information we hold about you, request a correction, or ask us to delete
          it, by emailing <a href="mailto:info@linksvaluers.com">info@linksvaluers.com</a>.
        </p>

        <h3 style={{ marginTop: 28, fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '1.25rem' }}>Contact</h3>
        <p style={{ marginTop: 10 }}>
          Questions about this policy can be directed to <a href="mailto:info@linksvaluers.com">info@linksvaluers.com</a>{' '}
          or 0722 388 260.
        </p>
      </div>
    </section>
  );
}
