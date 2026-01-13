import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { CountUp } from "@/components/animations/CountUp";
import { DecorativeShapes } from "@/components/graphics/DecorativeShapes";
import { AnimatedChart } from "@/components/graphics/AnimatedChart";
import { AnimatedBarChart } from "@/components/graphics/AnimatedBarChart";
import { Target, Lightbulb, Users, Award } from "lucide-react";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const principles = [
  {
    icon: Target,
    title: "Outcomes over outputs",
    description: "We measure success by business impact, not lines of code shipped.",
  },
  {
    icon: Lightbulb,
    title: "Simplicity first",
    description: "The best architecture is the simplest one that solves the problem.",
  },
  {
    icon: Users,
    title: "Transfer, don't trap",
    description: "We build systems your team can own and evolve independently.",
  },
  {
    icon: Award,
    title: "Google Cloud natives",
    description: "Deep expertise across the GCP stack—not generalists learning on your dime.",
  },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 95, suffix: "%", label: "On-time delivery" },
  { value: 3, suffix: "x", label: "Faster than DIY" },
  { value: 40, suffix: "%", label: "Avg. cost savings" },
];

export function WhyC4Section() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={sectionRef} className="relative py-16 md:py-32 bg-secondary/30 overflow-hidden">
      <DecorativeShapes variant="minimal" />
      
      <div className="container relative z-10 px-4">
        <AnimatedSection className="text-center mb-10 md:mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-3 md:mb-4 uppercase tracking-wider">
            Why C4
          </span>
          <h2 className="text-2xl md:text-display-sm font-bold text-foreground mb-3 md:mb-4">
            Our principles
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            What makes us different from the big consultancies and freelance generalists.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-12 md:mb-20">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              className="text-center p-4 md:p-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={!isMobile ? {
                y: useTransform(
                  scrollYProgress,
                  [0.1, 0.4],
                  [30 + index * 10, 0]
                ),
              } : undefined}
            >
              <motion.div 
                className="inline-flex p-2.5 md:p-3 rounded-xl bg-card border border-border mb-3 md:mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <principle.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </motion.div>
              <h3 className="font-semibold text-sm md:text-base text-foreground mb-1 md:mb-2">
                {principle.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Charts visualization section */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto mb-10 md:mb-16">
          {/* Line chart - Growth trajectory */}
          <motion.div
            className="bg-card rounded-xl md:rounded-2xl border border-border p-4 md:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">Performance Growth</h4>
            <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">Typical client trajectory over 6 months</p>
            <div className="aspect-video w-full">
              <AnimatedChart className="w-full h-full" />
            </div>
          </motion.div>

          {/* Bar chart - Stats visualization */}
          <motion.div
            className="bg-card rounded-xl md:rounded-2xl border border-border p-4 md:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">By the Numbers</h4>
            <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">Our track record speaks for itself</p>
            <div className="aspect-video w-full">
              <AnimatedBarChart className="w-full h-full" />
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <AnimatedSection className="bg-card rounded-xl md:rounded-2xl border border-border p-6 md:p-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
                style={!isMobile ? {
                  y: useTransform(
                    scrollYProgress,
                    [0.5, 0.8],
                    [20, 0]
                  ),
                } : undefined}
              >
                <div className="text-2xl md:text-4xl font-bold text-foreground mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
