import React, { useState } from 'react';
import { 
  ShoppingBag, Search, Star, Sparkles, ShieldCheck, 
  Truck, ArrowRight, CheckCircle2, HeartHandshake, SlidersHorizontal 
} from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

export default function ShopPage({ onAddToCart, onOpenCart, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Categories list
  const categories = ['All', 'Dog Food', 'Cat Food', 'Cat Treats', 'Dog Care', 'Cat Care'];

  // Filtering & Sorting
  let filtered = PRODUCTS.filter(prod => {
    const matchesCat = selectedCategory === 'All' || prod.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="py-8 sm:py-12">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 space-y-16 sm:space-y-24">
        
        {/* Hero Banner with Blended Pet Supplies Image */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-pink-50/60 via-white to-brand-50/50 border-2 border-brand-200/80 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 z-10 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Veterinary Care Shop</span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl lg:text-[3.25rem] font-black text-[#111827] tracking-tight leading-[1.15]">
                Curated Nutrition & Clinical Pet Essentials.
              </h1>
              
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-normal max-w-xl">
                100% vet-approved ingredients, cold-chain freshness, and essential healthcare supplies. Every item purchased directly funds shelter nutrition and medical treatments.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-700 font-semibold">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Free Express Shipping Over $45</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Cold-Chain Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Right Column: Blended Products Image */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[260px] sm:min-h-[360px] lg:min-h-[440px] overflow-hidden flex items-center justify-center">
              {/* Left blend gradient */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-36 z-10 pointer-events-none hidden lg:block bg-gradient-to-r from-white via-white/80 to-transparent" />
              {/* Top fade for mobile */}
              <div className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none lg:hidden bg-gradient-to-b from-white to-transparent" />

              <img
                src="/images/shop_hero_banner.jpg"
                onError={(e) => { e.currentTarget.src = "/images/preview_shop.jpg"; }}
                alt="Curated Pet Nutrition & Supplies"
                className="w-full h-full object-cover object-center lg:object-right group-hover:scale-105 transition-transform duration-700"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 95%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 95%, transparent 100%)'
                }}
              />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-white/95 backdrop-blur-md border border-brand-200/80 rounded-2xl p-2.5 sm:p-3 shadow-lg flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-pink-500 text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-bold text-gray-900 leading-tight">Vet-Approved Recipes</p>
                  <p className="text-[9px] sm:text-[10px] text-pink-600 font-semibold">100% Non-Toxic & Fresh</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-3xl border-2 border-brand-200/80 p-4 sm:p-6 lg:p-7 shadow-soft space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            
            {/* Search Input */}
            <div className="sm:col-span-2 md:col-span-6 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search products, dental treats, tuna feast..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-gray-900"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full py-2.5 sm:py-3 px-3.5 sm:px-4 bg-gray-50 border border-gray-200 rounded-2xl text-xs sm:text-sm font-semibold text-gray-700 focus:outline-none focus:border-brand-500 transition-all cursor-pointer"
              >
                <option value="featured">Featured Essentials</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Customer Rating</option>
              </select>
            </div>

            {/* Open Bag Button */}
            <div className="md:col-span-3">
              <button
                onClick={onOpenCart}
                className="w-full py-2.5 sm:py-3 px-4 bg-brand-50 hover:bg-brand-100/80 border border-brand-200 text-brand-700 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View My Care Bag</span>
              </button>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 pt-2 border-t border-gray-100 overflow-x-auto scrollbar-none pb-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
          {filtered.map(product => (
            <div
              key={product.id}
              className="rounded-3xl bg-white border-2 border-brand-300 overflow-hidden shadow-soft hover:border-brand-500 hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Product Image Frame */}
                <div className="h-52 sm:h-64 bg-gray-50/80 p-5 sm:p-6 flex items-center justify-center relative overflow-hidden">
                  <span className={`absolute top-3.5 left-3.5 text-[10px] font-bold px-2.5 py-1 rounded-full ${product.badgeColor || 'bg-brand-100 text-brand-700'}`}>
                    {product.tag}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  />
                </div>

                {/* Details */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-semibold mb-1">
                    <span>{product.category}</span>
                    <span className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{product.rating}</span>
                      <span className="text-gray-400">({product.reviewsCount})</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-500 font-medium mt-1">
                    Net Wt: {product.weight}
                  </p>

                  <p className="text-xs text-gray-600 line-clamp-2 mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Price & Add to Bag Pill */}
              <div className="p-4 sm:p-6 pt-0 border-t border-gray-100/80 flex items-center justify-between mt-3 sm:mt-4">
                <div>
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-semibold uppercase block">Price</span>
                  <span className="text-lg sm:text-xl font-black text-gray-900">
                    {product.currency}{product.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="px-4 sm:px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md hover:shadow-brand-500/25 transition-all flex items-center gap-2 active:scale-95 group/btn cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5 group-hover/btn:rotate-6 transition-transform" />
                  <span>Add to Bag</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Shelter Impact Banner */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-r from-purple-800 via-brand-700 to-indigo-900 text-white p-6 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
              100% Shelter Mission Driven
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Every Bag Purchased Feeds Shelter Rescues
            </h2>
            <p className="text-xs sm:text-sm text-purple-100 leading-relaxed">
              We partner directly with non-profit sanctuaries. A portion of every Care Shop order goes into providing warm kibble, prescription recovery meals, and flea/tick medication for rescued strays.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('adopt')}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-white text-brand-700 hover:bg-gray-100 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer text-center"
              >
                Meet Rescue Pets
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all active:scale-95 cursor-pointer text-center"
              >
                View Clinic Services
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
