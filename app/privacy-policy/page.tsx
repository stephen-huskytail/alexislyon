import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Alexis Lyon, including cookieless analytics, no cookie banner, contact forms, privacy rights, and data deletion.'
};

const effectiveDate = 'May 6, 2026';

const highlights = [
  'This site uses Vercel Web Analytics, which is cookieless and privacy-friendly.',
  'This site does not use ad trackers, retargeting pixels, or marketing cookies.',
  'A cookie banner is not shown because the site does not currently set non-essential cookies.',
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
    title: 'Analytics — No Cookies, No Banner',
    body: [
      'This site uses Vercel Web Analytics to understand basic website activity, performance, and visitor behavior in aggregate. Vercel Analytics may collect information such as pages viewed, referrer, device or browser type, approximate region, and performance events.',
      'Vercel Web Analytics is designed to be privacy-friendly and cookieless. It does not use advertising cookies, retargeting cookies, or cross-site visitor profiles. Because the site currently relies on cookieless analytics and does not set non-essential marketing cookies, a cookie consent banner is not displayed.',
      'If tools are added later that set non-essential cookies — including Google Analytics 4, Meta Pixel, remarketing tags, or cookie-based embeds — the site should add an appropriate consent mechanism before those tools go live.'
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
      'This website may use trusted third-party services to host the site, measure traffic, process forms, deliver email, schedule appointments, or embed media. These may include Vercel, email delivery providers, Calendly or a similar scheduling service, and other operational tools.',
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
    <main>
      <Nav />
      <section className="section pt-36">
        <div className="container max-w-4xl">
          <p className="eyebrow">Website privacy</p>
          <h1 className="display mt-5 text-6xl text-forest">Privacy Policy</h1>
          <p className="body-large mt-6 text-mid">Effective date: {effectiveDate}</p>

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
