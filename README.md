# Alexis Lyon Website

Next.js 14 App Router rebuild for alexislyon.com. Content is intentionally hardcoded in components/data for launch — no CMS/Sanity dependency.

## Stack
- Next.js 14 / TypeScript / Tailwind CSS
- Framer Motion scroll reveals
- React Hook Form + Zod contact form
- Resend-compatible server action endpoint
- Vercel Analytics

## Local development
```bash
npm install
npm run dev
```

## Environment variables
Copy `.env.example` to `.env.local` and fill values as they become available.

- `NEXT_PUBLIC_SITE_URL` — public site URL
- `NEXT_PUBLIC_GA_ID` — optional GA4 measurement ID
- `NEXT_PUBLIC_CALENDLY_URL` — inline Calendly embed URL
- `RESEND_API_KEY` — enables contact form email sending
- `CONTACT_TO_EMAIL` — inbox for form notifications
- `CONTACT_FROM_EMAIL` — verified sender for Resend

If Resend variables are absent, the contact API validates and returns success without sending, so preview builds do not fail.

## Notes
- Services are described as transformational coaching/guidance, not therapy.
- Replace placeholder photo/video/testimonial assets once Alexis provides approved materials.
