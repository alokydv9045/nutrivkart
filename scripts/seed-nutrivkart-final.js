const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected for seeding final PDFs with Deep Enrichment'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    images: { type: [String], default: [] },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    banner: String,
    sizes: { type: [String], default: [] },
    colors: { type: [String], default: [] },
    packSize: { type: String },
    packSize2: { type: String },
    price2: { type: Number },
    servings: { type: String },
    isGSTIncluded: { type: Boolean, default: true },
    priceNote: { type: String },
    priceBadge: { type: String, enum: ['new-price', 'price-updated', 'coming-soon', 'sale'] },
    checkoutMode: { type: String, enum: ['cart', 'enquiry'], default: 'cart' },
    certifications: { type: Array },
    subcategory: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const getProductImage = (category, name) => {
  const lowerName = name.toLowerCase();
  
  if (category === 'Mass & Weight Gainers') {
    if (lowerName.includes('super gainer')) return '/images/products/mb super gainer.jpeg';
    if (lowerName.includes('muscle gainer') || lowerName.includes('muscle mass')) return '/images/products/musle gainer.jpeg';
    if (lowerName.includes('weight gainer') || lowerName.includes('weight gain')) {
      return Math.random() > 0.5 ? '/images/products/weight gainer.jpeg' : '/images/products/weight gainer 2.jpeg';
    }
    if (lowerName.includes('mass')) {
      return Math.random() > 0.5 ? '/images/products/mass.jpeg' : '/images/products/mass gainer.jpeg';
    }
    return '/images/products/gainer.png';
  }

  if (category === 'Ayurvedic & Unani') {
    if (lowerName.includes('wellness')) return '/images/products/spa-arrangement-with-cremes.jpg';
    return '/images/products/ayurvedic.png';
  }

  if (category === 'Whey Protein') return '/images/products/whey.png';
  if (['BCAA', 'Pre-Workout', 'Creatine', 'Wellness & Vitamins'].includes(category)) return '/images/products/vitamin.png';
  
  return '/images/products/placeholder.jpg';
};

const createProduct = (name, category, price, brand, packSize, description, otherFields = {}) => ({
  name,
  slug: slugify(name + '-' + brand),
  category,
  image: getProductImage(category, name),
  price,
  brand,
  packSize,
  rating: (Math.random() * 0.5 + 4.4).toFixed(1), // Random rating between 4.4 and 4.9
  numReviews: Math.floor(Math.random() * 500) + 50,
  countInStock: Math.floor(Math.random() * 100) + 10,
  description,
  checkoutMode: 'cart',
  isFeatured: Math.random() > 0.85,
  ...otherFields,
});

