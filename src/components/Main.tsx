import { IntroSection } from "@/sections/IntroSection";
import { FeaturedSection } from "@/sections/FeaturedSection";
import { ProductTypesSection } from "@/sections/ProductTypesSection";
import { AboutSection } from "@/sections/AboutSection";

export const Main = () => {
  return (
    <main className="box-border caret-transparent border-red-500 border-b-2 border-solid">
      <IntroSection />
      <FeaturedSection />
      <ProductTypesSection />
      <AboutSection />
    </main>
  );
};
