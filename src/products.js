const campaign = 'https://www.kickstarter.com/projects/enilinx/ticket-refresh-it-new-clip-it-on-carry-your-moment';
export const products = [{
  id: 'tickey', name: 'TICKEY', maker: 'ENILINX', category: 'Frame',
  description: 'A 3.7-inch color e-paper display for photos, notes, and badges. Update it from your phone over Bluetooth or Wi-Fi.',
  screenInches: 3.7, releaseDate: '2026-08-11', releaseType: 'Crowdfunding launch',
  releaseSource: 'https://news.pedaily.cn/202609/568477.shtml',
  price: 59.9, currency: 'USD', priceLabel: 'US$59.90', status: 'Crowdfunding',
  priceSource: 'Catalog owner', // Price supplied directly by the site owner.
  purchaseUrl: campaign, officialUrl: 'https://www.eniacelec.com/pages/ticket',
  makerUrl: 'https://www.eniacelec.com/', makerContact: 'hello@eniacelec.com',
  makerDescription: 'An independent hardware team making tools for everyday life. Meet Yifan, Aspen, Wenting, and Hailey on the ENILINX website.',
  communityUrl: `${campaign}/comments`, communityLabel: 'Kickstarter discussion',
  developerDescription: 'Built around the ESP32-S3. The maker describes open firmware on its product page; a public code repository has not yet been verified for this listing.',
  shippingNote: 'The campaign FAQ estimates fulfillment from November 2026. Destinations, shipping charges, and taxes vary; check the campaign before backing.',
  specs: [['Display', '3.7-inch color e-paper'], ['Resolution', '720 × 480 pixels'], ['Dimensions', '62 × 111 × 3.8 mm'], ['Weight', '45 g'], ['Connectivity', 'Bluetooth, Wi-Fi, NFC'], ['Charging', 'USB-C']],
  cover: '/images/tickey-cutout.png',
  coverAlt: 'TICKEY color e-paper device, front view with a parrot image',
  photos: [
    { src: '/images/tickey-hero.jpg', alt: 'A yellow TICKEY displaying Starry Night beside a phone on a desk' },
    { src: '/images/tickey-bag.jpg', alt: 'TICKEY with a colorful cat design clipped to a backpack' },
    { src: '/images/tickey-desk.jpg', alt: 'TICKEY used as a small desk display' },
    { src: '/images/tickey-detail.jpg', alt: 'TICKEY showing a parrot photo beside the original on a phone' },
  ],
  video: { src: '/images/tickey-demo.mp4', poster: '/images/tickey-product.jpg', title: 'Changing a photo on TICKEY', description: 'A silent demonstration from ENILINX: a photo is sent from a phone to the physical display.', fullVideoUrl: 'https://www.youtube.com/watch?v=3vXFzsjyfK0' },
  verifiedAt: '2026-09-10',
  sources: [
    { label: 'Official product page & photography', url: 'https://www.eniacelec.com/pages/ticket' },
    { label: 'Campaign FAQ & delivery information', url: `${campaign}/faqs` },
    { label: 'Launch date reporting (Chinese)', url: 'https://news.pedaily.cn/202609/568477.shtml' },
  ],
}];

