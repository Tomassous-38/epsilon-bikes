import { motion } from "framer-motion";
import { FeaturedCard } from "@/sections/FeaturedSection/components/FeaturedCard";

export const FeaturedSection = () => {
  return (
    <section className="bg-[#f1f1f1] overflow-hidden">
      <motion.div
        className="w-full h-[2px] bg-[#ea4b33]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ originX: 0 }}
      />
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-24 md:py-36">
        <motion.div
          className="flex items-end justify-between mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-display font-bold text-3xl md:text-6xl tracking-tight text-[#464748]">
            Réalisations<br />à la une
          </h2>
          <div className="hidden md:block w-32 h-[2px] bg-[#ea4b33] mb-3" />
        </motion.div>
        <div className="flex flex-col gap-10 md:gap-16">
          <FeaturedCard
            imageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/IMG_8979-scaled.jpg"
            imageAlt="CrossFader"
            title="CrossFader"
            description={
              <>
                À l'image du crossfader d'une table de mixage, qui permet de
                passer d'une piste audio à une autre, notre gravel CrossFader vous
                permet de passer de la route au chemin au gré de vos envies.
                Polyvalent, dynamique et confortable.
              </>
            }
            linkUrl="https://www.epsilon-bikes.com/velos/gravel-personnalisable-fabrique-en-france/"
            gradientFrom="#33486c"
            gradientTo="#ccd9e9"
          />
          <FeaturedCard
            imageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/gravel-1.jpeg"
            imageAlt="La Licorne"
            title="La Licorne"
            subtitle="de William"
            description="Baroudeur par excellence, ce vélo sur-mesure typé gravel est prêt à affronter toutes les routes et les sentiers. Il ravira aussi William pour des excursions de quelques jours en bike packing."
            linkUrl="https://www.epsilon-bikes.com/velos/la-licorne/"
            gradientFrom="#7b58bb"
            gradientTo="#f78699"
            reverse
          />
          <FeaturedCard
            imageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/voyageur-1.jpeg"
            imageAlt="Le Grand Voyageur"
            title="Le Grand Voyageur"
            subtitle="de Camille"
            description="Camille voulait un vélo robuste et fiable, équipé du célèbre moyeu Rohloff à 14 vitesses intégrées, pour ses déplacements quotidiens comme ses itinérances à vélo."
            linkUrl="https://www.epsilon-bikes.com/velos/le-grand-voyageur/"
            gradientFrom="#1e2f50"
            gradientTo="#c51856"
          />
        </div>
      </div>
    </section>
  );
};
