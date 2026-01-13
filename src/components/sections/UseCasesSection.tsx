import { motion } from "framer-motion";
import { MessageSquare, Search, Workflow, BarChart3, FileSearch, Mic, ScanEye, LucideIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileHorizontalCarousel } from "@/components/animations/MobileHorizontalCarousel";
import { DesktopHorizontalScroll } from "@/components/animations/DesktopHorizontalScroll";

interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  color: string;
  feature: string;
}

const useCases: UseCase[] = [
  {
    icon: MessageSquare,
    title: "AI Copilots",
    description: "Custom assistants that understand your business context and integrate with your tools.",
    tag: "AI",
    color: "google-blue",
    feature: "Natural language understanding",
  },
  {
    icon: Search,
    title: "RAG Systems",
    description: "Retrieval-augmented generation for accurate, grounded responses from your documents.",
    tag: "AI",
    color: "google-green",
    feature: "Document-grounded AI",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "End-to-end process automation with intelligent decision-making and human-in-the-loop.",
    tag: "Automation",
    color: "google-yellow",
    feature: "Smart process flows",
  },
  {
    icon: FileSearch,
    title: "Document Processing",
    description: "Extract, classify, and route documents at scale with vision AI and NLP.",
    tag: "AI",
    color: "google-red",
    feature: "Intelligent extraction",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboards",
    description: "Real-time insights with BigQuery, Looker, and custom visualization.",
    tag: "Data",
    color: "google-blue",
    feature: "Real-time insights",
  },
  {
    icon: Mic,
    title: "Voice Agents",
    description: "Conversational AI voice assistants for customer support, sales, and internal operations.",
    tag: "AI",
    color: "google-green",
    feature: "Speech-to-action",
  },
  {
    icon: ScanEye,
    title: "Video & Image Analysis",
    description: "Computer vision solutions for content moderation, quality inspection, and visual data extraction.",
    tag: "AI",
    color: "google-red",
    feature: "Visual intelligence",
  },
];

const colorClasses: Record<string, { bg: string; border: string }> = {
  "google-blue": { bg: "bg-google-blue", border: "border-google-blue/30" },
  "google-red": { bg: "bg-google-red", border: "border-google-red/30" },
  "google-yellow": { bg: "bg-google-yellow", border: "border-google-yellow/30" },
  "google-green": { bg: "bg-google-green", border: "border-google-green/30" },
};

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  const colors = colorClasses[useCase.color];
  const Icon = useCase.icon;

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative bg-card rounded-xl border ${colors.border} p-5 md:p-6 h-full`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 p-3 rounded-lg ${colors.bg}`}>
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-base md:text-lg font-bold text-foreground">
              {useCase.title}
            </h3>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${colors.bg} text-white`}>
              {useCase.tag}
            </span>
          </div>
          <p className="text-sm md:text-base text-muted-foreground mb-3">
            {useCase.description}
          </p>
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground/80">
            <div className={`w-1.5 h-1.5 rounded-full ${colors.bg}`} />
            <span>{useCase.feature}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function UseCasesSection() {
  const isMobile = useIsMobile();

  const renderUseCase = (useCase: UseCase, index: number) => (
    <UseCaseCard useCase={useCase} />
  );

  return (
    <section id="use-cases" className="bg-secondary/30">
      <div className="py-16 md:py-24 container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-8"
        >
          <span className="inline-block text-sm font-medium text-primary mb-2 md:mb-3 uppercase tracking-wider">
            Use Cases
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-display-sm font-bold text-foreground mb-3 md:mb-4">
            What we build
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            From AI copilots to data pipelines, we deliver solutions that drive real business value.
          </p>
        </motion.div>
      </div>

      {/* Mobile: Swipeable carousel */}
      {isMobile && (
        <div className="pb-16">
          <MobileHorizontalCarousel
            items={useCases}
            renderItem={renderUseCase}
            progressColors="from-google-blue via-google-green to-google-yellow"
          />
        </div>
      )}

      {/* Desktop: Horizontal scroll-linked section */}
      {!isMobile && (
        <DesktopHorizontalScroll
          items={useCases}
          renderItem={renderUseCase}
          itemWidth={420}
          sectionHeight="250vh"
          progressColors="from-google-blue via-google-green to-google-yellow"
        />
      )}

      <div className="container px-4 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Get started →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
