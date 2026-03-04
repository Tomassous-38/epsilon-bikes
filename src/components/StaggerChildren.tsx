import { motion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerChildrenProps = {
  children: ReactNode;
  stagger?: number;
  className?: string;
  threshold?: number;
};

export const StaggerChildren = ({
  children,
  stagger = 0.15,
  className = "",
  threshold = 0.15,
}: StaggerChildrenProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: threshold }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
};
