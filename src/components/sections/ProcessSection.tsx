import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, PenTool, Rocket, Settings, LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileHorizontalCarousel } from "@/components/animations/MobileHorizontalCarousel";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
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

function StepCard({ step, index }: { step: Step; index: number }) {
  const colors = colorClasses[step.color];
  const Icon = step.icon;

  return (
    <div className="relative flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border h-full">
      <div
        className={`relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full ${colors.bg} ${colors.text} mb-4 md:mb-6`}
      >
        <Icon className="w-7 h-7 md:w-9 md:h-9" />
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
    </div>
  );
}

function DesktopProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={sectionRef} className="max-w-5xl mx-auto">
      {/* Progress line */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="relative h-1 bg-border rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-google-blue via-google-red via-google-yellow to-google-green rounded-full"
            style={{ width: lineWidth }}
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

      <div className="grid md:grid-cols-4 gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <StepCard step={step} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ProcessSection() {
  const isMobile = useIsMobile();

  const renderStep = (step: Step, index: number) => (
    <StepCard step={step} index={index} />
  );

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

        {/* Mobile: Swipeable carousel */}
        {isMobile && (
          <MobileHorizontalCarousel
            items={steps}
            renderItem={renderStep}
            progressColors="from-google-blue via-google-red via-google-yellow to-google-green"
          />
        )}

        {/* Desktop: Scroll-linked progress */}
        {!isMobile && <DesktopProcessSection />}
      </div>
    </section>
  );
}
