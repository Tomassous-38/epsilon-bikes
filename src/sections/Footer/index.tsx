import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  return (
    <footer className="bg-[#464748] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-display font-black text-[20vw] leading-none text-white/[0.02] uppercase select-none pointer-events-none whitespace-nowrap">
        EPSILON
      </div>
      <FooterContent />
    </footer>
  );
};
