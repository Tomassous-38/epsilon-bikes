import { FooterNav } from "@/sections/Footer/components/FooterNav";

export const FooterContent = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-12 flex flex-col gap-y-12 translate-y-[-50.0%] md:gap-x-16 md:gap-y-16">
      <h5 className="text-red-500 text-[83.5px] font-bold self-center bg-clip-text bg-red-500 box-border caret-transparent flex justify-center tracking-[4.175px] leading-[66.8px] text-center uppercase translate-y-[86.0583px] md:text-[246.4px] md:tracking-[12.32px] md:leading-[197.12px] md:transform-none">
        EPSILON
      </h5>
      <FooterNav />
      <div className="text-base items-center box-border caret-transparent gap-x-2 flex flex-col leading-6 gap-y-2 text-center translate-y-[86.0583px] pt-4 px-12 md:text-xl md:flex-row md:leading-7 md:gap-y-4 md:transform-none md:px-24">
        <img
          src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/logo-footer.svg"
          alt=""
          className="text-base box-border caret-transparent h-4 leading-6 max-w-full md:text-xl md:h-6 md:leading-7"
        />
        <p className="text-base box-border caret-transparent leading-6 md:text-xl md:leading-7">
          <span className="text-base box-border caret-transparent hidden leading-6 md:text-xl md:inline md:leading-7">
            -
          </span>
        </p>
        <p className="text-base box-border caret-transparent leading-6 md:text-xl md:leading-7">
          Copyright 2024 – Réalisation{" "}
          <a
            href="https://www.agence-newic.com/"
            className="relative text-base box-border caret-transparent leading-6 md:text-xl md:leading-7 hover:border-red-500"
          >
            Agence Newic
          </a>
        </p>
        <p className="text-base box-border caret-transparent leading-6 md:text-xl md:leading-7"></p>
      </div>
    </div>
  );
};
