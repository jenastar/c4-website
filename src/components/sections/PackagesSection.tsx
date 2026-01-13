import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
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

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Engagement Options
          </span>
          <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
            Service packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fixed-scope engagements with clear timelines and deliverables.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg) => {
            const colors = colorClasses[pkg.color];
            return (
              <motion.div
                key={pkg.name}
                variants={staggerItemVariants}
                className={`relative bg-card rounded-2xl p-8 border-2 ${
                  pkg.featured ? colors.border : "border-border"
                } transition-all duration-300 hover:shadow-lg`}
              >
                {pkg.featured && (
                  <div className={`absolute -top-3 left-6 px-4 py-1 ${colors.bg} text-white text-xs font-semibold rounded-full`}>
                    Most Popular
                  </div>
                )}

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
        </StaggerContainer>
      </div>
    </section>
  );
}
