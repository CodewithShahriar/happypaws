import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images/products');

function removeWhiteBackground(rgba, w, h, threshold = 238) {
  const visited = new Uint8Array(w * h);
  const queue = [];

  function isBg(x, y) {
    if (x < 0 || x >= w || y < 0 || y >= h) return false;
    const idx = (y * w + x) * 4;
    return rgba[idx] >= threshold && rgba[idx + 1] >= threshold && rgba[idx + 2] >= threshold;
  }

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
    rgba[idx + 3] = 0;

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

async function processRemaining() {
  const inPath = 'public/design-upright/04_products.jpg';

  // 1. Real Tuna Feast (blue pouch)
  const tunaCrop = await sharp(inPath)
    .extract({ left: 205, top: 368, width: 232, height: 182 })
    .toBuffer();

  const { data: tData, info: tInfo } = await sharp(tunaCrop).raw().toBuffer({ resolveWithObject: true });
  const tw = tInfo.width, th = tInfo.height;
  const tRgba = Buffer.alloc(tw * th * 4);
  for (let i = 0; i < tw * th; i++) {
    tRgba[i * 4] = tData[i * 3];
    tRgba[i * 4 + 1] = tData[i * 3 + 1];
    tRgba[i * 4 + 2] = tData[i * 3 + 2];
    tRgba[i * 4 + 3] = 255;
  }

  // Remove heart on tuna (top left around x: 60, y: 15)
  for (let y = 0; y < 35; y++) {
    for (let x = 50; x < 95; x++) {
      const idx = (y * tw + x) * 4;
      tRgba[idx] = 255;
      tRgba[idx + 1] = 255;
      tRgba[idx + 2] = 255;
    }
  }
  removeWhiteBackground(tRgba, tw, th, 230);
  await sharp(tRgba, { raw: { width: tw, height: th, channels: 4 } })
    .png()
    .toFile(path.join(outDir, 'prod_tuna_feast.png'));
  console.log('✓ Saved prod_tuna_feast.png');

  // 2. Salmon & Sweet Potato (purple pouch)
  // Let's also check if Salmon & sweet potato can be cleanly represented:
  const salmonCrop = await sharp(inPath)
    .extract({ left: 55, top: 375, width: 140, height: 175 })
    .toBuffer();

  const { data: sData, info: sInfo } = await sharp(salmonCrop).raw().toBuffer({ resolveWithObject: true });
  const sw = sInfo.width, sh = sInfo.height;
  const sRgba = Buffer.alloc(sw * sh * 4);
  for (let i = 0; i < sw * sh; i++) {
    sRgba[i * 4] = sData[i * 3];
    sRgba[i * 4 + 1] = sData[i * 3 + 1];
    sRgba[i * 4 + 2] = sData[i * 3 + 2];
    sRgba[i * 4 + 3] = 255;
  }
  removeWhiteBackground(sRgba, sw, sh, 230);
  await sharp(sRgba, { raw: { width: sw, height: sh, channels: 4 } })
    .png()
    .toFile(path.join(outDir, 'prod_salmon_potato.png'));
  console.log('✓ Saved prod_salmon_potato.png');
}

processRemaining().catch(console.error);
