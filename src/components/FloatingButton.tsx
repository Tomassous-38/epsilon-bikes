import { motion, AnimatePresence } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export const FloatingButton = () => {
  const { pastHero } = useScrollProgress(0.85);

  return (
    <AnimatePresence>
      {pastHero && (
        <motion.div
          className="fixed z-40 right-0 bottom-20"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
        >
          <motion.button
            className="items-center aspect-square bg-[#464748] shadow-[0_8px_30px_rgba(70,71,72,0.2)] flex justify-center text-center w-20 rounded-t-full rounded-l-full p-0 cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img
              src="https://c.animaapp.com/mm7jgoq6KT5fKc/assets/icon-4.svg"
              alt="Contact"
              className="w-20 pl-6 pr-5 pt-6 pb-5"
              loading="lazy"
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