const flowCampaign = 'https://www.crowdsupply.com/modos-tech/modos-flow';
products.push({
  id: 'modos-flow', name: 'Modos Flow', maker: 'Modos', category: 'Monitor',
  description: 'A 13.3-inch touchscreen e-paper monitor for your computer. Connect over USB-C DisplayPort Alt Mode. Available in monochrome or color.',
  screenInches: 13.3, releaseDate: '2026-05-26', releaseType: 'Crowdfunding launch',
  releaseSource: `${flowCampaign}/updates/our-new-campaign-is-live-on-crowd-supply`,
  price: 699, currency: 'USD', priceLabel: 'From US$699', priceSource: flowCampaign,
  status: 'Pre-order', purchaseUrl: flowCampaign, purchaseLabel: 'Pre-order on Crowd Supply',
  officialUrl: 'https://www.modos.tech/', makerUrl: 'https://www.modos.tech/', makerContact: 'hello@modos.tech',
  makerDescription: 'Modos is an open-hardware company in Boston. The team includes Alexander Soto and Wenting Zhang.',
  communityUrl: 'https://discord.gg/6ktE6VxSyh', communityLabel: 'Discord',
  developerUrl: 'https://github.com/Modos-Labs',
  developerDescription: 'Open hardware and open-source firmware. The Modos GitHub organization hosts the display controller projects and API.',
  shippingNote: 'Crowd Supply lists estimated shipping on December 31, 2026. Shipping is free in the US and US$18 worldwide.',
  specs: [['Display', '13.3-inch e-paper touchscreen'], ['Resolution', '3200 × 2400 pixels'], ['Refresh rate', 'Up to 60 Hz with additional power; 40 Hz over one USB-C cable'], ['Connection', 'USB-C DisplayPort Alt Mode'], ['Compatibility', 'Linux, macOS, Windows'], ['Color edition', 'Stylus support and frontlight']],
  cover: '/images/modos-flow-mono.jpg', coverAlt: 'Modos Flow monochrome monitor on a white background', coverShape: 'landscape',
  photos: [
    { src: '/images/modos-flow-mono.jpg', alt: 'Modos Flow Mono displaying a Wikipedia page' },
    { src: '/images/modos-flow-color.jpg', alt: 'Modos Flow Color displaying a Wikipedia page and color image' },
  ],
  variants: [
    { name: 'Mono', price: 699, priceLabel: 'US$699', photo: 0 },
    { name: 'Color', price: 799, priceLabel: 'US$799', photo: 1 },
  ],
  video: { embedUrl: 'https://www.youtube-nocookie.com/embed/uENnY78Nu_4?rel=0', title: 'Introducing Modos Flow', fullVideoUrl: 'https://www.youtube.com/watch?v=uENnY78Nu_4' },
  mediaCredit: 'Product photos and video by Modos, via Crowd Supply.',
  verifiedAt: '2026-09-10',
  sources: [
    { label: 'Product, pricing & shipping', url: flowCampaign },
    { label: 'Launch announcement · 26 May 2026', url: `${flowCampaign}/updates/our-new-campaign-is-live-on-crowd-supply` },
    { label: 'Source code', url: 'https://github.com/Modos-Labs' },
  ],
});

const obookPage = 'http://www.obook.com.cn/products/view/id/34.html';
const obookAmazon = 'https://www.amazon.com/dp/B0DT3RH9QH';
products.push({
  id: 'obook5', name: 'OBOOK5', maker: 'Guowen', category: 'eReader',
  description: 'A pocket-size e-reader with a 4.26-inch e-paper touchscreen, physical page buttons, and a frontlight. Read your own EPUB and PDF files, or transfer books over Wi-Fi.',
  screenInches: 4.26, releaseDate: null, releaseYear: 2025, releaseType: 'Year only; exact date unverified',
  releaseSource: 'https://blog.the-ebook-reader.com/2025/09/24/obook-5-is-a-mini-ereader/',
  price: 89.98, currency: 'USD', priceLabel: 'US$89.98', priceSource: obookAmazon,
  priceNote: 'Amazon.com new offer sold by OBOOK, shipped by Amazon; USD display with delivery to Singapore. Excludes shipping and taxes. Verified September 10, 2026.',
  purchaseUrl: obookAmazon, purchaseLabel: 'View on Amazon',
  officialUrl: obookPage, makerUrl: 'http://www.obook.com.cn/',
  specs: [['Display', 'Monochrome e-paper touchscreen with frontlight'], ['Resolution', '800 × 480 pixels'], ['Storage', '32 GB'], ['Battery', '1,200 mAh'], ['Weight', 'About 94 g'], ['Connectivity', 'Wi-Fi, USB-C, 3.5 mm audio'], ['Operating system', 'OBOOK OS']],
  cover: '/images/obook5.png', coverShape: 'obook', coverAlt: 'Green OBOOK5 e-reader with orange page buttons',
  photos: [{ src: '/images/obook5.png', alt: 'OBOOK5 showing a page of an English book' }],
  verifiedAt: '2026-09-10',
  sources: [{ label: 'Official product, image and specifications', url: obookPage }, { label: 'Amazon.com price and purchase', url: obookAmazon }],
});

