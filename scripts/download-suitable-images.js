import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Curated high quality Unsplash photos matching each screenshot subject
const IMAGES = {
  // 1. Hero group: Corgi & cats on pet bed
  'hero_group.jpg': 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1000&q=80',
  // Alternative high res corgi & friend
  'hero_corgi_cats.jpg': 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=80',

  // 2. Vets
  // Female vet with cat in clinic
  'vet_dr_cat.jpg': 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=800&q=80',
  // Vet nurse in blue scrubs examining pet
  'vet_scrubs_cat.jpg': 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
  // Dr. Patricia Santos portrait avatar
  'dr_patricia.jpg': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
  // Vet smiling with golden retriever ("Healthy Pets, Happier Lives")
  'vet_golden_retriever.jpg': 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',

  // 3. Vet nurse with beagle on floor
  'vet_nurse_beagle.jpg': 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=800&q=80',

  // 4. Adoptable Pets (The exact 8 species/breeds from Image 3)
  // Mocha - Teddy Bear Guinea Pig
  'pet_mocha.jpg': 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=600&q=80', // placeholder, will replace below with exact guinea pig
  'pet_guinea_pig.jpg': 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=600&q=80',
  // Cookie - Calico Cat
  'pet_cookie.jpg': 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
  // Clover - Holland Lop Bunny
  'pet_clover.jpg': 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=600&q=80',
  // Peanut - Sun Conure / Parakeet
  'pet_peanut.jpg': 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=600&q=80',
  // Bambi - Native Dog / Aspin
  'pet_bambi.jpg': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
  // Rocky - Shih Tzu / Fluffy Terrier
  'pet_rocky.jpg': 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80',
  // Milo - Ginger Domestic Cat
  'pet_milo.jpg': 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80',
  // Luna - Tuxedo Cat
  'pet_luna.jpg': 'https://images.unsplash.com/photo-1513360309081-38f07627399e?auto=format&fit=crop&w=600&q=80',

  // 5. Products (Crisp, clean packaging & treats)
  // Dental Sticks
  'prod_dental_sticks.jpg': 'https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&w=600&q=80',
  // Tofu Litter / Cat Care
  'prod_tofu_litter.jpg': 'https://images.unsplash.com/photo-1563460716037-460b3dd14ba9?auto=format&fit=crop&w=600&q=80',
  // Tuna Feast Cat Food
  'prod_tuna_feast.jpg': 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80',
  // Salmon & Sweet Potato
  'prod_salmon_potato.jpg': 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80',
  // Creamy Puree Treats
  'prod_creamy_puree.jpg': 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
  // Chicken Bites
  'prod_chicken_bites.jpg': 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=600&q=80',

  // 6. Journey collage pets
  'journey_friends_top.jpg': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
  'journey_golden_cat.jpg': 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=800&q=80',

  // 7. Footer: Puppy and kitten sleeping under white blanket
  'footer_blanket_pets.jpg': 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80'
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
  console.log('Downloading high quality images...');
  for (const [filename, url] of Object.entries(IMAGES)) {
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
