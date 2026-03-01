import { motion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

export const StaggerItem = ({ children, className = "" }: StaggerItemProps) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 30, scale: 0.97 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      },
    }}
  >
    {children}
  </motion.div>
);
