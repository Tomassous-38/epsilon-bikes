export type ProductTypeCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
};

export const ProductTypeCard = (props: ProductTypeCardProps) => {
  return (
    <div className="gap-x-6 flex flex-col gap-y-6 md:gap-x-8 md:gap-y-8">
      <div className="gap-x-8 flex flex-col justify-between gap-y-8 md:gap-x-10 md:gap-y-10">
        <div className="h-28 w-28 border-stone-300 rounded-full border-2 border-solid overflow-hidden hover:scale-110 hover:shadow-lg hover:border-red-500 transition-all duration-500 md:h-36 md:w-36">
          <img
            sizes="80px"
            src={props.imageUrl}
            alt=""
            className="h-full max-w-full object-cover w-full rounded-full"
          />
        </div>
        <h3 className="text-zinc-700 text-3xl font-bold leading-9 md:text-4xl md:leading-10">
          {props.title}
        </h3>
      </div>
      <div className="gap-x-8 flex flex-col gap-y-8">
        <div className="bg-red-500 h-1 w-[275px] transition-all duration-500 hover:w-full"></div>
        <p className="text-zinc-700 text-xl leading-7">
          {props.description}
        </p>
      </div>
      <a
        href={props.linkUrl}
        className="relative text-zinc-700 text-xl font-medium items-center bg-zinc-100 gap-x-2 flex leading-7 gap-y-2 w-fit mt-2 px-6 py-2 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 shadow-sm hover:shadow-md md:hidden md:px-9 md:py-3"
      >
        <span className="block">
          {props.linkText}
        </span>
      </a>
    </div>
  );
};
