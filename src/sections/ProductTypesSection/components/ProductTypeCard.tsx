export type ProductTypeCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
  isVisible?: boolean;
  index?: number;
};

export const ProductTypeCard = (props: ProductTypeCardProps) => {
  const staggerClass = `stagger-${(props.index ?? 0) + 1}`;

  return (
    <div
      className={`box-border caret-transparent gap-x-6 flex flex-col gap-y-6 md:gap-x-8 md:gap-y-8 reveal-base reveal-up ${staggerClass} ${
        props.isVisible ? "revealed" : ""
      }`}
    >
      <div className="box-border caret-transparent gap-x-8 flex flex-col justify-between gap-y-8 md:gap-x-10 md:gap-y-10">
        <div className="box-border caret-transparent h-28 w-28 border-stone-300 rounded-full border-2 border-solid overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-lg hover:border-red-400 md:h-36 md:w-36 group">
          <img
            sizes="80px"
            src={props.imageUrl}
            alt=""
            className="box-border caret-transparent h-full max-w-full object-cover w-full rounded-full transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <h3 className="text-zinc-700 text-3xl font-bold box-border caret-transparent leading-9 md:text-4xl md:leading-10">
          {props.title}
        </h3>
      </div>
      <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8">
        <div
          className={`bg-red-500 box-border caret-transparent h-1 w-[275px] line-grow ${
            props.isVisible ? "revealed" : ""
          }`}
        />
        <p className="text-zinc-700 text-xl box-border caret-transparent leading-7">
          {props.description}
        </p>
      </div>
      <a
        href={props.linkUrl}
        className="relative text-zinc-700 text-xl font-medium items-center bg-zinc-100 box-border caret-transparent gap-x-2 flex leading-7 min-h-[auto] min-w-[auto] gap-y-2 w-fit overflow-clip mt-2 px-6 py-2 md:hidden md:min-h-0 md:min-w-0 md:px-9 md:py-3 btn-shine group"
      >
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:inline-block md:min-h-0 md:min-w-0 transition-transform duration-300 group-hover:translate-x-1">
          {props.linkText}
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
  );
};
