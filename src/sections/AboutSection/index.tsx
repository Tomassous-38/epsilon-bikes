import { ScrollReveal } from "@/components/ScrollReveal";

export const AboutSection = () => {
  return (
    <section className="bg-zinc-700 min-h-[1000px] border-red-500 border-t-2 border-solid">
      <ScrollReveal direction="up" scale={0.98}>
        <div className="overflow-hidden">
          <img
            sizes="(max-width: 1280px) 1280px, 100vw"
            src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/workshop-section-scaled-e1712020672939.jpg"
            alt=""
            className="h-[500px] max-w-full object-cover object-[50%_0%] w-full"
          />
        </div>
      </ScrollReveal>
      <div className="relative overflow-clip">
        <div className="[mask-image:url('https://www.epsilon-bikes.com/wp-content/themes/2025_04_25_V0.1/static/images/workshop-pattern.svg')] absolute h-[540px] [mask-repeat:no-repeat] w-full">
          <div className="bg-[linear-gradient(-45deg,rgb(204,204,204),rgb(255,195,186),rgb(204,204,204),rgb(204,204,204))] bg-size-[600%] h-full opacity-20 w-full bg-[position:48.939%_50%] md:bg-[position:0px_top]"></div>
        </div>
        <div className="relative text-white gap-x-16 flex flex-col gap-y-16 px-6 py-12 md:gap-x-24 md:gap-y-20 md:p-16">
          <ScrollReveal direction="up">
            <h2 className="text-[32px] font-bold leading-10 overflow-clip md:text-5xl md:leading-[48px]">
              <span className="text-[32px] inline-block leading-10 md:text-5xl md:leading-[48px]">
                Entrez dans l&#39;Atelier
              </span>
            </h2>
          </ScrollReveal>
          <div className="text-xl gap-x-24 grid grid-cols-none leading-7 gap-y-16 w-fit md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-24">
            <ScrollReveal direction="left" delay={0}>
              <p className="max-w-[440px] border-red-500 pt-10 border-t-4 border-solid">
                Epsilon Bikes est un atelier de fabrication de cadres de cycles en
                acier. Nos vélos sont conçus, soudés, peints puis assemblés dans
                nos locaux basés à Lyon.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <p className="max-w-[440px] border-red-500 pt-10 border-t-4 border-solid">
                Passionnés, nous avons à coeur de perpétuer un savoir-faire
                traditionnel, associé à des techniques et des matériaux modernes
                pour vous proposer des vélos élégants et performants.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal direction="up" delay={0.3}>
            <a
              href="https://www.epsilon-bikes.com/a-propos/"
              className="relative text-zinc-700 text-xl font-medium items-center bg-zinc-100 gap-x-2 flex leading-7 gap-y-2 w-fit px-6 py-2 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md md:px-9 md:py-3"
            >
              <span className="block">
                En savoir plus
              </span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
