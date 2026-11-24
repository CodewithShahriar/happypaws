import React from 'react';

const PARTNERS = [
  { 
    name: "Lily's Kitchen", 
    image: "/images/partners/partner_lilys_kitchen.png", 
    className: "h-6 sm:h-7 md:h-8 max-w-[85px] sm:max-w-[100px] md:max-w-[110px]" 
  },
  { 
    name: "IAMS", 
    image: "/images/partners/partner_iams.png", 
    className: "h-6 sm:h-7 md:h-8 max-w-[80px] sm:max-w-[95px] md:max-w-[105px]" 
  },
  { 
    name: "PURINA", 
    image: "/images/partners/partner_purina.png", 
    className: "h-4.5 sm:h-5 md:h-6 max-w-[85px] sm:max-w-[100px] md:max-w-[115px]" 
  },
  { 
    name: "Orijen", 
    image: "/images/partners/partner_orijen.png", 
    className: "h-7 sm:h-8 md:h-9 max-w-[80px] sm:max-w-[90px] md:max-w-[100px]" 
  },
  { 
    name: "whiskas", 
    image: "/images/partners/partner_whiskas.png", 
    className: "h-7 sm:h-8 md:h-9 max-w-[80px] sm:max-w-[90px] md:max-w-[100px]" 
  },
  { 
    name: "Eukanuba", 
    image: "/images/partners/partner_eukanuba.png", 
    className: "h-4.5 sm:h-5.5 md:h-6.5 max-w-[85px] sm:max-w-[100px] md:max-w-[115px]" 
  },
  { 
    name: "ACANA", 
    image: "/images/partners/partner_acana.png", 
    className: "h-6 sm:h-7 md:h-8 max-w-[85px] sm:max-w-[100px] md:max-w-[110px]" 
  }
];

export default function BrandPartners() {
  return (
    <section className="pt-2 pb-6 sm:pt-3 sm:pb-8 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single Row 7-Brand Grid - Fits all 7 in 1 line */}
        <div className="grid grid-cols-7 gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center justify-between">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 flex items-center justify-center h-14 sm:h-16 md:h-[72px] w-full group"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className={`w-auto ${partner.className} object-contain transition-transform duration-300 group-hover:scale-105`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
