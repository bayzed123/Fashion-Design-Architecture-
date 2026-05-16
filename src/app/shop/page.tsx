"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import ProductSearch from "@/components/ProductSearch";

// Expanded Mock product data for a full demo
const mockProducts = [
  {
    id: "1",
    name: "Classic Black T-Shirt",
    price: 1500,
    image: "/product-1.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"],
    category: "Essentials"
  },
  {
    id: "2",
    name: "Elegant White Shirt",
    price: 2500,
    image: "/product-2.jpg",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Blue"],
    category: "Formal"
  },
  {
    id: "3",
    name: "Premium Denim Jeans",
    price: 3500,
    image: "/product-3.jpg",
    sizes: ["28", "30", "32", "34"],
    colors: ["Blue", "Black"],
    category: "Bottoms"
  },
  {
    id: "4",
    name: "Casual Polo Shirt",
    price: 2000,
    image: "/product-4.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "Blue", "Green"],
    category: "Casual"
  },
  {
    id: "5",
    name: "Summer Floral Dress",
    price: 3200,
    image: "/product-5.jpg",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Yellow", "Red"],
    category: "Dresses"
  },
  {
    id: "6",
    name: "Formal Navy Blazer",
    price: 5500,
    image: "/product-6.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    category: "Formal"
  },
  {
    id: "7",
    name: "Oversized Beige Hoodie",
    price: 2800,
    image: "/product-1.jpg",
    sizes: ["M", "L", "XL"],
    colors: ["Beige", "Gray"],
    category: "Essentials"
  },
  {
    id: "8",
    name: "Slim Fit Chinos",
    price: 2200,
    image: "/product-2.jpg",
    sizes: ["30", "32", "34"],
    colors: ["Khaki", "Black", "Navy"],
    category: "Bottoms"
  },
  {
    id: "9",
    name: "Silk Evening Gown",
    price: 8500,
    image: "/product-3.jpg",
    sizes: ["S", "M", "L"],
    colors: ["Emerald", "Black"],
    category: "Dresses"
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
    <div className="py-8 max-w-7xl mx-auto px-4">
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Our Collection</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our curated selection of premium fashion pieces designed for style and comfort.
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
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">Showing {filteredProducts.length} products</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="border-none bg-transparent font-medium focus:ring-0 cursor-pointer">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-xl">
              <p className="text-xl text-gray-500 mb-4">No products found matching your criteria.</p>
              <button 
                onClick={() => {setSearchQuery(""); setActiveFilters({});}}
                className="text-black underline font-medium"
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
