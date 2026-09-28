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

    // Copy + headings
    await expect(page.locator('h1')).toHaveText('Somatic Coaching for the Wound and the Wildness');
    const h2s = await page.locator('h2').allTextContents();
    for (const heading of [
      'What is somatic coaching?',
      'Healing for the wound. Reclaiming for the wildness.',
      'How we work together',
      'Who this is for',
      'Online somatic coaching, wherever you are',
      'Your somatic coach',
      'Frequently asked questions',
      'Your body already knows the way back.'
    ]) {
      expect(h2s, `missing H2: ${heading}`).toContain(heading);
    }
    expect(await page.locator('h1').count(), 'exactly one H1').toBe(1);

    // Metadata
    await expect(page).toHaveTitle('Somatic Coaching Online with Alexis Lyon');
    const description = await page.locator('meta[name="description"]').getAttribute('content');
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
