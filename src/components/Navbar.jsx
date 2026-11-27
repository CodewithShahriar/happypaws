import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X, LogOut } from 'lucide-react';

export default function Navbar({ 
  onOpenCart, 
  cartCount, 
  onOpenSearch, 
  onOpenAdopt, 
  onOpenBooking,
  user,
  onOpenAuth,
  onOpenProfile,
  onLogout,
  activePage = 'home',
  onNavigate
}) {
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
    <header className={`sticky top-0 z-40 transition-all duration-300 relative overflow-hidden ${
      isScrolled 
        ? 'bg-[#FAF7F2]/85 backdrop-blur-xl shadow-soft border-b border-brand-100/60 py-3 sm:py-3.5' 
        : 'bg-[#FAF7F2]/70 backdrop-blur-md border-b border-transparent py-4 sm:py-5'
    }`}>
      {/* Subtle moving ambient light in navbar */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-35 z-0"
        aria-hidden="true"
      >
        <div 
          className="absolute -top-12 left-1/4 w-80 h-24 rounded-full bg-[#DDD6FE]/50 blur-2xl"
          style={{ animation: 'blob-drift-1 20s ease-in-out infinite' }}
        />
        <div 
          className="absolute -top-12 right-1/4 w-80 h-24 rounded-full bg-[#FDE68A]/50 blur-2xl"
          style={{ animation: 'blob-drift-2 24s ease-in-out infinite' }}
        />
      </div>

      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => onNavigate && onNavigate('home')} 
            className="flex items-center gap-2 group text-left cursor-pointer"
            aria-label="HappyPaws Home"
          >
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
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[14px]">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'services', label: 'Services' },
              { id: 'adopt', label: 'Adopt a Pet' },
              { id: 'shop', label: 'Pet Shop' },
              { id: 'stories', label: 'Stories' }
            ].map(item => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate && onNavigate(item.id)}
                  className={`transition-colors relative flex flex-col items-center py-1 cursor-pointer select-none ${
                    isActive 
                      ? 'text-gray-900 font-bold' 
                      : 'text-gray-600 hover:text-brand-600 font-semibold'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-6 h-[2.5px] bg-brand-600 rounded-full mt-1 absolute -bottom-1" />
                  )}
                </button>
              );
            })}
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

            {/* User Profile Icon: clicking directly opens UserProfileModal when logged in, or AuthModal when logged out */}
            <button 
              onClick={() => {
                if (user) {
                  onOpenProfile();
                } else {
                  onOpenAuth();
                }
              }}
              aria-label="Account"
              className="text-[#111827] hover:text-brand-600 transition-colors p-1 flex items-center justify-center group"
              title={user ? `${user.name} (Click to open Profile Dashboard)` : "Account & Login"}
            >
              {user && user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-7 h-7 rounded-full object-cover ring-2 ring-brand-400 group-hover:ring-brand-600 transition-all shadow-xs" 
                />
              ) : (
                <User className="w-5 h-5 stroke-[2.2]" />
              )}
            </button>

            {/* Direct action button: "Log Out" when logged in, "Log In" when logged out */}
            {user ? (
              <button 
                onClick={onLogout}
                className="text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200/80 px-2.5 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ml-1 active:scale-95 shadow-2xs"
                title="Log Out of Account"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            ) : (
              <button 
                onClick={onOpenAuth}
                className="text-sm font-bold text-[#111827] hover:text-brand-600 transition-colors ml-1"
              >
                Log In
              </button>
            )}
          </div>

          {/* Mobile menu button & quick actions */}
          <div className="flex sm:hidden items-center gap-2">
            <button 
              onClick={onOpenSearch}
              aria-label="Search"
              className="p-1.5 text-[#111827] hover:text-brand-600 transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>
            <button 
              onClick={onOpenCart}
              aria-label="Cart"
              className="p-1.5 text-[#111827] hover:text-brand-600 transition-colors relative cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
              {cartCount > 0 && (
                <span className="absolute 0 top-0.5 right-0.5 bg-brand-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-1.5 text-[#111827] hover:text-brand-600 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 border-t border-gray-200/60 pb-4 space-y-1.5">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'services', label: 'Services' },
              { id: 'adopt', label: 'Adopt a Pet' },
              { id: 'shop', label: 'Pet Shop' },
              { id: 'stories', label: 'Stories' }
            ].map(item => {
              const isActive = activePage === item.id;
              return (
                <button 
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onNavigate) onNavigate(item.id);
                  }}
                  className={`w-full text-left px-3.5 py-2.5 text-sm font-bold rounded-xl transition-colors ${
                    isActive 
                      ? 'text-brand-600 bg-brand-50' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-2 border-t border-gray-200/60 px-3 space-y-1">
              {user ? (
                <div className="flex items-center justify-between py-1.5">
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenProfile();
                    }}
                    className="flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-brand-600 transition-colors"
                  >
                    <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full object-cover ring-1 ring-brand-400" />
                    <span>{user.name}</span>
                  </button>
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onLogout();
                    }}
                    className="text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-lg border border-red-200 flex items-center gap-1 transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Log Out</span>
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth();
                  }}
                  className="w-full flex items-center gap-2 py-2 text-sm font-bold text-gray-700 hover:text-brand-600 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>Log In / Create Account</span>
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
