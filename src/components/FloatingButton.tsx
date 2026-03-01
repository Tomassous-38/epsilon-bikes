import { motion } from "framer-motion";

export const FloatingButton = () => {
  return (
    <motion.div
      className="fixed z-40 right-0 bottom-20"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
    >
      <motion.button
        className="items-center aspect-square bg-zinc-700 shadow-[rgba(255,255,255,0.2)_-1px_0px_0px_1px] flex justify-center text-center w-20 rounded-t-full rounded-l-full p-0 cursor-pointer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <img
          src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/icon-4.svg"
          alt="Contact"
          className="w-20 pl-6 pr-5 pt-6 pb-5"
        />
      </motion.button>
    </motion.div>
  );
};
