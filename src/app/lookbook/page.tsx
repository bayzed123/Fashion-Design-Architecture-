import Lookbook from "@/components/Lookbook";

const mockLookbookImages = [
  {
    id: "1",
    url: "/lookbook-1.jpg",
    title: "Summer Collection 2024",
  },
  {
    id: "2",
    url: "/lookbook-2.jpg",
    title: "Casual Vibes",
  },
  {
    id: "3",
    url: "/lookbook-3.jpg",
    title: "Formal Elegance",
  },
  {
    id: "4",
    url: "/lookbook-4.jpg",
    title: "Street Style",
  },
  {
    id: "5",
    url: "/lookbook-5.jpg",
    title: "Minimalist Look",
  },
  {
    id: "6",
    url: "/lookbook-6.jpg",
    title: "Bold & Trendy",
  },
];

const LookbookPage = () => {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8">Lookbook</h1>
      <Lookbook images={mockLookbookImages} />
    </div>
  );
};

export default LookbookPage;
