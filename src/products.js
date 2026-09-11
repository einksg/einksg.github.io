const campaign = 'https://www.kickstarter.com/projects/enilinx/ticket-refresh-it-new-clip-it-on-carry-your-moment';
export const products = [{
  id: 'tickey', collections: ['spectra6'], name: 'TICKEY', maker: 'ENILINX', category: 'Frame',
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
  id: 'modos-flow', collections: ['monitor'], name: 'Modos Flow', maker: 'Modos', category: 'Monitor',
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
  id: 'koridy-c1-slim', hidden: true, name: 'C1 Slim', maker: 'Koridy', category: 'Dictionary',
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
  id: 'm5stack-paper-mono', collections: ['development-board'], name: 'Paper Mono', maker: 'M5Stack', category: 'Development board',
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

const paperColorPage = 'https://shop.m5stack.com/products/m5paper-color-esp32s3-dev-kit';
const paperColorDocs = 'https://docs.m5stack.com/en/core/PaperColor';
products.push({
  id: 'm5stack-paper-color', collections: ['spectra6', 'development-board'], name: 'Paper Color', maker: 'M5Stack', category: 'Development board',
  description: 'A compact ESP32-S3 development kit with a 4-inch Spectra 6 color e-paper screen. Programmable buttons, a microphone and speaker, and temperature and humidity sensing support projects such as photo frames, dashboards, and connected signs.',
  screenInches: 4, releaseDate: '2026-05-15', releaseType: 'Product release',
  releaseSource: 'https://docs.m5stack.com/en/history',
  price: 75, currency: 'USD', priceLabel: 'US$75', priceSource: paperColorPage, status: 'Out of stock',
  purchaseUrl: paperColorPage, purchaseLabel: 'View on M5Stack', officialUrl: paperColorDocs, makerUrl: 'https://m5stack.com/',
  specs: [['Display', 'E Ink Spectra 6 full-color e-paper'], ['Resolution', '400 × 600 pixels'], ['Processor', 'ESP32-S3R8, dual-core up to 240 MHz'], ['Memory', '16 MB flash, 8 MB PSRAM'], ['Connectivity', '2.4 GHz Wi-Fi, USB-C'], ['Battery', '1,250 mAh'], ['Input', 'Three programmable buttons and a power button'], ['Audio', 'MEMS microphone and 1 W speaker'], ['Sensors', 'SHT40 temperature and humidity sensor, RTC'], ['Expansion', 'MicroSD, HY2.0-4P port, infrared emitter'], ['Dimensions', '70.8 × 103.9 × 8.5 mm'], ['Weight', '73.3 g']],
  cover: '/images/papercolor-2.webp', coverShape: 'papercolor', coverAlt: 'White M5Stack Paper Color development kit, angled front view',
  photos: [{ src: '/images/papercolor-2.webp', alt: 'M5Stack Paper Color development kit, angled front view' }, { src: '/images/papercolor-1.webp', alt: 'M5Stack Paper Color annotated hardware overview' }],
  verifiedAt: '2026-09-11',
  sources: [{ label: 'Official product and price', url: paperColorPage }, { label: 'Official specifications and photography', url: paperColorDocs }, { label: 'Official release history', url: 'https://docs.m5stack.com/en/history' }],
  mediaCredit: 'Official product photographs by M5Stack.',
});

const paperS3Page = 'https://shop.m5stack.com/products/m5papers3-esp32s3-development-kit';
products.push({
  id: 'm5stack-paper-s3', collections: ['development-board'], name: 'PaperS3', maker: 'M5Stack', category: 'Development board',
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
  id: 'seeed-studio-sticky', collections: ['development-board'], name: 'reTerminal Sticky', maker: 'Seeed Studio', category: 'Development board',
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
  id: 'inkjoy-nest-7', collections: ['spectra6'], name: 'Nest 7-inch', maker: 'InkJoy', category: 'Frame',
  description: 'A compact color e-paper frame for family photos, artwork, and calendars on a desk or bedside table. The 7-inch model uses E Ink Spectra 6 and supports remote image updates.',
  screenInches: 7, releaseDate: null, releaseYear: 2026, releaseType: 'Year only; exact date unverified', releaseSource: nestPage,
  price: 239, currency: 'USD', priceLabel: 'US$239', priceSource: nestPage,
  purchaseUrl: nestPage, purchaseLabel: 'View on InkJoy', officialUrl: nestPage, makerUrl: 'https://www.inkjoyframe.com/',
  specs: [['Display', 'E Ink Spectra 6 color e-paper'], ['Resolution', '1200 × 1600 pixels'], ['Connectivity', 'Dual-band Wi-Fi, Bluetooth LE 5, USB-C'], ['Battery', '5,000 mAh'], ['Storage', 'MicroSD / TF card and cloud storage'], ['Software', 'InkJoy Frame app for iOS and Android; InkJoy Studio'], ['Image processing', 'ISFR color management']],
  cover: '/images/inkjoy-nest-1.png', coverShape: 'frame', coverAlt: 'Black InkJoy Nest frame displaying a dog wearing reindeer antlers',
  photos: [{ src: '/images/inkjoy-nest-1.png', alt: 'InkJoy Nest 7-inch color e-paper frame showing a dog photograph' }, { src: '/images/inkjoy-nest-2.jpg', alt: 'InkJoy Nest standing on a shelf beside decorative vases' }],
  verifiedAt: '2026-09-10', sources: [{ label: 'Official 7-inch product, price and photography', url: nestPage }, { label: 'Hardware specifications', url: inkjoySpecs }],
});

const musePage = 'https://www.inkjoyframe.com/products/inkjoy-muse?variant=48907289755867';
products.push({
  id: 'inkjoy-muse-10', collections: ['spectra6'], name: 'Muse 10-inch', maker: 'InkJoy', category: 'Frame',
  description: 'A 10-inch color e-paper frame for photographs and artwork. Its E Ink Spectra 6 panel displays images without a backlight, with WaveMorph transitions when changing pictures.',
  screenInches: 10, releaseDate: null, releaseYear: 2026, releaseType: 'Year only; exact date unverified', releaseSource: musePage,
  price: 379, currency: 'USD', priceLabel: 'US$379', priceSource: musePage,
  purchaseUrl: musePage, purchaseLabel: 'View on InkJoy', officialUrl: musePage, makerUrl: 'https://www.inkjoyframe.com/',
  specs: [['Display', 'E Ink Spectra 6 color e-paper'], ['Resolution', '1200 × 1600 pixels'], ['Pixel density', '200 ppi'], ['Connectivity', 'Dual-band Wi-Fi, Bluetooth LE 5, USB-C'], ['Battery', '5,000 mAh'], ['Storage', 'MicroSD / TF card and cloud storage'], ['Image processing', 'ISFR and WaveMorph transitions']],
  cover: '/images/inkjoy-muse-10.png', coverShape: 'frame', coverAlt: 'Wood-framed InkJoy Muse 10-inch display showing floral artwork',
  photos: [{ src: '/images/inkjoy-muse-10.png', alt: 'InkJoy Muse 10-inch color e-paper frame with a wood border and flower painting' }],
  verifiedAt: '2026-09-10', sources: [{ label: 'Official 10-inch variant, price and photography', url: musePage }, { label: 'Hardware specifications', url: inkjoySpecs }],
});

const galleryPage = 'https://www.inkjoyframe.com/products/inkjoy-gallery?variant=48907295654107';
products.push({
  id: 'inkjoy-gallery-28-5', collections: ['spectra6'], name: 'Gallery 28.5-inch', maker: 'InkJoy', category: 'Frame',
  description: 'A 28.5-inch color e-paper wall display for artwork and photography. Its E Ink Spectra 6 panel keeps images visible without a backlight, and dual-band Wi-Fi supports remote updates.',
  screenInches: 28.5, releaseDate: null, releaseYear: 2026, releaseType: 'Year only; exact date unverified', releaseSource: galleryPage,
  price: 1999, currency: 'USD', priceLabel: 'US$1,999', priceSource: galleryPage,
  purchaseUrl: galleryPage, purchaseLabel: 'View on InkJoy', officialUrl: galleryPage, makerUrl: 'https://www.inkjoyframe.com/',
  specs: [['Display', 'E Ink Spectra 6 color e-paper'], ['Resolution', '2160 × 3060 pixels (portrait)'], ['Pixel density', '131 ppi'], ['Connectivity', 'Dual-band Wi-Fi 6, Bluetooth LE 5, USB-C'], ['Battery', '5,000 mAh / 11.4 V'], ['Dimensions', '627 × 801 × 29.5 mm including outer frame'], ['Image processing', 'ISFR and WaveMorph transitions']],
  cover: '/images/inkjoy-gallery-1.png', coverShape: 'frame', coverAlt: 'InkJoy Gallery 28.5-inch wall frame displaying a colorful canal photograph',
  photos: [{ src: '/images/inkjoy-gallery-1.png', alt: 'InkJoy Gallery 28.5-inch e-paper frame mounted above a console table' }, { src: '/images/inkjoy-gallery-2.jpg', alt: 'InkJoy Gallery showing a floral painting on a wall display' }],
  verifiedAt: '2026-09-10', sources: [{ label: 'Official 28.5-inch variant, price and photography', url: galleryPage }, { label: 'Hardware specifications', url: inkjoySpecs }],
});

// Recovered product identities and images; copy and specifications curated afresh.
const recoveredProducts = [
  {
    id: 'dasung-paperlike-13k', collections: ['monitor'], name: 'Paperlike 13K', maker: 'DASUNG', category: 'Monitor',
    description: 'A 13.3-inch monochrome e-paper monitor for a computer. Connect over USB-C or mini-HDMI, with a choice of models with or without a frontlight.',
    screenInches: 13.3, releaseDate: '2025-03-25', releaseType: 'Product announcement',
    releaseSource: 'https://www.dasung.com/nd.jsp?id=43',
    price: 679, currency: 'USD', priceLabel: 'From US$679',
    purchaseUrl: 'https://shop.dasung.com/products/dasung-paperlike-13k-the-worlds-first-37hz-3k-e-ink-monitor',
    purchaseLabel: 'View on DASUNG', makerUrl: 'https://www.dasung.com/',
    specs: [['Display', 'Monochrome e-paper'], ['Resolution', '3200 × 2400 pixels'], ['Refresh rate', 'Up to 37 Hz; depends on the host connection'], ['Connection', 'USB-C video, mini-HDMI'], ['Touchscreen', 'No'], ['Frontlight', 'Optional']],
    cover: '/images/legacy/dasung_paperlike_13k_bw.png', coverShape: 'landscape',
    coverAlt: 'DASUNG Paperlike 13K monochrome monitor',
  },
  {
    id: 'sotsu-flipaction-elite-16', collections: ['monitor'], name: 'FlipAction Elite 16″', maker: 'SOTSU', category: 'LCD monitor',
    description: 'A 16-inch LCD portable monitor with a 4K display and an adjustable FlipAction stand. Rotate between portrait and landscape, or raise the display above a laptop.',
    screenInches: 16, releaseDate: null, releaseYear: 2025, releaseType: 'Official store listing year; exact launch date unverified',
    releaseSource: 'https://www.sotsu.com/products/flipaction-elite-16.json',
    price: 789, currency: 'USD', priceLabel: 'US$789',
    purchaseUrl: 'https://www.sotsu.com/products/flipaction-elite-16', purchaseLabel: 'View on SOTSU', makerUrl: 'https://www.sotsu.com/',
    specs: [['Display', 'LCD'], ['Resolution', '3840 × 2400 pixels'], ['Aspect ratio', '16:10'], ['Refresh rate', '60 Hz'], ['Brightness', '450 nits'], ['Connection', 'USB-C, mini-HDMI'], ['Weight', '925 g monitor; 435 g base stand']],
    cover: '/images/legacy/sotsu_flipaction_elite.png', coverShape: 'landscape', coverAlt: 'SOTSU FlipAction Elite portable LCD monitor and stand',
  },
  {
    // Retain the existing route when replacing the original X4 listing.
    id: 'xteink-x4', name: 'X4 Classic (V2)', maker: 'Xteink', category: 'E-reader',
    description: 'A 4.3-inch pocket e-reader with physical buttons, shake-to-turn controls, and a magnetic back. Transfer books through the Xteink app or a microSD card.',
    screenInches: 4.3, releaseDate: null, releaseYear: 2026, releaseType: 'Year only; exact date unverified',
    releaseSource: 'https://www.xteink.com/products/xteink-x4-classic-pocket-ereader',
    price: 79, currency: 'USD', priceLabel: 'US$79',
    purchaseUrl: 'https://www.xteink.com/products/xteink-x4-classic-pocket-ereader', purchaseLabel: 'View on Xteink', makerUrl: 'https://www.xteink.com/',
    specs: [['Display', '4.3-inch monochrome e-paper; 219 PPI'], ['Controls', 'Physical buttons and shake-to-turn; no touchscreen'], ['Frontlight', 'No'], ['Storage', '16 GB microSD included; expandable to 256 GB'], ['Battery', '920 mAh'], ['Connectivity', '2.4 GHz Wi-Fi, Bluetooth'], ['Charging', 'Magnetic pogo pin'], ['Dimensions', '114 × 69 × 4.9 mm'], ['Weight', '68 g']],
    cover: '/images/xteink-x4-classic.jpg', coverShape: 'x4-classic', coverAlt: 'Xteink X4 Classic V2 pocket e-reader',
    mediaCredit: 'Product photograph by Xteink, via its official store.',
  },
  {
    id: 'xteink-x4-pro', name: 'X4 Pro', maker: 'Xteink', category: 'E-reader',
    description: 'A 4.3-inch pocket e-reader with a touchscreen, physical page buttons, and an adjustable warm-and-cool frontlight. Its magnetic back attaches to compatible phones or cases.',
    screenInches: 4.3, releaseDate: null, releaseYear: 2026, releaseType: 'Year only; exact date unverified',
    releaseSource: 'https://www.xteink.com/blogs/product/x4-pro-faq-specs-support',
    price: 99, currency: 'USD', priceLabel: 'US$99',
    purchaseUrl: 'https://www.xteink.com/products/xteink-x4-pro-pocket-ereader', purchaseLabel: 'View on Xteink', makerUrl: 'https://www.xteink.com/',
    specs: [['Display', '4.3-inch monochrome e-paper; 219 PPI'], ['Controls', 'Touchscreen and physical buttons'], ['Frontlight', 'Adjustable brightness and warm/cool color temperature'], ['Storage', '16 GB microSD included; expandable to 256 GB'], ['Battery', '1,100 mAh'], ['Connectivity', '2.4 GHz Wi-Fi, Bluetooth'], ['Charging', 'Magnetic pogo pin; adapter included'], ['Dimensions', '111 × 69 × 5.95 mm'], ['Weight', '72 g']],
    cover: '/images/xteink-x4-pro.png', coverShape: 'x4-pro', coverAlt: 'Xteink X4 Pro pocket e-reader with a frontlight and touchscreen',
    mediaCredit: 'Product photograph by Xteink, via its official store.',
  },
  {
    id: 'xteink-x3', name: 'X3', maker: 'Xteink', category: 'E-reader',
    description: 'A 3.7-inch pocket e-reader with physical page buttons and a magnetic back. Store books on a microSD card and transfer files wirelessly.',
    screenInches: 3.7, releaseDate: '2025-12-11', releaseType: 'Overseas pre-order launch',
    releaseSource: 'https://www.reddit.com/r/xteinkereader/comments/1pi6ezd/x3_is_coming_smaller_lighter_and_a_lot_more_fun/',
    price: 69, currency: 'USD', priceLabel: 'US$69',
    purchaseUrl: 'https://www.xteink.com/products/xteink-x3', purchaseLabel: 'View on Xteink', makerUrl: 'https://www.xteink.com/',
    specs: [['Display', 'Monochrome e-paper; 259 PPI'], ['Controls', 'Physical buttons; no touchscreen'], ['Frontlight', 'No'], ['Storage', '16 GB microSD included; expandable to 256 GB'], ['Battery', '650 mAh'], ['Charging', 'Magnetic pogo pin'], ['Weight', '58 g']],
    cover: '/images/legacy/xteink_x3.webp', coverShape: 'x3', coverAlt: 'Xteink X3 pocket e-reader',
  },
  {
    id: 'boox-palma-2-pro', collections: ['note-taking'], name: 'Palma 2 Pro', maker: 'BOOX', category: 'E-reader',
    description: 'A phone-size e-reader with a 6.13-inch color e-paper touchscreen and Android apps. Supports mobile data through a SIM card and handwriting with the optional BOOX InkSense Plus stylus.',
    screenInches: 6.13, releaseDate: '2025-10-20', releaseType: 'Product announcement',
    releaseSource: 'https://shop.boox.com/blogs/news/unveiling-palma-2-pro-the-6-13-color-mobile-epaper-for-life-in-motion',
    price: 379.99, currency: 'USD', priceLabel: 'From US$379.99',
    priceNote: 'Official Hong Kong warehouse Standard Bundle: US$379.99. US warehouse Standard Bundle: US$399.99. Shipping and taxes depend on destination.',
    purchaseUrl: 'https://shop.boox.com/products/palma2pro', purchaseLabel: 'View on BOOX', makerUrl: 'https://shop.boox.com/',
    specs: [['Display', 'Kaleido 3 color e-paper with frontlight'], ['Resolution', '824 × 1648 monochrome; 412 × 824 color'], ['Operating system', 'Android 15'], ['Memory', '8 GB RAM, 128 GB storage'], ['Mobile connectivity', 'Data-only SIM; no cellular voice calls'], ['Battery', '3,950 mAh'], ['Weight', 'About 175 g']],
    cover: '/images/legacy/boox_palma_2_pro.webp', coverShape: 'palma', coverAlt: 'BOOX Palma 2 Pro mobile e-paper reader',
  },
  {
    id: 'supernote-nomad', collections: ['note-taking'], name: 'Nomad', maker: 'Supernote', category: 'Notebook',
    description: 'A 7.8-inch e-paper notebook for handwriting, reading, and document annotation. The A6 X2 has a replaceable battery and microSD expansion.',
    screenInches: 7.8, releaseDate: null, releaseYear: 2023, releaseType: 'Year only; exact date unverified',
    releaseSource: 'https://supernote.com/blogs/supernote-blog/supernote-a6-x2-nomad-wins-the-highest-honor-gold-at-the-german-design-award-2024',
    price: 329, currency: 'USD', priceLabel: 'From US$329',
    purchaseUrl: 'https://supernote.com/products/supernote-nomad', purchaseLabel: 'View on Supernote', makerUrl: 'https://supernote.com/',
    specs: [['Model', 'A6 X2'], ['Display', 'Monochrome glass E Ink; no frontlight'], ['Resolution', '1404 × 1872 pixels; 300 PPI'], ['Memory', '4 GB RAM, 32 GB storage'], ['Expansion', 'MicroSD up to 2 TB'], ['Battery', '2,700 mAh; replaceable'], ['Weight', 'About 266 g']],
    cover: '/images/legacy/supernote_nomad.webp', coverShape: 'nomad', coverAlt: 'Supernote Nomad digital notebook',
  },
];

for (const product of recoveredProducts) {
  products.push({
    ...product,
    officialUrl: product.officialUrl || product.purchaseUrl,
    photos: [{ src: product.cover, alt: product.coverAlt }],
    verifiedAt: '2026-09-11',
    priceSource: product.price == null ? null : product.purchaseUrl,
    sources: [...(product.sources || [{ label: 'Official product and specifications', url: product.purchaseUrl }]), ...(product.releaseSource && product.releaseSource !== product.purchaseUrl ? [{ label: 'Release date or year source', url: product.releaseSource }] : [])],
    mediaCredit: product.mediaCredit || 'Product image reused from the previous apov.sg store; original photographer unverified.',
  });
}


const mantaPage = 'https://supernote.com/products/supernote-manta';
const mantaLaunch = 'https://supernote.com/blogs/supernote-blog/dived-for-inspirations-the-birth-of-supernote-manta';
products.push({
  id: 'supernote-manta', collections: ['note-taking'], name: 'Manta', maker: 'Supernote', category: 'Notebook',
  description: 'A 10.7-inch e-paper notebook for handwriting, sketching, and PDF annotation. Its flexible display has a FeelWrite 2 writing surface, with a replaceable battery and an upgradeable motherboard.',
  screenInches: 10.7, releaseDate: '2024-12-12', releaseType: 'Product launch', releaseSource: mantaLaunch,
  price: 505, currency: 'USD', priceLabel: 'From US$505', priceSource: mantaPage,
  priceNote: 'US official store device price. Pen and folio sold separately; regional pricing and duties vary.',
  purchaseUrl: mantaPage, purchaseLabel: 'View on Supernote', officialUrl: mantaPage, makerUrl: 'https://supernote.com/',
  specs: [['Model', 'A5 X2'], ['Display', '10.7-inch flexible monochrome E Ink; no frontlight'], ['Resolution', '1920 × 2560 pixels; 300 PPI'], ['Writing surface', 'FeelWrite 2 film; palm rejection'], ['Processor', 'RK3566 quad-core, 1.8 GHz'], ['Memory', '4 GB RAM, 32 GB storage'], ['Expansion', 'MicroSD up to 2 TB'], ['Battery', '3,600 mAh; replaceable'], ['Connectivity', 'Dual-band Wi-Fi, Bluetooth 5.0, USB-C'], ['Dimensions', '251.3 × 182.6 × 6.0 mm'], ['Weight', 'About 375 g with pen loop']],
  cover: '/images/supernote-manta-front.png', coverShape: 'manta', coverAlt: 'Supernote Manta A5 X2 notebook, complete front view with pen loop',
  photos: [{ src: '/images/supernote-manta-front.png', alt: 'Supernote Manta front view with its flexible e-paper display' }, { src: '/images/supernote-manta-back.png', alt: 'Supernote Manta rear view' }],
  verifiedAt: '2026-09-11', sources: [{ label: 'Official product, price, specifications and photography', url: mantaPage }, { label: 'Launch design story', url: mantaLaunch }],
  mediaCredit: 'Official product photographs by Supernote.',
});

const go6Gen2Page = 'https://shop.boox.com/products/go6gen2';
const go6Gen2Launch = 'https://shop.boox.com/blogs/news/discover-boox-go-6-gen2';
products.push({
  id: 'boox-go6-gen2', collections: ['note-taking'], name: 'Go 6 (Gen II)', maker: 'BOOX', category: 'E-reader',
  description: 'A compact 6-inch e-reader with a flush monochrome touchscreen, adjustable warm-and-cool frontlight, and Android apps. Supports handwriting with the optional BOOX InkSense Plus stylus.',
  screenInches: 6, releaseDate: '2026-06-07', releaseType: 'Product announcement', releaseSource: go6Gen2Launch,
  price: 189.99, currency: 'USD', priceLabel: 'From US$189.99', priceSource: go6Gen2Page,
  priceNote: 'Hong Kong warehouse Standard Bundle: US$189.99; US warehouse: US$199.99. InkSense Plus stylus sold separately. Shipping and taxes depend on destination.',
  purchaseUrl: go6Gen2Page, purchaseLabel: 'View on BOOX', officialUrl: go6Gen2Page, makerUrl: 'https://shop.boox.com/',
  specs: [['Display', '6-inch monochrome e-paper touchscreen with anti-glare glass'], ['Resolution', '1448 × 1072 pixels; 300 PPI'], ['Frontlight', 'Adjustable warm/cool color temperature'], ['Processor', 'Octa-core, 2.0 GHz'], ['Operating system', 'Android 11 with Google Play'], ['Memory', '3 GB RAM, 32 GB storage'], ['Expansion', 'MicroSD card slot'], ['Stylus', 'Optional BOOX InkSense Plus'], ['Connectivity', 'Dual-band Wi-Fi, Bluetooth 5.0, USB-C OTG'], ['Battery', '1,500 mAh'], ['Dimensions', '149 × 109 × 6.8 mm'], ['Weight', 'About 160 g']],
  cover: '/images/boox-go6-gen2.jpg', coverShape: 'go6', coverAlt: 'Dark BOOX Go 6 Gen II e-reader showing its front and grooved back',
  photos: [{ src: '/images/boox-go6-gen2.jpg', alt: 'Dark BOOX Go 6 Gen II, front and rear view' }, { src: '/images/boox-go6-gen2-colors.jpg', alt: 'Light gray BOOX Go 6 Gen II, front and rear view' }],
  verifiedAt: '2026-09-11', sources: [{ label: 'Official product, price, specifications and photography', url: go6Gen2Page }, { label: 'Launch announcement', url: go6Gen2Launch }],
  mediaCredit: 'Official product photographs by BOOX.',
});


const go6Page = 'https://shop.boox.com/products/go6';
const go6Launch = 'https://shop.boox.com/blogs/news/boox-go-6-ereader';
products.push({
  id: 'boox-go6', name: 'Go 6', maker: 'BOOX', category: 'E-reader',
  description: 'A compact 6-inch e-reader with a Carta 1300 monochrome touchscreen and adjustable warm-and-cool frontlight. Android 11 and Google Play support reading apps, with microSD expansion for a larger library.',
  screenInches: 6, releaseDate: '2024-08-25', releaseType: 'Product announcement', releaseSource: go6Launch,
  price: 149.99, currency: 'USD', priceLabel: 'From US$149.99', priceSource: go6Page,
  priceNote: 'Hong Kong warehouse device price: US$149.99; US warehouse: US$159.99. Shipping and taxes depend on destination.',
  purchaseUrl: go6Page, purchaseLabel: 'View on BOOX', officialUrl: go6Page, makerUrl: 'https://shop.boox.com/',
  specs: [['Display', '6-inch Carta 1300 monochrome e-paper touchscreen'], ['Resolution', '1448 × 1072 pixels; 300 PPI'], ['Frontlight', 'Adjustable warm/cool color temperature'], ['Processor', 'Octa-core, 2.0 GHz'], ['Operating system', 'Android 11 with Google Play'], ['Memory', '2 GB RAM, 32 GB storage'], ['Expansion', 'MicroSD card slot'], ['Connectivity', 'Dual-band Wi-Fi, Bluetooth 5.0, USB-C OTG'], ['Battery', '1,500 mAh'], ['Dimensions', '148 × 108 × 6.8 mm'], ['Weight', 'About 146 g']],
  cover: '/images/boox-go6.jpg', coverShape: 'go6', coverAlt: 'First-generation BOOX Go 6, showing its front screen and smooth back',
  photos: [{ src: '/images/boox-go6.jpg', alt: 'First-generation BOOX Go 6, front and rear view' }, { src: '/images/boox-go6-front.jpg', alt: 'First-generation BOOX Go 6, complete front view' }],
  verifiedAt: '2026-09-11', sources: [{ label: 'Official product, price, specifications and photography', url: go6Page }, { label: 'Launch announcement', url: go6Launch }],
  mediaCredit: 'Official product photographs by BOOX.',
});

const plaudNotePage = 'https://www.plaud.ai/products/plaud-note-ai-voice-recorder';
const plaudNoteLaunch = 'https://www.plaud.ai/blogs/articles/plaud-anniversary';
products.push({
  id: 'plaud-note', collections: ['note-taking'], name: 'Note', maker: 'PLAUD', category: 'AI voice recorder',
  description: 'A card-sized voice recorder with separate modes for meetings and phone calls. Recordings sync to the Plaud app for transcription, summaries, and searchable notes.',
  screenInches: null, releaseDate: null, releaseYear: 2023, releaseType: 'Year only; exact date unverified', releaseSource: plaudNoteLaunch,
  price: 159, currency: 'USD', priceLabel: 'US$159', priceSource: plaudNotePage,
  priceNote: 'Official store device price. Starter plan includes 300 transcription minutes per month; paid plans are optional.',
  purchaseUrl: plaudNotePage, purchaseLabel: 'View on PLAUD', officialUrl: plaudNotePage, makerUrl: 'https://www.plaud.ai/',
  specs: [['Display', 'No screen'], ['Recording modes', 'Meetings and phone calls; manual switch'], ['Microphones', '2 MEMS microphones and 1 voice pickup unit'], ['Pickup range', 'Up to 3 m'], ['Storage', '64 GB'], ['Battery', '400 mAh; up to 30 hours of recording'], ['Connectivity', 'Bluetooth, Wi-Fi'], ['Weight', '30 g'], ['Transcription', 'Via Plaud app; 300 minutes per month on Starter plan']],
  cover: '/images/plaud-note-1.webp', coverShape: 'plaud-card', coverAlt: 'Gray PLAUD Note voice recorder, front view',
  photos: [{ src: '/images/plaud-note-1.webp', alt: 'PLAUD Note front view with recording mode switch' }, { src: '/images/plaud-note-2.png', alt: 'Official PLAUD Note product photograph' }],
  verifiedAt: '2026-09-11', sources: [{ label: 'Official product, specifications, price and photography', url: plaudNotePage }, { label: 'Official launch history', url: plaudNoteLaunch }],
  mediaCredit: 'Official product photographs by PLAUD.',
});

const plaudProPage = 'https://www.plaud.ai/products/plaud-note-pro';
const plaudProLaunch = 'https://www.prnewswire.com/news-releases/plaud-launches-plaud-note-pro-the-worlds-first-ai-note-taker-enabling-real-time-human-ai-alignment-302539908.html';
products.push({
  id: 'plaud-note-pro', collections: ['note-taking'], name: 'Note Pro', maker: 'PLAUD', category: 'AI voice recorder',
  description: 'A slim voice recorder with a small AMOLED status display and automatic switching between calls and in-person conversations. Press the recording button to highlight a moment for the AI-generated notes.',
  screenInches: 0.95, releaseDate: '2025-08-27', releaseType: 'Announcement / pre-order launch', releaseSource: plaudProLaunch,
  price: 189, currency: 'USD', priceLabel: 'US$189', priceSource: plaudProPage,
  priceNote: 'Official store device price. Starter plan includes 300 transcription minutes per month; paid plans are optional.',
  purchaseUrl: plaudProPage, purchaseLabel: 'View on PLAUD', officialUrl: plaudProPage, makerUrl: 'https://www.plaud.ai/',
  specs: [['Display', '0.95-inch AMOLED InstantView display'], ['Recording modes', 'Automatic call and meeting detection'], ['Microphones', '4 MEMS microphones and 1 voice pickup unit'], ['Pickup range', 'Up to 5 m'], ['Storage', '64 GB'], ['Battery', '500 mAh; up to 50 hours of recording in Endurance mode'], ['Connectivity', 'Bluetooth 5.4, Wi-Fi'], ['Dimensions', '85.6 × 54.1 × 2.99 mm'], ['Weight', '30 g'], ['Transcription', 'Via Plaud app; 300 minutes per month on Starter plan']],
  cover: '/images/plaud-pro-1.png', coverShape: 'plaud-card', coverAlt: 'Black PLAUD Note Pro voice recorder, front view',
  photos: [{ src: '/images/plaud-pro-1.png', alt: 'PLAUD Note Pro front view' }, { src: '/images/plaud-pro-2.webp', alt: 'PLAUD Note Pro side view' }],
  verifiedAt: '2026-09-11', sources: [{ label: 'Official product, specifications, price and photography', url: plaudProPage }, { label: 'PLAUD launch press release', url: plaudProLaunch }],
  mediaCredit: 'Official product photographs by PLAUD.',
});

const plaudPinPage = 'https://www.plaud.ai/products/plaud-notepin';
const plaudPinLaunch = 'https://www.prnewswire.com/news-releases/plaudai-introduces-plaud-notepin-the-future-of-enhanced-productivity-is-an-ultra-light-wearable-ai-device-302232959.html';
products.push({
  id: 'plaud-notepin', collections: ['note-taking'], name: 'NotePin', maker: 'PLAUD', category: 'Wearable AI voice recorder',
  description: 'A lightweight wearable recorder for capturing conversations and spoken ideas. Wear it with a clip, pin, necklace, or wristband, then use the Plaud app to turn recordings into transcripts and summaries.',
  screenInches: null, releaseDate: '2024-08-28', releaseType: 'Announcement / pre-order launch', releaseSource: plaudPinLaunch,
  price: 159, currency: 'USD', priceLabel: 'US$159', priceSource: plaudPinPage,
  priceNote: 'Official store device price. Starter plan includes 300 transcription minutes per month; paid plans are optional. Wearable accessories vary by bundle.',
  purchaseUrl: plaudPinPage, purchaseLabel: 'View on PLAUD', officialUrl: plaudPinPage, makerUrl: 'https://www.plaud.ai/',
  specs: [['Display', 'No screen'], ['Microphones', '2 MEMS microphones'], ['Storage', '64 GB'], ['Battery', '270 mAh; up to 20 hours of recording'], ['Standby', 'Up to 40 days'], ['Connectivity', 'Bluetooth, Wi-Fi'], ['Dimensions', '51 × 21 × 11 mm'], ['Weight', '16.6 g without accessories'], ['Transcription', 'Via Plaud app; 300 minutes per month on Starter plan']],
  cover: '/images/plaud-pin-1.webp', coverShape: 'plaud-pin', coverAlt: 'Gray PLAUD NotePin wearable recorder, front view',
  photos: [{ src: '/images/plaud-pin-1.webp', alt: 'PLAUD NotePin front view' }, { src: '/images/plaud-pin-2.png', alt: 'Official PLAUD NotePin product photograph' }],
  verifiedAt: '2026-09-11', sources: [{ label: 'Official product, specifications, price and photography', url: plaudPinPage }, { label: 'PLAUD launch press release', url: plaudPinLaunch }],
  mediaCredit: 'Official product photographs by PLAUD.',
});

const max2Page = 'https://www.xunfei.cn/goods?goodsId=2387';
const max2PricePage = 'https://www.xunfei.cn/categories?keywords=%E9%98%85%E8%AF%BB%E5%99%A8';
const max2Launch = 'https://www.epaperia.com/News/1653.html';
products.push({
  id: 'iflytek-max2', collections: ['note-taking'], name: 'MAX2', maker: 'iFLYTEK', category: 'Notebook',
  description: 'A 13.3-inch monochrome E Ink notebook for handwriting, document reading, and meeting notes. Combines a Wacom pen with an eight-microphone array for voice transcription and AI-assisted summaries.',
  screenInches: 13.3, releaseDate: '2025-12-28', releaseType: 'Joint product announcement', releaseSource: max2Launch,
  price: 6399, currency: 'CNY', priceLabel: 'CN¥6,399', priceSource: max2PricePage,
  priceNote: 'China official store price; availability, shipping and regional services depend on destination.',
  purchaseUrl: max2Page, purchaseLabel: 'View on iFLYTEK', officialUrl: max2Page, makerUrl: 'https://www.xunfei.cn/',
  specs: [['Display', '13.3-inch monochrome E Ink'], ['Resolution', '3200 × 2400 pixels; 300 PPI'], ['Stylus', 'Custom Wacom magnetic battery-free electromagnetic pen'], ['Operating system', 'Android 15'], ['Memory', '6 GB RAM, 128 GB storage'], ['Audio', '8 microphones and 2 speakers'], ['Battery', '5,500 mAh'], ['Connectivity', 'Wi-Fi 6, Bluetooth 5.3, USB-C (USB 2.0)'], ['Dimensions', '231 × 300 × 4.55 mm'], ['Weight', 'About 595 g without cover']],
  cover: '/images/iflytek-max2.png', coverShape: 'max2', coverAlt: 'iFLYTEK MAX2 E Ink notebook with its magnetic stylus',
  photos: [{ src: '/images/iflytek-max2.png', alt: 'iFLYTEK MAX2 front view with stylus' }],
  verifiedAt: '2026-09-11', sources: [{ label: 'Official product, specifications and photography', url: max2Page }, { label: 'Official store price', url: max2PricePage }, { label: 'Joint launch reported by the E-Paper Industry Alliance', url: max2Launch }],
  mediaCredit: 'Official product photographs by iFLYTEK.',
});
