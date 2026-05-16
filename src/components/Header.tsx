"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { themeConfig } from "@/../themeConfig";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCartStore();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Lookbook", href: "/lookbook" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white py-4 shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: isScrolled ? themeConfig.colors.primary : "white" }}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:text-[#D4AF37]"
              style={{ color: isScrolled ? themeConfig.colors.primary : "white" }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center">
            <h1 
              className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] leading-none"
              style={{ 
                fontFamily: themeConfig.fonts.heading,
                color: isScrolled ? themeConfig.colors.primary : "white"
              }}
            >
              VELLUTO
            </h1>
            <p className="text-[8px] tracking-[0.4em] uppercase mt-1" style={{ color: themeConfig.colors.gold }}>
              Haute Couture
            </p>
          </div>
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button 
            className="hidden md:block p-2 transition-colors hover:text-[#D4AF37]"
            style={{ color: isScrolled ? themeConfig.colors.primary : "white" }}
          >
            <Search className="h-5 w-5" />
          </button>
          <Link href="/cart" className="relative p-2 transition-colors hover:text-[#D4AF37]"
            style={{ color: isScrolled ? themeConfig.colors.primary : "white" }}>
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span 
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[8px] flex items-center justify-center font-bold text-white"
                style={{ backgroundColor: themeConfig.colors.gold }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black transition-all duration-500 lg:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end mb-12">
            <button onClick={() => setIsMenuOpen(false)} className="text-white p-2">
              <X className="h-8 w-8" />
            </button>
          </div>
          <nav className="flex flex-col gap-8 items-center justify-center flex-grow">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-2xl font-bold uppercase tracking-[0.4em] text-white hover:text-[#D4AF37] transition-colors"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: themeConfig.fonts.heading }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="text-center text-white/40 text-[10px] uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} {themeConfig.brandName}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
