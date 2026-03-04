import {
  useScroll,
  useTransform,
  useSpring,
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

  const raw = useTransform(
    scrollY,
    [0, 3000],
    prefersReducedMotion ? [0, 0] : [0, speed * 600],
    { clamp }
  );

  const y = useSpring(raw, { stiffness: 80, damping: 30 });

  return y;
}
