import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      
      {/* ================= 1. SMOOTH MOVING PASTEL AURORA ORBS ================= */}
      
      {/* Top-Left Amber/Sun Glow */}
      <div 
        className="absolute -top-32 -left-32 w-[480px] sm:w-[620px] h-[480px] sm:h-[620px] rounded-full bg-[#FDE68A]/35 blur-[90px] sm:blur-[130px]"
        style={{
          animation: 'blob-drift-1 26s ease-in-out infinite'
        }}
      />

      {/* Top-Right Soft Lavender/Brand Glow */}
      <div 
        className="absolute top-1/4 -right-28 w-[520px] sm:w-[680px] h-[520px] sm:h-[680px] rounded-full bg-[#DDD6FE]/35 blur-[100px] sm:blur-[140px]"
        style={{
          animation: 'blob-drift-2 30s ease-in-out infinite'
        }}
      />

      {/* Center-Left Gentle Peach/Rose Glow */}
      <div 
        className="absolute top-1/2 -left-24 w-[420px] sm:w-[580px] h-[420px] sm:h-[580px] rounded-full bg-[#FECDD3]/30 blur-[90px] sm:blur-[120px]"
        style={{
          animation: 'blob-drift-3 28s ease-in-out infinite'
        }}
      />

      {/* Bottom-Right Soft Sky Glow */}
      <div 
        className="absolute bottom-1/4 right-1/4 w-[460px] sm:w-[600px] h-[460px] sm:h-[600px] rounded-full bg-[#BAE6FD]/30 blur-[95px] sm:blur-[130px]"
        style={{
          animation: 'blob-drift-1 32s ease-in-out infinite reverse'
        }}
      />

      {/* Bottom-Left Warm Butter Glow */}
      <div 
        className="absolute -bottom-24 -left-20 w-[450px] sm:w-[560px] h-[450px] sm:h-[560px] rounded-full bg-[#FDE68A]/30 blur-[90px] sm:blur-[120px]"
        style={{
          animation: 'blob-drift-2 25s ease-in-out infinite'
        }}
      />


      {/* ================= 2. SMOOTH FLOATING PET DOODLES & PAW PRINTS ================= */}
      
      {/* Floating Paw 1 (Top Left) */}
      <div 
        className="absolute top-[18%] left-[8%] text-brand-300/40 select-none hidden sm:block"
        style={{ animation: 'paw-float-1 16s ease-in-out infinite' }}
      >
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
          <circle cx="7" cy="8" r="2.2" />
          <circle cx="17" cy="8" r="2.2" />
          <circle cx="10" cy="4.8" r="2" />
          <circle cx="14" cy="4.8" r="2" />
          <path d="M12 11c-2.8 0-4.8 1.8-4.8 4 0 2.2 2 3.8 4.8 3.8s4.8-1.6 4.8-3.8c0-2.2-2-4-4.8-4z" />
        </svg>
      </div>

      {/* Floating Sparkle 1 (Top Right) */}
      <div 
        className="absolute top-[28%] right-[10%] text-amber-300/50 select-none hidden sm:block"
        style={{ animation: 'paw-float-2 18s ease-in-out infinite' }}
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {/* Floating Paw 2 (Mid Right) */}
      <div 
        className="absolute top-[52%] right-[7%] text-brand-400/35 select-none"
        style={{ animation: 'paw-float-3 20s ease-in-out infinite' }}
      >
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <circle cx="7" cy="8" r="2.2" />
          <circle cx="17" cy="8" r="2.2" />
          <circle cx="10" cy="4.8" r="2" />
          <circle cx="14" cy="4.8" r="2" />
          <path d="M12 11c-2.8 0-4.8 1.8-4.8 4 0 2.2 2 3.8 4.8 3.8s4.8-1.6 4.8-3.8c0-2.2-2-4-4.8-4z" />
        </svg>
      </div>

      {/* Floating Heart Doodle (Mid Left) */}
      <div 
        className="absolute top-[65%] left-[6%] text-rose-300/40 select-none hidden md:block"
        style={{ animation: 'paw-float-1 22s ease-in-out infinite 2s' }}
      >
        <svg className="w-7 h-7 stroke-current stroke-2 fill-none -rotate-12" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      {/* Floating Paw 3 (Bottom Left) */}
      <div 
        className="absolute top-[82%] left-[12%] text-amber-400/35 select-none"
        style={{ animation: 'paw-float-2 24s ease-in-out infinite 3s' }}
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <circle cx="7" cy="8" r="2.2" />
          <circle cx="17" cy="8" r="2.2" />
          <circle cx="10" cy="4.8" r="2" />
          <circle cx="14" cy="4.8" r="2" />
          <path d="M12 11c-2.8 0-4.8 1.8-4.8 4 0 2.2 2 3.8 4.8 3.8s4.8-1.6 4.8-3.8c0-2.2-2-4-4.8-4z" />
        </svg>
      </div>

      {/* Floating Paw 4 (Bottom Right) */}
      <div 
        className="absolute top-[88%] right-[12%] text-brand-300/40 select-none hidden sm:block"
        style={{ animation: 'paw-float-3 19s ease-in-out infinite 1s' }}
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <circle cx="7" cy="8" r="2.2" />
          <circle cx="17" cy="8" r="2.2" />
          <circle cx="10" cy="4.8" r="2" />
          <circle cx="14" cy="4.8" r="2" />
          <path d="M12 11c-2.8 0-4.8 1.8-4.8 4 0 2.2 2 3.8 4.8 3.8s4.8-1.6 4.8-3.8c0-2.2-2-4-4.8-4z" />
        </svg>
      </div>

    </div>
  );
}
