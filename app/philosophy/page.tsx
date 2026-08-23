import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { pillars, relationshipCards, meta } from '@/lib/content';

export const metadata: Metadata = {
  title: meta.philosophy,
  description: 'The philosophy behind the work: safety, nervous system regulation, psychological flexibility, and the healing relationship as medicine.',
  alternates: { canonical: '/philosophy' },
  openGraph: {
    title: 'Philosophy — The Foundation of the Work',
    description: 'Safety, nervous system regulation, psychological flexibility, and the healing relationship as medicine.',
    images: [{ url: '/api/og?title=Philosophy&sub=The+Foundation+of+the+Work', width: 1200, height: 630, alt: 'Philosophy — Alexis Lyon' }]
  },
  twitter: { card: 'summary_large_image', images: ['/api/og?title=Philosophy&sub=The+Foundation+of+the+Work'] }
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
    position: 'center 46%'
  }
};

const philosophyJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Philosophy — The Foundation of the Work',
    url: 'https://alexislyon.com/philosophy',
    description: 'The philosophy behind transformational guidance with Alexis Lyon: safety, nervous system regulation, psychological flexibility, and the healing relationship as medicine.',
    inLanguage: 'en-US',
    isPartOf: { '@type': 'WebSite', url: 'https://alexislyon.com' },
    author: { '@type': 'Person', name: 'Alexis Lyon', url: 'https://alexislyon.com' }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Foundation Pillars',
    url: 'https://alexislyon.com/philosophy',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Safety', description: 'Safety is built inside the work, over time. Through steady presence, the nervous system learns that aliveness does not have to equal danger.' },
      { '@type': 'ListItem', position: 2, name: 'Regulation', description: 'Regulation is not control. It is the capacity to stay connected to yourself while sensation, grief, longing, and truth move through.' },
      { '@type': 'ListItem', position: 3, name: 'Psychological Flexibility', description: 'Awareness, openness, and active engagement create a life led by values — not by old protection strategies.' }
    ]
  }
];

