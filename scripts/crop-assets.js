import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const uprightDir = path.resolve('public/design-upright');
const assetsDir = path.resolve('public/assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

async function safeExtract(file, rect, outFile) {
  try {
    const meta = await sharp(path.join(uprightDir, file)).metadata();
    const left = Math.max(0, Math.min(rect.left, meta.width - 10));
    const top = Math.max(0, Math.min(rect.top, meta.height - 10));
    const width = Math.min(rect.width, meta.width - left);
    const height = Math.min(rect.height, meta.height - top);

    if (width > 20 && height > 20) {
      await sharp(path.join(uprightDir, file))
        .extract({ left, top, width, height })
        .toFile(path.join(assetsDir, outFile));
      console.log(`Cropped ${outFile} (${width}x${height})`);
    }
  } catch (err) {
    console.warn(`Could not crop ${outFile}:`, err.message);
  }
}

async function cropAssets() {
  // 1. Hero pets
  await safeExtract('01_hero.jpg', { left: 290, top: 125, width: 425, height: 430 }, 'hero_pets.png');

  // 2. Vets
  await safeExtract('02_about_solutions.jpg', { left: 30, top: 55, width: 350, height: 360 }, 'vet_dr_cat.png');
  await safeExtract('02_about_solutions.jpg', { left: 590, top: 55, width: 280, height: 350 }, 'vet_blue_scrubs.png');
  await safeExtract('02_about_solutions.jpg', { left: 375, top: 680, width: 55, height: 55 }, 'dr_patricia_avatar.png');
  await safeExtract('03_services_shop.jpg', { left: 35, top: 565, width: 205, height: 215 }, 'vet_golden_retriever.png');

  // 3. Products from 04_products.jpg (870x772)
  // Let's crop cards
  // Col 1 (Pawsy Eco Tofu Litter, Salmon Sweet Potato, Crunchy Chicken Bites)
  await safeExtract('04_products.jpg', { left: 55, top: 600, width: 135, height: 165 }, 'product_tofu_litter.png');
  await safeExtract('04_products.jpg', { left: 55, top: 350, width: 135, height: 170 }, 'product_salmon_sweet_potato.png');
  await safeExtract('04_products.jpg', { left: 55, top: 75, width: 135, height: 175 }, 'product_chicken_bites.png');

  // Col 2 (Daily Dental Sticks, Real Tuna Feast, Salmon Creamy Puree)
  await safeExtract('04_products.jpg', { left: 195, top: 645, width: 245, height: 120 }, 'product_dental_sticks.png');
  await safeExtract('04_products.jpg', { left: 195, top: 365, width: 245, height: 180 }, 'product_real_tuna.png');
  await safeExtract('04_products.jpg', { left: 195, top: 80, width: 245, height: 185 }, 'product_salmon_puree.png');

  // 4. Adoptable Pets from 05_adoptable_pets.jpg (847x787)
  const pets = [
    { name: 'pet_mocha.png', rect: { left: 45, top: 55, width: 335, height: 180 } },
    { name: 'pet_cookie.png', rect: { left: 410, top: 55, width: 335, height: 180 } },
    { name: 'pet_clover.png', rect: { left: 45, top: 265, width: 335, height: 180 } },
    { name: 'pet_peanut.png', rect: { left: 410, top: 265, width: 335, height: 180 } },
    { name: 'pet_bambi.png', rect: { left: 45, top: 475, width: 335, height: 180 } },
    { name: 'pet_rocky.png', rect: { left: 410, top: 475, width: 335, height: 180 } },
    { name: 'pet_milo.png', rect: { left: 45, top: 685, width: 335, height: 95 } },
    { name: 'pet_luna.png', rect: { left: 410, top: 685, width: 335, height: 95 } },
  ];

  for (const pet of pets) {
    await safeExtract('05_adoptable_pets.jpg', pet.rect, pet.name);
    // Also crop the pet face/portrait
    await safeExtract('05_adoptable_pets.jpg', {
      left: pet.rect.left + 5,
      top: pet.rect.top + 5,
      width: 175,
      height: Math.min(160, pet.rect.height - 10)
    }, `portrait_${pet.name}`);
  }

  // 5. Journey pets and vet with beagle
  await safeExtract('06_journey_medical.jpg', { left: 495, top: 0, width: 340, height: 310 }, 'journey_pets_top.png');
  await safeExtract('06_journey_medical.jpg', { left: 580, top: 580, width: 255, height: 200 }, 'journey_pets_bottom.png');
  await safeExtract('06_journey_medical.jpg', { left: 0, top: 315, width: 390, height: 330 }, 'vet_nurse_beagle.png');

  // 6. Footer blanket pets
  await safeExtract('07_footer.jpg', { left: 0, top: 0, width: 440, height: 780 }, 'footer_blanket_pets.png');
}

cropAssets().catch(console.error);
