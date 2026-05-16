"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import ProductSearch from "@/components/ProductSearch";

// Mock product data
const mockProducts = [
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
  {
    id: "5",
    name: "Summer Dress",
    price: 3000,
    image: "/product-5.jpg",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Yellow", "Red"],
  },
  {
    id: "6",
    name: "Formal Blazer",
    price: 5000,
    image: "/product-6.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray"],
  },
];

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterProducts(query, {});
  };

  interface FilterOptions {
  sizes?: string[];
  colors?: string[];
  priceRange?: [number, number];
}

const handleFilterChange = (filters: FilterOptions) => {
    filterProducts(searchQuery, filters);
  };

  const filterProducts = (query: string, filters: FilterOptions) => {
    let filtered = mockProducts;

    // Search filter
    if (query) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Size filter
    if (filters.sizes && filters.sizes.length > 0) {
      const sizes = filters.sizes;
      filtered = filtered.filter((product) =>
        sizes.some((size: string) => product.sizes.includes(size))
      );
    }

    // Color filter
    if (filters.colors && filters.colors.length > 0) {
      const colors = filters.colors;
      filtered = filtered.filter((product) =>
        colors.some((color: string) => product.colors.includes(color))
      );
    }

    // Price filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      filtered = filtered.filter(
        (product) =>
          product.price >= min &&
          product.price <= max
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8">Shop Our Collection</h1>
      
      <ProductSearch onSearch={handleSearch} />

      <div className="flex flex-col md:flex-row gap-8">
        <ProductFilter onFilterChange={handleFilterChange} />

        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No products found. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
