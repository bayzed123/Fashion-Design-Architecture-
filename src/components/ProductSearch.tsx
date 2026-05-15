"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

interface ProductSearchProps {
  onSearch: (query: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="w-full mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={handleSearch}
          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
        />
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default ProductSearch;
