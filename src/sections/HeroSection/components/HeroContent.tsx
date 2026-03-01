import { motion, type MotionValue } from "framer-motion";

type HeroContentProps = {
  textY: MotionValue<number>;
};

export const HeroContent = ({ textY }: HeroContentProps) => {
  return (
    <motion.div
      style={{ y: textY }}
      className="absolute flex flex-col w-fit z-[3]"
    >
      <motion.img
        src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/logo.svg"
        alt=""
        className="self-center aspect-square max-w-full w-32 mb-24"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      />
      <div>
        <motion.h1
          className="text-red-500 text-[72.25px] font-bold self-center flex justify-center tracking-[3.6px] leading-[57.8px] text-center uppercase md:text-[208px] md:tracking-[10.4px] md:leading-[166.4px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          EPSILON
        </motion.h1>
        <div className="flex justify-between pl-[9px] pr-[11.625px] md:pl-[16.24px] md:pr-[25.2px]">
          <motion.p
            className="text-base leading-6 uppercase md:text-2xl md:leading-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
          >
            <span className="inline-block">Unique</span>
          </motion.p>
          <motion.p
            className="text-base leading-6 uppercase md:text-2xl md:leading-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
          >
            <span className="inline-block">Artisanal</span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
