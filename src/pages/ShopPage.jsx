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
        
        {/* Hero Banner */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-pink-50/60 via-white to-brand-50/50 p-8 sm:p-14 lg:p-20 border-2 border-brand-200/80 shadow-soft overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-pink-200/40 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-5">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Veterinary Care Shop</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-[1.15]">
              Curated Nutrition & Clinical Pet Essentials.
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              100% vet-approved ingredients, cold-chain freshness, and essential healthcare supplies. Every item purchased directly funds shelter nutrition and medical treatments.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-700 font-semibold">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-500" />
                <span>Free Express Shipping Over $45</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Guaranteed Fresh & Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-emerald-500" />
                <span>Portion Donated to Rescues</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-3xl border-2 border-brand-200/80 p-5 sm:p-7 shadow-soft space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search products, dental treats, tuna feast..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-gray-900"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-2xl text-xs sm:text-sm font-semibold text-gray-700 focus:outline-none focus:border-brand-500 transition-all cursor-pointer"
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
                className="w-full py-3 px-4 bg-brand-50 hover:bg-brand-100/80 border border-brand-200 text-brand-700 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View My Care Bag</span>
              </button>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map(product => (
            <div
              key={product.id}
              className="rounded-3xl bg-white border-2 border-brand-300 overflow-hidden shadow-soft hover:border-brand-500 hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Product Image Frame */}
                <div className="h-60 sm:h-64 bg-gray-50/80 p-6 flex items-center justify-center relative overflow-hidden">
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
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-semibold mb-1">
                    <span>{product.category}</span>
                    <span className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{product.rating}</span>
                      <span className="text-gray-400">({product.reviewsCount})</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
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
              <div className="p-6 pt-0 border-t border-gray-100/80 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[11px] text-gray-400 font-semibold uppercase block">Price</span>
                  <span className="text-xl font-black text-gray-900">
                    {product.currency}{product.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md hover:shadow-brand-500/25 transition-all flex items-center gap-2 active:scale-95 group/btn"
                >
                  <ShoppingBag className="w-3.5 h-3.5 group-hover/btn:rotate-6 transition-transform" />
                  <span>Add to Bag</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Shelter Impact Banner */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-r from-purple-800 via-brand-700 to-indigo-900 text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
              100% Shelter Mission Driven
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Every Bag Purchased Feeds Shelter Rescues
            </h2>
            <p className="text-xs sm:text-sm text-purple-100 leading-relaxed">
              We partner directly with non-profit sanctuaries. A portion of every Care Shop order goes into providing warm kibble, prescription recovery meals, and flea/tick medication for rescued strays.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('adopt')}
                className="px-7 py-3 rounded-2xl bg-white text-brand-700 hover:bg-gray-100 font-bold text-sm shadow-md transition-all active:scale-95"
              >
                Meet Rescue Pets
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-7 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all active:scale-95"
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
