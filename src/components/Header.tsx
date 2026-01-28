"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/data/links";
import { motion, LayoutGroup } from "motion/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Pricing", href: "/pricing" },
    { name: "Features", href: "/features" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 h-14 sm:h-16 z-[100] w-[100vw] max-w-[100vw] bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center md:grid md:grid-cols-3 w-full py-3 sm:py-4 md:py-5">
            {/* Logo */}
            <div className="flex items-center justify-start">
              <Link
                href="/"
                className="flex items-center"
                aria-label="0x-Phantom Home"
              >
                <motion.img
                  src="/logo.png"
                  layoutId="logo"
                  className="w-30"
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1] // ease premium
                  }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-4 lg:space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm lg:text-base font-light text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center justify-end space-x-2 lg:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 text-xs lg:text-sm px-2 lg:px-4"
                aria-label="Login to 0x-Phantom"
                asChild
              >
                <a href={links.login} target="_blank" rel="noopener noreferrer">Login</a>
              </Button>
              <Button
                size="sm"
                className="bg-white text-black hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30 text-xs lg:text-sm px-3 lg:px-4"
                aria-label="Contact Us"
                asChild
              >
                <a href={links.startYourPilotSite} target="_blank" rel="noopener noreferrer">Start Your Pilot Site</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center justify-end">
              <button
                className="md:hidden p-1.5 sm:p-2 rounded-md hover:bg-white/10 text-white z-[110]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <>
          {/* Overlay con opacidad - Fade in animation */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[105] md:hidden animate-in fade-in duration-300"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Modal Content - Slide down animation */}
          <div className="fixed inset-x-0 top-5 bottom-0 z-[106] md:hidden animate-in slide-in-from-top duration-300">
            <div className="bg-black/95 backdrop-blur-lg h-full overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 z-10"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>

              <nav className="flex flex-col space-y-1 p-10 justify-center items-center">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg w-fit font-light text-gray-300 hover:text-white transition-colors px-4 py-3 rounded-lg hover:bg-white/5 animate-in fade-in slide-in-from-left duration-300"
                    style={{
                      animationDelay: `${100 + index * 50}ms`,
                      animationFillMode: 'backwards'
                    }}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="flex flex-col space-y-3 pt-6 mt-6 border-t border-white">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="justify-center text-center items-center text-white font-bold hover:text-white hover:bg-white/10 transition-all text-base  animate-in fade-in slide-in-from-left duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      animationDelay: `${100 + navigationItems.length * 50}ms`,
                      animationFillMode: 'backwards'
                    }}
                    asChild
                  >
                    <a href={links.login} target="_blank" rel="noopener noreferrer">Login</a>
                  </Button>
                  <Button
                    size="lg"
                    className="justify-center bg-white text-black hover:bg-gray-100 rounded-full transition-all  hover:shadow-lg hover:shadow-white/30 text-base w-fit animate-in fade-in slide-in-from-left duration-300"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      animationDelay: `${150 + navigationItems.length * 50}ms`,
                      animationFillMode: 'backwards'
                    }}
                    asChild
                  >
                    <a href={links.startYourPilotSite} target="_blank" rel="noopener noreferrer"> Start Your Pilot Site</a>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
