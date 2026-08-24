import { test, expect } from '@playwright/test';

test.describe('homepage portrait regression prevention', () => {
  test('desktop 1440px: #about portrait frame <=420px, image loaded, no horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'networkidle' });

    // Target the portrait container (the div with min-h-[420px])
    const portraitFrame = page.locator('#about .relative.min-h-\\[420px\\]');
    await expect(portraitFrame).toBeVisible();

    const frameHeight = await portraitFrame.evaluate((el) => el.clientHeight);
    expect(frameHeight, 'portrait frame must not stretch above intended 420px min-h').toBeLessThanOrEqual(421);

    // Image must reference the asset and render
    const img = page.locator('#about img');
    await expect(img).toBeVisible();
    const imgSrc = await img.getAttribute('src');
    expect(imgSrc, 'image src must reference the portrait asset').toContain('alexis-home-about');
    const box = await img.boundingBox();
    expect((box && box.width > 50) || false, 'image should render with reasonable width').toBe(true);

    // No document-level horizontal overflow
    const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(hasOverflow, 'no horizontal overflow allowed at desktop').toBe(false);
  });

  test('mobile 390px: #about portrait frame <=420px, image loaded, no horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const portraitFrame = page.locator('#about .relative.min-h-\\[420px\\]');
    await expect(portraitFrame).toBeVisible();

    const frameHeight = await portraitFrame.evaluate((el) => el.clientHeight);
    expect(frameHeight, 'portrait frame must not stretch above intended 420px min-h on mobile').toBeLessThanOrEqual(421);

    const img = page.locator('#about img');
    await expect(img).toBeVisible();
    const imgSrc = await img.getAttribute('src');
    expect(imgSrc, 'image src must reference the portrait asset').toContain('alexis-home-about');
    const box = await img.boundingBox();
    expect((box && box.width > 50) || false, 'image should render with reasonable width').toBe(true);

    const hasOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(hasOverflow, 'no horizontal overflow allowed at mobile').toBe(false);
  });
});
