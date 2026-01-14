import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { PageLoader } from "@/components/common/PageLoader";

// Lazy load pages for better performance
const ServicesPage = lazy(() => import("./pages/services/ServicesPage"));
const AIAutomationPage = lazy(() => import("./pages/services/AIAutomationPage"));
const DataPlatformsPage = lazy(() => import("./pages/services/DataPlatformsPage"));
const CloudFoundationsPage = lazy(() => import("./pages/services/CloudFoundationsPage"));
const SecurityGovernancePage = lazy(() => import("./pages/services/SecurityGovernancePage"));
const OptimizationPage = lazy(() => import("./pages/services/OptimizationPage"));
const AISolutionsPage = lazy(() => import("./pages/ai-solutions/AISolutionsPage"));
const AISolutionDetail = lazy(() => import("./pages/ai-solutions/AISolutionDetail"));
const IndustriesPage = lazy(() => import("./pages/industries/IndustriesPage"));
const IndustryDetail = lazy(() => import("./pages/industries/IndustryDetail"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />

              {/* Services */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/ai-automation" element={<AIAutomationPage />} />
              <Route path="/services/data-platforms" element={<DataPlatformsPage />} />
              <Route path="/services/cloud-foundations" element={<CloudFoundationsPage />} />
              <Route path="/services/security-governance" element={<SecurityGovernancePage />} />
              <Route path="/services/optimization" element={<OptimizationPage />} />

              {/* AI Solutions */}
              <Route path="/ai-solutions" element={<AISolutionsPage />} />
              <Route path="/ai-solutions/:slug" element={<AISolutionDetail />} />

              {/* Industries */}
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/industries/:slug" element={<IndustryDetail />} />

              {/* Other Pages */}
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Catch-all 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
