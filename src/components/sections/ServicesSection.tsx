import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, Database, Cloud, Shield, Gauge } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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

// Mobile card with simple animations
function MobileServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const colors = colorClasses[service.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-card rounded-xl p-5 border border-border"
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${colors.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative">
        <div className={`inline-flex p-3 rounded-lg ${colors.bg} mb-4`}>
          <service.icon className={`w-5 h-5 ${colors.text}`} />
        </div>
        
        <h3 className="text-base font-bold text-foreground mb-2">
          {service.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4">
          {service.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Desktop card with scroll animations
function DesktopServiceCard({ 
  service, 
  index, 
  scrollYProgress 
}: { 
  service: typeof services[0]; 
  index: number;
  scrollYProgress: any;
}) {
  const colors = colorClasses[service.color];
  
  const startReveal = 0.1 + index * 0.12;
  const endReveal = startReveal + 0.15;
  
  const opacity = useTransform(
    scrollYProgress,
    [startReveal, endReveal, 0.9, 1],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(
    scrollYProgress,
    [startReveal, endReveal],
    [80, 0]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [startReveal, endReveal],
    [0.9, 1]
  );

  return (
    <motion.div
      style={{ opacity, y, scale }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] group relative bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300"
    >
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
}

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  // Mobile: simple stacked layout
  if (isMobile) {
    return (
      <section id="services" className="py-16 bg-secondary/30">
        <div className="container px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-sm font-medium text-primary mb-3 uppercase tracking-wider">
              Core Capabilities
            </span>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              What we do
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Full-stack expertise across AI, data, and cloud infrastructure—all on Google Cloud.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {services.map((service, index) => (
              <MobileServiceCard 
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop: sticky scroll with animations
  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <section id="services" className="sticky top-0 h-screen flex items-center overflow-hidden bg-secondary/30">
        <div className="container px-4 py-20">
          <motion.div 
            style={{ opacity: headerOpacity, y: headerY }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
              What we do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack expertise across AI, data, and cloud infrastructure—all on Google Cloud.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <DesktopServiceCard 
                key={service.title}
                service={service}
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
