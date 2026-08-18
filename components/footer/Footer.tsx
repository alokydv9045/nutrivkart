import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Share2, Globe, ArrowRight } from 'lucide-react';
import { brandEmail } from '@/lib/brand';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container relative overflow-hidden text-foreground">
      {/* Noise Texture Overlay (4%) */}
      <div className="absolute inset-0 noise-overlay opacity-[0.04] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Column 1: Brand Story & Socials */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="NutriVKart Logo"
                  width={40}
                  height={40}
                  className="rounded-full border border-primary/20 object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase text-primary">NutriVKart</span>
            </Link>

            <div className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground">Fuel Your Strength</h2>
              <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                One Stop Destination for All Your Health, Fitness & Wellness Needs. 
                Premium sports nutrition for every athlete.
              </p>
            </div>

            {/* Social Area */}
            <div className="flex items-center space-x-6 pt-4">
              <a 
                href="https://www.instagram.com/NutriVKart" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2 group"
              >
                <Instagram size={18} className="transition-transform group-hover:scale-110" />
                <span className="text-[10px] font-bold tracking-widest uppercase">Instagram</span>
              </a>
              <a 
                href="https://wa.me/919258776901" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2 group"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-[19px] h-[19px] fill-current transition-transform group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="text-[10px] font-bold tracking-widest uppercase">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Categories</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="/shop?category=Whey+Protein" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                Whey Protein 
                <ArrowRight size={12} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
              <Link href="/shop?category=Mass+%26+Weight+Gainers" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                Mass Gainers
                <ArrowRight size={12} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
              <Link href="/shop?category=BCAA" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                BCAA & Pre-Workout
                <ArrowRight size={12} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
              <Link href="/ayurvedic" className="text-sm font-bold text-accent hover:text-primary transition-colors inline-flex items-center group mt-2">
                Ayurvedic & Unani
                <ArrowRight size={12} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            </nav>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Quick Links</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="/wholesale" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Wholesale B2B</Link>
              <Link href="/faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
              <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact Support</Link>
            </nav>
          </div>

          {/* Column 4: Contact Information */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-primary">Contact Us</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                India (Authorized SCN Distributor — Western Uttar Pradesh)
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                Phone: <a href="tel:+919258776901" className="hover:text-primary">+91 92587 76901</a>
              </p>
              <Link href={`mailto:${brandEmail}`} className="text-sm font-bold text-primary underline underline-offset-4">{brandEmail}</Link>
            </div>
          </div>
        </div>

        {/* Minimalist Legal Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
            <p className="text-[10px] font-medium text-muted-foreground tracking-wider">
              © {currentYear} NutriVKart SPORTS NUTRITION. ALL RIGHTS RESERVED.
            </p>
            
            <div className="flex items-center space-x-10">
              <span className="hidden md:inline text-[10px] font-bold text-primary/60 tracking-widest uppercase">Fuel Your Strength</span>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Globe size={14} className="text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-widest">India (English)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

