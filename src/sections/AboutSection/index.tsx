import { ScrollReveal } from "@/components/ScrollReveal";

export const AboutSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img
        src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/workshop-section-scaled-e1712020672939.jpg"
        alt="Atelier Epsilon Bikes"
        className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#464748]/95 via-[#464748]/80 to-transparent" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-16 py-24 md:py-36 w-full">
        <div className="max-w-xl">
          <ScrollReveal direction="up">
            <span className="text-[#ea4b33] text-xs uppercase tracking-[0.25em] font-body font-semibold mb-6 block">
              L'atelier
            </span>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-white mb-12 leading-tight">
              Entrez dans<br />l'Atelier
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-[45ch]">
              Epsilon Bikes est un atelier de fabrication de cadres de cycles en
              acier. Nos vélos sont conçus, soudés, peints puis assemblés dans
              nos locaux basés à Lyon.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-[45ch]">
              Passionnés, nous avons à coeur de perpétuer un savoir-faire
              traditionnel, associé à des techniques et des matériaux modernes
              pour vous proposer des vélos élégants et performants.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <a
              href="https://www.epsilon-bikes.com/a-propos/"
              className="group/btn inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white text-sm uppercase tracking-[0.12em] font-body font-medium hover:bg-white hover:text-[#464748] hover:border-white active:scale-[0.98] transition-all duration-300"
            >
              En savoir plus
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
