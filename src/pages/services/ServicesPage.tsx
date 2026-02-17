import { PageLayout } from '@/components/layout/PageLayout';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { BookingDialog } from '@/components/BookingDialog';

export default function ServicesPage() {
  return (
    <PageLayout>
      <SEO
        title="Services"
        description="AI & Automation, Data Platforms, Cloud Foundations, Security, and Optimization services on Google Cloud."
        canonical="/services"
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-display-lg font-bold text-foreground mb-6">
              Full-stack AI & cloud expertise
            </h1>
            <p className="text-lg text-muted-foreground">
              From AI strategy to production deployment, we handle the entire journey on Google Cloud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group block bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-${service.color}/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-7 h-7 text-${service.color}`} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {service.description}
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
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free 30-minute consultation to discuss your needs.
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
