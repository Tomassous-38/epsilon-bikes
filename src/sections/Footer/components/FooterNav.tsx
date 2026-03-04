const linkClass =
  "text-white/50 hover:text-white transition-colors duration-200 text-sm";

export const FooterNav = () => {
  return (
    <nav aria-label="secondary" className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-8">
      <div className="flex flex-col gap-4">
        <span className="text-[#ea4b33] text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">Navigation</span>
        <a href="https://www.epsilon-bikes.com/" className={linkClass}>Home</a>
        <a href="https://www.epsilon-bikes.com/sur-mesure/" className={linkClass}>Sur mesure</a>
        <a href="https://www.epsilon-bikes.com/les-velos-de-serie/" className={linkClass}>Série</a>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[#ea4b33] text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">Services</span>
        <a href="https://www.epsilon-bikes.com/custom-lab-velo-sur-mesure/" className={linkClass}>Custom Lab</a>
        <a href="https://www.epsilon-bikes.com/la-gamme-de-velos/" className={linkClass}>La gamme</a>
        <a href="https://www.epsilon-bikes.com/a-propos/" className={linkClass}>À propos</a>
      </div>
      <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
        <span className="text-[#ea4b33] text-[10px] uppercase tracking-[0.2em] font-semibold mb-2">Contact</span>
        <a href="https://maps.app.goo.gl/tk57dfMDYcGpeGpE7" className={linkClass}>70 rue Bataille 69008 LYON</a>
        <a href="tel://+33627641839" className={linkClass}>+33 6 27 64 18 39</a>
      </div>
    </nav>
  );
};
