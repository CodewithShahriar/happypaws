import React from 'react';
import { ArrowRight, Play, ShieldPlus, Sparkles, Star, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenAdopt, onOpenStory }) {
  return (
    <section id="hero" className="relative bg-[#FAF7F2] min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden py-6 lg:py-0">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 relative">
        
        {/* Stage Container */}
        <div className="relative w-full min-h-[520px] lg:min-h-[620px] xl:min-h-[680px] 2xl:min-h-[740px] flex items-center">
          
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

          {/* Left Text Content: Rich, perfectly balanced vertical pillar filling the canvas */}
          <div className="relative z-10 lg:max-w-[640px] xl:max-w-[740px] 2xl:max-w-[800px] pt-2 lg:pt-0 pb-4 lg:pb-8">
            
            {/* 1. Eyebrow Badge (Fills the upper area) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50/90 border border-brand-200/80 text-brand-700 text-xs font-bold tracking-wide uppercase mb-3.5 sm:mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Certified Pet Adoption & Care Network</span>
            </div>

            {/* 2. Cohesive, Meaningful Headline Statement (Solid Black, Reaches Right Red Mark) */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] 2xl:text-[52px] font-extrabold text-[#111827] leading-[1.16] tracking-tight mb-4 sm:mb-5">
              <span className="block whitespace-nowrap">Every Rescue Pet Deserves A Safe,</span>
              <span className="block whitespace-nowrap">Loving Home, Quality Healthcare,</span>
              <span className="block whitespace-nowrap">And A Lifetime Of Happiness.</span>
            </h1>

            {/* 3. Rich Subtitle */}
            <p className="text-gray-600 text-sm sm:text-base xl:text-lg leading-relaxed max-w-xl mb-6 sm:mb-7 font-normal">
              Trusted adoption platform connecting certified shelters with caring families. We ensure thorough veterinary health clearance, smart lifestyle matching, and essential care products for lifelong companionship.
            </p>

            {/* 4. Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-6 sm:mb-7">
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

            {/* 5. Trust Social Proof Strip (Fills the lower gap below buttons) */}
            <div className="pt-4 sm:pt-5 border-t border-gray-200/80 space-y-3">
              <div className="flex flex-wrap items-center gap-4">
                {/* Adopter Avatars */}
                <div className="flex items-center -space-x-2.5">
                  <img
                    src="/images/customer_avatar_1.jpg"
                    alt="Happy pet adopter"
                    className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                  <img
                    src="/images/customer_avatar_2.jpg"
                    alt="Happy pet adopter"
                    className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                  <img
                    src="/images/customer_avatar_3.jpg"
                    alt="Happy pet adopter"
                    className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-brand-600 text-white text-[11px] font-extrabold flex items-center justify-center shadow-xs">
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
                  <p className="text-[11px] text-gray-500 font-medium">
                    Trusted by 15,000+ loving pet adopters & shelters
                  </p>
                </div>
              </div>

              {/* Quick Trust Checkmarks */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs font-medium text-gray-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                  100% Medically Cleared
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                  Intelligent Matching
                </span>
                <span className="flex items-center gap-1.5">
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
