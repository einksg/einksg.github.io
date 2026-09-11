import { test, expect } from '@playwright/test';

const expectedProducts = ["Paper Mono", "TICKEY", "reTerminal Sticky", "Modos Flow", "Nest 7-inch", "Muse 10-inch", "Gallery 28.5-inch", "X4 Classic (V2)", "X4 Pro", "X3", "C1 Slim", "Palma 2 Pro", "Paperlike 13K", "OBOOK5", "FlipAction Elite 16″", "PaperS3", "Nomad"];

test('keeps the added products and original desktop spacing', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await expect(page.locator('.product-card h3')).toHaveText(expectedProducts);
  await expect(page.locator('.product-grid')).toHaveCSS('row-gap', '56px');
  await expect(page.locator('.product-grid')).toHaveCSS('column-gap', '24px');
  await expect(page.locator('.product-image').first()).toHaveCSS('height', '225px');
});

test('keeps the original mobile spacing without card overlap', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto('/');
  await expect(page.locator('.product-grid')).toHaveCSS('row-gap', '38px');
  await expect(page.locator('.product-grid')).toHaveCSS('column-gap', '14px');
  await expect(page.locator('.product-image').first()).toHaveCSS('height', '178px');

  const imageFitsSlot = await page.locator('.product-card').evaluateAll(cards => cards.every(card => {
    const slot = card.querySelector('.product-image').getBoundingClientRect();
    const crop = card.querySelector('.product-image-crop').getBoundingClientRect();
    return crop.height <= slot.height && crop.width <= slot.width;
  }));
  expect(imageFitsSlot).toBe(true);

  const overlap = await page.locator('.product-card').evaluateAll(cards => cards.some((card, index) => {
    const a = card.getBoundingClientRect();
    return cards.slice(index + 1).some(other => {
      const b = other.getBoundingClientRect();
      return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
    });
  }));
  expect(overlap).toBe(false);
});

test('Muse uses the supplied clean image', async ({ page }) => {
  await page.goto('/');
  const muse = page.getByRole('link', { name: /Explore Muse 10-inch/ });
  await expect(muse.locator('img')).toHaveAttribute('src', '/images/inkjoy-muse-10.png');
});