export default function Philosophy() {
  return (
    <main id="page-content">
      <JsonLd data={philosophyJsonLd} />
      <Nav />

      {/* Hero */}
      <section className="section pt-36">
        <div className="container">
          <p className="eyebrow">Philosophy</p>
          <h1 className="display mt-5 max-w-5xl text-4xl sm:text-5xl md:text-6xl text-forest">
            Self-trust is not a mindset. It is a nervous system phenomenon.
          </h1>
          <p className="body-large mt-7 max-w-4xl text-mid">
            The work is grounded in safety built inside relationship, regulation that supports aliveness, and psychological flexibility that lets you move toward what matters while difficulty is still present. This page is the deeper frame beneath everything we do together.
          </p>
        </div>
      </section>

      {/* The Foundation */}
      <section id="foundation" className="section bg-warm !pt-16">
        <div className="container">
          <p className="eyebrow">The Foundation</p>
          <h2 className="display mt-5 max-w-4xl text-5xl text-forest">Resilient bodies and nervous systems capable of dynamic, generative, regulated beingness.</h2>
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

      {/* Nervous system primer */}
      <section id="regulation" className="section">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">A brief primer</p>
            <h2 className="display mt-5 text-5xl text-forest">What your nervous system is doing all day.</h2>
            <Image
              src="/images/philosophy-nervous-system-sunset.png"
              alt="A sunlit path through a meadow and trees at sunset."
              width={1586}
              height={992}
              className="mt-8 h-auto w-full rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-5 leading-8 text-mid">
            <p>Beneath every thought you have, your nervous system is asking one question, over and over: am I safe? When the answer has too often been no — through rupture, loss, or years of holding more than one person should hold — the body learns to protect first and live second.</p>
            <p>Regulation is not calming yourself into stillness, and it is not control. It is the growing capacity to stay connected to yourself while sensation, grief, longing, and truth move through. It is built the way it was always meant to be built: with another regulated nervous system alongside yours, and with the natural world — the oldest co-regulator there is.</p>
            <p>This is why the work is somatic. Insight alone does not change what the body expects. Felt experience does.</p>
          </div>
        </div>
      </section>

      {/* How change happens (ACT) */}
      <section id="change" className="section bg-warm">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">How change actually happens</p>
            <h2 className="display mt-5 text-5xl text-forest">Awareness. Openness. Active engagement.</h2>
            <p className="body-large mt-7 text-mid">Psychological flexibility is the capacity to stay present with difficulty while continuing to move toward what matters. It is not the reward at the end of healing — it is what makes the journey possible.</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="leading-8 text-mid">Grounded in Acceptance and Commitment Therapy&rsquo;s decades of research, this is the quiet engine of the work: learning to open to what is here, notice the stories the mind tells, and take one values-led step at a time — while the difficulty is still present.</p>
            <Link className="mt-6 font-medium text-forest underline decoration-gold underline-offset-4 hover:text-sage" href="/blog/psychological-flexibility">Read the full essay: Psychological Flexibility — How Change Actually Happens →</Link>
          </div>
        </div>
      </section>

      {/* The healing relationship — full treatment */}
      <section id="relationship" className="section">
        <div className="container">
          <p className="eyebrow">The healing relationship</p>
          <h2 className="display mt-5 max-w-3xl text-5xl text-forest">The relationship is the medicine.</h2>
          <div className="mt-8 max-w-4xl space-y-5 leading-8 text-mid">
            <p>Most of what wounds us happens in relationship. Even when the rupture was an accident, an illness, a loss — what lingers is often the aloneness inside it. The sense that no one was there.</p>
            <p>So it follows that healing happens in relationship too. What we build together is not a service I deliver to you. It is a living field between us — made of unconditional acceptance, steady presence, genuine curiosity, and real compassion. Over time, that field becomes something your nervous system can lean on. And then, slowly, something you carry inside you.</p>
            <p className="italic">This relationship can be part of the medicine you have been looking for.</p>
          </div>
          <div className="mt-10 grid gap-1 md:grid-cols-4">
            {relationshipCards.map(({ label, desc, img, pos }) => (
              <div className="overflow-hidden rounded-2xl" key={label}>
                <div className="relative h-64 w-full">
                  <Image src={img} alt={label} fill className="object-cover" style={{ objectPosition: pos }} sizes="(max-width:768px) 100vw, 25vw" />
                </div>
                <div className="bg-cream p-6">
                  <h3 className="display text-2xl text-forest">{label}</h3>
                  <p className="mt-3 text-sm leading-7 text-mid">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soul & Story */}
      <section id="soul-story" className="relative section overflow-hidden">
        <div className="absolute inset-0"><Image src="/images/soul-story-bg.webp" alt="Wild grasses and leaves in soft morning light" fill className="object-cover object-center" sizes="100vw" /></div>
        <div className="absolute inset-0 bg-forest/50" />
        <div className="container relative text-center text-cream">
          <p className="eyebrow mx-auto w-fit !text-gold-lt">Soul & story</p>
          <h2 className="display mt-5 text-5xl">Rewriting the narrative — with you as the author.</h2>
          <p className="body-large mx-auto mt-6 max-w-3xl text-cream/85">We work with every level of you — because the deepest healing happens when all of you is welcome in the room.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">{['Soul', 'Spiritual', 'Mystical', 'Emotional', 'Mental', 'Body'].map((x) => <span className="rounded-full border border-cream/40 bg-cream/10 px-5 py-3 text-cream" key={x}>{x}</span>)}</div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-warm">
        <div className="container max-w-3xl text-center">
          <h2 className="display text-5xl text-forest">You do not have to be finished to begin.</h2>
          <p className="body-large mt-6 text-mid">If this philosophy resonates, the next step is a conversation — free, unhurried, and yours.</p>
          <Link className="btn btn-forest mt-8" href="/connect">Let&rsquo;s Begin — Free 20-Minute Consultation</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
