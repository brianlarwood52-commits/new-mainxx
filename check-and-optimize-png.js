const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

async function checkAndOptimizePNG(filename, maxWidth = 1920, quality = 85) {
  const inputPath = path.join(imagesDir, filename);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`❌ ${filename} not found in ${imagesDir}`);
    return null;
  }
  
  const stats = fs.statSync(inputPath);
  const originalSize = stats.size;
  const sizeKB = (originalSize / 1024).toFixed(2);
  const sizeMB = (originalSize / (1024 * 1024)).toFixed(2);
  
  console.log(`\n📸 ${filename}`);
  console.log(`   Current size: ${sizeKB} KB (${sizeMB} MB)`);
  
  if (originalSize > 500 * 1024) { // Larger than 500KB
    console.log(`   ⚠️  WARNING: File is larger than 500KB - should be optimized!`);
  }
  
  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`   Dimensions: ${metadata.width}x${metadata.height}`);
    console.log(`   Format: ${metadata.format}`);
    
    if (originalSize > 300 * 1024 || metadata.width > 2000) {
      console.log(`   🔧 Optimizing...`);
      
      const ext = path.extname(filename);
      const name = path.basename(filename, ext);
      const outputPath = path.join(imagesDir, `${name}_optimized${ext}`);
      
      // Create backup
      const backupPath = path.join(imagesDir, `${name}_backup${ext}`);
      fs.copyFileSync(inputPath, backupPath);
      console.log(`   📦 Backup created: ${name}_backup${ext}`);
      
      // Optimize
      await sharp(inputPath)
        .resize(maxWidth, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .png({
          quality: quality,
          compressionLevel: 9,
          adaptiveFiltering: true,
          palette: true // Use palette for better compression if possible
        })
        .toFile(outputPath);
      
      const newStats = fs.statSync(outputPath);
      const newSize = newStats.size;
      const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
      const newSizeKB = (newSize / 1024).toFixed(2);
      
      console.log(`   ✅ Optimized: ${newSizeKB} KB (${reduction}% reduction)`);
      
      // Replace original
      fs.renameSync(outputPath, inputPath);
      console.log(`   ✅ Replaced original with optimized version`);
      
      return { originalSize, newSize, reduction };
    } else {
      console.log(`   ✓ File size is reasonable, no optimization needed`);
      return null;
    }
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('🔍 Checking campfire PNG files...\n');
  console.log(`Looking in: ${imagesDir}\n`);
  
  const files = ['campfire-foreground.png', 'campfire-sky.png'];
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const file of files) {
    const result = await checkAndOptimizePNG(file);
    if (result) {
      totalOriginal += result.originalSize;
      totalOptimized += result.newSize;
    }
  }
  
  if (totalOriginal > 0) {
    console.log('\n' + '='.repeat(50));
    console.log('📊 SUMMARY');
    console.log('='.repeat(50));
    console.log(`Total original: ${(totalOriginal / 1024).toFixed(2)} KB`);
    console.log(`Total optimized: ${(totalOptimized / 1024).toFixed(2)} KB`);
    console.log(`Total reduction: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
    console.log('\n💡 Tip: Delete _backup files after verifying the optimized images work correctly.');
  } else if (totalOriginal === 0) {
    console.log('\n💡 To optimize these files:');
    console.log('   1. Place campfire-foreground.png and campfire-sky.png in public/images/');
    console.log('   2. Run this script again: node check-and-optimize-png.js');
  }
}

main().catch(console.error);
