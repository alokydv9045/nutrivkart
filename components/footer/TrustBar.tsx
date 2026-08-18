'use client';

import React from 'react';
import { ShieldCheck, Award, Truck, IndianRupee } from 'lucide-react';

const TrustBar = () => {
  const trustItems = [
    { icon: ShieldCheck, text: '100% Original Products' },
    { icon: Award, text: 'Trusted Brands' },
    { icon: Truck, text: 'Fast & Safe Delivery' },
    { icon: IndianRupee, text: 'Best Prices Everyday' }
  ];

  return (
    <div className="bg-surface-container">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10 text-base md:text-lg">
          {trustItems.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 cursor-default hover:bg-primary hover:text-primary-foreground text-foreground group"
            >
              <item.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
