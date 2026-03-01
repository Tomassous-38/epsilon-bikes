const footerLinkClass =
  "relative hover:text-red-600 transition-colors duration-200 after:bg-red-500 after:block after:h-[1.5px] after:absolute after:-bottom-1 after:inset-x-0 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300";

export const FooterNav = () => {
  return (
    <nav
      aria-label="secondary"
      className="text-red-500 text-xl gap-x-20 grid grid-cols-none leading-7 max-w-[1800px] gap-y-8 w-full px-6 md:grid-cols-[repeat(3,auto)] md:px-16"
    >
      <ul className="hidden flex-col list-none gap-y-8 pl-0 md:flex">
        <li>
          <a href="https://www.epsilon-bikes.com/" className={footerLinkClass}>
            Home
          </a>
        </li>
        <li>
          <a href="https://www.epsilon-bikes.com/sur-mesure/" className={footerLinkClass}>
            Sur mesure
          </a>
        </li>
        <li>
          <a href="https://www.epsilon-bikes.com/les-velos-de-serie/" className={footerLinkClass}>
            Série
          </a>
        </li>
      </ul>
      <ul className="flex flex-col list-none gap-y-2 pl-0 md:gap-y-8">
        <li>
          <a
            href="https://www.epsilon-bikes.com/conditions-generales-de-vente/"
            className={footerLinkClass}
          >
            Conditions générales de vente
          </a>
        </li>
        <li>
          <a
            href="https://www.epsilon-bikes.com/mentions-legales/"
            className={footerLinkClass}
          >
            Mentions légales
          </a>
        </li>
      </ul>
      <ul className="flex flex-col list-none gap-y-2 pl-0 md:gap-y-8">
        <li>
          <a
            href="https://maps.app.goo.gl/tk57dfMDYcGpeGpE7"
            className={footerLinkClass}
          >
            70 rue Bataille 69008 LYON
          </a>
        </li>
        <li>
          <a
            href="tel://+33627641839"
            className={footerLinkClass}
          >
            +33 6 27 64 18 39
          </a>
        </li>
      </ul>
    </nav>
  );
};
