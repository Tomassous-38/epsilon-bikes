import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="fixed items-center bg-white/85 backdrop-blur-md box-border caret-transparent justify-between w-full z-30 px-6 py-4 shadow-sm transition-all duration-300 md:bg-white/70 md:px-24 md:py-0">
      <Navbar />
    </header>
  );
};
