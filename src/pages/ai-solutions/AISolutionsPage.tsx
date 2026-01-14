import { PageLayout } from '@/components/layout/PageLayout';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Brain, Zap, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { aiSolutions, getAISolutionsByCategory } from '@/data/aiSolutions';

const categoryIcons = {
  'Automation': Bot,
  'Intelligence': Brain,
  'Analytics': Zap,
  'Infrastructure': Database,
};

const categoryColors = {
  'Automation': 'from-blue-500/10 to-cyan-500/10 border-blue-500/20',
  'Intelligence': 'from-purple-500/10 to-pink-500/10 border-purple-500/20',
  'Analytics': 'from-green-500/10 to-emerald-500/10 border-green-500/20',
  'Infrastructure': 'from-orange-500/10 to-yellow-500/10 border-orange-500/20',
};

export default function AISolutionsPage() {
  const categories = ['Automation', 'Intelligence', 'Analytics', 'Infrastructure'] as const;

  return (
    <PageLayout>
      <SEO
        title="AI Solutions"
        description="Production-ready AI solutions: copilots, knowledge search, workflow automation, and more. Built on Google Cloud's Vertex AI."
        canonical="/ai-solutions"
      />
      <Breadcrumb />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
              AI Solutions
            </span>
            <h1 className="text-4xl md:text-display-lg font-bold text-foreground mb-6">
              Production-ready AI that integrates with your workflows
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From AI copilots to predictive analytics, we build and deploy AI systems that solve real business problems on Google Cloud.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Schedule a consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions by Category */}
      {categories.map((category, categoryIndex) => {
        const solutions = getAISolutionsByCategory(category);
        if (solutions.length === 0) return null;

        const Icon = categoryIcons[category];
        const colorClass = categoryColors[category];

        return (
          <section key={category} className={categoryIndex % 2 === 0 ? 'py-20 bg-background' : 'py-20 bg-secondary/30'}>
            <div className="container px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-display-sm font-bold text-foreground">
                    {category}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {category === 'Automation' && 'Reduce manual work and accelerate team productivity'}
                  {category === 'Intelligence' && 'Extract insights and knowledge from your data'}
                  {category === 'Analytics' && 'Predict outcomes and optimize decisions'}
                  {category === 'Infrastructure' && 'Scalable foundations for AI workloads'}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={solution.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/ai-solutions/${solution.slug}`}
                      className={`group block bg-gradient-to-br ${colorClass} rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg h-full`}
                    >
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {solution.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        {solution.tagline}
                      </p>

                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {solution.description}
                      </p>

                      <div className="flex items-center text-primary font-medium">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>

                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          Timeline: {solution.timeline}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
              Not sure which solution fits your needs?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free consultation and we'll help you identify the right AI solutions for your business.
            </p>
            <Button size="lg" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Schedule a call
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
