# OpenGraph Image Generation

This folder contains the OG image for social media link previews.

## Files

- `og-image.svg` - Source SVG file (1200x630)
- `og-image.png` - PNG version for social media (to be generated)
- `convert-og-image.html` - Browser-based converter tool

## How to Generate PNG from SVG

### Method 1: Using Browser (Recommended - No Installation Required)

1. Start the dev server: `npm run dev`
2. Open http://localhost:8080/convert-og-image.html in your browser
3. Click the "Download as PNG" button
4. Save the file as `og-image.png` in the `public` folder

### Method 2: Using Online Tool

1. Go to https://cloudconvert.com/svg-to-png
2. Upload `public/og-image.svg`
3. Set width to 1200px and height to 630px
4. Download and save as `og-image.png` in the `public` folder

### Method 3: Using Command Line (Requires ImageMagick)

```bash
# Install ImageMagick first (Mac)
brew install imagemagick

# Convert SVG to PNG
convert public/og-image.svg -resize 1200x630 public/og-image.png
```

### Method 4: Using Node.js (Requires sharp)

```bash
# Install sharp
npm install sharp --save-dev

# Run the generator script
node scripts/generate-og-image.js
```

## Updating the OG Image

After generating `og-image.png`:

1. Verify the image looks correct (1200x630 pixels)
2. Build and deploy: `npm run build`
3. The image will be automatically included in the build

## Testing

Test your OG image using these tools:

- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

## Specifications

- **Dimensions**: 1200 x 630 pixels (recommended by all platforms)
- **Format**: PNG (best compatibility) or SVG (modern browsers)
- **File Size**: Should be under 5MB (preferably under 1MB)
- **Design**: Dark theme with C4 branding and Google Cloud gradient

## Current Status

- ✅ SVG source file created
- ⏳ PNG version needs to be generated
- ⏳ Update index.html to use PNG once generated

Once PNG is generated, update `index.html`:

```html
<meta property="og:image" content="https://c4.cloud/og-image.png" />
<meta name="twitter:image" content="https://c4.cloud/og-image.png" />
```
