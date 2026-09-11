import { test, expect } from '@playwright/test';

const productIds = [
  'tickey', 'modos-flow', 'obook5', 'koridy-c1-slim', 'm5stack-paper-mono',
  'm5stack-paper-s3', 'seeed-studio-sticky', 'inkjoy-nest-7', 'inkjoy-muse-10',
  'inkjoy-gallery-28-5', 'dasung-paperlike-13k', 'sotsu-flipaction-elite-16',
  'xteink-x4', 'xteink-x4-pro', 'xteink-x3', 'boox-palma-2-pro', 'supernote-nomad',
];

test('all 17 products have working direct routes, images, and purchase links', async ({ page }) => {
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
    await expect(page.locator('.product-card')).toHaveCount(17);
    for (const label of await page.locator('.product-topline > span').allTextContents()) expect(label).toMatch(/\(20\d{2}\)$/);
  }
  expect(errors).toEqual([]);
});

test('complete PaperS3 and C1 Slim photos and added brands are retained', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Explore PaperS3 by M5Stack' }).locator('img')).toHaveAttribute('src', '/images/papers3-front.png');
  await expect(page.getByRole('link', { name: 'Explore C1 Slim by Koridy' }).locator('img')).toHaveAttribute('src', '/images/c1slim.webp');
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
  await page.goto('/product/koridy-c1-slim/');
  await expect(page.locator('.gallery-stack img').first()).toHaveAttribute('src', '/images/c1slim.webp');
  await expect(page.locator('.gallery-photo')).not.toHaveClass(/c1slim-photo/);
  await page.screenshot({ path: 'c1slim-final-mobile.png', fullPage: false });
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
