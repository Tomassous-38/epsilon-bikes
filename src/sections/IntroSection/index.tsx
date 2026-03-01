import { ScrollReveal } from "@/components/ScrollReveal";

export const IntroSection = () => {
  return (
    <section className="relative bg-stone-100 bg-[url('https://c.animaapp.com/mm7jgoq6KT5fKc/assets/hero-background.jpg')] bg-no-repeat bg-cover overflow-hidden bg-bottom">
      <div className="px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto py-20 md:py-36">
          <ScrollReveal direction="up">
            <p className="text-xl font-medium text-zinc-700 leading-8 text-center max-w-3xl mx-auto tracking-wide md:text-2xl md:leading-10">
              L'atelier Epsilon conçoit et fabrique en France et à la main
              des vélos uniques en acier. Des vélos conçus sur-mesure aux
              vélos montés à la carte, nous mettons notre savoir-faire
              artisanal à votre service pour donner vie au vélo qui vous
              ressemble.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
