"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import ProductSearch from "@/components/ProductSearch";
import { themeConfig } from "@/../themeConfig";

// Expanded Mock product data for a full demo
const mockProducts = [
  {
    id: "1",
    name: "Evening Gown Elegance",
    price: 45000,
    image: "/product-1.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Burgundy", "Black", "Navy"],
    category: "Dresses"
  },
  {
    id: "2",
    name: "Urban Chic Collection",
    price: 28000,
    image: "/product-2.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Charcoal", "White"],
    category: "Casual"
  },
  {
    id: "3",
    name: "Luxury Accessories",
    price: 35000,
    image: "/product-3.jpg",
    sizes: ["One Size"],
    colors: ["Gold", "Silver", "Bronze"],
    category: "Accessories"
  },
  {
    id: "4",
    name: "Tailored Suit",
    price: 52000,
    image: "/product-4.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy", "Black", "Charcoal"],
    category: "Formal"
  },
  {
    id: "5",
    name: "Avant-Garde Statement",
    price: 48000,
    image: "/product-5.jpg",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Cream", "White", "Ivory"],
    category: "Dresses"
  },
  {
    id: "6",
    name: "Bohemian Luxury",
    price: 42000,
    image: "/product-6.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gold", "Terracotta", "Rust"],
    category: "Dresses"
  },
  {
    id: "7",
    name: "Premium Silk Blouse",
    price: 32000,
    image: "/product-1.jpg",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Ivory", "Blush", "Black"],
    category: "Formal"
  },
  {
    id: "8",
    name: "Designer Trousers",
    price: 38000,
    image: "/product-2.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Camel"],
    category: "Bottoms"
  },
  {
    id: "9",
    name: "Couture Jacket",
    price: 55000,
    image: "/product-3.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Charcoal", "Cream"],
    category: "Formal"
  }
];

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<any>({});

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters);
  };

  useEffect(() => {
    let filtered = mockProducts;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Size filter
    if (activeFilters.sizes && activeFilters.sizes.length > 0) {
      filtered = filtered.filter((product) =>
        activeFilters.sizes.some((size: string) => product.sizes.includes(size))
      );
    }

    // Color filter
    if (activeFilters.colors && activeFilters.colors.length > 0) {
      filtered = filtered.filter((product) =>
        activeFilters.colors.some((color: string) => product.colors.includes(color))
      );
    }

    // Price filter
    if (activeFilters.priceRange) {
      const [min, max] = activeFilters.priceRange;
      filtered = filtered.filter(
        (product) => product.price >= min && product.price <= max
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, activeFilters]);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4">
      <div className="mb-16 text-center">
        <p className="text-sm md:text-base tracking-widest uppercase mb-4" 
          style={{ color: themeConfig.colors.gold, fontFamily: themeConfig.fonts.body }}>
          Complete Collection
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-wider" 
          style={{ fontFamily: themeConfig.fonts.heading, color: themeConfig.colors.primary }}>
          Shop Our Collection
        </h1>
        <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: themeConfig.colors.gold }}></div>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: themeConfig.colors.secondary }}>
          Explore our curated selection of premium fashion pieces designed for elegance and sophistication.
        </p>
      </div>

      <div className="mb-8">
        <ProductSearch onSearch={handleSearch} />
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-1/4">
          <ProductFilter onFilterChange={handleFilterChange} />
        </aside>
        
        <main className="flex-1">
          <div className="flex justify-between items-center mb-8 pb-6" 
            style={{ borderBottomColor: themeConfig.colors.lightGray, borderBottomWidth: "1px" }}>
            <p className="font-semibold uppercase tracking-wider" style={{ color: themeConfig.colors.primary }}>
              {filteredProducts.length} {filteredProducts.length === 1 ? "Product" : "Products"}
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm uppercase tracking-wider" style={{ color: themeConfig.colors.secondary }}>Sort:</span>
              <select 
                className="border-none bg-transparent font-medium focus:ring-0 cursor-pointer uppercase tracking-wider"
                style={{ color: themeConfig.colors.primary }}
              >
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 rounded-xl" style={{ backgroundColor: themeConfig.colors.lightGray }}>
              <p className="text-xl mb-4 uppercase tracking-wider" style={{ color: themeConfig.colors.secondary }}>
                No products found matching your criteria.
              </p>
              <button 
                onClick={() => {setSearchQuery(""); setActiveFilters({});}}
                className="uppercase tracking-wider font-semibold transition-all duration-300"
                style={{ color: themeConfig.colors.gold }}
                onMouseEnter={(e) => e.currentTarget.style.color = themeConfig.colors.darkGold}
                onMouseLeave={(e) => e.currentTarget.style.color = themeConfig.colors.gold}
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ShopPage;
