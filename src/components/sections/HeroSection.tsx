import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GeometricBackground } from "@/components/graphics/GeometricBackground";
import { ArrowRight, Calendar } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const calendlyUrl = "https://calendly.com"; // Replace with actual Calendly link
  const sectionRef = useRef<HTMLElement>(null);
  
  // Scroll-linked animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax and fade effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary/30"
    >
      {/* Parallax background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <GeometricBackground />
      </motion.div>
      
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="container relative z-10 px-4 py-20 md:py-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-google-green animate-pulse" />
            <span className="text-sm font-medium">Google Cloud Partner</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-display-lg lg:text-display-xl font-bold text-foreground mb-6 text-balance"
          >
            Production-ready{" "}
            <span className="text-google-blue">AI</span> and{" "}
            <span className="text-google-green">automation</span> on Google Cloud
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance"
          >
            C4 delivers strategy, engineering, and managed services so mid-market teams can launch AI and cloud infrastructure in weeks—without hiring a platoon.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="group text-base px-8 py-6 shadow-color hover:shadow-xl transition-all duration-300"
            >
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book a 30-minute consult
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-6"
              asChild
            >
              <a href="#services">
                Get an AI Readiness Assessment
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-4">Trusted by teams who need to move fast</p>
            <div className="flex items-center justify-center gap-8 opacity-50">
              <div className="h-8 w-24 bg-muted rounded" />
              <div className="h-8 w-20 bg-muted rounded" />
              <div className="h-8 w-28 bg-muted rounded" />
              <div className="h-8 w-24 bg-muted rounded hidden sm:block" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
