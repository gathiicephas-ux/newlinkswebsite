import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Slider from '@/components/Slider';

export const metadata: Metadata = {
  title: "About Links Valuers — 14+ Years of Vehicle Valuation Excellence in Kenya",
  description:
    "Established in 2012, Links Valuers is Kenya's most trusted vehicle valuation authority. Licensed by M.A.A.K and regulated by I.R.A, nationwide, and built on integrity.",
  alternates: { canonical: '/about' }
};

const VALUES = [
  { title: 'Integrity', text: "Our valuations are based on evidence, not relationships. We don't inflate or deflate — we find the true market value." },
  { title: 'Honesty', text: 'We tell you what your vehicle is worth, not what you want to hear. Our independence is our most valuable asset.' },
  { title: 'Professionalism', text: 'Every assessor is trained, certified, and subject to our dual-review quality system. No shortcuts.' },
  { title: 'Humility', text: "We are experts — but we listen. Every client's situation is unique, and we approach each valuation with fresh eyes." },
  { title: 'Flexibility', text: 'We come to you. Phone, email, portal — wherever you are in Kenya, we make the process work for you.' },
  { title: 'Attention to Detail', text: 'Valuations are only as good as the data behind them. We obsess over the details so you don\'t have to.' }
];

const LEADERS = [
  {
    name: 'Reuben Muiruri',
    role: 'Director of Business Operations',
    photo: '/images/reuben-muiruri.jpg',
    bio: "Strategic operations leader driving Links' business growth and operational excellence. Reuben oversees all branch operations, quality control systems, and the deployment of Links' 50+ certified assessors nationwide."
  },
  {
    name: 'Jane Kanyeki',
    role: 'Business Development Manager',
    photo: '/images/jane-kanyeki.jpg',
    bio: "Building and strengthening partnerships with financial institutions and insurers nationwide. Jane manages all institutional client relationships and leads Links' partnership expansion across East Africa."
  },
  {
    name: 'Stephen Kiragu',
    role: 'Head of Quality Control & Valuation',
    photo: '/images/stephen-kiragu.jpg',
    bio: "Guardian of the dual-review standard. Stephen leads the senior valuation team that checks every report before delivery — the quality discipline behind Links' 99.7% acceptance rate."
  },
  {
    name: 'Caren Chepkoech',
    role: 'Head of Administration',
    photo: '/images/caren-chepkoech.jpg',
    bio: 'The administrative backbone ensuring seamless coordination across departments and 25 branch locations. Caren oversees internal operations, staff management, and the systems that keep Links running at peak efficiency.'
  },
  {
    name: 'Dorcas Kanee',
    role: 'Head of Finance & HR',
    photo: '/images/dorcas-kanee.jpg',
    bio: "Steering the financial discipline and people systems behind Links' growth. Dorcas leads budgeting, payroll, and talent development across all 25 branches, ensuring the team that delivers 1M+ valuations is paid, trained, and supported."
  },
  {
    name: 'Grace Wanjiru',
    role: 'Customer Service Representative',
    photo: '/images/grace-wanjiru.jpg',
    bio: 'Front-line professional dedicated to delivering exceptional client experiences at every touchpoint. Grace is often your first contact at Links — and the standard she sets defines how clients experience the brand.'
  }
];

