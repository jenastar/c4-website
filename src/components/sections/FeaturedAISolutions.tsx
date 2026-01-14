import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Brain, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredSolutions = [
  {
    slug: 'ai-copilots',
    title: 'AI Copilots',
    icon: Bot,
    tagline: 'Accelerate team productivity with AI assistants',
    gradient: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20',
  },
  {
    slug: 'knowledge-search',
    title: 'Knowledge Search',
    icon: Brain,
    tagline: 'Find information instantly with semantic search',
    gradient: 'from-purple-500/10 to-pink-500/10 border-purple-500/20',
  },
  {
    slug: 'predictive-analytics',
    title: 'Predictive Analytics',
    icon: Zap,
    tagline: 'Forecast outcomes with ML models',
    gradient: 'from-green-500/10 to-emerald-500/10 border-green-500/20',
  },
];

export function FeaturedAISolutions() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            AI Solutions
          </span>
          <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
            Production-ready AI that works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            From copilots to predictive analytics, we build AI systems that integrate with your workflows and deliver measurable results.
          </p>
          <Button variant="outline" asChild>
            <Link to="/ai-solutions">
              View all 8 solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredSolutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/ai-solutions/${solution.slug}`}
                  className={`group block bg-gradient-to-br ${solution.gradient} rounded-2xl p-8 border transition-all duration-300 hover:shadow-lg h-full`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-background/50">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {solution.tagline}
                  </p>

                  <div className="flex items-center text-primary font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
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
