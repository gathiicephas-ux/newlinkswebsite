import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { FacebookIcon, XIcon, InstagramIcon, TikTokIcon, YoutubeIcon } from './icons/SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col footer-brand">
            <Link className="brand" href="/" aria-label="Links Valuers home">
              <Image className="brand__mark" src="/assets/logo.png" alt="Links Valuers logo" width={38} height={38} />
              <span className="brand__text">
                <span className="brand__name">Links</span>
                <span className="brand__sub">Valuers &amp; Assessors</span>
              </span>
            </Link>
            <p className="footer-tagline">Confidence Before Every Vehicle Decision™</p>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/branches">Branches</Link></li>
              <li><Link href="/clients">Clients</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/book-valuation">Book a Valuation</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul className="footer-contact">
              <li><Phone className="ico" /><a href="tel:+254722388260">0722 388 260</a></li>
              <li><Mail className="ico" /><a href="mailto:info@linksvaluers.com">info@linksvaluers.com</a></li>
              <li><MapPin className="ico" />Pamstech House, Westlands</li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Follow Us</h5>
            <div className="footer-social">
              <a href="https://www.facebook.com/linksvaluersandassessorsltd" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon className="ico" /></a>
              <a href="https://www.instagram.com/linksvaluersandassessorsltd/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon className="ico" /></a>
              <a href="https://x.com/linksvaluerske" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><XIcon className="ico" /></a>
              <a href="https://www.tiktok.com/@linksvaluersandassessors" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><TikTokIcon className="ico" /></a>
              <a href="https://www.youtube.com/@linksvaluersandassessors" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YoutubeIcon className="ico" /></a>
              <a href="https://wa.me/254708412668" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon className="ico" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-badges">
            <span>Licensed by M.A.A.K</span>
            <span>Licensed by I.R.A</span>
          </div>
          <div>© <span>{year}</span> Links Valuers &amp; Assessors Ltd. All Rights Reserved.</div>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link> &nbsp;|&nbsp; <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
