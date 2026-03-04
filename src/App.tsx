import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { Main } from "@/components/Main";
import { Footer } from "@/sections/Footer";
import { FloatingButton } from "@/components/FloatingButton";

export const App = () => {
  return (
    <div className="text-[#464748] text-base leading-relaxed bg-[#f6eeec] font-body antialiased">
      <div>
        <div className="relative">
          <Header />
          <HeroSection />
          <Main />
          <Footer />
          <FloatingButton />
        </div>
      </div>
    </div>
  );
};
