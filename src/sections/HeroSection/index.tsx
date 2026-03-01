import { HeroContent } from "@/sections/HeroSection/components/HeroContent";

export const HeroSection = () => {
  return (
    <section className="relative items-center box-border caret-transparent flex flex-col justify-center min-h-[1100px] overflow-clip">
      <img
        sizes="50vw"
        src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/hero-background.jpg"
        alt=""
        className="absolute box-border caret-transparent h-full max-w-full object-cover w-full left-0 top-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/10 z-[1]" />
      <img
        sizes="(min-width: 1620px) 1758px, calc(108.85vw + 16px)"
        src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/hero-bike-3.png"
        alt=""
        className="absolute box-border caret-transparent max-w-[1758px] translate-y-[200px] z-[2]"
      />
      <HeroContent />
    </section>
  );
};
