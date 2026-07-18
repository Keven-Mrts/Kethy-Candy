"use client";

import { useCartStore } from "@/lib/store";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Cart from "./Cart";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, setCartOpen } = useCartStore();

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#sobre" },
    { name: "Cardápio", href: "#cardapio" },
    { name: "Galeria", href: "#galeria" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "bg-brand-cream/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          
          <Link href="#" className="text-2xl font-bold text-brand-chocolate flex items-center gap-2">
            Kethy Candy
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-brand-chocolate hover:text-brand-caramel transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-brand-chocolate hover:bg-brand-chocolate/5 rounded-full transition-colors"
            >
              <ShoppingBag size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-brand-caramel text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button 
              className="md:hidden p-2 text-brand-chocolate"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-cream border-t border-brand-chocolate/10 py-4 px-4 flex flex-col gap-4 shadow-lg">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-brand-chocolate py-2 border-b border-brand-chocolate/5"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
      
      <Cart />
    </>
  );
}
