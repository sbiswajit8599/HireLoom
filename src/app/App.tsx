import Nav from "./components/sections/Nav";
import HeroSection from "./components/sections/HeroSection";
import TrustedBySection from "./components/sections/TrustedBySection";
import ProblemSection from "./components/sections/ProblemSection";
import SolutionSection from "./components/sections/SolutionSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import ProductShowcaseSection from "./components/sections/ProductShowcaseSection";
import AIScreeningSection from "./components/sections/AIScreeningSection";
import ComparisonSection from "./components/sections/ComparisonSection";
import SecuritySection from "./components/sections/SecuritySection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import PricingSection from "./components/sections/PricingSection";
import FAQSection from "./components/sections/FAQSection";
import CTASection from "./components/sections/CTASection";
import Footer from "./components/sections/Footer";

import { jakarta } from "./components/sections/shared";

export default function App() {
  return (
    <div className="min-h-screen bg-[#06060F]" style={{ ...jakarta, scrollBehavior: "smooth" }}>
      <Nav />
      <main className="relative z-10 bg-white rounded-b-[40px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden">
        <HeroSection />
        <TrustedBySection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ProductShowcaseSection />
        <AIScreeningSection />
        <ComparisonSection />
        <SecuritySection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
