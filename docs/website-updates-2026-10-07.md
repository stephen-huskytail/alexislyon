# Website updates, 2026-10-07 — build notes and handoff

Source: Alexis's "Website Updates — Developer Handoff" (Oct 6, 2026), four items in priority order.
Branch `feat/website-updates-20261007`. Trackers: Multica HUS-967, ledger HT-524. Gate: `e2e/website-updates-20261007.spec.ts` (+ the updated `e2e/somatic-coaching.spec.ts`).

## 1. Quick fixes

| # | Status | Where |
|---|---|---|
| 1a FAQ as real H3s + FAQPage schema | Already live. The `**### Question**` rendering Alexis saw was the 10-05 morning build; the formatting pass deployed later that day (3b73751) made each question a real `<h3>` inside a `<details>` accordion and the page already emits `FAQPage` for all 7 Q&As. Verified on the live page 2026-10-07: 7 `<h3>`, 7 `<details>`, FAQPage present. | `app/somatic-coaching/page.tsx` |
| 1b Delete the line under the FAQ heading | Done. | same |
| 1c H2 "Your Somatic Coach" above the portrait | Done. The H2 sits in the sticky left rail above the portrait, before "Alexis Lyon / More about me →". It is the 10th of 14 H2s on the page. | same |
| 1d Homepage "Serving clients worldwide online" | Done (the credential strip under the About block). | `app/page.tsx` |
| 1e The Becoming block "Online by video" | Done. | `lib/content.ts` (`becomingGroup.format`) |
| 1f / 1g "as a therapist" → clinical work | Done, both sentences. | `app/blog/post-traumatic-growth/page.tsx` |
| 1h Sitewide "telehealth" | Done. Replaced in: homepage Person schema description, homepage FAQ schema answer ("held online by video"), About credentials bullet ("Serving clients worldwide online"), Connect sidebar ("All sessions are online by video."), Disclaimer section title ("Online Sessions"). The e2e test loads every page and fails if the word appears anywhere in the HTML. | several |

## 2. New page `/the-becoming`

- All copy from the handoff, in the handoff's order: hero → "You were never meant to do this alone." → What happens in the circle → Why a women's group → Is The Becoming for you? → The details → About your guide → FAQ (6, accordion, first open) → closing line + button + site disclaimer.
- Title tag, meta description, H1 and subhead exactly as specified. Canonical `/the-becoming`. OG card via `/api/og`.
- Structured data: `WebPage`, `Service` (provider = Person, Offer $50 per session), `FAQPage` (6), `BreadcrumbList`.
- Inbound links: primary nav ("The Becoming", 4th item, after "Work With Me"; checked at 1024 / 1280 / 1440 and in the mobile drawer), homepage offer block ("Learn more about The Becoming →"), footer, sitemap (priority 0.8). The homepage Service schema's Becoming offer now points at the page.
- All three CTAs link to `/connect?interest=becoming`. The contact form reads that key on load and pre-selects "The Becoming — Women's Group" (`components/ContactForm.tsx`, `interestTopics`). Plain `/connect` is unchanged.
- "The details" rows. The two `[placeholder]` rows were filled from Stephen's note on 2026-10-07:

| Row | Copy |
|---|---|
| Group size | 4–8 women |
| Session length | 75–90 minutes |
| Format | Online by video |
| Commitment | Minimum 3 months |
| Investment | $50 per session (about $100–150 per month) — as written in the handoff |
| Schedule | Thursday evenings or Fridays at midday, Pacific time · Three sessions per month |
| Next circle begins | November 2026 or March 2027 · Now forming — inquire to join |

  Note for Alexis: at three sessions a month the monthly figure is $150, so "$100–150" reads as a range only if some months run two sessions. Keep or tighten.

- Imagery (new pages ship with imagery; generated with Higgsfield GPT Image 2, no people, no text, same Costa Rica palette as `/somatic-coaching`), plus Alexis's real portrait for "About your guide" and the existing `soul-story-bg.webp` behind the closing CTA:

| File | Placement | Subject |
|---|---|---|
| `becoming-hero.webp` (1920w) | Hero | Sheltered forest clearing ringed by trees at first light, Pacific behind |
| `becoming-circle.webp` (1600w) | What happens in the circle | Cluster of pale wildflowers of different heights on a hillside above the sea |
| `becoming-wildness.webp` (1600w) | Why a women's group | Flock of white egrets lifting from a calm estuary at golden hour |

