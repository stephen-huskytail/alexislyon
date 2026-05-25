import type { Metadata } from 'next';
import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { pillars, meta } from '@/lib/content';

export const metadata: Metadata = {
  title: meta.foundation,
  description: 'Nervous system regulation, self-trust, psychological flexibility, and somatic healing with Alexis Lyon.',
  openGraph: {
    title: 'The Foundation',
    description: 'Self-trust, nervous system regulation, and psychological flexibility.',
    images: [
      {
        url: '/api/og?title=The+Foundation&sub=Self-Trust+and+Nervous+System+Regulation',
        width: 1200,
        height: 630,
        alt: 'The Foundation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/api/og?title=The+Foundation&sub=Self-Trust+and+Nervous+System+Regulation']
  }
};

const pillarVisuals: Record<string, { image: string; alt: string; position: string }> = {
  Safety: {
    image: '/images/card-witnessing.jpg',
    alt: 'Alexis seated in tall grass, attuning to the body and the natural world.',
    position: 'center 34%'
  },
  Regulation: {
    image: '/images/card-coregulating.jpg',
    alt: 'A grounding somatic co-regulation practice in the grass.',
    position: 'center 42%'
  },
  'Psychological Flexibility': {
    image: '/images/card-truth.jpg',
    alt: 'Alexis standing in nature with arms open, returning to truth and values-led movement.',
    position: 'center 34%'
  }
};

export default function Foundation() {
  return (
    <main id="page-content">
      <Nav />
      <section className="section pt-36">
        <div className="container">
          <p className="eyebrow">The Foundation</p>
          <h1 className="display mt-5 max-w-5xl text-6xl text-forest">
            Self-trust is not a mindset. It is a nervous system phenomenon.
          </h1>
          <p className="body-large mt-7 max-w-4xl text-mid">
            The work is grounded in safety built inside relationship, regulation that supports aliveness, and psychological flexibility that lets you move toward what matters while difficulty is still present.
          </p>
          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {pillars.map(([title, description]) => {
              const visual = pillarVisuals[title];

              return (
                <article className="overflow-hidden rounded-[2rem] border border-warm-dk bg-cream shadow-soft transition duration-300 hover:-translate-y-1" key={title}>
                  <div className="relative h-64 w-full">
                    <Image
                      src={visual.image}
                      alt={visual.alt}
                      fill
                      className="object-cover"
                      style={{ objectPosition: visual.position }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent" />
                  </div>
                  <div className="border-t-4 border-gold p-8">
                    <h2 className="display text-3xl text-forest">{title}</h2>
                    <p className="mt-5 leading-8 text-mid">{description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
