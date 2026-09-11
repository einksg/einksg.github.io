import { test, expect } from '@playwright/test';

const productIds = [
  'plaud-note', 'plaud-note-pro', 'plaud-notepin', 'iflytek-max2',
  'supernote-manta', 'boox-go6', 'boox-go6-gen2', 'tickey', 'modos-flow', 'obook5', 'm5stack-paper-mono',
  'm5stack-paper-s3', 'm5stack-paper-color', 'seeed-studio-sticky', 'inkjoy-nest-7', 'inkjoy-muse-10',
  'inkjoy-gallery-28-5', 'dasung-paperlike-13k', 'sotsu-flipaction-elite-16',
  'xteink-x4', 'xteink-x4-pro', 'xteink-x3', 'boox-palma-2-pro', 'supernote-nomad',
];

test('all 24 visible products have working direct routes, images, and purchase links', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  for (const id of productIds) {
    await page.goto(`/product/${id}/`);
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.locator('.primary-button')).toHaveAttribute('href', /^https?:\/\//);
    for (const image of await dialog.locator('.gallery-stack img').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate(img => img.complete && img.naturalWidth > 0)).toBe(true);
    }
    await expect(dialog.getByRole('heading', { name: 'Specs', exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Close product' }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator('.product-card')).toHaveCount(24);
    for (const label of await page.locator('.product-topline > span').allTextContents()) expect(label).toMatch(/\(20\d{2}\)$/);
  }
  expect(errors).toEqual([]);
});

test('complete PaperS3 photos and added brands are retained', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Explore PaperS3 by M5Stack' }).locator('img')).toHaveAttribute('src', '/images/papers3-front.png');
  await expect.poll(() => page.locator('.product-card img').evaluateAll(images => images.every(img => img.complete && img.naturalWidth > 0))).toBe(true);
  await page.screenshot({ path: 'catalog-final-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 375, height: 900 });
  await page.screenshot({ path: 'catalog-final-mobile.png', fullPage: true });
  await page.getByRole('button', { name: 'InkJoy', exact: true }).click();
  await expect(page.locator('.product-card h3')).toHaveText(['Nest 7-inch', 'Muse 10-inch', 'Gallery 28.5-inch']);
  await page.getByRole('button', { name: 'Seeed Studio', exact: true }).click();
  await expect(page.locator('.product-card h3')).toHaveText(['reTerminal Sticky']);
  await page.getByRole('button', { name: 'Xteink', exact: true }).click();
  await expect(page.locator('.product-card h3')).toHaveText(['X4 Classic (V2)', 'X4 Pro', 'X3']);
});


test('Xteink models use matching English official stores and prices', async ({ page }) => {
  for (const [id, name, price, path] of [
    ['xteink-x4', 'X4 Classic (V2)', 'US$79', 'xteink-x4-classic-pocket-ereader'],
    ['xteink-x4-pro', 'X4 Pro', 'US$99', 'xteink-x4-pro-pocket-ereader'],
    ['xteink-x3', 'X3', 'US$69', 'xteink-x3'],
  ]) {
    await page.goto(`/product/${id}/`);
    const dialog = page.getByRole('dialog');
    await expect(dialog.getByRole('heading', { name, exact: true })).toBeVisible();
    await expect(dialog.locator('.price-label')).toHaveText(price);
    await expect(dialog.getByRole('link', { name: 'View on Xteink', exact: true })).toHaveAttribute('href', `https://www.xteink.com/products/${path}`);
    await expect(dialog.getByText('Not verified', { exact: true })).toHaveCount(0);
  }
});


test('Manta and both Go 6 generations have the right year, specs, price and official link', async ({ page }) => {
  for (const [id, name, year, date, price, url, size] of [
    ['boox-go6', 'Go 6', '2024', '25 Aug 2024', 'From US$149.99', 'https://shop.boox.com/products/go6', '6 inches'],
    ['supernote-manta', 'Manta', '2024', '12 Dec 2024', 'From US$505', 'https://supernote.com/products/supernote-manta', '10.7 inches'],
    ['boox-go6-gen2', 'Go 6 (Gen II)', '2026', '7 Jun 2026', 'From US$189.99', 'https://shop.boox.com/products/go6gen2', '6 inches'],
  ]) {
    await page.goto('/');
    const section = page.getByRole('region', { name: year, exact: true });
    await section.getByRole('link', { name: new RegExp(`Explore ${name.replace(/[()]/g, '\\$&')}`) }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog.getByRole('heading', { name, exact: true })).toBeVisible();
    await expect(dialog.locator('.price-label')).toHaveText(price);
    await expect(dialog.getByText(date, { exact: true })).toBeVisible();
    await expect(dialog.getByText(size, { exact: true })).toBeVisible();
    await expect(dialog.locator('.primary-button')).toHaveAttribute('href', url);
  }
});
