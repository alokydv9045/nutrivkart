'use client';

import { Truck, RotateCcw, ShieldCheck,Award } from 'lucide-react';
import { motion } from 'framer-motion';

const trustItems = [
  {
    icon: Truck,
    title: 'Fast Shipping',
    description: 'On all orders above ₹999',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    description: '7-day replacement policy',
  },
  {
    icon: ShieldCheck,
    title: '100% Authentic',
    description: 'Direct from manufacturers',
  },
  {
    icon: Award,
    title: 'Authorized Seller',
    description: 'Genuine sports nutrition',
  },
];

export default function TrustBarModern() {
  return (
    <section className="py-6 bg-surface border-t border-outline-variant/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {trustItems.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline text-base text-foreground mb-1">{item.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-[180px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
