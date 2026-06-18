'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AVATAR = '/images/Avatar/links-bot.png';
const LEAD_KEY = 'linksChatLeadCaptured';
const SKIP_KEY = 'linksChatLeadSkipped';

type KBEntry = { keys: string[]; a: string };

const KB: KBEntry[] = [
  { keys: ['turnaround', 'how long', 'time taken', 'fast', 'quick', 'delivery', 'deliver'], a: 'Most valuations are delivered within <b>2–24 hours</b> of inspection. The physical inspection itself only takes 1–2 hours.' },
  { keys: ['price', 'cost', 'fee', 'charge', 'how much', 'expensive', 'cheap'], a: 'Pricing depends on the vehicle and service type. Tell us a bit about what you need and our team will send an exact quote — or <a href="/book-valuation">book a valuation</a> and we will confirm pricing with you directly.' },
  { keys: ['service', 'offer', 'insurance valuation', 'bank valuation', 'fleet', 'court report', 'accident', 'pre-purchase', 'prepurchase', 'inspection'], a: 'We offer Insurance Valuation, Bank / Loan Collateral Valuation, Fleet Valuation, Accident Assessment, Pre-Purchase Inspection, and Court Reports. See the full list on our <a href="/services">Services</a> page.' },
  { keys: ['branch', 'location', 'where are you', 'nairobi', 'mombasa', 'kisumu', 'nakuru', 'eldoret', 'office'], a: 'Links has <b>25 branches</b> across Kenya plus mobile assessors who can come to you. Our head office is at Pamstech House, Westlands, Nairobi. See all <a href="/branches">branches</a>.' },
  { keys: ['book', 'appointment', 'schedule', 'valuation request', 'get a valuation'], a: 'You can book directly here: <a href="/book-valuation">Book a Valuation</a> — most requests are confirmed within 2 business hours.' },
  { keys: ['document', 'logbook', 'national id', 'requirement', 'what do i need'], a: 'You will need your vehicle logbook, national ID or passport, and current insurance certificate (for insurance valuations).' },
  { keys: ['licens', 'accredit', 'legit', 'trust', 'm.a.a.k', 'maak', 'ira'], a: 'Links is dual-licensed by both <b>M.A.A.K</b> and <b>I.R.A</b> — the only firm of our scale in Kenya with both. Our reports are accepted by 100+ banks, insurers, SACCOs and MFBs.' },
  { keys: ['contact', 'phone', 'call', 'email', 'reach', 'talk to someone', 'human'], a: 'Call us on <b>0722 388 260</b>, email <a href="mailto:info@linksvaluers.com">info@linksvaluers.com</a>, or message us on <a href="https://wa.me/254708412668" target="_blank" rel="noopener">WhatsApp</a>.' },
  { keys: ['hi', 'hello', 'hey', 'habari', 'sasa'], a: 'Hello! 👋 Ask me about turnaround times, pricing, services, or branches — or I can connect you with our team.' },
  { keys: ['thank'], a: 'You are welcome! Anything else I can help with?' }
];

const QUICK_REPLIES = [
  'How long does a valuation take?',
  'What services do you offer?',
  'Where are your branches?',
  'Book a valuation'
];

const FALLBACK =
  'I don’t have an exact answer for that, but our team can help directly — call <b>0722 388 260</b> or message us on <a href="https://wa.me/254708412668" target="_blank" rel="noopener">WhatsApp</a>.';

function findAnswer(text: string): string | null {
  const t = text.toLowerCase();
  for (const entry of KB) {
    if (entry.keys.some((k) => t.indexOf(k) > -1)) return entry.a;
  }
  return null;
}

type Message =
  | { id: number; kind: 'bot' | 'user'; html: string }
  | { id: number; kind: 'typing' }
  | { id: number; kind: 'lead-form' }
  | { id: number; kind: 'lead-done'; name?: string }
  | { id: number; kind: 'lead-skipped' };

