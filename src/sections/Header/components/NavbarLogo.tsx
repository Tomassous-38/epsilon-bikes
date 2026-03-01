interface NavbarLogoProps {
  scrolled?: boolean;
}

export const NavbarLogo = ({ scrolled }: NavbarLogoProps) => {
  return (
    <div className="box-border caret-transparent">
      <a
        href="https://www.epsilon-bikes.com/"
        className="box-border caret-transparent"
      >
        <img
          src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/logo.svg"
          alt="accueil"
          className={`aspect-square box-border caret-transparent max-w-full transition-all duration-500 ease-out ${
            scrolled
              ? "h-10 opacity-80 md:opacity-70"
              : "h-12 opacity-60 hover:opacity-90 md:opacity-40"
          }`}
        />
      </a>
    </div>
  );
};
