import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { posts } from '@/lib/posts';

const post = posts.find((p) => p.slug === 'psychological-flexibility')!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    type: 'article',
    publishedTime: post.datePublished,
    images: [{ url: '/api/og?title=Psychological+Flexibility&sub=How+Change+Actually+Happens', width: 1200, height: 630, alt: post.title }]
  },
  twitter: { card: 'summary_large_image', images: ['/api/og?title=Psychological+Flexibility&sub=How+Change+Actually+Happens'] }
};

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  url: `https://alexislyon.com/blog/${post.slug}`,
  datePublished: post.datePublished,
  dateModified: post.datePublished,
  inLanguage: 'en-US',
  author: { '@type': 'Person', name: 'Alexis Lyon', url: 'https://alexislyon.com' },
  publisher: { '@type': 'Person', name: 'Alexis Lyon', url: 'https://alexislyon.com' },
  image: 'https://alexislyon.com/api/og?title=Psychological+Flexibility&sub=How+Change+Actually+Happens',
  keywords: ['psychological flexibility', 'ACT therapy', 'acceptance and commitment'],
  mainEntityOfPage: `https://alexislyon.com/blog/${post.slug}`
};

export default function PsychologicalFlexibility() {
  return (
    <main id="page-content">
      <JsonLd data={articleJsonLd} />
      <Nav />
      <article className="section pt-36">
        <div className="container max-w-3xl">
          <p className="eyebrow">{post.eyebrow}</p>
          <h1 className="display mt-5 text-4xl sm:text-5xl text-forest">Psychological Flexibility: How Change Actually Happens</h1>
          <p className="mt-6 text-xs uppercase tracking-[.16em] text-mid">By Alexis Lyon · July 15, 2026 · {post.readingTime}</p>

          <div className="mt-10 space-y-6 leading-8 text-mid">
            <p className="body-large text-dark">You may have been told — or told yourself — that you need to finish healing before you are allowed to start living. Psychological flexibility is the research-backed answer to that myth.</p>
            <p>A damaging idea runs through much of the self-help and healing world: that growth must wait for wholeness. First fix yourself, then live. First close the wound, then open the dream. It sounds sensible. It is also untrue — and it quietly costs people years of their lives.</p>
            <p>Psychological flexibility is not the reward at the end of healing. It is what makes the journey possible.</p>

            <h2 className="display mt-12 text-3xl text-forest">What psychological flexibility is</h2>
            <p>The concept comes from Acceptance and Commitment Therapy (ACT), one of the most extensively researched approaches in contemporary psychology, developed by Steven C. Hayes and colleagues. Stripped of jargon, psychological flexibility is the capacity to stay present with difficulty while continuing to move toward what matters.</p>
            <p>Notice what that definition does not say. It does not say the difficulty resolves first. It does not say you feel ready. It says: the pain is here, and you move toward your values anyway — not by gritting your teeth, but by changing your relationship to what hurts.</p>
            <blockquote className="rounded-[2rem] bg-warm p-8">
              <p className="display text-2xl italic leading-relaxed text-forest">&ldquo;Stop asking what box you fit in. Start asking what helps you grow.&rdquo;</p>
              <cite className="mt-4 block text-xs uppercase tracking-[.2em] text-mid not-italic">Steven C. Hayes, ACT</cite>
            </blockquote>

            <h2 className="display mt-12 text-3xl text-forest">The three movements</h2>
            <p>In the work I do, psychological flexibility organizes into three living movements:</p>
            <ul className="space-y-4">
              <li className="flex gap-3"><span className="mt-1 shrink-0 text-gold">◆</span><span><strong className="font-medium text-forest">Awareness</strong> — coming into contact with this moment, in the body, as it actually is. Not the story about the moment. The moment.</span></li>
              <li className="flex gap-3"><span className="mt-1 shrink-0 text-gold">◆</span><span><strong className="font-medium text-forest">Openness</strong> — making room for what shows up when you do: the grief, the fear, the longing. Openness is not approval. It is the end of the exhausting war against your own inner weather.</span></li>
              <li className="flex gap-3"><span className="mt-1 shrink-0 text-gold">◆</span><span><strong className="font-medium text-forest">Active engagement</strong> — one values-led step, taken now, while the difficulty is still present. Not the whole staircase. One step.</span></li>
            </ul>
            <p>Awareness, openness, and active engagement create a life led by values — not by old protection strategies.</p>

            <h2 className="display mt-12 text-3xl text-forest">Why this is a body skill, not a mindset</h2>
            <p>Here is where my 22 years of trauma-informed clinical work make me insistent: psychological flexibility cannot be thought into existence. If your nervous system reads openness as danger — and after trauma, it often does — no amount of insight will hold when things get hard.</p>
            <p>That is why this work is somatic. We build the felt experience of safety first, at your pace, inside a steady relationship. As the body learns that aliveness does not have to equal danger, staying present with difficulty stops being a white-knuckle performance and becomes something your system can actually do. Insight becomes lived capacity.</p>

            <h2 className="display mt-12 text-3xl text-forest">Both. At the same time. Starting now.</h2>
            <p>This is the permission psychological flexibility grants, and the reason I build my work around it: you can be exactly where you are and take real steps toward the life you long for. Your symptoms do not disqualify your becoming. The wound does not have to close before the dream can open.</p>
            <p>You do not have to be finished to begin. You never did.</p>
          </div>

          <div className="mt-12 rounded-[2rem] bg-forest p-8 text-center text-cream">
            <p className="display text-3xl">This is the work I do. Let&rsquo;s talk.</p>
            <Link className="btn btn-gold mt-6" href="/connect">Schedule Your Free Consultation</Link>
          </div>

          <p className="mt-10 text-sm leading-7 text-mid">Related reading: <Link className="font-medium text-forest underline decoration-gold underline-offset-4" href="/blog/post-traumatic-growth">Post-Traumatic Growth — The Alchemy of the Wound</Link> · <Link className="font-medium text-forest underline decoration-gold underline-offset-4" href="/philosophy">The Philosophy Behind the Work</Link></p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
