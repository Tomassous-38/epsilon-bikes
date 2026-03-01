import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type ScrollRevealOptions = {
  threshold?: number;
  once?: boolean;
};

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { threshold = 0.2, once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: threshold, once });
  const prefersReducedMotion = useReducedMotion();

  return { ref, isInView, prefersReducedMotion };
}
