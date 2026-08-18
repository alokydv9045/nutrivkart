"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Shield, Zap } from 'lucide-react';
import Image from 'next/image';

const HeroNutriVKart = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-surface-container overflow-hidden">
      {/* Background with abstract dark athletic theme elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container via-surface-container/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg-dark.png')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        {/* Neon green abstract glow */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-full max-w-lg h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-sm bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6 border border-primary/20">
              Premium Sports Nutrition
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[1.1] mb-6 uppercase">
              Fuel Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Strength</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl font-medium leading-relaxed">
              One Stop Destination for All Your Health, Fitness & Wellness Needs. Push past your limits with authentic, scientifically-backed supplements.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/shop" 
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary-foreground bg-primary overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-95 clip-polygon"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span className="mr-2 uppercase tracking-widest">Shop Supplements</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/ayurvedic" 
                className="group inline-flex items-center justify-center px-8 py-4 font-bold text-foreground bg-surface-bright hover:bg-surface-high border border-border transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span className="mr-2 uppercase tracking-widest text-sm">Ayurvedic Premium</span>
                <Shield size={18} className="text-primary group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Stats/Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16 pt-10 border-t border-border"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20">
                <Shield size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-foreground font-bold text-sm uppercase">100% Authentic</p>
                <p className="text-muted-foreground text-xs font-medium">Direct from Brands</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20">
                <Activity size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-foreground font-bold text-sm uppercase">Lab Tested</p>
                <p className="text-muted-foreground text-xs font-medium">Quality Assured</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20">
                <Zap size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-foreground font-bold text-sm uppercase">Fast Delivery</p>
                <p className="text-muted-foreground text-xs font-medium">Pan India Shipping</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroNutriVKart;
