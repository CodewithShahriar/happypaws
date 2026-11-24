import React from 'react';
import { ArrowRight, Play, ShieldPlus } from 'lucide-react';

export default function Hero({ onOpenAdopt, onOpenStory }) {
  return (
    <section id="hero" className="relative pt-6 pb-6 lg:pt-10 lg:pb-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Stage Container with natural ample height so the image is NEVER clipped at top */}
        <div className="relative w-full min-h-[480px] lg:min-h-[590px] xl:min-h-[630px] flex flex-col justify-start">
          
          {/* Background Illustration Stage: Positioned from top-2 so Corgi's ears & Stories badge have plenty of room */}
          <div className="lg:absolute lg:top-2 lg:right-0 pointer-events-none w-full flex justify-end">
            <div className="relative w-full max-w-[960px] xl:max-w-[1020px] ml-auto">
              <img
                src="/images/hero_transparent.png"
                alt="Loving Homes, Healthy Pets, Happy Lives - Corgi dog and two cats resting on pet bed"
                className="w-full h-auto object-contain select-none"
              />

              {/* Floating Card: Happy Pet Stories (Top Right) */}
              <button
                onClick={onOpenStory}
                className="pointer-events-auto absolute top-[4%] sm:top-[6%] right-[3%] sm:right-[5%] bg-white px-3.5 py-2.5 rounded-2xl shadow-card flex items-center gap-2.5 border border-gray-100 hover:scale-105 transition-all text-left group z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-100 overflow-hidden relative flex-shrink-0 flex items-center justify-center border border-amber-200">
                  <img
                    src="/images/pet_bambi.jpg"
                    alt="Happy pet story"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-900/30 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-white/95 flex items-center justify-center shadow-xs">
                      <Play className="w-2 h-2 fill-brand-600 text-brand-600 ml-0.5" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-brand-600 transition-colors leading-tight">
                    Happy Pet Stories
                  </h4>
                  <p className="text-[10px] text-gray-500 font-medium">
                    Real families. Real journeys.
                  </p>
                </div>
              </button>

              {/* Floating Badge: Verified Care (Bottom Right of Bed) */}
              <div className="pointer-events-auto absolute bottom-[10%] sm:bottom-[8%] right-[5%] sm:right-[7%] bg-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-card flex items-center gap-2.5 border border-gray-100 z-20">
                <div className="w-7 h-7 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                  <ShieldPlus className="w-4 h-4 text-brand-600" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-gray-900 leading-tight">
                    Verified Care
                  </h4>
                  <p className="text-[10px] text-gray-500 font-medium">
                    Trusted & Professional
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Text Content: Slightly larger text content as requested */}
          <div className="relative z-10 lg:max-w-[460px] xl:max-w-[500px] pt-3 lg:pt-6 lg:ml-12 xl:ml-20">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[58px] font-extrabold text-[#111827] leading-[1.1] tracking-tight mb-5">
              Loving Homes.<br />
              Healthy Pets.<br />
              Happy Lives.
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mb-7 font-normal">
              Trusted adoption, quality veterinary care, and essential pet products — everything your furry family needs, in one place.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <button
                onClick={onOpenAdopt}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full shadow-purple-glow hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <span>Adopt a Companion</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-800 hover:text-brand-600 transition-colors group py-2"
              >
                <span className="border-b border-gray-400 group-hover:border-brand-600 pb-0.5">Explore Pet Care</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
