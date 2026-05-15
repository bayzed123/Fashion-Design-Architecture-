import Image from "next/image";
import { themeConfig } from "../../themeConfig";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] w-full flex items-center justify-center text-white">
      <Image
        src="/hero-bg.jpg" // Placeholder image
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center p-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: themeConfig.fonts.heading }}>
          Discover Your Style
        </h2>
        <p className="text-lg md:text-xl mb-8" style={{ fontFamily: themeConfig.fonts.body }}>
          Elevate your wardrobe with our exclusive collection.
        </p>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
