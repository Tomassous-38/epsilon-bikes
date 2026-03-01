export const NavMenu = () => {
  return (
    <ul className="text-xl font-medium items-center box-border flex flex-col justify-center leading-7 list-none p-4 md:text-2xl md:flex-row md:gap-x-12 md:leading-8 md:p-0">
      <li className="relative items-center box-border leading-7 p-2 md:leading-8 md:p-0">
        <button className="text-xl bg-transparent leading-7 text-left w-full px-0 py-2 md:text-2xl md:leading-8 md:w-fit md:py-7">
          <a
            href="https://www.epsilon-bikes.com/custom-lab-velo-sur-mesure/"
            className="relative text-xl box-border leading-7 opacity-70 hover:opacity-100 transition-opacity duration-200 md:text-2xl md:leading-8 after:bg-black after:block after:h-[1.5px] after:absolute after:-bottom-1 after:inset-x-0 after:scale-x-0 after:origin-[0%_50%] hover:after:scale-x-100 after:transition-transform after:duration-300 after:font-gotham"
          >
            Custom Lab
          </a>
        </button>
        <ul className="static text-white text-xl bg-zinc-700 box-border block leading-7 opacity-90 text-nowrap p-0 left-auto md:absolute md:text-2xl md:hidden md:leading-8 md:p-2 md:left-0 md:shadow-xl">
          <li className="text-xl box-border leading-7 text-nowrap w-full px-4 py-2 hover:bg-zinc-600 transition-colors duration-150 md:text-2xl md:leading-8 md:py-3">
            <a
              href="https://www.epsilon-bikes.com/custom-lab-velo-sur-mesure/"
              className="relative text-xl box-border leading-7 opacity-95 text-nowrap md:text-2xl md:leading-8"
            >
              L&#39;accompagnement sur mesure
            </a>
          </li>
          <li className="text-xl box-border leading-7 text-nowrap w-full px-4 py-2 hover:bg-zinc-600 transition-colors duration-150 md:text-2xl md:leading-8 md:py-3">
            <a
              href="https://www.epsilon-bikes.com/les-velos-sur-mesure/"
              className="relative text-xl box-border leading-7 opacity-95 text-nowrap md:text-2xl md:leading-8"
            >
              Les vélos réalisés
            </a>
          </li>
        </ul>
      </li>

      <li className="relative items-center box-border leading-7 p-2 md:leading-8 md:p-0">
        <button className="text-xl bg-transparent leading-7 text-center px-0 py-2 md:text-2xl md:leading-8 md:py-7">
          <a
            href="https://www.epsilon-bikes.com/la-gamme-de-velos/"
            className="relative text-xl box-border leading-7 opacity-70 hover:opacity-100 transition-opacity duration-200 md:text-2xl md:leading-8 after:bg-black after:block after:h-[1.5px] after:absolute after:-bottom-1 after:inset-x-0 after:scale-x-0 after:origin-[0%_50%] hover:after:scale-x-100 after:transition-transform after:duration-300 after:font-gotham"
          >
            La gamme
          </a>
        </button>
      </li>

      <li className="relative items-center box-border leading-7 p-2 md:leading-8 md:p-0">
        <button className="text-xl bg-transparent leading-7 text-left w-full px-0 py-2 md:text-2xl md:leading-8 md:w-fit md:py-7">
          <a
            href="#"
            className="relative text-xl box-border leading-7 opacity-70 hover:opacity-100 transition-opacity duration-200 md:text-2xl md:leading-8 after:bg-black after:block after:h-[1.5px] after:absolute after:-bottom-1 after:inset-x-0 after:scale-x-0 after:origin-[0%_50%] hover:after:scale-x-100 after:transition-transform after:duration-300 after:font-gotham"
          >
            Plus
          </a>
        </button>
        <ul className="static text-white text-xl bg-zinc-700 box-border block leading-7 opacity-90 text-nowrap p-0 left-auto md:absolute md:text-2xl md:hidden md:leading-8 md:p-2 md:left-0 md:shadow-xl">
          <li className="text-xl box-border leading-7 text-nowrap w-full px-4 py-2 hover:bg-zinc-600 transition-colors duration-150 md:text-2xl md:leading-8 md:py-3">
            <a
              href="https://www.epsilon-bikes.com/magasin-de-velos-sur-mesure/"
              className="relative text-xl box-border leading-7 opacity-95 text-nowrap md:text-2xl md:leading-8"
            >
              Le magasin
            </a>
          </li>
          <li className="text-xl box-border leading-7 text-nowrap w-full px-4 py-2 hover:bg-zinc-600 transition-colors duration-150 md:text-2xl md:leading-8 md:py-3">
            <a
              href="https://www.epsilon-bikes.com/a-propos/"
              className="relative text-xl box-border leading-7 opacity-95 text-nowrap md:text-2xl md:leading-8"
            >
              À propos
            </a>
          </li>
        </ul>
      </li>

      <li className="text-xl box-border leading-7 p-2 md:leading-8 md:p-0">
        <button className="relative text-xl items-center bg-transparent gap-x-2 flex leading-7 gap-y-2 text-center w-fit border-2 border-zinc-700 overflow-clip px-6 py-2 hover:bg-zinc-700 hover:text-white hover:scale-[1.03] transition-all duration-200 md:text-2xl md:leading-8 md:px-9 md:py-3">
          <span className="text-xl box-border block leading-7 md:text-2xl md:leading-8">
            Contact
          </span>
        </button>
      </li>
    </ul>
  );
};
