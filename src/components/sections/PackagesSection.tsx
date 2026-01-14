import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "AI Readiness Assessment",
    duration: "2 weeks",
    description: "Evaluate your AI opportunity and get a prioritized implementation roadmap.",
    deliverables: [
      "Use-case discovery workshop",
      "Technical feasibility analysis",
      "ROI projection",
      "90-day implementation plan",
    ],
    color: "google-blue",
    featured: false,
  },
  {
    name: "AI Accelerator",
    duration: "8 weeks",
    description: "Go from zero to production AI with a working pilot and your team trained to operate it.",
    deliverables: [
      "Production-ready AI system",
      "Integration with existing tools",
      "Monitoring & observability",
      "Team training & documentation",
    ],
    color: "google-green",
    featured: true,
  },
  {
    name: "Cloud Foundations",
    duration: "4-6 weeks",
    description: "Secure, scalable GCP infrastructure with landing zones and DevOps automation.",
    deliverables: [
      "Landing zone architecture",
      "Security controls & IAM",
      "CI/CD pipelines",
      "IaC templates",
    ],
    color: "google-yellow",
    featured: false,
  },
  {
    name: "Advisory Retainer",
    duration: "Ongoing",
    description: "Fractional CTO-level guidance for teams building on Google Cloud.",
    deliverables: [
      "Weekly strategy sessions",
      "Architecture review",
      "Vendor evaluation",
      "Team mentorship",
    ],
    color: "google-red",
    featured: false,
  },
];

const colorClasses: Record<string, { border: string; bg: string }> = {
  "google-blue": { border: "border-google-blue", bg: "bg-google-blue" },
  "google-red": { border: "border-google-red", bg: "bg-google-red" },
  "google-yellow": { border: "border-google-yellow", bg: "bg-google-yellow" },
  "google-green": { border: "border-google-green", bg: "bg-google-green" },
};

export function PackagesSection() {
  const calendlyUrl = "https://calendly.com";
  const containerRef = useRef<HTMLDivElement>(null);

  // Sticky scroll setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll to horizontal card movement
  // Calculate proper range to show all cards fully
  // We need to move enough to show all cards without cutting off the last one
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["5%", "-65%"]);

  // Header animations
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [40, 0]);

  // SVG connection line drawing
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 100]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <section className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden bg-secondary/30">
        <div className="container px-4 py-20">
          {/* Header */}
          <motion.div
            style={{ opacity: headerOpacity, y: headerY }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
              Engagement Options
            </span>
            <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
              Service packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fixed-scope engagements with clear timelines and deliverables.
            </p>
          </motion.div>

          {/* Horizontal scroll container */}
          <div className="relative">
            {/* SVG Connection Lines - draws as you scroll */}
            <svg
              className="absolute top-1/2 left-0 w-full h-32 pointer-events-none"
              style={{ transform: 'translateY(-50%)' }}
              preserveAspectRatio="none"
            >
              {/* Background guideline */}
              <motion.line
                x1="10%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 4"
                className="text-muted-foreground/10"
              />

              {/* Animated connection line */}
              <motion.line
                x1="10%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="8 4"
                className="text-primary/30"
                style={{
                  strokeDashoffset: useTransform(scrollYProgress, [0, 1], [1000, 0])
                }}
              />

              {/* Connection dots at card positions */}
              {packages.map((_, index) => {
                const dotX = 15 + (index * 25); // Spread dots evenly
                const dotOpacity = useTransform(
                  scrollYProgress,
                  [0.1 + index * 0.2, 0.25 + index * 0.2],
                  [0, 1]
                );

                return (
                  <motion.circle
                    key={index}
                    cx={`${dotX}%`}
                    cy="50%"
                    r="6"
                    fill="currentColor"
                    className="text-primary"
                    style={{ opacity: dotOpacity }}
                  />
                );
              })}
            </svg>

            {/* Scrolling cards wrapper */}
            <motion.div
              style={{ x }}
              className="flex gap-8 pl-[10%] pr-[40%]"
            >
              {packages.map((pkg, index) => {
                const colors = colorClasses[pkg.color];

                // Each card reveals with scroll progress
                const cardStart = 0.1 + index * 0.2;
                const cardEnd = cardStart + 0.15;

                const opacity = useTransform(
                  scrollYProgress,
                  [cardStart, cardEnd, 0.9, 1],
                  [0, 1, 1, 0.3]
                );

                const scale = useTransform(
                  scrollYProgress,
                  [cardStart, cardEnd],
                  [0.9, 1]
                );

                return (
                  <motion.div
                    key={pkg.name}
                    style={{ opacity, scale }}
                    className={`relative bg-card rounded-2xl p-8 border-2 ${
                      pkg.featured ? colors.border : "border-border"
                    } transition-all duration-300 hover:shadow-lg flex-shrink-0 w-[380px] md:w-[420px]`}
                  >
                    {pkg.featured && (
                      <motion.div
                        className={`absolute -top-3 left-6 px-4 py-1 ${colors.bg} text-white text-xs font-semibold rounded-full`}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Most Popular
                      </motion.div>
                    )}

                    {/* Card index indicator */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{index + 1}</span>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {pkg.name}
                        </h3>
                        <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          {pkg.duration}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {pkg.description}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-google-green shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`w-full group ${pkg.featured ? "" : "variant-outline"}`}
                      variant={pkg.featured ? "default" : "outline"}
                    >
                      <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Scroll progress indicator */}
          <motion.div
            className="mt-12 max-w-2xl mx-auto"
            style={{ opacity: headerOpacity }}
          >
            <div className="h-1 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              />
            </div>
            <div className="flex justify-between mt-2">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  className="text-xs text-muted-foreground"
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [index * 0.25, (index + 1) * 0.25],
                      [0.5, 1]
                    ),
                    fontWeight: useTransform(
                      scrollYProgress,
                      [index * 0.25, (index + 1) * 0.25],
                      [400, 600]
                    )
                  }}
                >
                  {pkg.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
