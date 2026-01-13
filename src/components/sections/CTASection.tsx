import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  const calendlyUrl = "https://calendly.com";

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 bg-gradient-to-br from-google-blue via-primary to-google-green"
      />
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="white" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-display-sm lg:text-display-md font-bold text-white mb-6 text-balance">
              Ready to implement AI safely—and make it real?
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Book a 30-minute call to discuss your AI and cloud goals. No sales pitch—just a conversation about what's possible.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-white text-primary hover:bg-white/90 text-base px-8 py-6 shadow-xl"
              >
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a 30-minute consult
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <a href="#contact">
                  Or send a message
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -left-20 w-64 h-64"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full animate-float-slow">
          <circle cx="100" cy="100" r="80" fill="white" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -bottom-32 -right-32 w-96 h-96"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full animate-float">
          <rect x="20" y="20" width="160" height="160" rx="20" fill="white" transform="rotate(15 100 100)" />
        </svg>
      </motion.div>
    </section>
  );
}
