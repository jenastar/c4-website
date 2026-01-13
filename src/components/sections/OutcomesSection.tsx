import { motion } from "framer-motion";
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

function OutcomeCard({ outcome, index }: { outcome: typeof outcomes[0]; index: number }) {
  const colors = colorClasses[outcome.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`group relative p-5 md:p-6 rounded-xl border ${colors.border} bg-card hover:shadow-lg transition-all duration-300`}
    >
      <div className={`inline-flex p-2.5 md:p-3 rounded-lg ${colors.bg} mb-3 md:mb-4`}>
        <outcome.icon className={`w-5 h-5 md:w-6 md:h-6 ${colors.text}`} />
      </div>
      <h3 className="text-base md:text-xl font-semibold text-foreground mb-1.5 md:mb-2">
        {outcome.title}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground">
        {outcome.description}
      </p>
      
      <div className={`absolute inset-x-0 bottom-0 h-1 ${colors.bg} rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
    </motion.div>
  );
}

export function OutcomesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-display-sm font-bold text-foreground mb-3 md:mb-4">
            What changes after C4
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            We transform how mid-market teams build and operate AI systems on Google Cloud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => (
            <OutcomeCard
              key={outcome.title}
              outcome={outcome}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
