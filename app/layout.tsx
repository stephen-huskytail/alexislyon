import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','600'], style: ['normal','italic'], variable: '--font-cormorant', display: 'swap' });
const jost = Jost({ subsets: ['latin'], weight: ['300','400','500'], variable: '--font-jost', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://alexislyon.com'),
  title: { default: 'Alexis Lyon | Transformational Guide & Somatic Healer | Telehealth Worldwide', template: '%s | Alexis Lyon' },
  description: 'Transformational guidance rooted in somatic depth, nervous system regulation, psychological flexibility, nature-based healing, and self-trust.',
  openGraph: { title: 'Alexis Lyon | Transformational Guide & Somatic Healer', description: 'Healing for the wound. Reclaiming for the wildness. Rooted from soul.', url: 'https://alexislyon.com', siteName: 'Alexis Lyon', type: 'website' },
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${cormorant.variable} ${jost.variable}`}><body>{children}<Analytics /></body></html>;
}
