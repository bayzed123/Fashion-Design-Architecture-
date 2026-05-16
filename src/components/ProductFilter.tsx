"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FilterOptions {
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
}

interface ProductFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange }) => {
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    size: true,
    color: true,
    price: true,
  });

  const [filters, setFilters] = useState<FilterOptions>({
    sizes: [],
    colors: [],
    priceRange: [0, 10000],
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSizeChange = (size: string) => {
    const updatedSizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    const updatedFilters = { ...filters, sizes: updatedSizes };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleColorChange = (color: string) => {
    const updatedColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];
    const updatedFilters = { ...filters, colors: updatedColors };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handlePriceChange = (min: number, max: number) => {
    const updatedFilters: FilterOptions = { ...filters, priceRange: [min, max] };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-md">
      {/* Size Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("size")}
          className="flex justify-between items-center w-full text-lg font-semibold mb-3"
        >
          Size
          <ChevronDown
            className={`h-5 w-5 transition-transform ${
              expandedSections.size ? "rotate-180" : ""
            }`}
          />
        </button>
        {expandedSections.size && (
          <div className="space-y-2">
            {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
              <label key={size} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.sizes.includes(size)}
                  onChange={() => handleSizeChange(size)}
                  className="mr-2"
                />
                {size}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("color")}
          className="flex justify-between items-center w-full text-lg font-semibold mb-3"
        >
          Color
          <ChevronDown
            className={`h-5 w-5 transition-transform ${
              expandedSections.color ? "rotate-180" : ""
            }`}
          />
        </button>
        {expandedSections.color && (
          <div className="space-y-2">
            {["Black", "White", "Red", "Blue", "Green", "Yellow"].map(
              (color) => (
                <label key={color} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.colors.includes(color)}
                    onChange={() => handleColorChange(color)}
                    className="mr-2"
                  />
                  {color}
                </label>
              )
            )}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("price")}
          className="flex justify-between items-center w-full text-lg font-semibold mb-3"
        >
          Price
          <ChevronDown
            className={`h-5 w-5 transition-transform ${
              expandedSections.price ? "rotate-180" : ""
            }`}
          />
        </button>
        {expandedSections.price && (
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                onChange={() => handlePriceChange(0, 2000)}
                className="mr-2"
              />
              ৳0 - ৳2000
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                onChange={() => handlePriceChange(2000, 5000)}
                className="mr-2"
              />
              ৳2000 - ৳5000
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="price"
                onChange={() => handlePriceChange(5000, 10000)}
                className="mr-2"
              />
              ৳5000 - ৳10000
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
