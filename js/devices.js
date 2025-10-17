// Centralized device data for eink.sg
// This file contains comprehensive device information used across all pages

const DEVICE_DATA = {
    'hisense-a9': {
        name: 'Hisense A9',
        category: 'Phone',
        year: 2022,
        price: 'S$649',
        screenSize: 6.1,
        displaySize: '6.1"',
        resolution: '1072 × 1448',
        batteryLife: '7 days',
        weight: '163g',
        connectivity: '4G, WiFi, Bluetooth',
        width: 80,
        height: 120,
        description: 'E-ink smartphone with dual screens for extended battery life and outdoor readability.',
        specs: {
            'Display': '6.1" E-ink + 5.84" Color OLED',
            'Resolution': '1072 × 1448 (E-ink), 2280 × 1080 (OLED)',
            'Battery': '4070mAh',
            'OS': 'Android 10',
            'Storage': '128GB',
            'RAM': '6GB'
        },
        features: ['Dual screen design', 'Always-on E-ink display', '4G connectivity', 'Fingerprint sensor']
    },
    'light-phone-3': {
        name: 'Light Phone 3',
        category: 'Phone',
        year: 2024,
        price: 'S$449',
        screenSize: 3.2,
        displaySize: '3.2"',
        resolution: '480 × 800',
        batteryLife: '5 days',
        weight: '89g',
        connectivity: '4G, WiFi',
        width: 60,
        height: 100,
        description: 'Minimalist e-ink phone designed to reduce screen time while maintaining essential connectivity.',
        specs: {
            'Display': '3.2" E-ink',
            'Resolution': '480 × 800',
            'Battery': '1500mAh',
            'OS': 'Light OS',
            'Connectivity': '4G, Wi-Fi',
            'Weight': '89g'
        },
        features: ['Minimalist design', 'Essential apps only', 'Week-long battery', 'Distraction-free experience']
    },
    'dasung-paperlike': {
        name: 'Dasung Paperlike HD-FT',
        category: 'Monitor',
        year: 2021,
        price: 'S$2,899',
        screenSize: 25.3,
        displaySize: '25.3"',
        resolution: '3200 × 1800',
        batteryLife: 'N/A (Plugged)',
        weight: '4.2kg',
        connectivity: 'USB-C, HDMI',
        width: 200,
        height: 150,
        description: '25.3" e-ink monitor with front light for comfortable reading and reduced eye strain during long work sessions.',
        specs: {
            'Display': '25.3" E-ink',
            'Resolution': '3200 × 1800',
            'Refresh Rate': '1-10Hz',
            'Connectivity': 'USB-C, HDMI',
            'Front Light': 'Adjustable warm/cool',
            'Weight': '4.2kg'
        },
        features: ['Front light technology', 'Eye strain reduction', 'Programming friendly', 'Multiple connectivity options']
    },
    'boox-mira': {
        name: 'BOOX Mira Pro',
        category: 'Monitor',
        year: 2023,
        price: 'S$2,599',
        screenSize: 25.3,
        displaySize: '25.3"',
        resolution: '3200 × 1800',
        batteryLife: 'N/A (Plugged)',
        weight: '3.8kg',
        connectivity: 'USB-C',
        width: 200,
        height: 150,
        description: '25.3" e-ink monitor with USB-C connectivity and adjustable refresh rates for programming and writing.',
        specs: {
            'Display': '25.3" E-ink Carta',
            'Resolution': '3200 × 1800',
            'Refresh Rate': 'Variable 1-15Hz',
            'Connectivity': 'USB-C (single cable)',
            'Compatibility': 'Windows, macOS, Linux',
            'Weight': '3.8kg'
        },
        features: ['Single USB-C connection', 'Variable refresh rates', 'Cross-platform support', 'Lightweight design']
    },
    'remarkable-2': {
        name: 'reMarkable 2',
        category: 'Tablet',
        year: 2020,
        price: 'S$599',
        screenSize: 10.3,
        displaySize: '10.3"',
        resolution: '1872 × 1404',
        batteryLife: '2 weeks',
        weight: '403g',
        connectivity: 'WiFi, USB-C',
        width: 140,
        height: 180,
        description: 'Paper-like writing tablet with exceptional pen-to-paper feel for note-taking and document annotation.',
        specs: {
            'Display': '10.3" E-ink Carta',
            'Resolution': '1872 × 1404',
            'Thickness': '4.7mm',
            'Weight': '403g',
            'Battery': '2 weeks',
            'Storage': '8GB'
        },
        features: ['Paper-like writing experience', 'Ultra-thin design', 'Cloud synchronization', 'PDF annotation']
    },
    'inkcase-i7': {
        name: 'InkCase i7 Plus',
        category: 'Phone Case',
        year: 2020,
        price: 'S$199',
        screenSize: 4.3,
        displaySize: '4.3"',
        resolution: '800 × 600',
        batteryLife: '2-3 weeks',
        weight: '+45g',
        connectivity: 'Bluetooth',
        width: 80,
        height: 120,
        description: 'E-ink secondary display case for iPhone with customizable widgets and notifications.',
        specs: {
            'Display': '4.3" E-ink',
            'Resolution': '800 × 600',
            'Compatibility': 'iPhone 7/8 Plus',
            'Battery': '2-3 weeks',
            'Thickness': '+2mm',
            'Weight': '+45g'
        },
        features: ['Secondary e-ink display', 'Customizable widgets', 'Always-on notifications', 'Minimal thickness added']
    },
    'pebble-time': {
        name: 'Pebble Time',
        category: 'Smartwatch',
        year: 2015,
        price: 'S$199 (discontinued)',
        screenSize: 1.25,
        displaySize: '1.25"',
        resolution: '144 × 168',
        batteryLife: '7 days',
        weight: '42.5g',
        connectivity: 'Bluetooth',
        width: 30,
        height: 40,
        description: 'Color e-paper smartwatch with week-long battery life and always-on display.',
        specs: {
            'Display': '1.25" Color E-paper',
            'Resolution': '144 × 168',
            'Battery': '7 days',
            'Water Rating': '30m',
            'Compatibility': 'iOS, Android',
            'Weight': '42.5g'
        },
        features: ['Color e-paper display', 'Week-long battery', 'Always-on screen', 'Timeline interface', 'Water resistant']
    },
    'kindle-oasis': {
        name: 'Kindle Oasis',
        category: 'E-reader',
        year: 2019,
        price: 'S$429',
        screenSize: 7.0,
        displaySize: '7"',
        resolution: '1680 × 1264',
        batteryLife: '6 weeks',
        weight: '188g',
        connectivity: 'WiFi, 4G (optional)',
        width: 100,
        height: 140,
        description: 'Premium e-reader with adjustable warm light and physical page turn buttons for comfortable reading.',
        specs: {
            'Display': '7" E-ink Carta',
            'Resolution': '1680 × 1264 (300 PPI)',
            'Storage': '8GB/32GB',
            'Battery': '6 weeks',
            'Water Rating': 'IPX8',
            'Weight': '188g'
        },
        features: ['Adjustable warm light', 'Physical page turn buttons', 'Waterproof design', 'Premium materials', 'Auto-rotating display']
    },
    'boox-p6': {
        name: 'Boox P6',
        category: 'E-reader',
        year: 2023,
        price: 'S$299',
        screenSize: 6.0,
        displaySize: '6"',
        resolution: '1072 × 1448',
        batteryLife: '4 weeks',
        weight: '155g',
        connectivity: 'WiFi, Bluetooth',
        width: 90,
        height: 130,
        description: 'Compact Android e-reader with versatile app support and excellent build quality.',
        specs: {
            'Display': '6" E-ink Carta',
            'Resolution': '1072 × 1448 (300 PPI)',
            'OS': 'Android 11',
            'Storage': '32GB',
            'RAM': '2GB',
            'Weight': '155g'
        },
        features: ['Android app support', 'Compact design', 'Long battery life', 'PDF annotation', 'Note-taking capability']
    },
    'ireader-tango': {
        name: 'iReader Tango',
        category: 'E-reader',
        year: 2022,
        price: 'S$199',
        screenSize: 6.0,
        displaySize: '6"',
        resolution: '1024 × 758',
        batteryLife: '5 weeks',
        weight: '142g',
        connectivity: 'WiFi',
        width: 88,
        height: 125,
        description: 'Budget-friendly e-reader focused on reading experience with optimized Chinese language support.',
        specs: {
            'Display': '6" E-ink',
            'Resolution': '1024 × 758',
            'OS': 'Custom Linux',
            'Storage': '16GB',
            'Battery': '1500mAh',
            'Weight': '142g'
        },
        features: ['Affordable price', 'Optimized reading', 'Chinese language support', 'Lightweight design', 'Simple interface']
    },
    'obook5': {
        name: 'Obook5',
        category: 'Tablet',
        year: 2024,
        price: 'S$799',
        screenSize: 10.3,
        displaySize: '10.3"',
        resolution: '1872 × 1404',
        batteryLife: '3 weeks',
        weight: '380g',
        connectivity: 'WiFi, Bluetooth, USB-C',
        width: 150,
        height: 190,
        description: 'Premium note-taking tablet with advanced pen technology and seamless cloud integration.',
        specs: {
            'Display': '10.3" E-ink Carta',
            'Resolution': '1872 × 1404',
            'OS': 'Android 12',
            'Storage': '64GB',
            'RAM': '4GB',
            'Weight': '380g'
        },
        features: ['Premium pen experience', 'Cloud synchronization', 'Android apps', 'Fast refresh rate', 'Professional build quality']
    },
    'xteink-x4': {
        name: 'XTEINK X4',
        category: 'Tablet',
        year: 2023,
        price: 'S$599',
        screenSize: 10.3,
        displaySize: '10.3"',
        resolution: '1872 × 1404',
        batteryLife: '2 weeks',
        weight: '420g',
        connectivity: 'WiFi, USB-C',
        width: 145,
        height: 185,
        description: 'Affordable note-taking tablet with solid performance and good value for money.',
        specs: {
            'Display': '10.3" E-ink',
            'Resolution': '1872 × 1404',
            'OS': 'Android 11',
            'Storage': '32GB',
            'RAM': '3GB',
            'Weight': '420g'
        },
        features: ['Budget-friendly', 'Good pen support', 'Basic Android apps', 'Decent build quality', 'Value for money']
    }
};

