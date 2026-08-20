"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { themeConfig } from "@/../themeConfig";
import { getAssetPath } from "@/lib/utils";


interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes: string[];
  colors: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, sizes, colors }) => {
  return (
    <div className="group bg-white overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5">
      <Link href={`/product/${id}`}>
        <div className="relative h-[450px] w-full overflow-hidden bg-[#F8F8F8]">
          <Image
            src={image}
            alt={name}
            fill
            className="group-hover:scale-110 transition-transform duration-1000 object-cover"
          />
          <div className="absolute top-6 right-6 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white" 
            style={{ backgroundColor: themeConfig.colors.gold }}>
            New Arrival
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="px-8 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              Quick View
            </span>
          </div>
        </div>
      </Link>
      <div className="p-8 text-center">
        <p className="text-[10px] mb-3 uppercase tracking-[0.3em] opacity-50" style={{ color: themeConfig.colors.primary }}>
          {colors.length} colors · {sizes.length} sizes
        </p>
        <h3 className="text-xl font-bold mb-4 uppercase tracking-[0.1em]" 
          style={{ 
            fontFamily: themeConfig.fonts.heading,
            color: themeConfig.colors.primary
          }}>
          {name}
        </h3>
        <div className="flex flex-col items-center gap-6">
          <span className="text-2xl font-light tracking-widest" style={{ color: themeConfig.colors.gold, fontFamily: themeConfig.fonts.heading }}>
            ৳{price.toLocaleString()}
          </span>
          
          <div className="flex w-full gap-2">
            <Link href={`/product/${id}`} className="flex-1">
              <button 
                className="w-full py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border border-black/10 hover:bg-black hover:text-white"
                style={{ 
                  color: themeConfig.colors.primary
                }}
              >
                Details
              </button>
            </Link>
            <button 
              className="p-4 transition-all duration-500 bg-black text-white hover:bg-[#D4AF37]" 
              title="Add to Cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
