import { motion } from "framer-motion";
import { Search, PenTool, Rocket, Settings } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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

const colorClasses: Record<string, { bg: string; text: string }> = {
  "google-blue": { bg: "bg-google-blue", text: "text-white" },
  "google-red": { bg: "bg-google-red", text: "text-white" },
  "google-yellow": { bg: "bg-google-yellow", text: "text-foreground" },
  "google-green": { bg: "bg-google-green", text: "text-white" },
};

function StepCard({
  step,
  index,
}: {
  step: typeof steps[0];
  index: number;
}) {
  const colors = colorClasses[step.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative flex flex-col items-center text-center p-4 sm:p-6"
    >
      <div
        className={`relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full ${colors.bg} ${colors.text} mb-4 md:mb-6`}
      >
        <step.icon className="w-7 h-7 md:w-9 md:h-9" />
        
        <span className="absolute -top-1 -right-1 w-6 h-6 md:w-7 md:h-7 rounded-full bg-card border-2 border-border text-xs md:text-sm font-bold text-foreground flex items-center justify-center">
          {index + 1}
        </span>
      </div>

      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
        {step.title}
      </h3>
      
      <p className="text-sm md:text-base text-muted-foreground">
        {step.description}
      </p>
    </motion.div>
  );
}

export function ProcessSection() {
  const isMobile = useIsMobile();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary mb-3 md:mb-4 uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-display-sm font-bold text-foreground mb-3 md:mb-4">
            How we work
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            A proven methodology that delivers results predictably.
          </p>
        </motion.div>

        {/* Progress line - visible on md and up */}
        <div className="hidden md:block max-w-4xl mx-auto mb-8">
          <div className="relative h-1 bg-border rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-google-blue via-google-red via-google-yellow to-google-green rounded-full"
            />
          </div>
          
          <div className="relative flex justify-between mt-2">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color];
              return (
                <motion.div
                  key={step.title}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                  className={`w-3 h-3 rounded-full ${colors.bg}`}
                />
              );
            })}
          </div>
        </div>

        <div className={`grid ${isMobile ? 'grid-cols-1 sm:grid-cols-2 gap-6' : 'md:grid-cols-4 gap-4'} max-w-5xl mx-auto`}>
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
