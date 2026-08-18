import { Metadata } from 'next';
import { Suspense } from 'react';
import ProductItems, { ProductItemsSkeleton } from '@/components/products/ProductItems';
import TrustBarModern from '@/components/home/TrustBarModern';
import { notFound } from 'next/navigation';
import productService from '@/lib/services/productService';

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const params = await props.params;
  const decodedSlug = decodeURIComponent(params.slug);
  return {
    title: `${decodedSlug} | NutriVKart Premium Supplements`,
    description: `Shop authentic ${decodedSlug} at NutriVKart. Fuel your strength with premium sports nutrition.`,
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params;
  const decodedSlug = decodeURIComponent(params.slug);
  
  // Verify category exists or at least fetch products
  const { products } = await productService.getByQuery({ category: decodedSlug, page: '1' });
  
  if (!products || products.length === 0) {
    // If it's a completely invalid category with 0 products, we might still want to show an empty page
    // or notFound(), but empty page is safer during seed loading.
  }

  return (
    <div className='min-h-screen bg-surface font-body text-on-surface pt-28 pb-32'>
      <main className="max-w-screen-2xl mx-auto px-6">
        <section className="mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Category</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground leading-tight uppercase">
            {decodedSlug}
          </h1>
          <p className="text-muted-foreground font-medium mt-4 max-w-xl">
            Explore our premium selection of {decodedSlug.toLowerCase()}. Sourced from trusted brands to help you achieve your fitness goals.
          </p>
        </section>

        <Suspense fallback={<ProductItemsSkeleton qty={8} layout="grid" />}>
          <ProductItems 
            layout="grid" 
            title={decodedSlug}
            highlight="Products" 
            category={decodedSlug}
          />
        </Suspense>
      </main>
      
      <div className="mt-24">
        <TrustBarModern />
      </div>
    </div>
  );
}
