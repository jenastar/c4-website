import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalScrollSectionProps {
  children: ReactNode;
  className?: string;
  itemCount: number;
  itemWidth?: number;
}

export function HorizontalScrollSection({
  children,
  className = "",
  itemCount,
  itemWidth = 400,
}: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate total scroll distance (items - visible on screen)
  const totalWidth = itemCount * itemWidth;
  const xRange = useTransform(scrollYProgress, [0, 1], ["0%", `-${(itemCount - 1) * 100 / itemCount}%`]);
  
  // Progress bar
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className}`}
      style={{ height: `${itemCount * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Progress indicator */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-border/30 z-20">
          <motion.div 
            className="h-full bg-gradient-to-r from-google-blue via-google-green to-google-yellow"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Horizontal scrolling content */}
        <div className="flex-1 flex items-center">
          <motion.div
            className="flex gap-8 px-8 md:px-16"
            style={{ x: xRange }}
          >
            {children}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-foreground text-sm"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0.5, 0.5, 0]) }}
        >
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </div>
  );
}

interface HorizontalScrollItemProps {
  children: ReactNode;
  index: number;
  className?: string;
}

export function HorizontalScrollItem({
  children,
  index,
  className = "",
}: HorizontalScrollItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex-shrink-0 ${className}`}
    >
      {children}
    </motion.div>
  );
}
