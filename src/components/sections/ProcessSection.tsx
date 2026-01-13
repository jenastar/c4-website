import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Rocket, Settings } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "We start with deep discovery to understand your goals, constraints, and existing systems.",
    details: "Through stakeholder interviews, technical audits, and competitive analysis, we map out the full landscape before proposing solutions.",
    color: "google-blue",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Collaborative architecture sessions produce a detailed blueprint before we write code.",
    details: "We create system diagrams, data models, and implementation roadmaps that your team reviews and approves before development begins.",
    color: "google-red",
  },
  {
    icon: Rocket,
    title: "Deliver",
    description: "Sprint-based delivery with demos every two weeks. You see progress from day one.",
    details: "Agile methodology with clear milestones, automated testing, and continuous integration ensures predictable, high-quality output.",
    color: "google-yellow",
  },
  {
    icon: Settings,
    title: "Operationalize",
    description: "We don't just build—we ensure your team can run, maintain, and extend the system.",
    details: "Comprehensive documentation, training sessions, and runbooks empower your team to own the solution long after we're done.",
    color: "google-green",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  "google-blue": { bg: "bg-google-blue", text: "text-white", border: "border-google-blue", glow: "shadow-google-blue/40" },
  "google-red": { bg: "bg-google-red", text: "text-white", border: "border-google-red", glow: "shadow-google-red/40" },
  "google-yellow": { bg: "bg-google-yellow", text: "text-foreground", border: "border-google-yellow", glow: "shadow-google-yellow/40" },
  "google-green": { bg: "bg-google-green", text: "text-white", border: "border-google-green", glow: "shadow-google-green/40" },
};

function StepCard({
  step,
  index,
  scrollYProgress,
  total,
}: {
  step: typeof steps[0];
  index: number;
  scrollYProgress: any;
  total: number;
}) {
  const colors = colorClasses[step.color];
  
  // Each step gets a portion of the scroll
  const stepProgress = 1 / total;
  const stepStart = index * stepProgress;
  const stepMid = stepStart + stepProgress * 0.5;
  const stepEnd = (index + 1) * stepProgress;
  
  // Active state: card is highlighted when in its scroll range
  const isActiveOpacity = useTransform(
    scrollYProgress,
    [stepStart, stepStart + 0.05, stepEnd - 0.05, stepEnd],
    [0.4, 1, 1, 0.4]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [stepStart, stepMid, stepEnd],
    [0.9, 1.05, 0.9]
  );
  
  const y = useTransform(
    scrollYProgress,
    [stepStart, stepMid, stepEnd],
    [20, 0, 20]
  );
  
  // Icon glow effect
  const glowOpacity = useTransform(
    scrollYProgress,
    [stepStart, stepMid, stepEnd],
    [0, 1, 0]
  );
  
  // Details reveal
  const detailsOpacity = useTransform(
    scrollYProgress,
    [stepStart + 0.02, stepMid, stepEnd - 0.02],
    [0, 1, 0]
  );
  
  const detailsY = useTransform(
    scrollYProgress,
    [stepStart, stepMid],
    [20, 0]
  );

  return (
    <motion.div
      style={{ opacity: isActiveOpacity, scale, y }}
      className="relative flex flex-col items-center text-center p-6"
    >
      {/* Glowing icon container */}
      <motion.div
        style={{ 
          boxShadow: useTransform(glowOpacity, (v) => `0 0 ${v * 40}px ${v * 15}px`),
        }}
        className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full ${colors.bg} ${colors.text} mb-6 ${colors.glow}`}
      >
        <step.icon className="w-9 h-9" />
        
        {/* Pulsing ring when active */}
        <motion.span 
          className={`absolute inset-0 rounded-full border-2 ${colors.border}`}
          style={{
            scale: useTransform(glowOpacity, [0, 1], [1, 1.4]),
            opacity: useTransform(glowOpacity, [0, 0.5, 1], [0, 0.6, 0]),
          }}
        />
        
        {/* Step number */}
        <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-card border-2 border-border text-sm font-bold text-foreground flex items-center justify-center">
          {index + 1}
        </span>
      </motion.div>

      <h3 className="text-xl font-bold text-foreground mb-2">
        {step.title}
      </h3>
      
      <p className="text-muted-foreground mb-4">
        {step.description}
      </p>
      
      {/* Revealed details on active */}
      <motion.p 
        style={{ opacity: detailsOpacity, y: detailsY }}
        className="text-sm text-muted-foreground/80 italic max-w-xs"
      >
        {step.details}
      </motion.p>
    </motion.div>
  );
}

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Header animations
  const headerOpacity = useTransform(scrollYProgress, [0, 0.08, 0.9, 1], [0, 1, 1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.08], [30, 0]);
  
  // Progress line that fills as you scroll through steps
  const lineWidth = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);
  
  // Current active step indicator
  const activeStep = useTransform(scrollYProgress, [0, 1], [0, steps.length]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <section className="sticky top-0 h-screen flex items-center overflow-hidden bg-background">
        <div className="container px-4 py-20">
          <motion.div 
            style={{ opacity: headerOpacity, y: headerY }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
              How we work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results predictably.
            </p>
          </motion.div>

          {/* Progress indicator */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative h-1 bg-border rounded-full overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-google-blue via-google-red via-google-yellow to-google-green rounded-full"
                style={{ width: lineWidth }}
              />
            </div>
            
            {/* Step dots on progress bar */}
            <div className="relative flex justify-between mt-2">
              {steps.map((step, index) => {
                const stepPosition = index / (steps.length - 1);
                const dotScale = useTransform(
                  scrollYProgress,
                  [stepPosition - 0.1, stepPosition, stepPosition + 0.1],
                  [1, 1.5, 1]
                );
                const colors = colorClasses[step.color];
                
                return (
                  <motion.div
                    key={step.title}
                    style={{ scale: dotScale }}
                    className={`w-3 h-3 rounded-full ${colors.bg}`}
                  />
                );
              })}
            </div>
          </div>

          {/* Steps grid */}
          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                step={step}
                index={index}
                scrollYProgress={scrollYProgress}
                total={steps.length}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
