import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Terms & Conditions | NutriVKart',
  description: 'The terms of service for NutriVKart. Guidelines for purchasing and using our nutritional supplements.',
};

export default function TermsPage() {
  return (
    <div className="bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
      <div className="noise-overlay fixed inset-0 pointer-events-none opacity-[0.03] -z-10"></div>
      
      {/* Hero Header */}
      <header className="pt-32 pb-16 px-8 max-w-screen-xl mx-auto text-center">
        <span className="font-body text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-6 block opacity-60">Legal Information</span>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-8">Terms &amp; Conditions</h1>
        <p className="font-serif italic text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
          Guidelines and terms for engaging with NutriVKart and purchasing our nutritional products.
        </p>
      </header>

      <main className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-32">
        {/* Sidebar Navigation (Sticky) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
          <div className="bg-surface-container-low p-8 border-l-2 border-primary/20 rounded-sm">
            <h3 className="font-headline font-bold text-lg mb-6">Sections</h3>
            <ul className="space-y-4">
              <li><Link className="text-sm font-body text-secondary hover:text-primary transition-colors block" href="#acceptance">Acceptance of Terms</Link></li>
              <li><Link className="text-sm font-body text-secondary hover:text-primary transition-colors block" href="#products">Product Use & Medical Disclaimer</Link></li>
              <li><Link className="text-sm font-body text-secondary hover:text-primary transition-colors block" href="#payments">Ordering &amp; Payments</Link></li>
              <li><Link className="text-sm font-body text-secondary hover:text-primary transition-colors block" href="#shipping">Shipping Policy</Link></li>
              <li><Link className="text-sm font-body text-secondary hover:text-primary transition-colors block" href="#returns">Returns & Cancellations</Link></li>
            </ul>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <div className="lg:col-span-9 space-y-24">
          {/* Section 1: Acceptance */}
          <section className="scroll-mt-32" id="acceptance">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-8">1. Introduction &amp; Acceptance</h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed font-body font-light text-lg">
              <p>Welcome to NutriVKart. By accessing or using our website and purchasing our nutritional products, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.</p>
              <p>If you do not agree with any part of these terms, please refrain from using our services or purchasing our products.</p>
            </div>
          </section>

          {/* Section 2: Products */}
          <section className="scroll-mt-32" id="products">
            <div className="bg-surface-container-low p-10 md:p-16 relative overflow-hidden rounded-sm border border-outline-variant/10">
              <div className="relative z-10">
                <h2 className="font-headline text-3xl font-bold text-on-surface mb-8">2. Product Use & Medical Disclaimer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <p className="font-body text-on-surface-variant leading-relaxed font-light">
                      The products and claims made about specific products on or through this site have not been evaluated by the FDA or equivalent medical authorities. 
                    </p>
                    <div className="flex flex-wrap gap-3 pt-4">
                      <span className="px-4 py-1.5 bg-secondary-container/50 text-on-secondary-container text-[10px] font-bold rounded-full uppercase tracking-widest font-label">Supplements</span>
                      <span className="px-4 py-1.5 bg-secondary-container/50 text-on-secondary-container text-[10px] font-bold rounded-full uppercase tracking-widest font-label">Vitamins</span>
                      <span className="px-4 py-1.5 bg-secondary-container/50 text-on-secondary-container text-[10px] font-bold rounded-full uppercase tracking-widest font-label">Organics</span>
                    </div>
                  </div>
                  <div className="space-y-4 font-serif italic text-secondary text-base border-l border-outline-variant/30 pl-8 font-light">
                    <p>"Nutritional supplements are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any diet, exercise, or supplementation program."</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Ordering */}
          <section className="scroll-mt-32" id="payments">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-8">3. Ordering &amp; Payments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 font-body text-on-surface-variant text-lg font-light">
              <div className="space-y-4">
                <h4 className="font-bold text-on-surface font-headline uppercase tracking-wide text-sm">Order Verification</h4>
                <p>We reserve the right to limit the sales of our products to any person, geographic region, or jurisdiction. We may exercise this right on a case-by-case basis and refuse any order you place with us.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-on-surface font-headline uppercase tracking-wide text-sm">Secure Checkout</h4>
                <p>Payment transactions are processed through encrypted, industry-standard channels. We never store your sensitive financial data on our servers.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Shipping */}
          <section className="scroll-mt-32" id="shipping">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full space-y-6">
                <h2 className="font-headline text-3xl font-bold text-on-surface">4. Shipping Policy</h2>
                <p className="font-body text-on-surface-variant text-lg font-light leading-relaxed">
                  NutriVKart aims to deliver your nutritional supplements as swiftly and safely as possible. We use trusted courier partners to ensure that products are not exposed to extreme conditions that could compromise their efficacy.
                </p>
                <p className="font-serif italic text-primary text-xl">Standard dispatch within 24-48 hours. Expected transit: 3 to 7 business days.</p>
              </div>
            </div>
          </section>

          {/* Section 5: Returns */}
          <section className="scroll-mt-32" id="returns">
            <div className="border-t border-outline-variant/20 pt-16">
              <h2 className="font-headline text-3xl font-bold text-on-surface mb-8">5. Returns & Cancellations</h2>
              <div className="space-y-8 font-body font-light text-lg">
                <div className="bg-surface-container-high p-10 flex gap-8 items-start rounded-sm border-l-4 border-primary/40">
                  <span className="material-symbols-outlined text-primary text-4xl">info</span>
                  <p className="text-on-surface-variant italic leading-relaxed">Due to the consumable nature of our products and strict health regulations, we cannot accept returns on opened supplements. Cancellations must be made prior to order dispatch.</p>
                </div>
                <p className="text-on-surface-variant leading-relaxed">If you receive an incorrect or damaged product, please contact our support team within 48 hours of delivery with photographic evidence for a replacement or refund.</p>
              </div>
            </div>
          </section>

          {/* Section 7 & 8: Legal & Contact */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-outline-variant/20 pt-20">
            <div>
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-6">6. Limitation of Liability</h2>
              <p className="font-body text-base text-on-surface-variant leading-loose font-light">
                NutriVKart shall not be held liable for any adverse reactions resulting from the use of our products. Please verify all ingredients for potential allergens. Our maximum liability to you is limited to the purchase price of the product in question.
              </p>
            </div>
            <div>
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-6">7. Contact Information</h2>
              <div className="space-y-6 font-body">
                <p className="text-base text-on-surface-variant font-light leading-relaxed">For any inquiries regarding these terms or your order, please contact us at:</p>
                <div className="space-y-2">
                  <p className="text-primary font-bold text-xl font-headline tracking-wide">support@nutrivkart.com</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

