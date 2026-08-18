'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu as MenuIcon, X } from 'lucide-react';

import Menu from './Menu';
import SearchInline from './SearchInline';
import useLayoutService from '@/lib/hooks/useLayout';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleDrawer, drawerOpen } = useLayoutService();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-surface/90 backdrop-blur-md shadow-sm border-b border-border/50' 
        : 'bg-surface border-b border-transparent'
    } text-foreground`}>
      <nav aria-label="Main navigation" className="w-full">
        <div className='container mx-auto px-4 flex items-center justify-between min-h-[3.5rem] md:min-h-[4rem]'>
          {/* Left Area: Hamburger (mobile) + Logo */}
          <div className='flex items-center flex-shrink-0 gap-2'>
            {/* Premium Hamburger Toggle (Mobile/Tablet Only) - Now on Left */}
            <button
              onClick={toggleDrawer}
              className='lg:hidden flex items-center justify-center p-2 rounded-full hover:bg-primary/20 transition-colors text-foreground'
              aria-label='Toggle Menu'
              suppressHydrationWarning
            >
              {drawerOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>

            <Link
              href='/'
              className='flex items-center gap-2 group'
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/images/logo.png"
                  alt="NutriVKart Logo"
                  width={40}
                  height={40}
                  className="rounded-full border border-primary/20"
                  priority
                />
              </div>
              <span className='hidden sm:inline-block text-lg sm:text-2xl font-black tracking-tighter uppercase text-primary hover:text-accent transition-colors whitespace-nowrap'>
                NutriVKart
              </span>
            </Link>
          </div>
          
          {/* Center: Navigation Links (desktop only) */}
          <div className='hidden lg:flex items-center space-x-1 xl:space-x-2'>
            <Link href='/' className='text-sm font-bold text-foreground hover:text-primary-foreground transition-all duration-300 py-2 px-4 rounded-full hover:bg-primary'>
              Home
            </Link>
            <Link href='/shop' className='text-sm font-bold text-foreground hover:text-primary-foreground transition-all duration-300 py-2 px-4 rounded-full hover:bg-primary'>
              Shop
            </Link>
            <Link href='/shop?category=Whey+Protein' className='text-sm font-bold text-foreground hover:text-primary-foreground transition-all duration-300 py-2 px-4 rounded-full hover:bg-primary'>
              Proteins
            </Link>
            <Link href='/ayurvedic' className='text-sm font-bold text-foreground hover:text-primary-foreground transition-all duration-300 py-2 px-4 rounded-full hover:bg-primary'>
              Ayurvedic
            </Link>
            <Link href='/wholesale' className='text-sm font-bold text-foreground hover:text-primary-foreground transition-all duration-300 py-2 px-4 rounded-full hover:bg-primary'>
              Wholesale
            </Link>
          </div>
          
          {/* Right: Search + Menu */}
          <div className='flex items-center justify-end gap-0 sm:gap-1 md:gap-2'>
            <SearchInline />
            <div className="hidden sm:block">
              <Menu showSearch={false} />
            </div>
            
            {/* Unified Mobile Actions */}
            <div className="sm:hidden flex items-center">
              <Menu showSearch={false} showAccount={false} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

