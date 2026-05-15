"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { themeConfig } from "../../../themeConfig";
import { Heart, Share2 } from "lucide-react";

// Mock product data
const mockProducts: { [key: string]: any } = {
  "1": {
    id: "1",
    name: "Classic Black T-Shirt",
    price: 1500,
    image: "/product-1.jpg",
    description:
      "A timeless classic black t-shirt made from premium cotton. Perfect for any occasion.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"],
    rating: 4.5,
    reviews: 120,
  },
  "2": {
    id: "2",
    name: "Elegant White Shirt",
    price: 2500,
    image: "/product-2.jpg",
    description:
      "An elegant white shirt with a sophisticated design. Ideal for formal and casual settings.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Blue"],
    rating: 4.8,
    reviews: 95,
  },
};

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const { id } = params;
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

    alert("Product added to cart!");
  };

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={600}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: themeConfig.fonts.heading }}>
            {product.name}
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-3xl font-bold mb-6" style={{ color: themeConfig.colors.primary }}>
            ৳{product.price}
          </p>

          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-3">Size</label>
            <div className="flex gap-2">
              {product.sizes.map((size: string) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "bg-gray-900 text-white border-gray-900"
                      : "border-gray-300 hover:border-gray-900"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-3">Color</label>
            <div className="flex gap-2">
              {product.colors.map((color: string) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded ${
                    selectedColor === color
                      ? "bg-gray-900 text-white border-gray-900"
                      : "border-gray-300 hover:border-gray-900"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mb-6">
            <label className="block text-lg font-semibold mb-3">Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 px-3 py-2 border border-gray-300 rounded"
            />
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition mb-4"
            style={{ backgroundColor: themeConfig.colors.primary }}
          >
            Add to Cart
          </button>

          {/* Wishlist and Share */}
          <div className="flex gap-4">
            <button className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
              <Heart className="h-5 w-5" />
              Wishlist
            </button>
            <button className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2">
              <Share2 className="h-5 w-5" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
