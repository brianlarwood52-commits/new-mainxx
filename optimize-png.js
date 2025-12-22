const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

async function optimizePNG(inputPath, outputPath, maxWidth = 1920, quality = 90) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    console.log(`Optimizing ${path.basename(inputPath)} (${(originalSize / 1024).toFixed(2)} KB)...`);
    
    const metadata = await sharp(inputPath).metadata();
    console.log(`  Original dimensions: ${metadata.width}x${metadata.height}`);
    
    await sharp(inputPath)
      .resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .png({
        quality: quality,
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    const newMetadata = await sharp(outputPath).metadata();
    console.log(`  New dimensions: ${newMetadata.width}x${newMetadata.height}`);
    console.log(`  ✓ Optimized: ${(newSize / 1024).toFixed(2)} KB (${reduction}% reduction)\n`);
    
    return { originalSize, newSize, reduction };
  } catch (error) {
    console.error(`  ✗ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizePNGFiles() {
  const files = ['campfire-foreground.png', 'campfire-sky.png'];
  
  console.log('Checking for PNG files to optimize...\n');
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠ ${file} not found in ${imagesDir}`);
      console.log(`  Please ensure this file exists before optimizing.\n`);
      continue;
    }
    
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    const outputPath = path.join(imagesDir, `${name}_optimized${ext}`);
    
    // Create backup first
    const backupPath = path.join(imagesDir, `${name}_backup${ext}`);
    fs.copyFileSync(inputPath, backupPath);
    console.log(`  Created backup: ${name}_backup${ext}`);
    
    const result = await optimizePNG(inputPath, outputPath);
    
    if (result) {
      totalOriginal += result.originalSize;
      totalOptimized += result.newSize;
      
      // Replace original with optimized
      fs.renameSync(outputPath, inputPath);
      console.log(`  ✓ Replaced original with optimized version\n`);
    }
  }
  
  if (totalOriginal > 0) {
    console.log('\n=== Summary ===');
    console.log(`Total original size: ${(totalOriginal / 1024).toFixed(2)} KB`);
    console.log(`Total optimized size: ${(totalOptimized / 1024).toFixed(2)} KB`);
    console.log(`Total reduction: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
    console.log(`\nBackups saved with _backup suffix. You can delete them after verifying.`);
  }
}

optimizePNGFiles().catch(console.error);
