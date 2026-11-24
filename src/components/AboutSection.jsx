import React from 'react';
import { ArrowUpRight, Search, Stethoscope, Building2, BookOpen, CheckCircle2, ShieldCheck, Heart, Sparkles, Star } from 'lucide-react';

const DETAILED_VALUES = [
  {
    title: "Digitized Matching",
    icon: Search,
    desc: "Connecting rescue pets with pre-screened adopters using intelligent lifestyle matching algorithms tailored for modern homes. We assess space, activity levels, and routine to ensure long-term harmony.",
    badge: "99.2% Match Rate",
    highlights: ["Smart lifestyle questionnaire", "Space & activity assessment", "Compatibility guarantee"]
  },
  {
    title: "Healthcare First",
    icon: Stethoscope,
    desc: "Ensuring every pet undergoes thorough health checkups, spay/neuter surgeries, and complete vaccination courses. Every adoption comes with formal veterinary clearance and health logs.",
    badge: "100% Medically Cleared",
    highlights: ["Complete core vaccination series", "Full spay / neuter surgical care", "Official veterinary health log"]
  },
  {
    title: "Shelter Empowerment",
    icon: Building2,
    desc: "Providing local animal welfare shelters, foster homes, and rescue centers with free modern management software to track intakes, medical logs, and adoption approvals seamlessly.",
    badge: "50+ Shelters Connected",
    highlights: ["Free cloud shelter database", "Intake & medical records tracker", "Active foster coordination network"]
  },
  {
    title: "Advocacy & Education",
    icon: BookOpen,
    desc: "Promoting compassionate treatment, responsible pet parenting, and humane population control. We conduct community educational programs in local schools, barangays, and online.",
    badge: "12k+ Community Students",
    highlights: ["Humane education workshops", "Responsible pet parenting seminars", "Barangay spay/neuter drives"]
  }
];

const IMPACT_METRICS = [
  { value: "15,400+", label: "Happy Adoptions", icon: Heart },
  { value: "99.2%", label: "Health Clearance", icon: ShieldCheck },
  { value: "50+", label: "Verified Shelters", icon: Building2 },
  { value: "24/7", label: "Vet Advisory Care", icon: Sparkles },
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
          
          {/* Left Column: 4 Detailed Feature Cards (2x2) + Impact Metric Bar + Doctor Quote Card (Zero Gap) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            
            {/* 2x2 Grid of Feature Cards with Richer Content & Border */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {DETAILED_VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-white rounded-3xl p-5 border-2 border-gray-200 hover:border-brand-500 shadow-soft hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Icon & Status Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-brand-700 bg-brand-50 group-hover:bg-brand-100 px-2.5 py-0.5 rounded-full transition-colors border border-brand-100">
                          {val.badge}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-1.5">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                        {val.desc}
                      </p>
                    </div>

                    {/* Feature Highlights Checklist */}
                    <div className="pt-2.5 border-t border-gray-100 space-y-1">
                      {val.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Impact Metrics Strip - Perfectly Fills Space Between Cards and Quote */}
            <div className="bg-white rounded-3xl p-3.5 sm:p-4.5 border-2 border-gray-200 hover:border-brand-400 shadow-soft transition-all duration-300">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {IMPACT_METRICS.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2 sm:gap-2.5 p-2 rounded-2xl bg-[#FAF7F2]/60 sm:bg-transparent">
                      <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-extrabold text-gray-900 leading-tight">
                          {stat.value}
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-semibold text-gray-500 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Doctor Quote Card Below */}
            <div className="bg-white rounded-3xl p-5 border-2 border-gray-200 hover:border-brand-300 shadow-soft transition-all duration-300 flex flex-col justify-between">
              <div className="flex items-center justify-between gap-3.5 mb-2.5">
                <div className="flex items-center gap-3">
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

                {/* 5-Star Quality Rating Badge */}
                <div className="hidden sm:flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 ml-1">Certified Care</span>
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
