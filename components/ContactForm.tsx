'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
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
        body: JSON.stringify({ type: 'contact', ...data, page: window.location.href })
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  function waSend() {
    const form = document.getElementById('contact-form') as HTMLFormElement | null;
    const name = (form?.elements.namedItem('name') as HTMLInputElement)?.value || '';
    const msg = 'Hello Links Valuers, I would like to book a valuation.' + (name ? ` My name is ${name}.` : '');
    window.open('https://wa.me/254708412668?text=' + encodeURIComponent(msg), '_blank');
  }

  if (status === 'success') {
    return (
      <div className="form-success show">
        <h4>Message Sent</h4>
        <p>
          Thank you — a Links team member will respond within 2 business hours. For urgent enquiries, call{' '}
          <a href="tel:+254722388260">0722 388 260</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="form-card" id="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="c-name">Full Name <span className="req">*</span></label>
        <input id="c-name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="c-phone">Phone Number <span className="req">*</span></label>
          <input id="c-phone" name="phone" type="tel" placeholder="07xx xxx xxx" required />
        </div>
        <div className="field">
          <label htmlFor="c-email">Email Address <span className="req">*</span></label>
          <input id="c-email" name="email" type="email" placeholder="you@email.com" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-subject">Subject / Enquiry Type <span className="req">*</span></label>
        <select id="c-subject" name="subject" required defaultValue="">
          <option value="" disabled>Select an option</option>
          <option>General Enquiry</option>
          <option>Book a Valuation</option>
          <option>Bank Valuation</option>
          <option>Insurance Valuation</option>
          <option>Fleet Valuation</option>
          <option>Pre-Purchase Inspection</option>
          <option>Court Report</option>
          <option>Accident Assessment</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="c-message">Your Message <span className="req">*</span></label>
        <textarea id="c-message" name="message" placeholder="How can we help? (minimum 20 characters)" minLength={20} required />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        <span className="wa-alt">
          Prefer to chat?{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); waSend(); }}>
            Send us a WhatsApp message
          </a>
        </span>
      </div>
      {status === 'error' && (
        <p className="form-error">Something went wrong sending your message. Please try again or contact us on WhatsApp.</p>
      )}
      <p className="form-note">Your message is sent securely to our team at info@linksvaluers.com.</p>
    </form>
  );
}
