import { test, expect } from '@playwright/test';
import copy from '../app/nervous-system-regulation/copy.json';

// Preview acceptance only; publication is separately held for copy/Legal/client approval.
test('regulation preview preserves copy, accessible structure, metadata and FAQ parity', async ({ page }) => {
  const response = await page.goto('/nervous-system-regulation');
  expect(response?.status()).toBe(200);
  const article = page.locator('[data-regulation-article]');
  await expect(article.locator('h1')).toHaveText(copy.h1);
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page).toHaveTitle("Nervous System Regulation: It's Not About Becoming Less");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://alexislyon.com/nervous-system-regulation');
  expect(await article.locator('h2').allTextContents()).toEqual([...copy.sections.map(s => s.heading), 'Frequently Asked Questions']);
  await expect(article.locator('ul')).toHaveCount(4);
  await expect(article.locator('ol > li')).toHaveCount(5);
  await expect(article.locator('table')).toHaveCount(1);
  await expect(article.locator('tbody > tr')).toHaveCount(5);
  await expect(article.locator('details')).toHaveCount(copy.faqs.length);
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
  const graph = blocks.flatMap(x => {const d = JSON.parse(x); return Array.isArray(d) ? d : [d];});
  const schema = graph.find(x => x['@type'] === 'FAQPage');
  expect(schema.mainEntity.map((x: {name: string; acceptedAnswer: {text: string}}) => ({question:x.name,answer:x.acceptedAnswer.text}))).toEqual(copy.faqs);
  for (const [i, faq] of copy.faqs.entries()) {
    const panel = article.locator('details').nth(i);
    await expect(panel.locator('summary')).toHaveText(faq.question);
    if (i !== 0) await panel.locator('summary').click();
    await expect(panel.locator('p')).toHaveText(faq.answer);
  }
  await expect(article.locator('a[href="/connect"]')).toHaveCount(2);
  await expect(article.locator('a[href="/somatic-coaching"]')).toHaveCount(2);
  await expect(article.locator('a[href="/blog/psychological-flexibility"]')).toHaveCount(1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  for (const image of await article.locator('img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveAttribute('alt', /\S/);
    await expect.poll(() => image.evaluate((i: HTMLImageElement) => i.complete && i.naturalWidth > 0)).toBe(true);
  }
});

test('only the three approved incoming links are mounted', async ({ page }) => {
  for (const path of ['/', '/philosophy', '/somatic-coaching']) {
    await page.goto(path);
    await expect(page.locator('main a[href="/nervous-system-regulation"]')).toHaveCount(1);
    await expect(page.locator('nav a[href="/nervous-system-regulation"], footer a[href="/nervous-system-regulation"]')).toHaveCount(0);
  }
  await expect(page.locator('#nervous-system-regulation')).toHaveCount(1);
  await expect(page.locator('#nervous-system-regulation ul')).toHaveCount(0);
});
