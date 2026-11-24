import React from 'react';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

export default function FeaturedShop({ onAddToCart }) {
  return (
    <section id="shop" className="py-16 lg:py-20 bg-[#FAF7F2] relative">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-600 text-xs font-bold tracking-wide uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-600"></span>
              HappyPaws Care Shop
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
              Featured Pet Care Essentials
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-gray-500 text-xs sm:text-sm max-w-xs leading-relaxed">
              Provides nutrition, treats, and care essentials tailored for your rescue companions.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:shadow-purple-glow transition-all"
            >
              <span>Shop All</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 6 Products Grid: Exactly 2 Rows of 3 Products Each */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS.slice(0, 6).map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-gray-200 hover:border-brand-500 shadow-soft hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Product Transparent Image Container */}
                <div className="relative rounded-2xl bg-[#FAF7F2]/80 border border-gray-200/70 group-hover:border-brand-200 p-3 sm:p-4 mb-4 sm:mb-5 flex items-center justify-center overflow-hidden h-60 sm:h-80 w-full transition-colors duration-300">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="h-full w-auto max-h-[250px] sm:max-h-[275px] max-w-[85%] sm:max-w-[88%] object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                  />
                </div>

                {/* Product Info */}
                <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-1 mb-1">
                  {prod.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4">
                  {prod.description}
                </p>
              </div>

              {/* Price & Action Button */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div className="font-extrabold text-base sm:text-lg text-gray-900">
                  {prod.currency}{prod.price.toFixed(2)}
                </div>

                <button
                  onClick={() => onAddToCart(prod)}
                  aria-label={`Add ${prod.name} to cart`}
                  className="w-10 h-10 rounded-full bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center shadow-sm hover:shadow-purple-glow transition-all transform active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
