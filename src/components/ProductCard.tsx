import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Zap } from "lucide-react";
import { themeConfig } from "../../themeConfig";

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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product/${id}`}>
        <div className="relative h-64 w-full overflow-hidden bg-gray-200">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            New
          </div>
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: themeConfig.fonts.heading }}>
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          {colors.length} colors | {sizes.length} sizes
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold" style={{ color: themeConfig.colors.primary }}>
            ৳{price}
          </span>
          <button className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 transition">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
        <Link href={`/product/${id}`}>
          <button className="w-full border border-gray-900 text-gray-900 py-2 rounded hover:bg-gray-900 hover:text-white transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
