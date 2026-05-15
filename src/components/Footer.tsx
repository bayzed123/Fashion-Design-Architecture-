import Link from "next/link";
import { themeConfig } from "../../themeConfig";
import { Facebook, Instagram, Twitter, Pinterest } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {themeConfig.socialLinks.facebook && (
            <a href={themeConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 hover:text-gray-400" />
            </a>
          )}
          {themeConfig.socialLinks.instagram && (
            <a href={themeConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 hover:text-gray-400" />
            </a>
          )}
          {themeConfig.socialLinks.twitter && (
            <a href={themeConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-6 w-6 hover:text-gray-400" />
            </a>
          )}
          {themeConfig.socialLinks.pinterest && (
            <a href={themeConfig.socialLinks.pinterest} target="_blank" rel="noopener noreferrer">
              <Pinterest className="h-6 w-6 hover:text-gray-400" />
            </a>
          )}
        </div>
        <p>&copy; {new Date().getFullYear()} {themeConfig.brandName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