const c1SlimPage = 'https://www.ruten.com.tw/item/22601857206672/';
products.push({
  id: 'koridy-c1-slim', name: 'C1 Slim', maker: 'Koridy', category: 'Dictionary',
  description: 'A pocket electronic dictionary for Chinese, English, and Japanese. A 2.66-inch monochrome e-paper display and physical keyboard support word lookup and vocabulary practice.',
  screenInches: 2.66, releaseDate: '2025-11-01', releaseType: 'Retailer-reported release', releaseSource: c1SlimPage,
  price: 499, currency: 'CNY', priceLabel: 'CN¥499', priceSource: 'Catalog owner',
  priceNote: 'Original price supplied by the catalog owner; not a live retailer quote.',
  purchaseUrl: 'https://item.jd.com/100282856208.html', purchaseLabel: 'View on JD',
  makerUrl: 'https://www.jd.com/brand/6524a446188877224e4.html',
  specs: [['Display', 'Monochrome e-paper'], ['Input', 'Physical keyboard; no touchscreen'], ['Storage', '64 GB'], ['Languages', 'Chinese, English, Japanese'], ['Audio', 'Word pronunciation'], ['Battery', 'Rechargeable lithium battery']],
  cover: '/images/c1slim.webp', coverShape: 'landscape', coverAlt: 'Cream Koridy C1 Slim dictionary with a physical keyboard',
  photos: [{ src: '/images/c1slim.webp', alt: 'Koridy C1 Slim electronic dictionary, complete front view' }],
  verifiedAt: '2026-09-10',
  sources: [{ label: 'Retailer specifications, reported release date and product imagery', url: c1SlimPage }, { label: 'JD product listing', url: 'https://item.jd.com/100282856208.html' }],
});

const paperMonoPage = 'https://shop.m5stack.com/products/m5papermono-with-lora-nfc-800x480-3-97-eink-display';
const paperMonoLaunch = 'https://shop.m5stack.com/blogs/news/m5stack-launches-papermono-a-compact-e-ink-development-terminal-for-connected-projects';
products.push({
  id: 'm5stack-paper-mono', name: 'Paper Mono', maker: 'M5Stack', category: 'Development board',
  description: 'A compact e-paper development device powered by the ESP32-S3. Its 3.97-inch touchscreen, frontlight, LoRa, and NFC support projects such as calendars, dashboards, and connected controls.',
  screenInches: 3.97, releaseDate: '2026-08-21', releaseType: 'Product launch',
  releaseSource: paperMonoLaunch,
  price: 65, currency: 'USD', priceLabel: 'US$65', priceSource: paperMonoPage,
  status: 'Out of stock', purchaseUrl: paperMonoPage, purchaseLabel: 'View on M5Stack',
  officialUrl: paperMonoPage, makerUrl: 'https://shop.m5stack.com/',
  specs: [['Display', 'Monochrome e-paper touchscreen with frontlight'], ['Resolution', '480 × 800 pixels'], ['Processor', 'ESP32-S3R8'], ['Memory', '16 MB flash, 8 MB PSRAM'], ['Connectivity', 'Wi-Fi, LoRa, NFC, USB-C'], ['Battery', '1,150 mAh'], ['Dimensions', '61 × 101 × 7.95 mm'], ['Weight', '74.7 g']],
  cover: '/images/papermono-1.webp', coverShape: 'papermono', coverAlt: 'White M5Stack Paper Mono e-paper development device',
  photos: [
    { src: '/images/papermono-1.webp', alt: 'M5Stack Paper Mono front and side view' },
    { src: '/images/papermono-3.webp', alt: 'Paper Mono displaying a calendar on a desktop stand' },
  ],
  verifiedAt: '2026-09-10',
  sources: [{ label: 'Official product, price and photography', url: paperMonoPage }, { label: 'Launch announcement', url: paperMonoLaunch }],
});

