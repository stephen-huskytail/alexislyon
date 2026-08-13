import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { meta } from '@/lib/content';
import { posts } from '@/lib/posts';

export const metadata: Metadata = {
  title: meta.blog,
  description: 'Writing from Alexis Lyon on trauma healing, post-traumatic growth, psychological flexibility, and the nervous system.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Alexis Lyon',
    description: 'Writing on trauma healing, post-traumatic growth, psychological flexibility, and the nervous system.',
    images: [{ url: '/api/og?title=Blog&sub=Writing+on+Healing+and+Growth', width: 1200, height: 630, alt: 'Alexis Lyon Blog' }]
  },
  twitter: { card: 'summary_large_image', images: ['/api/og?title=Blog&sub=Writing+on+Healing+and+Growth'] }
};

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Alexis Lyon Blog',
  url: 'https://alexislyon.com/blog',
  description: 'Writing on trauma healing, post-traumatic growth, psychological flexibility, and the nervous system.',
  inLanguage: 'en-US',
  author: { '@type': 'Person', name: 'Alexis Lyon', url: 'https://alexislyon.com' },
  blogPost: posts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: `https://alexislyon.com/blog/${p.slug}`,
    datePublished: p.datePublished,
    author: { '@type': 'Person', name: 'Alexis Lyon' }
  }))
};

export default function Blog() {
  return (
    <main id="page-content">
      <JsonLd data={blogJsonLd} />
      <Nav />
      <section className="section pt-36">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1 className="display mt-5 max-w-4xl text-4xl sm:text-5xl md:text-6xl text-forest">Writing on healing, growth, and the nervous system.</h1>
          <p className="body-large mt-7 max-w-3xl text-mid">Depth material for the curious reader — the frameworks, science, and soul beneath the work.</p>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {posts.map((p) => (
              <article className="card flex h-full flex-col bg-cream" key={p.slug}>
                {p.eyebrow && <p className="eyebrow">{p.eyebrow}</p>}
                <h2 className={`display text-3xl text-forest ${p.eyebrow ? 'mt-5' : ''}`}><Link className="transition-colors hover:text-sage" href={`/blog/${p.slug}`}>{p.title}</Link></h2>
                <p className="mt-4 flex-1 leading-8 text-mid">{p.description}</p>
                {(p.datePublished || p.readingTime) && (
                  <div className="mt-6 flex items-center justify-between border-t border-warm-dk pt-4 text-xs uppercase tracking-[.16em] text-mid">
                    <span>{p.datePublished ? new Date(`${p.datePublished}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }) : null}</span>
                    <span>{p.readingTime}</span>
                  </div>
                )}
                <Link className="btn btn-forest mt-6 self-start" href={`/blog/${p.slug}`}>Read the essay</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
