import { IntroSection } from "@/sections/IntroSection";
import { FeaturedSection } from "@/sections/FeaturedSection";
import { ProductTypesSection } from "@/sections/ProductTypesSection";
import { AboutSection } from "@/sections/AboutSection";

export const Main = () => {
  return (
    <main className="border-b-2 border-[#ea4b33]">
      <IntroSection />
      <FeaturedSection />
      <ProductTypesSection />
      <AboutSection />
    </main>
  );
};
