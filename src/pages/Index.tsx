import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyC4Section } from "@/components/sections/WhyC4Section";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <OutcomesSection />
        <ServicesSection />
        <UseCasesSection />
        <PackagesSection />
        <section id="process">
          <ProcessSection />
        </section>
        <section id="about">
          <WhyC4Section />
        </section>
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
