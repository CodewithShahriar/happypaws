import React from 'react';
import { X, Play, Heart, CheckCircle2 } from 'lucide-react';

export default function StoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const stories = [
    {
      title: "How Bambi Found His Forever Home in BGC",
      pet: "Bambi (Native Mixed Breed / Aspin)",
      adopter: "Carlos & Bea Tan",
      quote: "When we saw Bambi on HappyPaws, his gentle eyes and vaccinated profile made it so easy. He's now our favorite marathon training buddy!",
      image: "/images/pet_bambi.jpg",
      tag: "Dog Adoption"
    },
    {
      title: "From Shelter Cat to Office Boss: Milo's Story",
      pet: "Milo (Domestic Short Hair / Puspin)",
      adopter: "Elena Mendoza",
      quote: "Milo purrs through every Zoom call. HappyPaws delivered all his initial medical records right to my phone, no fuss at all.",
      image: "/images/pet_milo.jpg",
      tag: "Cat Adoption"
    },
    {
      title: "A Gentle Soul: Clover the Lop Bunny",
      pet: "Clover (Holland Lop)",
      adopter: "Sophia Reyes",
      quote: "Adopting Clover brought so much peaceful joy into our apartment. The post-adoption nutrition care team was with us every step.",
      image: "/images/pet_clover.jpg",
      tag: "Small Pet"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-gray-100 overflow-hidden z-10 my-8">
        
        {/* Header */}
        <div className="p-6 bg-[#FAF7F2] border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                Happy Pet Stories
              </h3>
              <p className="text-xs text-gray-500">Real families. Real journeys of rescue love.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stories List */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4">
          {stories.map((st, i) => (
            <div key={i} className="p-4 bg-[#FAF7F2] rounded-2xl border border-gray-100 flex flex-col sm:flex-row gap-4 items-start">
              <div className="w-full sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-white p-1 flex-shrink-0">
                <img src={st.image} alt={st.pet} className="w-full h-full object-cover rounded-lg" />
              </div>

              <div className="flex-1 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
                    {st.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">By {st.adopter}</span>
                </div>
                
                <h4 className="text-sm font-bold text-gray-900">{st.title}</h4>
                <p className="text-xs text-gray-600 italic leading-relaxed">
                  "{st.quote}"
                </p>
                <p className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Happy & Thriving in 2026
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-[#FAF7F2] border-t border-gray-100 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-brand-600 text-white font-semibold text-xs rounded-full shadow-sm"
          >
            Close Stories
          </button>
        </div>

      </div>
    </div>
  );
}
