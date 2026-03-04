import { motion } from "framer-motion";
import { Navbar } from "@/sections/Header/components/Navbar";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export const Header = () => {
  const { pastHero } = useScrollProgress(0.85);

  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={
        pastHero
          ? { y: 0, opacity: 1 }
          : { y: "-100%", opacity: 0 }
      }
      transition={{ type: "spring", stiffness: 120, damping: 22 }}
      className="fixed items-center bg-[#f6eeec]/90 backdrop-blur-md justify-between w-full z-50 px-6 py-3 shadow-[0_1px_3px_rgba(70,71,72,0.06)] border-b border-[#d4d0ce]/40 md:px-24 md:py-0"
    >
      <Navbar />
    </motion.header>
  );
};
