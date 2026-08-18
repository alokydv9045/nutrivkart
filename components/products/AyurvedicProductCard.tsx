'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '@/lib/models/ProductModel';
import { formatPrice } from '@/lib/utils';
import { Leaf, Sparkles } from 'lucide-react';

const AyurvedicProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  
  const enquireNowHandler = () => {
    router.push(`/product/${product.slug}`);
  };

  return (
    <article className="group flex flex-col w-full relative bg-surface-container rounded-sm overflow-hidden border border-border transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
      {/* Premium Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative aspect-square overflow-hidden bg-white">
        <Link href={`/product/${product.slug}`} className="block relative h-full w-full">
          <Image
            src={/^(\/|https?:)/.test(product.image) ? product.image : '/images/placeholder.jpg'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>
        
        {/* Premium Badge */}
        <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
          <span className="flex items-center gap-1 bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
            <Sparkles size={12} />
            Premium
          </span>
        </div>
      </div>

      <div className="p-6 relative z-10 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <Leaf size={14} className="text-accent" />
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">
            Authentic Ayurvedic
          </span>
        </div>
        
        <h3 className="font-black tracking-tight text-xl text-foreground leading-tight group-hover:text-accent transition-colors uppercase mb-4">
          <Link href={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        
        <p className="text-sm font-medium text-muted-foreground line-clamp-2 mb-6 flex-grow">
          {product.description || 'Premium ayurvedic formulation for elite performance and holistic wellness.'}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="block font-bold text-2xl text-foreground">
              {formatPrice(product.price)}
            </span>
          </div>
          
          <button 
            onClick={enquireNowHandler}
            className="bg-accent text-accent-foreground px-6 py-2.5 font-bold text-[10px] uppercase tracking-widest rounded-sm shadow-lg hover:opacity-90 transition-all active:scale-[0.98] group-hover:shadow-accent/20"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default AyurvedicProductCard;
