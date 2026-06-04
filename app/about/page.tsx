import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { JsonLd } from '@/components/JsonLd';
import { Footer } from '@/components/Footer';
import { meta } from '@/lib/content';

export const metadata: Metadata = {
  title: meta.about,
  description: 'Meet Alexis Lyon, transformational guide and healer based in Costa Rica with 22 years of clinical depth.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Alexis Lyon — 22 Years of Clinical Depth',
    description: '22 years of clinical depth in service of soul-rooted transformation.',
    images: [{ url: '/api/og?title=About+Alexis+Lyon&sub=Clinical+Depth+and+Soul-Rooted+Transformation', width: 1200, height: 630, alt: 'About Alexis Lyon' }]
  },
  twitter: { card: 'summary_large_image', images: ['/api/og?title=About+Alexis+Lyon&sub=Clinical+Depth+and+Soul-Rooted+Transformation'] }
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  name: 'About Alexis Lyon',
  url: 'https://alexislyon.com/about',
  description: 'Profile page for Alexis Lyon, transformational guide and healer based in Costa Rica.',
  mainEntity: {
    '@type': 'Person',
    name: 'Alexis Lyon',
    url: 'https://alexislyon.com',
    image: 'https://alexislyon.com/images/alexis-portrait.jpg',
    jobTitle: 'Transformational Guide and Somatic Healer',
    hasCredential: 'Licensed Marriage and Family Therapist, California',
    knowsAbout: ['Somatic depth work', 'Nervous system regulation', 'Psychological flexibility', 'Nature-based healing', 'Transformational coaching'],
    address: { '@type': 'PostalAddress', addressCountry: 'CR' },
    areaServed: ['Worldwide', 'Costa Rica']
  }
};

export default function About() {
  return (
    <main id="page-content">
      <JsonLd data={aboutJsonLd} />
      <Nav />

      {/* Hero */}
      <section className="section pt-36">
        <div className="container max-w-3xl">
          <div className="flex flex-col items-center">
            <div className="relative w-64 sm:w-80 rounded-t-full overflow-hidden shadow-soft aspect-[3/4]">
              <Image
                src="/images/alexis-portrait.jpg"
                alt="Alexis Lyon — Transformational Guide & Healer"
                fill
                className="object-cover object-top"
                priority
                sizes="320px"
              />
            </div>
            <div className="mt-10 text-center">
              <p className="eyebrow">About Alexis</p>
              <h1 className="display mt-5 text-5xl text-forest">Clinical depth in service of soul-rooted transformation.</h1>
            </div>
          </div>

          <div className="mt-10 space-y-6 text-mid leading-8">
              <p>My name is Alexis Lyon. I am a transformational guide and healer whose work is rooted in over two decades of clinical depth — and I work with people who are ready to stop outsourcing their knowing and finally learn to trust themselves.</p>
              <p>For nearly two decades, I worked as a therapist with foster care youth and families — people whose nervous systems had been shaped by profound rupture, and who were finding their way back to themselves against significant odds. Those years taught me something I have never forgotten: the innate resilience and courage that is available within all of us when we are met with unconditional acceptance, kindness, curiosity, and respect.</p>
              <p>Those youth were my greatest teachers. They showed me, over and over, what becomes possible when a person is genuinely met — not managed, not fixed, not assessed, but truly met. I carry that lesson into every session I hold.</p>
              <p>I have spent the last three years in private practice working with a range of children and adults, which has deepened my conviction that people of all ages and backgrounds can overcome their challenges when given the opportunity and the right relational field. For 22 years it has been my privilege and delight to see what becomes possible when people commit to their healing and growth within a therapeutic relationship — and uncover and embrace their true self.</p>
              <p>I come to this work as someone who has done my own deep nervous system healing. I know what it is to feel overwhelmed and far from yourself — and I know the particular quality of arriving home. I work somatically because I have felt, in my own body, what it means to move from dysregulation to ground. I integrate nature into the healing space because the living world has been my most reliable co-regulator and teacher. I hold space for the spiritual and mystical alongside the psychological because I have found, again and again, that the deepest healing happens when all levels of a person are welcomed into the room.</p>
              <p>I am not a blank screen. I bring my full self — 22 years of clinical mastery, my own deep inner work, my reverence for the body and the natural world, and my unshakeable faith in what becomes possible when people are met with unconditional presence. I am here to walk the path with you, not observe it from a safe distance.</p>
            </div>

            {/* Credentials */}
            <div className="mt-10 rounded-2xl bg-warm p-8">
              <p className="eyebrow">Credentials & Context</p>
              <ul className="mt-5 space-y-3 text-mid leading-8">
                <li>◆ 22 years clinical experience — foster care, families, children, and adults</li>
                <li>◆ Licensed Marriage &amp; Family Therapist (LMFT) in California — license informs depth, not scope of current services</li>
                <li>◆ Transformational guide &amp; coach — services offered are not therapy or clinical treatment</li>
                <li>◆ Holistic Somatic Ecotherapy — body, mind, spirit, and the natural world</li>
                <li>◆ Currently based on the Pacific coast of Costa Rica</li>
                <li>◆ Serving clients globally via secure telehealth</li>
              </ul>
            </div>

          <Link className="btn btn-forest mt-8 inline-block" href="/connect">Begin the Conversation</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
