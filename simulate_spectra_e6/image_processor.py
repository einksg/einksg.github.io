#!/usr/bin/env python3
"""
E6 Spectra Image Processor
Crops images to 400x600 and adjusts colors for E6 Spectra 6-color e-ink display
"""

import os
import sys
from PIL import Image, ImageEnhance
import argparse
import numpy as np
from pathlib import Path

# E6 Spectra 6 color palette (RGB values)
E6_COLORS = {
    'black': (0, 0, 0),
    'white': (255, 255, 255),
    'red': (255, 0, 0),
    'yellow': (255, 255, 0),
    'blue': (0, 0, 255),
    'green': (0, 255, 0)
}

class E6ImageProcessor:
    def __init__(self, target_width=400, target_height=600):
        self.target_width = target_width
        self.target_height = target_height
        self.e6_palette = np.array(list(E6_COLORS.values()))
    
    def find_closest_color(self, color):
        """Find the closest E6 color for a given RGB color"""
        color = np.array(color)
        distances = np.sqrt(np.sum((self.e6_palette - color) ** 2, axis=1))
        return self.e6_palette[np.argmin(distances)]
    
    def crop_to_aspect_ratio(self, image):
        """Crop image to 400x600 aspect ratio (2:3)"""
        img_width, img_height = image.size
        target_ratio = self.target_width / self.target_height  # 2/3
        img_ratio = img_width / img_height
        
        if img_ratio > target_ratio:
            # Image is wider than target ratio, crop width
            new_width = int(img_height * target_ratio)
            left = (img_width - new_width) // 2
            top = 0
            right = left + new_width
            bottom = img_height
        else:
            # Image is taller than target ratio, crop height
            new_height = int(img_width / target_ratio)
            left = 0
            top = (img_height - new_height) // 2
            right = img_width
            bottom = top + new_height
        
        return image.crop((left, top, right, bottom))
    
    def resize_image(self, image):
        """Resize image to exact 400x600 pixels"""
        return image.resize((self.target_width, self.target_height), Image.Resampling.LANCZOS)
    
    def enhance_for_eink(self, image):
        """Enhance image for better e-ink display"""
        # Increase contrast for better e-ink visibility
        enhancer = ImageEnhance.Contrast(image)
        image = enhancer.enhance(1.3)
        
        # Increase saturation to make colors more vivid
        enhancer = ImageEnhance.Color(image)
        image = enhancer.enhance(1.2)
        
        return image
    
    def quantize_to_e6_colors(self, image):
        """Convert image to use only E6 Spectra colors"""
        # Convert to RGB if not already
        if image.mode != 'RGB':
            image = image.convert('RGB')
        
        # Convert to numpy array
        img_array = np.array(image)
        height, width, channels = img_array.shape
        
        # Reshape to list of pixels
        pixels = img_array.reshape(-1, 3)
        
        # Map each pixel to closest E6 color
        new_pixels = np.array([self.find_closest_color(pixel) for pixel in pixels])
        
        # Reshape back to image dimensions
        new_img_array = new_pixels.reshape(height, width, 3).astype(np.uint8)
        
        return Image.fromarray(new_img_array)
    
    def process_image(self, input_path, output_path=None, enhance=True, quantize=True):
        """Process a single image for E6 display"""
        try:
            # Load image
            image = Image.open(input_path)
            
            # Crop to aspect ratio
            image = self.crop_to_aspect_ratio(image)
            
            # Resize to target dimensions
            image = self.resize_image(image)
            
            # Enhance for e-ink if requested
            if enhance:
                image = self.enhance_for_eink(image)
            
            # Quantize to E6 colors if requested
            if quantize:
                image = self.quantize_to_e6_colors(image)
            
            # Generate output path if not provided
            if output_path is None:
                input_path_obj = Path(input_path)
                output_path = input_path_obj.parent / 'processed' / f"{input_path_obj.stem}_e6{input_path_obj.suffix}"
                output_path.parent.mkdir(exist_ok=True)
            
            # Save processed image
            image.save(output_path, quality=95, optimize=True)
            print(f"✓ Processed: {input_path} → {output_path}")
            
            return output_path
            
        except Exception as e:
            print(f"✗ Error processing {input_path}: {str(e)}")
            return None
    
    def process_folder(self, input_folder, output_folder=None, enhance=True, quantize=True):
        """Process all images in a folder"""
        input_folder = Path(input_folder)
        
        if output_folder is None:
            output_folder = input_folder / 'processed'
        else:
            output_folder = Path(output_folder)
        
        output_folder.mkdir(exist_ok=True)
        
        # Supported image formats
        supported_formats = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.webp'}
        
        # Find all image files
        image_files = [f for f in input_folder.iterdir() 
                      if f.is_file() and f.suffix.lower() in supported_formats]
        
        if not image_files:
            print("No supported image files found in the input folder.")
            return
        
        print(f"Found {len(image_files)} images to process...")
        
        processed_count = 0
        for img_file in image_files:
            output_path = output_folder / f"{img_file.stem}_e6{img_file.suffix}"
            result = self.process_image(img_file, output_path, enhance, quantize)
            if result:
                processed_count += 1
        
        print(f"\n✓ Successfully processed {processed_count}/{len(image_files)} images")
        print(f"Output folder: {output_folder}")

def main():
    parser = argparse.ArgumentParser(description="Process images for E6 Spectra 6-color e-ink display")
    parser.add_argument('input', help='Input image file or folder')
    parser.add_argument('-o', '--output', help='Output file or folder (optional)')
    parser.add_argument('--no-enhance', action='store_true', help='Skip contrast/saturation enhancement')
    parser.add_argument('--no-quantize', action='store_true', help='Skip color quantization to E6 palette')
    parser.add_argument('--width', type=int, default=400, help='Target width (default: 400)')
    parser.add_argument('--height', type=int, default=600, help='Target height (default: 600)')
    
    args = parser.parse_args()
    
    # Create processor
    processor = E6ImageProcessor(args.width, args.height)
    
    # Check if input is file or folder
    input_path = Path(args.input)
    
    if not input_path.exists():
        print(f"Error: Input path '{args.input}' does not exist.")
        sys.exit(1)
    
    enhance = not args.no_enhance
    quantize = not args.no_quantize
    
    if input_path.is_file():
        # Process single file
        processor.process_image(args.input, args.output, enhance, quantize)
    elif input_path.is_dir():
        # Process folder
        processor.process_folder(args.input, args.output, enhance, quantize)
    else:
        print(f"Error: '{args.input}' is neither a file nor a directory.")
        sys.exit(1)

if __name__ == "__main__":
    main()