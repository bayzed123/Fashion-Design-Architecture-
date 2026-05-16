import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { themeConfig } from "@/../themeConfig";

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
    <div className="group bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <Link href={`/product/${id}`}>
        <div className="relative h-80 w-full overflow-hidden" style={{ backgroundColor: themeConfig.colors.lightGray }}>
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white" 
            style={{ backgroundColor: themeConfig.colors.gold }}>
            New
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
      </Link>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2 uppercase tracking-wider" 
          style={{ 
            fontFamily: themeConfig.fonts.heading,
            color: themeConfig.colors.primary
          }}>
          {name}
        </h3>
        <p className="text-sm mb-4 uppercase tracking-widest" style={{ color: themeConfig.colors.secondary }}>
          {colors.length} colors · {sizes.length} sizes
        </p>
        <div className="flex justify-between items-center mb-6">
          <span className="text-2xl font-bold" style={{ color: themeConfig.colors.gold }}>
            ৳{price.toLocaleString()}
          </span>
          <button 
            className="p-3 rounded-full transition-all duration-300 hover:scale-110" 
            style={{ 
              backgroundColor: themeConfig.colors.primary,
              color: "white"
            }}
            title="Add to Cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
        <Link href={`/product/${id}`}>
          <button 
            className="w-full py-3 rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: themeConfig.colors.primary,
              color: "white",
              border: `2px solid ${themeConfig.colors.primary}`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = themeConfig.colors.gold;
              e.currentTarget.style.color = themeConfig.colors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = themeConfig.colors.primary;
              e.currentTarget.style.color = "white";
            }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
