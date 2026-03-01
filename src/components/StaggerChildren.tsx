import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
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
  const { ref, isInView, prefersReducedMotion } = useScrollReveal({
    threshold,
  });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
};
