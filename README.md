# eink.sg

English e-paper product catalog. White background, responsive product grid, a left sidebar with sorting and brand filters, and simple product details with photos, a description, purchase link and separate Specs section. The catalog currently includes TICKEY, Modos Flow, OBOOK5, Paper Mono, PaperS3 and C1 Slim.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:5173. Production: `npm run build`; upload `dist/` to any static host. `npm run preview` previews the production build. Domain metadata is configured for https://eink.sg; DNS and hosting have not been connected.

## Edit the catalog

Add entries in `src/products.js`; put their media in `public/images/`. Every entry includes `screenInches` (numeric), `releaseDate` (ISO YYYY-MM-DD or null), `releaseType`, and a source URL. Use `releaseYear` when only the year is known; sorting uses the start of that year, while the page displays only the year. The homepage shows product name, company with year in parentheses, and price. Screen size and release date appear in Specs. Crowdfunding launch and fulfillment are different dates. Keep unconfirmed current prices null and label them “Price at retailer.” Add sources and a `verifiedAt` date. Cards and alphabetical brand filters generate automatically.

Click a brand to filter; click it again to show everything. Sorting stays active while filtering. Release date is the first sidebar button and defaults to newest first. Screen size starts smallest first. Clicking the active sorting button reverses its direction. Selecting the other button starts its default direction.

Each product has a shareable route, e.g. `/#product/tickey`. Opening, closing, browser navigation, Escape and focus restoration work without a backend. Data is locally curated, not user-submitted HTML.

## Verify

```sh
npx playwright install chromium
node --test tests/sorting.test.js
npm test
npm run build
```

Browser tests cover desktop, tablet and mobile layouts, sorting controls, gallery switching, deep links, outbound purchase links, keyboard closing and product deep links. Numeric/date sorting tests use several products including missing metadata.

## Sources

Sources and verification dates live in `src/products.js`; `docs/media-sources.json` records local media origins. The detail page links directly to the maker or retailer. Original product assets are displayed using CSS framing where necessary. No generated product photographs are used. Replace or extend photos with maker-supplied assets as they arrive.

OBOOK5's year is supported by contemporary coverage; the exact release date is unverified. Its price and purchase link use Amazon.com (US$89.98, verified September 10, 2026, USD display with delivery to Singapore; excludes shipping and taxes). C1 Slim's release date is retailer-reported; its CN¥499 original price was supplied by the catalog owner, and its retailer may require login. Prices retain their source currencies.

No checkout, account, tracking, analytics or external requests run on page load; outbound links open only when selected. Inter is bundled locally. Previously collected video and community metadata remain available in the data file for future use, but the product page shows photos only.
