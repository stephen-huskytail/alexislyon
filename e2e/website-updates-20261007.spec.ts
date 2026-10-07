// @ts-nocheck
// Gate for Alexis's "Website Updates — Developer Handoff" (Oct 6, 2026): quick fixes, /the-becoming,
// the psychological-flexibility merge + 301, and the post-traumatic-growth FAQ.
import { test, expect } from '@playwright/test';

const VERCEL_INSIGHTS_PATH = '/_vercel/insights/script.js';

async function jsonLdGraph(page) {
  const raw = await page.locator('script[type="application/ld+json"]').allTextContents();
  return raw.flatMap((text) => { const parsed = JSON.parse(text); return Array.isArray(parsed) ? parsed : [parsed]; });
}

test.beforeEach(async ({ page }) => {
  await page.route(`**${VERCEL_INSIGHTS_PATH}`, (route) =>
    route.fulfill({ status: 200, contentType: 'application/javascript', body: '// local baseline\n' })
  );
});

test.describe('2. /the-becoming', () => {
  test('renders the handoff copy, metadata, schema, links, and imagery', async ({ page }, testInfo) => {
    const pageErrors: string[] = [];
    const badResponses: string[] = [];
    page.on('pageerror', (err) => pageErrors.push(err.message));
    page.on('response', (response) => { if (response.status() >= 400) badResponses.push(`${response.status()} ${response.url()}`); });

    const response = await page.goto('/the-becoming', { waitUntil: 'networkidle' });
    expect(response?.status()).toBe(200);

    await expect(page.locator('h1')).toHaveText('The Becoming');
    expect(await page.locator('h1').count(), 'exactly one H1').toBe(1);
    expect(await page.locator('h2').allTextContents()).toEqual([
      'You were never meant to do this alone.',
      'What happens in the circle',
      'Why a women’s group',
      'Is The Becoming for you?',
      'The details',
      'About your guide',
      'Frequently asked questions',
      'Come as you are. Leave a little more yourself.'
    ]);

    await expect(page).toHaveTitle('The Becoming: An Online Women’s Group with Alexis Lyon');
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBe('An intimate online women’s group for 4–8 women. Somatic, trauma-informed group coaching for healing the wound and reclaiming the wildness.');
    expect(description?.length).toBeLessThanOrEqual(160);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://alexislyon.com/the-becoming');
    expect(await page.locator('meta[name="robots"][content*="noindex"]').count(), 'page must be indexable').toBe(0);

    const graph = await jsonLdGraph(page);
    const types = graph.map((node) => node['@type']);
    for (const type of ['WebPage', 'Service', 'FAQPage', 'BreadcrumbList']) expect(types, `schema ${type}`).toContain(type);
    const faq = graph.find((node) => node['@type'] === 'FAQPage');
    expect(faq.mainEntity.length, 'six FAQ entries').toBe(6);
    expect(await page.locator('#faq h3').allTextContents(), 'FAQ schema mirrors visible questions').toEqual(faq.mainEntity.map((q) => q.name));
    const faqText = (await page.locator('#faq').textContent()) ?? '';
    for (const q of faq.mainEntity) expect(faqText, `answer on the page for "${q.name}"`).toContain(q.acceptedAnswer.text);

    // Schedule and pricing as supplied (Stephen, 2026-10-07; handoff table)
    const bodyText = (await page.locator('main').innerText());
    for (const needle of ['4–8 women', '75–90 minutes', 'Online by video', 'Minimum 3 months', '$50 per session', 'Thursday evenings or Fridays at midday', 'Three sessions per month', 'November 2026 or March 2027']) {
      expect(bodyText, `details include "${needle}"`).toContain(needle);
    }
    expect(bodyText.toLowerCase(), 'no "telehealth"').not.toContain('telehealth');
    expect(bodyText.toLowerCase(), 'no "support group" wording').not.toContain('support group');

    // CTAs carry the interest key so /connect pre-selects the group
    expect(await page.locator('main a[href="/connect?interest=becoming"]').count()).toBeGreaterThanOrEqual(3);
    await expect(page.locator('#your-guide a[href="/about"]'), '"More about me" link').toHaveCount(1);

    for (const name of ['becoming-hero', 'becoming-circle', 'becoming-wildness', 'alexis-about-portrait']) {
      const img = page.locator(`img[src*="${name}"]`).first();
      await expect(img, `image ${name} present`).toHaveCount(1);
      await img.scrollIntoViewIfNeeded();
      expect((await img.getAttribute('alt'))?.trim().length, `alt text for ${name}`).toBeGreaterThan(10);
      await expect.poll(() => img.evaluate((el) => (el.complete ? el.naturalWidth : 0)), { message: `${name} must load`, timeout: 15000 }).toBeGreaterThan(0);
    }

    const overflow = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth }));
    expect(overflow.scrollWidth, `horizontal overflow at ${testInfo.project.name}`).toBeLessThanOrEqual(overflow.clientWidth);
    expect(pageErrors).toEqual([]);
    expect(badResponses).toEqual([]);
  });

  test('is linked from the nav, footer, homepage offer block, and sitemap', async ({ page }) => {
    const sitemap = await (await page.request.get('/sitemap.xml')).text();
    expect(sitemap).toContain('https://alexislyon.com/the-becoming');

    await page.goto('/', { waitUntil: 'domcontentloaded' });
    expect(await page.locator('header nav a[href="/the-becoming"]').count(), 'primary nav').toBeGreaterThanOrEqual(1);
    expect(await page.locator('footer a[href="/the-becoming"]').count(), 'footer').toBe(1);
    expect(await page.locator('#work a[href="/the-becoming"]').count(), 'homepage offer block').toBe(1);
    const overflow = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth }));
    expect(overflow.scrollWidth, 'nav still fits').toBeLessThanOrEqual(overflow.clientWidth);
  });

  test('/connect?interest=becoming pre-selects the group in the form', async ({ page }) => {
    await page.goto('/connect?interest=becoming', { waitUntil: 'networkidle' });
    await expect(page.locator('select[name="topic"]')).toHaveValue("The Becoming — Women's Group");
    await page.goto('/connect', { waitUntil: 'networkidle' });
    await expect(page.locator('select[name="topic"]')).toHaveValue('');
  });
});

