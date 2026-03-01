import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { MobileMenuToggle } from "@/sections/Header/components/MobileMenuToggle";
import { DesktopMenu } from "@/sections/Header/components/DesktopMenu";

export const Navbar = () => {
  return (
    <nav className="items-center box-border caret-transparent flex flex-wrap justify-between w-full">
      <NavbarLogo />
      <MobileMenuToggle />
      <DesktopMenu />
    </nav>
  );
};
