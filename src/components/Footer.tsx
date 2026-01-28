import { Facebook, Twitter, Youtube, Instagram, WholeWord, Earth, EarthLock, EarthIcon } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const footerSections = [
    {
      title: "0X-Phantom",
      links: [
        "About",
        "Partners",
        "Careers",
        "Press & Brand Kit",
        "Legal",
        "Contact",
      ],
    },
    {
      title: "Solutions",
      links: [
        "Review Sites",
        "Rankings & Toplists",
        "Bonus Comparison Pages",
        "Multi-Brand Networks",
        "Agencies & Teams",
        "Compliance &\nResponsible Gaming",
      ],
    },
    {
      title: "Developers",
      links: [
        "API Docs",
        "SDKs & Webhooks",
        "UI Components &\nDesign Tokens"
      ],
    },
    {
      title: "Productos",
      links: [
        "Overview",
        "Templates Library",
        "Drag & Drop Editor",
        "Link & Offer Manager",
        "SEO & Analytics",
        "Pricing",
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  ];

  const bottomLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Manage Privacy",
    "Sitemap",
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Logo Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 place-items-center">
              <div className="relative w-24 h-24 lg:w-32 lg:h-32 mb-8">
                <Image
                  src="/logooxp.png"
                  alt="0x-Phantom Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Footer Navigation */}
            {footerSections.map((section, index) => (
              <div key={index} className="col-span-1">
                <h3 className="font-medium text-white mb-6 text-sm">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-white/60 hover:text-white transition-colors text-sm whitespace-pre-line"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left side - Language selector and links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm order-2 md:order-1">
              <button className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                <EarthIcon className="w-5 h-5 flex items-center justify-center" />
                USA | English
              </button>
              {bottomLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Right side - Social Links */}
            <div className="flex space-x-4 order-1 md:order-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
