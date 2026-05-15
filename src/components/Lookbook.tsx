"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.url}
              alt={image.title}
              width={400}
              height={500}
              objectFit="cover"
              className="w-full h-64 group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn className="h-8 w-8 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p className="text-white font-semibold">{image.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for zoomed view */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X className="h-8 w-8" />
            </button>
            <Image
              src={selectedImage.url}
              alt={selectedImage.title}
              width={800}
              height={1000}
              objectFit="contain"
              className="w-full"
            />
            <p className="text-white text-center mt-4">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lookbook;
