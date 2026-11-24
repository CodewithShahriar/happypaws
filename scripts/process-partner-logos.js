import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images/partners');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const LOGOS = [
  { name: 'partner_lilys_kitchen.png', file: 'media_1795545588785_d3bb88d4.png' },
  { name: 'partner_iams.png', file: 'media_1795545594840_929aa7c3.png' },
  { name: 'partner_purina.png', file: 'media_1795545602968_bad3ef44.png' },
  { name: 'partner_orijen.png', file: 'media_1795545612116_2b389860.png' },
  { name: 'partner_whiskas.png', file: 'media_1795545618505_6093dc01.png' },
  { name: 'partner_acana.png', file: 'media_1795545633373_b2de7510.png' }
];

function removeWhiteBg(rgba, w, h, threshold = 240) {
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

async function run() {
  for (const item of LOGOS) {
    const inPath = 'C:/Users/Abid/.gemini/antigravity/brain/ce593d14-9c7a-41e8-b045-0288738c2cc5/.user_uploaded/' + item.file;
    const { data, info } = await sharp(inPath).raw().toBuffer({ resolveWithObject: true });
    const w = info.width, h = info.height;
    const channels = info.channels;
    const rgba = Buffer.alloc(w * h * 4);

    for (let i = 0; i < w * h; i++) {
      rgba[i * 4] = data[i * channels];
      rgba[i * 4 + 1] = data[i * channels + 1];
      rgba[i * 4 + 2] = data[i * channels + 2];
      rgba[i * 4 + 3] = channels === 4 ? data[i * 4 + 3] : 255;
    }

    removeWhiteBg(rgba, w, h, 240);

    // Also trim transparent borders cleanly
    const processedBuffer = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
      .png()
      .toBuffer();

    await sharp(processedBuffer)
      .trim()
      .png()
      .toFile(path.join(outDir, item.name));

    console.log(`✓ Processed ${item.name}`);
  }
}

run().catch(console.error);
