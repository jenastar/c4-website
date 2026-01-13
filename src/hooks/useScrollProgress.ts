import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

interface ScrollProgressOptions {
  target?: RefObject<HTMLElement>;
  offset?: string[];
}

interface ScrollProgressReturn {
  scrollYProgress: MotionValue<number>;
  scrollY: MotionValue<number>;
}

export function useScrollProgress(options?: ScrollProgressOptions): ScrollProgressReturn {
  const { scrollYProgress, scrollY } = useScroll({
    target: options?.target,
    // @ts-expect-error - framer-motion types are overly strict for offset
    offset: options?.offset || ["start end", "end start"],
  });

  return { scrollYProgress, scrollY };
}

interface ParallaxOptions {
  scrollProgress: MotionValue<number>;
  inputRange?: [number, number];
  outputRange: [number, number];
}

export function useParallax({ 
  scrollProgress, 
  inputRange = [0, 1], 
  outputRange 
}: ParallaxOptions): MotionValue<number> {
  return useTransform(scrollProgress, inputRange, outputRange);
}

interface FadeOnScrollOptions {
  scrollProgress: MotionValue<number>;
  fadeIn?: [number, number];
  fadeOut?: [number, number];
}

export function useFadeOnScroll({
  scrollProgress,
  fadeIn = [0, 0.2],
  fadeOut = [0.8, 1],
}: FadeOnScrollOptions): MotionValue<number> {
  return useTransform(
    scrollProgress,
    [fadeIn[0], fadeIn[1], fadeOut[0], fadeOut[1]],
    [0, 1, 1, 0]
  );
}

interface ScaleOnScrollOptions {
  scrollProgress: MotionValue<number>;
  scaleRange?: [number, number];
  progressRange?: [number, number];
}

export function useScaleOnScroll({
  scrollProgress,
  scaleRange = [0.8, 1],
  progressRange = [0, 0.3],
}: ScaleOnScrollOptions): MotionValue<number> {
  return useTransform(scrollProgress, progressRange, scaleRange);
}
