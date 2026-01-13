import { useCallback, useEffect, useState, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

interface MobileHorizontalCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  itemClassName?: string;
  showDots?: boolean;
  showProgress?: boolean;
  progressColors?: string;
}

export function MobileHorizontalCarousel<T>({
  items,
  renderItem,
  className = "",
  itemClassName = "",
  showDots = true,
  showProgress = true,
  progressColors = "from-google-blue via-google-green to-google-yellow",
}: MobileHorizontalCarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    onScroll();
    
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onSelect);
    
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect, onScroll]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className={`relative ${className}`}>
      {/* Progress bar */}
      {showProgress && (
        <div className="absolute top-0 left-4 right-4 h-1 bg-border/30 rounded-full z-10 overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${progressColors} rounded-full`}
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      )}

      {/* Carousel viewport */}
      <div className="overflow-hidden pt-4" ref={emblaRef}>
        <div className="flex gap-4 pl-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[85vw] max-w-[400px] ${itemClassName}`}
            >
              {renderItem(item, index)}
            </div>
          ))}
          {/* Spacer for last item visibility */}
          <div className="flex-shrink-0 w-4" />
        </div>
      </div>

      {/* Dot indicators */}
      {showDots && (
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
