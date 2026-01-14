/**
 * Generate OG Image PNG from SVG
 *
 * This script creates a PNG version of the OG image for better social media compatibility.
 *
 * To use:
 * 1. npm install sharp (if not already installed)
 * 2. node scripts/generate-og-image.js
 *
 * Or simply open public/convert-og-image.html in a browser and download the PNG
 */

const fs = require('fs');
const path = require('path');

console.log('OG Image Generator');
console.log('==================');
console.log('');
console.log('To generate og-image.png from og-image.svg:');
console.log('');
console.log('Option 1 (Recommended - Using Browser):');
console.log('1. Open http://localhost:8080/convert-og-image.html in your browser');
console.log('2. Click "Download as PNG" button');
console.log('3. Save the file as og-image.png in the public folder');
console.log('');
console.log('Option 2 (Using sharp - requires installation):');
console.log('1. npm install sharp');
console.log('2. Uncomment the code below and run this script again');
console.log('');

// Uncomment this code after installing sharp:
/*
const sharp = require('sharp');

const svgPath = path.join(__dirname, '../public/og-image.svg');
const pngPath = path.join(__dirname, '../public/og-image.png');

sharp(svgPath)
  .resize(1200, 630)
  .png()
  .toFile(pngPath)
  .then(() => {
    console.log('✓ og-image.png generated successfully!');
  })
  .catch(err => {
    console.error('Error generating PNG:', err);
  });
*/

// Check if SVG exists
const svgPath = path.join(__dirname, '../public/og-image.svg');
if (fs.existsSync(svgPath)) {
  console.log('✓ og-image.svg exists');
} else {
  console.log('✗ og-image.svg not found');
}

// Check if PNG exists
const pngPath = path.join(__dirname, '../public/og-image.png');
if (fs.existsSync(pngPath)) {
  console.log('✓ og-image.png already exists');
  console.log('');
  console.log('You can now use og-image.png in your meta tags!');
} else {
  console.log('✗ og-image.png not yet generated');
  console.log('');
  console.log('Please generate it using one of the options above.');
}
