import { ProductTypeCard } from "@/sections/ProductTypesSection/components/ProductTypeCard";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ProductTypesSection = () => {
  return (
    <section className="bg-[#faf8f7]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-24 md:py-36">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
            <h2 className="font-display font-bold text-3xl md:text-6xl tracking-tight text-[#464748] max-w-xl leading-tight">
              Vélos sur mesure, petite série ou e-bike
            </h2>
            <p className="text-base text-[#464748]/50 leading-relaxed max-w-sm">
              Tous nos cadres sont fabriqués à Lyon dans notre atelier avec la même exigence de qualité.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollReveal direction="up" delay={0} className="md:row-span-2">
            <ProductTypeCard
              imageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/custom-category.jpg"
              title="Vélos sur-mesure"
              description="Nos cadres sur mesure sont uniques car adaptés à vos cotes morphologiques et définis selon votre projet. Il résultent d'un processus d'accompagnement avec le client pour établir ensemble un cahier des charges précis."
              linkUrl="https://www.epsilon-bikes.com/"
              linkText="Découvrir les réalisations"
              large
            />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <ProductTypeCard
              imageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/limited-category-scaled.jpg"
              title="Vélos de petite série"
              description="Notre gamme de vélos de petite série couvre différentes pratiques : gravel, bike-packing, tout-terrain."
              linkUrl="https://www.epsilon-bikes.com/"
              linkText="Découvrir la gamme"
            />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3}>
            <ProductTypeCard
              imageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/ebike-category-scaled.jpg"
              title="Vélos électriques"
              description="Des e-bike sans concession motorisés Bosch dont notre modèle Cargo utilitaire à destination des particuliers ou des professionnels."
              linkUrl="https://www.epsilon-bikes.com/"
              linkText="Découvrir la gamme"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