// Featured comparison data
const FEATURED_COMPARISONS = {
    'boox-p6-vs-ireader-tango': {
        device1: 'boox-p6',
        device2: 'ireader-tango',
        title: 'Boox P6 vs iReader Tango',
        description: 'Compact e-readers face-off: Android versatility versus optimized reading experience.'
    },
    'obook5-vs-xteink-x4': {
        device1: 'obook5',
        device2: 'xteink-x4',
        title: 'Obook5 vs XTEINK X4',
        description: 'Note-taking tablets showdown: Premium features versus affordable functionality.'
    }
};

// Utility functions
function getDevicesByCategory(category) {
    return Object.keys(DEVICE_DATA).filter(key => 
        DEVICE_DATA[key].category.toLowerCase() === category.toLowerCase()
    ).map(key => ({...DEVICE_DATA[key], id: key}));
}

function getDevicesSortedByScreenSize() {
    return Object.keys(DEVICE_DATA).map(key => ({
        ...DEVICE_DATA[key], 
        id: key
    })).sort((a, b) => a.screenSize - b.screenSize);
}

function getDevicesSortedByYear() {
    return Object.keys(DEVICE_DATA).map(key => ({
        ...DEVICE_DATA[key], 
        id: key
    })).sort((a, b) => b.year - a.year);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DEVICE_DATA, FEATURED_COMPARISONS, getDevicesByCategory, getDevicesSortedByScreenSize, getDevicesSortedByYear };
}