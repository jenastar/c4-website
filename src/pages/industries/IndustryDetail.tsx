import { PageLayout } from '@/components/layout/PageLayout';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SEO } from '@/components/SEO';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, ArrowLeft, Shield } from 'lucide-react';
import { getIndustryBySlug, industries } from '@/data/industries';
import { BookingDialog } from '@/components/BookingDialog';

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustryBySlug(slug) : undefined;

  const challengesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: challengesProgress } = useScroll({
    target: challengesRef,
    offset: ["start end", "end start"],
  });

  if (!industry) {
    return (
      <PageLayout>
        <div className="container px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Industry not found</h1>
          <Button asChild>
            <Link to="/industries">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Industries
            </Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const Icon = industry.icon;

  return (
    <PageLayout>
      <SEO
        title={industry.title}
        description={industry.description}
        canonical={`/industries/${industry.slug}`}
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
              to="/industries"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Industries
            </Link>

            <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6">
              <Icon className="w-10 h-10 text-primary" />
            </div>

            <h1 className="text-4xl md:text-display-lg font-bold text-foreground mb-6">
              {industry.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {industry.description}
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

      {/* Challenges & Solutions Split */}
      <section ref={challengesRef} className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Challenges */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
                  Industry challenges
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common obstacles we help you overcome
                </p>
              </motion.div>

              <div className="space-y-4">
                {industry.challenges.map((challenge, index) => {
                  const startReveal = 0.1 + index * 0.05;
                  const endReveal = startReveal + 0.2;

                  const opacity = useTransform(
                    challengesProgress,
                    [startReveal, endReveal],
                    [0, 1]
                  );

                  const x = useTransform(
                    challengesProgress,
                    [startReveal, endReveal],
                    [-20, 0]
                  );

                  return (
                    <motion.div
                      key={index}
                      style={{ opacity, x }}
                      className="bg-card rounded-xl p-6 border border-border"
                    >
                      <p className="text-foreground">{challenge}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
                  Our solutions
                </h2>
                <p className="text-lg text-muted-foreground">
                  How we help you succeed
                </p>
              </motion.div>

              <div className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-foreground">{solution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
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
              <div className="inline-flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-display-sm font-bold text-foreground">
                  Compliance & Security
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                We build solutions that meet your industry's regulatory requirements
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4 justify-center">
              {industry.compliance.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card rounded-lg px-6 py-4 border border-border hover:border-primary/50 transition-colors"
                >
                  <span className="text-foreground font-semibold">{cert}</span>
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
              {industry.useCases.map((useCase, index) => (
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
                Technologies for {industry.title.toLowerCase()}
              </h2>
            </motion.div>

            <div className="flex flex-wrap gap-3 justify-center">
              {industry.technologies.map((tech, index) => (
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

      {/* Case Study Highlight */}
      {industry.caseStudyHighlight && (
        <section className="py-20 bg-background">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20"
            >
              <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
                Success Story
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {industry.caseStudyHighlight.title}
              </h3>
              <p className="text-xl text-foreground">
                {industry.caseStudyHighlight.result}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Industries */}
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
              Other industries we serve
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries
              .filter(i => i.slug !== industry.slug)
              .map((relatedIndustry, index) => {
                const RelatedIcon = relatedIndustry.icon;
                return (
                  <motion.div
                    key={relatedIndustry.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/industries/${relatedIndustry.slug}`}
                      className="group block bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full"
                    >
                      <RelatedIcon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {relatedIndustry.title}
                      </h3>
                      <div className="flex items-center text-primary font-medium text-sm">
                        Learn more
                        <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
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
              Ready to transform your {industry.title.toLowerCase()}?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free 30-minute consultation to discuss your specific challenges and opportunities.
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
