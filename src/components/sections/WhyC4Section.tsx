import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { CountUp } from "@/components/animations/CountUp";
import { DecorativeShapes } from "@/components/graphics/DecorativeShapes";
import { Target, Lightbulb, Users, Award } from "lucide-react";

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
  return (
    <section className="relative py-20 md:py-32 bg-secondary/30 overflow-hidden">
      <DecorativeShapes variant="minimal" />
      
      <div className="container relative z-10 px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Why C4
          </span>
          <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
            Our principles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What makes us different from the big consultancies and freelance generalists.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {principles.map((principle, index) => (
            <AnimatedSection
              key={principle.title}
              delay={index * 0.1}
              className="text-center p-6"
            >
              <div className="inline-flex p-3 rounded-xl bg-card border border-border mb-4">
                <principle.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {principle.description}
              </p>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats section */}
        <AnimatedSection className="bg-card rounded-2xl border border-border p-8 md:p-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">
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
