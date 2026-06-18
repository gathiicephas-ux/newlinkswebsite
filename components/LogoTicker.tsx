'use client';
import { useState } from 'react';

export interface TickerLogo { name: string; domain: string; }

function TickerItem({ name, domain }: TickerLogo) {
  const [failed, setFailed] = useState(false);
  const init = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className="logo-ticker__item" title={name}>
      {!failed ? (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={name}
          width={120}
          height={44}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="logo-ticker__init">{init}</span>
      )}
    </div>
  );
}

export default function LogoTicker({ logos }: { logos: TickerLogo[] }) {
  const items = [...logos, ...logos];
  return (
    <div className="logo-ticker" aria-label="Our partner institutions">
      <div className="logo-ticker__track">
        {items.map((l, i) => <TickerItem key={i} {...l} />)}
      </div>
    </div>
  );
}
