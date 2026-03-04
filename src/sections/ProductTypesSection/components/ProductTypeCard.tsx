export type ProductTypeCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
  linkText: string;
  large?: boolean;
};

export const ProductTypeCard = (props: ProductTypeCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-[#464748] h-full">
      <div className="overflow-hidden">
        <img
          src={props.imageUrl}
          alt={props.title}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${props.large ? "aspect-[16/9]" : "aspect-[3/2]"}`}
          loading="lazy"
        />
      </div>
      <div className="p-8 md:p-10 flex flex-col gap-4">
        <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight text-white">
          {props.title}
        </h3>
        <div className="w-8 h-[2px] bg-[#ea4b33]" />
        <p className="text-white/60 text-sm leading-relaxed">
          {props.description}
        </p>
        <a
          href={props.linkUrl}
          className="group/btn inline-flex items-center gap-3 w-fit text-[#ea4b33] text-sm uppercase tracking-[0.12em] font-body font-medium mt-2 transition-all duration-300"
        >
          <span className="border-b border-[#ea4b33]/30 pb-1 group-hover/btn:border-[#ea4b33] transition-colors duration-300">{props.linkText}</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};
