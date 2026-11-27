import React, { useState } from 'react';
import { 
  Heart, Search, Filter, Sparkles, ShieldCheck, MapPin, 
  Calendar, CheckCircle2, ArrowRight, PawPrint, Info 
} from 'lucide-react';
import { PETS } from '../data/mockData';

export default function AdoptPage({ onSelectPet, onOpenAdopt, onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('All');
  const [ageFilter, setAgeFilter] = useState('All');
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (e, petId) => {
    e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [petId]: !prev[petId]
    }));
  };

  const filteredPets = PETS.filter(pet => {
    const matchesSearch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pet.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pet.personality.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecies = speciesFilter === 'All' || pet.species.toLowerCase() === speciesFilter.toLowerCase();
    const matchesAge = ageFilter === 'All' || 
      (ageFilter === 'Young' && (pet.age.includes('Month') || pet.age.includes('1 Year') || pet.age.includes('8 Month'))) ||
      (ageFilter === 'Adult' && (pet.age.includes('2 Year') || pet.age.includes('2.5 Year') || pet.age.includes('1.5 Year')));

    return matchesSearch && matchesSpecies && matchesAge;
  });

  const steps = [
    {
      num: "01",
      title: "Find Your Match",
      desc: "Browse our medically vetted companion profiles and submit your digital adoption application."
    },
    {
      num: "02",
      title: "Virtual Consultation",
      desc: "Connect with the pet's shelter coordinator for a video meet-and-greet and lifestyle check."
    },
    {
      num: "03",
      title: "Home Readiness",
      desc: "A quick review of your living space to ensure condo clearances and safe companion setups."
    },
    {
      num: "04",
      title: "Welcome Home",
      desc: "Sign digital adoption agreements, receive official vet records, and start your journey!"
    }
  ];

  return (
    <div className="py-8 sm:py-12">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 space-y-16 sm:space-y-24">
        
        {/* Hero Banner with Blended Rescue Pets */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-amber-50/60 via-white to-brand-50/50 border-2 border-brand-200/80 shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 z-10 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5">
                <PawPrint className="w-3.5 h-3.5" />
                <span>Certified Shelter Adoptions</span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl lg:text-[3.25rem] font-black text-[#111827] tracking-tight leading-[1.15]">
                Meet Your New Best Friend Today.
              </h1>
              
              <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed font-normal max-w-xl">
                Every companion in our verified adoption directory is 100% vaccinated, spayed or neutered, and medically cleared. Browse our dogs and cats awaiting a loving family.
              </p>

              {/* Quick Metrics */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-700 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Zero Adoption Fees on Vetted Rescues</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Free 30-Day Post-Adoption Vet Care</span>
                </div>
              </div>
            </div>

            {/* Right Column: Blended Rescue Pets Image */}
            <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[260px] sm:min-h-[360px] lg:min-h-[440px] overflow-hidden flex items-center justify-center">
              {/* Left blend gradient */}
              <div className="absolute inset-y-0 left-0 w-24 sm:w-36 z-10 pointer-events-none hidden lg:block bg-gradient-to-r from-white via-white/80 to-transparent" />
              {/* Top fade for mobile */}
              <div className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none lg:hidden bg-gradient-to-b from-white to-transparent" />

              <img
                src="/images/adopt_hero_banner.jpg"
                onError={(e) => { e.currentTarget.src = "/images/hero_corgi_cats.jpg"; }}
                alt="Adorable Rescue Companions"
                className="w-full h-full object-cover object-center lg:object-right group-hover:scale-105 transition-transform duration-700"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 95%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 95%, transparent 100%)'
                }}
              />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-white/95 backdrop-blur-md border border-brand-200/80 rounded-2xl p-2.5 sm:p-3 shadow-lg flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-bold text-gray-900 leading-tight">85+ Rescues Ready</p>
                  <p className="text-[9px] sm:text-[10px] text-amber-600 font-semibold">100% Medically Cleared</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Search & Filtering Bar */}
        <div className="bg-white rounded-3xl border-2 border-brand-200/80 p-4 sm:p-6 lg:p-7 shadow-soft space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search by name, breed, temperament..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-gray-900"
              />
            </div>

            {/* Species Filter Pills */}
            <div className="md:col-span-4 flex items-center gap-1.5 sm:gap-2 bg-gray-100/80 p-1.5 rounded-2xl overflow-x-auto scrollbar-none">
              {['All', 'Dog', 'Cat'].map(species => (
                <button
                  key={species}
                  onClick={() => setSpeciesFilter(species)}
                  className={`flex-1 py-2 px-2 sm:px-3 text-xs sm:text-sm font-bold rounded-xl transition-all shrink-0 cursor-pointer ${
                    speciesFilter === species
                      ? 'bg-white text-brand-600 shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {species === 'All' ? 'All Pets' : species === 'Dog' ? 'Dogs' : 'Cats'}
                </button>
              ))}
            </div>

            {/* Age Filter Dropdown */}
            <div className="md:col-span-3">
              <select
                value={ageFilter}
                onChange={(e) => setAgeFilter(e.target.value)}
                className="w-full py-2.5 sm:py-3 px-3.5 sm:px-4 bg-gray-50 border border-gray-200 rounded-2xl text-xs sm:text-sm font-semibold text-gray-700 focus:outline-none focus:border-brand-500 transition-all cursor-pointer"
              >
                <option value="All">All Age Groups</option>
                <option value="Young">Puppies & Kittens (&lt; 1 Year)</option>
                <option value="Adult">Adult Companions (1-3 Years)</option>
              </select>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-500 pt-2 border-t border-gray-100">
            <span>Showing <strong>{filteredPets.length}</strong> verified companions available for adoption</span>
            {(searchTerm || speciesFilter !== 'All' || ageFilter !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSpeciesFilter('All');
                  setAgeFilter('All');
                }}
                className="text-brand-600 font-bold hover:underline self-start sm:self-auto cursor-pointer"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Pets Cards Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {filteredPets.map(pet => {
            const isFav = favorites[pet.id];
            return (
              <div
                key={pet.id}
                onClick={() => onSelectPet(pet)}
                className="rounded-2xl sm:rounded-3xl bg-white border-2 border-brand-200/80 overflow-hidden shadow-soft hover:border-brand-400 hover:-translate-y-1.5 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Pet Photo Container with Pastel Organic Background */}
                  <div className={`h-40 sm:h-64 lg:h-72 ${pet.colorBg || 'bg-amber-50'} relative flex items-center justify-center p-2.5 sm:p-4 overflow-hidden`}>
                    
                    {/* Species Badge */}
                    <span className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 bg-white/95 backdrop-blur-xs text-brand-700 font-bold text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-xs z-10">
                      {pet.species} • {pet.age}
                    </span>

                    {/* Favorite Heart Button */}
                    <button
                      onClick={(e) => toggleFavorite(e, pet.id)}
                      className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-gray-400 hover:text-red-500 shadow-xs z-10 transition-colors"
                      aria-label="Add to favorites"
                    >
                      <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>

                    {/* Pet Image */}
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md select-none"
                    />

                    {/* Green Availability Pulse */}
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3.5 flex items-center gap-1 sm:gap-1.5 bg-emerald-500/90 text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 sm:px-2 rounded-full backdrop-blur-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>Ready</span>
                    </div>
                  </div>

                  {/* Pet Bio Information */}
                  <div className="p-3 sm:p-5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-sm sm:text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors truncate">
                        {pet.name}
                      </h3>
                      <span className="text-[10px] sm:text-xs font-semibold text-gray-500 shrink-0 ml-1">{pet.gender}</span>
                    </div>
                    
                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium mt-0.5 truncate">
                      {pet.breed}
                    </p>

                    <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-gray-400 mt-1 sm:mt-2">
                      <MapPin className="w-3 h-3 text-brand-500 shrink-0" />
                      <span className="truncate">{pet.location}</span>
                    </div>

                    <p className="hidden sm:block text-xs text-gray-600 line-clamp-2 mt-2.5 sm:mt-3 leading-relaxed">
                      {pet.personality}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-100">
                      {pet.tags.slice(0, 2).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md bg-brand-50 text-brand-700 border border-brand-200/60 truncate">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="p-3 sm:p-5 pt-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPet(pet);
                    }}
                    className="w-full py-2 sm:py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-[11px] sm:text-xs shadow-xs transition-colors flex items-center justify-center gap-1 sm:gap-1.5 active:scale-95 cursor-pointer"
                  >
                    <span>Adopt {pet.name}</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* 4-Step Adoption Process Roadmap */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
              Seamless Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight mt-3">
              How Adoption Works at HappyPaws
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-2">
              Our 4-step workflow ensures mutual compatibility and smooth home transition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((st, sIdx) => (
              <div 
                key={sIdx}
                className="p-5 sm:p-7 rounded-3xl bg-white border-2 border-brand-200/80 shadow-soft relative overflow-hidden group hover:border-brand-400 transition-all"
              >
                <span className="text-2xl sm:text-4xl font-black text-brand-200 group-hover:text-brand-500 transition-colors">
                  {st.num}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-2.5 sm:mt-3 mb-1 sm:mb-1.5">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Shelter Partnership Callout */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-[#111827] text-white p-6 sm:p-12 lg:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-brand-300 text-xs font-bold uppercase tracking-wider">
              Can't Adopt Right Now?
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Support Our Rescue Network With Pet Essentials
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Every purchase from the HappyPaws Care Shop contributes directly to shelter medical supplies, vaccination rounds, and post-surgery rehabilitation.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('shop')}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer text-center"
              >
                Explore Pet Shop
              </button>
              <button
                onClick={() => onNavigate('stories')}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all active:scale-95 cursor-pointer text-center"
              >
                Read Rescue Stories
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
