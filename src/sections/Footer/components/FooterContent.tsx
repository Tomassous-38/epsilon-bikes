import { FooterNav } from "@/sections/Footer/components/FooterNav";
import { ScrollReveal } from "@/components/ScrollReveal";

export const FooterContent = () => {
  return (
    <div className="relative max-w-[1400px] mx-auto px-6 md:px-16">
      <div className="border-t-2 border-[#ea4b33]" />
      <div className="py-16 md:py-24 flex flex-col gap-16">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
            <div className="flex flex-col gap-6">
              <img
                src="https://www.epsilon-bikes.com/wp-content/uploads/2023/12/logo.svg"
                alt="Epsilon Bikes"
                className="h-12 w-12 brightness-0 invert"
              />
              <p className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">
                EPSILON
              </p>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                Fabricant français de vélos artisanaux en acier, basé à Lyon.
              </p>
            </div>
            <FooterNav />
          </div>
        </ScrollReveal>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-white/30">
            Copyright 2024 – Réalisation{" "}
            <a
              href="https://www.agence-newic.com/"
              className="hover:text-white/60 transition-colors duration-200"
            >
              Agence Newic
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.epsilon-bikes.com/conditions-generales-de-vente/" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200">CGV</a>
            <a href="https://www.epsilon-bikes.com/mentions-legales/" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200">Mentions légales</a>
          </div>
        </div>
      </div>
    </div>
  );
};
