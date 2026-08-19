import { Metadata } from 'next'
import { Star, Users, Award, Heart, ShieldCheck, Dumbbell, Activity } from 'lucide-react'
import Testimonials from '@/components/testimonials/Testimonials'

export const metadata: Metadata = {
  title: 'Customer Testimonials - NutriVKart',
  description: 'Read what our customers say about NutriVKart nutritional supplements. Real reviews from verified buyers sharing their fitness and wellness transformations.',
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-headline tracking-tight">
              Real Transformations
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-body leading-relaxed">
              Discover why thousands of athletes and health enthusiasts trust NutriVKart.
              Real stories from real people who achieved their fitness goals with our premium supplements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-lg px-6 py-3 shadow-sm border border-gray-100">
                <Star className="w-5 h-5 text-green-600 fill-current" />
                <span className="font-semibold text-gray-900">4.9/5</span>
                <span className="text-gray-600 font-medium">Average Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-lg px-6 py-3 shadow-sm border border-gray-100">
                <Users className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">25,000+</span>
                <span className="text-gray-600 font-medium">Active Members</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Testimonials
              title="Customer Reviews & Testimonials"
              items={[
                {
                  id: "review-1",
                  name: "Priya Sharma",
                  role: "Verified Buyer · Mumbai",
                  rating: 5,
                  quote: "NutriVKart's whey protein isolate is the cleanest I've ever used. Excellent mixability, no bloating, and the results speak for themselves. Highly recommended for anyone serious about their fitness journey!"
                },
                {
                  id: "review-2",
                  name: "Rahul Kumar",
                  role: "Verified Buyer · Delhi",
                  rating: 5,
                  quote: "I was skeptical about buying supplements online, but the authentication tags on NutriVKart products gave me peace of mind. Delivery was super fast, and the pre-workout gives an amazing pump without the crash."
                },
                {
                  id: "review-3",
                  name: "Anjali Patel",
                  role: "Yoga Instructor · Ahmedabad",
                  rating: 5,
                  quote: "Their range of organic vitamins and plant-based proteins is phenomenal. My energy levels have never been this consistent. Finally, a brand that understands holistic wellness and performance."
                },
                {
                  id: "review-4",
                  name: "Vikram Singh",
                  role: "Verified Buyer · Bengaluru",
                  rating: 4,
                  quote: "Great products with visible results in my muscle recovery. The BCAA blend tastes amazing. Giving 4 stars only because my favorite flavor goes out of stock quite fast!"
                },
                {
                  id: "review-5",
                  name: "Meera Joshi",
                  role: "Fitness Blogger · Pune",
                  rating: 5,
                  quote: "I love how transparent NutriVKart is about their ingredients. No proprietary blends, no hidden fillers. Just pure science-backed nutrition that actually helps you reach your goals."
                },
                {
                  id: "review-6",
                  name: "Arjun Reddy",
                  role: "Verified Buyer · Hyderabad",
                  rating: 5,
                  quote: "Outstanding quality and fast shipping. The mass gainer helped me break my plateau. NutriVKart has definitely earned a loyal customer in me!"
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-headline">
              Why Athletes Trust NutriVKart
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Our commitment to purity, transparency, and performance has made us a trusted name in sports nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-50">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-headline">100% Authentic</h3>
              <p className="text-gray-600 text-sm font-body leading-relaxed">Directly sourced from manufacturers with verifyable authenticity tags.</p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-50">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-headline">Peak Performance</h3>
              <p className="text-gray-600 text-sm font-body leading-relaxed">Clinically dosed ingredients to maximize your workout potential.</p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-50">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-headline">Lab Tested</h3>
              <p className="text-gray-600 text-sm font-body leading-relaxed">Every batch is rigorously tested for purity and heavy metals.</p>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-50">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 font-headline">Expert Support</h3>
              <p className="text-gray-600 text-sm font-body leading-relaxed">Dedicated nutrition experts to help you choose the right stack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-headline tracking-tight">
            Ready to Transform Your Physique?
          </h2>
          <p className="text-green-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-body font-light">
            Experience the NutriVKart difference. Pure, potent, and proven by athletes worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/search"
              className="bg-white hover:bg-gray-50 text-green-700 font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl uppercase tracking-wider text-sm flex items-center justify-center"
            >
              Shop Supplements
            </a>
            <a
              href="/about"
              className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all uppercase tracking-wider text-sm flex items-center justify-center"
            >
              Our Mission
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
