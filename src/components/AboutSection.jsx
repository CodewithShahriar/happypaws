import React from 'react';
import { ArrowUpRight, Search, Stethoscope, Building2, BookOpen } from 'lucide-react';

const DETAILED_VALUES = [
  {
    title: "Digitized Matching",
    icon: Search,
    desc: "Connecting rescue pets with pre-screened adopters using intelligent lifestyle matching algorithms tailored for modern homes. We assess space, activity levels, and routine to ensure long-term harmony."
  },
  {
    title: "Healthcare First",
    icon: Stethoscope,
    desc: "Ensuring every pet undergoes thorough health checkups, spay/neuter surgeries, and complete vaccination courses. Every adoption comes with formal veterinary clearance and health logs."
  },
  {
    title: "Shelter Empowerment",
    icon: Building2,
    desc: "Providing local animal welfare shelters, foster homes, and rescue centers with free modern management software to track intakes, medical logs, and adoption approvals seamlessly."
  },
  {
    title: "Advocacy & Education",
    icon: BookOpen,
    desc: "Promoting compassionate treatment, responsible pet parenting, and humane population control. We conduct community educational programs in local schools, barangays, and online."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-[#FAF7F2] relative">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-600 text-xs font-bold tracking-wide uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-600"></span>
              About HappyPaws
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
              Driven By Pure Compassion
            </h2>
          </div>

          <div>
            <a
              href="#shop"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:shadow-purple-glow transition-all"
            >
              <span>Shop All</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 2-Column Main Layout with Perfect Vertical Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Left Column: 4 Detailed Feature Cards (2x2) + Doctor Quote Card (No Awkward Gaps) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            
            {/* 2x2 Grid of Feature Cards with Richer Details, Border & Interactive Hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {DETAILED_VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-white rounded-3xl p-5 border-2 border-gray-200 hover:border-brand-500 shadow-soft hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon with interactive hover background */}
                      <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-3 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                        <Icon className="w-4.5 h-4.5" />
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-1.5">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Doctor Quote Card Below (Natural Compact Spacing with Matching Border) */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-gray-200 hover:border-brand-300 shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div className="flex items-center gap-3.5 mb-2.5">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-brand-200 flex-shrink-0">
                  <img
                    src="/images/dr_patricia_avatar_crop.jpg"
                    alt="Dr. Patricia Santos, DVM"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">
                    Dr. Patricia Santos, DVM
                  </h4>
                  <p className="text-xs font-semibold text-brand-600">
                    Chief Veterinary Officer
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
                "Every rescue animal deserves a second chance at a healthy life. Through HappyPaws, we ensure that every adopted pet enters their new home with complete vaccination records, proper medical clearance, and a strong foundation for lifelong wellness."
              </p>
            </div>

          </div>

          {/* Right Column: Doctor Photo & Mission Paragraph with ZERO GAPS */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white rounded-3xl p-5 border-2 border-gray-200 hover:border-brand-300 shadow-card transition-all duration-300 flex flex-col h-full">
              
              {/* Photo: smoothly expands with flex-1 to eliminate the empty gap */}
              <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[380px] lg:min-h-[440px] w-full bg-brand-50 mb-4">
                <img
                  src="/images/dr_patricia_white_bg.jpg"
                  alt="Dr. Patricia Santos holding a rescued tabby cat"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Mission Text: Sits snugly below photo with no empty gap */}
              <div className="px-1 pb-1">
                <div className="flex items-center gap-2 text-brand-600 text-[11px] font-bold uppercase tracking-wider mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                  Our Lifelong Commitment
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Founded in 2024, HappyPaws began with a simple mission: to bridge the gap between overcrowded Philippine animal shelters and prospective pet parents. We combine advanced rescue records to make the adoption process transparent, accessible, and efficient.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
