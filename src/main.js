import '@fontsource-variable/inter';
import './style.css';
import { products } from './products.js';
import { sortProducts, formatDate } from './catalog.js';

const grid = document.querySelector('#product-grid');
const productDialog = document.querySelector('#product-dialog');
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const external = (url, label, className = '') => `<a class="${className}" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)}<span aria-hidden="true">↗</span></a>`;
let returnFocus;
let activeProduct;
let activeBrand = null;

function renderCatalog() {
  const visibleProducts = products.filter(product => !activeBrand || product.maker === activeBrand);
  const years = new Map();
  for (const product of sortProducts(visibleProducts)) {
    const year = product.releaseDate?.slice(0, 4) || product.releaseYear || 'Undated';
    if (!years.has(String(year))) years.set(String(year), []);
    years.get(String(year)).push(product);
  }
  grid.innerHTML = [...years].map(([year, yearProducts]) => `<section class="year-section" aria-labelledby="year-${escape(year)}">
    <h2 class="year-heading" id="year-${escape(year)}">${escape(year)}</h2>
    <div class="product-grid">${yearProducts.map(product => `<article class="product-card">
    <a class="product-link" href="/product/${escape(product.id)}/" aria-label="Explore ${escape(product.name)} by ${escape(product.maker)}">
      <div class="product-image ${escape(product.coverShape || '')}"><span class="product-image-crop"><img src="${escape(product.cover)}" alt="${escape(product.coverAlt || product.name)}" width="900" height="1464"></span></div>
      <div class="product-topline"><h3>${escape(product.name)}</h3><span>${escape(product.maker)}${product.releaseDate || product.releaseYear ? ` (${escape(product.releaseDate?.slice(0, 4) || product.releaseYear)})` : ''}</span></div>
      <p class="card-price">${escape(product.priceLabel)}</p>
    </a>
  </article>`).join('')}</div>
  </section>`).join('');
  document.querySelector('#product-count').textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? 'product' : 'products'}${activeBrand ? ` by ${activeBrand}` : ''}`;
}

const brandFilters = document.querySelector('#brand-filters');
brandFilters.innerHTML = [...new Set(products.map(product => product.maker))]
  .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
  .map(brand => `<button type="button" class="brand-button" data-brand="${escape(brand)}" aria-pressed="false">${escape(brand)}</button>`).join('');
brandFilters.addEventListener('click', event => {
  const button = event.target.closest('[data-brand]');
  if (!button) return;
  activeBrand = activeBrand === button.dataset.brand ? null : button.dataset.brand;
  for (const brandButton of brandFilters.querySelectorAll('button')) {
    brandButton.setAttribute('aria-pressed', String(brandButton.dataset.brand === activeBrand));
  }
  renderCatalog();
});
function closeDialog(dialog, updateUrl = true) {
  dialog.querySelectorAll('video').forEach(video => video.pause());
  dialog.querySelectorAll('iframe').forEach(frame => frame.remove());
  dialog.close();
  document.body.classList.remove('dialog-open');
  if (updateUrl) history.replaceState(null, '', `/${location.search}`);
  document.title = 'Catalog by eink.sg';
  if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
}

for (const dialog of [productDialog]) {
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(dialog); });
  dialog.addEventListener('click', event => {
    if (event.target.closest('[data-close]')) closeDialog(dialog);
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(dialog);
    }
  });
}

function openProduct(product) {
  activeProduct = product;
  const initialPrice = product.variants?.[0].priceLabel || product.priceLabel;
  document.title = `${product.name} by ${product.maker} — Catalog by eink.sg`;
  productDialog.innerHTML = `<div class="dialog-toolbar"><a class="detail-brand" href="/"><strong>Catalog</strong> <span>by eink.sg</span></a><button class="close-button" data-close aria-label="Close product">✕</button></div>
    <div class="product-layout"><div class="gallery"><div class="gallery-stack" aria-label="Product photos">${product.photos.map(photo => `<div class="gallery-photo ${photo.crop === 'c1slim' ? 'c1slim-photo' : photo.crop === 'papers3' ? 'papers3-photo' : ''}"><img src="${escape(photo.src)}" alt="${escape(photo.alt)}" loading="lazy"></div>`).join('')}</div>
    </div>
    <div class="product-info"><h2 id="product-title">${escape(product.name)}</h2>
      <a class="maker-byline" href="${escape(product.makerUrl)}" target="_blank" rel="noopener noreferrer">${escape(product.maker)}</a>
      <p class="price-label">${escape(initialPrice)}</p>
      <p class="detail-description">${escape(product.description)}</p>
      ${product.variants ? `<fieldset class="variant-options"><legend>Model</legend>${product.variants.map((variant, index) => `<label><input type="radio" name="model" value="${index}" ${index === 0 ? 'checked' : ''}><span>${escape(variant.name)}</span></label>`).join('')}</fieldset>` : ''}
      ${external(product.purchaseUrl, product.purchaseLabel || 'View on Kickstarter', 'primary-button')}
      <section class="product-specs" aria-labelledby="specs-title"><h3 id="specs-title">Specs</h3>
      <dl class="specs"><div><dt>Screen size</dt><dd>${product.screenInches} inches</dd></div><div><dt>Release date</dt><dd><span>${product.releaseDate ? formatDate(product.releaseDate) : product.releaseYear || 'Not verified'}</span>${product.releaseType ? `<small>${escape(product.releaseType)}</small>` : ''}</dd></div>${product.specs.map(([key,value])=>`<div><dt>${escape(key)}</dt><dd>${escape(value)}</dd></div>`).join('')}</dl>
      </section>
    </div></div>`;
  productDialog.querySelectorAll('input[name="model"]').forEach(input => input.addEventListener('change', () => {
    const variant = product.variants[Number(input.value)];
    productDialog.querySelector('.price-label').textContent = variant.priceLabel;
    productDialog.querySelector('.gallery-stack .gallery-photo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
  productDialog.showModal();
  productDialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}

function route() {
  const legacyProduct = products.find(item => `#product/${item.id}` === location.hash);
  if (legacyProduct) history.replaceState(null, '', `/product/${legacyProduct.id}/${location.search}`);
  const path = location.pathname.replace(/\/$/, '');
  const product = products.find(item => `/product/${item.id}` === path);
  for (const dialog of [productDialog]) if (dialog.open) closeDialog(dialog, false);
  if (product) openProduct(product);
}

document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="/product/"]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const href = link.getAttribute('href');
  event.preventDefault();
  if (!productDialog.open) returnFocus = link;
  history.pushState(null, '', href);
  route();
});
window.addEventListener('popstate', route);
window.addEventListener('hashchange', route);
renderCatalog();
route();
