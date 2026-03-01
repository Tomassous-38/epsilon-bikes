import { FooterNav } from "@/sections/Footer/components/FooterNav";
import { ScrollReveal } from "@/components/ScrollReveal";

export const FooterContent = () => {
  return (
    <div className="items-center gap-x-12 flex flex-col gap-y-12 pt-16 pb-8 md:gap-x-16 md:gap-y-16 md:pt-24 md:pb-10">
      <ScrollReveal direction="none" scale={0.9}>
        <h5 className="text-red-500 text-[83.5px] font-bold self-center bg-clip-text bg-red-500 flex justify-center tracking-[4.175px] leading-[66.8px] text-center uppercase md:text-[246.4px] md:tracking-[12.32px] md:leading-[197.12px]">
          EPSILON
        </h5>
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.2}>
        <FooterNav />
      </ScrollReveal>
      <div className="text-base items-center gap-x-2 flex flex-col leading-6 gap-y-2 text-center pt-4 px-12 md:text-xl md:flex-row md:leading-7 md:gap-y-4 md:px-24">
        <img
          src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/logo-footer.svg"
          alt=""
          className="h-4 max-w-full md:h-6"
        />
        <p className="text-base leading-6 md:text-xl md:leading-7">
          <span className="hidden md:inline">
            -
          </span>
        </p>
        <p className="text-base leading-6 md:text-xl md:leading-7">
          Copyright 2024 – Réalisation{" "}
          <a
            href="https://www.agence-newic.com/"
            className="relative hover:text-red-600 transition-colors duration-200"
          >
            Agence Newic
          </a>
        </p>
      </div>
    </div>
  );
};
