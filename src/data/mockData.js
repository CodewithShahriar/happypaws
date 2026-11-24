export const BRAND_PARTNERS = [
  { name: "Lily's Kitchen", tag: "NATURAL RECIPES" },
  { name: "IAMS", tag: "VET RECOMMENDED" },
  { name: "PURINA", tag: "YOUR PET, OUR PASSION" },
  { name: "Orijen", tag: "NOURISH AS NATURE INTENDED" },
  { name: "whiskas", tag: "CAT LOVED" },
  { name: "Eukanuba", tag: "EXTRAORDINARY POWER" },
  { name: "ACANA", tag: "FREE-RANGE & BIOLOGICALLY APPROPRIATE" }
];

export const PILLARS = [
  {
    title: "Verified Medical Standards",
    desc: "Every rescue pet undergoes a rigorous veterinary exam, spay/neuter procedure, and complete anti-rabies vaccination before entering your home. We provide verified medical clearances so you can welcome your new companion with total peace of mind.",
    icon: "ShieldCheck"
  },
  {
    title: "Compassionate Pet Matching",
    subtitle: "Tailored Household Pairing",
    desc: "Our intelligent screening process evaluates home environments, activity levels, and condo guidelines across Metro Manila. We pair rescue pets with compatible adopters to ensure long-term harmony and lifelong bonds.",
    icon: "HeartHandshake"
  },
  {
    title: "24/7 Support Hotline",
    subtitle: "Round-The-Clock Guidance",
    desc: "Our veterinary advisory team and care specialists are available 24/7 to answer health, nutrition, or behavioral questions. You never have to navigate post-adoption care or transition challenges alone.",
    icon: "Headphones"
  },
  {
    title: "Transparent Digital Histories",
    desc: "Access your pet's complete health logs, deworming schedules, and treatment histories anytime through our digital portal. We ensure full medical transparency from the moment of rescue to final adoption.",
    icon: "FileText"
  }
];

export const ABOUT_VALUES = [
  {
    title: "Digitized Matching",
    desc: "Connecting rescue pets with pre-screened adopters using intelligent lifestyle matching algorithms tailored for modern homes.",
    icon: "SearchCode"
  },
  {
    title: "Healthcare First",
    desc: "Ensuring every pet undergoes complete health checkups, spay/neuter surgeries, and essential vaccinations before adoption.",
    icon: "Stethoscope"
  },
  {
    title: "Shelter Empowerment",
    desc: "Providing free digital inventory management and adoption platforms to non-profit animal welfare organizations nationwide.",
    icon: "Building2"
  },
  {
    title: "Advocacy & Education",
    desc: "Promoting responsible pet ownership, humane stray population control, and anti-cruelty education across local communities.",
    icon: "BookOpen"
  }
];

export const SERVICES = [
  {
    id: "food-medication",
    title: "Food And Medication",
    description: "Specialized clinical diets, prescription refill deliveries, and custom meal plans tailored for recovery and long-term wellness.",
    badge: "Clinical Nutrition",
    icon: "Pill",
    features: [
      "Custom vet-approved dietary charts",
      "Automatic scheduled prescription refills",
      "Therapeutic renal, urinary & allergy foods",
      "Doorstep cold-chain temperature delivery"
    ]
  },
  {
    id: "clinical-care",
    title: "Veterinary Clinical Care",
    description: "Full-service animal clinic equipped for general health exams, diagnostics, radiology, soft-tissue surgeries, and vaccinations.",
    badge: "Licensed Vets",
    icon: "Stethoscope",
    features: [
      "Comprehensive diagnostic blood tests & X-ray",
      "Preventive vaccinations & parasite screening",
      "Gentle dental scaling & extraction",
      "Spay, neuter and minor surgical procedures"
    ]
  },
  {
    id: "hygiene-spa",
    title: "Pet Hygiene Spa",
    description: "Stress-free grooming using hypoallergenic botanical shampoos, relaxing coat therapy, sanitary trimmings, and nail care.",
    badge: "Gentle Care",
    icon: "Sparkles",
    features: [
      "Warm soothing hydrotherapy bath",
      "Breed-standard and summer teddy cuts",
      "Deep ear flush & paw pad balm conditioning",
      "Fear-free handling for shy and nervous pets"
    ]
  },
  {
    id: "smart-coaching",
    title: "Smart Pet Coaching",
    description: "Positive-reinforcement training designed to build strong communication, curb separation anxiety, and master leash manners.",
    badge: "Certified Trainers",
    icon: "Award",
    features: [
      "Private 1-on-1 home or virtual sessions",
      "Rescue dog desensitization & socialization",
      "Potty training & puppy milestone roadmap",
      "Barking, biting & leash pulling solutions"
    ]
  },
  {
    id: "cozy-hotel",
    title: "Cozy Pet Hotel",
    description: "Safe, climate-controlled boarding suites with 24/7 webcams, individualized daily playtime, and on-call veterinary supervision.",
    badge: "5-Star Stay",
    icon: "Home",
    features: [
      "Personalized 24/7 HD camera access for parents",
      "Separate noise-isolated dog and cat suites",
      "Custom feeding routines & medication administering",
      "Daily video updates & play sessions"
    ]
  }
];

