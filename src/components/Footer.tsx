import { themeConfig } from "@/../themeConfig";
import Image from "next/image";

const Footer = () => {
  const socialIcons = [
    {
      name: "LinkedIn",
      url: themeConfig.socialLinks.linkedin,
      icon: "/social-icons/linkedin.png",
      hoverColor: "hover:opacity-80",
    },
    {
      name: "YouTube",
      url: themeConfig.socialLinks.youtube,
      icon: "/social-icons/youtube.png",
      hoverColor: "hover:opacity-80",
    },
    {
      name: "Instagram",
      url: themeConfig.socialLinks.instagram,
      icon: "/social-icons/instagram.png",
      hoverColor: "hover:opacity-80",
    },
    {
      name: "Behance",
      url: themeConfig.socialLinks.behance,
      icon: "/social-icons/behance.png",
      hoverColor: "hover:opacity-80",
    },
    {
      name: "Facebook",
      url: themeConfig.socialLinks.facebook,
      icon: "/social-icons/facebook.png",
      hoverColor: "hover:opacity-80",
    },
    {
      name: "Facebook Personal",
      url: themeConfig.socialLinks.facebookSecondary,
      icon: "/social-icons/facebook.png",
      hoverColor: "hover:opacity-80",
      isSecondary: true,
    },
    {
      name: "All Links",
      url: themeConfig.socialLinks.beacons,
      icon: "/social-icons/beacons.png",
      hoverColor: "hover:opacity-80",
    },
    {
      name: "Email",
      url: themeConfig.socialLinks.email,
      icon: "/social-icons/mail.png",
      hoverColor: "hover:opacity-80",
      isEmail: true,
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {socialIcons.map((social) => {
            const shouldRender = social.isEmail
              ? themeConfig.socialLinks.email
              : social.isSecondary
                ? themeConfig.socialLinks.facebookSecondary
                : social.name === "LinkedIn"
                  ? themeConfig.socialLinks.linkedin
                  : social.name === "YouTube"
                    ? themeConfig.socialLinks.youtube
                    : social.name === "Instagram"
                      ? themeConfig.socialLinks.instagram
                      : social.name === "Behance"
                        ? themeConfig.socialLinks.behance
                        : social.name === "Facebook"
                          ? themeConfig.socialLinks.facebook
                          : social.name === "All Links"
                            ? themeConfig.socialLinks.beacons
                            : false;

            if (!shouldRender) return null;

            return (
              <a
                key={social.name}
                href={social.url}
                target={social.isEmail ? undefined : "_blank"}
                rel={social.isEmail ? undefined : "noopener noreferrer"}
                title={social.name}
                className={`transition-opacity ${social.hoverColor}`}
              >
                <div className="relative w-6 h-6">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-sm text-gray-400 space-y-3">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} {themeConfig.brandName}. All
            rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            <a
              href="https://connectbayezid-8dcdz46v.manus.space"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Connect with Bayezid
            </a>
            <span className="hidden md:inline text-gray-600">|</span>
            <a
              href="http://www.connectwithbayezid.it.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              cwb agency
            </a>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="text-gray-500">Developed By</span>
            <a
              href="http://www.sayadbayezid.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-semibold"
            >
              Sayad Md bayezid hosan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
