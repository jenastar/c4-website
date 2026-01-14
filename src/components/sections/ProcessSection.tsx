import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Search, PenTool, Rocket, Settings } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We start with deep discovery to understand your goals, constraints, and existing systems.",
    color: "google-blue",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Collaborative architecture sessions produce a detailed blueprint before we write code.",
    color: "google-red",
  },
  {
    icon: Rocket,
    title: "Deliver",
    description: "Sprint-based delivery with demos every two weeks. You see progress from day one.",
    color: "google-yellow",
  },
  {
    icon: Settings,
    title: "Operationalize",
    description: "We don't just build—we ensure your team can run, maintain, and extend the system.",
    color: "google-green",
  },
];

const colorClasses: Record<string, { bg: string; text: string; line: string }> = {
  "google-blue": { bg: "bg-google-blue", text: "text-white", line: "bg-google-blue" },
  "google-red": { bg: "bg-google-red", text: "text-white", line: "bg-google-red" },
  "google-yellow": { bg: "bg-google-yellow", text: "text-foreground", line: "bg-google-yellow" },
  "google-green": { bg: "bg-google-green", text: "text-white", line: "bg-google-green" },
};

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Progress line animation based on scroll
  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 100]);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
            How we work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers results predictably.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line background */}
          <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-border" />
          
          {/* Animated progress line */}
          <motion.div 
            ref={progressRef}
            className="hidden md:block absolute top-16 left-[10%] h-0.5 bg-gradient-to-r from-google-blue via-google-red via-google-yellow to-google-green"
            style={{ 
              width: useTransform(lineProgress, (value) => `${Math.min(value, 80)}%`),
            }}
          />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color];
              
              // Calculate when this step should activate
              const stepStart = 0.2 + (index * 0.15);
              const stepEnd = stepStart + 0.15;
              
              return (
                <motion.div
                  key={step.title}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {/* Step number with icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`relative inline-flex items-center justify-center w-16 h-16 rounded-full ${colors.bg} ${colors.text} mb-6 shadow-lg z-10`}
                  >
                    <step.icon className="w-7 h-7" />
                    
                    {/* Animated ring on scroll */}
                    <motion.span 
                      className={`absolute inset-0 rounded-full ${colors.bg} opacity-30`}
                      style={{
                        scale: useTransform(
                          scrollYProgress, 
                          [stepStart, stepEnd], 
                          [1, 1.3]
                        ),
                        opacity: useTransform(
                          scrollYProgress,
                          [stepStart, stepEnd, stepEnd + 0.1],
                          [0, 0.4, 0]
                        ),
                      }}
                    />
                    
                    {/* Step number badge */}
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-card border-2 border-border text-xs font-bold text-foreground flex items-center justify-center">
                      {index + 1}
                    </span>
                  </motion.div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
