import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { disclaimerText } from '@/lib/content';
import source from './copy.json';
import styles from './regulation.module.css';

const SITE_URL = 'https://alexislyon.com';
const PAGE_PATH = '/nervous-system-regulation';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Nervous System Regulation: It's Not About Becoming Less";
const PAGE_DESCRIPTION = 'What nervous system regulation really is, how to regulate your nervous system, and simple somatic exercises to build capacity, not shrink yourself.';
const OG_IMAGE = '/api/og?title=Nervous+System+Regulation&sub=Not+About+Becoming+Less';
const inlineLink = 'font-medium text-forest underline decoration-gold underline-offset-4 hover:text-sage';

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: { title: PAGE_TITLE, description: PAGE_DESCRIPTION, url: PAGE_URL, type: 'website', images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Nervous System Regulation — Alexis Lyon' }] },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION, images: [OG_IMAGE] }
};

type Block = { kind: string; text?: string; items?: (string | { text: string; goodFor: string })[]; rows?: string[][] };
const sections = source.sections as { heading: string; blocks: Block[] }[];
// Verbatim PREVIEW ONLY. Legal read FAQ5; FAQ3/4 and flagged body claims still block publication.
const faqs = source.faqs;
const pageSchema = [
  { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, name: PAGE_TITLE, description: PAGE_DESCRIPTION, url: PAGE_URL, inLanguage: 'en-US', author: { '@type': 'Person', name: 'Alexis Lyon', url: SITE_URL } },
  { '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${PAGE_URL}#faq`, mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }
];

/** Exact source text, with only the two approved contextual anchors inserted. */
function Text({ text }: { text: string }) {
  const anchors = [
    { label: 'Learn about somatic coaching →', href: '/somatic-coaching' },
    { label: 'psychological flexibility', href: '/blog/psychological-flexibility' }
  ];
  const anchor = anchors.find(a => text.includes(a.label));
  if (!anchor) return <>{text}</>;
  const at = text.indexOf(anchor.label);
  return <>{text.slice(0, at)}<Link className={inlineLink} href={anchor.href}>{anchor.label}</Link>{text.slice(at + anchor.label.length)}</>;
}

function CoachAnswer({ text }: { text: string }) {
  const label = 'somatic coach';
  const match = /\bsomatic coach\b/.exec(text);
  if (!match) return <>{text}</>;
  const at = match.index;
  return <>{text.slice(0, at)}<Link href="/somatic-coaching" className={inlineLink}>{label}</Link>{text.slice(at + label.length)}</>;
}

function ContentBlock({ block, sectionId }: { block: Block; sectionId: string }) {
  if (block.kind === 'subheading') return <h3 className="display pt-3 text-2xl font-normal leading-snug text-forest sm:text-3xl">{block.text}</h3>;
  if (block.kind === 'list') return <ul className="list-disc space-y-3 pl-6 marker:text-forest">{(block.items as string[]).map(item => <li key={item}>{item}</li>)}</ul>;
  if (block.kind === 'exercises') return <ol className="list-decimal space-y-6 pl-6 marker:font-medium marker:text-forest">{(block.items as {text: string; goodFor: string}[]).map(item => {
    const end = item.text.search(/[:.]/) + 1;
    return <li key={item.text} className="rounded-2xl border border-warm-dk bg-cream p-5 sm:p-7"><p><strong className="font-medium text-forest">{item.text.slice(0, end)}</strong>{item.text.slice(end)}</p><p className="mt-3 text-base leading-7 text-dark/80">{item.goodFor}</p></li>;
  })}</ol>;
  if (block.kind === 'table') {
    const [headers, ...rows] = block.rows!;
    return <table role="table" className={styles.tools} aria-labelledby={sectionId}><thead role="rowgroup"><tr role="row">{headers.map(header => <th role="columnheader" scope="col" key={header}>{header}</th>)}</tr></thead><tbody role="rowgroup">{rows.map((row, i) => <tr role="row" key={i}>{row.map((cell, j) => <td role="cell" key={j}><span aria-hidden="true" className={styles.cellLabel}>{headers[j]}</span>{cell}</td>)}</tr>)}</tbody></table>;
  }
  return <p><Text text={block.text!} /></p>;
}

export default function NervousSystemRegulation() {
  return <main id="page-content">
    <JsonLd data={pageSchema} />
    <Nav />
    <article data-regulation-article>
      <header className="dark-section relative isolate overflow-hidden">
        <Image src="/images/somatic-coaching-hero.webp" alt="Sunrise over a forested coastline and a calm bay" fill priority sizes="100vw" className="object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-0 bg-gradient-to-r from-forest/95 via-forest/80 to-forest/50" />
        <div className="container relative py-24 pt-36 sm:py-32 sm:pt-44"><h1 className="display max-w-4xl text-balance text-5xl leading-[1.1] sm:text-7xl md:text-8xl">{source.h1}</h1></div>
      </header>
      <div className="section"><div className="container max-w-[44rem] space-y-6 text-[1.0625rem] leading-[1.8] text-dark/80 sm:text-lg sm:leading-[1.85]">
        {source.intro.map((paragraph, i) => <p key={i} className={i === 0 ? 'display text-3xl leading-snug text-forest sm:text-4xl' : ''}>{paragraph}</p>)}
        <p className="pt-3"><Link href="/connect" className="btn btn-forest">Schedule Your Free Consultation →</Link></p>
      </div></div>
      {sections.map((section, index) => {
        const id = `regulation-section-${index + 1}`;
        return <Fragment key={section.heading}>
          <section className={`section ${index % 2 === 0 ? 'bg-warm/60' : 'bg-cream'}`} aria-labelledby={id}>
            <div className="container max-w-[44rem]">
              <span aria-hidden="true" className="mb-6 block h-px w-12 bg-gold" />
              <h2 id={id} className="display mb-9 text-balance text-4xl text-forest sm:text-5xl">{section.heading}</h2>
              <div className="space-y-6 text-[1.0625rem] leading-[1.8] text-dark/80 sm:text-lg sm:leading-[1.85]">{section.blocks.map((block, i) => <ContentBlock key={i} block={block} sectionId={id} />)}</div>
            </div>
          </section>
          {index === 5 && <div className="relative aspect-[16/7] max-h-[32rem] w-full"><Image src="/images/somatic-coaching-wildness.webp" alt="A sunlit wave breaking beside a green forested coastline" fill sizes="100vw" className="object-cover" /></div>}
        </Fragment>;
      })}
      <section className="section bg-warm/60" aria-labelledby="regulation-faq-heading"><div className="container max-w-[44rem]">
        <h2 id="regulation-faq-heading" className="display mb-9 text-4xl text-forest sm:text-5xl">Frequently Asked Questions</h2>
        <div className="divide-y divide-warm-dk border-y border-warm-dk">{faqs.map((faq, i) => <details key={faq.question} open={i === 0} className="group py-6"><summary className="cursor-pointer text-lg font-medium leading-relaxed text-forest">{faq.question}</summary><p className="pt-4 text-[1.0625rem] leading-[1.8] text-dark/80 sm:text-lg">{i === 4 ? <CoachAnswer text={faq.answer} /> : faq.answer}</p></details>)}</div>
      </div></section>
      <section className="section"><div className="container max-w-[44rem] text-center">
        <p className="display text-4xl leading-tight text-forest sm:text-5xl">{source.closing[0]}</p>
        <p className="mt-6 text-lg leading-8 text-dark/80">{source.closing[1]}</p>
        <Link href="/connect" className="btn btn-forest mt-8">Schedule Your Free Consultation →</Link>
        <p className="mt-10 text-sm leading-7 text-mid">{disclaimerText}</p>
      </div></section>
    </article>
    <Footer />
  </main>;
}
