import { motion, type Variants } from "framer-motion";
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
  distance = 40,
  scale = 1,
  className = "",
  threshold = 0.2,
}: ScrollRevealProps) => {
  const offset = getOffset(direction, distance);

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y, scale },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: threshold }}
      variants={variants}
      transition={{
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};
