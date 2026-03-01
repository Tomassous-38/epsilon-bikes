import { NavMenu } from "@/sections/Header/components/NavMenu";

export const DesktopMenu = () => {
  return (
    <div className="[align-items:normal] box-border caret-transparent hidden h-[1000px] min-h-0 min-w-0 w-full md:items-center md:flex md:h-full md:min-h-[auto] md:min-w-[auto] md:w-auto">
      <NavMenu />
    </div>
  );
};
