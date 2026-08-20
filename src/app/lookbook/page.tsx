import Lookbook from "@/components/Lookbook";
import { themeConfig } from "@/../themeConfig";

const mockLookbookImages = [
  {
    id: "1",
    url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/lookbook-1.jpg`,
    title: "Haute Couture Collection",
  },
  {
    id: "2",
    url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/lookbook-2.jpg`,
    title: "Intricate Embroidery",
  },
  {
    id: "3",
    url: "/product-1.jpg",
    title: "Evening Elegance",
  },
  {
    id: "4",
    url: "/product-2.jpg",
    title: "Urban Fashion",
  },
  {
    id: "5",
    url: "/product-5.jpg",
    title: "Avant-Garde Design",
  },
  {
    id: "6",
    url: "/product-6.jpg",
    title: "Bohemian Luxury",
  },
];

const LookbookPage = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="text-sm md:text-base tracking-widest uppercase mb-4" 
            style={{ color: themeConfig.colors.gold, fontFamily: themeConfig.fonts.body }}>
            Visual Inspiration
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-wider" 
            style={{ fontFamily: themeConfig.fonts.heading, color: themeConfig.colors.primary }}>
            Our Lookbook
          </h1>
          <div className="w-20 h-1 mx-auto mb-6" style={{ backgroundColor: themeConfig.colors.gold }}></div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: themeConfig.colors.secondary }}>
            Explore our curated collection of haute couture pieces, each photographed to showcase the intricate details and timeless elegance of our designs.
          </p>
        </div>
        <Lookbook images={mockLookbookImages} />
      </div>
    </div>
  );
};

export default LookbookPage;
