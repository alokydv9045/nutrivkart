'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import useCartService from '@/lib/hooks/useCartStore';
import { OrderItem } from '@/lib/models/OrderModel';

const AddToCart = ({ item }: { item: OrderItem }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { items, increase, decrease } = useCartService();
  const [existItem, setExistItem] = useState<OrderItem | undefined>();
  const { data: session, status } = useSession();

  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug));
  }, [item, items]);

  const addToCartHandler = () => {
    increase(item);
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
    });
  };

  const buyNowHandler = () => {
    // If session is loading, wait a bit
    if (status === 'loading') {
      toast.loading('Verifying your session...', { id: 'buynow-status' });
      return;
    }

    toast.dismiss('buynow-status');
    
    // 1. Ensure item is in cart
    if (!existItem) {
      increase(item);
    }

    // 2. Immediate feedback
    toast.success('Heading to checkout...', {
      duration: 1000,
      style: {
        background: '#1B2340',
        color: '#E8ECF5',
        fontSize: '12px',
        fontWeight: 'bold',
        border: '1px solid #2A3660',
      }
    });

    // 3. Navigation with transition for smoother UX
    startTransition(() => {
      // Proceed to shipping step with a refresh to ensure state sync
      router.refresh();
      if (status === 'unauthenticated') {
        router.push('/signin?callbackUrl=/shipping');
      } else {
        router.push('/shipping');
      }
    });
  };

  const handleIncrease = (itemObj: OrderItem) => {
    increase(itemObj);
  };

  const handleDecrease = (itemObj: OrderItem) => {
    decrease(itemObj);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-4 w-full">
        {existItem ? (
          <div className="flex items-center bg-surface-container rounded-lg p-1 shrink-0 border border-outline-variant/10">
            <button 
              className="p-2 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center" 
              type="button" 
              onClick={() => handleDecrease(existItem)}
            >
              <span className="material-symbols-outlined text-sm">remove</span>
            </button>
            <span className="px-4 font-medium text-sm font-body">{existItem.qty}</span>
            <button 
              className="p-2 text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center" 
              type="button" 
              onClick={() => handleIncrease(existItem)}
            >
              <span className="material-symbols-outlined text-sm">add</span>
            </button>
          </div>
        ) : null}

        <button 
          className="flex-grow bg-primary text-on-primary py-4 rounded-sm font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-3 hover:opacity-90 transition-all duration-300 shadow-xl shadow-primary/10"
          type="button" 
          onClick={addToCartHandler}
        >
          {existItem ? 'Add More' : 'Add to Cart'}
          <span className="material-symbols-outlined text-lg">shopping_cart</span>
        </button>
      </div>

      <button
        disabled={isPending}
        className="w-full bg-surface-container-high text-primary border border-primary/20 py-4 rounded-lg font-bold tracking-widest uppercase text-[10px] flex items-center justify-center gap-3 hover:bg-surface-container-highest transition-all duration-300 disabled:opacity-70"
        type="button"
        onClick={buyNowHandler}
      >
        {isPending ? 'Preparing...' : 'Buy Now'}
        <span className="material-symbols-outlined text-lg">bolt</span>
      </button>
    </div>
  );
};

export default AddToCart;
