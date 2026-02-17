import { PageLayout } from '@/components/layout/PageLayout';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SEO } from '@/components/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ArrowLeft } from 'lucide-react';
import { getAISolutionBySlug, aiSolutions } from '@/data/aiSolutions';
import { BookingDialog } from '@/components/BookingDialog';

export default function AISolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? getAISolutionBySlug(slug) : undefined;

  const benefitsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: benefitsProgress } = useScroll({
    target: benefitsRef,
    offset: ["start end", "end start"],
  });

  if (!solution) {
    return (
      <PageLayout>
        <div className="container px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Solution not found</h1>
          <Button asChild>
            <Link to="/ai-solutions">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to AI Solutions
            </Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SEO
        title={solution.title}
        description={solution.description}
        canonical={`/ai-solutions/${solution.slug}`}
      />
      <Breadcrumb />

      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/ai-solutions"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to AI Solutions
            </Link>

            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {solution.category}
            </div>

            <h1 className="text-4xl md:text-display-lg font-bold text-foreground mb-6">
              {solution.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-4">
              {solution.tagline}
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              {solution.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <BookingDialog>
                <Button size="lg">
                  Schedule a call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </BookingDialog>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits with Scroll Reveal */}
      <section ref={benefitsRef} className="py-20 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
              Key benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What you can expect from this solution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {solution.benefits.map((benefit, index) => {
              const startReveal = 0.1 + index * 0.05;
              const endReveal = startReveal + 0.2;

              const opacity = useTransform(
                benefitsProgress,
                [startReveal, endReveal],
                [0, 1]
              );

              const y = useTransform(
                benefitsProgress,
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
                    <p className="text-foreground">{benefit}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Approach */}
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
                How we build it
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <p className="text-foreground text-lg leading-relaxed">
                {solution.technicalApproach}
              </p>
            </motion.div>
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
              {solution.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{useCase}</p>
                  </div>
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
              {solution.technologies.map((tech, index) => (
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

      {/* Timeline & Related Services */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">
                Typical timeline
              </h3>
              <p className="text-3xl font-bold text-primary">
                {solution.timeline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                Related services
              </h3>
              <div className="space-y-2">
                {solution.relatedServices.map((serviceSlug, index) => (
                  <Link
                    key={index}
                    to={`/services/${serviceSlug}`}
                    className="block text-primary hover:underline"
                  >
                    {serviceSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
              Other {solution.category.toLowerCase()} solutions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiSolutions
              .filter(s => s.category === solution.category && s.slug !== solution.slug)
              .slice(0, 3)
              .map((relatedSolution, index) => (
                <motion.div
                  key={relatedSolution.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/ai-solutions/${relatedSolution.slug}`}
                    className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {relatedSolution.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {relatedSolution.tagline}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
              Ready to implement {solution.title}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free 30-minute consultation to discuss your specific needs.
            </p>
            <BookingDialog>
              <Button size="lg">
                Schedule a call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </BookingDialog>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
