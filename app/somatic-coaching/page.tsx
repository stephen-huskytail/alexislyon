import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { disclaimerText } from '@/lib/content';

const SITE_URL = 'https://alexislyon.com';
const PAGE_PATH = '/somatic-coaching';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = 'Somatic Coaching Online with Alexis Lyon';
const PAGE_DESCRIPTION =
  'Trauma-informed somatic coaching, online worldwide. Regulate your nervous system, heal the wound, and reclaim the wildness in you.';
const OG_IMAGE = '/api/og?title=Somatic+Coaching&sub=For+the+Wound+and+the+Wildness';
const HERO_IMAGE = '/images/somatic-coaching-hero.webp';

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: 'Somatic Coaching for the Wound and the Wildness',
    description: 'Trauma-informed somatic coaching with Alexis Lyon. Online worldwide, and in person on the Pacific coast of Costa Rica.',
    url: PAGE_URL,
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Somatic Coaching — Alexis Lyon' }]
  },
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] }
};

const practices: Array<[string, string]> = [
  ['Nervous system regulation', 'learning your own signals of stress, shutdown, and safety, and practices to come back to center'],
  ['Somatic awareness', 'tracking sensation, breath, and impulse so your body becomes a source of information, not just alarm'],
  ['Psychological flexibility', 'tools drawn from ACT-based frameworks to hold hard feelings without being run by them'],
  ['Values and direction', 'turning what you reclaim into choices that fit the life you actually want'],
  ['Nature-based sessions', 'for clients in Costa Rica, working outdoors where the body often settles faster']
];

const goodFit = [
  'Understand your story but still feel stuck in the same reactions',
  'Live in a body that’s always braced, anxious, numb, or exhausted',
  'Have done years of inner work and want something that reaches deeper than talking',
  'Keep overriding your own knowing, and want to learn to trust yourself again',
  'Sense there’s more power, truth, or aliveness in you waiting to come back'
];

const faqs = [
  {
    question: 'What is somatic coaching?',
    answer: 'Somatic coaching is body-based coaching. It uses awareness of sensation, breath, and the nervous system to help you change patterns that insight alone hasn’t shifted.'
  },
  {
    question: 'Is somatic coaching the same as therapy?',
    answer: 'No. Coaching is not therapy and does not diagnose or treat mental health conditions. My clinical background informs how I work, but our relationship is a coaching relationship. If you’re looking for therapy, I’m glad to help you think about where to find it.'
  },
  {
    question: 'Can somatic coaching work online?',
    answer: 'Yes. Online somatic coaching happens by video, with you in your own space. Many clients find it easier to practice in the place they actually live.'
  },
  {
    question: 'What does trauma-informed somatic coaching mean?',
    answer: 'It means we go at your nervous system’s pace. You stay in charge of what we explore, and we build safety and capacity before going deeper.'
  },
  {
    question: 'How do I get started?',
    answer: 'Book a free 20-minute consultation. We’ll talk about what you’re hoping for and whether we’re a good fit.'
  }
];

const somaticCoachingJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: PAGE_DESCRIPTION,
    inLanguage: 'en-US',
    isPartOf: { '@type': 'WebSite', url: SITE_URL, name: 'Alexis Lyon' },
    about: { '@id': `${PAGE_URL}#service` },
    primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_URL}${HERO_IMAGE}` },
    author: { '@type': 'Person', name: 'Alexis Lyon', url: SITE_URL }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${PAGE_URL}#service`,
    name: 'Somatic Coaching with Alexis Lyon',
    serviceType: 'Somatic coaching',
    description:
      'Trauma-informed somatic coaching that works with breath, posture, sensation, and the nervous system to regulate, witness the wound, and reclaim the wildness. Online worldwide and in person on the Pacific coast of Costa Rica.',
    url: PAGE_URL,
    provider: {
      '@type': 'Person',
      name: 'Alexis Lyon',
      url: SITE_URL,
      jobTitle: 'Transformational Guide and Somatic Healing Coach',
      hasCredential: 'Licensed Marriage and Family Therapist, California'
    },
    areaServed: ['Worldwide', 'Costa Rica'],
    availableChannel: {
      '@type': 'ServiceChannel',
      name: 'Online video sessions',
      serviceUrl: `${SITE_URL}/connect`,
      availableLanguage: 'en'
    },
    offers: {
      '@type': 'Offer',
      name: 'Free 20-Minute Consultation',
      url: `${SITE_URL}/connect`,
      availability: 'https://schema.org/InStock',
      priceSpecification: { '@type': 'PriceSpecification', price: 0, priceCurrency: 'USD', description: 'Free initial consultation — no commitment required' }
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Somatic Coaching', item: PAGE_URL }
    ]
  }
];

const inlineLink = 'font-medium text-forest underline decoration-gold underline-offset-4 hover:text-sage';

