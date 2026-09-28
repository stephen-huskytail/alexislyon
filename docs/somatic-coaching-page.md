# Somatic Coaching page — build notes, handoff, and SEO recommendations

Built 2026-09-28 from Alexis's draft copy doc "Somatic Coaching Page — Draft Copy" (Sep 25, 2026).
Route: `/somatic-coaching` (`app/somatic-coaching/page.tsx`). Test: `e2e/somatic-coaching.spec.ts`.

## What shipped

- Full page from the draft: hero (H1 "Somatic Coaching for the Wound and the Wildness"), What is somatic coaching?, Healing for the wound / Reclaiming for the wildness, How we work together, Who this is for, Online somatic coaching wherever you are, Your somatic coach, FAQ (5), closing CTA. Every H2 matches the draft's heading text.
- Metadata per the brief: title tag `Somatic Coaching Online with Alexis Lyon` (40 chars, rendered without the site template suffix), meta description 130 chars, canonical `/somatic-coaching`, OG/Twitter card via `/api/og`.
- Structured data: `WebPage`, `Service` (provider = Person, free 20-minute consultation offer), `FAQPage` mirroring the five visible questions, `BreadcrumbList`.
- Internal links in: homepage `#work` block (below the offering), Philosophy nervous-system primer, footer. Person schema `knowsAbout` on home + about now includes "Somatic coaching". Sitemap entry added at priority 0.8.
- All CTAs go to `/connect`. `/about` and homepage `#natural-world` are the other outbound links.
- Vocabulary guard: the page never uses "telehealth" or "somatic therapist" (asserted by the test), per the brief's "deliberately avoided" list. "Therapy" appears only in the coaching-is-not-therapy context the draft wrote.

## Imagery

Six generated images (Higgsfield, GPT Image 2, no people, no text) plus Alexis's real portrait (`alexis-about-portrait.jpg`) for "Your somatic coach":

| File | Placement | Subject |
|---|---|---|
| `somatic-coaching-hero.webp` (1920w) | Hero | Costa Rican rainforest to a calm Pacific bay at first light |
| `somatic-coaching-body.webp` | What is somatic coaching? | Dew on fern fronds, dawn light |
| `somatic-coaching-wound.webp` | The Wound card | Still forest pool, mirror-calm |
| `somatic-coaching-wildness.webp` | The Wildness card | Pacific wave breaking against a green shore, golden hour |
| `somatic-coaching-online.webp` | Online section | Sunlit linen armchair by an open window |
| `somatic-coaching-costa-rica.webp` | Online section | Rainforest footpath opening to the ocean |

Closing CTA reuses the existing `soul-story-bg.webp` (Philosophy pattern).

## Placeholders in the draft and how they were filled (Alexis to confirm)

| Draft placeholder | What the page says now | Why |
|---|---|---|
| `[session length, format, and package details]` | Sessions by video; container built together, not a menu; packages $100–$1,000/month by depth and frequency | Copied from the live homepage Investment block. The live site no longer states a session length (removed in the HT-358 restructure), so none was added. |
| `[Link to nature-based sessions page once live]` | Links to homepage `#natural-world` | No nature-based page exists yet. Repoint when it does. |
| `Disclaimer: [paste your existing site disclaimer here]` | Site-wide `disclaimerText` from `lib/content.ts` | Same text the homepage and footer use. |
| Optional client testimonial | Omitted | Still waiting on 2–3 real testimonials; nothing verified to quote. |
| CTA text | Kept "Book a free 20-minute consultation" verbatim | Note: `/connect` is a contact form, not a calendar. The rest of the site says "Schedule Your Free Consultation"; switch if the word "Book" over-promises. |
| Primary nav | Not added | IA decision for Stephen/Alexis; see recommendation 1 below. |

## Keyword data (Ahrefs, US, pulled 2026-09-28)

