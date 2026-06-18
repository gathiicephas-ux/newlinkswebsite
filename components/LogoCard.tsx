'use client';
import { useState } from 'react';

interface LogoCardProps {
  name: string;
  src?: string;
  colorClass?: string;
}

export default function LogoCard({ name, src, colorClass = 'logo-grid-init--green' }: LogoCardProps) {
  const [failed, setFailed] = useState(!src);
  const init = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="logo-grid-card">
      {!failed && src ? (
        <img
          src={src}
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