export const PRODUCTS = [
  {
    id: "prod-1",
    name: "Pawsy Daily Dental Sticks",
    brand: "Pawsy Pet Care",
    category: "Dog Care",
    price: 295,
    currency: "₱",
    weight: "190 g",
    description: "Chewy daily dental hygiene sticks that reduce tartar buildup and freshen breath naturally.",
    tag: "Dental Care",
    rating: 4.9,
    reviewsCount: 184,
    badgeColor: "bg-sky-100 text-sky-800",
    image: "/images/prod_1_dental_sticks.png",
    inStock: true
  },
  {
    id: "prod-2",
    name: "Pawsy Real Tuna Feast",
    brand: "Pawsy Pet Care",
    category: "Cat Food",
    price: 745,
    currency: "₱",
    weight: "1.2 kg",
    description: "High-protein grain-free cat food crafted with wild-caught Pacific tuna and taurine.",
    tag: "High Protein",
    rating: 5.0,
    reviewsCount: 215,
    badgeColor: "bg-blue-100 text-blue-800",
    image: "/images/prod_2_tuna_feast.png",
    inStock: true
  },
  {
    id: "prod-3",
    name: "Pawsy Salmon Creamy Puree",
    brand: "Pawsy Pet Care",
    category: "Cat Treats",
    price: 45,
    currency: "₱",
    weight: "95 g",
    description: "Omega-3 rich lickable salmon puree treats. Perfect for bonding, hydration, and supplements.",
    tag: "Irresistible Flavor",
    rating: 4.9,
    reviewsCount: 320,
    badgeColor: "bg-purple-100 text-purple-800",
    image: "/images/prod_3_salmon_puree.png",
    inStock: true
  },
  {
    id: "prod-4",
    name: "Pawsy Eco Tofu Litter",
    brand: "Pawsy Pet Care",
    category: "Cat Care",
    price: 240,
    currency: "₱",
    weight: "6 L",
    description: "100% flushable, dust-free plant-based tofu cat litter with fast clumping technology.",
    tag: "Eco Friendly",
    rating: 4.9,
    reviewsCount: 142,
    badgeColor: "bg-emerald-100 text-emerald-800",
    image: "/images/prod_4_cat_litter.png",
    inStock: true
  },
  {
    id: "prod-5",
    name: "Pawsy Salmon & Complete Nutrition",
    brand: "Pawsy Pet Care",
    category: "Dog Food",
    price: 890,
    currency: "₱",
    weight: "1.5 kg",
    description: "Complete nutrition dry dog food formulated with fresh salmon and active prebiotics.",
    tag: "Complete Nutrition",
    rating: 4.9,
    reviewsCount: 167,
    badgeColor: "bg-purple-100 text-purple-800",
    image: "/images/prod_5_salmon_dog.png",
    inStock: true
  },
  {
    id: "prod-6",
    name: "Pawsy Crunchy Bites",
    brand: "Pawsy Pet Care",
    category: "Dog Food",
    price: 550,
    currency: "₱",
    weight: "1.2 kg",
    description: "All-natural dehydrated crunchy dog food packed with vitamins, calcium, and real meat.",
    tag: "Grain Free",
    rating: 4.8,
    reviewsCount: 98,
    badgeColor: "bg-amber-100 text-amber-800",
    image: "/images/prod_6_corgi_crunchy.png",
    inStock: true
  }
];

