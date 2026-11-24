import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function JourneyCallout({ onOpenAdopt }) {
  return (
    <section className="py-12 lg:py-16 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Panoramic Banner using exact User Uploaded Image */}
        <div className="relative rounded-[2.5rem] bg-white border border-gray-100 shadow-card overflow-hidden">
          
          {/* Background Panoramic Pets Banner */}
          <div className="relative w-full min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] flex items-center justify-center">
            
            {/* Background Image */}
            <img
              src="/images/journey_banner_exact.jpg"
              alt="Start A Beautiful Journey with rescue companions"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />

            {/* Subtle Gradient Overlay for Center Text Clarity */}
            <div className="absolute inset-0 bg-white/40 sm:bg-white/20 backdrop-blur-[1px]"></div>

            {/* Center Content Card */}
            <div className="relative z-10 max-w-lg text-center px-6 py-8 sm:py-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-sm border border-white/60 mx-4">
              <div className="inline-flex items-center gap-2 text-brand-600 text-xs font-bold tracking-wide uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                Begin Your Journey
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
                Start A Beautiful Journey
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto mb-6 leading-relaxed">
                Open your heart and home to a rescue companion today for a lifetime of love.
              </p>

              <div>
                <button
                  onClick={onOpenAdopt}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:shadow-purple-glow transition-all"
                >
                  <span>Adopt Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