test.describe('3. psychological flexibility merge', () => {
  test('old Superpower URL 301s to the merged post', async ({ page }) => {
    const response = await page.request.get('/blog/psychological-flexibility-overlooked-superpower', { maxRedirects: 0 });
    expect(response.status()).toBe(301);
    expect(response.headers()['location']).toBe('/blog/psychological-flexibility');
  });

  test('merged post = Superpower base + two carried-over sections + wording edit', async ({ page }) => {
    const response = await page.goto('/blog/psychological-flexibility', { waitUntil: 'networkidle' });
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle('What Is Psychological Flexibility? An Overlooked Superpower | Alexis Lyon');
    expect(await page.locator('meta[name="description"]').getAttribute('content')).toBe('What psychological flexibility is, why research calls it a key pathway of change, and how awareness, openness, and values help us cultivate it.');
    await expect(page.locator('h1')).toHaveText('Psychological Flexibility: An Overlooked Superpower');

    const h2s = await page.locator('article h2').allTextContents();
    expect(h2s).toEqual([
      'What Is Psychological Flexibility?',
      'Why Change Processes Matter',
      'Three Pillars of Psychological Flexibility',
      'What Nature Can Teach Us About Psychological Flexibility',
      'What Does Psychological Flexibility Look Like in Everyday Life?',
      'Why Psychological Flexibility Is a Body Skill, Not a Mindset',
      'A Personal Example of Psychological Flexibility',
      'Psychological Flexibility as a Roadmap for Change',
      'Source'
    ]);

    const text = await page.locator('article').innerText();
    expect(text).toContain('As a long-time clinician and a guide in the process of transformation');
    expect(text).not.toContain('long-time therapist');
    expect(text).toContain('Your symptoms do not disqualify your becoming. The wound does not have to close before the dream can open.');
    expect(text).toContain('You do not have to be finished to begin. You never did.');
    // The byline is CSS-uppercased, so compare case-insensitively
    expect(text.toUpperCase()).toContain('AUGUST 13, 2026 · UPDATED OCTOBER 2026 · 10 MIN READ');
    await expect(page.locator('article a[href="/somatic-coaching"]')).toHaveCount(1);

    const article = (await jsonLdGraph(page)).find((node) => node['@type'] === 'Article');
    expect(article.datePublished).toBe('2026-08-13');
    expect(article.dateModified).toBe('2026-10-07');
  });

  test('one psychological-flexibility card on /blog; old URL gone from sitemap and internal links', async ({ page }) => {
    await page.goto('/blog', { waitUntil: 'domcontentloaded' });
    expect(await page.locator('article h2 a[href="/blog/psychological-flexibility"]').count()).toBe(1);
    expect(await page.locator('a[href="/blog/psychological-flexibility-overlooked-superpower"]').count()).toBe(0);
    expect(await page.locator('article').count(), 'three essays').toBe(3);

    const sitemap = await (await page.request.get('/sitemap.xml')).text();
    expect(sitemap).not.toContain('psychological-flexibility-overlooked-superpower');
    expect(sitemap).toContain('https://alexislyon.com/blog/psychological-flexibility');

    for (const path of ['/somatic-coaching', '/blog/post-traumatic-growth', '/philosophy']) {
      await page.goto(path, { waitUntil: 'domcontentloaded' });
      expect(await page.locator('a[href="/blog/psychological-flexibility-overlooked-superpower"]').count(), `${path} has no link to the old URL`).toBe(0);
      expect(await page.locator('main a[href="/blog/psychological-flexibility"]').count(), `${path} links to the merged post`).toBeGreaterThanOrEqual(1);
    }
  });
});

