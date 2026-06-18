'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface SlideData {
  image: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  text?: string;
  cta?: { label: string; href: string };
}

const AUTOPLAY_MS = 5500;

export default function Slider({ slides, variant = 'default' }: { slides: SlideData[]; variant?: 'default' | 'promo' }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((i: number) => setIndex(((i % slides.length) + slides.length) % slides.length), [slides.length]);

  const restart = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS);
  }, [slides.length]);

  useEffect(() => {
    restart();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [restart]);

  const next = () => { goTo(index + 1); restart(); };
  const prev = () => { goTo(index - 1); restart(); };

  return (
    <div
      className={`tslider${variant === 'promo' ? ' tslider--promo' : ''}`}
      onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current); }}
      onMouseLeave={restart}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
        if (timerRef.current) clearInterval(timerRef.current);
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
        touchStartX.current = null;
        restart();
      }}
    >
      <div className="tslider__viewport">
        <div className="tslider__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s, i) => (
            <div className="tslider__slide" key={i}>
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes={variant === 'promo' ? '100vw' : '(max-width: 760px) 100vw, 980px'}
                style={{ objectFit: 'cover' }}
                priority={i === 0}
                loading={i === 0 ? undefined : 'lazy'}
              />
              {(s.eyebrow || s.title || s.text || s.cta) && (
                <div className="tslider__caption">
                  {s.eyebrow && <span className="eyebrow">{s.eyebrow}</span>}
                  {s.title && <h4>{s.title}</h4>}
                  {s.text && <p>{s.text}</p>}
                  {s.cta && (
                    <Link className="btn btn--primary" href={s.cta.href}>
                      {s.cta.label}
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <button className="tslider__arrow tslider__arrow--prev" type="button" aria-label="Previous slide" onClick={prev}>
        ‹
      </button>
      <button className="tslider__arrow tslider__arrow--next" type="button" aria-label="Next slide" onClick={next}>
        ›
      </button>
      <div className="tslider__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`tslider__dot${i === index ? ' is-active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => { goTo(i); restart(); }}
          />
        ))}
      </div>
    </div>
  );
}
