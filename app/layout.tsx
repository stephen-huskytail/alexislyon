import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost, Dancing_Script } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','600'], style: ['normal','italic'], variable: '--font-cormorant', display: 'swap' });
const jost = Jost({ subsets: ['latin'], weight: ['300','400','500'], variable: '--font-jost', display: 'swap' });
const signature = Dancing_Script({ subsets: ['latin'], weight: ['500','600','700'], variable: '--font-signature', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://alexislyon.com'),
  title: { default: 'Alexis Lyon | Transformational Guide & Somatic Healer', template: '%s | Alexis Lyon' },
  description: 'Transformational guidance rooted in somatic depth, nervous system regulation, psychological flexibility, nature-based healing, and self-trust.',
  openGraph: {
    title: 'Alexis Lyon | Transformational Guide & Somatic Healer',
    description: 'Healing for the wound. Reclaiming for the wildness. Rooted from soul.',
    url: 'https://alexislyon.com',
    siteName: 'Alexis Lyon',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'Alexis Lyon — Transformational Guide & Somatic Healer' }]
  },
  twitter: { card: 'summary_large_image', images: ['/api/og'] },
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${cormorant.variable} ${jost.variable} ${signature.variable}`}><body>{children}<Analytics /></body></html>;
}
