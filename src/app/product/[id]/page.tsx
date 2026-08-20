"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { themeConfig } from "@/../themeConfig";
import { Heart, Share2, Star, ShieldCheck, Truck, RotateCcw } from "lucide-react";

// Mock product data matching the shop page
const mockProducts: any = {
  "1": {
    id: "1",
    name: "Classic Black T-Shirt",
    price: 1500,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/product-1.jpg`,
    description: "A premium quality classic black t-shirt made from 100% organic cotton. Perfect for everyday wear with a comfortable fit and durable fabric.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"],
    rating: 4.5,
    reviews: 128,
  },
  "2": {
    id: "2",
    name: "Elegant White Shirt",
    price: 2500,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/product-2.jpg`,
    description: "Crisp white formal shirt designed for a sharp look. Features a modern slim fit and high-quality stitching for maximum comfort and style.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Blue"],
    rating: 4.8,
    reviews: 95,
  },
  "3": {
    id: "3",
    name: "Premium Denim Jeans",
    price: 3500,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/product-3.jpg`,
    description: "High-grade denim jeans with a classic straight-cut design. These jeans offer both durability and a timeless style that pairs well with anything.",
    sizes: ["28", "30", "32", "34"],
    colors: ["Blue", "Black"],
    rating: 4.7,
    reviews: 210,
  },
  "4": {
    id: "4",
    name: "Casual Polo Shirt",
    price: 2000,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/product-4.jpg`,
    description: "A versatile polo shirt that bridges the gap between casual and formal. Made from breathable pique cotton for all-day comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Blue", "Green"],
    rating: 4.4,
    reviews: 85,
  },
  "5": {
    id: "5",
    name: "Summer Floral Dress",
    price: 3200,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/product-5.jpg`,
    description: "Lightweight and breezy floral dress perfect for summer outings. Features a flattering silhouette and vibrant colors.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Yellow", "Red"],
    rating: 4.9,
    reviews: 56,
  },
  "6": {
    id: "6",
    name: "Formal Navy Blazer",
    price: 5500,
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/product-6.jpg`,
    description: "Tailored navy blazer that adds a touch of sophistication to any outfit. Ideal for business meetings or formal events.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    rating: 4.6,
    reviews: 42,
  }
};

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const { id } = React.use(params);
  const product = mockProducts[id] || mockProducts["1"];
  
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    addToCart({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity,
    });
    
    // In a real app, we'd use a toast notification
    alert("Product added to cart!");
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image Section */}
        <div className="space-y-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer border-2 border-transparent hover:border-black transition-all">
                <Image src={product.image} alt={product.name} fill className="object-cover opacity-60 hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: themeConfig.fonts.heading }}>
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-gray-500 font-medium">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-3xl font-bold" style={{ color: themeConfig.colors.primary }}>
              ৳{product.price}
            </p>
          </div>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Selection Area */}
          <div className="space-y-8 mb-10">
            {/* Size Selection */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold uppercase tracking-wider">Select Size</label>
                <button className="text-sm text-gray-500 underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size: string) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 min-w-[3rem] px-4 border-2 rounded-md font-medium transition-all ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-gray-200 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-4">Select Color</label>
              <div className="flex gap-4">
                {product.colors.map((color: string) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`group flex flex-col items-center gap-2`}
                  >
                    <div className={`h-10 w-10 rounded-full border-2 p-0.5 transition-all ${
                      selectedColor === color ? "border-black" : "border-transparent"
                    }`}>
                      <div 
                        className="h-full w-full rounded-full border border-gray-200" 
                        style={{ backgroundColor: color.toLowerCase() }}
                      ></div>
                    </div>
                    <span className={`text-xs font-medium ${selectedColor === color ? "text-black" : "text-gray-500"}`}>
                      {color}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider mb-4">Quantity</label>
              <div className="flex items-center border-2 border-gray-200 rounded-md w-max">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-2 font-bold border-x-2 border-gray-200">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all transform active:scale-95"
              style={{ backgroundColor: themeConfig.colors.primary }}
            >
              Add to Cart
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-black transition-all">
              <Heart className="h-6 w-6" />
            </button>
            <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-black transition-all">
              <Share2 className="h-6 w-6" />
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <Truck className="h-6 w-6 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">Free Shipping</span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="h-6 w-6 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">30-Day Returns</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-gray-400" />
              <span className="text-sm font-medium text-gray-600">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
