// Centralized brand helper for UI & server usage
// Uses NEXT_PUBLIC_* so it works on client and server in Next.js

export const brandName = process.env.NEXT_PUBLIC_BRAND_NAME || 'NutriVKart';
export const brandTagline = process.env.NEXT_PUBLIC_BRAND_TAGLINE || 'Fuel Your Strength. Live Your Best.';
export const shopAddress = process.env.NEXT_PUBLIC_SHOP_ADDRESS || 'India (Authorized SCN Distributor — Western Uttar Pradesh)';

export const brandSlug = brandName.toLowerCase().replace(/[^a-z0-9]+/gi, '').trim();
export const brandEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@nutrivkart.in';

export const storeName = process.env.STORE_NAME || 'NutriVKart Store';
export const supportPhone = process.env.NEXT_PUBLIC_SUPPORT_PHONE || '+91 92587 76901';

