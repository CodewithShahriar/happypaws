import React from 'react';
import { ArrowUpRight, ShieldCheck, FileText, HeartHandshake, Headphones } from 'lucide-react';

const PROMISES = [
  {
    title: "Certified Health",
    desc: "Every pet undergoes complete clinical screening, core vaccinations, and preventive parasite treatment before adoption.",
    icon: ShieldCheck
  },
  {
    title: "Transparent Digital Histories",
    desc: "Access verified health records, deworming dates, and full medical clearance certificates anytime.",
    icon: FileText
  },
  {
    title: "Compassionate Pet Matching",
    desc: "Algorithmic personality matching to ensure your home and lifestyle perfectly fit your rescue pet.",
    icon: HeartHandshake
  },
  {
    title: "24/7 Support Hotline",
    desc: "Round-the-clock emergency assistance and veterinary guidance throughout your adoption transition.",
    icon: Headphones
  }
];

export default function GuaranteedPeace({ onOpenAdopt }) {
  return (
    <section className="py-16 lg:py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-600 text-xs font-bold tracking-wide uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-600"></span>
              Our Promise To You
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
              Guaranteed Peace<br className="hidden sm:inline" /> of Mind
            </h2>
          </div>

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

        {/* Content Layout: Center Vet Beagle Card + 4 Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Vet with Beagle Dog Image Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-3 sm:p-4 border border-gray-100 shadow-soft">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full bg-brand-50">
                <img
                  src="/images/vet_beagle_white_scrubs.jpg"
                  alt="Veterinarian in white scrubs with Beagle dog"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* 4 Feature Cards (2x2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {PROMISES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-soft hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">
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
