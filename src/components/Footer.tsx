import { themeConfig } from "@/../themeConfig";
import { 
  Share2, 
  Video, 
  Camera, 
  MessageCircle, 
  Mail, 
  ExternalLink,
  Palette,
  User
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {themeConfig.socialLinks.linkedin && (
            <a href={themeConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Share2 className="h-6 w-6 hover:text-blue-400 transition-colors" />
            </a>
          )}
          {themeConfig.socialLinks.youtube && (
            <a href={themeConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" title="YouTube">
              <Video className="h-6 w-6 hover:text-red-500 transition-colors" />
            </a>
          )}
          {themeConfig.socialLinks.instagram && (
            <a href={themeConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
              <Camera className="h-6 w-6 hover:text-pink-500 transition-colors" />
            </a>
          )}
          {themeConfig.socialLinks.behance && (
            <a href={themeConfig.socialLinks.behance} target="_blank" rel="noopener noreferrer" title="Behance">
              <Palette className="h-6 w-6 hover:text-blue-500 transition-colors" />
            </a>
          )}
          {themeConfig.socialLinks.facebook && (
            <a href={themeConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
              <MessageCircle className="h-6 w-6 hover:text-blue-600 transition-colors" />
            </a>
          )}
          {themeConfig.socialLinks.facebookSecondary && (
            <a href={themeConfig.socialLinks.facebookSecondary} target="_blank" rel="noopener noreferrer" title="Facebook Personal">
              <User className="h-6 w-6 hover:text-blue-600 transition-colors opacity-70" />
            </a>
          )}
          {themeConfig.socialLinks.beacons && (
            <a href={themeConfig.socialLinks.beacons} target="_blank" rel="noopener noreferrer" title="All Links">
              <ExternalLink className="h-6 w-6 hover:text-green-400 transition-colors" />
            </a>
          )}
          {themeConfig.socialLinks.email && (
            <a href={themeConfig.socialLinks.email} title="Email">
              <Mail className="h-6 w-6 hover:text-yellow-400 transition-colors" />
            </a>
          )}
        </div>
        
        <div className="text-sm text-gray-400 space-y-3">
          <p className="font-medium">&copy; {new Date().getFullYear()} {themeConfig.brandName}. All rights Reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            <a href="https://connectbayezid-8dcdz46v.manus.space" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Connect with Bayezid</a>
            <span className="hidden md:inline text-gray-600">|</span>
            <a href="http://www.connectwithbayezid.it.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">cwb agency</a>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="text-gray-500">Developed By</span>
            <a href="http://www.sayadbayezid.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-semibold">Sayad Md bayezid hosan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
