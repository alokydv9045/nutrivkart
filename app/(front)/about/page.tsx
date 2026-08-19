import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Our Story | NutriVKart',
  description: 'Bridging the gap between authentic nutrition and modern science. Learn about the genesis of NutriVKart.',
};

export default function AboutPage() {
  return (
    <main className="relative pt-16 overflow-x-hidden bg-surface text-on-surface">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBs4LRkuZ_fgnZA5hlF5xmln5wZhl-f2UNDmy_eT_QRjQvmmhxapg_F7nZjGZHVYULdfvLGdEcX375td5zla1K2E59t3glVSRSaSomsXpHFqPtsK8Q31UBD3b2A67ruxK1llebrGaibNkCfTvW2cAq2Avkj0IZXQzVce3sVHPllgP-mqABjGfaZoRj3iJgvwV4WKekdV1dWRYqkCIbFYml4iRYkC9ZYzcOfNoutS1GBUT3IrFEB3jq-0ZsxVINkx7NUC1ThEFhiwVi-)',
          opacity: 0.03
        }}
      ></div>

      {/* 1. Hero Section */}
      <section className="px-8 md:px-24 pt-0 pb-20 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 max-w-xl">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-primary leading-tight -tracking-[0.03em]">
            Our Story
          </h1>
          <p className="mt-6 font-headline text-xl md:text-2xl text-secondary leading-relaxed italic">
            Bridging the gap between authentic nutrition and modern science.
          </p>
          <div className="mt-10 h-px w-24 bg-primary/30"></div>
        </div>
        
        <div className="relative grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden translate-y-8 shadow-sm">
              <img 
                className="w-full h-full object-cover grayscale" 
                alt="Premium nutrition supplements and ingredients" 
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600&auto=format&fit=crop"
              />
              <div className="absolute bottom-4 left-4 text-on-primary bg-primary/80 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest rounded-sm">
                Authentic
              </div>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-sm">
              <img 
                className="w-full h-full object-cover grayscale" 
                alt="Organic herbs and superfoods" 
                src="https://images.unsplash.com/photo-1620023403565-381c817ea2d4?q=80&w=600&auto=format&fit=crop"
              />
              <div className="absolute bottom-4 left-4 text-on-primary bg-primary/80 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest rounded-sm">
                Organic
              </div>
            </div>
          </div>
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden mt-20 shadow-sm">
            <img 
              className="w-full h-full object-cover grayscale" 
              alt="Healthy lifestyle and fitness nutrition" 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop"
            />
            <div className="absolute bottom-4 left-4 text-on-primary bg-primary/80 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest rounded-sm">
              Performance
            </div>
          </div>
        </div>
      </section>

      {/* 2. How NutriVKart Began */}
      <section className="bg-surface-container-low px-8 md:px-24 py-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute -top-6 -left-6 w-full h-full bg-surface-container-highest -z-10 rounded-lg"></div>
            <img 
              className="w-full aspect-[4/5] object-cover rounded shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 grayscale" 
              alt="High performance nutrition and supplements laboratory" 
              src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=600&auto=format&fit=crop"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-xs uppercase tracking-[0.4em] text-primary font-bold mb-4 block">The Genesis</span>
            <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-6 leading-tight">How NutriVKart Began</h2>
            <div className="space-y-5 text-on-surface-variant leading-loose text-base md:text-lg font-light font-body">
              <p>
                NutriVKart was born from a singular vision: to create a trusted destination where health enthusiasts could find authentic, premium-quality nutritional supplements without compromise.
              </p>
              <p>
                We noticed a gap in the market between traditional wellness practices and modern sports nutrition. Our goal became bridging this gap, ensuring that every product we offer honors rigorous scientific standards while remaining true to natural, health-boosting ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Mission */}
      <section className="px-8 py-40 text-center bg-surface relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1 mb-8 border border-primary/20 rounded-full text-[10px] uppercase tracking-[0.3em] text-primary">
            Manifesto
          </div>
          <h2 className="font-headline text-4xl md:text-5xl text-primary leading-tight mb-8">
            Revolutionizing personal health by delivering uncompromising quality and performance.
          </h2>
          <p className="font-body text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed tracking-wide">
            Our mission is to elevate your fitness journey, guided by transparency, ethics, and unparalleled nutritional performance.
          </p>
        </div>
      </section>

      {/* 4. What Makes Us Unique (Bento-style Grid) */}
      <section className="px-8 md:px-24 py-24 md:py-32 bg-surface-container-highest">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-4">The NutriVKart Standard</h2>
            <p className="font-body text-secondary tracking-widest uppercase text-xs">Six pillars of nutritional excellence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/10">
            {/* Card 1 */}
            <div className="bg-surface-container-low p-12 transition-all hover:bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">science</span>
              <h3 className="font-headline text-2xl text-on-surface mb-4">Science-Backed</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Formulations based on modern nutritional science to ensure every supplement delivers maximum efficacy.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-surface-container-low p-12 transition-all hover:bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">verified</span>
              <h3 className="font-headline text-2xl text-on-surface mb-4">100% Authentic</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">We guarantee the authenticity of every product, sourcing directly from verified manufacturers and distributors.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-surface-container-low p-12 transition-all hover:bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">health_and_safety</span>
              <h3 className="font-headline text-2xl text-on-surface mb-4">Lab Tested</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Rigorously tested for purity and safety, ensuring you only put the best ingredients into your body.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-surface-container-low p-12 transition-all hover:bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">eco</span>
              <h3 className="font-headline text-2xl text-on-surface mb-4">Clean Ingredients</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Committed to providing products free from unnecessary fillers, artificial additives, and banned substances.</p>
            </div>
            {/* Card 5 */}
            <div className="bg-surface-container-low p-12 transition-all hover:bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">trending_up</span>
              <h3 className="font-headline text-2xl text-on-surface mb-4">Peak Performance</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Designed to support muscle recovery, boost energy levels, and help you smash your fitness goals.</p>
            </div>
            {/* Card 6 */}
            <div className="bg-surface-container-low p-12 transition-all hover:bg-surface-container-lowest">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">support_agent</span>
              <h3 className="font-headline text-2xl text-on-surface mb-4">Expert Guidance</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">Our team is dedicated to helping you find the right nutritional support for your specific lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Commitments */}
      <section className="bg-surface-container-high py-24 md:py-32 px-8 text-center">
        <div className="max-w-3xl mx-auto border-y border-outline-variant/30 py-16">
          <h2 className="font-headline text-3xl md:text-4xl text-primary mb-6">Our Everlasting Commitment</h2>
          <p className="font-body text-on-surface-variant text-base md:text-lg leading-loose mb-10">
            We pledge to remain transparent about our sourcing, to never compromise on supplement purity, and to continuously innovate toward a healthier future for our community.
          </p>
          <a className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-5 rounded-lg font-bold font-label tracking-widest uppercase text-xs transition-all hover:bg-primary/90" href="/search">
            Explore the Store
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </section>
    </main>
  );
}

