# E6 Gallery - Spectra 6 E-ink Display Wallpaper Gallery

A modern Pinterest-style gallery optimized for E6 Spectra 6-color e-ink displays, featuring abstract art wallpapers in 400×600 resolution.

## Features

- **Modern Design**: Clean, contemporary interface optimized for e-ink displays
- **E6 Color Palette**: Uses only the 6 colors supported by Spectra displays (Black, White, Red, Yellow, Blue, Green)
- **Pinterest-Style Layout**: Responsive masonry grid layout
- **400×600 Resolution**: Perfect vertical orientation for e-ink devices
- **Modal Preview**: Full-size image preview with download functionality

## Image Processor Tool

The included `image_processor.py` script helps you prepare images from other AI generators for E6 displays:

### Installation

```bash
pip install -r requirements.txt
```

### Usage

**Process a single image:**
```bash
python image_processor.py input_image.jpg -o output_image.jpg
```

**Process all images in a folder:**
```bash
python image_processor.py /path/to/input/folder -o /path/to/output/folder
```

**Options:**
- `--width`: Target width (default: 400)
- `--height`: Target height (default: 600)
- `--no-enhance`: Skip contrast/saturation enhancement
- `--no-quantize`: Skip color quantization to E6 palette

### What the processor does:

1. **Crops** images to 2:3 aspect ratio (400×600)
2. **Resizes** to exact 400×600 pixels
3. **Enhances** contrast and saturation for better e-ink visibility
4. **Quantizes** colors to match E6 Spectra's 6-color palette
5. **Optimizes** for e-ink display characteristics

## E6 Spectra Color Palette

The processor maps all colors to these 6 values:
- **Black**: `#000000`
- **White**: `#ffffff`
- **Red**: `#ff0000`
- **Yellow**: `#ffff00`
- **Blue**: `#0000ff`
- **Green**: `#00ff00`

## File Structure

```
E6_gallery/
├── index.html          # Main gallery page
├── styles.css          # Modern CSS styling
├── script.js           # Gallery functionality
├── image_processor.py  # Image processing tool
├── requirements.txt    # Python dependencies
├── wallpapers/         # Sample wallpapers
│   ├── geometric-red.svg
│   ├── waves-blue.svg
│   ├── circles-yellow.svg
│   └── ...
└── README.md           # This file
```

## Usage

1. Open `index.html` in a web browser
2. Browse the gallery of abstract wallpapers
3. Click any image for full-size preview
4. Download wallpapers for your E6 device

## Adding New Wallpapers

1. Use AI image generators to create abstract art
2. Run images through `image_processor.py`:
   ```bash
   python image_processor.py your_images/ -o wallpapers/
   ```
3. Update the `artworks` array in `script.js` with new image paths

## Browser Compatibility

Works in all modern browsers. Optimized for devices with e-ink displays.