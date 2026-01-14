import { PageLayout } from '@/components/layout/PageLayout';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { industries } from '@/data/industries';

export default function IndustriesPage() {
  return (
    <PageLayout>
      <SEO
        title="Industries"
        description="Industry-specific AI and cloud solutions for SaaS, healthcare, fintech, media, and operations."
        canonical="/industries"
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
              Industries
            </span>
            <h1 className="text-4xl md:text-display-lg font-bold text-foreground mb-6">
              Solutions tailored to your industry
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We understand the unique challenges, compliance requirements, and opportunities in your industry. Our solutions are built with your specific needs in mind.
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

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industries.map((industry, index) => {
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
                    className="group block bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {industry.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    {/* Key Challenges Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Challenges:</h4>
                      <ul className="space-y-2">
                        {industry.challenges.slice(0, 3).map((challenge, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Compliance Badge */}
                    {industry.compliance.length > 0 && (
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {industry.compliance.slice(0, 3).map((cert, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground"
                            >
                              {cert}
                            </span>
                          ))}
                          {industry.compliance.length > 3 && (
                            <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                              +{industry.compliance.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Case Study Highlight */}
                    {industry.caseStudyHighlight && (
                      <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                        <p className="text-xs font-semibold text-primary mb-1">
                          {industry.caseStudyHighlight.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {industry.caseStudyHighlight.result}
                        </p>
                      </div>
                    )}

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
              Don't see your industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We work with companies across many industries. Let's discuss your specific needs and challenges.
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
