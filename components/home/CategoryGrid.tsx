"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    title: 'Whey Protein',
    description: 'Fast-absorbing protein for muscle recovery & growth.',
    image: '/images/products/whey.png',
    href: '/shop?category=Whey+Protein',
    colSpan: 'md:col-span-2',
  },
  {
    title: 'Mass Gainers',
    description: 'High-calorie blends for serious size.',
    image: '/images/products/gainer.png',
    href: '/shop?category=Mass+%26+Weight+Gainers',
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Pre-Workout & BCAA',
    description: 'Explosive energy and endurance.',
    image: '/images/products/gainer.png',
    href: '/shop?category=Pre-Workout',
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Ayurvedic & Wellness',
    description: 'Premium natural vitality support.',
    image: '/images/products/ayurvedic.png',
    href: '/ayurvedic',
    colSpan: 'md:col-span-2',
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-24 bg-surface relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-foreground mb-4">
              Shop By <span className="text-primary">Category</span>
            </h2>
            <p className="text-muted-foreground font-medium text-lg">
              Find exactly what your body needs to perform at its peak.
            </p>
          </div>
          <Link 
            href="/shop"
            className="inline-flex items-center font-bold text-sm uppercase tracking-widest text-primary hover:text-primary-foreground hover:bg-primary px-6 py-3 border border-primary transition-colors"
          >
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative h-[300px] lg:h-[400px] overflow-hidden bg-surface-container ${category.colSpan}`}
            >
              <Link href={category.href} className="absolute inset-0 z-20">
                <span className="sr-only">Shop {category.title}</span>
              </Link>
              
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/40 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0">
                {/* Fallback pattern if image is missing */}
                <div className="w-full h-full bg-surface-bright flex items-center justify-center opacity-20">
                  <span className="font-black text-6xl text-surface-container">NK</span>
                </div>
                {/* Real Image Placeholder */}
                <Image src={category.image} alt={category.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>

              <div className="absolute bottom-0 left-0 p-6 lg:p-8 z-20 w-full flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground font-medium text-sm max-w-sm">
                    {category.description}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/20 text-primary transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
