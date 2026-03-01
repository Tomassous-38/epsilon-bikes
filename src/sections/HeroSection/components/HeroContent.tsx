import { useEffect, useState } from "react";

export const HeroContent = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute box-border caret-transparent flex flex-col w-fit z-[3]">
      <img
        src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/logo.svg"
        alt="Epsilon Bikes logo"
        className={`self-center aspect-square box-border caret-transparent max-w-full translate-y-[-150px] w-32 mb-24 transition-all duration-1000 ease-out ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      />
      <div className="box-border caret-transparent translate-y-[-150px]">
        <h1
          className={`text-red-500 text-[72.25px] font-bold self-center box-border caret-transparent flex justify-center tracking-[3.6125px] leading-[57.8px] text-center uppercase md:text-[208px] md:tracking-[10.4px] md:leading-[166.4px] transition-all duration-1000 ease-out delay-300 ${
            loaded
              ? "opacity-100 tracking-[3.6125px] md:tracking-[10.4px]"
              : "opacity-0 tracking-[20px] md:tracking-[40px]"
          }`}
        >
          EPSILON
        </h1>
        <div
          className={`box-border caret-transparent flex justify-between pl-[9px] pr-[11.625px] md:pl-[16.24px] md:pr-[25.2px] transition-all duration-700 ease-out delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-base box-border caret-transparent leading-6 uppercase overflow-clip md:text-2xl md:leading-8">
            <span className="text-base box-border caret-transparent inline-block leading-6 md:text-2xl md:leading-8">
              Unique
            </span>
          </p>
          <p className="text-base box-border caret-transparent leading-6 uppercase overflow-clip md:text-2xl md:leading-8">
            <span className="text-base box-border caret-transparent inline-block leading-6 md:text-2xl md:leading-8">
              Artisanal
            </span>
          </p>
        </div>
        {/* Subtle scroll indicator */}
        <div
          className={`flex justify-center mt-24 transition-all duration-700 delay-1000 ${
            loaded ? "opacity-60" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[3px] text-black/60">Scroll</span>
            <div className="w-px h-8 bg-black/30 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
