import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { SERVICES } from '../data/mockData';

export default function CompleteSolutions({ onOpenBooking }) {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);

  return (
    <section id="services" className="py-16 lg:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Title & Schedule Button (Left) + Vet with Cat (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          
          {/* Top Left: Title & Header */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-brand-600 text-xs font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-600"></span>
              All In One
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
              Complete Solutions<br className="hidden sm:inline" /> For Pets
            </h2>
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking(SERVICES[0].title)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:shadow-purple-glow transition-all"
              >
                <span>Schedule Today</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Top Right: Blue Scrubs Vet Examining Cat Image Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-3 sm:p-4 border border-gray-100 shadow-soft">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] w-full bg-brand-50">
                <img
                  src="/images/vet_examining_cat_blue.jpg"
                  alt="Veterinarian in blue scrubs examining cat"
                  className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row: Vet with Golden Retriever (Left) + Services List (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bottom Left: Male Vet with Golden Retriever Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-3 sm:p-4 border border-gray-100 shadow-soft">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[4/3.2] w-full bg-brand-50">
                <img
                  src="/images/vet_male_golden_retriever.jpg"
                  alt="Veterinarian with friendly Golden Retriever"
                  className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Bottom Right: Interactive Services List */}
          <div className="lg:col-span-7 space-y-3">
            {SERVICES.map((srv) => {
              const isActive = srv.id === activeServiceId;
              return (
                <div
                  key={srv.id}
                  onClick={() => setActiveServiceId(isActive ? '' : srv.id)}
                  className={`rounded-2xl transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-white border-brand-200 shadow-soft p-5'
                      : 'bg-white/80 hover:bg-white border-gray-100 hover:border-gray-200 p-4 sm:p-5'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900">
                      {srv.title}
                    </h3>

                    <div className="p-1 rounded-full text-gray-400">
                      {isActive ? (
                        <ChevronUp className="w-4 h-4 text-brand-600" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded description when active */}
                  {isActive && (
                    <div className="mt-3 pt-3 border-t border-gray-100 text-xs sm:text-sm text-gray-600">
                      <p className="leading-relaxed mb-3">{srv.description}</p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBooking(srv.title);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700"
                      >
                        <span>Book {srv.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
