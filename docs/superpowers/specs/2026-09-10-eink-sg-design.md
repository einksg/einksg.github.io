# eink.sg first edition

An English, responsive directory connecting independent e-paper makers with a global audience. Launch with one authentic product, ENILINX TICKEY, and a data-driven catalog that can grow as owner-supplied assets arrive. Purchase actions link to the maker's crowdfunding campaign.

White (#ffffff) canvas, black (#171717) text, neutral gray (#70706c), pale gray (#f5f5f3) image beds, restrained moss (#526449) status accent. System Helvetica Neue sans serif with generous spacing. Compact masthead, short introductory statement, responsive three/two/one-column catalog, quiet footer. Avoid fake products or stock photography to fill empty slots. A single editorial invitation accompanies the first catalog card.

Product opens in an accessible native dialog with a shareable URL hash, authentic photo gallery, optional user-initiated video, technical details, maker information, community and purchasing links. Close via button, backdrop or Escape; restore focus and page scrolling. About and Makers navigation use lightweight dialogs. Honor reduced motion.

Keep product facts, dates, media attribution and sources together in src/products.js. Unknown current pricing is explicitly referred to the campaign, rather than made up. Historical prices may be shown only as historical with citation. Source documentation records local copies and publication-rights status. Domain metadata targets https://eink.sg; actual hosting and DNS are separate from building locally.

Validation: production build; browser tests for open/close, deep linking, gallery, keyboard, navigation, source links and overflow at mobile/tablet/desktop widths; inspect screenshots.

## User refinements
Every card shows screen size and release date. Two labeled dropdowns sort sizes numerically and dates chronologically in both directions. Selecting one clears the other; missing values remain last. Remove all taglines and decorative promotional copy. The heading is simply “Epaper catalog”; retain only navigation and useful product information.

## Compact product grid refinement
Website name: Catalog by eink.sg. Display once in the header and in browser metadata. Desktop grid has four columns, tablet three, phone two. Show a small isolated product on the white page without photo backgrounds, card borders or floating badges. Use the official transparent TICKEY asset unchanged; keep full photography inside details.

## Homepage metadata refinement
Homepage thumbnails show only product name, company and price. Keep size/date in detail cards and retain both sort controls. TICKEY is US$59.90, supplied by the catalog owner.

## Sort toggle refinement
Replace dropdowns with only Screen size and Release date buttons. Default to release date newest first. Selecting size starts ascending; selecting date starts descending. Clicking the active button reverses the direction. Keep the current button marked and show a compact direction arrow.

## Latest owner refinements

Brand: Catalog in bold black, by eink.sg in gray. No navigation or taglines. Left sidebar: Release date first, Screen size second; both vertical toggle buttons. A thin rule separates sorting from alphabetical brand buttons. Clicking a selected brand clears that filter. Product thumbnails show name, company (year), and price only. Product pages show photos, name, company, price, brief description, purchase link and a separate Specs section including size and release date. Inter provides the modern readable typeface. Five requested products are included; unverified information is explicitly labeled.
