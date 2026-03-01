import { motion, type Variants } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type ScrollRevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: number;
  className?: string;
  threshold?: number;
};

const getOffset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    case "none":
      return { x: 0, y: 0 };
  }
};

export const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 40,
  scale = 1,
  className = "",
  threshold = 0.2,
}: ScrollRevealProps) => {
  const { ref, isInView, prefersReducedMotion } = useScrollReveal({
    threshold,
  });
  const offset = getOffset(direction, distance);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y, scale },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
};
