import { useEffect, useRef, useState } from "react";
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bikeRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (bikeRef.current) {
            bikeRef.current.style.transform = `translate3d(0, ${200 + scrollY * 0.15}px, 0)`;
          }
          if (bgRef.current) {
            bgRef.current.style.transform = `translate3d(0, ${scrollY * 0.25}px, 0) scale(1.1)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative items-center box-border caret-transparent flex flex-col justify-center min-h-[1100px] overflow-clip"
    >
      {/* Background image with parallax */}
      <img
        ref={bgRef}
        sizes="50vw"
        src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/hero-background.jpg"
        alt=""
        onLoad={() => setBgLoaded(true)}
        className={`absolute box-border caret-transparent h-[120%] max-w-full object-cover w-full left-0 top-0 z-0 scale-110 transition-opacity duration-1000 ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/15 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 z-[1]" />
      {/* Bike image with parallax */}
      <img
        ref={bikeRef}
        sizes="(min-width: 1620px) 1758px, calc(108.85vw + 16px)"
        src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/hero-bike-3.png"
        alt=""
        className={`absolute box-border caret-transparent max-w-[1758px] translate-y-[200px] z-[2] transition-opacity duration-1000 delay-100 ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <HeroContent />
    </section>
  );
};
