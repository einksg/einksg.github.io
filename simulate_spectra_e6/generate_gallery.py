#!/usr/bin/env python3
"""
Scan wallpapers folder and generate JavaScript array for all images
"""

import os
import glob
import json
from PIL import Image

def get_image_info(image_path):
    """Get image dimensions and format info"""
    try:
        with Image.open(image_path) as img:
            width, height = img.size
            return f"{width}x{height}"
    except:
        return "400x600"  # default

def generate_title(filename):
    """Generate a nice title from filename"""
    name = os.path.splitext(filename)[0]
    
    # Handle different naming patterns
    if name.startswith('photo-'):
        num = name.replace('photo-', '')
        return f"Photo {num.upper()}"
    elif name.startswith('geometric-'):
        return name.replace('geometric-', '').replace('-', ' ').title()
    elif name.startswith('waves-'):
        color = name.replace('waves-', '').replace('.svg', '')
        return f"{color.title()} Waves"
    elif name.startswith('circles-'):
        color = name.replace('circles-', '').replace('.svg', '')
        return f"{color.title()} Circles"
    elif name.startswith('grid-'):
        color = name.replace('grid-', '').replace('.svg', '')
        return f"{color.title()} Grid"
    elif name.startswith('triangles-'):
        style = name.replace('triangles-', '').replace('.svg', '')
        return f"{style.title()} Triangles"
    elif name.startswith('stripes-'):
        style = name.replace('stripes-', '').replace('.svg', '')
        return f"{style.title()} Stripes"
    elif '-' in name:
        # Convert kebab-case to Title Case
        return name.replace('-', ' ').title()
    else:
        # Just capitalize
        return name.replace('_', ' ').title()

def scan_wallpapers():
    """Scan wallpapers folder and generate artwork entries"""
    wallpapers_dir = "wallpapers"
    
    if not os.path.exists(wallpapers_dir):
        print(f"❌ {wallpapers_dir}/ folder not found")
        return
    
    # Supported formats
    formats = ['*.svg', '*.jpg', '*.jpeg', '*.png', '*.webp']
    
    # Find all images
    image_files = []
    for fmt in formats:
        image_files.extend(glob.glob(os.path.join(wallpapers_dir, fmt)))
        image_files.extend(glob.glob(os.path.join(wallpapers_dir, fmt.upper())))
    
    # Sort for consistent ordering
    image_files.sort()
    
    if not image_files:
        print(f"📁 No images found in {wallpapers_dir}/ folder")
        return
    
    print(f"🔍 Found {len(image_files)} wallpaper(s)")
    
    # Generate artwork entries
    artworks = []
    for i, image_path in enumerate(image_files, 1):
        filename = os.path.basename(image_path)
        title = generate_title(filename)
        resolution = get_image_info(image_path)
        
        artwork = {
            "id": i,
            "title": title,
            "resolution": resolution,
            "thumbnail": f"./wallpapers/{filename}",
            "fullSize": f"./wallpapers/{filename}"
        }
        artworks.append(artwork)
        print(f"✅ {i:2d}. {title} ({resolution})")
    
    return artworks

def generate_javascript(artworks):
    """Generate the JavaScript array code"""
    js_code = "// Gallery data - Auto-generated from wallpapers folder\nconst artworks = [\n"
    
    for i, artwork in enumerate(artworks):
        js_code += f"    {{\n"
        js_code += f"        id: {artwork['id']},\n"
        js_code += f"        title: \"{artwork['title']}\",\n"
        js_code += f"        resolution: \"{artwork['resolution']}\",\n"
        js_code += f"        thumbnail: \"{artwork['thumbnail']}\",\n"
        js_code += f"        fullSize: \"{artwork['fullSize']}\"\n"
        js_code += f"    }}"
        if i < len(artworks) - 1:
            js_code += ","
        js_code += "\n"
    
    js_code += "];\n"
    return js_code

def main():
    print("🎨 Scanning wallpapers folder...")
    artworks = scan_wallpapers()
    
    if not artworks:
        return
    
    # Generate JavaScript code
    js_code = generate_javascript(artworks)
    
    # Save to file
    with open('artworks.js', 'w', encoding='utf-8') as f:
        f.write(js_code)
    
    print(f"\n✨ Generated artworks.js with {len(artworks)} entries")
    print("📝 You can now:")
    print("   1. Replace the artworks array in script.js with the content from artworks.js")
    print("   2. Or include artworks.js as a separate file in your HTML")
    
    # Also save as JSON for other uses
    with open('artworks.json', 'w', encoding='utf-8') as f:
        json.dump(artworks, f, indent=2, ensure_ascii=False)
    
    print("📄 Also saved artworks.json for reference")

if __name__ == "__main__":
    main()