import { PageLayout } from '@/components/layout/PageLayout';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Calendar, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <PageLayout>
      <SEO
        title="Contact"
        description="Get in touch with C4 for AI and cloud infrastructure consulting. Book a free consultation or send us a message."
        canonical="/contact"
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
            <h1 className="text-4xl md:text-display-lg font-bold text-foreground mb-6">
              Let's talk
            </h1>
            <p className="text-lg text-muted-foreground">
              Schedule a free consultation to discuss your AI and cloud infrastructure needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-google-blue/10 mb-6">
                <Calendar className="w-7 h-7 text-google-blue" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Book a Call
              </h3>
              <p className="text-muted-foreground mb-6">
                30-minute consultation to discuss your project
              </p>
              <Button asChild className="w-full">
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Schedule Now
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 border border-border text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-google-green/10 mb-6">
                <Mail className="w-7 h-7 text-google-green" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Email Us
              </h3>
              <p className="text-muted-foreground mb-6">
                Send us a message and we'll respond within 24 hours
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:hello@c4.cloud">
                  hello@c4.cloud
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-2xl p-8 border border-border text-center"
            >
              <div className="inline-flex p-4 rounded-xl bg-google-yellow/10 mb-6">
                <MessageSquare className="w-7 h-7 text-google-yellow" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Start a Project
              </h3>
              <p className="text-muted-foreground mb-6">
                Ready to begin? Tell us about your requirements
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href="mailto:hello@c4.cloud?subject=New Project Inquiry">
                  Get Started
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
                Common Questions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Before you reach out, here are answers to frequently asked questions:
              </p>
              <div className="text-left space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    What size companies do you work with?
                  </h3>
                  <p className="text-muted-foreground">
                    We focus on mid-market companies (50-500 employees) that need enterprise-grade
                    infrastructure without enterprise-grade bureaucracy.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    How long does a typical engagement take?
                  </h3>
                  <p className="text-muted-foreground">
                    Most projects range from 2-8 weeks depending on scope. We work in sprints with
                    clear milestones and deliverables.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Do you only work with Google Cloud?
                  </h3>
                  <p className="text-muted-foreground">
                    Yes, we specialize exclusively in Google Cloud to deliver the deepest possible expertise.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
