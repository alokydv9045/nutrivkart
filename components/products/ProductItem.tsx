'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Product } from '@/lib/models/ProductModel';
import { formatPrice } from '@/lib/utils';
import useCartService from '@/lib/hooks/useCartStore';
import useWishlistService from '@/lib/hooks/useWishlistStore';
import toast from 'react-hot-toast';
import { Heart } from 'lucide-react';

const ProductItem = ({ product }: { product: Product }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { items, increase } = useCartService();
  const { toggle, exists } = useWishlistService();
  
  const isWishlisted = exists(product.slug);

  const addItemHandler = () => {
    if (product.countInStock === 0) {
      toast.error('Out of stock', {
        style: {
          background: '#141A30',
          color: '#E8ECF5',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 'bold',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          border: '1px solid #FF3B30',
        },
        iconTheme: {
          primary: '#FF3B30',
          secondary: '#0A0E1A',
        },
      });
      return;
    }

    increase({
      ...product,
      qty: 0,
      color: '',
      size: '',
    });
    toast.success('Added to your cart', {
      style: {
        background: '#141A30',
        color: '#E8ECF5',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        border: '1px solid #2A3660',
      },
      iconTheme: {
        primary: '#8CC63F',
        secondary: '#0A0E1A',
      },
    });
  };

  const buyNowHandler = () => {
    if (product.checkoutMode === 'enquiry') {
      router.push(`/product/${product.slug}`);
      return;
    }

    if (product.countInStock === 0) {
      toast.error('Out of stock', {
        style: {
          background: '#141A30',
          color: '#E8ECF5',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 'bold',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          border: '1px solid #FF3B30',
        },
        iconTheme: {
          primary: '#FF3B30',
          secondary: '#0A0E1A',
        },
      });
      return;
    }

    // Add to cart if not already present
    const existItem = items.find((x) => x.slug === product.slug);
    if (!existItem) {
      increase({
        ...product,
        qty: 0,
        color: '',
        size: '',
      });
    }
    
    // Proceed to shipping step with a refresh to ensure state sync
    router.refresh();
    if (status === 'unauthenticated') {
      router.push('/signin?callbackUrl=/shipping');
    } else {
      router.push('/shipping');
    }
  };

  return (
    <article className="group flex flex-col w-full snap-start">
      <div className="relative bg-white rounded-sm overflow-hidden border border-border mb-4 aspect-[4/5] z-0 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(140,198,63,0.1)]">
        <Link href={`/product/${product.slug}`} className="block relative h-full w-full">
          <Image
            src={/^(\/|https?:)/.test(product.image) ? product.image : '/images/placeholder.jpg'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-sm backdrop-blur-sm">
            {product.category}
          </span>
          {product.priceBadge && (
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-sm w-max">
              {product.priceBadge.replace('-', ' ')}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            const added = toggle(product);
            if (added) toast.success('Added to Wishlist');
          }}
          className={`absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
            isWishlisted 
              ? 'bg-primary text-primary-foreground scale-110' 
              : 'bg-surface-bright/80 backdrop-blur-sm text-muted-foreground hover:text-primary hover:scale-110'
          }`}
          aria-label={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          suppressHydrationWarning
        >
          <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} strokeWidth={2.5} />
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 translate-y-0 lg:translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-surface-container via-surface-container/80 to-transparent z-20">
          <div className="flex gap-2">
            {product.checkoutMode !== 'enquiry' && (
              <button 
                onClick={addItemHandler}
                className="flex-1 bg-surface-bright/80 backdrop-blur-md text-foreground border border-border py-2.5 font-bold text-[10px] uppercase tracking-widest rounded-sm hover:border-primary/50 hover:text-primary transition-colors active:scale-[0.98]"
                suppressHydrationWarning
              >
                Add to Cart
              </button>
            )}
            <button 
              onClick={buyNowHandler}
              className={`flex-1 ${product.checkoutMode === 'enquiry' ? 'bg-accent text-accent-foreground' : 'bg-primary text-primary-foreground'} py-2.5 font-bold text-[10px] uppercase tracking-widest rounded-sm shadow-lg hover:opacity-90 transition-opacity active:scale-[0.98]`}
              suppressHydrationWarning
            >
              {product.checkoutMode === 'enquiry' ? 'Enquire Now' : 'Buy Now'}
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-2 px-1">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-black tracking-tight text-lg text-foreground leading-tight group-hover:text-primary transition-colors uppercase">
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <div className="text-right shrink-0 flex flex-col items-end">
            <span className="block font-bold text-lg text-primary">
              {formatPrice(product.price)}
            </span>
            <span className="block text-[10px] font-medium text-muted-foreground line-through">
              {formatPrice(Math.round(product.price * 1.2))}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="bg-surface-bright border border-border px-2 py-1 rounded-sm text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">
            {product.brand}
          </span>
          <span className="w-1 h-1 rounded-full bg-border"></span>
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
            {product.packSize || (product.category === 'Ayurvedic & Unani' ? 'Premium' : 'Standard')}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