const productsData = [
  // --- WHEY PROTEIN (PDF 1) ---
  createProduct('MuscleBlaze Raw Whey', 'Whey Protein', 3349, 'MuscleBlaze', '1 kg', 
    '100% Unflavored Raw Whey Protein Concentrate. Yields 24g protein and 5.2g BCAA per serving. No added sugar or flavors.', 
    { price2: 6549, packSize2: '2 kg', certifications: ['Labdoor Certified', 'NABL Approved'] }),
  createProduct('MuscleBlaze Biozyme Performance', 'Whey Protein', 3149, 'MuscleBlaze', '1 kg', 
    'Clinically tested for 50% higher protein absorption and 60% higher BCAA absorption. Features enhanced Biozyme technology for zero stomach distress.', 
    { price2: 6449, packSize2: '2 kg', certifications: ['Informed Choice UK', 'Clinically Tested'] }),
  createProduct('Avvatar Performance Whey', 'Whey Protein', 3409, 'Avvatar', '1 kg', 
    'Made from 100% fresh cow\'s milk. Delivers 24g of premium protein, 5.5g BCAA, and naturally occurring EAAs for peak performance.', 
    { price2: 6599, packSize2: '2 kg', certifications: ['Vegetarian', 'FSSAI'] }),
  createProduct('Nutrabay Gold Whey Concentrate', 'Whey Protein', 3106, 'Nutrabay', '1 kg', 
    'Rich in amino acids with 25g protein per serving. Fast digesting formula perfect for post-workout muscle recovery.', 
    { price2: 6756, packSize2: '2 kg' }),
  createProduct('AS-IT-IS ONE Whey', 'Whey Protein', 3149, 'AS-IT-IS', '1 kg', 
    'AS-IT-IS ONE whey protein concentrate offers ultra-pure protein designed to promote muscle growth and prevent breakdown.', 
    { price2: 5550, packSize2: '2 kg', priceNote: 'Reference listing price' }),
  createProduct('AS-IT-IS ATOM Whey', 'Whey Protein', 1642, 'AS-IT-IS', '1 kg', 
    'ATOM Whey Protein features an advanced blend of digestive enzymes to ensure max absorption and bioavailability.', 
    { price2: 6225, packSize2: '2 kg' }),
  createProduct('Nakpro Perform Whey', 'Whey Protein', 899, 'Nakpro', '1 kg', 
    'An extremely cost-effective performance whey designed for beginners and intermediates looking to meet daily protein goals.', 
    { price2: 1749, packSize2: '2 kg' }),
  createProduct('Optimum Nutrition Gold Standard', 'Whey Protein', 4199, 'Optimum Nutrition', '907 g', 
    'The world\'s best-selling whey protein powder. Features 24g of Whey Protein Isolate as the primary source with 5.5g of naturally occurring BCAAs.', 
    { price2: 9949, packSize2: '2.27 kg', certifications: ['Informed Choice', 'Banned Substance Tested'] }),
  createProduct('Nutrabay Pure Whey Concentrate', 'Whey Protein', 3049, 'Nutrabay', '1 kg', 
    'Unflavored 100% pure whey protein concentrate with zero additives. Ideal for versatile consumption and high protein diets.', 
    { price2: 5949, packSize2: '2 kg' }),
  createProduct('Nutrabay BioAbsorb Whey', 'Whey Protein', 3549, 'Nutrabay', '1 kg', 
    'Engineered with a powerful digestive enzyme matrix to guarantee maximum absorption of 25g of protein per scoop.', 
    { price2: 7199, packSize2: '2 kg' }),

  // --- BCAA (PDF 2) ---
  createProduct('BCAA Pro', 'BCAA', 849, 'MuscleBlaze', '30 servings', 
    'Provides 7g BCAAs in a 2:1:1 ratio. Enhanced with 1168mg of Electrolytes for ultimate hydration and intra-workout endurance.', { subcategory: 'BCAA' }),
  createProduct('Advanced BCAA', 'BCAA', 1549, 'One Science', '30 servings', 
    'Premium branched-chain amino acids formulated for rapid recovery and muscle preservation during intense physical training.', { subcategory: 'BCAA' }),
  createProduct('AMP Gold Series BCAA Advanced', 'BCAA', 1149, 'GNC', '30 servings', 
    'Features a 2:1:1 ratio of leucine, isoleucine, and valine along with L-glutamine and citrulline for improved blood flow.', { subcategory: 'BCAA' }),
  createProduct('Xtend Original', 'BCAA', 1649, 'Scivation', '30 servings', 
    'The legendary 7G BCAA formula containing 2.5g of L-Glutamine and 1g of Citrulline Malate for explosive pumps and recovery.', { subcategory: 'BCAA' }),
  createProduct('Instantized BCAA 5000', 'BCAA', 769, 'Optimum Nutrition', '30 servings', 
    'Delivers 5 grams of instantized BCAAs per serving in the optimal 2:1:1 ratio. Easily mixes in water or juice.', { subcategory: 'BCAA' }),
  createProduct('Best BCAA', 'BCAA', 1350, 'BPI Sports', '30 servings', 
    'Utilizes oligopeptide-enzymatic technology for faster absorption. Supports muscle protein synthesis and reduces protein catabolism.', { subcategory: 'BCAA' }),
  createProduct('Gold 2:1:1 BCAA + Electrolytes', 'BCAA', 499, 'Nutrabay', '31 servings', 
    'Affordable intra-workout featuring a classic 2:1:1 ratio enriched with hydration-boosting electrolytes.', { subcategory: 'BCAA' }),
  createProduct('Intra BCAA', 'BCAA', 499, 'Healthfarm', '30 servings', 
    'Supports prolonged workouts by supplying continuous energy and amino acids directly to the muscle tissue.', { subcategory: 'BCAA' }),
  createProduct('EAA + BCAA', 'BCAA', 1949, 'Dexter Jackson', '30 servings', 
    'A comprehensive amino acid profile featuring 9 Essential Amino Acids plus BCAAs for total muscular support and recovery.', { subcategory: 'BCAA' }),
  createProduct('Pro Performance Essential Amino Complete', 'BCAA', 1349, 'GNC', '30 servings', 
    'Full spectrum EAA and BCAA blend that provides all essential building blocks required for muscle growth.', { subcategory: 'BCAA' }),
  createProduct('Real BCAA', 'BCAA', 849, 'BigMuscles', 'Standard', 
    'Features 5g of BCAAs per scoop. Designed to boost stamina, enhance endurance, and speed up recovery.', { subcategory: 'BCAA' }),
  createProduct('BCAA Powder', 'BCAA', 510, 'AS-IT-IS', 'Standard', 
    'Pure 100% unflavored 2:1:1 BCAA powder with absolutely no additives, fillers, or artificial sweeteners.', { subcategory: 'BCAA' }),

  // --- PRE-WORKOUT (PDF 2) ---
  createProduct('WrathX', 'Pre-Workout', 1349, 'MuscleBlaze', '0.75 lb', 
    'Extreme pre-workout engineered with EnXtra and BioPerine. Provides laser focus, explosive energy, and massive vascular pumps.', { subcategory: 'Pre-Workout' }),
  createProduct('Yeah Buddy', 'Pre-Workout', 1649, 'Ronnie Coleman', '0.59 lb', 
    'Features a high-stimulant energy matrix with TeaCrine and Dynamine for sustained, crash-free energy.', { subcategory: 'Pre-Workout' }),
  createProduct('Sniper', 'Pre-Workout', 1549, 'One Science', '0.93 lb', 
    'A potent pre-workout powder offering maximum vasodilation through premium L-Citrulline and Beta-Alanine.', { subcategory: 'Pre-Workout' }),
  createProduct('Vapor X5', 'Pre-Workout', 1349, 'MuscleTech', '0.59 lb', 
    'Next-generation pre-workout offering an explosive neurosensory experience with 3g of Creatine and 2.5g of Betaine.', { subcategory: 'Pre-Workout' }),
  createProduct('Gold Standard Pre-Workout', 'Pre-Workout', 531, 'Optimum Nutrition', '15 sachets', 
    'Formulated with natural caffeine, 1.5g Beta-Alanine, and 3g Creatine Monohydrate to amplify your workout.', { subcategory: 'Pre-Workout' }),
  createProduct('Dead-Lift', 'Pre-Workout', 399, 'Fuel One', '0.22 lb', 
    'Budget-friendly focus and pump matrix designed to get you through the most intense lifting sessions.', { subcategory: 'Pre-Workout' }),
  createProduct('Pro Performance Pre-Workout', 'Pre-Workout', 949, 'GNC', '0.79 lb', 
    'Clinically dosed pre-workout to support stamina, vascularity, and high-intensity performance.', { subcategory: 'Pre-Workout' }),
  createProduct('Nitraflex', 'Pre-Workout', 2747, 'GAT', '0.66 lb', 
    'Advanced hyperemia and testosterone enhancing pre-workout powder for insane pumps and increased strength.', { subcategory: 'Pre-Workout' }),
  createProduct('C4 Original', 'Pre-Workout', 1537, 'Cellucor', 'Standard', 
    'America\'s #1 selling pre-workout. Contains 150mg of caffeine, CarnoSyn Beta-Alanine, and Arginine AKG.', { subcategory: 'Pre-Workout' }),
  createProduct('Psycho Pump', 'Pre-Workout', 1399, 'One Science', '0.73 lb', 
    'Heavy-hitting pump formula with a massive dose of Citrulline for skin-tearing vascularity.', { subcategory: 'Pre-Workout' }),
  createProduct('Mr Hyde Thermo', 'Pre-Workout', 1255, 'ProSupps', 'Standard', 
    'High-stim pre-workout combined with thermogenic fat burning ingredients like Capsimax and L-Carnitine.', { subcategory: 'Pre-Workout' }),
  createProduct('Pre-Workout Mixed Berries', 'Pre-Workout', 599, 'iMuscles', 'Standard', 
    'Delicious mixed berry flavor packed with caffeine and beta-alanine for an immediate rush of energy.', { subcategory: 'Pre-Workout' }),

  // --- CREATINE (PDF 2) ---
  createProduct('Micronised Creatine', 'Creatine', 479, 'MuscleBlaze', '100 g', 
    '100% pure micronized creatine monohydrate for rapid absorption. Supports ATP production and strength gains.', { subcategory: 'Creatine' }),
  createProduct('Clean Creatine', 'Creatine', 549, 'TrueBasics', '30 sachets', 
    'Convenient single-serve sachets of ultra-pure creatine monohydrate. Perfect for on-the-go dosing.', { subcategory: 'Creatine' }),
  createProduct('Creatine Monohydrate Fuel One', 'Creatine', 399, 'Fuel One', '0.22 lb', 
    'No-nonsense creatine monohydrate powder designed to increase lean muscle mass and improve strength.', { subcategory: 'Creatine' }),
  createProduct('Platinum Creatine', 'Creatine', 1199, 'MuscleTech', '0.88 lb', 
    'Features 5g of HPLC-tested micronized creatine monohydrate per serving to dramatically enhance muscle size.', { subcategory: 'Creatine' }),
  createProduct('Micronized Creatine ON', 'Creatine', 824, 'Optimum Nutrition', '0.55 lb', 
    'Highly researched ON Creatine that stays suspended in liquid longer and is easily absorbed.', { subcategory: 'Creatine' }),
  createProduct('Pure Micronized Creatine', 'Creatine', 849, 'GNC', '0.55 lb', 
    'Manufactured under strict quality control standards. Provides 5g of highly bioavailable creatine.', { subcategory: 'Creatine' }),
  createProduct('Creatine XS', 'Creatine', 1049, 'Ronnie Coleman', '0.66 lb', 
    'Tested and certified creatine monohydrate endorsed by 8x Mr. Olympia Ronnie Coleman.', { subcategory: 'Creatine' }),
  createProduct('Pure Micronised Creatine Monohydrate Wellcore', 'Creatine', 969.20, 'Wellcore', 'Standard', 
    'Ultra-micronized for superior mixability and absorption without stomach bloating or distress.', { subcategory: 'Creatine' }),
  createProduct('Creatine Monohydrate AS-IT-IS', 'Creatine', 0, 'AS-IT-IS', 'Standard', 
    'Vegan, unflavored, and pure creatine monohydrate. Lab tested for purity.', { subcategory: 'Creatine', countInStock: 0, priceBadge: 'coming-soon', priceNote: 'Coming Soon' }),
  createProduct('Pure Micronised Creatine Nutrabay', 'Creatine', 229, 'Nutrabay', 'Standard', 
    'A highly affordable, premium quality creatine powder that improves high-intensity exercise performance.', { subcategory: 'Creatine' }),
  createProduct('Creatine Monohydrate BigMuscles', 'Creatine', 119, 'BigMuscles', 'Standard', 
    'Enhances the body\'s capacity to perform high-intensity work, assisting greater muscle size and performance gains.', { subcategory: 'Creatine' }),
  createProduct('Creatine Monohydrate Decathlon', 'Creatine', 399, 'Decathlon', '100 g', 
    'Straightforward sports nutrition creatine designed for athletes and weightlifters to boost explosive power.', { subcategory: 'Creatine' }),

  // --- MASS & WEIGHT GAINERS (PDF 3) ---
  createProduct('Super Gainer XXL', 'Mass & Weight Gainers', 2799, 'MuscleBlaze', '3 kg', 
    'High calorie mass gainer featuring a 1:5 protein to carb ratio. Includes a blend of fast and slow releasing proteins.', { priceBadge: 'price-updated' }),
  createProduct('Serious Mass', 'Mass & Weight Gainers', 2959, 'Optimum Nutrition', '2.72 kg', 
    'The ultimate weight gain formula providing 1,250 calories and 50g of protein per serving with water.', { priceBadge: 'price-updated' }),
  createProduct('Pro Performance Weight Gainer', 'Mass & Weight Gainers', 1949, 'GNC', '3 kg', 
    'Supplies the extra calories needed to put on pounds of solid muscle with an advanced amino acid profile.', { priceBadge: 'price-updated' }),
  createProduct('Advanced Mass Gainer', 'Mass & Weight Gainers', 2059, 'Avvatar', '3 kg', 
    'Made with fresh cow\'s milk and fortified with 21 essential vitamins and minerals for healthy mass gain.', { priceBadge: 'price-updated' }),
  createProduct('Gold Mega Mass Gainer', 'Mass & Weight Gainers', 949, 'Nutrabay', '3 kg', 
    'Designed specifically for hardgainers. Delivers massive calories and high biological value protein.', { priceBadge: 'price-updated' }),
  createProduct('Gold Weight Gainer', 'Mass & Weight Gainers', 1747, 'Nakpro', '3 kg', 
    'Carbohydrate-rich gainer matrix offering a steady release of energy and sustained muscle repair.', { priceBadge: 'price-updated' }),
  createProduct('Smart Gainer', 'Mass & Weight Gainers', 1175, 'BigMuscles', '3 kg', 
    'A scientifically formulated mass gainer to increase lean body mass without unnecessary fat.', { priceBadge: 'price-updated' }),
  createProduct('Weight Gainer', 'Mass & Weight Gainers', 2369, 'MuscleBlaze', '1 kg', 
    'Features DigeZyme for enhanced digestion and absorption of nutrients, ensuring maximum muscle synthesis.', { priceBadge: 'price-updated' }),
  createProduct('Muscle Mass Gainer', 'Mass & Weight Gainers', 2699, 'Labrada', '3 kg', 
    'A high-calorie bodybuilding shake fortified with muscle building protein, carbohydrates, creatine monohydrate, and essential nutrients.', { priceBadge: 'price-updated' }),
  createProduct('Anabolic Mass Kevin Levrone', 'Mass & Weight Gainers', 3124, 'Kevin Levrone', '3 kg', 
    'Premium gainer enriched with HMB, Creatine, and DAA to support anabolic hormones and massive size.', { priceBadge: 'price-updated' }),
  createProduct('Massive Weight Gainer', 'Mass & Weight Gainers', 1306, 'Nutrimuscle', '5 kg', 
    'A monstrous 5kg tub delivering a high-calorie matrix to help you overcome weight gaining plateaus.', { priceBadge: 'price-updated' }),
  createProduct('Anabolic Mass Gainer', 'Mass & Weight Gainers', 849, 'BeastLife', '3 kg', 
    'Supports rapid recovery and muscle volume increase with complex carbohydrates and whey protein.', { priceBadge: 'price-updated' }),
  createProduct('Endura Mass Weight Gainer', 'Mass & Weight Gainers', 336, 'Endura', '1 kg', 
    'India\'s highly trusted weight gainer supplement. Provides balanced nutrition and vital amino acids.', { priceBadge: 'price-updated' }),
  createProduct('Muscle Gainer', 'Mass & Weight Gainers', 1649, 'Healthfarm', '3 kg', 
    'Loaded with quality macronutrients and dietary fiber to ensure clean and sustained weight gain.', { priceBadge: 'price-updated' }),
  createProduct('Xtreme Weight Gainer', 'Mass & Weight Gainers', 1225, 'BigMuscles', '3 kg', 
    'Advanced weight gainer optimized for rapid nutrient delivery and massive glycogen replenishment post-workout.', { priceBadge: 'price-updated' }),
  createProduct('Bulk King', 'Mass & Weight Gainers', 2721, 'Doctor\'s Choice', '3 kg', 
    'Designed to turn you into royalty in the gym. Extremely high calorie count with a massive serving size.', { priceBadge: 'price-updated' }),
  createProduct('Super Mass Gainer', 'Mass & Weight Gainers', 349, 'Labrada', '3 kg', 
    'Quick mixing formula that provides the necessary calories and protein for intense bulking phases.', { priceBadge: 'price-updated' }),
  createProduct('Bolt Mass Gainer', 'Mass & Weight Gainers', 599, 'Bolt', '3 kg', 
    'Budget-friendly option that doesn\'t compromise on carbohydrate and protein quality.', { priceBadge: 'price-updated' }),
  createProduct('Nutrela Weight Gain', 'Mass & Weight Gainers', 500, 'Patanjali', '1 kg', 
    'Ayurvedic and herbal infused mass gainer focusing on holistic health, immunity, and steady weight gain.', { priceBadge: 'price-updated' }),
  createProduct('Nutra Mass Gainer', 'Mass & Weight Gainers', 749, 'Nutra', '3 kg', 
    'Straightforward mass builder with added vitamins to support overall metabolic health.', { priceBadge: 'price-updated' }),

  // --- AYURVEDIC & UNANI (PDF 4) ---
  createProduct('500 mg Sona Bhasma', 'Ayurvedic & Unani', 28000, 'NutriVKart Premium', 'Standard', 
    'Exquisite 500mg Swarna (Gold) Bhasma prepared through classical Ayurvedic calcination. Renowned for enhancing Ojas, immunity, and cellular vitality.', 
    { checkoutMode: 'enquiry', certifications: ['GMP Certified', 'Heavy Metal Tested'] }),
  createProduct('150 mg Sona Bhasma + Other Bhasma', 'Ayurvedic & Unani', 24000, 'NutriVKart Premium', 'Standard', 
    'A potent synergy of 150mg Sona Bhasma combined with Chandi (Silver) and Mukta (Pearl) Bhasma for holistic nervous system and stamina support.', 
    { checkoutMode: 'enquiry', certifications: ['GMP Certified'] }),
  createProduct('18 Bhasma + Irani Items', 'Ayurvedic & Unani', 21000, 'NutriVKart Premium', 'Standard', 
    'An elite polyherbal-metallic formulation containing 18 distinct Bhasmas and authentic imported Irani herbs for unparalleled rejuvenation.', 
    { checkoutMode: 'enquiry', certifications: ['Traditional Formulation'] }),
  createProduct('Bhasma + Wellness Items (Unani)', 'Ayurvedic & Unani', 14000, 'NutriVKart Premium', 'Standard', 
    'A traditional Unani wellness compound combining select calcined minerals and performance-enhancing botanicals for systemic vitality.', 
    { checkoutMode: 'enquiry', certifications: ['Unani Certified'] }),
];

async function seedProducts() {
  try {
    await Product.deleteMany();
    console.log('Cleared existing products');
    const created = await Product.insertMany(productsData);
    console.log(`Successfully seeded ${created.length} products with deep enrichment!`);
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seedProducts();
