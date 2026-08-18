import { Metadata } from 'next';
import { Suspense } from 'react';
import HeroNutriVKart from '@/components/home/HeroNutriVKart';
import CategoryGrid from '@/components/home/CategoryGrid';
import FAQ from '@/components/home/FAQ';
import Newsletter from '@/components/home/Newsletter';
import ProductItems, { ProductItemsSkeleton } from '@/components/products/ProductItems';
import TrustBarModern from '@/components/home/TrustBarModern';
import TrustBar from '@/components/footer/TrustBar';

export const metadata: Metadata = {
  title: 'NutriVKart | Premium Sports Nutrition',
  description: 'Fuel your strength with NutriVKart. Premium sports nutrition, whey protein, mass gainers, and authentic ayurvedic supplements.',
};

const HomePage = () => {
  return (
    <div className='flex flex-col bg-surface'>
      {/* Hero Section */}
      <HeroNutriVKart />

      {/* Categories Grid */}
      <CategoryGrid />

      {/* Top Rated & New Arrivals Sliders */}
      <section className="py-24 w-full space-y-32">
        <Suspense fallback={<ProductItemsSkeleton qty={4} layout="slider" />}>
          <ProductItems 
            layout="slider" 
            title="Premium" 
            highlight="Favorites" 
            sort="topRated"
          />
        </Suspense>

        <Suspense fallback={<ProductItemsSkeleton qty={4} layout="slider" />}>
          <ProductItems 
            layout="slider" 
            title="New" 
            highlight="Arrivals" 
            sort="latest"
          />
        </Suspense>
      </section>

      {/* Trust & Features */}
      <TrustBarModern />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter / Editorial Section */}
      <Newsletter />
      
      {/* Features TrustBar */}
      <TrustBar />
    </div>
  );
};

export default HomePage;

