import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { SignInPage } from "./components/ui/sign-in";

import { jakarta } from "./components/sections/shared";

export default function App() {
  const [currentView, setCurrentView] = useState<"landing" | "signin">("landing");

  const openSignIn = () => {
    setCurrentView("signin");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeSignIn = () => {
    setCurrentView("landing");
  };

  return (
    <div className="min-h-screen bg-[#06060F]" style={{ ...jakarta, scrollBehavior: "smooth" }}>
      <AnimatePresence mode="wait">
        {currentView === "landing" ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Nav onSignInClick={openSignIn} />
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
            <Footer onSignInClick={openSignIn} />
          </motion.div>
        ) : (
          <motion.div
            key="signin"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <SignInPage onBackToHome={closeSignIn} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
