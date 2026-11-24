import React from 'react';
import { ArrowRight, Play, ShieldPlus, Star, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenAdopt, onOpenStory }) {
  return (
    <section id="hero" className="relative bg-[#FAF7F2] min-h-0 lg:min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden pt-1 pb-4 sm:pb-8 lg:py-0">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative">
        
        {/* Stage Container: On mobile flex-col with image on top; on lg relative with image on right */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between min-h-0 lg:min-h-[580px] xl:min-h-[640px] 2xl:min-h-[700px] pt-2 sm:pt-4 lg:pt-0">
          
          {/* 1. Illustration Stage: Appears FIRST on mobile (order-1 lg:order-2) */}
          <div className="order-1 lg:order-2 w-full lg:w-auto lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 flex justify-center lg:justify-end pointer-events-none mb-4 sm:mb-6 lg:mb-0">
            <div className="relative w-full max-w-[460px] sm:max-w-[580px] lg:max-w-[920px] xl:max-w-[1040px] 2xl:max-w-[1140px]">
              {/* Mobile Image: Cropped past the blue bowl */}
              <img
                src="/images/hero_mobile_cropped.png"
                alt="Every Rescued Pet Deserves Loving Care And Lifelong Happiness"
                className="block lg:hidden w-full h-auto max-h-[290px] sm:max-h-[360px] object-contain select-none mx-auto"
              />

              {/* Desktop Image: Complete composition */}
              <img
                src="/images/hero_transparent.png"
                alt="Every Rescued Pet Deserves Loving Care And Lifelong Happiness"
                className="hidden lg:block w-full h-auto max-h-[calc(100vh-140px)] object-contain select-none"
              />

              {/* Floating Card: Happy Pet Stories (Top Left on Mobile so it does not cover pets) */}
              <button
                onClick={onOpenStory}
                className="pointer-events-auto absolute top-0 sm:top-[6%] left-0 sm:left-auto sm:right-[5%] bg-white/95 sm:bg-white px-2 py-1.5 sm:px-3.5 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-card flex items-center gap-1.5 sm:gap-2.5 border border-gray-100 hover:scale-105 transition-all text-left group z-20"
              >
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-amber-100 overflow-hidden relative flex-shrink-0 flex items-center justify-center border border-amber-200">
                  <img
                    src="/images/pet_bambi.jpg"
                    alt="Happy pet story"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-900/30 flex items-center justify-center">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/95 flex items-center justify-center shadow-xs">
                      <Play className="w-1.5 h-1.5 sm:w-2 sm:h-2 fill-brand-600 text-brand-600 ml-0.5" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-gray-900 group-hover:text-brand-600 transition-colors leading-tight">
                    Happy Pet Stories
                  </h4>
                  <p className="text-[8px] sm:text-[10px] text-gray-500 font-medium">
                    Real families. Real journeys.
                  </p>
                </div>
              </button>

              {/* Floating Badge: Verified Care (Top Right on Mobile so it does not cover pets) */}
              <div className="pointer-events-auto absolute top-0 sm:top-auto sm:bottom-[8%] right-0 sm:right-[7%] bg-white/95 sm:bg-white px-2 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-card flex items-center gap-1.5 sm:gap-2.5 border border-gray-100 z-20">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                  <ShieldPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600" />
                </div>
                <div className="text-left">
                  <h4 className="text-[10px] sm:text-xs font-bold text-gray-900 leading-tight">
                    Verified Care
                  </h4>
                  <p className="text-[8px] sm:text-[10px] text-gray-500 font-medium">
                    Trusted & Professional
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Text Content: Appears SECOND on mobile (order-2 lg:order-1) */}
          <div className="order-2 lg:order-1 relative z-10 w-full lg:max-w-[640px] xl:max-w-[740px] 2xl:max-w-[800px] lg:-translate-y-6 xl:-translate-y-8 pt-1 sm:pt-2 lg:pt-0 pb-6 lg:pb-4 text-left">
            
            {/* 3-Line Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-extrabold text-[#111827] tracking-tight mb-3.5 sm:mb-5 flex flex-col gap-0.5 sm:gap-1.5 xl:gap-2">
              <span className="block whitespace-nowrap leading-[1.2]">Every Rescued Pet</span>
              <span className="block whitespace-nowrap leading-[1.2]">Deserves Loving Care</span>
              <span className="block whitespace-nowrap leading-[1.2]">And Lifelong Happiness</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-xs sm:text-sm md:text-base xl:text-lg leading-relaxed max-w-xl mb-5 sm:mb-7 font-normal">
              Trusted adoption connecting certified shelters with caring families. We ensure veterinary health clearance, smart lifestyle matching, and essential products for lifelong companionship.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 mb-5 sm:mb-7">
              <button
                onClick={onOpenAdopt}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-full shadow-purple-glow hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm"
              >
                <span>Adopt a Companion</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm font-semibold text-gray-800 hover:text-brand-600 transition-colors group py-1.5 sm:py-2 text-center"
              >
                <span className="border-b border-gray-400 group-hover:border-brand-600 pb-0.5">Explore Pet Care</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Proof Strip */}
            <div className="pt-3.5 sm:pt-5 border-t border-gray-200/80 space-y-2.5 sm:space-y-3">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Adopter Avatars */}
                <div className="flex items-center -space-x-2">
                  <img
                    src="/images/customer_avatar_1.jpg"
                    alt="Happy pet adopter"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                  <img
                    src="/images/customer_avatar_2.jpg"
                    alt="Happy pet adopter"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                  <img
                    src="/images/customer_avatar_3.jpg"
                    alt="Happy pet adopter"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white bg-brand-600 text-white text-[10px] sm:text-[11px] font-extrabold flex items-center justify-center shadow-xs">
                    15k+
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-extrabold text-gray-900">4.9 / 5.0</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium">
                    Trusted by 15,000+ loving pet adopters & shelters
                  </p>
                </div>
              </div>

              {/* Checkmarks */}
              <div className="flex flex-wrap items-center gap-x-3.5 sm:gap-x-4 gap-y-1.5 text-[10px] sm:text-xs font-medium text-gray-600">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                  100% Medically Cleared
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                  Intelligent Matching
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                  24/7 Vet Advisory
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