let nextId = 1;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [leadAsked, setLeadAsked] = useState(false);
  const lastQuestionRef = useRef('');
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages]);

  function pushTyping(): number {
    const id = nextId++;
    setMessages((m) => [...m, { id, kind: 'typing' }]);
    return id;
  }

  function replaceTyping(id: number, msg: Message) {
    setMessages((m) => m.map((existing) => (existing.id === id ? msg : existing)));
  }

  function botSay(html: string) {
    const typingId = pushTyping();
    setTimeout(() => {
      replaceTyping(typingId, { id: typingId, kind: 'bot', html });
      maybeAskForLead();
    }, 550 + Math.random() * 350);
  }

  function maybeAskForLead() {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem(LEAD_KEY) === '1') return;
    if (sessionStorage.getItem(SKIP_KEY) === '1') return;
    if (leadAsked) return;
    setLeadAsked(true);
    setTimeout(() => {
      const typingId = pushTyping();
      setTimeout(() => {
        replaceTyping(typingId, { id: nextId++, kind: 'lead-form' });
      }, 550 + Math.random() * 350);
    }, 450);
  }

  function handleSend(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    lastQuestionRef.current = trimmed;
    setMessages((m) => [...m, { id: nextId++, kind: 'user', html: trimmed }]);
    const answer = findAnswer(trimmed);
    botSay(answer ?? FALLBACK);
  }

  function openChat() {
    setOpen(true);
    if (!greeted) {
      setGreeted(true);
      const typingId = pushTyping();
      setTimeout(() => {
        replaceTyping(typingId, {
          id: typingId,
          kind: 'bot',
          html: 'Hello! 👋 I’m the Links Assistant. Ask me about turnaround times, pricing, services, or branches.'
        });
      }, 550 + Math.random() * 350);
    }
  }

  function toggle() {
    open ? setOpen(false) : openChat();
  }

  return (
    <div className={`chatbot${open ? ' is-open' : ''}`} data-chatbot>
      <button className="chatbot__launcher" type="button" aria-label="Chat with the Links Assistant" onClick={toggle}>
        <span className="chatbot__launcher-tip">Chat with the Links Assistant</span>
        <Image src={AVATAR} alt="" width={64} height={64} />
        <span className="chatbot__ping" />
      </button>

      <div className="chatbot__panel" role="dialog" aria-label="Links Assistant chat">
        <div className="chatbot__head">
          <Image className="chatbot__head-avatar" src={AVATAR} alt="" width={38} height={38} />
          <div className="chatbot__head-text">
            <b>Links Assistant</b>
            <span>Usually replies instantly</span>
          </div>
          <button className="chatbot__close" type="button" aria-label="Close chat" onClick={() => setOpen(false)}>
            &times;
          </button>
        </div>

        <div className="chatbot__body" ref={bodyRef}>
          {messages.map((msg) => {
            if (msg.kind === 'typing') {
              return (
                <div className="chatbot__msg chatbot__msg--bot" key={msg.id}>
                  <Image className="chatbot__msg-avatar" src={AVATAR} alt="" width={26} height={26} />
                  <div className="chatbot__bubble chatbot__typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              );
            }
            if (msg.kind === 'bot') {
              return (
                <div className="chatbot__msg chatbot__msg--bot" key={msg.id}>
                  <Image className="chatbot__msg-avatar" src={AVATAR} alt="" width={26} height={26} />
                  <div className="chatbot__bubble" dangerouslySetInnerHTML={{ __html: msg.html }} />
                </div>
              );
            }
            if (msg.kind === 'user') {
              return (
                <div className="chatbot__msg chatbot__msg--user" key={msg.id}>
                  <div className="chatbot__bubble">{msg.html}</div>
                </div>
              );
            }
            if (msg.kind === 'lead-form') {
              return (
                <div className="chatbot__msg chatbot__msg--bot" key={msg.id}>
                  <Image className="chatbot__msg-avatar" src={AVATAR} alt="" width={26} height={26} />
                  <div className="chatbot__bubble">
                    <LeadForm
                      lastQuestion={lastQuestionRef.current}
                      onSkip={() => {
                        sessionStorage.setItem(SKIP_KEY, '1');
                        setMessages((m) => m.map((x) => (x.id === msg.id ? { id: msg.id, kind: 'lead-skipped' } : x)));
                      }}
                      onDone={(name) => {
                        localStorage.setItem(LEAD_KEY, '1');
                        setMessages((m) => m.map((x) => (x.id === msg.id ? { id: msg.id, kind: 'lead-done', name } : x)));
                      }}
                    />
                  </div>
                </div>
              );
            }
            if (msg.kind === 'lead-skipped') {
              return (
                <p key={msg.id} style={{ marginTop: 8, fontSize: '0.84rem', color: 'var(--grey)' }}>
                  No problem — ask me anything else!
                </p>
              );
            }
            if (msg.kind === 'lead-done') {
              return (
                <p key={msg.id} style={{ marginTop: 8, fontSize: '0.84rem' }}>
                  Thanks{msg.name ? ` ${msg.name}` : ''}! A Links team member will reach out to you shortly.
                </p>
              );
            }
            return null;
          })}
        </div>

        <div className="chatbot__quick">
          {QUICK_REPLIES.map((q) => (
            <button key={q} type="button" className="chatbot__chip" onClick={() => handleSend(q)}>
              {q}
            </button>
          ))}
        </div>

        <form
          className="chatbot__input"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
            setInput('');
          }}
        >
          <input
            type="text"
            placeholder="Type your question…"
            autoComplete="off"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" aria-label="Send">➤</button>
        </form>
      </div>
    </div>
  );
}

function LeadForm({
  lastQuestion,
  onSkip,
  onDone
}: {
  lastQuestion: string;
  onSkip: () => void;
  onDone: (name?: string) => void;
}) {
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const contact = (form.elements.namedItem('contact') as HTMLInputElement).value;
    setSending(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'chatbot',
          name,
          contact,
          lastQuestion: lastQuestion || '(none)',
          page: typeof window !== 'undefined' ? window.location.href : ''
        })
      });
      if (!res.ok) throw new Error('failed');
      onDone(name.split(' ')[0]);
    } catch {
      setSending(false);
      alert('Something went wrong sending your details. Please try again or message us on WhatsApp.');
    }
  }

  return (
    <>
      Would you like a specialist to follow up directly? Leave your details and we’ll reach out.
      <form className="chatbot__lead-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your name" required />
        <input type="text" name="contact" placeholder="Phone or email" required />
        <div className="chatbot__lead-btns">
          <button type="button" className="is-ghost" onClick={onSkip}>Maybe later</button>
          <button type="submit" className="is-primary" disabled={sending}>{sending ? 'Sending…' : 'Send'}</button>
        </div>
      </form>
    </>
  );
}
