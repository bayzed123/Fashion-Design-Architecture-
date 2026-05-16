import { themeConfig } from "@/../themeConfig";
import { Share2, Camera, MessageCircle, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {themeConfig.socialLinks.facebook && (
            <a href={themeConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <Share2 className="h-6 w-6 hover:text-gray-400" />
            </a>
          )}
          {themeConfig.socialLinks.instagram && (
            <a href={themeConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <Camera className="h-6 w-6 hover:text-gray-400" />
            </a>
          )}
          {themeConfig.socialLinks.twitter && (
            <a href={themeConfig.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-6 w-6 hover:text-gray-400" />
            </a>
          )}
          {themeConfig.socialLinks.pinterest && (
            <a href={themeConfig.socialLinks.pinterest} target="_blank" rel="noopener noreferrer">
              <Globe className="h-6 w-6 hover:text-gray-400" />
            </a>
          )}
        </div>
        <div className="text-sm text-gray-400 space-y-2">
          <p>&copy; {new Date().getFullYear()} {themeConfig.brandName}. All rights Reserved.</p>
          <p>
            <a href="https://connectbayezid-8dcdz46v.manus.space" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Connect with Bayezid</a>
            {" | "}
            <a href="http://www.connectwithbayezid.it.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">cwb agency</a>
            {" | "}
            Developed By <a href="http://www.sayadbayezid.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sayad Md bayezid hosan</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