const paperS3Page = 'https://shop.m5stack.com/products/m5papers3-esp32s3-development-kit';
products.push({
  id: 'm5stack-paper-s3', name: 'PaperS3', maker: 'M5Stack', category: 'Development board',
  description: 'A low-power ESP32-S3 development kit with a full-screen 4.7-inch touch e-paper display. It combines a gyroscope, buzzer, buttons, microSD expansion, and a built-in battery for interactive projects.',
  screenInches: 4.7, releaseDate: '2024-12-13', releaseType: 'Product release',
  releaseSource: 'https://m5stack.lang-ship.com/catalog/products/controller/c139_papers3/',
  price: 59, currency: 'USD', priceLabel: 'US$59', priceSource: paperS3Page, status: 'EOL',
  purchaseUrl: paperS3Page, purchaseLabel: 'View on M5Stack', officialUrl: 'https://docs.m5stack.com/en/core/PaperS3', makerUrl: 'https://m5stack.com/',
  specs: [['Display', '4.7-inch touch e-paper'], ['Resolution', '960 × 540 pixels'], ['Processor', 'ESP32-S3R8'], ['Memory', '16 MB flash, 8 MB PSRAM'], ['Connectivity', '2.4 GHz Wi-Fi, Bluetooth'], ['Battery', '1,800 mAh'], ['Sensors', 'Gyroscope, RTC, buzzer'], ['Expansion', 'MicroSD, magnetic back'], ['Development', 'Arduino, ESP-IDF, MicroPython, PlatformIO']],
  cover: '/images/papers3-front.png', coverAlt: 'M5Stack PaperS3 touch e-paper development kit, straight-on front view',
  photos: [{ src: '/images/papers3-front.png', alt: 'M5Stack PaperS3 straight-on front view' }, { src: '/images/papers3-2.webp', alt: 'M5Stack PaperS3 annotated hardware overview' }],
  verifiedAt: '2026-09-10',
  sources: [{ label: 'Official product page, price and photography', url: paperS3Page }, { label: 'Official documentation', url: 'https://docs.m5stack.com/en/core/PaperS3' }],
});

const stickyPage = 'https://www.seeedstudio.com/reTerminal-Sticky-p-6861.html';
products.push({
  id: 'seeed-studio-sticky', name: 'reTerminal Sticky', maker: 'Seeed Studio', category: 'Development board',
  description: 'A magnetic 3.97-inch e-paper touchscreen for household notes, reminders, weather, and photos. Create notes by voice or manage content through the Seeedash app.',
  screenInches: 3.97, releaseDate: '2026-07-30', releaseType: 'Product announcement',
  releaseSource: 'https://www.seeedstudio.com/blog/news-center/4/',
  price: 49.9, currency: 'USD', priceLabel: 'US$49.90', priceSource: stickyPage,
  purchaseUrl: stickyPage, purchaseLabel: 'View on Seeed Studio', officialUrl: stickyPage, makerUrl: 'https://www.seeedstudio.com/',
  specs: [['Display', 'Monochrome e-paper touchscreen, 4-level grayscale'], ['Resolution', '800 × 480 pixels'], ['Processor', 'ESP32-S3'], ['Memory', '32 MB flash, 8 MB PSRAM'], ['Connectivity', '2.4 GHz Wi-Fi, Bluetooth LE 5.0, USB-C'], ['Battery', '750 mAh'], ['Sensors', 'Temperature, humidity, 6-axis IMU, microphone'], ['Expansion', 'MicroSD'], ['Mounting', 'Magnetic back']],
  cover: '/images/seeed-sticky-2.jpg', coverShape: 'landscape', coverAlt: 'White reTerminal Sticky showing its clock, notes, and weather menu',
  photos: [{ src: '/images/seeed-sticky-2.jpg', alt: 'Seeed Studio reTerminal Sticky angled front view' }, { src: '/images/seeed-sticky-1.jpg', alt: 'Several reTerminal Sticky displays mounted on a refrigerator' }],
  verifiedAt: '2026-09-10',
  sources: [{ label: 'Official product, price and photography', url: stickyPage }, { label: 'Hardware specifications', url: 'https://www.seeedstudio.com/sticky/docs/en/device-guide/hardware-overview/' }],
});

