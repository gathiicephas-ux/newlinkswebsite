'use client';

import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';

const SERVICE_MAP: Record<string, string> = {
  insurance: 'Insurance Valuation',
  bank: 'Bank / Loan Collateral Valuation',
  fleet: 'Fleet Valuation',
  accident: 'Accident Assessment',
  'pre-purchase': 'Pre-Purchase Inspection',
  court: 'Court Report'
};

export default function BookingForm() {
  const params = useSearchParams();
  const presetType = params.get('type');
  const presetService = presetType ? SERVICE_MAP[presetType] : undefined;

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'booking', ...data, page: window.location.href })
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  function waSend() {
    const form = document.getElementById('booking-form') as HTMLFormElement | null;
    const name = (form?.elements.namedItem('name') as HTMLInputElement)?.value || '';
    const msg = 'Hello Links Valuers, I would like to book a valuation.' + (name ? ` My name is ${name}.` : '');
    window.open('https://wa.me/254708412668?text=' + encodeURIComponent(msg), '_blank');
  }

  if (status === 'success') {
    return (
      <div className="form-success show">
        <h4>Thank You!</h4>
        <p>
          Your booking request has been received. A Links team member will contact you within 2 business hours to
          confirm your appointment. For urgent enquiries, call <a href="tel:+254722388260">0722 388 260</a> or message
          us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form className="form-card reveal in" id="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="b-name">Full Name <span className="req">*</span></label>
          <input id="b-name" name="name" type="text" required />
        </div>
        <div className="field">
          <label htmlFor="b-phone">Phone Number <span className="req">*</span></label>
          <input id="b-phone" name="phone" type="tel" placeholder="WhatsApp preferred for updates" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="b-email">Email Address <span className="req">*</span></label>
        <input id="b-email" name="email" type="email" required />
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="b-reg">Vehicle Registration Number <span className="req">*</span></label>
          <input id="b-reg" name="reg" type="text" placeholder="e.g. KDA 123A" required />
        </div>
        <div className="field">
          <label htmlFor="b-year">Vehicle Year <span className="req">*</span></label>
          <input id="b-year" name="year" type="number" min={1950} max={2026} placeholder="e.g. 2018" required />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="b-make">Vehicle Make <span className="req">*</span></label>
          <input id="b-make" name="make" type="text" placeholder="e.g. Toyota" required />
        </div>
        <div className="field">
          <label htmlFor="b-model">Vehicle Model <span className="req">*</span></label>
          <input id="b-model" name="model" type="text" placeholder="e.g. Land Cruiser" required />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="service-type">Service Required <span className="req">*</span></label>
          <select id="service-type" name="service" required defaultValue={presetService ?? ''}>
            <option value="" disabled>Select a service</option>
            <option>Insurance Valuation</option>
            <option>Bank / Loan Collateral Valuation</option>
            <option>Fleet Valuation</option>
            <option>Accident Assessment</option>
            <option>Pre-Purchase Inspection</option>
            <option>Court Report</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="b-branch">Preferred Branch / Location <span className="req">*</span></label>
          <select id="b-branch" name="branch" required defaultValue="">
            <option value="" disabled>Select a location</option>
            <option>Nairobi (Westlands – Head Office)</option>
            <option>Mombasa</option>
            <option>Kisumu</option>
            <option>Nakuru</option>
            <option>Eldoret</option>
            <option>Thika</option>
            <option>Nyeri</option>
            <option>Embu</option>
            <option>Mobile Assessor — Come to Me</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="b-date">Preferred Date <span className="req">*</span></label>
        <input id="b-date" name="date" type="date" required />
      </div>
      <div className="field">
        <label htmlFor="b-notes">Additional Notes / Instructions</label>
        <textarea id="b-notes" name="notes" placeholder="Anything else we should know? (optional)" />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Confirm Booking Request'}
        </button>
        <span className="wa-alt">
          Or{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); waSend(); }}>
            book via WhatsApp
          </a>
        </span>
      </div>
      {status === 'error' && (
        <p className="form-error">Something went wrong sending your request. Please try again or contact us on WhatsApp.</p>
      )}
      <p className="form-note">Your request is sent securely to our bookings team at info@linksvaluers.com.</p>
    </form>
  );
}