export default function SomaticCoaching() {
  return (
    <main id="page-content">
      <JsonLd data={somaticCoachingJsonLd} />
      <Nav />

      {/* Hero */}
      <section id="hero" className="dark-section dark relative flex min-h-[82vh] items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="First light over green rainforest sloping down to a calm Pacific bay on the coast of Costa Rica"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/75 to-forest/45" aria-hidden="true" />
        <div className="container relative pb-16 pt-32">
          <Reveal><p className="eyebrow">Somatic coaching · Online worldwide</p></Reveal>
          <Reveal delay={0.12}>
            <h1 className="display mt-8 max-w-4xl text-4xl sm:text-6xl md:text-7xl">
              Somatic Coaching for the <em className="gold">Wound</em> and the <em className="gold">Wildness</em>
            </h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mt-8 max-w-3xl text-[1.2rem] leading-[1.9]">Your body has been carrying what happened to you. It is also holding what you were never allowed to become.</p>
            <p className="mt-4 max-w-3xl text-[1.2rem] leading-[1.9]">Somatic coaching works with both. We regulate the nervous system so the wound can finally be witnessed, and so the wildness in you can safely come home.</p>
          </Reveal>
          <Reveal delay={0.36}>
            <div className="mt-10"><Link className="btn btn-gold" href="/connect">Book a free 20-minute consultation&nbsp;→</Link></div>
            <p className="mt-6 text-xs uppercase tracking-[.18em] text-cream/75 sm:text-sm">Online worldwide · In person on the Pacific coast of Costa Rica</p>
          </Reveal>
        </div>
      </section>

      {/* What is somatic coaching? */}
      <section id="what-is-somatic-coaching" className="section">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow">The body, not just the mind</p>
            <h2 className="display mt-5 text-4xl text-forest sm:text-5xl">What is somatic coaching?</h2>
            <div className="mt-7 space-y-5 leading-8 text-mid">
              <p className="body-large text-dark">Somatic coaching is guided work with the body, not just the mind. &ldquo;Soma&rdquo; means the living body, the one that remembers, braces, shuts down, and longs.</p>
              <p>Most of us have tried to think our way out of old patterns. Insight helps, but the body often keeps reacting anyway. Somatic coaching works where those patterns actually live: in breath, posture, sensation, and the nervous system.</p>
              <p>Together we learn to notice what your body is doing, to settle it, and to build capacity for more feeling, more truth, and more aliveness. Over time, regulation becomes the ground that self-trust grows from.</p>
            </div>
          </div>
          <Reveal delay={0.12}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/images/somatic-coaching-body.webp"
                alt="Dew on fern fronds in soft morning light inside a green rainforest"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) calc(100vw - 3rem), 45vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* The wound and the wildness */}
      <section id="wound-and-wildness" className="section bg-warm">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Two territories</p>
            <h2 className="display mt-5 max-w-4xl text-4xl text-forest sm:text-5xl">Healing for the wound. Reclaiming for the wildness.</h2>
            <p className="body-large mt-6 max-w-3xl text-mid">My somatic coaching moves between two territories. Most people arrive needing one, and discover they need both.</p>
          </Reveal>
          <div className="mt-12 grid gap-1 md:grid-cols-2">
            <div className="card bg-cream">
              <div className="relative mb-7 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src="/images/somatic-coaching-wound.webp"
                  alt="A still, sheltered forest pool at dawn reflecting soft green canopy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) calc(100vw - 6rem), 520px"
                />
              </div>
              <p className="eyebrow">What happened to you</p>
              <h3 className="display mt-5 text-4xl text-forest">The Wound</h3>
              <p className="mt-5 leading-8 text-mid">The Wound is what happened to you. The losses, the betrayals, the years of holding it together. It doesn&rsquo;t need fixing. It needs witnessing, in a body that feels safe enough to let it be seen. This is where trauma-informed somatic coaching begins: slowly, at your pace, with your nervous system leading.</p>
            </div>
            <div className="card bg-cream">
              <div className="relative mb-7 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src="/images/somatic-coaching-wildness.webp"
                  alt="A Pacific wave breaking against a green Costa Rican shore at golden hour"
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) calc(100vw - 6rem), 520px"
                />
              </div>
              <p className="eyebrow">What you put away to survive</p>
              <h3 className="display mt-5 text-4xl text-forest">The Wildness</h3>
              <p className="mt-5 leading-8 text-mid">The Wildness is what you had to put away to survive. Your anger, your desire, your voice, your knowing. It hasn&rsquo;t gone anywhere. As your body learns it is safe, that power starts wanting to return, and we make room for it.</p>
            </div>
          </div>
          <p className="display mt-10 max-w-3xl text-2xl italic text-forest sm:text-3xl">The relationship between us is part of the medicine. You are not doing this alone.</p>
        </div>
      </section>

      {/* How we work together */}
      <section id="how-we-work-together" className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="eyebrow">Sessions</p>
              <h2 className="display mt-5 text-4xl text-forest sm:text-5xl">How we work together</h2>
              <p className="body-large mt-6 text-mid">Sessions blend body awareness with clear, practical frameworks. Depending on what you need, our work may include:</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {practices.map(([title, detail], i) => (
                <Reveal key={title} delay={i * 0.04}>
                  <div className="card h-full">
                    <span className="text-gold">◆</span>
                    <h3 className="display mt-4 text-2xl text-forest">{title}</h3>
                    <p className="mt-3 leading-7 text-mid">{detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="mt-12 rounded-[2rem] bg-forest p-8 text-cream lg:p-10">
            <p className="eyebrow !text-gold-lt">Getting started</p>
            <p className="mt-5 max-w-3xl leading-8 text-cream/85">We start with a free 20-minute consultation to see if we&rsquo;re a fit. From there, sessions are held by video, and we build the right container together rather than from a menu. Packages range from $100&ndash;$1,000 per month, depending on the depth and frequency of support you are looking for.</p>
            <Link className="btn btn-gold mt-7" href="/connect">Book your free consultation&nbsp;→</Link>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section id="who-this-is-for" className="section bg-warm">
        <div className="container grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow">You belong here</p>
            <h2 className="display mt-5 text-4xl text-forest sm:text-5xl">Who this is for</h2>
            <p className="body-large mt-6 text-mid">Somatic coaching may be a good fit if you:</p>
          </div>
          <div>
            <ul className="grid gap-3">
              {goodFit.map((item) => (
                <li key={item} className="flex gap-4 rounded-2xl border border-warm-dk bg-cream p-5 leading-7 text-mid">
                  <span className="mt-1 shrink-0 text-gold">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 leading-8 text-mid">You don&rsquo;t need to be in crisis, and you don&rsquo;t need a diagnosis. You need to be ready to listen to your body, and to let it lead.</p>
          </div>
        </div>
      </section>

      {/* Online, wherever you are */}
      <section id="online-somatic-coaching" className="section">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Wherever you are</p>
            <h2 className="display mt-5 text-4xl text-forest sm:text-5xl">Online somatic coaching, wherever you are</h2>
            <div className="mt-7 space-y-5 leading-8 text-mid">
              <p>Most clients work with me online, by video, from anywhere in the world. Somatic coaching online works better than many people expect. Your body is right there with you, in your own space, which often makes new practices easier to carry into daily life.</p>
              <p>If you&rsquo;re in or visiting Costa Rica, I also offer in-person, nature-based sessions on the Pacific coast.</p>
              <p><Link className={inlineLink} href="/#natural-world">How the natural world becomes part of the work →</Link></p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/somatic-coaching-online.webp"
                alt="A quiet, sunlit corner of a home with a linen armchair beside an open window"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 50vw, 25vw"
              />
            </div>
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/images/somatic-coaching-costa-rica.webp"
                alt="A footpath through Costa Rican rainforest opening toward the Pacific ocean"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Your somatic coach */}
      <section id="your-somatic-coach" className="section bg-warm">
        <div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
          <div className="relative mx-auto aspect-[3/4] w-64 overflow-hidden rounded-t-full shadow-soft sm:w-80 lg:mx-0 lg:w-full lg:max-w-[22rem]">
            <Image
              src="/images/alexis-about-portrait.jpg"
              alt="Alexis Lyon, transformational guide and somatic healing coach"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1023px) 320px, 352px"
            />
          </div>
          <div>
            <p className="eyebrow">Meet Alexis</p>
            <h2 className="display mt-5 text-4xl text-forest sm:text-5xl">Your somatic coach</h2>
            <div className="mt-7 space-y-5 leading-8 text-mid">
              <p>I&rsquo;m Alexis Lyon, a transformational guide and somatic healing coach. I bring 22 years of clinical experience as a licensed marriage and family therapist (LMFT) in California. That clinical depth shapes how I hold space: trauma-informed, paced, and grounded in how nervous systems actually heal.</p>
              <p>Somatic coaching is a coaching service, distinct from therapy: it doesn&rsquo;t diagnose or treat, and it isn&rsquo;t a substitute for clinical care. In this work, my focus is somatic regulation, self-trust, psychological flexibility, and post-traumatic growth: not just recovering from what happened, but becoming more of who you are because of it.</p>
              <p><Link className={inlineLink} href="/about">More about me →</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container max-w-4xl">
          <p className="eyebrow">Questions</p>
          <h2 className="display mt-5 text-4xl text-forest sm:text-5xl">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-warm-dk">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="py-7">
                <h3 className="display text-2xl text-forest sm:text-3xl">{question}</h3>
                <p className="mt-3 leading-8 text-mid">{answer}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-2xl bg-warm p-5 text-sm leading-7 text-mid">{disclaimerText}</p>
        </div>
      </section>

      {/* Closing CTA */}
      <section id="begin" className="section relative overflow-hidden">
        <div className="absolute inset-0"><Image src="/images/soul-story-bg.webp" alt="" fill className="object-cover object-center" sizes="100vw" /></div>
        <div className="absolute inset-0 bg-forest/65" aria-hidden="true" />
        <div className="container relative max-w-3xl text-center text-cream">
          <h2 className="display text-4xl sm:text-5xl">Your body already knows the way back.</h2>
          <p className="body-large mx-auto mt-6 max-w-2xl text-cream/85">Let&rsquo;s find out if we&rsquo;re a fit. The consultation is free, 20 minutes, and online.</p>
          <Link className="btn btn-gold mt-8" href="/connect">Book your free consultation&nbsp;→</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
