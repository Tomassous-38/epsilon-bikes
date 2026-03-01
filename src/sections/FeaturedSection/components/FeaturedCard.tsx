export type FeaturedCardProps = {
  variant: string;
  mobileImageUrl: string;
  desktopImageUrl: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  linkUrl: string;
  linkTextColor?: string;
};

export const FeaturedCard = (props: FeaturedCardProps) => {
  return (
    <article
      className={`group flex flex-col h-auto w-full overflow-hidden hover:shadow-2xl transition-shadow duration-300 md:flex-row md:h-[520px] ${props.variant}`}
    >
      <div className="block grow min-h-[auto] min-w-[auto] overflow-hidden md:hidden md:min-h-0 md:min-w-0">
        <img
          sizes="100vw"
          src={props.mobileImageUrl}
          alt={props.imageAlt}
          className="h-80 max-w-full object-cover w-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="hidden grow min-h-0 min-w-0 overflow-hidden md:block md:min-h-[auto] md:min-w-[auto]">
        <img
          sizes="(max-width: 1734px) calc(100vw - 520px), 70vw"
          src={props.desktopImageUrl}
          alt={props.imageAlt}
          className="h-full max-w-full object-cover w-full transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="text-stone-100 gap-x-12 flex flex-col h-fit gap-y-12 w-full px-6 py-16 md:h-full md:w-2/5 md:pl-12 md:pr-16">
        <div className="gap-x-3 flex flex-col h-auto gap-y-3 overflow-clip md:gap-x-4 md:h-32 md:gap-y-4">
          <h2 className="text-4xl font-bold leading-10 overflow-clip md:text-6xl md:leading-[60px]">
            <span className="text-4xl inline-block leading-10 md:text-6xl md:leading-[60px]">
              {props.title}
              {props.subtitle && (
                <>
                  <br />
                  <span className="text-3xl font-medium leading-9">
                    {props.subtitle}
                  </span>
                </>
              )}
            </span>
          </h2>
        </div>
        <p className="text-xl flow-root leading-7 overflow-hidden">
          {props.description}
        </p>
        <a
          href={props.linkUrl}
          className={`relative ${props.linkTextColor || "text-zinc-700"} text-xl font-medium items-center bg-zinc-100 gap-x-2 flex leading-7 gap-y-2 w-fit px-6 py-2 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md md:px-9 md:py-3`}
        >
          <span className="block">Découvrir</span>
        </a>
      </div>
    </article>
  );
};
