import { useEffect, useState } from "react";
import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed items-center backdrop-blur-md box-border caret-transparent justify-between w-full z-30 px-6 transition-all duration-500 ease-out md:px-24 md:py-0 ${
        scrolled
          ? "bg-white/90 py-2 shadow-md md:bg-white/85"
          : "bg-white/70 py-4 shadow-sm md:bg-white/50"
      }`}
    >
      <Navbar scrolled={scrolled} />
    </header>
  );
};