export const PETS = [
  {
    id: "pet-milo",
    name: "Milo",
    breed: "Domestic Short Hair (Puspin)",
    species: "Cat",
    gender: "Male",
    age: "1 Year",
    location: "Alabang Sanctuary",
    personality: "Golden-hearted ginger explorer with huge purrs and great manners.",
    vaccinated: true,
    neutered: true,
    image: "/images/pet_milo.jpg",
    colorBg: "bg-orange-50",
    ribbonColor: "bg-blue-300"
  },
  {
    id: "pet-barky",
    name: "Barky",
    breed: "Native Mixed Breed (Aspin Dog)",
    species: "Dog",
    gender: "Male",
    age: "1.5 Years",
    location: "San Pedro Shelter",
    personality: "Super smart, loyal walking buddy who knows hand commands and loves humans.",
    vaccinated: true,
    neutered: true,
    image: "/images/pet_bambi.jpg",
    colorBg: "bg-amber-50",
    ribbonColor: "bg-purple-400"
  },
  {
    id: "pet-clover",
    name: "Clover",
    breed: "Holland Lop Bunny",
    species: "Small Pet",
    gender: "Male",
    age: "8 Months",
    location: "Makati Foster Care",
    personality: "Quiet cuddler with velvety floppy ears who enjoys doing joyful bunny binkies.",
    vaccinated: true,
    neutered: true,
    image: "/images/pet_clover.jpg",
    colorBg: "bg-sky-50",
    ribbonColor: "bg-amber-400"
  },
  {
    id: "pet-mocha",
    name: "Mocha",
    breed: "Teddy Bear Guinea Pig",
    species: "Small Pet",
    gender: "Female",
    age: "6 Months",
    location: "Quezon City Shelter",
    personality: "Calm, gentle squeaker, loves organic parsley, fresh hay and chin scritches.",
    vaccinated: true,
    neutered: true,
    image: "/images/pet_mocha.jpg",
    colorBg: "bg-purple-50",
    ribbonColor: "bg-sky-400"
  },
  {
    id: "pet-luna",
    name: "Luna",
    breed: "Tuxedo Domestic Cat (Puspin)",
    species: "Cat",
    gender: "Female",
    age: "10 Months",
    location: "San Juan Foster",
    personality: "Dressed to impress in her tuxedo coat, loves head boops and cozy blankets.",
    vaccinated: true,
    neutered: true,
    image: "/images/pet_luna.jpg",
    colorBg: "bg-purple-50",
    ribbonColor: "bg-purple-400"
  },
  {
    id: "pet-rocky",
    name: "Rocky",
    breed: "Shih Tzu Mix (Small Rescue)",
    species: "Dog",
    gender: "Male",
    age: "2 Years",
    location: "Taguig Rescue Hub",
    personality: "Charming little gentleman who enjoys belly rubs and is great with kids.",
    vaccinated: true,
    neutered: true,
    image: "/images/pet_rocky.jpg",
    colorBg: "bg-sky-50",
    ribbonColor: "bg-yellow-400"
  },
  {
    id: "pet-peanut",
    name: "Peanut",
    breed: "Sun Conure (Rescue Parakeet)",
    species: "Bird",
    gender: "Unknown",
    age: "2 Years",
    location: "Pasig Aviary Rescue",
    personality: "Social, colorful sweet talker who likes dancing on shoulders and whistling tunes.",
    vaccinated: true,
    neutered: false,
    image: "/images/pet_peanut.jpg",
    colorBg: "bg-purple-50",
    ribbonColor: "bg-blue-400"
  },
  {
    id: "pet-cookie",
    name: "Cookie",
    breed: "Calico Domestic Cat (Puspin)",
    species: "Cat",
    gender: "Female",
    age: "1 Year",
    location: "Mandaluyong Center",
    personality: "Playful acrobat who loves feather toys, window birdwatching and warm laps.",
    vaccinated: true,
    neutered: true,
    image: "/images/pet_cookie.jpg",
    colorBg: "bg-yellow-50",
    ribbonColor: "bg-yellow-400"
  }
];
