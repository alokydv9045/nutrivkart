'use client';

import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Mocking an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success('Welcome to the NutriVKart community!', {
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
    
    setEmail('');
    setIsLoading(false);
  };

  return (
    <section className="pt-8 pb-24 md:pt-12 md:pb-32 px-4 md:px-8 bg-surface">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-black text-4xl md:text-5xl text-primary mb-8 uppercase tracking-tighter">Stay Strong.</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Join our community for exclusive deals, training tips, new product launches, 
          and early access to limited-edition supplements.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
          <input 
            required
            className="flex-grow bg-surface-container border border-outline-variant/30 focus:ring-1 focus:ring-primary rounded-lg font-body text-sm p-4 outline-none transition-all" 
            placeholder="Enter your email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            suppressHydrationWarning
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="px-10 py-4 bg-secondary text-white font-label text-xs uppercase tracking-widest rounded-lg hover:bg-primary transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed min-w-[160px]"
            suppressHydrationWarning
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Processing...
              </span>
            ) : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
}
