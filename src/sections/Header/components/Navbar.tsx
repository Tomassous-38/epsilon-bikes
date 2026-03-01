import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { MobileMenuToggle } from "@/sections/Header/components/MobileMenuToggle";
import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";

interface NavbarProps {
  scrolled?: boolean;
}

export const Navbar = ({ scrolled }: NavbarProps) => {
  return (
    <nav className="items-center box-border caret-transparent flex flex-wrap justify-between w-full">
      <NavbarLogo scrolled={scrolled} />
      <MobileMenuToggle />
      <DesktopMenu />
    </nav>
  );
};
