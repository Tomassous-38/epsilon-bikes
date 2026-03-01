import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/HeroSection";
import { Main } from "@/components/Main";
import { Footer } from "@/sections/Footer";
import { FloatingButton } from "@/components/FloatingButton";

export const App = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto bg-stone-300 box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible w-full overflow-auto border-separate font-gotham">
      <div className="box-border caret-transparent">
        <div className="relative box-border caret-transparent">
          <Header />
          <HeroSection />
          <Main />
          <Footer />
          <FloatingButton />
        </div>
      </div>
    </body>
  );
};
