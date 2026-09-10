import { test, expect } from '@playwright/test';

test('product opens, gallery changes, Escape restores focus, and links are real', async ({ page }) => {
  await page.goto('/');
  const card = page.getByRole('link', { name: /Explore TICKEY/ });
  await card.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(page).toHaveURL(/#product\/tickey/);
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
  await page.goto('/#product/tickey');
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('button', { name: 'Close product' }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
});

for (const width of [375, 768, 1440]) {
  test(`catalog and detail fit ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const size = page.getByRole('button', { name: 'Screen size', exact: true });
    const date = page.getByRole('button', { name: 'Release date', exact: true });
    await expect(size).toBeVisible();
    await expect(date).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#sort-status')).toHaveText('Release date: newest to oldest.');
    await date.click();
    await expect(page.locator('#sort-status')).toHaveText('Release date: oldest to newest.');
    await date.click();
    await expect(page.locator('#sort-status')).toHaveText('Release date: newest to oldest.');
    await size.click();
    await expect(size).toHaveAttribute('aria-pressed', 'true');
    await expect(date).toHaveAttribute('aria-pressed', 'false');
    await expect(page.locator('#sort-status')).toHaveText('Screen size: smallest to largest.');
    await size.press('Enter');
    await expect(page.locator('#sort-status')).toHaveText('Screen size: largest to smallest.');
    await date.click();
    await expect(size).toHaveAttribute('aria-pressed', 'false');
    await expect(page.locator('#sort-status')).toHaveText('Release date: newest to oldest.');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.getByRole('link', { name: /Explore TICKEY/ }).click();
    expect(await page.getByRole('dialog').evaluate(el => el.scrollWidth <= el.clientWidth)).toBe(true);
    await expect(page.locator('.gallery-stack img').first()).toBeVisible();
  });
}


test('Modos Flow has independent product content and selectable models', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.product-card h3')).toHaveText(['Paper Mono', 'TICKEY', 'Modos Flow', 'C1 Slim', 'OBOOK5', 'PaperS3']);
  await page.getByRole('button', { name: 'Release date', exact: true }).click();
  await expect(page.locator('.product-card h3')).toHaveText(['PaperS3', 'OBOOK5', 'C1 Slim', 'Modos Flow', 'TICKEY', 'Paper Mono']);
  await page.getByRole('button', { name: 'Screen size', exact: true }).click();
  await expect(page.locator('.product-card h3')).toHaveText(['C1 Slim', 'TICKEY', 'Paper Mono', 'OBOOK5', 'PaperS3', 'Modos Flow']);
  await page.getByRole('button', { name: 'Screen size', exact: true }).click();
  await expect(page.locator('.product-card h3')).toHaveText(['Modos Flow', 'PaperS3', 'OBOOK5', 'Paper Mono', 'TICKEY', 'C1 Slim']);
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

test('sidebar lists sorting first and brands alphabetically, and filters preserve sorting', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.sort-button')).toHaveText(['Release date↓', 'Screen size']);
  await expect(page.locator('.brand-button')).toHaveText(['ENILINX', 'Guowen', 'Koridy', 'M5Stack', 'Modos']);
  const brand = page.getByRole('button', { name: 'Koridy', exact: true });
  await brand.click();
  await expect(page.locator('.product-card h3')).toHaveText(['C1 Slim']);
  await expect(page.locator('.product-topline > span')).toHaveText(['Koridy (2025)']);
  await expect(brand).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: 'Screen size', exact: true }).click();
  await expect(page.locator('.product-card h3')).toHaveText(['C1 Slim']);
  await brand.click();
  await expect(page.locator('.product-card h3')).toHaveText(['C1 Slim', 'TICKEY', 'Paper Mono', 'OBOOK5', 'PaperS3', 'Modos Flow']);
  await expect(brand).toHaveAttribute('aria-pressed', 'false');
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
