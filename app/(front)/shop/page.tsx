import { Metadata } from 'next';
import { Suspense } from 'react';
import ProductItems, { ProductItemsSkeleton } from '@/components/products/ProductItems';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NutriVKart | Shop Premium Supplements',
  description: 'Shop authentic whey protein, mass gainers, BCAA, creatine, and ayurvedic sports nutrition.',
};

const ShopPage = async (props: {
  searchParams: Promise<{ category?: string; q?: string }>
}) => {
  const searchParams = await props.searchParams;
  const currentCategory = searchParams.category || 'all';
  const currentQuery = searchParams.q || 'all';

  const categories = [
    { name: 'All Products', icon: 'grid_view', slug: 'all' },
    { name: 'Whey Protein', icon: 'fitness_center', slug: 'Whey Protein' },
    { name: 'Mass Gainers', icon: 'monitor_weight', slug: 'Mass & Weight Gainers' },
    { name: 'Pre-Workout', icon: 'bolt', slug: 'Pre-Workout' },
    { name: 'Creatine', icon: 'electric_bolt', slug: 'Creatine' },
    { name: 'BCAA', icon: 'water_drop', slug: 'BCAA' },
    { name: 'Wellness', icon: 'healing', slug: 'Wellness & Vitamins' },
  ];

  const featuredBrands = [
    'MuscleBlaze',
    'GNC',
    'Labrada',
    'Optimum Nutrition'
  ];

  return (
    <div className='min-h-screen bg-surface font-body text-on-surface relative overflow-hidden'>
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03] pointer-events-none z-0"></div>

      <main className="pt-28 pb-32 px-6 max-w-screen-2xl mx-auto relative z-10">
        {/* Page Header Section */}
        <section className="mb-24 md:flex items-end justify-between">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Premium Supplements</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[1.1] uppercase">
              Fuel Your <br/><span className="text-primary">Fitness</span>
            </h1>
          </div>
          <div className="mt-8 md:mt-0 md:mb-4">
            <p className="text-muted-foreground font-medium max-w-xs leading-relaxed border-l-2 border-primary/30 pl-8">
              Authentic sports nutrition and health supplements to help you push past your limits.
            </p>
          </div>
        </section>

        {/* Product Grid / Bento Style Integration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar / Filter Column */}
          <aside className="lg:col-span-3 space-y-12">
            <div>
              <nav className="flex flex-col space-y-4">
                {categories.map((item) => {
                  const isActive = currentCategory === item.slug;
                  return (
                    <Link 
                      key={item.name}
                      href={item.slug === 'all' 
                        ? (currentQuery === 'all' ? '/shop' : `/shop?q=${encodeURIComponent(currentQuery)}`)
                        : `/shop?category=${encodeURIComponent(item.slug)}${currentQuery !== 'all' ? `&q=${encodeURIComponent(currentQuery)}` : ''}`
                      }
                      className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all border ${
                        isActive 
                        ? 'bg-surface-container-low border-primary/20 text-primary font-headline font-bold' 
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-surface-container-lowest'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-lg">{item.icon}</span>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      )}
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* Featured Brands Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between px-4">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Featured Brands</h3>
                {currentQuery !== 'all' && (
                  <Link 
                    href={currentCategory === 'all' ? '/shop' : `/shop?category=${encodeURIComponent(currentCategory)}`}
                    className="text-[10px] text-primary underline underline-offset-4 font-bold"
                  >
                    Clear
                  </Link>
                )}
              </div>
              <div className="flex flex-col space-y-5 px-4">
                {featuredBrands.map((brand) => {
                  const isActive = currentQuery === brand;
                  return (
                    <Link 
                      key={brand} 
                      href={isActive 
                        ? (currentCategory === 'all' ? '/shop' : `/shop?category=${encodeURIComponent(currentCategory)}`)
                        : `/shop?q=${encodeURIComponent(brand)}${currentCategory !== 'all' ? `&category=${encodeURIComponent(currentCategory)}` : ''}`
                      }
                      className="flex items-center gap-4 cursor-pointer group"
                    >
                      <div className={`w-5 h-5 border rounded flex items-center justify-center transition-colors ${
                        isActive ? 'border-primary bg-primary/10' : 'border-border group-hover:border-primary'
                      }`}>
                        <div className={`w-2.5 h-2.5 bg-primary rounded-sm transition-opacity ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-20'
                        }`}></div>
                      </div>
                      <span className={`text-sm font-medium transition-colors ${
                        isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'
                      }`}>
                        {brand}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Need Help Block */}
            <div className="bg-surface-bright p-10 rounded-xl relative overflow-hidden group border border-border mt-32">
              <div className="relative z-10">
                <h4 className="font-black uppercase tracking-tight text-2xl mb-4 text-foreground">Need Help?</h4>
                <p className="text-sm text-muted-foreground font-medium mb-8 leading-relaxed">Not sure which supplement fits your goals? Talk to our experts.</p>
                <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-3 group-hover:gap-5 transition-all">
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
              <div className="absolute -right-6 -bottom-6 opacity-[0.05] group-hover:scale-110 transition-all duration-1000">
                <span className="material-symbols-outlined text-9xl">support_agent</span>
              </div>
            </div>
          </aside>

          {/* Main Product Area */}
          <div className="lg:col-span-9">
            <Suspense key={`${currentCategory}-${currentQuery}`} fallback={<ProductItemsSkeleton qty={6} layout="grid" />}>
              <ProductItems 
                layout="grid" 
                title={currentQuery !== 'all' ? currentQuery.split(' (')[0] : (currentCategory === 'all' ? 'Signature' : currentCategory)}
                highlight={currentQuery !== 'all' ? 'Featured' : (currentCategory === 'all' ? 'Harvest' : 'Collection')} 
                category={currentCategory}
                q={currentQuery}
              />
            </Suspense>

            {/* Bento-Style Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-32">
              <div className="relative aspect-video rounded-xl overflow-hidden group">
                <img 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 scale-105 group-hover:scale-100 opacity-60" 
                  alt="Authentic Quality" 
                  src="/images/categories/whey.png" 
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-50"></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <h4 className="font-black uppercase tracking-tight text-3xl text-white mb-3">100% Authentic</h4>
                  <p className="text-white/90 font-medium text-sm max-w-xs leading-relaxed">Direct from manufacturers and authorized distributors only.</p>
                </div>
              </div>

              <div className="bg-surface-bright p-12 rounded-xl flex flex-col justify-center space-y-8 border border-border">
                <span className="material-symbols-outlined text-5xl text-primary animate-pulse">verified_user</span>
                <div className="space-y-4">
                  <h4 className="font-black uppercase tracking-tight text-2xl text-foreground">Quality Assured</h4>
                  <p className="text-muted-foreground leading-relaxed font-medium text-sm">Every product undergoes strict quality checks before it reaches your door. Track your batch authenticity easily.</p>
                </div>
                <Link href="/about" className="inline-flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-[10px] border-b-2 border-primary pb-2 text-primary hover:gap-4 transition-all w-fit">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
