"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ShieldCheck, Truck } from 'lucide-react';
import TrustBarModern from '@/components/home/TrustBarModern';
import toast from 'react-hot-toast';

export default function WholesalePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: 'gym',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/wholesale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        toast.success('Enquiry submitted successfully! Our team will contact you shortly.');
        setFormData({ name: '', email: '', phone: '', businessName: '', businessType: 'gym', message: '' });
      } else {
        toast.error('Failed to submit enquiry. Please try again or contact us directly.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-surface font-body text-on-surface pt-28 pb-32'>
      <main className="max-w-screen-xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left Column: Info */}
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Authorized SCN Distributor — Western UP</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[1.1] uppercase mb-6">
              India's Trusted <span className="text-primary">Wholesale Partner</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-bold italic text-secondary mb-8">Fuel Every Athlete. Grow Every Business.</h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-10">
              From premium Whey Protein to Advanced Sports Nutrition, Ayurvedic Wellness, and Men's Health, we are committed to supplying high-quality products that help businesses increase profits while helping customers achieve their fitness goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 mt-1">
                  <ShieldCheck size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg uppercase tracking-tight">Authorized SCN Distributor</h3>
                  <p className="text-muted-foreground text-sm mt-1">Official distributor across Western Uttar Pradesh. 100% authentic supply direct from manufacturers.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 mt-1">
                  <CheckCircle size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg uppercase tracking-tight">Premium Quality & Margins</h3>
                  <p className="text-muted-foreground text-sm mt-1">Wholesale pricing designed to help Gym owners, Supplement retailers, and Distributors maximize profitability.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 mt-1">
                  <Truck size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg uppercase tracking-tight">Reliable Distribution</h3>
                  <p className="text-muted-foreground text-sm mt-1">Fast dispatch, dependable inventory, and consistent stock availability. When our partners grow, we grow together.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="bg-surface-container border border-border p-8 md:p-10 rounded-sm shadow-xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-6">Partner Enquiry</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Full Name *</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface-bright border border-border rounded-sm px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Phone Number *</label>
                  <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-surface-bright border border-border rounded-sm px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email Address *</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-surface-bright border border-border rounded-sm px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Business Name *</label>
                  <input 
                    required
                    type="text" 
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-surface-bright border border-border rounded-sm px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Business Type *</label>
                  <select 
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-surface-bright border border-border rounded-sm px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  >
                    <option value="gym">Gym / Fitness Center</option>
                    <option value="nutrition-store">Nutrition Store</option>
                    <option value="retail">Retailer</option>
                    <option value="fitness-chain">Fitness Chain / Academy</option>
                    <option value="distributor">Regional Distributor</option>
                    <option value="trainer">Personal Trainer / Coach</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Estimated Monthly Volume / Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-surface-bright border border-border rounded-sm px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative inline-flex items-center justify-center px-8 py-4 font-bold text-primary-foreground bg-primary transition-all duration-300 hover:opacity-90 disabled:opacity-50 mt-4 rounded-sm"
              >
                <span className="mr-2 uppercase tracking-widest">{isSubmitting ? 'Submitting...' : 'Request Partnership'}</span>
                {!isSubmitting && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </div>
        </div>

        {/* Extended PDF 5 Content Section */}
        <div className="mt-16 bg-surface-container-low border border-border p-10 rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-primary mb-4">Complete Portfolio</h3>
              <ul className="space-y-2 text-muted-foreground text-sm font-medium">
                <li>• Whey Protein (Concentrate, Isolate, Hydrolyzed)</li>
                <li>• Mass & Lean Gainers</li>
                <li>• Creatine Monohydrate</li>
                <li>• Pre, Intra & Post Workout</li>
                <li>• BCAA, EAA & Glutamine</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-primary mb-4">Health & Wellness</h3>
              <ul className="space-y-2 text-muted-foreground text-sm font-medium">
                <li>• Multivitamins & Omega-3</li>
                <li>• Liver & Joint Support</li>
                <li>• Digestive & Immunity Support</li>
                <li>• Men's Wellness & Performance</li>
                <li>• Daily Vitality Supplements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-primary mb-4">Ayurvedic Range</h3>
              <ul className="space-y-2 text-muted-foreground text-sm font-medium">
                <li>• Authentic Ayurvedic Bhasma</li>
                <li>• Traditional Herbal Formulations</li>
                <li>• Natural Performance Support</li>
                <li>• Advanced Performance Solutions</li>
              </ul>
            </div>
          </div>
        </div>

      </main>
      
      <TrustBarModern />
    </div>
  );
}
