import React from 'react';
import { ArrowRight, Play, ShieldPlus } from 'lucide-react';

export default function Hero({ onOpenAdopt, onOpenStory }) {
  return (
    <section id="hero" className="relative pt-4 pb-6 lg:pt-10 lg:pb-12 xl:pt-14 xl:pb-16 bg-[#FAF7F2] min-h-[calc(100vh-140px)] flex items-center">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        
        {/* Stage Container with natural ample height so the image is NEVER clipped at top */}
        <div className="relative w-full min-h-[520px] lg:min-h-[620px] xl:min-h-[680px] 2xl:min-h-[720px] flex flex-col justify-center">
          
          {/* Background Illustration Stage: Positioned from top-2 so Corgi's ears & Stories badge have plenty of room */}
          <div className="lg:absolute lg:top-2 lg:right-0 pointer-events-none w-full flex justify-end">
            <div className="relative w-full max-w-[960px] xl:max-w-[1100px] 2xl:max-w-[1180px] ml-auto">
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

          {/* Left Text Content: Expansive typography for widescreen */}
          <div className="relative z-10 lg:max-w-[480px] xl:max-w-[560px] 2xl:max-w-[620px] pt-4 lg:pt-8 lg:ml-8 xl:ml-16">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] 2xl:text-[70px] font-extrabold text-[#111827] leading-[1.08] tracking-tight mb-6">
              Loving Homes.<br />
              Healthy Pets.<br />
              Happy Lives.
            </h1>

            <p className="text-gray-600 text-base sm:text-lg xl:text-xl leading-relaxed max-w-lg mb-8 font-normal">
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
