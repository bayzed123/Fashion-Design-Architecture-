import { themeConfig } from "@/../themeConfig";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";


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
    <footer style={{ backgroundColor: themeConfig.colors.primary }} className="text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-10">
          <h2 className="text-2xl font-bold uppercase tracking-[0.2em] mb-2" style={{ fontFamily: themeConfig.fonts.heading, color: themeConfig.colors.gold }}>
            {themeConfig.brandName}
          </h2>
          <p className="text-sm uppercase tracking-widest opacity-60">
            {themeConfig.tagline}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
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
                className="transition-all duration-300 hover:scale-110 opacity-70 hover:opacity-100"
              >
                <div className="relative w-6 h-6 filter brightness-0 invert">
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

        <div className="max-w-4xl mx-auto border-t border-white/5 pt-10">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs uppercase tracking-widest mb-6">
            <a
              href="https://connectbayezid-8dcdz46v.manus.space"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors duration-300"
            >
              Connect with Bayezid
            </a>
            <span className="hidden md:inline opacity-20">|</span>
            <a
              href="http://www.connectwithbayezid.it.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors duration-300"
            >
              cwb agency
            </a>
            <span className="hidden md:inline opacity-20">|</span>
            <a
              href="http://www.sayadbayezid.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors duration-300 font-bold"
            >
              Sayad Md bayezid hosan
            </a>
          </div>
          
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">
            &copy; {new Date().getFullYear()} {themeConfig.brandName}. All rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
