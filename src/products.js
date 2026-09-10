const campaign = 'https://www.kickstarter.com/projects/enilinx/ticket-refresh-it-new-clip-it-on-carry-your-moment';
export const products = [{
  id: 'tickey', name: 'TICKEY', maker: 'ENILINX', category: 'Everyday carry',
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
  id: 'obook5', name: 'OBOOK5', maker: 'Guowen',
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
  id: 'koridy-c1-slim', name: 'C1 Slim', maker: 'Koridy',
  description: 'A pocket electronic dictionary for Chinese, English, and Japanese. A 2.66-inch monochrome e-paper display and physical keyboard support word lookup and vocabulary practice.',
  screenInches: 2.66, releaseDate: '2025-11-01', releaseType: 'Retailer-reported release', releaseSource: c1SlimPage,
  price: 499, currency: 'CNY', priceLabel: 'CN¥499', priceSource: 'Catalog owner',
  priceNote: 'Original price supplied by the catalog owner; not a live retailer quote.',
  purchaseUrl: 'https://item.jd.com/100282856208.html', purchaseLabel: 'View on JD',
  makerUrl: 'https://www.jd.com/brand/6524a446188877224e4.html',
  specs: [['Display', 'Monochrome e-paper'], ['Input', 'Physical keyboard; no touchscreen'], ['Storage', '64 GB'], ['Languages', 'Chinese, English, Japanese'], ['Audio', 'Word pronunciation'], ['Battery', 'Rechargeable lithium battery']],
  cover: '/images/c1slim-detail.jpg', coverShape: 'c1slim', coverAlt: 'Cream Koridy C1 Slim dictionary with a physical keyboard',
  photos: [{ src: '/images/c1slim-detail.jpg', alt: 'Koridy C1 Slim electronic dictionary, front view', crop: 'c1slim' }],
  verifiedAt: '2026-09-10',
  sources: [{ label: 'Retailer specifications, reported release date and product imagery', url: c1SlimPage }, { label: 'JD product listing', url: 'https://item.jd.com/100282856208.html' }],
});

const paperMonoPage = 'https://shop.m5stack.com/products/m5papermono-with-lora-nfc-800x480-3-97-eink-display';
const paperMonoLaunch = 'https://shop.m5stack.com/blogs/news/m5stack-launches-papermono-a-compact-e-ink-development-terminal-for-connected-projects';
products.push({
  id: 'm5stack-paper-mono', name: 'Paper Mono', maker: 'M5Stack',
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
  id: 'm5stack-paper-s3', name: 'PaperS3', maker: 'M5Stack', category: 'Development kit',
  description: 'A low-power ESP32-S3 development kit with a full-screen 4.7-inch touch e-paper display. It combines a gyroscope, buzzer, buttons, microSD expansion, and a built-in battery for interactive projects.',
  screenInches: 4.7, releaseDate: '2024-12-13', releaseType: 'Product release',
  releaseSource: 'https://m5stack.lang-ship.com/catalog/products/controller/c139_papers3/',
  price: 59, currency: 'USD', priceLabel: 'US$59', priceSource: paperS3Page, status: 'EOL',
  purchaseUrl: paperS3Page, purchaseLabel: 'View on M5Stack', officialUrl: 'https://docs.m5stack.com/en/core/PaperS3', makerUrl: 'https://m5stack.com/',
  specs: [['Display', '4.7-inch touch e-paper'], ['Resolution', '960 × 540 pixels'], ['Processor', 'ESP32-S3R8'], ['Memory', '16 MB flash, 8 MB PSRAM'], ['Connectivity', '2.4 GHz Wi-Fi, Bluetooth'], ['Battery', '1,800 mAh'], ['Sensors', 'Gyroscope, RTC, buzzer'], ['Expansion', 'MicroSD, magnetic back'], ['Development', 'Arduino, ESP-IDF, MicroPython, PlatformIO']],
  cover: '/images/papers3-1.webp', coverShape: 'papers3', coverAlt: 'M5Stack PaperS3 touch e-paper development kit',
  photos: [{ src: '/images/papers3-1.webp', alt: 'M5Stack PaperS3 angled front view', crop: 'papers3' }, { src: '/images/papers3-2.webp', alt: 'M5Stack PaperS3 annotated hardware overview' }],
  verifiedAt: '2026-09-10',
  sources: [{ label: 'Official product page, price and photography', url: paperS3Page }, { label: 'Official documentation', url: 'https://docs.m5stack.com/en/core/PaperS3' }],
});
