import type { Metadata } from 'next';
import { Suspense } from 'react';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Book a Vehicle Valuation',
  description: 'Book your vehicle valuation online. Fast confirmation, 4hr-48hr delivery. Insurance, bank, fleet, and pre-purchase valuations across Kenya.',
  alternates: { canonical: '/book-valuation' }
};

export default function BookValuationPage() {
  return (
    <>
      <section className="bg-dark" style={{ paddingBlock: 64 }}>
        <div className="container">
          <span className="eyebrow">Book a Valuation</span>
          <h1 className="display" style={{ color: '#fff', fontSize: 'clamp(2.4rem,5vw,3.6rem)' }}>Book Your Valuation — Fast, Accurate, Trusted</h1>
          <p className="lead" style={{ marginTop: 14 }}>
            Fill in the form below and a Links team member will confirm your appointment within 2 business hours.
            Prefer to call? Reach us on <a href="tel:+254722388260" style={{ color: 'var(--green)' }}>0722 388 260</a>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <Suspense fallback={null}>
            <BookingForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
