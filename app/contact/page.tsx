import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import AvatarCallout from '@/components/AvatarCallout';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contact Links Valuers — Nairobi, Kenya | Valuation Enquiries',
  description: 'Phone: 0722 388 260. Email: info@linksvaluers.com. Head Office: Pamstech House, Westlands, Nairobi.',
  alternates: { canonical: '/contact' }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Links Valuers & Assessors Ltd',
  url: 'https://www.linksvaluers.com',
  telephone: '+254722388260',
  email: 'info@linksvaluers.com',
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

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-dark" style={{ paddingBlock: 64 }}>
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="display" style={{ color: '#fff', fontSize: 'clamp(2.4rem,5vw,3.6rem)' }}>Get in Touch — We&rsquo;re Ready to Help</h1>
          <p className="lead" style={{ marginTop: 14 }}>
            Whether you have a question about our services, need a quick quote, or are ready to book a valuation —
            our team responds within 2 business hours. Call, email, or message us on WhatsApp.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <div className="contact-detail">
                <div className="contact-detail__icon"><Phone className="ico" /></div>
                <div><h4>Phone</h4><p><a href="tel:+254722388260">0722 388 260</a> / <a href="tel:+254708412668">0708 412 668</a></p></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail__icon"><Mail className="ico" /></div>
                <div><h4>Email</h4><p><a href="mailto:info@linksvaluers.com">info@linksvaluers.com</a></p></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail__icon"><WhatsAppIcon className="ico" /></div>
                <div><h4>WhatsApp</h4><p><a href="https://wa.me/254708412668" target="_blank" rel="noopener noreferrer">+254 708 412 668</a> (click to chat)</p></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail__icon"><MapPin className="ico" /></div>
                <div><h4>Head Office</h4><p>Pamstech House, 3rd Floor, Woodvale Groove, Westlands, Nairobi</p></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail__icon"><Clock className="ico" /></div>
                <div><h4>Operating Hours</h4><p>Mon: 7:30am–5:00pm · Tue–Fri: 8:00am–5:00pm · Sat–Sun: 9:00am–1:00pm</p></div>
              </div>
              <AvatarCallout>
                <b>Prefer an instant answer?</b> Our team is most responsive on{' '}
                <a href="https://wa.me/254708412668" target="_blank" rel="noopener noreferrer">WhatsApp</a> during
                business hours.
              </AvatarCallout>
            </Reveal>

            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 0 }}>
        <div className="map-embed" style={{ borderRadius: 0, minHeight: 400 }}>
          <iframe
            src="https://maps.google.com/maps?q=Pamstech%20House%20Woodvale%20Grove%20Westlands%20Nairobi&z=16&output=embed"
            title="Links Valuers Head Office — Pamstech House, Westlands, Nairobi"
            loading="lazy"
            style={{ minHeight: 400 }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
