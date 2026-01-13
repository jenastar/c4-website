import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Search, Workflow, BarChart3, FileSearch, Mic, ScanEye } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const useCases = [
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

const colorClasses: Record<string, { bg: string; border: string; glow: string }> = {
  "google-blue": { bg: "bg-google-blue", border: "border-google-blue/30", glow: "shadow-google-blue/20" },
  "google-red": { bg: "bg-google-red", border: "border-google-red/30", glow: "shadow-google-red/20" },
  "google-yellow": { bg: "bg-google-yellow", border: "border-google-yellow/30", glow: "shadow-google-yellow/20" },
  "google-green": { bg: "bg-google-green", border: "border-google-green/30", glow: "shadow-google-green/20" },
};

// Mobile card with simple animations
function MobileCard({ useCase, index }: { useCase: typeof useCases[0]; index: number }) {
  const colors = colorClasses[useCase.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative bg-card rounded-xl border border-border p-5"
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 p-3 rounded-lg ${colors.bg}`}>
          <useCase.icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-base font-bold text-foreground">
              {useCase.title}
            </h3>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${colors.bg} text-white`}>
              {useCase.tag}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {useCase.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Desktop horizontal card with scroll animations
function HorizontalCard({
  useCase,
  index,
  scrollYProgress,
  total,
}: {
  useCase: typeof useCases[0];
  index: number;
  scrollYProgress: any;
  total: number;
}) {
  const colors = colorClasses[useCase.color];
  
  const cardStart = index / total;
  const cardCenter = (index + 0.5) / total;
  const cardEnd = (index + 1) / total;
  
  const scale = useTransform(
    scrollYProgress,
    [cardStart, cardCenter, cardEnd],
    [0.85, 1, 0.85]
  );
  
  const glowOpacity = useTransform(
    scrollYProgress,
    [cardStart, cardCenter, cardEnd],
    [0, 1, 0]
  );
  
  const y = useTransform(
    scrollYProgress,
    [cardStart, cardCenter, cardEnd],
    [20, 0, 20]
  );

  return (
    <motion.div
      style={{ scale, y }}
      className="flex-shrink-0 w-[500px] lg:w-[600px] h-[400px] relative"
    >
      <motion.div
        style={{ opacity: glowOpacity }}
        className={`absolute inset-0 rounded-2xl blur-2xl ${colors.bg} opacity-20`}
      />
      
      <div className={`relative h-full bg-card rounded-2xl border ${colors.border} p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl ${colors.glow}`}>
        <div>
          <div className="flex items-center justify-between mb-6">
            <motion.div 
              style={{ scale: useTransform(scrollYProgress, [cardStart, cardCenter, cardEnd], [0.9, 1.1, 0.9]) }}
              className={`p-4 rounded-xl ${colors.bg}`}
            >
              <useCase.icon className="w-8 h-8 text-white" />
            </motion.div>
            <span className={`text-sm font-bold px-4 py-2 rounded-full ${colors.bg} text-white`}>
              {useCase.tag}
            </span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {useCase.title}
          </h3>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {useCase.description}
          </p>
        </div>
        
        <motion.div
          style={{ opacity: glowOpacity }}
          className="flex items-center gap-3 pt-6 border-t border-border/50"
        >
          <div className={`w-2 h-2 rounded-full ${colors.bg}`} />
          <span className="text-sm font-medium text-muted-foreground">
            {useCase.feature}
          </span>
        </motion.div>
        
        <div className="absolute bottom-4 right-4 text-6xl font-bold text-muted/10">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
    </motion.div>
  );
}

export function UseCasesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  // Always call hooks unconditionally
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `-${(useCases.length - 0.5) * 550}px`]
  );
  
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.3]);
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);
  
  // Pre-compute CTA animations
  const ctaScale = useTransform(scrollYProgress, [0.9, 1], [0.9, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0.85, 1], [0.5, 1]);
  
  // Pre-compute scroll hint opacity
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0.6, 0.6, 0]);
  
  // Pre-compute dot animations
  const dotAnimations = useCases.map((_, index) => ({
    scale: useTransform(
      scrollYProgress,
      [index / useCases.length, (index + 0.5) / useCases.length, (index + 1) / useCases.length],
      [1, 1.5, 1]
    ),
    opacity: useTransform(
      scrollYProgress,
      [index / useCases.length, (index + 0.5) / useCases.length, (index + 1) / useCases.length],
      [0.3, 1, 0.3]
    ),
  }));

  // Mobile: vertical stacked layout
  if (isMobile) {
    return (
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-sm font-medium text-primary mb-2 uppercase tracking-wider">
              Use Cases
            </span>
            <h2 className="text-2xl font-bold text-foreground">
              What we build
            </h2>
          </motion.div>

          <div className="space-y-4 max-w-lg mx-auto">
            {useCases.map((useCase, index) => (
              <MobileCard key={useCase.title} useCase={useCase} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
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

  // Desktop: horizontal scroll
  return (
    <div 
      ref={containerRef} 
      className="relative bg-secondary/30"
      style={{ height: `${useCases.length * 100}vh` }}
    >
      <section className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-border/30 z-20">
          <motion.div 
            className="h-full bg-gradient-to-r from-google-blue via-google-green to-google-yellow"
            style={{ width: progressWidth }}
          />
        </div>

        <motion.div 
          style={{ opacity: headerOpacity, scale: headerScale }}
          className="absolute top-8 left-0 right-0 z-10 text-center px-4 pt-8"
        >
          <span className="inline-block text-sm font-medium text-primary mb-2 uppercase tracking-wider">
            Use Cases
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            What we build
          </h2>
        </motion.div>

        <div className="h-full flex items-center">
          <motion.div
            style={{ x }}
            className="flex gap-8 pl-[10vw]"
          >
            {useCases.map((useCase, index) => (
              <HorizontalCard
                key={useCase.title}
                useCase={useCase}
                index={index}
                scrollYProgress={scrollYProgress}
                total={useCases.length}
              />
            ))}
            
            <motion.div
              style={{
                scale: ctaScale,
                opacity: ctaOpacity,
              }}
              className="flex-shrink-0 w-[500px] lg:w-[600px] h-[400px] flex items-center justify-center"
            >
              <div className="text-center p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to build?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss your use case
                </p>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
                >
                  Get started →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-muted-foreground text-sm"
          style={{ opacity: scrollHintOpacity }}
        >
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg"
          >
            →
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>

        <div className="absolute bottom-8 right-8 flex gap-2">
          {useCases.map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-muted-foreground/30"
              style={{
                scale: dotAnimations[index].scale,
                opacity: dotAnimations[index].opacity,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
