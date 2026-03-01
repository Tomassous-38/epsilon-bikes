import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";

export const HeroSection = () => {
  const bgY = useParallax({ speed: 0.3 });
  const bikeY = useParallax({ speed: -0.15 });
  const textY = useParallax({ speed: -0.05 });

  return (
    <section className="relative items-center flex flex-col justify-center h-screen min-h-[700px] max-h-[1100px] overflow-clip">
      <motion.img
        style={{ y: bgY }}
        sizes="100vw"
        src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/hero-background.jpg"
        alt=""
        className="absolute h-[120%] max-w-none object-cover w-full left-0 -top-[10%] z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20 z-[1]" />
      <motion.img
        style={{ y: bikeY }}
        sizes="(min-width: 1620px) 1758px, calc(108.85vw + 16px)"
        src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/hero-bike-3.png"
        alt=""
        className="absolute max-w-[1758px] translate-y-[200px] z-[2]"
      />
      <HeroContent textY={textY} />
    </section>
  );
};
