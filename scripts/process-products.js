import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Helper: flood fill background transparency from corners
function removeWhiteBackground(rgba, w, h, threshold = 245) {
  const visited = new Uint8Array(w * h);
  const queue = [];

  function isBg(x, y) {
    if (x < 0 || x >= w || y < 0 || y >= h) return false;
    const idx = (y * w + x) * 4;
    return rgba[idx] >= threshold && rgba[idx + 1] >= threshold && rgba[idx + 2] >= threshold;
  }

  // Seed edges
  for (let x = 0; x < w; x++) {
    if (isBg(x, 0)) queue.push([x, 0]);
    if (isBg(x, h - 1)) queue.push([x, h - 1]);
  }
  for (let y = 0; y < h; y++) {
    if (isBg(0, y)) queue.push([0, y]);
    if (isBg(w - 1, y)) queue.push([w - 1, y]);
  }

  for (const [x, y] of queue) visited[y * w + x] = 1;

  let head = 0;
  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    const idx = (cy * w + cx) * 4;
    rgba[idx + 3] = 0; // Transparent!

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const nPos = ny * w + nx;
        if (!visited[nPos] && isBg(nx, ny)) {
          visited[nPos] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
}

// 1. Process Daily Dental Sticks (media_1795545478222_b43f9051.png)
// It is rotated 90 degrees CCW, so rotate 90 degrees clockwise to make upright!
async function processDentalSticks() {
  const inPath = 'C:/Users/Abid/.gemini/antigravity/brain/ce593d14-9c7a-41e8-b045-0288738c2cc5/.user_uploaded/media_1795545478222_b43f9051.png';
  const rotated = await sharp(inPath).rotate(90).png().toBuffer();
  
  const { data, info } = await sharp(rotated).raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;
  const rgba = Buffer.alloc(w * h * 4);

  // Copy RGB to RGBA
  const channels = info.channels;
  for (let i = 0; i < w * h; i++) {
    rgba[i * 4] = data[i * channels];
    rgba[i * 4 + 1] = data[i * channels + 1];
    rgba[i * 4 + 2] = data[i * channels + 2];
    rgba[i * 4 + 3] = channels === 4 ? data[i * 4 + 3] : 255;
  }

  removeWhiteBackground(rgba, w, h, 240);

  await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile(path.join(outDir, 'prod_dental_sticks.png'));
  console.log('✓ Saved prod_dental_sticks.png', w, 'x', h);
}

// 2. Process Salmon Creamy Puree (media_1795545484106_4d9b62ea.png)
// It is rotated 90 degrees CCW, rotate 90 degrees clockwise to make upright!
async function processCreamyPuree() {
  const inPath = 'C:/Users/Abid/.gemini/antigravity/brain/ce593d14-9c7a-41e8-b045-0288738c2cc5/.user_uploaded/media_1795545484106_4d9b62ea.png';
  const rotated = await sharp(inPath).rotate(90).png().toBuffer();

  const { data, info } = await sharp(rotated).raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;
  const rgba = Buffer.alloc(w * h * 4);
  const channels = info.channels;

  for (let i = 0; i < w * h; i++) {
    rgba[i * 4] = data[i * channels];
    rgba[i * 4 + 1] = data[i * channels + 1];
    rgba[i * 4 + 2] = data[i * channels + 2];
    rgba[i * 4 + 3] = channels === 4 ? data[i * 4 + 3] : 255;
  }

  removeWhiteBackground(rgba, w, h, 240);

  await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile(path.join(outDir, 'prod_creamy_puree.png'));
  console.log('✓ Saved prod_creamy_puree.png', w, 'x', h);
}

// 3. Process Crunchy Chicken Bites (media_1795545428774_a17d5a80.jpg)
// Upright. Has white circular heart badge on top right (x ~ 210 to 260, y ~ 70 to 125).
async function processChickenBites() {
  const inPath = 'C:/Users/Abid/.gemini/antigravity/brain/ce593d14-9c7a-41e8-b045-0288738c2cc5/.user_uploaded/media_1795545428774_a17d5a80.jpg';
  const { data, info } = await sharp(inPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;
  const rgba = Buffer.alloc(w * h * 4);

  for (let i = 0; i < w * h; i++) {
    rgba[i * 4] = data[i * 3];
    rgba[i * 4 + 1] = data[i * 3 + 1];
    rgba[i * 4 + 2] = data[i * 3 + 2];
    rgba[i * 4 + 3] = 255;
  }

  // Remove the heart badge:
  // Sample nearby yellow pouch background color
  const sampleX = 180, sampleY = 90;
  const sampleIdx = (sampleY * w + sampleX) * 4;
  const fillR = rgba[sampleIdx];
  const fillG = rgba[sampleIdx + 1];
  const fillB = rgba[sampleIdx + 2];

  // Circle center for heart badge is roughly (237, 95), radius ~24
  const heartCx = 237, heartCy = 95, heartRadius = 25;
  for (let y = heartCy - heartRadius - 2; y <= heartCy + heartRadius + 2; y++) {
    for (let x = heartCx - heartRadius - 2; x <= heartCx + heartRadius + 2; x++) {
      if (x >= 0 && x < w && y >= 0 && y < h) {
        const dist = Math.hypot(x - heartCx, y - heartCy);
        if (dist <= heartRadius + 1) {
          const idx = (y * w + x) * 4;
          // If inside the yellow pouch boundary (x < 232), paint yellow;
          // if outside the pouch boundary (x >= 232), make it background white (which will then become transparent)!
          if (x <= 232) {
            rgba[idx] = fillR;
            rgba[idx + 1] = fillG;
            rgba[idx + 2] = fillB;
          } else {
            rgba[idx] = 255;
            rgba[idx + 1] = 255;
            rgba[idx + 2] = 255;
          }
        }
      }
    }
  }

  removeWhiteBackground(rgba, w, h, 240);

  await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile(path.join(outDir, 'prod_chicken_bites.png'));
  console.log('✓ Saved prod_chicken_bites.png (heart removed)', w, 'x', h);
}

// 4. Process Eco Tofu Litter (media_1795545457036_66b28b51.jpg)
// Upright. Has white circular heart badge on top right (x ~ 280 to 325, y ~ 25 to 70).
async function processTofuLitter() {
  const inPath = 'C:/Users/Abid/.gemini/antigravity/brain/ce593d14-9c7a-41e8-b045-0288738c2cc5/.user_uploaded/media_1795545457036_66b28b51.jpg';
  const { data, info } = await sharp(inPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width, h = info.height;
  const rgba = Buffer.alloc(w * h * 4);

  for (let i = 0; i < w * h; i++) {
    rgba[i * 4] = data[i * 3];
    rgba[i * 4 + 1] = data[i * 3 + 1];
    rgba[i * 4 + 2] = data[i * 3 + 2];
    rgba[i * 4 + 3] = 255;
  }

  // Sample nearby yellow pouch color
  const sampleX = 250, sampleY = 50;
  const sampleIdx = (sampleY * w + sampleX) * 4;
  const fillR = rgba[sampleIdx];
  const fillG = rgba[sampleIdx + 1];
  const fillB = rgba[sampleIdx + 2];

  // Circle center for heart badge in cat pouch is roughly (302, 45), radius ~23
  const heartCx = 302, heartCy = 45, heartRadius = 24;
  for (let y = heartCy - heartRadius - 2; y <= heartCy + heartRadius + 2; y++) {
    for (let x = heartCx - heartRadius - 2; x <= heartCx + heartRadius + 2; x++) {
      if (x >= 0 && x < w && y >= 0 && y < h) {
        const dist = Math.hypot(x - heartCx, y - heartCy);
        if (dist <= heartRadius + 1) {
          const idx = (y * w + x) * 4;
          if (x <= 298) {
            rgba[idx] = fillR;
            rgba[idx + 1] = fillG;
            rgba[idx + 2] = fillB;
          } else {
            rgba[idx] = 255;
            rgba[idx + 1] = 255;
            rgba[idx + 2] = 255;
          }
        }
      }
    }
  }

  removeWhiteBackground(rgba, w, h, 240);

  await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toFile(path.join(outDir, 'prod_tofu_litter.png'));
  console.log('✓ Saved prod_tofu_litter.png (heart removed)', w, 'x', h);
}

async function run() {
  await processDentalSticks();
  await processCreamyPuree();
  await processChickenBites();
  await processTofuLitter();
  console.log('All 4 products processed successfully!');
}

run().catch(console.error);
