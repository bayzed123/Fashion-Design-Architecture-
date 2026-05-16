import Link from "next/link";
import { themeConfig } from "@/../themeConfig";
import { ShoppingCart, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <h1 className="text-2xl font-bold" style={{ fontFamily: themeConfig.fonts.heading }}>
            {themeConfig.brandName}
          </h1>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/shop" className="hover:text-gray-600">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/lookbook" className="hover:text-gray-600">
                Lookbook
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/cart">
            <ShoppingCart className="h-6 w-6" />
          </Link>
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
