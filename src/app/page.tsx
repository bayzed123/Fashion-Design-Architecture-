import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, RotateCcw, Headphones } from "lucide-react";

const featuredProducts = [
  {
    id: "1",
    name: "Classic Black T-Shirt",
    price: 1500,
    image: "/product-1.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"],
  },
  {
    id: "2",
    name: "Elegant White Shirt",
    price: 2500,
    image: "/product-2.jpg",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Blue"],
  },
  {
    id: "3",
    name: "Premium Denim Jeans",
    price: 3500,
    image: "/product-3.jpg",
    sizes: ["28", "30", "32", "34"],
    colors: ["Blue", "Black"],
  },
  {
    id: "4",
    name: "Casual Polo Shirt",
    price: 2000,
    image: "/product-4.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Blue", "Green"],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-20 pb-20">
      <HeroSection />

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-gray-100">
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold">Free Shipping</h4>
              <p className="text-sm text-gray-500">On orders over ৳5000</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <RotateCcw className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold">Easy Returns</h4>
              <p className="text-sm text-gray-500">30-day return policy</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold">Secure Payment</h4>
              <p className="text-sm text-gray-500">100% secure checkout</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <Headphones className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold">24/7 Support</h4>
              <p className="text-sm text-gray-500">Dedicated support team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">New Arrivals</h2>
            <p className="text-gray-500">Check out our latest collection pieces.</p>
          </div>
          <Link href="/shop" className="flex items-center gap-2 font-bold hover:underline">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="container mx-auto px-4">
        <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gray-900 text-white flex items-center px-10 md:px-20">
          <div className="relative z-10 max-w-lg">
            <span className="text-sm font-bold uppercase tracking-widest mb-4 block">Limited Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Season Sale Up to 50% Off</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Don't miss out on our biggest sale of the year. High-quality fashion at unbeatable prices.
            </p>
            <Link href="/shop" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Shop the Sale
            </Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-0"></div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-black"
              required
            />
            <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
