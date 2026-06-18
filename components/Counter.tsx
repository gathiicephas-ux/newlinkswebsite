'use client';

import { useEffect, useRef, useState } from 'react';

export default function Counter({
  value,
  suffix = '',
  prefix = ''
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);
  const decimals = value.toString().includes('.') ? value.toString().split('.')[1].length : 0;
  const format = (v: number) =>
    prefix + v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
  const [display, setDisplay] = useState(format(0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setDisplay(format(value));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const dur = 1600;
            let start: number | null = null;
            const step = (ts: number) => {
              if (start === null) start = ts;
              const p = Math.min((ts - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(format(value * eased));
              if (p < 1) requestAnimationFrame(step);
              else setDisplay(format(value));
            };
            requestAnimationFrame(step);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
