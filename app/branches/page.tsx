import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';

export const metadata: Metadata = {
  title: 'Our Branches — Links Valuers Locations Across Kenya',
  description: '25 branches across all 47 counties. From Nairobi to Mombasa, Kisumu to Eldoret — Links Valuers is always near you.',
  alternates: { canonical: '/branches' }
};

const BRANCHES = [
  { name: 'Nairobi', count: '4', text: 'Head Office: Pamstech House, 3rd Floor, Woodvale Groove, Westlands' },
  { name: 'Mombasa', count: '3', text: 'Covering Coast Region including port vehicle valuations' },
  { name: 'Kisumu', count: '2', text: 'Serving Western Kenya and Nyanza Region' },
  { name: 'Nakuru', count: '2', text: 'Covering Rift Valley corridor' },
  { name: 'Eldoret', count: '2', text: 'Serving North Rift and highlands' },
  { name: 'Thika', count: '1', text: 'Kiambu County and neighbouring areas' },
  { name: 'Nyeri', count: '1', text: 'Mount Kenya region' },
  { name: 'Embu', count: '1', text: 'Eastern corridor coverage' },
  { name: 'Countrywide Mobile', count: '50+', text: 'Mobile assessors deployed on request across all 47 counties' }
];

export default function BranchesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <Image src="/images/IMG-20260610-WA0110.jpg" alt="The Links Valuers team representing nationwide coverage" fill style={{ objectFit: 'cover' }} priority />
        </div>
        <div className="container page-hero__inner">
          <span className="eyebrow">Nationwide Coverage</span>
          <h1 className="display">Wherever You Need Us in Kenya</h1>
          <p className="lead">
            With 25 strategically located branches and 50+ mobile assessors deployable across all 47 counties, Links
            Valuers provides on-the-ground vehicle inspection services wherever your vehicles are — from the port of
            Mombasa to the highlands of Eldoret.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="map-stats">
            <>
              <div className="map-stat"><div className="map-stat__num"><Counter value={25} suffix="+" /></div><div className="map-stat__label">Branches</div></div>
              <div className="map-stat"><div className="map-stat__num"><Counter value={47} /></div><div className="map-stat__label">Counties</div></div>
              <div className="map-stat"><div className="map-stat__num"><Counter value={50} suffix="+" /></div><div className="map-stat__label">Assessors</div></div>
              <div className="map-stat"><div className="map-stat__num">24hr</div><div className="map-stat__label">Response</div></div>
            </>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Branch Directory</span>
            <h2 className="section-title">Find Your Nearest Links Branch</h2>
          </Reveal>
          <Reveal className="branch-layout">
            <>
              <div className="map-embed">
                <iframe
                  src="https://maps.google.com/maps?q=Kenya&z=6&output=embed"
                  title="Map of Links Valuers branches across Kenya"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="branch-list">
                {BRANCHES.map((b) => (
                  <div className="branch-item" key={b.name}>
                    <h4>{b.name} <span className="count">{b.count}</span></h4>
                    <p>{b.text}</p>
                  </div>
                ))}
              </div>
            </>
          </Reveal>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <div className="split">
            <Reveal>
              <span className="eyebrow">Mobile Assessors</span>
              <h2 className="section-title">No Branch Nearby? We Come to You.</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Our countrywide mobile assessor service means no vehicle is unreachable. If your location is not within
                reach of a fixed branch, submit a request and a certified Links assessor will be dispatched to your
                location within 2–24 hours.
              </p>
              <p className="lead" style={{ marginTop: 14 }}>
                Mobile assessor coverage: <b style={{ color: '#fff' }}>all 47 counties.</b> Request via phone, email, or
                the online booking form.
              </p>
              <div style={{ marginTop: 24, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link className="btn btn--primary" href="/book-valuation">Request a Mobile Assessor</Link>
                <a className="btn btn--ghost" href="tel:+254722388260">Call 0722 388 260</a>
              </div>
            </Reveal>
            <Reveal className="media-frame">
              <Image src="/images/IMG-20260610-WA0048.jpg" alt="Links certified field assessors ready for deployment" width={640} height={480} style={{ width: '100%', height: 'auto' }} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-dark cta-close" style={{ background: 'var(--dark-2)' }}>
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
