'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const NAV_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/branches', label: 'Branches' },
  { href: '/clients', label: 'Clients' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on route change and lock body scroll while open.
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link className="brand" href="/" aria-label="Links Valuers home">
            <Image className="brand__mark" src="/assets/logo.png" alt="Links Valuers logo" width={38} height={38} />
            <span className="brand__text">
              <span className="brand__name">Links</span>
              <span className="brand__sub">Valuers &amp; Assessors</span>
            </span>
          </Link>
          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? 'is-active' : ''}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="nav__actions">
            <a className="nav__portal" href="https://www.linksportal.co.ke" target="_blank" rel="noopener noreferrer">
              Clients Portal <ExternalLink className="ico" />
            </a>
            <Link className="btn btn--primary nav__cta" href="/book-valuation">Book a Valuation</Link>
            <button
              className="nav__burger"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-menu" id="mobileMenu">
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <div className="mobile-cta">
          <Link className="btn btn--primary" href="/book-valuation" onClick={() => setMenuOpen(false)}>
            Book a Valuation
          </Link>
          <a className="mobile-portal" href="https://www.linksportal.co.ke" target="_blank" rel="noopener noreferrer">
            Clients Portal ↗
          </a>
        </div>
      </div>
    </>
  );
}
