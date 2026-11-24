import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = path.resolve('public/design-refs');
const outputDir = path.resolve('public/images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function inspectAndProcess() {
  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  console.log('Found files:', files);

  for (const file of files) {
    const filePath = path.join(inputDir, file);
    const metadata = await sharp(filePath).metadata();
    console.log(`${file}: ${metadata.width}x${metadata.height}, orientation: ${metadata.orientation}`);
  }
}

inspectAndProcess().catch(console.error);
