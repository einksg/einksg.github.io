import { test, expect } from '@playwright/test';

test('product opens, gallery changes, Escape restores focus, and links are real', async ({ page }) => {
  await page.goto('/');
  const card = page.getByRole('link', { name: /Explore TICKEY/ });
  await card.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(page).toHaveURL(/\/product\/tickey\/$/);
  await expect(dialog.getByText('3.7 inches', { exact: true })).toBeVisible();
  await expect(dialog.getByText('11 Aug 2026', { exact: true })).toBeVisible();
  await expect(dialog.locator('.gallery-stack img')).toHaveCount(4);
  await expect(dialog.locator('.gallery-stack img').nth(1)).toHaveAttribute('src', '/images/tickey-bag.jpg');
  await expect(dialog.getByRole('link', { name: 'View on Kickstarter' })).toHaveAttribute('href', /kickstarter.com\/projects\/enilinx/);
  await page.keyboard.press('Escape');
  await expect(dialog).not.toBeVisible();
  await expect(card).toBeFocused();
});

test('product deep link opens and closes', async ({ page }) => {
  await page.goto('/product/tickey/');
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('button', { name: 'Close product' }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(page).toHaveURL(/\/$/);
});

for (const width of [375, 768, 1440]) {
  test(`catalog and detail fit ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.getByRole('button', { name: /^(Screen size|Release date)$/ })).toHaveCount(0);
    await expect(page.locator('.year-heading')).toHaveText(['2026', '2025', '2024', '2023']);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.getByRole('link', { name: /Explore TICKEY/ }).click();
    expect(await page.getByRole('dialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    await expect(page.locator('.gallery-stack img').first()).toBeVisible();
  });
}


test('Modos Flow has independent product content and selectable models', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.product-card h3')).toHaveText(["Paper Mono", "TICKEY", "reTerminal Sticky", "Go 6 (Gen II)", "Modos Flow", "Nest 7-inch", "Muse 10-inch", "Gallery 28.5-inch", "X4 Classic (V2)", "X4 Pro", "X3", "C1 Slim", "Palma 2 Pro", "Paperlike 13K", "OBOOK5", "FlipAction Elite 16″", "PaperS3", "Manta", "Go 6", "Nomad"]);
  await page.getByRole('link', { name: 'Explore Modos Flow by Modos', exact: true }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByRole('heading', { name: 'Modos Flow' })).toBeVisible();
  await expect(dialog.locator('.price-label')).toHaveText('US$699');
  await dialog.getByLabel('Color', { exact: true }).check();
  await expect(dialog.locator('.price-label')).toHaveText('US$799');
  await expect(dialog.locator('.gallery-stack img').nth(1)).toHaveAttribute('src', '/images/modos-flow-color.jpg');
  await expect(dialog.getByRole('link', { name: 'Pre-order on Crowd Supply' })).toHaveAttribute('href', 'https://www.crowdsupply.com/modos-tech/modos-flow');
  await expect(dialog.getByText('13.3 inches', { exact: true })).toBeVisible();
  await expect(dialog.getByText('26 May 2026', { exact: true })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('iframe')).toHaveCount(0);
});

test('brand filters preserve year sections and newest-first ordering', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.sort-button')).toHaveCount(0);
  await expect(page.locator('.brand-button')).toHaveText(['BOOX', 'DASUNG', 'ENILINX', 'Guowen', 'InkJoy', 'Koridy', 'M5Stack', 'Modos', 'Seeed Studio', 'SOTSU', 'Supernote', 'Xteink']);
  const brand = page.getByRole('button', { name: 'Xteink', exact: true });
  await brand.click();
  await expect(brand).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.year-heading')).toHaveText(['2026', '2025']);
  await expect(page.getByRole('region', { name: '2026', exact: true }).locator('.product-card h3')).toHaveText(['X4 Classic (V2)', 'X4 Pro']);
  await expect(page.getByRole('region', { name: '2025', exact: true }).locator('.product-card h3')).toHaveText(['X3']);
  await brand.click();
  await expect(brand).toHaveAttribute('aria-pressed', 'false');
  await expect(page.locator('.year-heading')).toHaveText(['2026', '2025', '2024', '2023']);
  await expect(page.locator('.product-card')).toHaveCount(20);
  await page.getByRole('button', { name: 'M5Stack', exact: true }).click();
  await expect(page.locator('.year-heading')).toHaveText(['2026', '2024']);
  await expect(page.locator('.product-card h3')).toHaveText(['Paper Mono', 'PaperS3']);
});

test('PaperS3 has product details and EOL status', async ({ page }) => {
  await page.goto('/#product/m5stack-paper-s3');
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByRole('heading', { name: 'PaperS3', exact: true })).toBeVisible();
  await expect(dialog.locator('.price-label')).toHaveText('US$59');
  await expect(dialog.getByText('4.7 inches', { exact: true })).toBeVisible();
  await expect(dialog.getByText('13 Dec 2024', { exact: true })).toBeVisible();
  await expect(dialog.getByRole('link', { name: 'View on M5Stack' })).toHaveAttribute('href', /m5papers3/);
  await expect(dialog.locator('.gallery-stack img')).toHaveCount(2);
  await expect(dialog.locator('.gallery-stack img').first()).toHaveAttribute('src', '/images/papers3-front.png');
});

for (const [id, name, price, size, release, buy] of [
  ['obook5', 'OBOOK5', 'US$89.98', '4.26 inches', '2025', 'View on Amazon'],
  ['m5stack-paper-mono', 'Paper Mono', 'US$65', '3.97 inches', '21 Aug 2026', 'View on M5Stack'],
  ['koridy-c1-slim', 'C1 Slim', 'CN¥499', '2.66 inches', '1 Nov 2025', 'View on JD'],
]) {
  test(`${name} has its own photos, price, purchase link and specs`, async ({ page }) => {
    await page.goto(`/#product/${id}`);
    const dialog = page.getByRole('dialog');
    await expect(dialog.getByRole('heading', { name, exact: true })).toBeVisible();
    await expect(dialog.locator('.price-label')).toHaveText(price);
    await expect(dialog.getByText(size, { exact: true })).toBeVisible();
    await expect(dialog.getByText(release, { exact: true })).toBeVisible();
    await expect(dialog.getByRole('link', { name: buy })).toHaveAttribute('href', /^https?:\/\//);
    if (id === 'obook5') await expect(dialog.getByRole('link', { name: buy })).toHaveAttribute('href', 'https://www.amazon.com/dp/B0DT3RH9QH');
    await expect(dialog.getByRole('heading', { name: 'Specs', exact: true })).toBeVisible();
    await expect(dialog.locator('.gallery-stack img').first()).toBeVisible();
    await expect.poll(() => dialog.locator('.gallery-stack img').first().evaluate(img => img.complete && img.naturalWidth > 0)).toBe(true);
  });
}
