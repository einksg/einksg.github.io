#!/usr/bin/env python3
"""
Crop wallpapers from raw_wallpapers folder to 400x600 and place them in wallpapers folder
"""

import os
from PIL import Image
import glob

def crop_to_400x600(input_path, output_path):
    """Crop image to exactly 400x600 pixels with smart centering"""
    try:
        with Image.open(input_path) as img:
            # Convert to RGB if needed (handles RGBA, etc.)
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            original_width, original_height = img.size
            target_width, target_height = 400, 600
            
            # Calculate aspect ratios
            original_ratio = original_width / original_height
            target_ratio = target_width / target_height
            
            if original_ratio > target_ratio:
                # Image is wider than target - crop width
                new_height = original_height
                new_width = int(original_height * target_ratio)
                left = (original_width - new_width) // 2
                top = 0
                right = left + new_width
                bottom = new_height
            else:
                # Image is taller than target - crop height
                new_width = original_width
                new_height = int(original_width / target_ratio)
                left = 0
                top = (original_height - new_height) // 2
                right = new_width
                bottom = top + new_height
            
            # Crop the image
            cropped = img.crop((left, top, right, bottom))
            
            # Resize to exactly 400x600
            final = cropped.resize((target_width, target_height), Image.Resampling.LANCZOS)
            
            # Save as high-quality JPEG
            final.save(output_path, 'JPEG', quality=95, optimize=True)
            print(f"✅ Processed: {os.path.basename(input_path)} -> {os.path.basename(output_path)}")
            
    except Exception as e:
        print(f"❌ Error processing {input_path}: {e}")

def main():
    # Define directories
    raw_dir = "raw_wallpapers"
    output_dir = "wallpapers"
    
    # Create directories if they don't exist
    os.makedirs(raw_dir, exist_ok=True)
    os.makedirs(output_dir, exist_ok=True)
    
    # Supported image formats
    formats = ['*.jpg', '*.jpeg', '*.png', '*.webp', '*.bmp', '*.tiff']
    
    # Find all images in raw_wallpapers
    image_files = []
    for fmt in formats:
        image_files.extend(glob.glob(os.path.join(raw_dir, fmt)))
        image_files.extend(glob.glob(os.path.join(raw_dir, fmt.upper())))
    
    if not image_files:
        print(f"📁 No images found in {raw_dir}/ folder")
        print(f"   Please add your generated images to the {raw_dir}/ folder")
        return
    
    print(f"🔍 Found {len(image_files)} image(s) to process")
    
    # Process each image
    for i, input_path in enumerate(image_files, 1):
        filename = os.path.basename(input_path)
        name, ext = os.path.splitext(filename)
        
        # Generate output filename
        output_filename = f"photo-{i:02d}.jpg"
        output_path = os.path.join(output_dir, output_filename)
        
        print(f"🎨 Processing {i}/{len(image_files)}: {filename}")
        crop_to_400x600(input_path, output_path)
    
    print(f"\n✨ Processing complete! {len(image_files)} wallpapers cropped to 400x600")
    print(f"📂 Cropped images saved to: {output_dir}/")
    print(f"📝 Update your JavaScript with these filenames:")
    
    # Generate JavaScript entries
    print("\n// Add these to your artworks array:")
    for i in range(1, len(image_files) + 1):
        print(f'''{{
    id: {36 + i},
    title: "Photo {i:02d}",
    resolution: "400x600",
    thumbnail: "./wallpapers/photo-{i:02d}.jpg",
    fullSize: "./wallpapers/photo-{i:02d}.jpg"
}},''')

if __name__ == "__main__":
    main()