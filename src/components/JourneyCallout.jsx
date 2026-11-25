import React from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

export default function JourneyCallout({ onOpenAdopt }) {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-transparent relative overflow-hidden">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Outer relative wrapper so the bottom-left purple accent can hang below the card */}
        <div className="relative">

          {/* 1. Purple accent sliced flat at the card's left boundary (half-cut at the line) and hanging below */}
          <div className="absolute -bottom-5 sm:-bottom-8 left-0 overflow-hidden w-8 sm:w-14 h-16 sm:h-28 z-20 pointer-events-none">
            <div className="w-16 sm:w-28 h-16 sm:h-28 rounded-full bg-brand-600 -ml-8 sm:-ml-14 shadow-sm"></div>
          </div>

          {/* Panoramic Banner: On mobile flex-col items-center; on desktop relative flex items-center justify-center */}
          <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-[#FAF7F2] border border-amber-100/70 shadow-soft overflow-hidden min-h-0 md:min-h-[380px] lg:min-h-[420px] flex flex-col md:flex-row items-center justify-center pt-8 md:pt-0 pb-0">
            
            {/* ================= PLAYFUL ACCENTS & DOODLES (from Image 1) ================= */}
            
            {/* 2. Warm yellow organic blob shape */}
            <div className="absolute right-0 sm:right-6 md:right-10 bottom-0 md:bottom-4 w-full md:w-[450px] h-32 md:h-64 bg-[#FDE68A] rounded-t-3xl md:rounded-[4rem] pointer-events-none z-0"></div>

            {/* Doodles (shown on md and above to keep mobile card clean) */}
            <div className="hidden md:block absolute top-10 sm:top-14 left-[15%] sm:left-[17%] pointer-events-none z-10 text-brand-300">
              <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                <path d="M12 2v4M4.93 4.93l2.83 2.83M2 12h4" strokeLinecap="round" />
              </svg>
            </div>

            <div className="hidden md:block absolute top-20 left-[22%] sm:left-[24%] pointer-events-none z-10 text-brand-400 opacity-80">
              <svg className="w-4 h-4 stroke-current stroke-2 fill-none -rotate-12" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            <div className="hidden md:block absolute bottom-10 left-[34%] sm:left-[36%] pointer-events-none z-10 text-brand-400 opacity-70">
              <svg className="w-16 h-8 stroke-current stroke-[1.5] fill-none" viewBox="0 0 100 40">
                <path d="M10 35 Q 35 30, 50 15 T 70 8" strokeDasharray="3,3" strokeLinecap="round" />
                <polygon points="70,4 85,8 74,16 73,10" className="fill-brand-400" />
              </svg>
            </div>

            <div className="hidden md:block absolute top-10 sm:top-12 right-[25%] sm:right-[27%] pointer-events-none z-10 text-brand-400 opacity-80">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <circle cx="7" cy="8" r="2" />
                <circle cx="17" cy="8" r="2" />
                <circle cx="10" cy="5" r="1.8" />
                <circle cx="14" cy="5" r="1.8" />
                <path d="M12 11c-2.5 0-4.5 1.8-4.5 4 0 2 1.8 3.5 4.5 3.5s4.5-1.5 4.5-3.5c0-2.2-2-4-4.5-4z" />
              </svg>
            </div>

            <div className="hidden md:block absolute top-8 sm:top-10 right-[15%] sm:right-[18%] pointer-events-none z-10 text-brand-300 opacity-80">
              <svg className="w-5 h-5 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>

            {/* Desktop Background Pets (Panoramic) */}
            <img
              src="/images/journey_banner_transparent.png"
              alt="Rescue companions under blanket and on cat tree"
              className="hidden md:block absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-[1]"
            />

            {/* ================= CENTER CONTENT ================= */}
            <div className="relative z-10 max-w-md sm:max-w-lg text-center px-4 pt-2 pb-4 md:py-10">
              <div className="inline-flex items-center gap-2 text-brand-600 text-xs font-bold tracking-wide uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                Begin Your Journey
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-2 sm:mb-3 leading-tight">
                Start A Beautiful<br className="hidden sm:inline" /> Journey
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto mb-4 sm:mb-6 leading-relaxed">
                Open your heart and home to a rescue companion today for a lifetime of love.
              </p>

              <div>
                <button
                  onClick={onOpenAdopt}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm rounded-full shadow-purple-glow hover:shadow-lg transition-all transform active:scale-95"
                >
                  <span>Adopt Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile Bottom Pets: 100% full-fit, zero cut-off, all pets prominently visible */}
            <div className="block md:hidden relative z-[1] w-full max-w-[420px] mx-auto mt-2">
              <img
                src="/images/journey_mobile_pets.png"
                alt="All rescue companions together"
                className="w-full h-auto object-contain object-bottom pointer-events-none"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
