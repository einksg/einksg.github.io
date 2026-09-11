import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { products } from '../src/products.js';

const template = await readFile('dist/index.html', 'utf8');

for (const product of products) {
  const route = `/product/${product.id}/`;
  const title = `${product.name} by ${product.maker} — Catalog by eink.sg`;
  const html = template
    .replace('<title>Catalog by eink.sg</title>', `<title>${title}</title>`)
    .replace('content="Catalog by eink.sg"', `content="${title}"`)
    .replace('content="https://eink.sg/"', `content="https://eink.sg${route}"`)
    .replace('href="https://eink.sg/"', `href="https://eink.sg${route}"`);
  const directory = `dist/product/${product.id}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}
