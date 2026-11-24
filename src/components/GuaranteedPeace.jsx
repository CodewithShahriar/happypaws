import React from 'react';
import { ArrowUpRight, ShieldCheck, FileText, HeartHandshake, Headphones } from 'lucide-react';

const PROMISES = [
  {
    title: "Certified Health",
    desc: "Every rescue pet undergoes rigorous screening with vaccination and full medical clearance so you can welcome your new companion with total peace of mind.",
    icon: ShieldCheck
  },
  {
    title: "Transparent Digital Histories",
    desc: "Access your pet's complete health logs, deworming schedules, and treatment histories anytime from our digital portal. Full transparency from rescue to adoption.",
    icon: FileText
  },
  {
    title: "Compassionate Pet Matching",
    desc: "Our intelligent screening process evaluates home environments, activity levels, and household guidelines to ensure lifelong harmony and matching bonds.",
    icon: HeartHandshake
  },
  {
    title: "24/7 Support Hotline",
    desc: "Our veterinary advisory team and care specialists are available 24/7 to answer health, nutrition, or behavior questions. You never have to navigate care alone.",
    icon: Headphones
  }
];

export default function GuaranteedPeace({ onOpenAdopt }) {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">

        {/* Exact Reference 3-Column Layout: Left Title/CTA + Center Doctor with Beagle + Right 4 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* ================= LEFT: Title & CTA ================= */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 text-brand-600 text-xs font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-600"></span>
              Our Promise To You
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[32px] xl:text-[38px] font-extrabold text-[#111827] tracking-tight leading-[1.15]">
              <span className="block whitespace-nowrap">Guaranteed Peace</span>
              <span className="block">of Mind</span>
            </h2>

            <div className="pt-2">
              <button
                onClick={onOpenAdopt}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm rounded-full shadow-purple-glow hover:shadow-lg transition-all"
              >
                <span>Adopt Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ================= CENTER: Transparent Doctor with Beagle ================= */}
          <div className="lg:col-span-3 xl:col-span-4 flex items-center justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[340px] xl:max-w-[380px]">
              <img
                src="/images/vet_beagle_transparent.png"
                alt="Veterinarian kneeling with friendly Beagle dog"
                className="w-full h-auto object-contain drop-shadow-md select-none pointer-events-none"
              />
            </div>
          </div>

          {/* ================= RIGHT: 4 Cards (2x2 Grid) with Prominent 2px Border & Hover ================= */}
          <div className="lg:col-span-6 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {PROMISES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-5 sm:p-6 border-2 border-gray-200 hover:border-brand-500 shadow-soft hover:shadow-2xl hover:shadow-brand-500/15 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 group-hover:scale-110 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
