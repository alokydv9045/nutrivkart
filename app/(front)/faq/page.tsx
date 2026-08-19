'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const faqList = [
  {
    num: "01",
    question: "Are your supplements lab-tested for purity?",
    answer: "Yes, every batch of NutriVKart supplements undergoes rigorous third-party lab testing for heavy metals, microbials, and exact ingredient verification to ensure 100% purity and safety."
  },
  {
    num: "02",
    question: "How do I verify the authenticity of my product?",
    answer: "All NutriVKart products come with a unique, scratchable authenticity tag. You can enter the hidden code on our website's verification page to confirm your product is genuine and sourced directly from us."
  },
  {
    num: "03",
    question: "What is the recommended dosage for Whey Protein?",
    answer: "For optimal muscle recovery, we recommend one scoop (approx. 30g) mixed with 200-250ml of cold water or milk, consumed within 30-45 minutes post-workout. You can also take it between meals to meet your daily protein goals."
  },
  {
    num: "04",
    question: "Do you offer vegan or plant-based alternatives?",
    answer: "Absolutely. We have a dedicated range of premium plant-based proteins sourced from peas and brown rice, along with vegan-friendly BCAAs, pre-workouts, and multivitamins."
  },
  {
    num: "05",
    question: "What is your shipping policy?",
    answer: "We offer fast, nationwide shipping. Orders are typically processed within 24 hours. Standard delivery takes 3-5 business days. You will receive a tracking link via email as soon as your order is dispatched."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="pt-32 pb-24 bg-background text-on-surface">
      {/* Hero Section */}
      <header className="max-w-screen-xl mx-auto px-8 mb-24 md:flex items-end justify-between border-b border-outline-variant/20 pb-16">
        <div className="md:max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-headline text-primary mb-6 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-xl font-body text-on-surface-variant leading-relaxed max-w-lg">
            Seeking clarity on our supplements and nutrition products? Find answers to your most common inquiries here.
          </p>
        </div>
        <div className="hidden md:block text-right">
          <span className="text-label-md font-label uppercase tracking-widest text-outline">Support / Vol. 01</span>
        </div>
      </header>

      {/* FAQ Content (Numbered List) */}
      <section className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Sticky Navigation */}
          <aside className="md:col-span-3 hidden md:block">
            <nav className="sticky top-40 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Categories</div>
              <ul className="space-y-4 font-label text-sm">
                <li className="text-primary font-bold">The Basics</li>
                <li className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Authenticity</li>
                <li className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Product Usage</li>
                <li className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Shipping & Logistics</li>
              </ul>
            </nav>
          </aside>

          {/* FAQ Items */}
          <div className="md:col-span-9 space-y-12">
            {faqList.map((faq, index) => (
              <div key={index} className="group border-b border-outline-variant/10 pb-12">
                <div 
                  className="flex items-baseline gap-8 cursor-pointer"
                  onClick={() => toggleOpen(index)}
                >
                  <span className="font-headline text-2xl text-primary/40 group-hover:text-primary transition-colors">
                    {faq.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-headline text-on-surface group-hover:text-primary transition-colors mb-4">
                      {faq.question}
                    </h3>
                    <div 
                      className={`max-w-2xl overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-on-surface-variant leading-relaxed font-body">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                  <span 
                    className={`material-symbols-outlined text-outline transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45 text-primary' : 'group-hover:rotate-45'
                    }`}
                  >
                    add
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-screen-xl mx-auto px-8 mt-48">
        <div className="bg-surface-container-low rounded-lg p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">Still have questions?</h2>
            <p className="text-on-surface-variant mb-10 text-lg">
              Our nutrition experts are available to guide you through product profiles, dosages, and fitness planning.
            </p>
            <Link href="mailto:support@nutrivkart.com">
              <button className="bg-primary text-on-primary px-10 py-5 rounded-lg font-label uppercase tracking-widest text-sm hover:bg-primary-container transition-all hover:scale-[1.02] active:scale-95">
                Connect with an Expert
              </button>
            </Link>
          </div>

          {/* Artistic Inset Image */}
          <div className="relative w-full md:w-1/3 aspect-[4/5]">
            <div className="absolute -top-8 -left-8 w-full h-full bg-outline-variant/10 rounded-lg -z-10 translate-x-4 translate-y-4"></div>
            <img 
              alt="Premium fitness supplements" 
              className="w-full h-full object-cover rounded-lg shadow-sm grayscale" 
              src="https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=600&auto=format&fit=crop"
            />
            <div className="absolute -bottom-4 -right-4 p-4 bg-surface-container-lowest shadow-sm rounded-lg max-w-[160px]">
              <p className="text-[10px] font-headline italic text-primary leading-tight">
                "Science-backed nutrition for peak performance."
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
