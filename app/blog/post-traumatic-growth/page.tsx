import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { posts } from '@/lib/posts';

const post = posts.find((p) => p.slug === 'post-traumatic-growth')!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    type: 'article',
    publishedTime: post.datePublished,
    images: [{ url: post.image, width: 1536, height: 1024, alt: post.imageAlt }]
  },
  twitter: { card: 'summary_large_image', images: [post.image] }
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
  image: `https://alexislyon.com${post.image}`,
  keywords: ['post-traumatic growth', 'trauma healing', 'wound to wisdom'],
  mainEntityOfPage: `https://alexislyon.com/blog/${post.slug}`
};

export default function PostTraumaticGrowth() {
  return (
    <main id="page-content">
      <JsonLd data={articleJsonLd} />
      <Nav />
      <article className="section pt-36">
        <div className="container max-w-3xl">
          <p className="eyebrow">{post.eyebrow}</p>
          <h1 className="display mt-5 text-4xl sm:text-5xl text-forest">Post-Traumatic Growth: The Alchemy of the Wound</h1>
          <p className="mt-6 text-xs uppercase tracking-[.16em] text-mid">By Alexis Lyon · July 15, 2026 · {post.readingTime}</p>
          <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-[2rem] shadow-soft">
            <Image src={post.image} alt={post.imageAlt} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <div className="mt-10 space-y-6 leading-8 text-mid">
            <p className="body-large text-dark">The alchemy begins where the wound is honored and the wildness is free.</p>
            <p>There is a story our culture tells about trauma: that it breaks people, and that the best a survivor can hope for is to return to some approximation of who they were before. Recovery, in this story, means getting back to baseline.</p>
            <p>The research tells a different story — and so do the hundreds of people I have sat with over 22 years. Psychologists Richard Tedeschi and Lawrence Calhoun named it post-traumatic growth: the well-documented finding that many people who move through profound difficulty do not merely return to baseline. They grow beyond it — into deeper relationships, a stronger sense of their own capacities, a changed relationship with what matters, and a fuller, more honest life.</p>
            <p>Let me be careful here, because this idea is often misused. Post-traumatic growth does not mean the trauma was good, or necessary, or &ldquo;happened for a reason.&rdquo; It did not. Nothing about growth requires you to be grateful for what hurt you. The growth belongs to you — to your courage, your grieving, your willingness to stay — not to the event.</p>

            <h2 className="display mt-12 text-3xl text-forest">The wound must be honored first</h2>
            <p>Growth that skips the wound is not growth. It is performance. The nervous system knows the difference.</p>
            <p>The wound is what happened to you. It asks for witnessing, compassion, grief, and the kind of presence that says: I see you. When those needs are met — in a relationship steady enough to hold them — something begins to shift at the level of the body. What was frozen starts to move. What was held alone is finally held with another.</p>
            <p>Only then does the second territory open. Because there is a part of you the wound never touched: the power, truth, and fierce knowing that learned it was not welcome — and wants to come home. I call this the wildness. Healing tends the wound. Reclaiming frees the wildness. Post-traumatic growth is what happens when both are underway at once.</p>

            <h2 className="display mt-12 text-3xl text-forest">What grows</h2>
            <p>In my experience, the growth that emerges from honored pain tends to organize itself around a handful of values. They are worth naming, because they are often the first new ground a person feels under their feet:</p>
            <ul className="space-y-4">
              <li className="flex gap-3"><span className="mt-1 shrink-0 text-gold">◆</span><span><strong className="font-medium text-forest">Beauty</strong> — a sharpened capacity to notice what is alive and luminous, precisely because you know what darkness costs.</span></li>
              <li className="flex gap-3"><span className="mt-1 shrink-0 text-gold">◆</span><span><strong className="font-medium text-forest">Balance</strong> — the end of all-or-nothing living; the ability to hold grief and joy, tenderness and fire, in the same body on the same day.</span></li>
              <li className="flex gap-3"><span className="mt-1 shrink-0 text-gold">◆</span><span><strong className="font-medium text-forest">Growth</strong> — trust in your own becoming, earned in the places where you kept going.</span></li>
              <li className="flex gap-3"><span className="mt-1 shrink-0 text-gold">◆</span><span><strong className="font-medium text-forest">Truth</strong> — a lowered tolerance for self-abandonment; the quiet refusal to keep shrinking.</span></li>
              <li className="flex gap-3"><span className="mt-1 shrink-0 text-gold">◆</span><span><strong className="font-medium text-forest">Dignity</strong> — the felt knowledge that what happened to you does not define what you are worth.</span></li>
            </ul>

            <h2 className="display mt-12 text-3xl text-forest">You do not have to wait until you are healed</h2>
            <p>Here is the part I most want you to hear: post-traumatic growth is not a graduation ceremony at the end of healing. It happens alongside healing — while the difficulty is still present, while the grief still visits, while the work is still underway. You are allowed to want more while you are still healing. You can move toward the life your soul is calling you toward and tend the wound at the same time.</p>
            <p>Wound to wisdom is not a straight road, and no one walks it alone. It happens in relationship — with a steady other, with the natural world, and eventually with yourself. That is the alchemy: not the erasing of what happened, but the slow transformation of honored pain into a life that is more yours than it has ever been.</p>
          </div>

          <div className="mt-12 rounded-[2rem] bg-forest p-8 text-center text-cream">
            <p className="display text-3xl">This is the work I do. Let&rsquo;s talk.</p>
            <Link className="btn btn-gold mt-6" href="/connect">Schedule Your Free Consultation</Link>
          </div>

          <p className="mt-10 text-sm leading-7 text-mid">Related reading: <Link className="font-medium text-forest underline decoration-gold underline-offset-4" href="/blog/psychological-flexibility">Psychological Flexibility — How Change Actually Happens</Link> · <Link className="font-medium text-forest underline decoration-gold underline-offset-4" href="/philosophy">The Philosophy Behind the Work</Link></p>
        </div>
      </article>
      <Footer />
    </main>
  );
}
