import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenCart, cartCount, onOpenSearch, onOpenAdopt, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs py-3.5' : 'bg-[#FAF7F2] py-4 sm:py-5'
    }`}>
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          
          {/* Logo (matching 2nd screenshot: black paw icon + bold text) */}
          <a href="#" className="flex items-center gap-2 group">
            <svg className="w-7 h-7 fill-[#111827] group-hover:fill-brand-600 transition-colors" viewBox="0 0 24 24">
              <circle cx="7" cy="8" r="2.5" />
              <circle cx="17" cy="8" r="2.5" />
              <circle cx="10" cy="5" r="2" />
              <circle cx="14" cy="5" r="2" />
              <path d="M12 11c-2.8 0-5 2-5 4.5 0 2.2 2 4 5 4s5-1.8 5-4c0-2.5-2.2-4.5-5-4.5z" />
            </svg>
            <span className="text-2xl font-black tracking-tight text-[#111827]">
              HappyPaws
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-gray-700">
            <a href="#hero" className="text-gray-900 font-bold relative flex flex-col items-center">
              <span>Home</span>
              <span className="w-7 h-[2.5px] bg-brand-600 rounded-full mt-1"></span>
            </a>
            <a href="#about" className="hover:text-brand-600 transition-colors">
              About Us
            </a>
            <a href="#services" className="hover:text-brand-600 transition-colors">
              Services
            </a>
            <a href="#adopt" className="hover:text-brand-600 transition-colors">
              Adopt a Pet
            </a>
            <a href="#shop" className="hover:text-brand-600 transition-colors">
              Pet Shop
            </a>
            <a href="#stories" className="hover:text-brand-600 transition-colors">
              Stories
            </a>
          </nav>

          {/* Right Action Icons & Login (matching 2nd screenshot) */}
          <div className="hidden sm:flex items-center gap-5">
            <button 
              onClick={onOpenSearch}
              aria-label="Search"
              className="text-[#111827] hover:text-brand-600 transition-colors p-1"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>
            
            <button 
              onClick={onOpenCart}
              aria-label="Cart"
              className="text-[#111827] hover:text-brand-600 transition-colors relative p-1"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-brand-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => alert("HappyPaws User Profile & Settings")}
              aria-label="Account"
              className="text-[#111827] hover:text-brand-600 transition-colors p-1"
            >
              <User className="w-5 h-5 stroke-[2.2]" />
            </button>

            <button 
              onClick={() => alert("HappyPaws Login")}
              className="text-sm font-bold text-[#111827] hover:text-brand-600 transition-colors ml-1"
            >
              Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-3">
            <button 
              onClick={onOpenCart}
              className="p-1 text-[#111827] relative"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 text-[#111827] hover:text-brand-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 border-t border-gray-200/60 pb-4 space-y-2.5">
            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-brand-600 rounded-lg bg-brand-50"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              About Us
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Services
            </a>
            <a 
              href="#adopt" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Adopt a Pet
            </a>
            <a 
              href="#shop" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Pet Shop
            </a>
            <a 
              href="#stories" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              Stories
            </a>
          </div>
        )}

      </div>
    </header>
  );
}