- Keywords from the handoff ("The Becoming women's group", "online women's group", "women's group coaching online", "trauma-informed group coaching") appear in the title, description, H1/subhead, Service `serviceType`, and body. "Support group" is deliberately absent and the test asserts it.

## 3. Psychological-flexibility merge

- `/blog/psychological-flexibility` now holds the full "An Overlooked Superpower" essay. Two insertions from "How Change Actually Happens", copy exactly as the handoff gives it: H2 "Why Psychological Flexibility Is a Body Skill, Not a Mindset" (3 paragraphs, the third links to `/somatic-coaching`) after the Everyday Life section, and the two permission paragraphs at the end of "Roadmap for Change" before "Source".
- Wording edit applied: "As a long-time clinician and a guide in the process of transformation…".
- Title tag `What Is Psychological Flexibility? An Overlooked Superpower | Alexis Lyon` (site template adds the suffix), meta description per the handoff (139 chars), H1 `Psychological Flexibility: An Overlooked Superpower`.
- Byline: "By Alexis Lyon · August 13, 2026 · Updated October 2026 · 10 min read". Article schema `datePublished` 2026-08-13, `dateModified` 2026-10-07; sitemap `lastmod` uses the modified date.
- 301: `/blog/psychological-flexibility-overlooked-superpower` → `/blog/psychological-flexibility` (`next.config.js`, `statusCode: 301`). The old route directory is deleted; the old entry is gone from `lib/posts.ts`, so `/blog` shows one card and the sitemap drops the old URL.
- Internal links repointed: `/somatic-coaching` ("Somatic Coaching and Psychological Flexibility"), `/blog/post-traumatic-growth` ("Related reading"), `/philosophy` (link text now names the Superpower essay). The homepage had no link to either post.
- **Featured image: Alexis's choice.** Defaulted to the Superpower post's image (`blog-overlooked-superpower.webp`, dew on a leaf). To switch to the "How Change" image (`blog-how-change-happens.webp`, turquoise water over stones), change `featuredImage` / `featuredImageAlt` on the `psychological-flexibility` entry in `lib/posts.ts`; the unused file stays in `public/images/`.
- Carried over as site chrome, not content: the "Related reading" footer every other essay has (Post-Traumatic Growth · Philosophy). Not carried over, per the handoff: the Hayes pull-quote and the three-movements list from "How Change".

## 4. Post-traumatic growth FAQ

- H2 "Post-Traumatic Growth: Frequently Asked Questions" + 7 H3 Q&As, placed after "The Garden Keeps Growing" and before "This is the work I do. Let's talk." Copy verbatim from the handoff. `FAQPage` schema mirrors the seven questions.
- Meta description per the handoff (136 chars). The `/blog` card keeps its previous copy (`description` vs `metaDescription` in `lib/posts.ts`).
- Article schema `dateModified` 2026-10-07; reading time 12 → 13 min.

## For Alexis to confirm

1. Merged post featured image (default: dew-on-leaf). See §3.
2. Schedule wording and the "$100–150 per month" figure against three sessions a month. See §2.
3. The hero/section imagery on `/the-becoming` (three generated nature images, no people). Swap any of them by replacing the file in `public/images/` with the same name.

## Verification

Filled in at release. See the commit message and HUS-967 comments for the run.

## Release checklist

- [ ] `npx tsc --noEmit` clean; `npx playwright test e2e/website-updates-20261007.spec.ts e2e/somatic-coaching.spec.ts` green (desktop + mobile).
- [ ] Nav checked at 1024 / 1280 / 1440 with 7 items.
- [ ] Merge to `main` (push to main = production deploy on Vercel).
- [ ] Live: `/the-becoming` 200 + FAQPage; old Superpower URL returns 301 → `/blog/psychological-flexibility`; `grep -ci telehealth` on every page = 0; `/connect?interest=becoming` pre-selects.
- [ ] Search Console: request indexing for `/the-becoming` and `/blog/psychological-flexibility`.
- [ ] Close note + HUS-967 evidence + HT-524 ledger.
