import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickyScrollSectionProps {
  children: ReactNode;
  className?: string;
  height?: string; // How much scroll distance before unpinning (e.g., "200vh")
}

export function StickyScrollSection({
  children,
  className = "",
  height = "200vh",
}: StickyScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ height }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {children}
      </div>
    </div>
  );
}

interface StickyScrollContentProps {
  children: ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
  /** Array of 4 values: [startOpacity, peakOpacity1, peakOpacity2, endOpacity] */
  opacityRange?: [number, number, number, number];
  /** Array of 3 values: [startY, middleY, endY] in pixels */
  yRange?: [number, number, number];
  /** Array of 3 values: [startScale, middleScale, endScale] */
  scaleRange?: [number, number, number];
  className?: string;
}

export function StickyScrollContent({
  children,
  containerRef,
  opacityRange = [0, 1, 1, 0],
  yRange = [100, 0, -100],
  scaleRange = [0.8, 1, 0.8],
  className = "",
}: StickyScrollContentProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], opacityRange);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], yRange);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], scaleRange);

  return (
    <motion.div style={{ opacity, y, scale }} className={className}>
      {children}
    </motion.div>
  );
}

interface StickyRevealItemProps {
  children: ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
  /** When this item should start appearing (0-1) */
  revealStart?: number;
  /** When this item should be fully visible (0-1) */
  revealEnd?: number;
  /** Direction to reveal from */
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export function StickyRevealItem({
  children,
  containerRef,
  revealStart = 0,
  revealEnd = 0.5,
  direction = "up",
  className = "",
}: StickyRevealItemProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const getInitialTransform = () => {
    switch (direction) {
      case "up": return { x: 0, y: 60 };
      case "down": return { x: 0, y: -60 };
      case "left": return { x: 60, y: 0 };
      case "right": return { x: -60, y: 0 };
    }
  };

  const initial = getInitialTransform();
  
  const opacity = useTransform(
    scrollYProgress,
    [revealStart, revealEnd, 0.8, 1],
    [0, 1, 1, 0]
  );
  const x = useTransform(
    scrollYProgress,
    [revealStart, revealEnd],
    [initial.x, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [revealStart, revealEnd],
    [initial.y, 0]
  );

  return (
    <motion.div style={{ opacity, x, y }} className={className}>
      {children}
    </motion.div>
  );
}
