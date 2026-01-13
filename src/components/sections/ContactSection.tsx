import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual backend call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-4 uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-display-sm font-bold text-foreground mb-4">
              Contact us
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a question or want to discuss a project? Send us a message.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 px-8 bg-card rounded-2xl border border-border"
              >
                <div className="inline-flex p-4 rounded-full bg-google-green/10 mb-6">
                  <CheckCircle className="w-12 h-12 text-google-green" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Message sent!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl border border-border p-8 space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or question..."
                    required
                    className="min-h-[150px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