| Keyword | US vol | Global | KD | Notes |
|---|---|---|---|---|
| somatic coaching | 800 | 1,700 | 5 | Primary. Parent topic "what is somatic coaching". |
| somatic coach | 350 | 900 | 20 | Same parent topic in practice; the "Your somatic coach" H2 carries it. |
| what is somatic coaching | 200 | 300 | 2 | H2 + FAQ 1 target this. |
| what is a somatic coach | 150 | — | 7 | Covered by the same section. |
| somatic healing coach | 90 | 150 | — | About paragraph. |
| somatic life coach | 70 | 100 | 6 | Not used; optional synonym. |
| nervous system coach | 90 | 200 | 34 | Points to the future regulation hub. |
| nervous system regulation coach | 40 | 80 | — | Same. |
| trauma informed somatic coaching | 30 | 30 | — | Wound paragraph + FAQ 4. |
| somatic coaching online | 20 | 20 | — | H2 + FAQ 3. |
| somatic coaching near me | 20 | — | — | Ignore; not a local business. |
| somatic coaching certification | 200 | 350 | 10 | Training intent. Do not target. |
| somatic therapy online | 200 | 350 | 2 | Off-limits wording ("therapy" as a service). |
| somatic healing | 6,700 | 12,000 | 63 | Informational; parent "somatic therapy" (47k). Blog territory, not this page. |

Site baseline: Ahrefs reports **0 organic keywords and 0 organic traffic** for alexislyon.com (US) as of 2026-09-27. This is the first page on the site aimed at a non-branded query.

SERP for "somatic coaching" (US): AI Overview on top (cites coachingstudies.org, positivepsychology.com, sspwellnesscenter.org); People Also Ask: "What is somatic coaching?", "What happens in somatic coaching?", "What are examples of somatic practices?", "What is the difference between a somatic coach and a somatic therapist?". Organic #2 is a DR 40 definitional article; #4 is a **DR 2** site with a "somatic coaching vs somatic therapy" post; #5–#6 and #10 are certification/training pages; #8 is Reddit. A low-authority practitioner site can rank here, and the SERP rewards clear definitions and the coach-vs-therapy comparison.

## SEO recommendations (site-level, related to this page)

1. **Add "Somatic Coaching" to the primary nav.** Site-wide nav is the strongest internal-link signal the site can give this page. Needs a visual check at 1024–1280px (six items plus the Begin button) and a decision on whether it sits beside or replaces "Work With Me".
2. **Answer the two open PAA questions.** Add FAQ entries "What happens in a somatic coaching session?" and "How is somatic coaching different from somatic therapy?" (phrase it without "somatic therapist"). The second one is exactly what the DR 2 site ranks #4 with.
3. **Supporting blog posts, each linking to `/somatic-coaching`:** "Somatic coaching vs. somatic therapy: what's the difference" and "What happens in a somatic coaching session". Add contextual links from the existing psychological-flexibility and bumpy-road essays wherever "somatic" or "nervous system" appears.
4. **Build the nervous system regulation hub** the brief anticipates (`/nervous-system-regulation`): lift the Philosophy "brief primer" into a full page, target "nervous system coach" (90) and "nervous system regulation coach" (40), and cross-link both ways with this page.
5. **Homepage descriptor:** the site's title/OG/Person schema say "Somatic Healer" (no search demand). Use "Somatic Coach" as the descriptor (e.g. `Alexis Lyon | Somatic Coach & Transformational Guide`) and set Person `jobTitle` to match. Keep the homepage brand-first so it does not compete with `/somatic-coaching` for the topic.
6. **Search Console:** submit the sitemap if not already done (open item from the June launch), then request indexing for `/somatic-coaching` after release. Zero Ahrefs keywords means the site's index footprint should be checked too.
7. **Off-page:** Person schema `sameAs` is an empty array. Populate it with Alexis's LinkedIn/Instagram and point those profiles' website fields at `/somatic-coaching`. Two or three real coaching-directory or podcast-guest links would outrank most of this SERP's referring-domain counts (the #2 result has one).
8. **Expectation setting:** Google no longer shows FAQ rich results for most sites (since Aug 2023), so the `FAQPage` schema is for entity understanding and AI answers, not visible stars/expanders.
9. **Nature-based sessions page:** low search demand ("somatic coaching costa rica" has none), but it completes the internal-link plan in the brief and gives the Wildness story a home. Repoint the placeholder link when it ships.

## Release checklist

- [ ] Stephen reviews the Vercel Preview (desktop + 390px).
- [ ] Alexis confirms the filled placeholders above (package wording, CTA verb, disclaimer).
- [ ] Merge `feat/somatic-coaching-page` → `main` (push to main = production deploy).
- [ ] Verify `https://alexislyon.com/somatic-coaching` returns 200, appears in `/sitemap.xml`, and passes Rich Results test for Service/FAQPage/BreadcrumbList.
- [ ] Request indexing in Search Console.
