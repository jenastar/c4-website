import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { Bot, Database, Cloud, Shield, Gauge } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Custom AI agents, document processing, and workflow automation powered by Vertex AI and Google's foundation models.",
    features: ["LLM integration", "RAG pipelines", "AI copilots"],
    color: "google-blue",
  },
  {
    icon: Database,
    title: "Data Platforms",
    description: "Modern data infrastructure with BigQuery, real-time analytics, and ML-ready data pipelines.",
    features: ["Data lakes", "ETL pipelines", "Analytics"],
    color: "google-green",
  },
  {
    icon: Cloud,
    title: "Cloud Foundations",
    description: "Production-ready GCP infrastructure with landing zones, networking, and DevOps automation.",
    features: ["Landing zones", "CI/CD", "IaC"],
    color: "google-yellow",
  },
  {
    icon: Shield,
    title: "Security & Governance",
    description: "Enterprise security controls, compliance frameworks, and identity management.",
    features: ["IAM", "Compliance", "Audit trails"],
    color: "google-red",
  },
  {
    icon: Gauge,
    title: "Optimization",
    description: "Cost optimization, performance tuning, and operational excellence for existing workloads.",
    features: ["Cost reduction", "Performance", "Reliability"],
    color: "google-blue",
  },
];

const colorClasses: Record<string, { bg: string; text: string; gradient: string }> = {
  "google-blue": {
    bg: "bg-google-blue/10",
    text: "text-google-blue",
    gradient: "from-google-blue/20 to-transparent",
  },
  "google-red": {
    bg: "bg-google-red/10",
    text: "text-google-red",
    gradient: "from-google-red/20 to-transparent",
  },
  "google-yellow": {
    bg: "bg-google-yellow/10",
    text: "text-google-yellow",
    gradient: "from-google-yellow/20 to-transparent",
  },
  "google-green": {
    bg: "bg-google-green/10",
    text: "text-google-green",
    gradient: "from-google-green/20 to-transparent",
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
            What we do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack expertise across AI, data, and cloud infrastructure—all on Google Cloud.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const colors = colorClasses[service.color];
            return (
              <motion.div
                key={service.title}
                variants={staggerItemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-b ${colors.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-xl ${colors.bg} mb-6`}>
                    <service.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
