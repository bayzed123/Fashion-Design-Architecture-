import Image from "next/image";
import { themeConfig } from "@/../themeConfig";

const HeroSection = () => {
  return (
    <section className="relative h-[700px] w-full flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/hero-fashion.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
      <div className="relative z-20 text-left p-4 md:p-12 max-w-2xl">
        <div className="mb-6">
          <p className="text-sm md:text-base tracking-widest uppercase mb-4" style={{ color: themeConfig.colors.gold, fontFamily: themeConfig.fonts.body }}>
            {themeConfig.tagline}
          </p>
          <h2 className="text-6xl md:text-7xl font-bold mb-4 leading-tight" style={{ fontFamily: themeConfig.fonts.heading }}>
            {themeConfig.brandName}
          </h2>
          <div className="w-20 h-1 mb-6" style={{ backgroundColor: themeConfig.colors.gold }}></div>
        </div>
        <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90" style={{ fontFamily: themeConfig.fonts.body }}>
          Experience the pinnacle of haute couture. Each piece tells a story of elegance, craftsmanship, and timeless beauty.
        </p>
        <button className="px-10 py-4 text-lg font-semibold transition duration-300 uppercase tracking-wider" 
          style={{ 
            backgroundColor: themeConfig.colors.gold,
            color: themeConfig.colors.primary,
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = themeConfig.colors.darkGold}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = themeConfig.colors.gold}
        >
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
