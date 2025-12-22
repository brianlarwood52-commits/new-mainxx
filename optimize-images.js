const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

async function optimizeImage(inputPath, outputPath, maxWidth = 1600, quality = 80) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    
    console.log(`Optimizing ${path.basename(inputPath)} (${(originalSize / 1024).toFixed(2)} KB)...`);
    
    await sharp(inputPath)
      .resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({
        quality: quality,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(`  ✓ Optimized: ${(newSize / 1024).toFixed(2)} KB (${reduction}% reduction)`);
    
    return { originalSize, newSize, reduction };
  } catch (error) {
    console.error(`  ✗ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function optimizeAllImages() {
  const files = fs.readdirSync(imagesDir).filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );
  
  console.log(`Found ${files.length} images to optimize\n`);
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    const outputPath = path.join(imagesDir, `${name}_optimized${ext}`);
    
    // Create backup first
    const backupPath = path.join(imagesDir, `${name}_backup${ext}`);
    fs.copyFileSync(inputPath, backupPath);
    console.log(`  Created backup: ${name}_backup${ext}`);
    
    const result = await optimizeImage(inputPath, outputPath);
    
    if (result) {
      totalOriginal += result.originalSize;
      totalOptimized += result.newSize;
      
      // Replace original with optimized
      fs.renameSync(outputPath, inputPath);
      console.log(`  ✓ Replaced original with optimized version\n`);
    }
  }
  
  console.log('\n=== Summary ===');
  console.log(`Total original size: ${(totalOriginal / 1024).toFixed(2)} KB`);
  console.log(`Total optimized size: ${(totalOptimized / 1024).toFixed(2)} KB`);
  console.log(`Total reduction: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
  console.log(`\nBackups saved with _backup suffix. You can delete them after verifying.`);
}

optimizeAllImages().catch(console.error);
