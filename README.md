# NutriVKart 🏋️‍♂️🌿

NutriVKart is a premium, high-performance e-commerce platform built for sports nutrition, fitness supplements, and Ayurvedic wellness products. Designed with a sleek, modern, and dark-themed Neumorphic interface, it offers seamless product browsing, secure checkouts, and a robust Admin dashboard for complete inventory and order management.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes (Serverless)
- **Database**: MongoDB (Mongoose)
- **Authentication**: NextAuth.js (Session-based JWT)
- **Payments**: Razorpay (Secure HMAC SHA-256 verification)
- **Media Storage**: Cloudinary (Secure SDK-signed uploads)
- **Rate Limiting**: Upstash Redis (Vercel KV ready)

## ✨ Key Features

- **Dynamic Catalog**: Browse high-quality Whey Proteins, Gainers, BCAAs, and Ayurvedic products.
- **Secure Cart & Checkout**: Real-time stock validation preventing "phantom adds" or race conditions.
- **Razorpay Integration**: Cryptographically verified payment sessions ensuring absolute transaction security.
- **Admin Dashboard**: Full control over products, orders, coupons, and Cloudinary media uploads.
- **Wholesale Portal**: Dedicated partnership forms for Gyms, Distributors, and Nutritionists.
- **Performance Optimized**: Built for edge environments with aggressive caching and optimized React compilation.

## 🛠️ Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/alokydv9045/nutrivkart.git
   cd nutrivkart
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure Environment Variables:**
   Rename `.env.example` to `.env.local` and fill in your actual credentials:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_secure_random_string
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:3000` to view the application.

## 📦 Deployment (Vercel)

This project is fully optimized for **Vercel** deployment:
1. Import the repository into your Vercel dashboard.
2. Add all environment variables from your `.env.local` to Vercel's Environment Variables settings. *(Note: You can skip `NEXTAUTH_URL` as Vercel auto-configures it).*
3. Deploy! The build script (`next build`) will automatically compile the optimized application.

## 🔒 Security Posture

- **API Protection**: All Admin API routes strictly validate RBAC (Role-Based Access Control) ensuring only `isAdmin` users can mutate data.
- **Payment Integrity**: Checkout amounts are calculated exclusively server-side via the database, nullifying client-side price manipulation exploits.
- **Media Security**: Cloudinary requests are strictly signed on the backend using the official Node SDK, keeping API Secrets completely hidden from the browser.

---
*Fuel Every Athlete. Grow Every Business.*
