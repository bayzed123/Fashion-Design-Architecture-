"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { themeConfig } from "@/../themeConfig";
import { getAssetPath } from "@/lib/utils";


interface LookbookImage {
  id: string;
  url: string;
  title: string;
}

interface LookbookProps {
  images: LookbookImage[];
}

const Lookbook: React.FC<LookbookProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<LookbookImage | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={getAssetPath(image.url)}
              alt={image.title}
              width={400}
              height={500}
              objectFit="cover"
              className="w-full h-80 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300" 
              style={{ backgroundImage: `linear-gradient(to top, ${themeConfig.colors.primary}, transparent)` }}>
              <p className="text-white font-semibold uppercase tracking-wider text-lg" 
                style={{ fontFamily: themeConfig.fonts.heading }}>
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for zoomed view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <X className="h-10 w-10" />
            </button>
            <Image
              src={getAssetPath(selectedImage.url)}
              alt={selectedImage.title}
              width={800}
              height={1000}
              objectFit="contain"
              className="w-full rounded-lg"
            />
            <p className="text-white text-center mt-6 text-xl font-semibold uppercase tracking-wider" 
              style={{ fontFamily: themeConfig.fonts.heading }}>
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lookbook;
