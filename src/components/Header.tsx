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

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Lookbook", href: "/lookbook" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/80 backdrop-blur-md py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="flex items-center">
          <h1 
            className="text-2xl md:text-3xl font-black tracking-tighter" 
            style={{ 
              fontFamily: themeConfig.fonts.heading,
              color: themeConfig.colors.primary 
            }}
          >
            {themeConfig.brandName.toUpperCase()}
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-sm font-bold uppercase tracking-widest text-gray-900 hover:opacity-50 transition-opacity"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-6">
          <Link href="/cart" className="relative group">
            <ShoppingCart className="h-6 w-6 text-gray-900 group-hover:opacity-50 transition-opacity" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-1 text-gray-900" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`md:hidden fixed inset-0 top-[70px] bg-white z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="h-full flex flex-col p-8">
          <ul className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-3xl font-black tracking-tighter text-gray-900"
                  style={{ fontFamily: themeConfig.fonts.heading }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-10 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-4">Follow Us</p>
            <div className="flex space-x-6">
              {/* Social links could go here */}
              <span className="text-xs font-bold uppercase tracking-widest">Instagram</span>
              <span className="text-xs font-bold uppercase tracking-widest">Facebook</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
