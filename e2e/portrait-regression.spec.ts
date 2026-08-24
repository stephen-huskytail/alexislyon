// @ts-nocheck
import { test, expect } from '@playwright/test';

const VERCEL_INSIGHTS_PATH = '/_vercel/insights/script.js';

function isAllowedVercelInsights(textOrUrl) {
  return textOrUrl.includes(VERCEL_INSIGHTS_PATH);
}

test.describe('homepage portrait regression prevention', () => {
  test('desktop 1440px: #about portrait frame <=420px, image loaded, no horizontal overflow', async ({ page }) => {
    const consoleErrors = [];
    const pageErrors = [];
    const failedRequests = [];
    const badResponses = [];
    let vercel404Seen = false;

    page.on('console', msg => {
      if (msg.type() === 'error') {
        const text = msg.text();
        if (isAllowedVercelInsights(text) || (vercel404Seen && text.includes('Failed to load resource') && text.includes('404'))) {
          console.log('[allowed-vercel-404]', text);
        } else {
          consoleErrors.push(text);
        }
      }
    });
    page.on('pageerror', err => pageErrors.push(err.message));
    page.on('requestfailed', request => {
      const url = request.url();
      if (!isAllowedVercelInsights(url)) {
        failedRequests.push(`${request.failure()?.errorText || 'failed'}: ${url}`);
      }
    });
    page.on('response', response => {
      const status = response.status();
      const url = response.url();
      if (status === 404) {
        console.log('[404-response]', url);
        if (isAllowedVercelInsights(url)) {
          vercel404Seen = true;
        }
      }
      if (status >= 400 && !isAllowedVercelInsights(url)) {
        badResponses.push(`${status} ${url}`);
      }
    });

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.context().clearCookies();
    await page.goto(`/?_t=${Date.now()}`, { waitUntil: 'networkidle' });

    const portraitFrame = page.locator('#about .relative.min-h-\\[420px\\]');
    await portraitFrame.scrollIntoViewIfNeeded();
    await expect(portraitFrame).toBeVisible();

    const imageResponsePromise = page.waitForResponse(
      (resp) => /alexis-home-about/.test(resp.url()) && resp.status() === 200
    );

    const img = page.locator('#about img');
    await expect(img).toBeVisible();
    await img.scrollIntoViewIfNeeded();

    const imageResponse = await imageResponsePromise;
    expect(imageResponse.ok(), 'portrait image response must be successful (200)').toBe(true);
    const ct = imageResponse.headers()['content-type'] || '';
    expect(ct, 'portrait image must have image/* content-type').toContain('image/');

    const frameHeight = await portraitFrame.evaluate((el) => el.clientHeight);
    expect(frameHeight, 'portrait frame must not stretch above intended 420px min-h').toBeLessThanOrEqual(421);

    await img.evaluate((el) => el.decode ? el.decode() : Promise.resolve());

    const imgData = await img.evaluate((el) => ({
      src: el.currentSrc || el.getAttribute('src') || '',
      naturalW: el.naturalWidth,
      naturalH: el.naturalHeight,
      complete: el.complete,
      objectFit: window.getComputedStyle(el).objectFit,
      objectPosition: window.getComputedStyle(el).objectPosition,
    }));

    expect(imgData.src, 'image src must reference the portrait asset').toContain('alexis-home-about');
    expect(imgData.complete, 'image must report complete=true after successful load + decode').toBe(true);
    expect(imgData.naturalW, 'image naturalWidth must be > 0 (actual loaded pixels)').toBeGreaterThan(0);
    expect(imgData.naturalH, 'image naturalHeight must be > 0 (actual loaded pixels)').toBeGreaterThan(0);
    expect(imgData.objectFit, 'must use object-cover').toBe('cover');
    expect(imgData.objectPosition, 'must use object-position 50% 0% (object-top equivalent)').toContain('50% 0%');

    const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(hasOverflow, 'no horizontal overflow allowed at desktop').toBe(false);

    expect(consoleErrors, `unexpected console errors (only exact /_vercel/insights/script.js by pathname permitted): ${consoleErrors.join('; ')}`).toHaveLength(0);
    expect(pageErrors, `unexpected page errors: ${pageErrors.join('; ')}`).toHaveLength(0);
    expect(failedRequests, `unexpected failed requests: ${failedRequests.join('; ')}`).toHaveLength(0);
    expect(badResponses, `unexpected >=400 responses: ${badResponses.join('; ')}`).toHaveLength(0);
  });

  test('mobile 390px: #about portrait frame <=420px, image loaded, no horizontal overflow', async ({ page }) => {
    const consoleErrors = [];
    const pageErrors = [];
    const failedRequests = [];
    const badResponses = [];
    let vercel404Seen = false;

    page.on('console', msg => {
      if (msg.type() === 'error') {
        const text = msg.text();
        if (isAllowedVercelInsights(text) || (vercel404Seen && text.includes('Failed to load resource') && text.includes('404'))) {
          console.log('[allowed-vercel-404]', text);
        } else {
          consoleErrors.push(text);
        }
      }
    });
    page.on('pageerror', err => pageErrors.push(err.message));
    page.on('requestfailed', request => {
      const url = request.url();
      if (!isAllowedVercelInsights(url)) {
        failedRequests.push(`${request.failure()?.errorText || 'failed'}: ${url}`);
      }
    });
    page.on('response', response => {
      const status = response.status();
      const url = response.url();
      if (status === 404) {
        console.log('[404-response]', url);
        if (isAllowedVercelInsights(url)) {
          vercel404Seen = true;
        }
      }
      if (status >= 400 && !isAllowedVercelInsights(url)) {
        badResponses.push(`${status} ${url}`);
      }
    });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.context().clearCookies();
    await page.goto(`/?_t=${Date.now()}`, { waitUntil: 'networkidle' });

    const portraitFrame = page.locator('#about .relative.min-h-\\[420px\\]');
    await portraitFrame.scrollIntoViewIfNeeded();
    await expect(portraitFrame).toBeVisible();

    const imageResponsePromise = page.waitForResponse(
      (resp) => /alexis-home-about/.test(resp.url()) && resp.status() === 200
    );

    const img = page.locator('#about img');
    await expect(img).toBeVisible();
    await img.scrollIntoViewIfNeeded();

    const imageResponse = await imageResponsePromise;
    expect(imageResponse.ok(), 'portrait image response must be successful (200) on mobile').toBe(true);
    const ct = imageResponse.headers()['content-type'] || '';
    expect(ct, 'portrait image must have image/* content-type on mobile').toContain('image/');

    const frameHeight = await portraitFrame.evaluate((el) => el.clientHeight);
    expect(frameHeight, 'portrait frame must not stretch above intended 420px min-h on mobile').toBeLessThanOrEqual(421);

    await img.evaluate((el) => el.decode ? el.decode() : Promise.resolve());

    const imgData = await img.evaluate((el) => ({
      src: el.currentSrc || el.getAttribute('src') || '',
      naturalW: el.naturalWidth,
      naturalH: el.naturalHeight,
      complete: el.complete,
      objectFit: window.getComputedStyle(el).objectFit,
      objectPosition: window.getComputedStyle(el).objectPosition,
    }));

    expect(imgData.src, 'image src must reference the portrait asset on mobile').toContain('alexis-home-about');
    expect(imgData.complete, 'image must report complete=true after successful load + decode on mobile').toBe(true);
    expect(imgData.naturalW, 'image naturalWidth must be > 0 (actual loaded pixels) on mobile').toBeGreaterThan(0);
    expect(imgData.naturalH, 'image naturalHeight must be > 0 (actual loaded pixels) on mobile').toBeGreaterThan(0);
    expect(imgData.objectFit, 'must use object-cover on mobile').toBe('cover');
    expect(imgData.objectPosition, 'must use object-position 50% 0% (object-top equivalent) on mobile').toContain('50% 0%');

    const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(hasOverflow, 'no horizontal overflow allowed at mobile').toBe(false);

    expect(consoleErrors, `unexpected console errors on mobile (only exact /_vercel/insights/script.js by pathname permitted): ${consoleErrors.join('; ')}`).toHaveLength(0);
    expect(pageErrors, `unexpected page errors on mobile: ${pageErrors.join('; ')}`).toHaveLength(0);
    expect(failedRequests, `unexpected failed requests on mobile: ${failedRequests.join('; ')}`).toHaveLength(0);
    expect(badResponses, `unexpected >=400 responses on mobile: ${badResponses.join('; ')}`).toHaveLength(0);
  });
});
