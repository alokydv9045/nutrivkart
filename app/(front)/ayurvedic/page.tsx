import { Metadata } from 'next';
import { Suspense } from 'react';
import AyurvedicProductCard from '@/components/products/AyurvedicProductCard';
import TrustBarModern from '@/components/home/TrustBarModern';
import productService from '@/lib/services/productService';
import { convertDocToObj } from '@/lib/utils';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Ayurvedic Premium | NutriVKart',
  description: 'Discover premium Ayurvedic formulations designed for elite athletic performance and holistic wellness. Enquire for specialized guidance.',
};

export default async function AyurvedicPage() {
  let products: any[] = [];
  try {
    const res = await productService.getByQuery({ category: 'Ayurvedic & Unani', page: '1' });
    products = res.products;
  } catch (error) {
    console.error('Failed to load ayurvedic products', error);
  }

  return (
    <div className='min-h-screen bg-surface font-body text-on-surface pt-28 pb-32'>
      <main className="max-w-screen-2xl mx-auto px-6">
        
        {/* Premium Header */}
        <section className="mb-20 relative overflow-hidden rounded-lg bg-surface-container border border-border group">
          {/* Background Texture/Image */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000">
             <div className="absolute inset-0 bg-gradient-to-r from-surface-container via-surface-container/90 to-transparent z-10" />
             <Image src="/images/products/ayurvedic.png" alt="Ayurvedic herbs" fill className="object-cover grayscale" />
          </div>
          
          <div className="relative z-20 p-10 md:p-16 max-w-3xl">
            <span className="text-accent font-bold text-xs uppercase tracking-[0.4em] mb-6 block flex items-center gap-2">
              <span className="w-8 h-[1px] bg-accent inline-block"></span>
              Elite Wellness
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[1.1] uppercase mb-6">
              Ayurvedic <span className="text-accent">Premium</span>
            </h1>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-xl">
              Unlock the secrets of ancient vitality. Our premium Ayurvedic selection is formulated for high-performing athletes seeking holistic recovery and natural strength. 
              <br/><br/>
              Due to the specialized nature of these formulations, our experts provide personalized consultations before purchase.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="mb-24">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black tracking-tighter uppercase text-foreground">
              The Collection
            </h2>
          </div>
          
          {products.length === 0 ? (
            <div className='rounded-sm bg-surface-container p-10 text-center text-muted-foreground font-medium border border-border'>
              No premium ayurvedic products available at the moment.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <AyurvedicProductCard key={product.slug} product={convertDocToObj(product)} />
              ))}
            </div>
          )}
        </section>
      </main>
      
      <div className="mt-24">
        <TrustBarModern />
      </div>
    </div>
  );
}