const inkjoySpecs = 'https://docs.inkjoyframe.com/guide/hardware/hardware-specs';
const nestPage = 'https://www.inkjoyframe.com/products/inkjoy-nest-7?variant=48907293786331';
products.push({
  id: 'inkjoy-nest-7', name: 'Nest 7-inch', maker: 'InkJoy', category: 'Frame',
  description: 'A compact color e-paper frame for family photos, artwork, and calendars on a desk or bedside table. The 7-inch model uses E Ink Spectra 6 and supports remote image updates.',
  screenInches: 7, releaseDate: null, releaseYear: 2026, releaseType: 'Year only; exact date unverified', releaseSource: nestPage,
  price: 239, currency: 'USD', priceLabel: 'US$239', priceSource: nestPage,
  purchaseUrl: nestPage, purchaseLabel: 'View on InkJoy', officialUrl: nestPage, makerUrl: 'https://www.inkjoyframe.com/',
  specs: [['Display', 'E Ink Spectra 6 color e-paper'], ['Resolution', '1200 × 1600 pixels'], ['Connectivity', 'Dual-band Wi-Fi, Bluetooth LE 5, USB-C'], ['Battery', '5,000 mAh'], ['Storage', 'MicroSD / TF card and cloud storage'], ['Software', 'InkJoy Frame app for iOS and Android; InkJoy Studio'], ['Image processing', 'ISFR color management']],
  cover: '/images/inkjoy-nest-1.png', coverAlt: 'Black InkJoy Nest frame displaying a dog wearing reindeer antlers',
  photos: [{ src: '/images/inkjoy-nest-1.png', alt: 'InkJoy Nest 7-inch color e-paper frame showing a dog photograph' }, { src: '/images/inkjoy-nest-2.jpg', alt: 'InkJoy Nest standing on a shelf beside decorative vases' }],
  verifiedAt: '2026-09-10', sources: [{ label: 'Official 7-inch product, price and photography', url: nestPage }, { label: 'Hardware specifications', url: inkjoySpecs }],
});

const musePage = 'https://www.inkjoyframe.com/products/inkjoy-muse?variant=48907289755867';
products.push({
  id: 'inkjoy-muse-10', name: 'Muse 10-inch', maker: 'InkJoy', category: 'Frame',
  description: 'A 10-inch color e-paper frame for photographs and artwork. Its E Ink Spectra 6 panel displays images without a backlight, with WaveMorph transitions when changing pictures.',
  screenInches: 10, releaseDate: null, releaseYear: 2026, releaseType: 'Year only; exact date unverified', releaseSource: musePage,
  price: 379, currency: 'USD', priceLabel: 'US$379', priceSource: musePage,
  purchaseUrl: musePage, purchaseLabel: 'View on InkJoy', officialUrl: musePage, makerUrl: 'https://www.inkjoyframe.com/',
  specs: [['Display', 'E Ink Spectra 6 color e-paper'], ['Resolution', '1200 × 1600 pixels'], ['Pixel density', '200 ppi'], ['Connectivity', 'Dual-band Wi-Fi, Bluetooth LE 5, USB-C'], ['Battery', '5,000 mAh'], ['Storage', 'MicroSD / TF card and cloud storage'], ['Image processing', 'ISFR and WaveMorph transitions']],
  cover: '/images/inkjoy-muse-10.png', coverAlt: 'Wood-framed InkJoy Muse 10-inch display showing floral artwork',
  photos: [{ src: '/images/inkjoy-muse-10.png', alt: 'InkJoy Muse 10-inch color e-paper frame with a wood border and flower painting' }],
  verifiedAt: '2026-09-10', sources: [{ label: 'Official 10-inch variant, price and photography', url: musePage }, { label: 'Hardware specifications', url: inkjoySpecs }],
});

const galleryPage = 'https://www.inkjoyframe.com/products/inkjoy-gallery?variant=48907295654107';
products.push({
  id: 'inkjoy-gallery-28-5', name: 'Gallery 28.5-inch', maker: 'InkJoy', category: 'Frame',
  description: 'A 28.5-inch color e-paper wall display for artwork and photography. Its E Ink Spectra 6 panel keeps images visible without a backlight, and dual-band Wi-Fi supports remote updates.',
  screenInches: 28.5, releaseDate: null, releaseYear: 2026, releaseType: 'Year only; exact date unverified', releaseSource: galleryPage,
  price: 1999, currency: 'USD', priceLabel: 'US$1,999', priceSource: galleryPage,
  purchaseUrl: galleryPage, purchaseLabel: 'View on InkJoy', officialUrl: galleryPage, makerUrl: 'https://www.inkjoyframe.com/',
  specs: [['Display', 'E Ink Spectra 6 color e-paper'], ['Resolution', '2160 × 3060 pixels (portrait)'], ['Pixel density', '131 ppi'], ['Connectivity', 'Dual-band Wi-Fi 6, Bluetooth LE 5, USB-C'], ['Battery', '5,000 mAh / 11.4 V'], ['Dimensions', '627 × 801 × 29.5 mm including outer frame'], ['Image processing', 'ISFR and WaveMorph transitions']],
  cover: '/images/inkjoy-gallery-1.png', coverAlt: 'InkJoy Gallery 28.5-inch wall frame displaying a colorful canal photograph',
  photos: [{ src: '/images/inkjoy-gallery-1.png', alt: 'InkJoy Gallery 28.5-inch e-paper frame mounted above a console table' }, { src: '/images/inkjoy-gallery-2.jpg', alt: 'InkJoy Gallery showing a floral painting on a wall display' }],
  verifiedAt: '2026-09-10', sources: [{ label: 'Official 28.5-inch variant, price and photography', url: galleryPage }, { label: 'Hardware specifications', url: inkjoySpecs }],
});

