import React from 'react';
import { ArrowUpRight, Heart, ShieldCheck, Stethoscope, Building2, Sparkles, Star, Play } from 'lucide-react';

const CORE_VALUES = [
  {
    title: "Smart Matching",
    icon: Heart,
    desc: "Intelligent lifestyle and home environment pairing for lifelong companionship and harmony.",
    stat: "99.2% Match"
  },
  {
    title: "Healthcare First",
    icon: Stethoscope,
    desc: "Complete vaccination courses, spay/neuter surgery, and official digital veterinary logs.",
    stat: "100% Cleared"
  },
  {
    title: "Shelter Empowerment",
    icon: Building2,
    desc: "Free management software empowering 50+ local animal shelters and foster networks.",
    stat: "50+ Shelters"
  },
  {
    title: "24/7 Vet Advisory",
    icon: Sparkles,
    desc: "Round-the-clock guidance from care specialists for seamless post-adoption transition.",
    stat: "24/7 Support"
  }
];

const IMPACT_STATS = [
  { value: "15.4k+", label: "Happy Adoptions" },
  { value: "99.2%", label: "Health Clearance" },
  { value: "50+", label: "Partner Shelters" },
  { value: "24/7", label: "Vet Advisory" }
];

export default function AboutSection({ onOpenStory }) {
  return (
    <section id="about" className="py-10 sm:py-14 lg:py-16 bg-[#FAF7F2] relative">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header: Clean, Typographic & Purposeful */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-brand-600 text-xs font-bold tracking-wide uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-600"></span>
            About HappyPaws
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-3">
            Driven By Pure Compassion
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            We bridge certified animal shelters with loving families through thorough medical clearances, intelligent compatibility matching, and lifelong post-adoption guidance.
          </p>
        </div>

        {/* 2-Column Balanced & Compact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
          
          {/* Left Column: Visual Story Card (Photo + Floating Vet Badge + Quote) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative bg-white rounded-3xl p-4 sm:p-5 border border-amber-100/80 shadow-soft overflow-hidden flex flex-col justify-between h-full group">
              
              {/* Doctor & Rescued Pet Image */}
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80 w-full bg-brand-50/60 mb-4">
                <img
                  src="/images/about_vet_care.jpg"
                  alt="Dr. Patricia Santos holding a rescued puppy and kitten"
                  className="w-full h-full object-cover object-[center_25%] group-hover:scale-103 transition-transform duration-500"
                />

                {/* Floating Verified Care Badge */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-gray-100">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  <span className="text-[11px] font-bold text-gray-800">Licensed Vet Care</span>
                </div>

                {/* Optional Watch Story Video Button */}
                {onOpenStory && (
                  <button
                    onClick={onOpenStory}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-600/95 hover:bg-brand-600 text-white text-xs font-semibold shadow-md backdrop-blur-md transition-all hover:scale-105"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Watch Story</span>
                  </button>
                )}
              </div>

              {/* Doctor Details & Concise Quote */}
              <div className="bg-[#FAF7F2]/70 rounded-2xl p-3.5 sm:p-4 border border-amber-100/50">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/about_vet_avatar.jpg"
                      alt="Dr. Patricia Santos, DVM"
                      className="w-9 h-9 rounded-full object-cover border border-brand-200"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                        Dr. Patricia Santos, DVM
                      </h4>
                      <p className="text-[11px] font-medium text-brand-600">
                        Chief Veterinary Officer
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-gray-600 italic leading-relaxed">
                  "Every rescue companion deserves a healthy start. We ensure complete vaccinations, spay/neuter care, and health clearances so families adopt with absolute peace of mind."
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: 4 Concise Value Cards (2x2) + Sleek Impact Metrics Strip */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            
            {/* 4 Value Pillars: 2x2 Grid with Clean Modern Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 flex-1">
              {CORE_VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-amber-100/80 hover:border-brand-300 shadow-soft hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-brand-700 bg-brand-50/80 px-2.5 py-0.5 rounded-full border border-brand-100/60">
                          {val.stat}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-1.5">
                        {val.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Impact Metric Strip: Compact, Clean, Unified */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-amber-100/80 shadow-soft">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                {IMPACT_STATS.map((stat, idx) => (
                  <div key={idx} className={`${idx > 0 ? 'pt-2 sm:pt-0 sm:pl-3 lg:pl-4' : ''}`}>
                    <div className="text-xl sm:text-2xl font-extrabold text-brand-600 tracking-tight leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-gray-500 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
