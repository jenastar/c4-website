import { PageLayout } from '@/components/layout/PageLayout';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SEO } from '@/components/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { getServiceBySlug } from '@/data/services';

export default function DataPlatformsPage() {
  const service = getServiceBySlug('data-platforms');

  if (!service) {
    return <div>Service not found</div>;
  }

  const featuresRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: featuresProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"],
  });

  const Icon = service.icon;

  return (
    <PageLayout>
      <SEO
        title={service.title}
        description={service.description}
        canonical={`/services/${service.slug}`}
      />
      <Breadcrumb />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className={`inline-flex p-6 rounded-2xl bg-${service.color}/10 mb-6`}>
              <Icon className={`w-12 h-12 text-${service.color}`} />
            </div>

            <h1 className="text-4xl md:text-display-lg font-bold text-foreground mb-6">
              {service.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-4">
              {service.tagline}
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {service.longDescription}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Schedule a call
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

      {/* Features Grid with Scroll Reveal */}
      <section ref={featuresRef} className="py-20 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
              What we deliver
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive data platform solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.features.map((feature, index) => {
              const startReveal = 0.1 + index * 0.05;
              const endReveal = startReveal + 0.2;

              const opacity = useTransform(
                featuresProgress,
                [startReveal, endReveal],
                [0, 1]
              );

              const y = useTransform(
                featuresProgress,
                [startReveal, endReveal],
                [20, 0]
              );

              return (
                <motion.div
                  key={index}
                  style={{ opacity, y }}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{feature}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
                What you get
              </h2>
              <p className="text-lg text-muted-foreground">
                Timeline: {service.timeline}
              </p>
            </motion.div>

            <div className="space-y-4">
              {service.deliverables.map((deliverable, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground text-lg">{deliverable}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
                How we measure success
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {service.successMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20"
                >
                  <p className="text-foreground font-medium text-lg">{metric}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
                Technologies we use
              </h2>
            </motion.div>

            <div className="flex flex-wrap gap-3 justify-center">
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card rounded-lg px-5 py-3 border border-border hover:border-primary/50 transition-colors"
                >
                  <span className="text-foreground font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
                Common use cases
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {service.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <p className="text-foreground">{useCase}</p>
                </motion.div>
              ))}
            </div>
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
              Ready to build your data platform?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free 30-minute consultation to discuss your specific needs.
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
