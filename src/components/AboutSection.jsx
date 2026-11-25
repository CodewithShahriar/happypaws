import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  Heart, 
  ShieldCheck, 
  Stethoscope, 
  Building2, 
  Sparkles, 
  Star, 
  Play 
} from 'lucide-react';

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2] relative overflow-hidden"
    >
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header: In-Place Smooth Fade-In */}
        <div 
          className={`max-w-2xl mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
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

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* ================= LEFT COLUMN: IN-PLACE PURE FADE-IN ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div 
              className={`relative bg-white hover:bg-brand-50/30 rounded-3xl p-5 border-2 border-brand-200/90 hover:border-brand-500 shadow-soft hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-1200 ease-out flex flex-col justify-between h-full group ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
              }`}
            >
              
              {/* Doctor & Rescued Pet Image (Fades in in-place slowly) */}
              <div 
                className={`relative rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80 w-full bg-brand-50/60 mb-4 transition-all duration-1200 delay-200 ease-out border border-brand-100 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/about_vet_care.jpg"
                  alt="Dr. Patricia Santos holding a rescued puppy and kitten"
                  className="w-full h-full object-cover object-[center_25%] group-hover:scale-104 transition-transform duration-700"
                />

                {/* Floating Verified Care Badge */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-brand-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                  <span className="text-[11px] font-bold text-gray-800">Licensed Vet Care</span>
                </div>

                {/* Optional Watch Story Video Button */}
                {onOpenStory && (
                  <button
                    onClick={onOpenStory}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-md backdrop-blur-md transition-all hover:scale-105 active:scale-95"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Watch Story</span>
                  </button>
                )}
              </div>

              {/* Doctor Details & Concise Quote */}
              <div 
                className={`bg-[#FAF7F2]/90 rounded-2xl p-4 border border-brand-200/80 group-hover:border-brand-300 transition-all duration-1200 delay-400 ease-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/about_vet_avatar.jpg"
                      alt="Dr. Patricia Santos, DVM"
                      className="w-10 h-10 rounded-full object-cover border-2 border-brand-400"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                        Dr. Patricia Santos, DVM
                      </h4>
                      <p className="text-[11px] font-semibold text-brand-600">
                        Chief Veterinary Officer
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-gray-600 italic leading-relaxed">
                  "Every rescue companion deserves a healthy start. We ensure complete vaccinations, spay/neuter care, and health clearances so families adopt with absolute peace of mind."
                </p>
              </div>

            </div>
          </div>

          {/* ================= RIGHT COLUMN: SMOOTH SLOW SLIDE-IN FROM RIGHT ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            
            {/* 4 Dynamic Value Cards (2x2 Grid) - Default highlighted look with rich interactive hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 flex-1">
              {CORE_VALUES.map((val, idx) => {
                const Icon = val.icon;
                const delays = ['delay-200', 'delay-400', 'delay-600', 'delay-800'];

                return (
                  <div
                    key={idx}
                    className={`bg-white hover:bg-gradient-to-br hover:from-brand-50/90 hover:to-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border-2 border-brand-500 hover:border-brand-600 hover:ring-4 hover:ring-brand-500/15 shadow-md shadow-brand-500/10 hover:shadow-2xl hover:shadow-brand-600/25 hover:-translate-y-2.5 cursor-pointer flex flex-col justify-between group transition-all duration-300 ease-out ${
                      delays[idx]
                    } ${
                      isVisible 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-16 sm:translate-x-24 opacity-0'
                    }`}
                  >
                    <div>
                      {/* Top Row: Default Solid Purple Icon & Solid Purple Badge */}
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="w-11 h-11 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-sm shadow-brand-600/30 transition-all duration-300 group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-brand-600/40">
                          <Icon className="w-5 h-5" />
                        </div>

                        {/* Status Badge: Solid Purple by default, crisp white on hover */}
                        <span className="text-[10px] sm:text-[11px] font-extrabold text-white bg-brand-600 group-hover:bg-white group-hover:text-brand-700 px-3 py-1 rounded-full border border-brand-600 group-hover:border-brand-300 transition-all duration-300 shadow-xs group-hover:shadow-sm">
                          {val.stat}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-extrabold text-brand-700 group-hover:text-brand-800 transition-colors mb-1.5">
                        {val.title}
                      </h3>
                      <p className="text-xs text-gray-600 group-hover:text-gray-900 leading-relaxed transition-colors">
                        {val.desc}
                      </p>
                    </div>

                    {/* Bottom Accent Indicator */}
                    <div className="pt-3 mt-3 border-t border-brand-100 group-hover:border-brand-200 flex items-center justify-between text-[11px] text-brand-600 font-semibold transition-colors">
                      <span className="group-hover:text-brand-700">Verified Standard</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-600 group-hover:text-brand-700 transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Impact Metric Strip: Rich Brand Purple Background & Crisp White Text */}
            <div 
              className={`bg-brand-600 hover:bg-brand-700 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-2 border-brand-700 shadow-purple-glow hover:shadow-xl hover:shadow-brand-600/25 transition-all duration-1000 delay-1000 ease-out hover:-translate-y-0.5 ${
                isVisible 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-16 sm:translate-x-24 opacity-0'
              }`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
                {IMPACT_STATS.map((stat, idx) => (
                  <div key={idx} className={`${idx > 0 ? 'pt-2 sm:pt-0 sm:pl-3 lg:pl-5' : ''}`}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-xs">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-brand-100/90 mt-1">
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
