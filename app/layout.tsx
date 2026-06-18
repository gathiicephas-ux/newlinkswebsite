import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Chatbot from '@/components/Chatbot';

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.linksvaluers.com'),
  title: {
    default: "Links Valuers — Kenya's Trusted Vehicle Valuation Authority",
    template: '%s | Links Valuers'
  },
  description:
    "Kenya's leading vehicle valuation firm. Licensed by M.A.A.K and regulated by I.R.A. 1M+ valuations completed. 99.7% acceptance rate. 4hr-48hr delivery. Book today.",
  icons: { icon: '/assets/logo.png' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <Chatbot />
      </body>
    </html>
  );
}