test.describe('4. post-traumatic growth FAQ + 1f/1g wording', () => {
  test('FAQ renders after "The Garden Keeps Growing" with matching schema', async ({ page }) => {
    await page.goto('/blog/post-traumatic-growth', { waitUntil: 'networkidle' });
    expect(await page.locator('meta[name="description"]').getAttribute('content')).toBe('What is post-traumatic growth? The research, its limits, and what becomes possible when we heal the wound and reclaim the wildness.');

    const h2s = await page.locator('article h2').allTextContents();
    expect(h2s[h2s.length - 2]).toBe('The Garden Keeps Growing');
    expect(h2s[h2s.length - 1]).toBe('Post-Traumatic Growth: Frequently Asked Questions');

    const faq = (await jsonLdGraph(page)).find((node) => node['@type'] === 'FAQPage');
    expect(faq.mainEntity.length).toBe(7);
    expect(await page.locator('#faq h3').allTextContents()).toEqual(faq.mainEntity.map((q) => q.name));
    const faqText = (await page.locator('#faq').textContent()) ?? '';
    for (const q of faq.mainEntity) expect(faqText).toContain(q.acceptedAnswer.text);

    // FAQ sits before the closing CTA
    const faqBox = await page.locator('#faq').boundingBox();
    const ctaBox = await page.locator('a[href="/connect"]', { hasText: 'Begin the conversation' }).boundingBox();
    expect(faqBox.y).toBeLessThan(ctaBox.y);

    const text = await page.locator('article').innerText();
    expect(text).toContain('Both personally and in my clinical work, I have been exploring');
    expect(text).toContain('something shaped by my years of clinical work, my own life');
    expect(text).not.toContain('as a therapist');
  });
});

test.describe('1. quick fixes', () => {
  test('/somatic-coaching: FAQ heading has no stray line, "Your Somatic Coach" H2 sits above the portrait', async ({ page }) => {
    await page.goto('/somatic-coaching', { waitUntil: 'networkidle' });
    const h2s = await page.locator('h2').allTextContents();
    expect(h2s).toContain('Your Somatic Coach');
    const heading = await page.locator('h2', { hasText: 'Your Somatic Coach' }).boundingBox();
    const portrait = await page.locator('img[src*="alexis-about-portrait"]').first().boundingBox();
    expect(heading.y, 'heading is above the portrait').toBeLessThan(portrait.y);
    expect(await page.locator('#faq').textContent()).not.toContain('I do not diagnose or treat.');
    const faqRail = await page.locator('#faq h2 + p').count();
    expect(faqRail, 'nothing rendered directly under the FAQ heading').toBe(0);
  });

  test('homepage wording: "worldwide online" and "Online by video"', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    // The credential strip is CSS-uppercased, so compare case-insensitively
    const text = (await page.locator('main').innerText()).toLowerCase();
    expect(text).toContain('serving clients worldwide online');
    expect(text).not.toContain('telehealth');
    expect(text).toContain('75–90 min · online by video · min. 3-month commitment');
  });

  test('1h: "telehealth" is gone from every page, including structured data', async ({ page }) => {
    const paths = ['/', '/about', '/connect', '/somatic-coaching', '/the-becoming', '/philosophy', '/blog', '/disclaimer', '/privacy-policy',
      '/blog/post-traumatic-growth', '/blog/psychological-flexibility', '/blog/the-bumpy-road-which-road-is-yours-to-travel'];
    // Raw server HTML (covers JSON-LD and meta tags), fetched without navigating so a client-side
    // navigation abort on the previous page cannot detach the frame mid-loop.
    for (const path of paths) {
      const response = await page.request.get(path);
      expect(response.status(), `${path} responds 200`).toBe(200);
      const html = (await response.text()).toLowerCase();
      expect(html, `${path} contains "telehealth"`).not.toContain('telehealth');
    }
  });
});
