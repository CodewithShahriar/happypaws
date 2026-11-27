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
        
        {/* Hero Banner */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-amber-50/60 via-white to-brand-50/50 p-8 sm:p-14 lg:p-20 border-2 border-brand-200/80 shadow-soft overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-200/40 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-5">
              <PawPrint className="w-3.5 h-3.5" />
              <span>Certified Shelter Adoptions</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight leading-[1.15]">
              Meet Your New Best Friend Today.
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              Every companion in our verified adoption directory is 100% vaccinated, spayed or neutered, and medically cleared. Browse our dogs and cats awaiting a loving family.
            </p>

            {/* Quick Metrics */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-gray-700 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero Adoption Fees on Vetted Rescues</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Free 30-Day Post-Adoption Vet Care</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Lifetime Shelter Support Hotline</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filtering Bar */}
        <div className="bg-white rounded-3xl border-2 border-brand-200/80 p-5 sm:p-7 shadow-soft space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search by name, breed, temperament..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-brand-500 focus:bg-white transition-all text-gray-900"
              />
            </div>

            {/* Species Filter Pills */}
            <div className="md:col-span-4 flex items-center gap-2 bg-gray-100/80 p-1.5 rounded-2xl">
              {['All', 'Dog', 'Cat'].map(species => (
                <button
                  key={species}
                  onClick={() => setSpeciesFilter(species)}
                  className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
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
                className="w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-2xl text-xs sm:text-sm font-semibold text-gray-700 focus:outline-none focus:border-brand-500 transition-all cursor-pointer"
              >
                <option value="All">All Age Groups</option>
                <option value="Young">Puppies & Kittens (&lt; 1 Year)</option>
                <option value="Adult">Adult Companions (1-3 Years)</option>
              </select>
            </div>

          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
            <span>Showing <strong>{filteredPets.length}</strong> verified companions available for adoption</span>
            {(searchTerm || speciesFilter !== 'All' || ageFilter !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSpeciesFilter('All');
                  setAgeFilter('All');
                }}
                className="text-brand-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Pets Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredPets.map(pet => {
            const isFav = favorites[pet.id];
            return (
              <div
                key={pet.id}
                onClick={() => onSelectPet(pet)}
                className="rounded-3xl bg-white border-2 border-brand-200/80 overflow-hidden shadow-soft hover:border-brand-400 hover:-translate-y-1.5 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Pet Photo Container with Pastel Organic Background */}
                  <div className={`h-64 sm:h-72 ${pet.colorBg || 'bg-amber-50'} relative flex items-center justify-center p-4 overflow-hidden`}>
                    
                    {/* Species Badge */}
                    <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-brand-700 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs z-10">
                      {pet.species} • {pet.age}
                    </span>

                    {/* Favorite Heart Button */}
                    <button
                      onClick={(e) => toggleFavorite(e, pet.id)}
                      className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-gray-400 hover:text-red-500 shadow-xs z-10 transition-colors"
                      aria-label="Add to favorites"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>

                    {/* Pet Image */}
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-md"
                    />

                    {/* Green Availability Pulse */}
                    <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 bg-emerald-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span>Ready to Adopt</span>
                    </div>
                  </div>

                  {/* Pet Bio Information */}
                  <div className="p-5">
                    <div className="flex items-baseline justify-between">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                        {pet.name}
                      </h3>
                      <span className="text-xs font-semibold text-gray-500">{pet.gender}</span>
                    </div>
                    
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      {pet.breed}
                    </p>

                    <div className="flex items-center gap-1 text-[11px] text-gray-400 mt-2">
                      <MapPin className="w-3 h-3 text-brand-500 shrink-0" />
                      <span className="truncate">{pet.location}</span>
                    </div>

                    <p className="text-xs text-gray-600 line-clamp-2 mt-3 leading-relaxed">
                      {pet.personality}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100">
                      {pet.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-brand-50 text-brand-700 border border-brand-200/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPet(pet);
                    }}
                    className="w-full py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>Meet & Adopt {pet.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* 4-Step Adoption Process Roadmap */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
              Seamless Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111827] tracking-tight mt-3">
              How Adoption Works at HappyPaws
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2">
              Our 4-step workflow ensures mutual compatibility and smooth home transition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, sIdx) => (
              <div 
                key={sIdx}
                className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-brand-200/80 shadow-soft relative overflow-hidden group hover:border-brand-400 transition-all"
              >
                <span className="text-3xl sm:text-4xl font-black text-brand-200 group-hover:text-brand-500 transition-colors">
                  {st.num}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-3 mb-1.5">
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
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-[#111827] text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-brand-300 text-xs font-bold uppercase tracking-wider">
              Can't Adopt Right Now?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Support Our Rescue Network With Pet Essentials
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Every purchase from the HappyPaws Care Shop contributes directly to shelter medical supplies, vaccination rounds, and post-surgery rehabilitation.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('shop')}
                className="px-7 py-3 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                Explore Pet Shop
              </button>
              <button
                onClick={() => onNavigate('stories')}
                className="px-7 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all active:scale-95"
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
