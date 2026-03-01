export type ProductTypeCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
};

export const ProductTypeCard = (props: ProductTypeCardProps) => {
  return (
    <div className="box-border caret-transparent gap-x-6 flex flex-col gap-y-6 md:gap-x-8 md:gap-y-8">
      <div className="box-border caret-transparent gap-x-8 flex flex-col justify-between gap-y-8 md:gap-x-10 md:gap-y-10">
        <div className="box-border caret-transparent h-28 w-28 border-stone-300 rounded-full border-2 border-solid overflow-hidden hover:scale-105 transition-transform duration-300 md:h-36 md:w-36">
          <img
            sizes="80px"
            src={props.imageUrl}
            alt=""
            className="box-border caret-transparent h-full max-w-full object-cover w-full rounded-full"
          />
        </div>
        <h3 className="text-zinc-700 text-3xl font-bold box-border caret-transparent leading-9 md:text-4xl md:leading-10">
          {props.title}
        </h3>
      </div>
      <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8">
        <div className="bg-red-500 box-border caret-transparent h-1 w-[275px]"></div>
        <p className="text-zinc-700 text-xl box-border caret-transparent leading-7">
          {props.description}
        </p>
      </div>
      <a
        href={props.linkUrl}
        className="relative text-zinc-700 text-xl font-medium items-center bg-zinc-100 box-border caret-transparent gap-x-2 flex leading-7 min-h-[auto] min-w-[auto] gap-y-2 w-fit overflow-clip mt-2 px-6 py-2 hover:bg-zinc-200 transition-colors duration-200 md:hidden md:min-h-0 md:min-w-0 md:px-9 md:py-3"
      >
        <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:inline-block md:min-h-0 md:min-w-0">
          {props.linkText}
        </span>
      </a>
    </div>
  );
};
