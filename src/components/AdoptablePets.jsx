import React, { useState } from 'react';
import { ArrowUpRight, Heart, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { PETS } from '../data/mockData';

export default function AdoptablePets({ onSelectPet }) {
  const [activeTab, setActiveTab] = useState('All');
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredPets = PETS.filter(pet => {
    if (activeTab === 'Dogs') return pet.species === 'Dog';
    if (activeTab === 'Cats') return pet.species === 'Cat';
    return true;
  });

  return (
    <section id="adopt" className="py-16 lg:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-2 text-brand-600 text-xs font-bold tracking-wide uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-600"></span>
              Trusted By Thousands
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
              Why Pet Owners Trust Us
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Meet our fully vaccinated, medically cleared rescue companions ready for their forever loving homes.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="inline-flex p-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/80 shadow-xs self-start md:self-auto">
            {['All', 'Dogs', 'Cats'].map((tab) => {
              const count = tab === 'All' ? PETS.length : PETS.filter(p => p.species === (tab === 'Dogs' ? 'Dog' : 'Cat')).length;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === tab
                      ? 'bg-brand-600 text-white shadow-purple-glow'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span>{tab === 'All' ? 'All Companions' : tab}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeTab === tab ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 8 Meaningful Pet Cards Grid with Interactive Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPets.map((pet) => {
            const isLiked = favorites.has(pet.id);
            return (
              <div
                key={pet.id}
                onClick={() => onSelectPet(pet)}
                className="group relative bg-white rounded-[2rem] p-5 border-2 border-gray-200 hover:border-brand-500 shadow-soft hover:shadow-2xl hover:shadow-brand-500/15 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Pet Portrait Container with Soft Pastel Palette and Border */}
                  <div className={`relative rounded-2xl ${pet.colorBg || 'bg-brand-50'} border border-gray-200/70 p-3 mb-4 aspect-square flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:brightness-[1.02] group-hover:border-brand-200`}>
                    
                    {/* Species Badge */}
                    <span className="absolute top-3 left-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-gray-800 shadow-xs flex items-center gap-1">
                      <span>{pet.species === 'Dog' ? '🐶' : '🐱'}</span>
                      <span>{pet.species}</span>
                    </span>

                    {/* Interactive Heart / Favorite Button */}
                    <button
                      onClick={(e) => toggleFavorite(pet.id, e)}
                      title={isLiked ? "Remove from favorites" : "Save to favorites"}
                      className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-xs backdrop-blur-sm ${
                        isLiked 
                          ? 'bg-rose-500 text-white scale-110 shadow-rose-200' 
                          : 'bg-white/90 text-gray-400 hover:text-rose-500 hover:bg-white hover:scale-105'
                      }`}
                    >
                      <Heart className={`w-4 h-4 transition-transform ${isLiked ? 'fill-current scale-105' : ''}`} />
                    </button>

                    {/* Pet Image with Smooth Hover Elevation & Zoom */}
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-full object-contain object-bottom rounded-xl transform transition-transform duration-500 ease-out group-hover:scale-110 drop-shadow-sm select-none pointer-events-none"
                    />

                    {/* Available Status Pill with Live Green Pulse */}
                    <div className="absolute bottom-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-bold text-emerald-700 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Available</span>
                    </div>
                  </div>

                  {/* Pet Name & Temperament */}
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-brand-600 transition-colors tracking-tight">
                      {pet.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md">
                      {pet.temperament || 'Friendly'}
                    </span>
                  </div>

                  {/* Breed */}
                  <p className="text-xs text-gray-500 font-medium line-clamp-1 mb-3">
                    {pet.breed}
                  </p>

                  {/* Personality Highlights / Tags */}
                  {pet.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {pet.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-gray-50 text-gray-600 group-hover:bg-brand-50/70 group-hover:text-brand-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Short Personality Description */}
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">
                    {pet.personality}
                  </p>
                </div>

                {/* Card Meta & Bottom Interactive CTA */}
                <div>
                  {/* Location & Medical Check Row */}
                  <div className="flex items-center justify-between text-[11px] text-gray-400 py-2.5 border-t border-gray-100">
                    <span className="flex items-center gap-1 truncate max-w-[130px]">
                      <MapPin className="w-3 h-3 text-brand-500 shrink-0" />
                      <span className="truncate">{pet.location}</span>
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600 font-semibold shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Verified Health</span>
                    </span>
                  </div>

                  {/* Action Bar */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-gray-100">
                    <span className="text-xs font-bold text-gray-700 bg-gray-100 group-hover:bg-brand-50 group-hover:text-brand-700 px-2.5 py-1 rounded-full transition-colors">
                      {pet.age} • {pet.gender}
                    </span>

                    {/* Interactive Meet Button with Arrow Slide */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 font-bold text-xs group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-purple-glow transition-all duration-300">
                      <span>Meet {pet.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
