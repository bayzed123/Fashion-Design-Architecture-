import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";
import { themeConfig } from "@/../themeConfig";

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
    <main className="flex flex-col gap-20 pb-20">
      <HeroSection />

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10" 
          style={{ borderTopColor: themeConfig.colors.lightGray, borderBottomColor: themeConfig.colors.lightGray, borderTopWidth: "1px", borderBottomWidth: "1px" }}>
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full transition-all duration-300" 
              style={{ backgroundColor: themeConfig.colors.lightGray }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = themeConfig.colors.gold}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = themeConfig.colors.lightGray}
            >
              <Truck className="h-6 w-6" style={{ color: themeConfig.colors.primary }} />
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider" style={{ color: themeConfig.colors.primary }}>
                Free Shipping
              </h4>
              <p className="text-sm" style={{ color: themeConfig.colors.secondary }}>
                On orders over ৳5000
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full transition-all duration-300" 
              style={{ backgroundColor: themeConfig.colors.lightGray }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = themeConfig.colors.gold}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = themeConfig.colors.lightGray}
            >
              <RotateCcw className="h-6 w-6" style={{ color: themeConfig.colors.primary }} />
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider" style={{ color: themeConfig.colors.primary }}>
                Easy Returns
              </h4>
              <p className="text-sm" style={{ color: themeConfig.colors.secondary }}>
                30-day return policy
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full transition-all duration-300" 
              style={{ backgroundColor: themeConfig.colors.lightGray }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = themeConfig.colors.gold}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = themeConfig.colors.lightGray}
            >
              <ShieldCheck className="h-6 w-6" style={{ color: themeConfig.colors.primary }} />
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider" style={{ color: themeConfig.colors.primary }}>
                Secure Payment
              </h4>
              <p className="text-sm" style={{ color: themeConfig.colors.secondary }}>
                100% secure checkout
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full transition-all duration-300" 
              style={{ backgroundColor: themeConfig.colors.lightGray }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = themeConfig.colors.gold}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = themeConfig.colors.lightGray}
            >
              <Headphones className="h-6 w-6" style={{ color: themeConfig.colors.primary }} />
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider" style={{ color: themeConfig.colors.primary }}>
                24/7 Support
              </h4>
              <p className="text-sm" style={{ color: themeConfig.colors.secondary }}>
                Dedicated support team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3 uppercase tracking-wider" 
              style={{ fontFamily: themeConfig.fonts.heading, color: themeConfig.colors.primary }}>
              Featured Collection
            </h2>
            <p className="text-lg" style={{ color: themeConfig.colors.secondary }}>
              Discover our curated selection of haute couture pieces
            </p>
          </div>
          <Link href="/shop" className="flex items-center gap-2 font-bold uppercase tracking-wider transition-all duration-300 group" 
            style={{ color: themeConfig.colors.gold }}>
            View All <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="container mx-auto px-4">
        <div className="relative h-[450px] rounded-2xl overflow-hidden text-white flex items-center px-10 md:px-20" 
          style={{ backgroundColor: themeConfig.colors.primary }}>
          <div className="relative z-10 max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest mb-4 block" style={{ color: themeConfig.colors.gold }}>
              Exclusive Offer
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: themeConfig.fonts.heading }}>
              Seasonal Collection
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Experience the pinnacle of luxury fashion. Each piece is meticulously crafted with premium materials and timeless design.
            </p>
            <Link href="/shop" 
              className="inline-block px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: themeConfig.colors.gold,
                color: themeConfig.colors.primary,
              }}
            >
              Explore Now
            </Link>
          </div>
          <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: "url('/lookbook-1.jpg')", backgroundSize: "cover", backgroundPosition: "right" }}></div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20" style={{ backgroundColor: themeConfig.colors.lightGray }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider" 
            style={{ fontFamily: themeConfig.fonts.heading, color: themeConfig.colors.primary }}>
            Join Our Exclusive Circle
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: themeConfig.colors.secondary }}>
            Subscribe to receive early access to new collections, exclusive offers, and insider fashion tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-full border-2 focus:outline-none transition-all duration-300"
              style={{ 
                borderColor: themeConfig.colors.gold,
                backgroundColor: "white"
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = themeConfig.colors.darkGold}
              onBlur={(e) => e.currentTarget.style.borderColor = themeConfig.colors.gold}
              required
            />
            <button 
              className="px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: themeConfig.colors.primary,
                color: "white"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = themeConfig.colors.gold}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = themeConfig.colors.primary}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
