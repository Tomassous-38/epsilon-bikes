import { useEffect, useState } from "react";

export const FloatingButton = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative box-border caret-transparent z-40">
      <div
        className={`fixed aspect-square bg-zinc-700 shadow-lg box-border caret-transparent w-20 rounded-t-full rounded-l-full right-0 bottom-20 transition-all duration-500 ease-out ${
          visible
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } ${hovered ? "bg-zinc-600 scale-105" : ""}`}
      />
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`fixed items-center aspect-square bg-transparent caret-transparent flex justify-center text-center w-20 z-[3] p-0 right-0 bottom-20 transition-all duration-500 ease-out ${
          visible
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
        aria-label="Contact"
      >
        <div className="relative box-border caret-transparent h-full">
          <div className={`absolute box-border caret-transparent origin-[50%_0%] transition-transform duration-300 ${hovered ? "scale-110" : "scale-100"}`}>
            <img
              src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/icon-4.svg"
              alt="Contact"
              className="box-border caret-transparent w-20 pl-6 pr-5 pt-6 pb-5"
            />
          </div>
          <div className="relative box-border caret-transparent origin-[50%_0%] overflow-hidden">
            <img
              src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/icon-4.svg"
              alt=""
              className="box-border caret-transparent w-20 pl-6 pr-5 pt-6 pb-5 opacity-0"
            />
          </div>
        </div>
      </button>
    </div>
  );
};
