'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Tab {
  id: string;
  label: string;
  title: string;
  content: string;
  image: string;
}

export default function ProductTabs({ description }: { description: string }) {
  const tabs: Tab[] = [
    {
      id: 'usage',
      label: 'Recommended Usage',
      title: 'Maximize Your Gains',
      content: 'For optimal results, mix one scoop with 200-250ml of cold water or your preferred beverage. Consume immediately after your workout to support muscle recovery, or any time of the day to meet your daily protein requirements. Stay adequately hydrated throughout the day.',
      image: '/images/categories/whey.png'
    },
    {
      id: 'authenticity',
      label: '100% Authentic',
      title: 'Verified Quality',
      content: 'Every product we sell is sourced directly from official brand importers and manufacturers. Look for the importer seal and scratch-code on the packaging to verify authenticity through the brand\'s official portal. We guarantee zero compromises on quality.',
      image: '/images/categories/preworkout.jpg'
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      title: 'Fast & Secure Delivery',
      content: 'We offer expedited shipping pan-India. Orders are securely packed in tamper-proof boxes. While we do not accept returns on opened supplements for hygiene and safety reasons, any sealed product with manufacturing defects is eligible for a full replacement within 7 days.',
      image: '/images/categories/ayurvedic.png'
    }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="mt-24 bg-surface-container relative py-20">
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="flex border-b border-border mb-12 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-8 pb-4 font-black uppercase tracking-wider text-sm whitespace-nowrap transition-all duration-300 ${
                activeTab.id === tab.id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="space-y-12 transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
              <h2 className="font-black text-3xl text-foreground uppercase tracking-tight leading-tight">{activeTab.title}</h2>
              <p className="text-muted-foreground leading-relaxed font-medium">
                {activeTab.content}
              </p>
            </div>
            <div className="rounded-sm overflow-hidden aspect-square shadow-xl animate-in fade-in slide-in-from-right-4 duration-700 bg-surface">
              <div className="w-full h-full bg-surface-bright flex items-center justify-center relative">
                 {/* Fallback pattern if image is missing */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <span className="font-black text-8xl text-foreground">NK</span>
                 </div>
                 <Image 
                    src={activeTab.image}
                    alt={activeTab.label}
                    fill
                    className="object-cover relative z-10"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
