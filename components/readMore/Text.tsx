import React from 'react';

const Text = () => {
  const BRAND = process.env.NEXT_PUBLIC_BRAND_NAME || 'NutriVKart';
  const TAGLINE = process.env.NEXT_PUBLIC_BRAND_TAGLINE || 'Fuel Your Strength. Live Your Best.';
  return (
    <div>
      <h1 className='mb-4 text-3xl font-black uppercase tracking-tight text-primary'>
        {BRAND}: {TAGLINE}
      </h1>

      <h2 className='mb-2 text-2xl font-bold'>
        Where Premium Nutrition Meets Peak Performance
      </h2>

      <p className='mb-4 font-medium text-muted-foreground'>
        At {BRAND}, we blend sports science with high-quality ingredients. Our curated
        collection features pure whey proteins, potent pre-workouts, essential BCAAs, and 
        premium Ayurvedic wellness supplements—each carefully formulated to help you 
        push past your limits. Sourced from authentic global brands with proven efficacy,
        our supplements offer both reliability and results for every fitness goal.
      </p>

      <p className='mb-4 font-medium text-muted-foreground'>
        Explore our comprehensive nutrition stacks, from morning energy boosts to overnight 
        muscle recovery, all delivered with expert guidance for a personalized fitness journey.
        Stay ahead of sports nutrition innovations with new launches and enjoy priority
        access to limited-edition products and exclusive consultations by
        subscribing to our newsletter.
      </p>

      <p className='mb-4 font-bold text-foreground'>
        {BRAND}: Your one-stop destination for all health, fitness & wellness needs.
      </p>

      <h2 className='mb-2 text-2xl font-bold mt-8'>
        Why Choose {BRAND}?
      </h2>

      <p className='mb-4 font-medium text-muted-foreground'>
        Authenticity is at the heart of everything we do. We source directly from official 
        brand distributors to ensure every scoop delivers exactly what's on the label. 
        Enjoy personalized supplement consultations—from goal analysis to custom stack 
        building—designed to make every product recommendation perfectly suited to your 
        unique athletic needs.
      </p>

      <p className='mb-4 font-medium text-muted-foreground'>
        Join our exclusive athlete community for rewards, early access to new launches,
        and invitations to fitness events. Discover {BRAND}'s curated
        supplement collections, where performance, science, and dedication
        come together.
      </p>
    </div>
  );
};

export default Text;
