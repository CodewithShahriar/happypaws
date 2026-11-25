import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position refs for 60fps lerp interpolation
  const mousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const followerRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // Only enable on desktop with fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;
    setEnabled(true);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], label, .interactive-cursor')
        );
        setIsHovered(isInteractive);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth Lerp Animation Loop
    let animId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      // Smoothly pull follower toward mouse
      followerPos.current.x = lerp(followerPos.current.x, mousePos.current.x, 0.18);
      followerPos.current.y = lerp(followerPos.current.y, mousePos.current.y, 0.18);

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div 
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Trailing Follower Aura & Pet Paw right under cursor */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center transition-all duration-200 ease-out will-change-transform ${
          isHovered
            ? 'w-12 h-12 bg-brand-500/15 border-2 border-brand-500/60 backdrop-blur-[2px] shadow-[0_0_20px_rgba(134,92,236,0.35)] scale-110'
            : isClicking
            ? 'w-8 h-8 bg-brand-600/25 border border-brand-500/50 scale-90'
            : 'w-9 h-9 bg-purple-500/10 border border-purple-400/40 shadow-xs'
        }`}
      >
        {/* Adorable micro pet paw silhouette inside follower */}
        <svg
          viewBox="0 0 24 24"
          className={`transition-all duration-200 ${
            isHovered
              ? 'w-5 h-5 fill-brand-600 scale-110'
              : 'w-3.5 h-3.5 fill-brand-500/60 scale-95'
          }`}
        >
          <circle cx="7" cy="8" r="2.2" />
          <circle cx="17" cy="8" r="2.2" />
          <circle cx="10.5" cy="5" r="1.8" />
          <circle cx="13.5" cy="5" r="1.8" />
          <path d="M12 11c-2.4 0-4.2 1.8-4.2 4 0 1.8 1.6 3.2 4.2 3.2s4.2-1.4 4.2-3.2c0-2.2-1.8-4-4.2-4z" />
        </svg>
      </div>

      {/* 2. Sharp Precision Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full transition-transform duration-100 will-change-transform ${
          isHovered
            ? 'w-2 h-2 bg-brand-700 ring-2 ring-white scale-125'
            : isClicking
            ? 'w-1.5 h-1.5 bg-brand-800 scale-75'
            : 'w-2 h-2 bg-brand-600 ring-1 ring-white/80'
        }`}
      />
    </div>
  );
}
