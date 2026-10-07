// @ts-nocheck
import { test, expect } from '@playwright/test';

const VERCEL_INSIGHTS_PATH = '/_vercel/insights/script.js';
const PAGE_PATH = '/somatic-coaching';
const PAGE_IMAGES = [
  'somatic-coaching-hero',
  'somatic-coaching-body',
  'somatic-coaching-wound',
  'somatic-coaching-wildness',
  'somatic-coaching-online',
  'somatic-coaching-costa-rica',
  'alexis-about-portrait'
];

test.describe('somatic coaching page', () => {
  test('renders copy, metadata, schema, and imagery without layout overflow', async ({ page }, testInfo) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];
    const badResponses: string[] = [];

    await page.route(`**${VERCEL_INSIGHTS_PATH}`, (route) =>
      route.fulfill({ status: 200, contentType: 'application/javascript', body: '// local baseline\n' })
    );
    page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
    page.on('pageerror', (err) => pageErrors.push(err.message));
    page.on('response', (response) => { if (response.status() >= 400) badResponses.push(`${response.status()} ${response.url()}`); });

    const response = await page.goto(`${PAGE_PATH}?_t=${Date.now()}`, { waitUntil: 'networkidle' });
    expect(response?.status(), 'page must return 200').toBe(200);

    // Copy + headings — Tab 2 section titles, in order
    await expect(page.locator('h1')).toHaveText('Somatic Coaching');
    const h2s = await page.locator('h2').allTextContents();
    const expectedH2s = [
      'Somatic Coaching for the Wound and the Wildness',
      'What Is Somatic Coaching?',
      'Healing the Wound. Reclaiming the Wildness.',
      'Nervous System Regulation Is Not About Becoming Less',
      'Learning to Hold More of Who You Are',
      'Somatic Coaching Can Support You If…',
      'From Self-Protection to Self-Trust',
      'Somatic Coaching and Psychological Flexibility',
      'Somatic Coaching for Aliveness, Purpose, and Meaning',
      'Your Somatic Coach',
      'Online Somatic Coaching',
      'Wound and Wildness',
      'Frequently asked questions',
      'Begin with a conversation.'
    ];
    expect(h2s, 'H2s match Tab 2 section order').toEqual(expectedH2s);
    expect(await page.locator('h1').count(), 'exactly one H1').toBe(1);

    // Contextual essays
    await expect(page.locator('main a[href="/blog/psychological-flexibility"]')).toHaveCount(1);
    await expect(page.locator('main a[href="/blog/the-bumpy-road-which-road-is-yours-to-travel"]')).toHaveCount(1);
    await expect(page.locator('main a[href="/blog/post-traumatic-growth"]')).toHaveCount(1);

    // Metadata — preserved performing tags
    await expect(page).toHaveTitle('Somatic Coaching Online with Alexis Lyon');
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBe('Trauma-informed somatic coaching, online worldwide. Regulate your nervous system, heal the wound, and reclaim the wildness in you.');
    expect(description?.length, 'meta description 120–160 chars').toBeGreaterThanOrEqual(120);
    expect(description?.length, 'meta description 120–160 chars').toBeLessThanOrEqual(160);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://alexislyon.com/somatic-coaching');
    expect(await page.locator('meta[name="robots"][content*="noindex"]').count(), 'page must be indexable').toBe(0);

    // Structured data
    const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
    const graph = jsonLd.flatMap((raw) => { const parsed = JSON.parse(raw); return Array.isArray(parsed) ? parsed : [parsed]; });
    const types = graph.map((node) => node['@type']);
    for (const type of ['WebPage', 'Service', 'FAQPage', 'BreadcrumbList']) expect(types, `schema ${type}`).toContain(type);
    const faq = graph.find((node) => node['@type'] === 'FAQPage');
    expect(faq.mainEntity.length, 'seven FAQ entries').toBe(7);
    const visibleFaqs = await page.locator('#faq h3').allTextContents();
    expect(visibleFaqs, 'FAQ schema must mirror visible questions').toEqual(faq.mainEntity.map((q) => q.name));
    // Handoff 2026-10-06 item 1b: the line under the FAQ heading is gone (the first answer already says it)
    const faqRail = (await page.locator('#faq').textContent()) ?? '';
    expect(faqRail, 'no standalone "I do not diagnose or treat" line').not.toContain('I do not diagnose or treat.');
    // FAQ is an accordion: collapsed answers must still be in the DOM, word for word with the schema
    const faqText = (await page.locator('#faq').textContent()) ?? '';
    for (const q of faq.mainEntity) expect(faqText, `answer on the page for "${q.name}"`).toContain(q.acceptedAnswer.text);
    await expect(page.locator('#faq details').first(), 'first FAQ starts open').toHaveAttribute('open', '');

    // Deliberately avoided vocabulary (client SEO brief)
    const bodyText = (await page.locator('main').innerText()).toLowerCase();
    expect(bodyText, 'no "telehealth" on this page').not.toContain('telehealth');
    expect(bodyText, 'no "somatic therapist" on this page').not.toContain('somatic therapist');

    // Imagery: every page image must be present, have alt text, and resolve
    for (const name of PAGE_IMAGES) {
      const img = page.locator(`img[src*="${name}"]`).first();
      await expect(img, `image ${name} present`).toHaveCount(1);
      await img.scrollIntoViewIfNeeded();
      await expect(img).toBeVisible();
      const alt = await img.getAttribute('alt');
      expect(alt?.trim().length, `alt text for ${name}`).toBeGreaterThan(10);
      await expect
        .poll(() => img.evaluate((el) => (el.complete ? el.naturalWidth : 0)), { message: `${name} must actually load`, timeout: 15000 })
        .toBeGreaterThan(0);
    }

    // CTAs to /connect
    expect(await page.locator('a[href="/connect"]').count(), 'at least three consultation CTAs').toBeGreaterThanOrEqual(3);

    // Layout: no horizontal overflow at this project's viewport
    const overflow = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth
    }));
    expect(overflow.scrollWidth, `horizontal overflow at ${testInfo.project.name}`).toBeLessThanOrEqual(overflow.clientWidth);

    expect(pageErrors, 'no page errors').toEqual([]);
    expect(consoleErrors, 'no console errors').toEqual([]);
    expect(badResponses, 'no >=400 responses').toEqual([]);
  });

  test('hero and revealed blocks stay visible when the visitor prefers reduced motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(PAGE_PATH, { waitUntil: 'networkidle' });
    // toBeVisible() treats opacity 0 as visible, so measure the effective opacity instead
    const effectiveOpacity = (selector: string) =>
      page.locator(selector).first().evaluate((el) => {
        let opacity = 1;
        for (let node: Element | null = el; node && node !== document.body; node = node.parentElement) opacity *= parseFloat(getComputedStyle(node).opacity);
        return opacity;
      });
    await expect.poll(() => effectiveOpacity('h1'), { message: 'hero heading is not left transparent' }).toBe(1);
    await expect.poll(() => effectiveOpacity('#hero a[href="/connect"]'), { message: 'hero CTA is not left transparent' }).toBe(1);
    const fern = page.locator('img[src*="somatic-coaching-body"]').first();
    await fern.scrollIntoViewIfNeeded();
    await expect.poll(() => effectiveOpacity('img[src*="somatic-coaching-body"]'), { message: 'section image is not left transparent' }).toBe(1);
  });

  test('is linked from the sitemap, footer, homepage, and philosophy page', async ({ page }) => {
    const sitemap = await page.request.get('/sitemap.xml');
    expect(await sitemap.text()).toContain('https://alexislyon.com/somatic-coaching');

    for (const path of ['/', '/philosophy']) {
      await page.goto(path, { waitUntil: 'domcontentloaded' });
      expect(await page.locator('a[href="/somatic-coaching"]').count(), `${path} links to the page`).toBeGreaterThanOrEqual(3);
      expect(await page.locator('header nav a[href="/somatic-coaching"]').count(), `${path} primary nav links to the page`).toBeGreaterThanOrEqual(1);
    }
  });
});