const TEAM_SLIDES = [
  { image: '/images/full-team.jpg', alt: 'The full Links Valuers and Assessors team outside Pamstech House', title: 'One Team, One Standard', text: '60+ valuers, assessors, and support staff united behind every report Links delivers.' },
  { image: '/images/valuations-team.jpg', alt: 'The Links valuations and quality control team', title: 'Valuations & Quality Control', text: "The senior valuers and lab-coated inspection team behind Links' 99.7% acceptance rate." },
  { image: '/images/marketing-department.jpg', alt: 'The Links marketing and client relations department', title: 'Marketing & Client Relations', text: 'Building and nurturing partnerships with banks, insurers, and SACCOs across Kenya.' },
  { image: '/images/administration-departments.jpg', alt: 'The Links administration department', title: 'Administration', text: 'Keeping 25 branches coordinated, compliant, and running at peak efficiency.' },
  { image: '/images/IMG-20260615-WA0008.jpg', alt: 'Links valuation team collaborating at the office', title: 'Collaboration By Design', text: 'Every report passes through multiple sets of eyes before it reaches your inbox.' },
  { image: '/images/IMG-20260615-WA0015.jpg', alt: 'Links team members working together in the office', title: 'Precision Starts With People', text: 'The standard our clients trust is set by the team they rarely see — until it matters.' }
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <Image src="/images/IMG-20260610-WA0030.jpg" alt="The full Links Valuers team in uniform outside their Westlands office" fill style={{ objectFit: 'cover' }} priority />
        </div>
        <div className="container page-hero__inner">
          <span className="eyebrow">Our Story</span>
          <h1 className="display">The People and Principles Behind Kenya&rsquo;s Most Trusted Valuation Firm</h1>
          <p className="lead">
            Links Valuers &amp; Assessors Ltd was founded on a simple conviction: that every financial decision involving a
            vehicle deserves a valuation you can truly trust. Over the past 14 years, we have grown from a specialist
            Nairobi practice into a nationwide authority with 25 branches, 50+ certified assessors, and more than one
            million completed valuations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <Reveal>
              <span className="eyebrow">What Drives Us</span>
              <h2 className="section-title">Our Mission &amp; Vision</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                <b style={{ color: 'var(--dark)' }}>Mission —</b> To provide Kenya&rsquo;s most accurate, fastest, and most
                legally defensible vehicle valuations — empowering financial institutions, insurers, and individuals to
                make decisions with total confidence.
              </p>
              <p className="lead" style={{ marginTop: 14 }}>
                <b style={{ color: 'var(--dark)' }}>Vision —</b> To be East Africa&rsquo;s most trusted vehicle valuation
                authority, known for precision, integrity, and the speed that modern finance demands.
              </p>
            </Reveal>
            <Reveal
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: 24,
                background: 'var(--green-soft)',
                border: '1px solid rgba(60,170,90,.25)',
                borderRadius: 'var(--radius-card)',
                padding: '48px 32px',
                minHeight: 340
              }}
            >
              <Image
                src="/assets/logo.png"
                alt="Links Valuers & Assessors logo"
                width={280}
                height={280}
                style={{ width: 'min(260px,68%)', height: 'auto', aspectRatio: '1', borderRadius: '50%', background: '#fff', boxShadow: '0 10px 30px -12px rgba(15,26,16,.4)' }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '.03em',
                  fontSize: 'clamp(1.2rem,2.6vw,1.65rem)',
                  color: 'var(--dark)',
                  lineHeight: 1.05,
                  maxWidth: '18ch'
                }}
              >
                Confidence Before Every Vehicle <span className="accent-green">Decision™</span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">Our Core Values</span>
            <h2 className="section-title">What It Means for Clients</h2>
          </Reveal>
          <Reveal className="values-grid">
            <>
              {VALUES.map((v) => (
                <div className="value-card" key={v.title}>
                  <h4>{v.title}</h4>
                  <p>{v.text}</p>
                </div>
              ))}
            </>
          </Reveal>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <div className="split">
            <Reveal>
              <span className="eyebrow">Licensed by M.A.A.K and Regulated by I.R.A</span>
              <h2 className="section-title">Our Licensing — What It Means</h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Links Valuers holds an active licence from the Motor Assessors Association of Kenya (M.A.A.K) and is
                regulated by the Insurance Regulatory Authority (I.R.A). This certification is rare and significant — our reports
                carry weight in two distinct institutional contexts: bank lending decisions{' '}
                <b style={{ color: '#fff' }}>and</b> insurance claim settlements.
              </p>
              <p className="lead" style={{ marginTop: 14 }}>
                When your bank&rsquo;s credit committee or an insurer&rsquo;s claims department reviews a Links report,
                they do not question it. Our 99.7% first-submission acceptance rate across 100+ partner institutions is
                proof.
              </p>
            </Reveal>
            <Reveal>
              <div className="license-grid">
                <div className="license-card">
                  <div className="badge"><ShieldCheck className="ico" />M.A.A.K</div>
                  <p>Motor Assessors Association of Kenya. Authorises vehicle inspection, damage assessment, and accident reporting for legal and insurance purposes.</p>
                </div>
                <div className="license-card">
                  <div className="badge"><ShieldCheck className="ico" />I.R.A</div>
                  <p>Insurance Regulatory Authority of Kenya. Authorises valuation reports for insurance underwriting, pre-insurance assessment, and claim settlement.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">Leadership</span>
            <h2 className="section-title">The People Behind the Precision</h2>
          </Reveal>
          <Reveal className="team-grid">
            <>
              {LEADERS.map((l) => (
                <article className="leader" key={l.name}>
                  <div className="leader__photo">
                    <Image src={l.photo} alt={`${l.name}, ${l.role}`} width={400} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  </div>
                  <div className="leader__body">
                    <h3 className="leader__name">{l.name}</h3>
                    <div className="leader__role">{l.role}</div>
                    <p className="leader__bio">{l.bio}</p>
                  </div>
                </article>
              ))}
            </>
          </Reveal>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <Reveal className="sec-head center">
            <span className="eyebrow">Inside Links</span>
            <h2 className="section-title">A Team Built for Precision</h2>
          </Reveal>
          <Reveal>
            <Slider slides={TEAM_SLIDES} />
          </Reveal>
        </div>
      </section>

      <section className="section bg-offwhite">
        <div className="container">
          <Reveal className="sec-head">
            <span className="eyebrow">Awards &amp; Recognition</span>
            <h2 className="section-title">Work Hard. Get Recognised.</h2>
            <p className="lead">
              Links Valuers has been formally recognised by Kenya&rsquo;s financial services and motor industry
              associations for excellence in vehicle valuation, client service, and technological innovation. Our awards
              are not self-appointed — they are peer-validated recognition of the standard our team maintains every day.
            </p>
          </Reveal>
          <Reveal className="awards-row">
            <>
              <div className="award-img">
                <Image src="/images/IMG-20260610-WA0018.jpg" alt="Links Valuers Automotive Industry Awards 2022 and 2023 trophies on display" width={600} height={450} style={{ width: '100%', height: 'auto' }} />
              </div>
              <div className="award-img">
                <Image src="/images/IMG-20260610-WA0024.jpg" alt="A Links valuer with the firm's Best Automotive Valuers & Assessors 2023 award" width={600} height={450} style={{ width: '100%', height: 'auto' }} />
              </div>
            </>
          </Reveal>
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
