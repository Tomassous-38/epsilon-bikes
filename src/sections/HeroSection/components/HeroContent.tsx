export const HeroContent = () => {
  return (
    <div className="absolute box-border caret-transparent flex flex-col w-fit z-[3]">
      <img
        src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/logo.svg"
        alt=""
        className="self-center aspect-square box-border caret-transparent max-w-full translate-y-[-150px] w-32 mb-24"
      />
      <div className="box-border caret-transparent translate-y-[-150px]">
        <h1 className="text-red-500 text-[72.25px] font-bold self-center box-border caret-transparent flex justify-center tracking-[3.6125px] leading-[57.8px] text-center uppercase md:text-[208px] md:tracking-[10.4px] md:leading-[166.4px]">
          EPSILON
        </h1>
        <div className="box-border caret-transparent flex justify-between pl-[9px] pr-[11.625px] md:pl-[16.24px] md:pr-[25.2px]">
          <p className="text-base box-border caret-transparent leading-6 uppercase overflow-clip md:text-2xl md:leading-8">
            <span className="text-base box-border caret-transparent inline-block leading-6 md:text-2xl md:leading-8">
              Unique
            </span>
          </p>
          <p className="text-base box-border caret-transparent leading-6 uppercase overflow-clip md:text-2xl md:leading-8">
            <span className="text-base box-border caret-transparent inline-block leading-6 md:text-2xl md:leading-8">
              Artisanal
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
