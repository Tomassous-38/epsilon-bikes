import {
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

type UseParallaxOptions = {
  speed: number;
  clamp?: boolean;
};

export function useParallax({
  speed,
  clamp = false,
}: UseParallaxOptions): MotionValue<number> {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 1000],
    prefersReducedMotion ? [0, 0] : [0, speed * 300],
    { clamp }
  );

  return y;
}
