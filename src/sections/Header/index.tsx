import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="fixed items-center bg-white/85 backdrop-blur-md justify-between w-full z-50 px-6 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-stone-200/50 transition-all duration-300 md:bg-white/70 md:px-24 md:py-0">
      <Navbar />
    </header>
  );
};
