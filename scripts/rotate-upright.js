import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = path.resolve('public/design-refs');
const uprightDir = path.resolve('public/design-upright');

if (!fs.existsSync(uprightDir)) {
  fs.mkdirSync(uprightDir, { recursive: true });
}

async function rotateUpright() {
  const files = [
    { name: '01_hero.jpg', src: 'media_1795540454961_058d832d.jpg', rotate: 0 },
    { name: '02_about_solutions.jpg', src: 'media_1795540454917_9c3fe605.jpg', rotate: 90 },
    { name: '03_services_shop.jpg', src: 'media_1795540454866_178c37f2.jpg', rotate: 90 },
    { name: '04_products.jpg', src: 'media_1795540454925_6914180c.jpg', rotate: 90 },
    { name: '05_adoptable_pets.jpg', src: 'media_1795540454925_353e4804.jpg', rotate: 90 },
    { name: '06_journey_medical.jpg', src: 'media_1795540454914_de288b41.jpg', rotate: 90 },
    { name: '07_footer.jpg', src: 'media_1795540454917_dae32b75.jpg', rotate: 90 }
  ];

  for (const item of files) {
    const inPath = path.join(inputDir, item.src);
    const outPath = path.join(uprightDir, item.name);
    let s = sharp(inPath);
    if (item.rotate !== 0) {
      s = s.rotate(item.rotate);
    }
    const meta = await s.jpeg({ quality: 95 }).toFile(outPath);
    console.log(`Saved ${item.name}: ${meta.width}x${meta.height}`);
  }
}

rotateUpright().catch(console.error);
