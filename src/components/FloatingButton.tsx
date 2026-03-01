export const FloatingButton = () => {
  return (
    <div className="relative box-border caret-transparent z-40">
      <div className="fixed aspect-square bg-zinc-700 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(255,255,255,0.2)_-1px_0px_0px_1px] box-border caret-transparent w-20 rounded-t-full rounded-l-full right-0 bottom-20"></div>
      <button className="fixed items-center aspect-square bg-transparent caret-transparent flex justify-center text-center w-20 z-[3] p-0 right-0 bottom-20">
        <div className="relative box-border caret-transparent h-full">
          <div className="absolute box-border caret-transparent origin-[50%_0%]">
            <img
              src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/icon-4.svg"
              alt="Icon"
              className="box-border caret-transparent w-20 pl-6 pr-5 pt-6 pb-5"
            />
          </div>
          <div className="relative box-border caret-transparent origin-[50%_0%] overflow-hidden">
            <img
              src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/icon-4.svg"
              alt="Icon"
              className="box-border caret-transparent w-20 pl-6 pr-5 pt-6 pb-5"
            />
          </div>
        </div>
      </button>
    </div>
  );
};
