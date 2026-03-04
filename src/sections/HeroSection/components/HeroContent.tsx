import { motion } from "framer-motion";

export const HeroContent = () => {
  return (
    <>
      <motion.img
        src="https://www.epsilon-bikes.com/wp-content/uploads/2023/12/logo.svg"
        alt="Epsilon Bikes"
        className="self-center w-32 mb-16 aspect-square"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      />
      <div className="cursor-default">
        <motion.h1
          className="flex justify-center self-center uppercase text-[#ea4b33] text-[min(15vw+1rem,16rem)] text-center font-bold tracking-[0.12em] leading-[0.8]"
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
        <div className="flex justify-between pl-[calc(0.8vw+6px)] pr-[calc(1.5vw+6px)]">
          <motion.p
            className="uppercase sm:text-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
          >
            <span className="inline-block">Unique</span>
          </motion.p>
          <motion.p
            className="uppercase sm:text-2xl"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
          >
            <span className="inline-block">Artisanal</span>
          </motion.p>
        </div>
      </div>
    </>
  );
};
