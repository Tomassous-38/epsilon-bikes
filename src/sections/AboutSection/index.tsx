import { useScrollReveal } from "@/hooks/useScrollReveal";

export const AboutSection = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="bg-zinc-700 box-border caret-transparent min-h-[1000px] border-red-500 border-t-2 border-solid">
      <div ref={imageRef} className="overflow-hidden">
        <img
          sizes="(max-width: 1280px) 1280px, 100vw"
          src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/workshop-section-scaled-e1712020672939.jpg"
          alt="Atelier Epsilon Bikes"
          className={`box-border caret-transparent h-[500px] max-w-full object-cover object-[50%_0%] w-full transition-all duration-1200 ease-out ${
            imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ transitionDuration: "1.2s" }}
        />
      </div>
      <div className="relative box-border caret-transparent overflow-clip">
        <div className="[mask-image:url('https://www.epsilon-bikes.com/wp-content/themes/2025_04_25_V0.1/static/images/workshop-pattern.svg')] absolute box-border caret-transparent h-[540px] [mask-repeat:no-repeat] w-full">
          <div className="bg-[linear-gradient(-45deg,rgb(204,204,204),rgb(255,195,186),rgb(204,204,204),rgb(204,204,204))] bg-size-[600%] box-border caret-transparent h-full opacity-20 w-full bg-[position:48.939%_50%] md:bg-[position:0px_top]"></div>
        </div>
        <div ref={contentRef} className="relative text-white box-border caret-transparent gap-x-24 flex flex-col gap-y-24 px-6 py-12 md:p-16">
          <h2
            className={`text-[32px] font-bold box-border caret-transparent leading-10 overflow-clip md:text-5xl md:leading-[48px] reveal-base reveal-left ${
              contentVisible ? "revealed" : ""
            }`}
          >
            <span className="text-[32px] box-border caret-transparent inline-block leading-10 md:text-5xl md:leading-[48px]">
              Entrez dans l'Atelier
            </span>
          </h2>
          <div className="text-xl box-border caret-transparent gap-x-24 grid grid-cols-none leading-7 gap-y-24 w-fit md:grid-cols-[repeat(2,minmax(0px,1fr))]">
            <p
              className={`box-border caret-transparent max-w-[440px] border-red-500 pt-10 border-t-4 border-solid reveal-base reveal-up stagger-2 ${
                contentVisible ? "revealed" : ""
              }`}
            >
              Epsilon Bikes est un atelier de fabrication de cadres de cycles en
              acier. Nos vélos sont conçus, soudés, peints puis assemblés dans
              nos locaux basés à Lyon.
            </p>
            <p
              className={`box-border caret-transparent max-w-[440px] border-red-500 pt-10 border-t-4 border-solid reveal-base reveal-up stagger-3 ${
                contentVisible ? "revealed" : ""
              }`}
            >
              Passionnés, nous avons à coeur de perpétuer un savoir-faire
              traditionnel, associé à des techniques et des matériaux modernes
              pour vous proposer des vélos élégants et performants.
            </p>
          </div>
          <a
            href="https://www.epsilon-bikes.com/a-propos/"
            className={`relative text-zinc-700 text-xl font-medium items-center bg-zinc-100 box-border caret-transparent gap-x-2 flex leading-7 gap-y-2 w-fit overflow-clip px-6 py-2 md:px-9 md:py-3 btn-shine group reveal-base reveal-up stagger-4 ${
              contentVisible ? "revealed" : ""
            }`}
          >
            <span className="box-border caret-transparent block transition-transform duration-300 group-hover:translate-x-1">
              En savoir plus
            </span>
            <svg
              className="w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
