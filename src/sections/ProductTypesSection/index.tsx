import { ProductTypeCard } from "@/sections/ProductTypesSection/components/ProductTypeCard";

export const ProductTypesSection = () => {
  return (
    <section className="bg-stone-100 box-border caret-transparent min-h-[1000px] border-red-500 border-t-2 border-solid">
      <div className="bg-[url('https://www.epsilon-bikes.com/wp-content/themes/epsilon-bikes/static/images/categories-pattern.svg')] bg-no-repeat bg-size-[50%] box-border caret-transparent bg-right px-6 py-12 md:p-16">
        <div className="box-border caret-transparent gap-x-12 flex flex-col gap-y-12 w-auto md:w-9/12">
          <h2 className="text-[32px] font-bold box-border caret-transparent leading-10 overflow-clip md:text-5xl md:leading-[48px]">
            <span className="text-zinc-700 text-[32px] box-border caret-transparent inline-block leading-10 md:text-5xl md:leading-[48px]">
              Vélos sur mesure, petite série ou e-bike
            </span>
          </h2>
          <p className="text-zinc-500 text-xl box-border caret-transparent leading-7 md:text-2xl md:leading-8">
            Tous nos cadres sur mesure, petite-série ou e-bike sont fabriqués à
            Lyon dans notre atelier avec la même exigence de qualité.{" "}
          </p>
        </div>
      </div>
      <div className="bg-stone-300 box-border caret-transparent gap-x-12 grid grid-cols-none grid-rows-none gap-y-20 px-6 py-12 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:grid-rows-[auto_auto] md:p-16">
        <ProductTypeCard
          imageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/custom-category.jpg"
          title="Vélos sur-mesure"
          description="Nos cadres sur mesure sont uniques car adaptés à vos cotes morphologiques et définis selon votre projet. Il résultent d’un processus d’accompagnement avec le client pour établir ensemble un cahier des charges précis."
          linkUrl="https://www.epsilon-bikes.com//"
          linkText="Découvrir les réalisations"
        />
        <ProductTypeCard
          imageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/limited-category-scaled.jpg"
          title="Vélos de petite série"
          description="Notre gamme de vélos de petite série couvre différentes pratiques : gravel, bike-packing, tout-terrain. Ces vélos sont personnalisables avec un choix de tailles, de couleurs et de configurations d’équipements variées. "
          linkUrl="https://www.epsilon-bikes.com//"
          linkText="Découvrir la gamme"
        />
        <ProductTypeCard
          imageUrl="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/ebike-category-scaled.jpg"
          title="Vélos électriques"
          description="Basé à Lyon, notre atelier est aussi bien placé pour fabriquer des vélos du quotidien. Des e-bike sans concession motorisés Bosch dont notre modèle Cargo utilitaire à destination des particuliers ou des professionnels. "
          linkUrl="https://www.epsilon-bikes.com//"
          linkText="Découvrir la gamme"
        />
        <a
          href="https://www.epsilon-bikes.com/sur-mesure/"
          className="relative text-zinc-700 text-xl font-medium items-center bg-zinc-100 box-border caret-transparent gap-x-2 hidden leading-7 min-h-0 min-w-0 gap-y-2 w-fit overflow-clip px-6 py-2 md:flex md:min-h-[auto] md:min-w-[auto] md:px-9 md:py-3"
        >
          <span className="box-border caret-transparent inline-block min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            Découvrir les réalisations
          </span>
        </a>
        <a
          href="https://www.epsilon-bikes.com/les-velos-de-serie/"
          className="relative text-zinc-700 text-xl font-medium items-center bg-zinc-100 box-border caret-transparent gap-x-2 hidden leading-7 min-h-0 min-w-0 gap-y-2 w-fit overflow-clip px-6 py-2 md:flex md:min-h-[auto] md:min-w-[auto] md:px-9 md:py-3"
        >
          <span className="box-border caret-transparent inline-block min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            Découvrir la gamme
          </span>
        </a>
        <a
          href="https://www.epsilon-bikes.com/les-velos-de-serie/"
          className="relative text-zinc-700 text-xl font-medium items-center bg-zinc-100 box-border caret-transparent gap-x-2 hidden leading-7 min-h-0 min-w-0 gap-y-2 w-fit overflow-clip px-6 py-2 md:flex md:min-h-[auto] md:min-w-[auto] md:px-9 md:py-3"
        >
          <span className="box-border caret-transparent inline-block min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            Découvrir la gamme
          </span>
        </a>
      </div>
    </section>
  );
};
