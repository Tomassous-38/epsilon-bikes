import { FeaturedCard } from "@/sections/FeaturedSection/components/FeaturedCard";

export const FeaturedSection = () => {
  return (
    <section className="relative box-border caret-transparent grid min-h-[1000px] border-red-500 overflow-hidden border-t-2 border-solid">
      <div className="bg-zinc-700 bg-[url('https://www.epsilon-bikes.com/wp-content/themes/epsilon-bikes/static/images/featured-heading-pattern.svg')] bg-no-repeat bg-size-[50%] box-border caret-transparent bg-right px-6 md:px-16">
        <div className="box-border caret-transparent max-w-screen-xl mx-auto py-12 md:py-16">
          <div className="box-border caret-transparent gap-x-12 flex flex-col gap-y-12 w-full">
            <h2 className="text-[32px] font-bold box-border caret-transparent leading-10 overflow-clip md:text-5xl md:leading-[48px]">
              <span className="text-stone-100 text-[32px] box-border caret-transparent inline-block leading-10 md:text-5xl md:leading-[48px]">
                Réalisations à la une
              </span>
            </h2>
          </div>
        </div>
      </div>
      <FeaturedCard
        variant="bg-red-500"
        mobileImageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/IMG_8979-scaled.jpg"
        desktopImageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/IMG_8979-scaled.jpg"
        imageAlt="CrossFader"
        title="CrossFader"
        description={
          <>
            <span>
              À l'image du crossfader d'une table de mixage, qui permet de
              passer d’une piste audio à une autre, notre gravel CrossFader vous
              permet de passer de la route au chemin au gré de vos envies.
              Polyvalent, dynamique et confortable, ce vélo s’adapte à votre
              pratique sportive ou plutôt aventurière en bike packing. 
            </span>
            <br />
            Si nous devions choisir qu’un seul vélo, ce serait celui-ci !
          </>
        }
        linkUrl="https://www.epsilon-bikes.com/velos/gravel-personnalisable-fabrique-en-france/"
        linkTextColor="text-zinc-700"
      />
      <FeaturedCard
        variant="bg-stone-300"
        mobileImageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/gravel-1.jpeg"
        desktopImageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/gravel-1.jpeg"
        imageAlt="La Licorne"
        title="La Licorne"
        subtitle="de William"
        description="Baroudeur par excellence, ce vélo sur-mesure typé gravel est prêt à affronter toutes les routes et les sentiers. Il ravira aussi William pour des excursions de quelques jours en bike packing."
        linkUrl="https://www.epsilon-bikes.com/velos/la-licorne/"
        linkTextColor="text-zinc-700"
      />
      <FeaturedCard
        variant="bg-zinc-700"
        mobileImageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/voyageur-1.jpeg"
        desktopImageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/voyageur-1.jpeg"
        imageAlt="Le Grand Voyageur"
        title="Le Grand Voyageur"
        subtitle="de Camille"
        description="Camille voulait un vélo robuste et fiable, équipé du célèbre moyeu Rohloff à 14 vitesses intégrées, qui puisse l’accompagner dans ses déplacements quotidiens comme ses périples et ses itinérances à vélo."
        linkUrl="https://www.epsilon-bikes.com/velos/le-grand-voyageur/"
        linkTextColor="text-zinc-700"
      />
    </section>
  );
};
