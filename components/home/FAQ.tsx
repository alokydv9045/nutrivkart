'use client';

import React, { useState } from 'react';

const faqData = [
  {
    num: "01",
    question: "Are all NutriVKart products 100% authentic?",
    answer: "Absolutely. We source directly from official brand distributors and manufacturers. Every product comes with batch traceability and authenticity verification. We are an authorized SCN distributor in Western Uttar Pradesh."
  },
  {
    num: "02",
    question: "Which brands do you carry?",
    answer: "We carry a premium selection of top-tier brands including MuscleBlaze, Optimum Nutrition, GNC, Labrada, MuscleTech, BSN, Dymatize, and many more. We also offer a curated range of Ayurvedic & Unani wellness products."
  },
  {
    num: "03",
    question: "How do I choose the right supplement for my goals?",
    answer: "Start by identifying your primary fitness goal — muscle gain, weight loss, endurance, or recovery. For muscle building, start with a quality whey protein. For weight gain, mass gainers are ideal. For performance, try a pre-workout or creatine. Our team is always available on WhatsApp for free consultation."
  },
  {
    num: "04",
    question: "What is the 'Enquiry' mode on some products?",
    answer: "Certain premium products, especially in our Ayurvedic & Unani category, require personalized guidance before purchase. These products use an enquiry-based workflow where our experts will consult with you on dosage, compatibility, and usage before confirming your order."
  },
  {
    num: "05",
    question: "Do you ship pan-India?",
    answer: "Yes! We offer fast and reliable shipping across India. Most orders within Western UP are delivered within 1-2 business days. Pan-India deliveries typically arrive within 3-7 business days depending on your location."
  },
  {
    num: "06",
    question: "Do you offer wholesale or B2B pricing?",
    answer: "Yes, we partner with gyms, fitness centers, retail stores, and distributors. Visit our Wholesale page to submit a partnership enquiry and our team will get back to you with competitive B2B pricing."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Header */}
        <header className="text-center mb-24">
          <div className="flex justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-4xl opacity-60">help_center</span>
          </div>
          <h1 className="font-black text-5xl md:text-6xl text-primary tracking-tighter mb-4 uppercase">FAQ</h1>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed font-medium">
            Everything you need to know about our supplements, ordering, and delivery.
          </p>
        </header>

        {/* FAQ Accordion Layout */}
        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <div key={index} className="group border-b border-border py-8">
              <button 
                onClick={() => toggleOpen(index)}
                className="w-full flex items-start text-left focus:outline-none"
                suppressHydrationWarning
              >
                <span className="font-black text-lg text-primary/40 mr-6 pt-1">{faq.num}</span>
                <div className="flex-grow">
                  <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div 
                    className={`mt-4 text-muted-foreground leading-relaxed max-w-5xl overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
                <span 
                  className={`material-symbols-outlined text-muted-foreground ml-4 mt-1 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : ''
                  } group-hover:text-primary`}
                >
                  add
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <section className="mt-32 bg-surface-container border border-border rounded-sm p-12 text-center">
          <h2 className="font-black text-3xl text-foreground mb-6 uppercase tracking-tight">Still have questions?</h2>
          <p className="text-muted-foreground mb-8 font-medium max-w-xl mx-auto">Our team is available for personalized supplement guidance. Reach out via WhatsApp or email for expert advice.</p>
          <a href="/wholesale" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-xs hover:opacity-90 transition-opacity" suppressHydrationWarning>
            Contact Our Team
          </a>
        </section>
      </div>
    </section>
  );
}
