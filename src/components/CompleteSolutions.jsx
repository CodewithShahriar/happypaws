import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck, 
  Stethoscope, 
  Pill, 
  Sparkles, 
  Award, 
  Home, 
  Clock, 
  Calendar 
} from 'lucide-react';
import { SERVICES } from '../data/mockData';

const SERVICE_ICONS = {
  'clinical-care': Stethoscope,
  'food-medication': Pill,
  'hygiene-spa': Sparkles,
  'smart-coaching': Award,
  'cozy-hotel': Home,
};

export default function CompleteSolutions({ onOpenBooking }) {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[1]?.id || SERVICES[0].id);

  // Active service object
  const activeService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];
  const ActiveIcon = SERVICE_ICONS[activeService.id] || Stethoscope;

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2] relative">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-brand-600 text-xs font-bold tracking-wide uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-600"></span>
              All In One Care
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-3">
              Complete Solutions For Pets
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              From emergency veterinary surgery and specialized clinical diets to stress-free spa therapy and coaching — holistic care under one roof.
            </p>
          </div>

          {/* Quick Contact & Booking Header CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+639171234567"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-xs rounded-full border border-amber-100/80 shadow-xs transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-600" />
              <span>(02) 8800-PAWS</span>
            </a>

            <button
              onClick={() => onOpenBooking(activeService.title)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:shadow-purple-glow transition-all"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Column Cohesive Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* ================= LEFT COLUMN: Interactive Service Menu (5 Cols) ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <div className="space-y-2.5">
              {SERVICES.map((srv) => {
                const isActive = srv.id === activeServiceId;
                const Icon = SERVICE_ICONS[srv.id] || Stethoscope;

                return (
                  <div
                    key={srv.id}
                    onClick={() => setActiveServiceId(srv.id)}
                    className={`group rounded-2xl p-3.5 sm:p-4 transition-all duration-300 cursor-pointer border-2 ${
                      isActive
                        ? 'bg-brand-50/70 border-brand-600 shadow-md ring-2 ring-brand-500/20 -translate-y-0.5'
                        : 'bg-white hover:bg-brand-50/40 border-gray-200 hover:border-brand-500 shadow-xs hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Service Icon */}
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isActive
                            ? 'bg-brand-600 text-white shadow-xs scale-105'
                            : 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white group-hover:scale-105'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>

                        {/* Title & Short Tagline */}
                        <div className="min-w-0">
                          <h3 className={`text-sm sm:text-base font-bold transition-colors truncate ${
                            isActive ? 'text-brand-700' : 'text-gray-900 group-hover:text-brand-600'
                          }`}>
                            {srv.title}
                          </h3>
                          <p className={`text-[11px] sm:text-xs line-clamp-1 transition-colors ${
                            isActive ? 'text-brand-600 font-medium' : 'text-gray-500 group-hover:text-gray-600'
                          }`}>
                            {srv.badge || 'Professional Care'}
                          </p>
                        </div>
                      </div>

                      {/* Right Indicator */}
                      <div className="shrink-0 flex items-center gap-1.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors ${
                          isActive
                            ? 'bg-brand-600 text-white border border-brand-600'
                            : 'bg-gray-100 text-gray-600 group-hover:bg-brand-100 group-hover:text-brand-700 border border-gray-200 group-hover:border-brand-200'
                        }`}>
                          {srv.badge}
                        </span>
                        <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${
                          isActive ? 'text-brand-600 translate-x-0.5 -translate-y-0.5' : 'text-gray-400 group-hover:text-brand-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        }`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Trust Guarantee Strip */}
            <div className="bg-white hover:bg-brand-50/20 rounded-2xl p-3.5 sm:p-4 border-2 border-gray-200 hover:border-brand-300 shadow-soft transition-all duration-300">
              <div className="grid grid-cols-3 gap-2 text-center divide-x divide-gray-100 text-[11px]">
                <div className="flex flex-col items-center gap-0.5">
                  <ShieldCheck className="w-4 h-4 text-brand-600" />
                  <span className="font-bold text-gray-900 mt-1">Licensed Vets</span>
                  <span className="text-[10px] text-gray-500">Board Certified</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 pl-2">
                  <Clock className="w-4 h-4 text-brand-600" />
                  <span className="font-bold text-gray-900 mt-1">Same-Day</span>
                  <span className="text-[10px] text-gray-500">Fast Scheduling</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 pl-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold text-gray-900 mt-1">Fear-Free</span>
                  <span className="text-[10px] text-gray-500">Gentle Handling</span>
                </div>
              </div>
            </div>

          </div>


          {/* ================= RIGHT COLUMN: Hero Visual Showcase (7 Cols) ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-gray-200 hover:border-brand-300 shadow-soft h-full flex flex-col justify-between group transition-all duration-300">
              
              {/* Top: Sunlit Modern Veterinary Clinic Image */}
              <div className="relative rounded-2xl overflow-hidden h-56 sm:h-64 lg:h-72 w-full bg-brand-50 mb-5">
                <img
                  src="/images/services_hero_vet.jpg"
                  alt="Modern boutique pet clinic with compassionate veterinarian caring for dog and cat"
                  className="w-full h-full object-cover object-[center_35%] group-hover:scale-102 transition-transform duration-700"
                />

                {/* Floating Fear-Free Badge */}
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] font-bold text-gray-800">Boutique Wellness Center</span>
                </div>

                {/* Live Availability Badge */}
                <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-600/90 text-white backdrop-blur-md shadow-sm text-[11px] font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Slots Open Today</span>
                </div>
              </div>

              {/* Bottom: Dynamic Active Service Spotlight */}
              <div className="flex-1 flex flex-col justify-between pt-1">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                        <ActiveIcon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">
                        {activeService.title}
                      </h3>
                    </div>

                    <span className="text-xs font-bold text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                      {activeService.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {activeService.description}
                  </p>

                  {/* 4 Feature Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-5 bg-[#FAF7F2]/70 p-3.5 sm:p-4 rounded-2xl border border-amber-100/50">
                    {activeService.features?.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Direct Doctor Consultation & Medical Records</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(activeService.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-sm rounded-full shadow-sm hover:shadow-purple-glow transition-all transform active:scale-95 shrink-0"
                  >
                    <span>Book {activeService.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
