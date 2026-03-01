export const FooterNav = () => {
  return (
    <nav
      aria-label="secondary"
      className="text-red-500 text-xl box-border caret-transparent gap-x-20 grid grid-cols-none leading-7 max-w-[1800px] gap-y-8 translate-y-[86.0583px] w-full px-6 md:grid-cols-[repeat(3,auto)] md:transform-none md:px-16"
    >
      <ul className="box-border caret-transparent gap-x-16 hidden flex-row col-end-[span_2] col-start-[span_2] list-none min-h-0 min-w-0 gap-y-8 pl-0 md:flex md:flex-col md:col-end-[span_1] md:col-start-[span_1] md:min-h-[auto] md:min-w-[auto]">
        <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="https://www.epsilon-bikes.com/"
            className="relative box-border caret-transparent after:accent-auto after:bg-red-500 after:box-border after:caret-transparent after:text-red-500 after:block after:text-xl after:not-italic after:normal-nums after:font-normal after:h-[1.5px] after:tracking-[normal] after:leading-7 after:list-outside after:list-none after:min-h-px after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:transform-none after:origin-[100%_50%] after:visible after:border-separate after:-bottom-1 after:inset-x-0 after:font-gotham after:md:scale-x-0 hover:border-red-500"
          >
            Home
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="https://www.epsilon-bikes.com/sur-mesure/"
            className="relative box-border caret-transparent after:accent-auto after:bg-red-500 after:box-border after:caret-transparent after:text-red-500 after:block after:text-xl after:not-italic after:normal-nums after:font-normal after:h-[1.5px] after:tracking-[normal] after:leading-7 after:list-outside after:list-none after:min-h-px after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:transform-none after:origin-[100%_50%] after:visible after:border-separate after:-bottom-1 after:inset-x-0 after:font-gotham after:md:scale-x-0 hover:border-red-500"
          >
            Sur mesure
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
          <a
            href="https://www.epsilon-bikes.com/les-velos-de-serie/"
            className="relative box-border caret-transparent after:accent-auto after:bg-red-500 after:box-border after:caret-transparent after:text-red-500 after:block after:text-xl after:not-italic after:normal-nums after:font-normal after:h-[1.5px] after:tracking-[normal] after:leading-7 after:list-outside after:list-none after:min-h-px after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:transform-none after:origin-[100%_50%] after:visible after:border-separate after:-bottom-1 after:inset-x-0 after:font-gotham after:md:scale-x-0 hover:border-red-500"
          >
            Série
          </a>
        </li>
      </ul>
      <ul className="box-border caret-transparent gap-x-2 flex flex-col list-none gap-y-2 pl-0 md:gap-x-8 md:gap-y-8">
        <li className="box-border caret-transparent">
          <a
            href="https://www.epsilon-bikes.com/conditions-generales-de-vente/"
            className="relative box-border caret-transparent hover:border-red-500"
          >
            Conditions générales de vente
          </a>
        </li>
        <li className="box-border caret-transparent">
          <a
            href="https://www.epsilon-bikes.com/mentions-legales/"
            className="relative box-border caret-transparent hover:border-red-500"
          >
            Mentions légales
          </a>
        </li>
      </ul>
      <ul className="box-border caret-transparent gap-x-2 flex flex-col list-none gap-y-2 pl-0 md:gap-x-8 md:gap-y-8">
        <li className="box-border caret-transparent">
          <a
            href="https://maps.app.goo.gl/tk57dfMDYcGpeGpE7"
            className="relative box-border caret-transparent hover:border-red-500"
          >
            70 rue Bataille 69008 LYON
          </a>
        </li>
        <li className="box-border caret-transparent">
          <a
            href="tel://+33627641839"
            className="relative box-border caret-transparent hover:border-red-500"
          >
            +33 6 27 64 18 39
          </a>
        </li>
      </ul>
    </nav>
  );
};
