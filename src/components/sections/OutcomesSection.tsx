import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, Shield, TrendingUp, Clock, Users } from "lucide-react";

const outcomes = [
  {
    icon: Zap,
    title: "Faster execution",
    description: "Ship AI features in weeks, not quarters. Our sprint-based approach delivers working systems fast.",
    color: "google-blue",
  },
  {
    icon: Shield,
    title: "Lower risk",
    description: "Enterprise-grade security and governance baked in from day one. No rework, no surprises.",
    color: "google-green",
  },
  {
    icon: TrendingUp,
    title: "Scalable infrastructure",
    description: "Built on Google Cloud best practices. Grows with your business without architectural rewrites.",
    color: "google-yellow",
  },
  {
    icon: Clock,
    title: "Predictable costs",
    description: "Fixed-scope engagements with transparent pricing. Know what you're paying before you start.",
    color: "google-red",
  },
  {
    icon: Users,
    title: "Team enablement",
    description: "We don't just build—we teach. Your team owns the system when we leave.",
    color: "google-blue",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  "google-blue": {
    bg: "bg-google-blue/10",
    text: "text-google-blue",
    border: "border-google-blue/20",
  },
  "google-red": {
    bg: "bg-google-red/10",
    text: "text-google-red",
    border: "border-google-red/20",
  },
  "google-yellow": {
    bg: "bg-google-yellow/10",
    text: "text-google-yellow",
    border: "border-google-yellow/20",
  },
  "google-green": {
    bg: "bg-google-green/10",
    text: "text-google-green",
    border: "border-google-green/20",
  },
};

function OutcomeCard({
  outcome,
  index,
  scrollYProgress,
}: {
  outcome: typeof outcomes[0];
  index: number;
  scrollYProgress: any;
}) {
  const colors = colorClasses[outcome.color];
  
  // Staggered reveal timing for each card
  const startReveal = 0.15 + index * 0.1;
  const endReveal = startReveal + 0.12;
  
  const opacity = useTransform(
    scrollYProgress,
    [startReveal, endReveal, 0.85, 1],
    [0, 1, 1, 0]
  );
  
  // Cards come from different directions based on position
  const directions = [
    { x: -60, y: 40 },   // left
    { x: 0, y: 60 },     // bottom
    { x: 60, y: 40 },    // right
    { x: -40, y: 50 },   // left-bottom
    { x: 40, y: 50 },    // right-bottom
  ];
  const dir = directions[index % directions.length];
  
  const x = useTransform(scrollYProgress, [startReveal, endReveal], [dir.x, 0]);
  const y = useTransform(scrollYProgress, [startReveal, endReveal], [dir.y, 0]);
  const rotate = useTransform(scrollYProgress, [startReveal, endReveal], [index % 2 === 0 ? -5 : 5, 0]);

  return (
    <motion.div
      style={{ opacity, x, y, rotate }}
      className={`group relative p-6 rounded-xl border ${colors.border} bg-card hover:shadow-lg transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`}
    >
      <div className={`inline-flex p-3 rounded-lg ${colors.bg} mb-4`}>
        <outcome.icon className={`w-6 h-6 ${colors.text}`} />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {outcome.title}
      </h3>
      <p className="text-muted-foreground">
        {outcome.description}
      </p>
      
      {/* Hover accent */}
      <div className={`absolute inset-x-0 bottom-0 h-1 ${colors.bg} rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
    </motion.div>
  );
}

export function OutcomesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  // Header animations
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12, 0.8, 1], [0, 1, 1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.12], [30, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.12], [0.95, 1]);

  return (
    <div ref={containerRef} className="relative h-[150vh]">
      <section className="sticky top-0 h-screen flex items-center overflow-hidden bg-background">
        <div className="container px-4 py-20">
          <motion.div 
            style={{ opacity: headerOpacity, y: headerY, scale: headerScale }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
              What changes after C4
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We transform how mid-market teams build and operate AI systems on Google Cloud.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {outcomes.map((outcome, index) => (
              <OutcomeCard
                key={outcome.title}
                outcome={outcome}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
