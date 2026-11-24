import React from 'react';
import { ArrowRight, Play, ShieldPlus } from 'lucide-react';

export default function Hero({ onOpenAdopt, onOpenStory }) {
  return (
    <section id="hero" className="relative bg-[#FAF7F2] min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden py-6 lg:py-0">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative">
        
        {/* Stage Container */}
        <div className="relative w-full min-h-[500px] lg:min-h-[600px] xl:min-h-[660px] 2xl:min-h-[720px] flex items-center">
          
          {/* Background Illustration Stage: Positioned vertically centered on the right */}
          <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 pointer-events-none w-full flex justify-end">
            <div className="relative w-full max-w-[860px] lg:max-w-[960px] xl:max-w-[1080px] 2xl:max-w-[1160px] ml-auto">
              <img
                src="/images/hero_transparent.png"
                alt="Loving Homes, Healthy Pets, Happy Lives - Corgi dog and two cats resting on pet bed"
                className="w-full h-auto max-h-[calc(100vh-140px)] object-contain select-none"
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

          {/* Left Text Content: Perfectly aligned with Navbar logo, positioned higher up in green box area */}
          <div className="relative z-10 lg:max-w-[480px] xl:max-w-[560px] 2xl:max-w-[620px] pt-2 lg:pt-0 pb-4 lg:pb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] 2xl:text-[68px] font-extrabold text-[#111827] leading-[1.08] tracking-tight mb-4 sm:mb-5">
              Loving Homes.<br />
              Healthy Pets.<br />
              Happy Lives.
            </h1>

            <p className="text-gray-600 text-sm sm:text-base xl:text-lg leading-relaxed max-w-md mb-6 sm:mb-7 font-normal">
              Trusted adoption, quality veterinary care, and essential pet products — everything your furry family needs, in one place.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                onClick={onOpenAdopt}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full shadow-purple-glow hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm"
              >
                <span>Adopt a Companion</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors group py-2"
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