// Recovered product identities and images; copy and specifications curated afresh.
const recoveredProducts = [
  {
    id: 'dasung-paperlike-13k', name: 'Paperlike 13K', maker: 'DASUNG', category: 'Monitor',
    description: 'A 13.3-inch monochrome e-paper monitor for a computer. Connect over USB-C or mini-HDMI, with a choice of models with or without a frontlight.',
    screenInches: 13.3, releaseDate: null,
    price: 679, currency: 'USD', priceLabel: 'From US$679',
    purchaseUrl: 'https://shop.dasung.com/products/dasung-paperlike-13k-the-worlds-first-37hz-3k-e-ink-monitor',
    purchaseLabel: 'View on DASUNG', makerUrl: 'https://www.dasung.com/',
    specs: [['Display', 'Monochrome e-paper'], ['Resolution', '3200 × 2400 pixels'], ['Refresh rate', 'Up to 37 Hz; depends on the host connection'], ['Connection', 'USB-C video, mini-HDMI'], ['Touchscreen', 'No'], ['Frontlight', 'Optional']],
    cover: '/images/legacy/dasung_paperlike_13k_bw.png', coverShape: 'landscape',
    coverAlt: 'DASUNG Paperlike 13K monochrome monitor',
  },
  {
    id: 'sotsu-flipaction-elite-16', name: 'FlipAction Elite 16″', maker: 'SOTSU', category: 'LCD monitor',
    description: 'A 16-inch LCD portable monitor with a 4K display and an adjustable FlipAction stand. Rotate between portrait and landscape, or raise the display above a laptop.',
    screenInches: 16, releaseDate: null,
    price: 789, currency: 'USD', priceLabel: 'US$789',
    purchaseUrl: 'https://www.sotsu.com/products/flipaction-elite-16', purchaseLabel: 'View on SOTSU', makerUrl: 'https://www.sotsu.com/',
    specs: [['Display', 'LCD'], ['Resolution', '3840 × 2400 pixels'], ['Aspect ratio', '16:10'], ['Refresh rate', '60 Hz'], ['Brightness', '450 nits'], ['Connection', 'USB-C, mini-HDMI'], ['Weight', '925 g monitor; 435 g base stand']],
    cover: '/images/legacy/sotsu_flipaction_elite.png', coverShape: 'landscape', coverAlt: 'SOTSU FlipAction Elite portable LCD monitor and stand',
  },
  {
    id: 'xteink-x4', name: 'X4', maker: 'Xteink', category: 'E-reader',
    description: 'A 4.3-inch pocket e-reader with physical page buttons and a magnetic back. Read EPUB and TXT files from a microSD card, with Wi-Fi file transfer and USB-C charging.',
    screenInches: 4.3, releaseDate: null,
    price: null, currency: null, priceLabel: 'Price at retailer',
    purchaseUrl: 'https://mall.jd.com/index-19747042.html', purchaseLabel: 'View Xteink on JD', makerUrl: 'https://www.xteink.com/',
    officialUrl: 'https://www.xteink.com/pages/user-guide',
    specs: [['Display', 'Monochrome e-paper; 220 PPI'], ['Controls', 'Physical buttons; no touchscreen'], ['Frontlight', 'No'], ['Storage', 'MicroSD card'], ['Battery', '650 mAh'], ['Connectivity', 'Wi-Fi, USB-C'], ['Weight', '74 g']],
    cover: '/images/legacy/xteink-x4.webp', coverAlt: 'Xteink X4 pocket e-reader',
    sources: [{ label: 'Original X4 official user manual', url: 'https://cdn.shopify.com/s/files/1/0759/9344/8689/files/X4_User_Guide.pdf?v=1783668551' }],
    priceNote: 'Original X4 price not verified. Manufacturer now promotes X4 Classic (V2); do not substitute its price or specifications. JD link is the legacy brand storefront.',
  },
  {
    id: 'xteink-x3', name: 'X3', maker: 'Xteink', category: 'E-reader',
    description: 'A 3.7-inch pocket e-reader with physical page buttons and a magnetic back. Store books on a microSD card and transfer files wirelessly.',
    screenInches: 3.7, releaseDate: null,
    price: 69, currency: 'USD', priceLabel: 'US$69',
    purchaseUrl: 'https://www.xteink.com/products/xteink-x3', purchaseLabel: 'View on Xteink', makerUrl: 'https://www.xteink.com/',
    specs: [['Display', 'Monochrome e-paper; 259 PPI'], ['Controls', 'Physical buttons; no touchscreen'], ['Frontlight', 'No'], ['Storage', '16 GB microSD included; expandable to 256 GB'], ['Battery', '650 mAh'], ['Charging', 'Magnetic pogo pin'], ['Weight', '58 g']],
    cover: '/images/legacy/xteink_x3.webp', coverAlt: 'Xteink X3 pocket e-reader',
  },
  {
    id: 'boox-palma-2-pro', name: 'Palma 2 Pro', maker: 'BOOX', category: 'E-reader',
    description: 'A phone-size e-reader with a 6.13-inch color e-paper touchscreen and Android apps. Supports mobile data through a SIM card and handwriting with the optional BOOX InkSense Plus stylus.',
    screenInches: 6.13, releaseDate: '2025-10-20', releaseType: 'Product announcement',
    releaseSource: 'https://shop.boox.com/blogs/news/unveiling-palma-2-pro-the-6-13-color-mobile-epaper-for-life-in-motion',
    price: null, currency: null, priceLabel: 'Price at retailer',
    priceNote: 'Official page and collection show different prices; check the selected device or bundle at the retailer.',
    purchaseUrl: 'https://shop.boox.com/products/palma2pro', purchaseLabel: 'View on BOOX', makerUrl: 'https://shop.boox.com/',
    specs: [['Display', 'Kaleido 3 color e-paper with frontlight'], ['Resolution', '824 × 1648 monochrome; 412 × 824 color'], ['Operating system', 'Android 15'], ['Memory', '8 GB RAM, 128 GB storage'], ['Mobile connectivity', 'Data-only SIM; no cellular voice calls'], ['Battery', '3,950 mAh'], ['Weight', 'About 175 g']],
    cover: '/images/legacy/boox_palma_2_pro.webp', coverAlt: 'BOOX Palma 2 Pro mobile e-paper reader',
  },
  {
    id: 'supernote-nomad', name: 'Nomad', maker: 'Supernote', category: 'Notebook',
    description: 'A 7.8-inch e-paper notebook for handwriting, reading, and document annotation. The A6 X2 has a replaceable battery and microSD expansion.',
    screenInches: 7.8, releaseDate: null,
    price: 329, currency: 'USD', priceLabel: 'From US$329',
    purchaseUrl: 'https://supernote.com/products/supernote-nomad', purchaseLabel: 'View on Supernote', makerUrl: 'https://supernote.com/',
    specs: [['Model', 'A6 X2'], ['Display', 'Monochrome glass E Ink; no frontlight'], ['Resolution', '1404 × 1872 pixels; 300 PPI'], ['Memory', '4 GB RAM, 32 GB storage'], ['Expansion', 'MicroSD up to 2 TB'], ['Battery', '2,700 mAh; replaceable'], ['Weight', 'About 266 g']],
    cover: '/images/legacy/supernote_nomad.webp', coverAlt: 'Supernote Nomad digital notebook',
  },
];

for (const product of recoveredProducts) {
  products.push({
    ...product,
    officialUrl: product.officialUrl || product.purchaseUrl,
    photos: [{ src: product.cover, alt: product.coverAlt }],
    verifiedAt: '2026-09-11',
    priceSource: product.price == null ? null : product.purchaseUrl,
    sources: product.sources || [{ label: 'Official product and specifications', url: product.purchaseUrl }],
    mediaCredit: 'Product image reused from the previous apov.sg store; original photographer unverified.',
  });
}
