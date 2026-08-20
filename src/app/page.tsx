"use client";

import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";
import { themeConfig } from "@/../themeConfig";
import { getAssetPath } from "@/lib/utils";


const featuredProducts = [
  {
    id: "1",
    name: "Evening Gown Elegance",
    price: 45000,
    image: "/product-1.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Burgundy", "Black", "Navy"],
  },
  {
    id: "2",
    name: "Urban Chic Collection",
    price: 28000,
    image: "/product-2.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Charcoal", "White"],
  },
  {
    id: "3",
    name: "Luxury Accessories",
    price: 35000,
    image: "/product-3.jpg",
    sizes: ["One Size"],
    colors: ["Gold", "Silver", "Bronze"],
  },
  {
    id: "4",
    name: "Tailored Suit",
    price: 52000,
    image: "/product-4.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Black", "Charcoal"],
  },
  {
    id: "5",
    name: "Avant-Garde Statement",
    price: 48000,
    image: "/product-5.jpg",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Cream", "White", "Ivory"],
  },
  {
    id: "6",
    name: "Bohemian Luxury",
    price: 42000,
    image: "/product-6.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gold", "Terracotta", "Rust"],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-24 pb-24 bg-white">
      <HeroSection />

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-y border-black/5">
          <div className="flex flex-col items-center text-center gap-4 group">
            <div className="p-5 rounded-full transition-all duration-500 bg-[#F8F8F8] group-hover:bg-[#D4AF37]">
              <Truck className="h-7 w-7 transition-colors duration-500 text-[#1A1A1A] group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-[0.15em] text-sm mb-2" style={{ color: themeConfig.colors.primary }}>
                Free Shipping
              </h4>
              <p className="text-xs uppercase tracking-widest opacity-60">
                On orders over ৳5000
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 group">
            <div className="p-5 rounded-full transition-all duration-500 bg-[#F8F8F8] group-hover:bg-[#D4AF37]">
              <RotateCcw className="h-7 w-7 transition-colors duration-500 text-[#1A1A1A] group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-[0.15em] text-sm mb-2" style={{ color: themeConfig.colors.primary }}>
                Easy Returns
              </h4>
              <p className="text-xs uppercase tracking-widest opacity-60">
                30-day return policy
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 group">
            <div className="p-5 rounded-full transition-all duration-500 bg-[#F8F8F8] group-hover:bg-[#D4AF37]">
              <ShieldCheck className="h-7 w-7 transition-colors duration-500 text-[#1A1A1A] group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-[0.15em] text-sm mb-2" style={{ color: themeConfig.colors.primary }}>
                Secure Payment
              </h4>
              <p className="text-xs uppercase tracking-widest opacity-60">
                100% secure checkout
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-4 group">
            <div className="p-5 rounded-full transition-all duration-500 bg-[#F8F8F8] group-hover:bg-[#D4AF37]">
              <Headphones className="h-7 w-7 transition-colors duration-500 text-[#1A1A1A] group-hover:text-white" />
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-[0.15em] text-sm mb-2" style={{ color: themeConfig.colors.primary }}>
                24/7 Support
              </h4>
              <p className="text-xs uppercase tracking-widest opacity-60">
                Dedicated support team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-[0.1em]" 
              style={{ fontFamily: themeConfig.fonts.heading, color: themeConfig.colors.primary }}>
              Featured Collection
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto md:mx-0 mb-4"></div>
            <p className="text-lg italic opacity-70" style={{ fontFamily: themeConfig.fonts.heading }}>
              Discover our curated selection of haute couture pieces
            </p>
          </div>
          <Link href="/shop" className="flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-sm transition-all duration-300 group hover:text-[#AA8A2E]" 
            style={{ color: themeConfig.colors.gold }}>
            View All <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="container mx-auto px-4">
        <div className="relative h-[500px] rounded-3xl overflow-hidden text-white flex items-center px-8 md:px-24" 
          style={{ backgroundColor: themeConfig.colors.primary }}>
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.4em] mb-6 block" style={{ color: themeConfig.colors.gold }}>
              Exclusive Offer
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight uppercase tracking-tighter" style={{ fontFamily: themeConfig.fonts.heading }}>
              Seasonal <br/> Collection
            </h2>
            <p className="text-lg mb-10 opacity-80 leading-relaxed max-w-lg">
              Experience the pinnacle of luxury fashion. Each piece is meticulously crafted with premium materials and timeless design.
            </p>
            <Link href="/shop" 
              className="inline-block px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm transition-all duration-500 hover:bg-white hover:text-black"
              style={{ 
                backgroundColor: themeConfig.colors.gold,
                color: themeConfig.colors.primary,
              }}
            >
              Explore Now
            </Link>
          </div>
          <div className="absolute inset-0 opacity-20 z-0" style={{ backgroundImage: `url(${getAssetPath("/lookbook-1.jpg")})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-0"></div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#F8F8F8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-[0.15em]" 
            style={{ fontFamily: themeConfig.fonts.heading, color: themeConfig.colors.primary }}>
            Join Our Exclusive Circle
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-70 leading-relaxed">
            Subscribe to receive early access to new collections, exclusive offers, and insider fashion tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="flex-1 px-8 py-4 rounded-full border border-black/10 focus:outline-none focus:border-[#D4AF37] transition-all duration-300 text-sm tracking-widest"
              style={{ 
                backgroundColor: "white"
              }}
              required
            />
            <button 
              className="px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-sm transition-all duration-500 hover:scale-105"
              style={{ 
                backgroundColor: themeConfig.colors.primary,
                color: "white"
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
