import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Heart, DollarSign, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredIndustries = [
  {
    slug: 'saas-b2b',
    title: 'SaaS & B2B',
    icon: Building2,
    description: 'Analytics, AI features, and cost optimization for scaling platforms',
    highlight: 'Reduced query costs by 60%',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    icon: Heart,
    description: 'HIPAA-compliant AI and data platforms for providers and payers',
    highlight: 'Search time: 30min → 2min',
  },
  {
    slug: 'fintech',
    title: 'Fintech',
    icon: DollarSign,
    description: 'Real-time fraud detection and secure payment infrastructure',
    highlight: 'Fraud detected in <100ms',
  },
  {
    slug: 'media-analytics',
    title: 'Media',
    icon: TrendingUp,
    description: 'Personalization and recommendation systems at scale',
    highlight: '+35% engagement increase',
  },
];

export function FeaturedIndustries() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Industries
          </span>
          <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
            Built for your industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            We understand your compliance requirements, challenges, and opportunities. Our solutions are tailored to your specific industry needs.
          </p>
          <Button variant="outline" asChild>
            <Link to="/industries">
              View all industries
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {featuredIndustries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/industries/${industry.slug}`}
                  className="group block bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full flex flex-col"
                >
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {industry.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="bg-primary/5 rounded-lg p-3 mb-4">
                      <p className="text-xs font-semibold text-primary">
                        {industry.highlight}
                      </p>
                    </div>

                    <div className="flex items-center text-primary font-medium text-sm">
                      Learn more
                      <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
