import sharp from 'sharp';
import path from 'path';

const inPath = 'C:/Users/Abid/.gemini/antigravity/brain/ce593d14-9c7a-41e8-b045-0288738c2cc5/.user_uploaded/media_1795543734935_3760b6fd.jpg';
const outPath = 'public/images/hero_transparent.png';

async function makeTransparentBackground() {
  const img = sharp(inPath);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  // Create RGBA buffer
  const rgba = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    rgba[i * 4] = data[i * 3];
    rgba[i * 4 + 1] = data[i * 3 + 1];
    rgba[i * 4 + 2] = data[i * 3 + 2];
    rgba[i * 4 + 3] = 255;
  }

  // Helper to check if pixel is background (near white or the light beige background)
  // Look at the background outside the blobs:
  // Top-left is (255, 255, 255)
  // Top-right outside purple blob is light beige
  function isBackground(x, y) {
    if (x < 0 || x >= w || y < 0 || y >= h) return false;
    const idx = (y * w + x) * 4;
    const r = rgba[idx];
    const g = rgba[idx + 1];
    const b = rgba[idx + 2];

    // Don't flood into the blue bowl (b > 180 and r < 100) or blue ball
    if (b > r + 30) return false;

    // Don't flood into the yellow blob (r > 240, g > 200, b < 160)
    if (r > 230 && g > 190 && b < 180) return false;

    // Don't flood into the purple blob (r > 180, g < 180, b > 210)
    if (b > g + 20) return false;

    // Don't flood into the food bowl or kibble (browns: r < 180)
    if (r < 235 || g < 225 || b < 215) return false;

    // Must be very bright / near white
    return (r >= 240 && g >= 235 && b >= 225);
  }

  // Breadth-first search from top-left, top-right, and left edge
  const visited = new Uint8Array(w * h);
  const queue = [];

  // Seed boundary points
  for (let x = 0; x < w; x++) {
    if (isBackground(x, 0)) queue.push([x, 0]);
  }
  for (let y = 0; y < h; y++) {
    if (isBackground(0, y)) queue.push([0, y]);
    if (isBackground(w - 1, y)) queue.push([w - 1, y]);
  }

  for (const [x, y] of queue) {
    visited[y * w + x] = 1;
  }

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
        if (!visited[nPos] && isBackground(nx, ny)) {
          visited[nPos] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  console.log(`Flooded ${queue.length} background pixels out of ${w * h}`);

  await sharp(rgba, {
    raw: {
      width: w,
      height: h,
      channels: 4
    }
  })
    .png()
    .toFile(outPath);

  console.log(`Saved transparent hero image to ${outPath}`);
}

makeTransparentBackground().catch(console.error);
