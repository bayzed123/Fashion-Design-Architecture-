"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { themeConfig } from "@/../themeConfig";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCartStore();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Lookbook", href: "/lookbook" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-lg py-3 border-b" 
          : "bg-white/95 backdrop-blur-md py-5 border-b"
      }`}
      style={{ borderBottomColor: isScrolled ? themeConfig.colors.gold : themeConfig.colors.lightGray }}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="flex items-center">
          <div className="flex flex-col">
            <h1 
              className="text-xl md:text-2xl font-black tracking-widest leading-none" 
              style={{ 
                fontFamily: themeConfig.fonts.heading,
                color: themeConfig.colors.primary 
              }}
            >
              VELLUTO
            </h1>
            <p 
              className="text-xs tracking-widest uppercase font-light mt-1"
              style={{ color: themeConfig.colors.gold }}
            >
              Haute Couture
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group"
                  style={{ color: themeConfig.colors.primary }}
                >
                  {link.name}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: themeConfig.colors.gold }}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-6">
          <Link href="/cart" className="relative group">
            <ShoppingCart 
              className="h-6 w-6 transition-all duration-300 group-hover:scale-110" 
              style={{ color: themeConfig.colors.primary }}
            />
            {cartCount > 0 && (
              <span 
                className="absolute -top-2 -right-2 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white"
                style={{ backgroundColor: themeConfig.colors.gold }}
              >
                {cartCount}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-1" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            style={{ color: themeConfig.colors.primary }}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`md:hidden fixed inset-0 top-0 z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: themeConfig.colors.background }}
      >
        <div className="flex justify-end p-6">
          <button 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
            style={{ color: themeConfig.colors.primary }}
          >
            <X className="h-7 w-7" />
          </button>
        </div>
        <nav className="h-full flex flex-col p-8">
          <ul className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-3xl font-black tracking-tighter"
                  style={{ 
                    fontFamily: themeConfig.fonts.heading,
                    color: themeConfig.colors.primary
                  }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (link.href.startsWith("#")) {
                      const element = document.getElementById(link.href.substring(1));
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {link.name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-10" style={{ borderTopColor: themeConfig.colors.lightGray, borderTopWidth: "1px" }}>
            <p className="text-sm font-light mb-4" style={{ color: themeConfig.colors.secondary }}>
              Follow Us
            </p>
            <div className="flex space-x-6">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: themeConfig.colors.gold }}>
                Instagram
              </span>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: themeConfig.colors.gold }}>
                Facebook
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
