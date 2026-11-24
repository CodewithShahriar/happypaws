import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';
import { PETS } from '../data/mockData';

export default function AdoptablePets({ onSelectPet }) {
  return (
    <section id="adopt" className="py-16 lg:py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-brand-600 text-xs font-bold tracking-wide uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-600"></span>
            Trusted By Thousands
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            Why Pet Owners Trust Us
          </h2>
        </div>

        {/* 8 Pet Cards Grid (2 rows of 4) matching Reference Mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PETS.map((pet) => (
            <div
              key={pet.id}
              onClick={() => onSelectPet(pet)}
              className="bg-white rounded-3xl p-5 border border-gray-100 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Pet Image with soft pastel background */}
                <div className={`relative rounded-2xl ${pet.colorBg || 'bg-brand-50'} p-3 mb-4 aspect-square flex items-center justify-center overflow-hidden`}>
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Species tag */}
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 shadow-xs">
                    {pet.species}
                  </span>
                </div>

                {/* Pet Name & Breed */}
                <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-1">
                  {pet.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-1 mb-4">
                  {pet.breed}
                </p>
              </div>

              {/* View / Meet CTA */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <span className="text-xs font-semibold text-brand-600">
                  {pet.age} • {pet.gender}
                </span>

                <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
