import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface DesktopHorizontalScrollProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  itemWidth?: number;
  sectionHeight?: string;
  progressColors?: string;
}

export function DesktopHorizontalScroll<T>({
  items,
  renderItem,
  className = "",
  itemWidth = 450,
  sectionHeight = "300vh",
  progressColors = "from-google-blue via-google-green to-google-yellow",
}: DesktopHorizontalScrollProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate horizontal translation based on scroll
  const totalWidth = items.length * itemWidth;
  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
  const maxTranslate = Math.max(0, totalWidth - viewportWidth + 100);
  
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0.3, 0.3, 0]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-border/30 z-20">
          <motion.div
            className={`h-full bg-gradient-to-r ${progressColors}`}
            style={{ width: progressWidth }}
          />
        </div>

        {/* Horizontal scrolling content */}
        <div className="flex-1 flex items-center">
          <motion.div
            className="flex gap-6 px-8 md:px-16"
            style={{ x }}
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex-shrink-0"
                style={{ width: itemWidth }}
              >
                {renderItem(item, index)}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-foreground text-sm"
          style={{ opacity: scrollHintOpacity }}
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
