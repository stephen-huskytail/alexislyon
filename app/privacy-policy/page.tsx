import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Alexis Lyon, including analytics and cookies, contact forms, privacy rights, and data deletion.',
  openGraph: {
    title: 'Privacy Policy',
    description: 'Analytics, cookies, privacy rights, and data practices for alexislyon.com.',
    images: [{ url: '/api/og?title=Privacy+Policy&sub=Analytics,+Cookies+and+Privacy+Rights', width: 1200, height: 630, alt: 'Privacy Policy' }]
  },
  twitter: { card: 'summary_large_image', images: ['/api/og?title=Privacy+Policy&sub=Analytics,+Cookies+and+Privacy+Rights'] },
  alternates: { canonical: '/privacy-policy' }
};

const effectiveDate = 'May 6, 2026';
const lastUpdated = 'October 17, 2026';

const highlights = [
  'This site uses two analytics tools: Vercel Web Analytics, which is cookieless, and Google Analytics, which uses first-party cookies.',
  'This site does not use ad trackers, retargeting pixels, or marketing cookies.',
  'You can opt out of Google Analytics at any time. The Analytics and Cookies section below explains how.',
  'Personal information submitted through forms is not sold.',
  'You may request access, correction, or deletion of information you voluntarily submit.'
];

const sections = [
  {
    title: 'Information You Provide',
    body: [
      'When you contact Alexis Lyon through this website, request a consultation, join a list, or download a resource, you may choose to provide information such as your name, email address, phone number, location, scheduling preferences, and the contents of your message.',
      'Please do not submit sensitive medical, mental health, financial, legal, or emergency information through the website forms. Forms are intended for general inquiries, consultation requests, and resource delivery.'
    ]
  },
  {
    title: 'Analytics and Cookies',
    body: [
      'This site uses two analytics tools to understand, in aggregate, how visitors find and use the site and how many people reach out, including consultation requests sent through the Connect form.',
      'Vercel Web Analytics is cookieless. It may collect information such as pages viewed, referrer, device or browser type, approximate region, and performance events. It does not use advertising cookies, retargeting cookies, or cross-site visitor profiles.',
      'Google Analytics 4, provided by Google, sets two first-party cookies on your device: _ga, which tells one visitor apart from another, and _ga_P07XZGT10P, which keeps track of your current visit. By Google’s default settings, both expire after 2 years. Google Analytics shows which pages are visited and how people arrive, and counts contact actions such as a successful Connect form request or a tap on an email or phone link. It is set up for measurement only, with Google’s advertising features turned off.',
      'What you write in the Connect form is never sent to Google. Neither is your email address or phone number.',
      'To opt out of Google Analytics, you can install the Google Analytics opt-out browser add-on. You can also block or delete cookies in your browser settings. Google handles the data it collects under its own privacy policy.'
    ],
    links: [
      { label: 'Google Analytics opt-out browser add-on', href: 'https://tools.google.com/dlpage/gaoptout' },
      { label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy' }
    ]
  },
  {
    title: 'How Information Is Used',
    body: [
      'Information you submit may be used to respond to your inquiry, schedule or follow up on a consultation, provide requested resources, send updates you requested, maintain business records, improve the website, prevent misuse, and comply with legal or administrative obligations.',
      'Alexis Lyon does not sell your personal information.'
    ]
  },
  {
    title: 'Third-Party Services',
    body: [
      'This website may use trusted third-party services to host the site, measure traffic, process forms, deliver email, or embed media. These may include Vercel, Google (for Google Analytics), email delivery providers, and other operational tools.',
      'Third-party services may process information only as needed to provide their services. If you interact with an embedded scheduler, email platform, video, payment tool, or other third-party feature, that provider may have its own privacy policy and terms.'
    ]
  },
  {
    title: 'Data Retention and Deletion',
    body: [
      'Information is kept only as long as reasonably necessary for the purposes described in this policy, including responding to inquiries, maintaining business records, resolving disputes, complying with legal requirements, and supporting legitimate administrative needs.',
      'You may request deletion of information you voluntarily submitted. Some information may need to be retained when required for legal, ethical, tax, security, or recordkeeping reasons.'
    ]
  },
  {
    title: 'CCPA / CPRA and GDPR Rights',
    body: [
      'Depending on where you live, you may have privacy rights under laws such as the California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA), the General Data Protection Regulation (GDPR), or similar privacy laws.',
      'These rights may include requesting access to personal information, correction, deletion, portability, restriction of processing, objection to processing, or information about how data is used. This site does not sell personal information or share it for cross-context behavioral advertising.',
      'To exercise privacy rights, contact Alexis through the contact form on this website. Requests will be reviewed and handled as required by applicable law.'
    ]
  },
  {
    title: 'Email Communications',
    body: [
      'If you provide your email address, Alexis may use it to respond to your inquiry, send requested resources, or provide updates you asked to receive. You may unsubscribe from marketing-style emails using an unsubscribe link if provided, or by contacting Alexis directly.',
      'Direct replies, scheduling messages, and service-related communications may still be sent as needed.'
    ]
  },
  {
    title: 'Security',
    body: [
      'Reasonable safeguards are used to protect information submitted through the website. However, no website, email, or internet transmission is completely secure. Do not use website forms for emergencies, crisis communication, or highly sensitive information.'
    ]
  },
  {
    title: 'Children’s Privacy',
    body: [
      'This website is intended for adults and is not directed to children under 13. Alexis Lyon does not knowingly collect personal information from children under 13 through this website.'
    ]
  },
  {
    title: 'Contact',
    body: [
      'For privacy questions, access requests, correction requests, or deletion requests, contact Alexis through the contact form on this website. This policy is provided for general transparency and should not be treated as legal advice.'
    ]
  }
];

export default function Privacy() {
  return (
    <main id="page-content">
      <Nav />
      <section className="section pt-36">
        <div className="container max-w-4xl">
          <p className="eyebrow">Website privacy</p>
          <h1 className="display mt-5 text-4xl sm:text-5xl md:text-6xl text-forest">Privacy Policy</h1>
          <p className="body-large mt-6 text-mid">Effective date: {effectiveDate} · Last updated: {lastUpdated}</p>

          <div className="mt-10 rounded-[2rem] border border-gold/30 bg-warm p-8 shadow-soft">
            <h2 className="display text-4xl text-forest">Short version</h2>
            <ul className="mt-5 space-y-3 text-mid">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 leading-7"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 space-y-10 text-mid">
            {sections.map((section) => (
              <section key={section.title} className="rounded-[1.5rem] bg-warm p-7">
                <h2 className="display text-3xl text-forest">{section.title}</h2>
                <div className="mt-4 space-y-4 leading-8">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.links && (
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <a className="font-medium text-forest underline decoration-gold underline-offset-4" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
