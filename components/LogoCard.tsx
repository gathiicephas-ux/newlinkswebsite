'use client';
import { useState } from 'react';

interface LogoCardProps {
  name: string;
  domain?: string;
  colorClass?: string;
}

export default function LogoCard({ name, domain, colorClass = 'logo-grid-init--green' }: LogoCardProps) {
  const [failed, setFailed] = useState(!domain);
  const init = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="logo-grid-card">
      {!failed && domain ? (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={name}
          width={110}
          height={48}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={`logo-grid-init ${colorClass}`}>{init}</div>
      )}
      <span className="logo-grid-name">{name}</span>
    </div>
  );
}
