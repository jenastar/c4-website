import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggerContainer, staggerItemVariants } from "@/components/animations/StaggerContainer";
import { MessageSquare, Search, Workflow, BarChart3, FileSearch, Mic, ScanEye } from "lucide-react";

const useCases = [
  {
    icon: MessageSquare,
    title: "AI Copilots",
    description: "Custom assistants that understand your business context and integrate with your tools.",
    tag: "AI",
    color: "google-blue",
  },
  {
    icon: Search,
    title: "RAG Systems",
    description: "Retrieval-augmented generation for accurate, grounded responses from your documents.",
    tag: "AI",
    color: "google-green",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "End-to-end process automation with intelligent decision-making and human-in-the-loop.",
    tag: "Automation",
    color: "google-yellow",
  },
  {
    icon: FileSearch,
    title: "Document Processing",
    description: "Extract, classify, and route documents at scale with vision AI and NLP.",
    tag: "AI",
    color: "google-red",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboards",
    description: "Real-time insights with BigQuery, Looker, and custom visualization.",
    tag: "Data",
    color: "google-blue",
  },
  {
    icon: Mic,
    title: "Voice Agents",
    description: "Conversational AI voice assistants for customer support, sales, and internal operations.",
    tag: "AI",
    color: "google-green",
  },
  {
    icon: ScanEye,
    title: "Video & Image Analysis",
    description: "Computer vision solutions for content moderation, quality inspection, and visual data extraction.",
    tag: "AI",
    color: "google-red",
  },
];

const colorClasses: Record<string, { bg: string; text: string }> = {
  "google-blue": { bg: "bg-google-blue", text: "text-white" },
  "google-red": { bg: "bg-google-red", text: "text-white" },
  "google-yellow": { bg: "bg-google-yellow", text: "text-foreground" },
  "google-green": { bg: "bg-google-green", text: "text-white" },
};

export function UseCasesSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
            What we build
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real solutions we've delivered for teams like yours.
          </p>
        </AnimatedSection>

        <StaggerContainer className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase) => {
            const tagColors = colorClasses[useCase.color];
            return (
              <motion.div
                key={useCase.title}
                variants={staggerItemVariants}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group relative bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-secondary">
                    <useCase.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors.bg} ${tagColors.text}`}>
                    {useCase.tag}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {useCase.title}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {useCase.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
