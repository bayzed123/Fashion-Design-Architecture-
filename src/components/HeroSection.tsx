"use client";

import Image from "next/image";
import Link from "next/link";
import { themeConfig } from "@/../themeConfig";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/hero-fashion.jpg"
        alt="Hero Background"
        fill
        className="z-0 object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10"></div>
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <div className="mb-8">
          <p className="text-xs md:text-sm tracking-[0.5em] uppercase mb-6 opacity-90" style={{ color: themeConfig.colors.gold, fontFamily: themeConfig.fonts.body }}>
            {themeConfig.tagline}
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tighter uppercase" style={{ fontFamily: themeConfig.fonts.heading }}>
            {themeConfig.brandName}
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-10"></div>
        </div>
        <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-80 max-w-2xl mx-auto italic" style={{ fontFamily: themeConfig.fonts.heading }}>
          Experience the pinnacle of haute couture. Each piece tells a story of elegance, craftsmanship, and timeless beauty.
        </p>
        <Link href="/shop" className="px-12 py-5 text-sm font-bold transition-all duration-500 uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-black" 
          style={{ 
            backgroundColor: themeConfig.colors.gold,
            color: themeConfig.colors.primary,
          }}
        >
          Explore Collection
        </Link>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-50">
        <div className="w-[1px] h-16 bg-white mx-auto"></div>
      </div>
    </section>
  );
};

export default HeroSection;
