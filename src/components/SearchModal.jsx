import React, { useState } from 'react';
import { Search, X, ArrowUpRight, ShoppingBag, Heart } from 'lucide-react';
import { PETS, PRODUCTS, SERVICES } from '../data/mockData';

export default function SearchModal({ isOpen, onClose, onSelectPet, onAddToCart }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedPets = q ? PETS.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.breed.toLowerCase().includes(q) || 
    p.species.toLowerCase().includes(q)
  ) : [];

  const matchedProducts = q ? PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.category.toLowerCase().includes(q) || 
    p.description.toLowerCase().includes(q)
  ) : [];

  const matchedServices = q ? SERVICES.filter(s => 
    s.title.toLowerCase().includes(q) || 
    s.description.toLowerCase().includes(q)
  ) : [];

  const totalMatches = matchedPets.length + matchedProducts.length + matchedServices.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-12">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gray-100 overflow-hidden z-10 mt-10">
        
        {/* Search Bar Input */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-3 bg-[#FAF7F2]">
          <Search className="w-5 h-5 text-brand-600 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search adoptable pets, vet care, cat food, dental treats..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-base text-gray-900 placeholder-gray-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1 bg-white border border-gray-200 text-xs font-semibold text-gray-600 rounded-full hover:bg-gray-50"
          >
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {!query ? (
            <div className="space-y-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Suggested searches</p>
              <div className="flex flex-wrap gap-2">
                {["Puppy & Dog Care", "Cat Food", "Tofu Litter", "Guinea Pig", "Bunny", "Dental Sticks", "Vaccination"].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3.5 py-1.5 bg-[#FAF7F2] hover:bg-brand-50 hover:text-brand-600 text-xs font-semibold text-gray-700 rounded-full transition-colors border border-gray-100"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalMatches === 0 ? (
            <div className="text-center py-12 text-gray-500 text-sm">
              No results found for "<strong>{query}</strong>". Try searching for "Cat", "Dog", "Dental", or "Vaccine".
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Pets Matches */}
              {matchedPets.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3">
                    Adoptable Pets ({matchedPets.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchedPets.map(pet => (
                      <div
                        key={pet.id}
                        onClick={() => {
                          onClose();
                          onSelectPet(pet);
                        }}
                        className="p-3 bg-[#FAF7F2] hover:bg-brand-50/50 rounded-2xl border border-gray-100 flex items-center gap-3 cursor-pointer transition-colors"
                      >
                        <img src={pet.image} alt={pet.name} className="w-12 h-12 rounded-xl object-cover" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-gray-900 truncate">{pet.name}</p>
                          <p className="text-xs text-gray-500 truncate">{pet.breed}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-brand-600" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Products Matches */}
              {matchedProducts.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3">
                    Pet Essentials ({matchedProducts.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchedProducts.map(prod => (
                      <div
                        key={prod.id}
                        className="p-3 bg-[#FAF7F2] rounded-2xl border border-gray-100 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img src={prod.image} alt={prod.name} className="w-10 h-10 object-contain" />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-gray-900 truncate">{prod.name}</p>
                            <p className="text-xs font-extrabold text-brand-600">₱{prod.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            onAddToCart(prod);
                          }}
                          className="px-2.5 py-1 bg-brand-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services Matches */}
              {matchedServices.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-3">
                    Services ({matchedServices.length})
                  </h4>
                  <div className="space-y-2">
                    {matchedServices.map(srv => (
                      <div
                        key={srv.id}
                        className="p-3 bg-[#FAF7F2] rounded-2xl border border-gray-100 flex items-center justify-between"
                      >
                        <div>
                          <p className="text-xs font-bold text-gray-900">{srv.title}</p>
                          <p className="text-[11px] text-gray-500 line-clamp-1">{srv.description}</p>
                        </div>
                        <a href="#services" onClick={onClose} className="text-xs font-bold text-brand-600 hover:underline">
                          View
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
