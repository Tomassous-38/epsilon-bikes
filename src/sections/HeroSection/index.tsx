import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";

export const HeroSection = () => {
  const bgY = useParallax({ speed: 0.3 });
  const bikeY = useParallax({ speed: -0.15 });
  const textY = useParallax({ speed: -0.05 });

  return (
    <section className="hero relative flex flex-col justify-center items-center min-h-[110vh] overflow-clip">
      <motion.img
        style={{ y: bgY }}
        srcSet="https://www.epsilon-bikes.com/wp-content/uploads/2023/12/hero-background-640x0-c-default.webp 640w, https://www.epsilon-bikes.com/wp-content/uploads/2023/12/hero-background-1024x0-c-default.webp 1024w, https://www.epsilon-bikes.com/wp-content/uploads/2023/12/hero-background-1280x0-c-default.webp 1280w, https://www.epsilon-bikes.com/wp-content/uploads/2023/12/hero-background.webp 1536w"
        sizes="100vw"
        src="https://www.epsilon-bikes.com/wp-content/uploads/2023/12/hero-background.webp"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <motion.img
        style={{ y: bikeY }}
        srcSet="https://www.epsilon-bikes.com/wp-content/uploads/2023/12/hero-bike-3-640x0-c-default.webp 640w, https://www.epsilon-bikes.com/wp-content/uploads/2023/12/hero-bike-3-1024x0-c-default.webp 1024w, https://www.epsilon-bikes.com/wp-content/uploads/2023/12/hero-bike-3-1280x0-c-default.webp 1280w, https://www.epsilon-bikes.com/wp-content/uploads/2023/12/hero-bike-3.webp 1536w"
        sizes="(min-width: 1620px) 1758px, calc(108.85vw + 16px)"
        src="https://www.epsilon-bikes.com/wp-content/uploads/2023/12/hero-bike-3.png"
        alt="Vélo artisanal Epsilon Bikes"
        className="hero-image absolute max-w-none w-[117vw] top-[28vh]"
      />
      <motion.div
        style={{ y: textY }}
        className="absolute flex flex-col w-fit mix-blend-multiply top-[calc(50%-43vh)]"
      >
        <HeroContent />
      </motion.div>
    </section>
  );
};
