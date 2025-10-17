// Gallery data - Auto-generated from wallpapers folder
const artworks = [
    {
        id: 1,
        title: "Photo 01",
        resolution: "400x600",
        thumbnail: "./wallpapers/photo-01.jpg",
        fullSize: "./wallpapers/photo-01.jpg"
    },
    {
        id: 2,
        title: "Photo 02",
        resolution: "400x600",
        thumbnail: "./wallpapers/photo-02.jpg",
        fullSize: "./wallpapers/photo-02.jpg"
    },
    {
        id: 3,
        title: "Photo 03",
        resolution: "400x600",
        thumbnail: "./wallpapers/photo-03.jpg",
        fullSize: "./wallpapers/photo-03.jpg"
    },
    {
        id: 4,
        title: "Photo 04",
        resolution: "400x600",
        thumbnail: "./wallpapers/photo-04.jpg",
        fullSize: "./wallpapers/photo-04.jpg"
    },
    {
        id: 5,
        title: "Photo 05",
        resolution: "400x600",
        thumbnail: "./wallpapers/photo-05.jpg",
        fullSize: "./wallpapers/photo-05.jpg"
    }
];

class Gallery {
    constructor() {
        this.gallery = document.getElementById('gallery');
        this.modal = document.getElementById('modal');
        this.modalImage = document.getElementById('modalImage');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalResolution = document.getElementById('modalResolution');
        this.modalDownload = document.getElementById('modalDownload');
        this.modalClose = document.getElementById('modalClose');
        this.modalOverlay = document.getElementById('modalOverlay');
        this.loading = document.getElementById('loading');
        this.caseDisplay = document.getElementById('caseDisplay');
        this.deviceImage = document.getElementById('deviceImage');
        this.deviceSelectorBtns = document.querySelectorAll('.device-selector__btn');
        
        this.currentArtwork = null;
        this.currentDevice = 'reink-case';
        
        this.devices = {
            'reink-case': {
                name: 'Reink Case',
                mockup: './devices/mockup.svg',
                displayPosition: {
                    left: '120px', // SVG: x="120"
                    top: '400px',  // SVG: y="400"
                    width: '400px', // SVG: width="400"
                    height: '600px' // SVG: height="600"
                }
            },
            'm5-paper-s3': {
                name: 'M5 Paper Color',
                mockup: './devices/m5-paper-s3.svg',
                displayPosition: {
                    left: '60px',   // SVG: x="60"
                    top: '60px',    // SVG: y="60" 
                    width: '400px', // SVG: width="400"
                    height: '600px' // SVG: height="600"
                }
            }
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.setupInitialDevice();
        this.loadArtworks();
    }
    
    setupInitialDevice() {
        // Ensure the initial device (reink-case) is properly configured
        this.switchDevice('reink-case');
    }
    
    bindEvents() {
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modalOverlay.addEventListener('click', () => this.closeModal());
        this.modalDownload.addEventListener('click', () => this.downloadArtwork());
        
        // Device selector events
        this.deviceSelectorBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchDevice(e.target.dataset.device);
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }
    
    loadArtworks() {
        // Simulate loading delay
        setTimeout(() => {
            this.loading.classList.add('hidden');
            this.renderArtworks();
        }, 1000);
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    renderArtworks() {
        this.gallery.innerHTML = '';
        
        // Randomize the order of artworks each time
        const shuffledArtworks = this.shuffleArray(artworks);
        
        shuffledArtworks.forEach((artwork, index) => {
            const item = this.createGalleryItem(artwork, index);
            this.gallery.appendChild(item);
        });
    }
    
    createGalleryItem(artwork, index) {
        const item = document.createElement('div');
        item.className = 'gallery__item';
        
        item.innerHTML = `
            <img class="gallery__image" src="${artwork.thumbnail}" alt="${artwork.title}" loading="lazy">
            <div class="gallery__info">
                <div class="gallery__text">
                    <h3 class="gallery__title">${artwork.title}</h3>
                    <p class="gallery__resolution">${artwork.resolution}</p>
                </div>
            </div>
        `;
        
        // Add click event to image for preview
        const image = item.querySelector('.gallery__image');
        image.addEventListener('click', () => {
            this.previewOnCase(artwork);
        });
        
        return item;
    }
    
    openModal(artwork) {
        this.currentArtwork = artwork;
        this.modalImage.src = artwork.fullSize;
        this.modalTitle.textContent = artwork.title;
        this.modalResolution.textContent = `Resolution: ${artwork.resolution}`;
        this.modal.classList.add('active');
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
    
    closeModal() {
        this.modal.classList.remove('active');
        this.currentArtwork = null;
        
        // Restore body scroll
        document.body.style.overflow = '';
    }
    
    switchDevice(deviceId) {
        if (!this.devices[deviceId]) return;
        
        this.currentDevice = deviceId;
        const device = this.devices[deviceId];
        
        // Update device image
        this.deviceImage.src = device.mockup;
        this.deviceImage.alt = device.name;
        
        // Update display positioning - exact pixel coordinates from SVG
        const displayPosition = device.displayPosition;
        this.caseDisplay.style.left = displayPosition.left;
        this.caseDisplay.style.top = displayPosition.top;
        this.caseDisplay.style.width = displayPosition.width;
        this.caseDisplay.style.height = displayPosition.height;
        this.caseDisplay.style.transform = 'none';
        
        // Update border radius based on device
        if (deviceId === 'm5-paper-s3') {
            this.caseDisplay.style.borderRadius = '0px';
        } else {
            this.caseDisplay.style.borderRadius = '50px';
        }
        
        // Update active button
        this.deviceSelectorBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.device === deviceId) {
                btn.classList.add('active');
            }
        });
        
        // Clear current preview
        this.caseDisplay.innerHTML = `
            <div class="case-preview__placeholder">
                <p>Click any wallpaper to preview</p>
            </div>
        `;
    }
    
    previewOnCase(artwork) {
        // Update case display with the selected wallpaper
        const borderRadius = this.currentDevice === 'm5-paper-s3' ? '0px' : '50px';
        this.caseDisplay.innerHTML = `
            <img src="${artwork.thumbnail}" alt="${artwork.title}" class="e-paper" style="border-radius: ${borderRadius};">
        `;
    }
    
    async downloadArtwork(artwork = this.currentArtwork) {
        if (!artwork) return;
        
        try {
            // Fetch the SVG content
            const response = await fetch(artwork.fullSize);
            const svgContent = await response.text();
            
            // Create a blob with the SVG content
            const blob = new Blob([svgContent], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            
            // Create a temporary link to download the file
            const link = document.createElement('a');
            link.href = url;
            link.download = `${artwork.title.toLowerCase().replace(/\s+/g, '-')}-${artwork.resolution}.svg`;
            
            // Force download without opening in browser
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Clean up the blob URL
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
        }
    }
}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Gallery();
});

// Add some utility functions for e-ink optimization
const EinkOptimizer = {
    // Reduce unnecessary redraws
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    },
    
    // Optimize for e-ink refresh rates
    debounce(func, delay) {
        let debounceTimer;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        }
    }
};

// Apply e-ink specific optimizations
window.addEventListener('resize', EinkOptimizer.debounce(() => {
    // Handle responsive layout changes with minimal redraws
    const gallery = document.querySelector('.gallery');
    if (gallery) {
        gallery.style.opacity = '0.99'; // Force slight refresh
        setTimeout(() => {
            gallery.style.opacity = '1';
        }, 100);
    }
}, 500));