import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ProductTypeCard } from "@/sections/ProductTypesSection/components/ProductTypeCard";

export const ProductTypesSection = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-stone-100 box-border caret-transparent min-h-[1000px] border-red-500 border-t-2 border-solid">
      <div className="bg-[url('https://www.epsilon-bikes.com/wp-content/themes/epsilon-bikes/static/images/categories-pattern.svg')] bg-no-repeat bg-size-[50%] box-border caret-transparent bg-right px-6 py-12 md:p-16">
        <div ref={headingRef} className="box-border caret-transparent gap-x-12 flex flex-col gap-y-12 w-auto md:w-9/12">
          <h2
            className={`text-[32px] font-bold box-border caret-transparent leading-10 overflow-clip md:text-5xl md:leading-[48px] reveal-base reveal-left ${
              headingVisible ? "revealed" : ""
            }`}
          >
            <span className="text-zinc-700 text-[32px] box-border caret-transparent inline-block leading-10 md:text-5xl md:leading-[48px]">
              Vélos sur mesure, petite série ou e-bike
            </span>
          </h2>
          <p
            className={`text-zinc-500 text-xl box-border caret-transparent leading-7 md:text-2xl md:leading-8 reveal-base reveal-up stagger-2 ${
              headingVisible ? "revealed" : ""
            }`}
          >
            Tous nos cadres sur mesure, petite-série ou e-bike sont fabriqués à
            Lyon dans notre atelier avec la même exigence de qualité.{" "}
          </p>
        </div>
      </div>
      <div
        ref={cardsRef}
        className="bg-stone-300 box-border caret-transparent gap-x-12 grid grid-cols-none grid-rows-none gap-y-20 px-6 py-12 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:grid-rows-[auto_auto] md:p-16"
      >
        <ProductTypeCard
          imageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/custom-category.jpg"
          title="Vélos sur-mesure"
          description="Nos cadres sur mesure sont uniques car adaptés à vos cotes morphologiques et définis selon votre projet. Il résultent d'un processus d'accompagnement avec le client pour établir ensemble un cahier des charges précis."
          linkUrl="https://www.epsilon-bikes.com//"
          linkText="Découvrir les réalisations"
          isVisible={cardsVisible}
          index={0}
        />
        <ProductTypeCard
          imageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/limited-category-scaled.jpg"
          title="Vélos de petite série"
          description="Notre gamme de vélos de petite série couvre différentes pratiques : gravel, bike-packing, tout-terrain. Ces vélos sont personnalisables avec un choix de tailles, de couleurs et de configurations d'équipements variées. "
          linkUrl="https://www.epsilon-bikes.com//"
          linkText="Découvrir la gamme"
          isVisible={cardsVisible}
          index={1}
        />
        <ProductTypeCard
          imageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/ebike-category-scaled.jpg"
          title="Vélos électriques"
          description="Basé à Lyon, notre atelier est aussi bien placé pour fabriquer des vélos du quotidien. Des e-bike sans concession motorisés Bosch dont notre modèle Cargo utilitaire à destination des particuliers ou des professionnels. "
          linkUrl="https://www.epsilon-bikes.com//"
          linkText="Découvrir la gamme"
          isVisible={cardsVisible}
          index={2}
        />
        <a
          href="https://www.epsilon-bikes.com/sur-mesure/"
          className={`relative text-zinc-700 text-xl font-medium items-center bg-zinc-100 box-border caret-transparent gap-x-2 hidden leading-7 min-h-0 min-w-0 gap-y-2 w-fit overflow-clip px-6 py-2 md:flex md:min-h-[auto] md:min-w-[auto] md:px-9 md:py-3 btn-shine group reveal-base reveal-up stagger-4 ${
            cardsVisible ? "revealed" : ""
          }`}
        >
          <span className="box-border caret-transparent inline-block min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto] transition-transform duration-300 group-hover:translate-x-1">
            Découvrir les réalisations
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
        <a
          href="https://www.epsilon-bikes.com/les-velos-de-serie/"
          className={`relative text-zinc-700 text-xl font-medium items-center bg-zinc-100 box-border caret-transparent gap-x-2 hidden leading-7 min-h-0 min-w-0 gap-y-2 w-fit overflow-clip px-6 py-2 md:flex md:min-h-[auto] md:min-w-[auto] md:px-9 md:py-3 btn-shine group reveal-base reveal-up stagger-5 ${
            cardsVisible ? "revealed" : ""
          }`}
        >
          <span className="box-border caret-transparent inline-block min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto] transition-transform duration-300 group-hover:translate-x-1">
            Découvrir la gamme
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
        <a
          href="https://www.epsilon-bikes.com/les-velos-de-serie/"
          className={`relative text-zinc-700 text-xl font-medium items-center bg-zinc-100 box-border caret-transparent gap-x-2 hidden leading-7 min-h-0 min-w-0 gap-y-2 w-fit overflow-clip px-6 py-2 md:flex md:min-h-[auto] md:min-w-[auto] md:px-9 md:py-3 btn-shine group reveal-base reveal-up stagger-6 ${
            cardsVisible ? "revealed" : ""
          }`}
        >
          <span className="box-border caret-transparent inline-block min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto] transition-transform duration-300 group-hover:translate-x-1">
            Découvrir la gamme
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
    </section>
  );
};
