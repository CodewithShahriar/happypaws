import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/images');

const FIX_IMAGES = {
  // Luna - Black & White Tuxedo Cat
  'pet_luna.jpg': 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=600&q=80',
  // Tofu litter / eco cat litter
  'prod_tofu_litter.jpg': 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=600&q=80',
  // Guinea pig (Mocha)
  'pet_mocha.jpg': 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80',
  // Sleeping puppy & kitten under blanket (Footer)
  'footer_sleeping_blanket.jpg': 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80',
  // Hero corgi & friends
  'hero_fluffy_friends.jpg': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80',
  // Guinea pig alternative
  'pet_guinea_fluffy.jpg': 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80'
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const [filename, url] of Object.entries(FIX_IMAGES)) {
    const dest = path.join(outDir, filename);
    try {
      await download(url, dest);
      console.log(`✓ Downloaded ${filename}`);
    } catch (err) {
      console.error(`✗ Error downloading ${filename}:`, err.message);
    }
  }
}

run();
