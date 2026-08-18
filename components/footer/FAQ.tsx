import React from 'react';
import Link from 'next/link';
import { Plus, ArrowRight } from 'lucide-react';
import { brandEmail } from '@/lib/brand';

type FAQ = {
  q: string;
  a: string;
  links?: { label: string; href: string }[];
};

const faqs: FAQ[] = [
  {
    q: 'Are NutriVKart products 100% authentic?',
    a: 'Yes, every product is sourced directly from official brand distributors. We are an authorized SCN distributor in Western Uttar Pradesh. All products come with batch traceability.',
  },
  {
    q: 'Do you offer supplements for both men and women?',
    a: 'Absolutely. Our supplements are formulated based on fitness goals, not gender. Whether it\'s whey protein, BCAAs, or multivitamins — our products work for all athletes.',
  },
  {
    q: 'How do I choose the right protein supplement?',
    a: 'It depends on your goal: Whey Protein Isolate for lean muscle, Mass Gainers for bulking, and Casein for overnight recovery. Contact our team for personalized guidance.',
  },
  {
    q: 'Where are your products sourced from?',
    a: 'We partner with trusted global and Indian brands like MuscleBlaze, GNC, Optimum Nutrition, and Labrada. All products are stored in temperature-controlled warehouses.',
  },
  {
    q: 'Do you ship pan-India?',
    a: 'Yes. We offer fast and reliable delivery across India. Local orders in Western UP arrive in 1-2 days, pan-India orders in 3-7 business days.',
  },
  {
    q: 'Do you offer B2B or wholesale pricing?',
    a: 'Yes, we partner with gyms, fitness centers, and retailers. Visit our Wholesale page for partnership enquiries.',
    links: [{ label: 'Wholesale Page', href: '/wholesale' }],
  },
];

export default function FAQSection() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  } as const;

  return (
    <section id="faqs" className="bg-surface-container text-foreground py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-tight uppercase">
            You Have Questions...<br />
            We Have Answers!
          </h2>
        </div>

        <div className="space-y-0 border-t border-border">
          {faqs.map((item, idx) => (
            <details key={idx} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between py-8">
                <div className="flex items-center gap-8">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full border border-border flex items-center justify-center text-sm font-semibold text-muted-foreground group-open:text-primary group-open:border-primary transition-colors">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-xl md:text-2xl font-normal group-open:font-medium transition-all">
                    {item.q}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-open:bg-primary group-open:border-primary transition-all">
                  <Plus className="h-5 w-5 text-muted-foreground group-open:text-primary-foreground group-open:rotate-45 transition-all duration-300" />
                </div>
              </summary>
              <div className="pb-8 pl-20 pr-12 text-lg text-muted-foreground leading-relaxed font-light">
                {item.a}
                {item.links && item.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {item.links.map((lnk) => (
                      <Link
                        key={lnk.href + lnk.label}
                        href={lnk.href}
                        className="text-primary hover:underline font-normal text-sm"
                      >
                        {lnk.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-end">
          <Link href="/wholesale">
            <button className="flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-sm hover:opacity-90 transition-all group">
              <span className="text-sm font-bold uppercase tracking-widest">Contact Us</span>
              <div className="bg-black/20 group-hover:bg-black/40 p-2 rounded-full transition-colors">
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
