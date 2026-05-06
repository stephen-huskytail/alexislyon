import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Alexis Lyon, including contact forms, analytics, cookies, and privacy choices.'
};

const effectiveDate = 'May 6, 2026';

const sections = [
  {
    title: 'Information you choose to share',
    body: [
      'When you submit a contact form, request a consultation, join an email list, or send a message through this website, we may collect the information you provide, such as your name, email address, phone number, message, scheduling preferences, and any other details you choose to include.',
      'Please do not submit sensitive health, mental health, financial, or emergency information through website forms. Website forms are for general inquiries and scheduling only.'
    ]
  },
  {
    title: 'How information is used',
    body: [
      'Information you submit may be used to respond to your inquiry, schedule a consultation, deliver requested resources, provide updates you asked to receive, maintain basic records, improve the website, and comply with legal or administrative obligations.',
      'We do not sell your personal information.'
    ]
  },
  {
    title: 'Analytics and website measurement',
    body: [
      'This website uses Vercel Web Analytics to understand general site performance and visitor activity, such as page views, referrers, device/browser information, and approximate geography. This helps improve the website experience and identify technical issues.',
      'Vercel Web Analytics is designed to be privacy-friendly and does not use advertising cookies, cross-site tracking cookies, or personally identifying visitor profiles. Analytics information is viewed in aggregate whenever possible.'
    ]
  },
  {
    title: 'Cookies and why there is no cookie banner',
    body: [
      'This website is intentionally built without advertising trackers, retargeting pixels, or non-essential tracking cookies. Because the site only uses privacy-friendly, cookieless analytics and does not currently set non-essential marketing cookies, a cookie consent banner is not displayed.',
      'If future tools are added that set non-essential cookies — such as embedded advertising pixels, remarketing tags, or cookie-based analytics — this policy and the consent experience should be updated before those tools go live.'
    ]
  },
  {
    title: 'Third-party services',
    body: [
      'The website may rely on trusted third-party providers to operate the site and respond to inquiries, including hosting, analytics, form delivery, email delivery, and scheduling tools. These providers may process information only as needed to provide their services.',
      'If a scheduling embed, payment tool, email platform, or video embed is added, that provider may have its own privacy policy and terms. You should review those policies before submitting information through third-party tools.'
    ]
  },
  {
    title: 'Email and communications',
    body: [
      'If you provide your email address, Alexis may use it to respond to your request or send resources and updates you requested. You may unsubscribe from marketing-style emails at any time using the unsubscribe link if one is provided, or by contacting Alexis directly.',
      'Transactional or direct-response messages related to an inquiry, scheduling request, or client relationship may still be sent as needed.'
    ]
  },
  {
    title: 'Data retention',
    body: [
      'Information is kept only as long as reasonably necessary for the purposes described in this policy, including responding to inquiries, maintaining business records, resolving disputes, and complying with legal obligations.',
      'You may request that voluntarily submitted information be corrected or deleted, subject to legal, ethical, administrative, or recordkeeping requirements.'
    ]
  },
  {
    title: 'Security',
    body: [
      'Reasonable safeguards are used to protect information submitted through the website. However, no website, email, or internet transmission is completely secure. Do not use website forms for emergencies, crisis communication, or highly sensitive information.'
    ]
  },
  {
    title: 'Children’s privacy',
    body: [
      'This website is intended for adults and is not directed to children under 13. We do not knowingly collect personal information from children under 13 through this website.'
    ]
  },
  {
    title: 'Your choices',
    body: [
      'You may choose not to submit information through website forms. You may also request access, correction, deletion, or limits on future communications by contacting Alexis through the contact information or form on this website.',
      'Depending on where you live, you may have additional privacy rights under applicable laws. Requests will be reviewed and handled as required by applicable law.'
    ]
  },
  {
    title: 'Changes to this policy',
    body: [
      'This policy may be updated from time to time as the website, services, or legal requirements change. The effective date above reflects the latest version.'
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
          <div className="mt-10 space-y-10 text-mid">
            <p className="body-large">
              This Privacy Policy explains how information is collected, used, and protected when you visit alexislyon.com or contact Alexis Lyon through this website.
            </p>
            {sections.map((section) => (
              <section key={section.title} className="rounded-[1.5rem] bg-warm p-7">
                <h2 className="display text-3xl text-forest">{section.title}</h2>
                <div className="mt-4 space-y-4 leading-8">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
            <div className="rounded-[1.5rem] border border-gold/30 p-7">
              <h2 className="display text-3xl text-forest">Contact</h2>
              <p className="mt-4 leading-8">
                For privacy questions or requests, contact Alexis through the contact form on this website. This policy is provided for general transparency and should not be treated as legal advice.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
