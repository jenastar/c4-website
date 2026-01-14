import { PageLayout } from '@/components/layout/PageLayout';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield } from 'lucide-react';

const principles = [
  {
    icon: Target,
    title: 'Architecture First',
    description: 'We start with solid foundations, not shortcuts.',
  },
  {
    icon: Users,
    title: 'Team Enablement',
    description: 'We don\'t just build—we teach your team to own it.',
  },
  {
    icon: Zap,
    title: 'Speed to Value',
    description: 'Working systems in weeks, not quarters.',
  },
  {
    icon: Shield,
    title: 'Enterprise Grade',
    description: 'Security and governance baked in from day one.',
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <SEO
        title="About"
        description="C4 helps mid-market teams implement production-ready AI and cloud infrastructure on Google Cloud."
        canonical="/about"
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
              About C4
            </h1>
            <p className="text-lg text-muted-foreground">
              We help mid-market teams implement production-ready AI and cloud infrastructure on Google Cloud.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  C4 (Cortext Cloud Computing Corporation) was founded on the belief that mid-market companies
                  shouldn't need to hire an entire platoon to implement AI and cloud infrastructure.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We combine deep Google Cloud expertise with a pragmatic, architecture-first approach to
                  deliver production-ready systems in weeks—not quarters.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
                Our Principles
              </h2>
              <p className="text-lg text-muted-foreground">
                How we approach every engagement
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border"
                >
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6">
                    <principle.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Badge */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-google-green animate-pulse" />
              <span className="text-sm font-medium">Google Cloud Partner</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As a Google Cloud partner, we have direct access to the latest AI and infrastructure
              capabilities, plus dedicated support for enterprise deployments.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
