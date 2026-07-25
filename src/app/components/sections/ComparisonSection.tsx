import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  SlidersHorizontal,
  Check,
  X,
  Scale,
  Brain,
  Video,
  Lock,
} from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";
import { BGPattern } from "../ui/bg-pattern";

interface ComparisonFeature {
  id: string;
  category: "ai-speed" | "transparency" | "compliance";
  feature: string;
  subtitle: string;
  legacyText: string;
  legacyDetail: string;
  hireloomText: string;
  hireloomDetail: string;
  badge: string;
  icon: typeof Sparkles;
}

export default function ComparisonSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [mobileView, setMobileView] = useState<"hireloom" | "legacy">("hireloom");

  const categories = [
    { id: "all", label: "All Capabilities" },
    { id: "ai-speed", label: "AI & Velocity" },
    { id: "transparency", label: "Accuracy & Evidence" },
    { id: "compliance", label: "Trust & Compliance" },
  ];

  const features: ComparisonFeature[] = [
    {
      id: "matching",
      category: "ai-speed",
      feature: "Candidate Matching",
      subtitle: "Depth & skills context analysis",
      legacyText: "Keyword filters",
      legacyDetail: "Rigid keyword scanning; misses qualified candidate depth & experience",
      hireloomText: "Semantic AI matching",
      hireloomDetail: "Context-aware skill extraction & multidimensional role fit scoring",
      badge: "Semantic Engine",
      icon: Brain,
    },
    {
      id: "interviews",
      category: "ai-speed",
      feature: "Video Pre-screening",
      subtitle: "Asynchronous applicant evaluation",
      legacyText: "Manual scheduling",
      legacyDetail: "Endless email back-and-forth; delayed time-to-first-interview",
      hireloomText: "Async AI video interviews",
      hireloomDetail: "Standardized role-specific questions recorded 24/7 on candidate schedule",
      badge: "24/7 Automated",
      icon: Video,
    },
    {
      id: "transparency",
      category: "transparency",
      feature: "Decision Transparency",
      subtitle: "Scorecard reasoning & proof",
      legacyText: "Black-box scoring",
      legacyDetail: "Arbitrary pass/fail ratings with no audit trail or supporting quotes",
      hireloomText: "Explainable scorecards",
      hireloomDetail: "Verifiable evidence quotes, strengths breakdown & objective signals",
      badge: "100% Audit-Ready",
      icon: Sparkles,
    },
    {
      id: "time-to-screen",
      category: "ai-speed",
      feature: "Time to Screen",
      subtitle: "Application to recruiter shortlist",
      legacyText: "5–10 business days",
      legacyDetail: "Heavy manual resume review causing high applicant drop-off rates",
      hireloomText: "Under 24 hours",
      hireloomDetail: "Instant candidate scoring & immediate automated recruiter routing",
      badge: "10x Velocity",
      icon: Zap,
    },
    {
      id: "bias",
      category: "transparency",
      feature: "Bias Reduction",
      subtitle: "Objective evaluation standards",
      legacyText: "Interviewer dependent",
      legacyDetail: "Unconscious bias, inconsistent scoring rubrics & subjective gut-feel",
      hireloomText: "Structured AI rubrics",
      hireloomDetail: "Competency-anchored evaluation with zero keyword filter discrimination",
      badge: "EEOC Compliant",
      icon: Scale,
    },
    {
      id: "analytics",
      category: "transparency",
      feature: "Hiring Analytics",
      subtitle: "Pipeline visibility & quality signals",
      legacyText: "Basic CSV exports",
      legacyDetail: "Disconnected spreadsheets & delayed retrospective hiring reports",
      hireloomText: "Real-time intelligence",
      hireloomDetail: "Predictive hiring quality score, conversion metrics & funnel insights",
      badge: "Live Dashboard",
      icon: TrendingUp,
    },
    {
      id: "collaboration",
      category: "compliance",
      feature: "Team Collaboration",
      subtitle: "Cross-functional reviewer feedback",
      legacyText: "Email & spreadsheets",
      legacyDetail: "Scattered feedback notes, lost candidate links & siloed decisions",
      hireloomText: "Shared pipeline workspace",
      hireloomDetail: "Role-based reviewer access with inline evidence discussion threads",
      badge: "Unified Hub",
      icon: SlidersHorizontal,
    },
    {
      id: "compliance",
      category: "compliance",
      feature: "Enterprise Compliance",
      subtitle: "Data governance & privacy standards",
      legacyText: "Manual audit prep",
      legacyDetail: "High regulatory risk & labor-intensive compliance documentation",
      hireloomText: "Automated audit logs",
      hireloomDetail: "Built-in GDPR data residency & immutable EEOC audit trails",
      badge: "SOC 2 Type II",
      icon: Lock,
    },
  ];

  const filteredFeatures =
    activeCategory === "all"
      ? features
      : features.filter((item) => item.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-[#F9F9FB] via-white to-[#F4F0FF]/30 relative overflow-hidden">
      {/* Accent Dot Pattern Background */}
      <BGPattern
        variant="dots"
        mask="fade-center"
        fill="rgba(128, 40, 228, 0.8)"
        size={24}
        className="opacity-50 pointer-events-none"
      />

      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#8028E4]/[0.04] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#A855F7]/[0.03] blur-[90px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div {...fadeUp(0)} className="text-center max-w-2xl mx-auto mb-12">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8028E4]/[0.08] border border-[#8028E4]/20 text-[12px] font-semibold uppercase tracking-widest text-[#8028E4] mb-4 shadow-sm"
            style={inter}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8028E4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8028E4]"></span>
            </span>
            <span>Why HireLoom</span>
          </div>

          <h2
            className="text-[2.25rem] sm:text-[2.75rem] font-extrabold tracking-[-1px] text-[#0A0A14] leading-[1.15] mb-4"
            style={jakarta}
          >
            Not just another ATS,{" "} <br />
            <span className="bg-gradient-to-r from-[#8028E4] via-[#A855F7] to-[#3F0086] bg-clip-text text-transparent">
              Built for outcomes.
            </span>
          </h2>

          <p className="text-[1.05rem] text-[#4A4A60] leading-relaxed" style={inter}>
            Traditional applicant tracking systems were designed for administration and record-keeping.
            HireLoom was engineered to predict, screen, and convert top 1% talent.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div {...fadeUp(0.1)} className="flex items-center justify-center mb-10">
          <div className="inline-flex items-center p-1.5 rounded-xl bg-[#F0E6FF]/50 border border-[#8028E4]/15 backdrop-blur-md gap-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#8028E4]"
                      : "text-[#6B6B80] hover:text-[#0A0A14]"
                  }`}
                  style={inter}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeComparisonTab"
                      className="absolute inset-0 bg-white rounded-lg shadow-sm border border-[#8028E4]/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile View Toggle Switch (Shown only on small screens) */}
        <div className="block md:hidden mb-6">
          <div className="grid grid-cols-2 rounded-xl bg-gray-100 p-1 border border-black/5">
            <button
              onClick={() => setMobileView("legacy")}
              className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                mobileView === "legacy"
                  ? "bg-white text-gray-700 shadow-sm"
                  : "text-gray-500"
              }`}
              style={inter}
            >
              <XCircle size={14} className="text-gray-400" /> Traditional ATS
            </button>
            <button
              onClick={() => setMobileView("hireloom")}
              className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                mobileView === "hireloom"
                  ? "bg-[#8028E4] text-white shadow-md shadow-[#8028E4]/25"
                  : "text-gray-500"
              }`}
              style={inter}
            >
              <Sparkles size={14} className="text-yellow-300" /> HireLoom AI
            </button>
          </div>
        </div>

        {/* Comparison Container (Desktop Matrix & Mobile View) */}
        <motion.div
          {...fadeUp(0.15)}
          className="rounded-2xl overflow-hidden border border-[#8028E4]/15 shadow-[0_12px_40px_rgba(128,40,228,0.06)] bg-white relative"
        >
          {/* Header Row (Desktop) */}
          <div className="hidden md:grid grid-cols-12 bg-[#FAFAFC] border-b border-black/[0.08] items-center text-[12.5px] font-bold uppercase tracking-wider text-[#9999AA]" style={inter}>
            <div className="col-span-5 px-6 py-4">
              <span>Capability & Workflow</span>
            </div>
            <div className="col-span-3 px-6 py-4 border-l border-black/[0.06] text-center bg-gray-50/50">
              <span className="text-gray-500 flex items-center justify-center gap-1.5 whitespace-nowrap">
                <XCircle size={15} className="text-gray-400" /> Traditional ATS
              </span>
            </div>
            <div className="col-span-4 px-6 py-4 border-l border-[#8028E4]/30 bg-gradient-to-r from-[#F4F0FF] to-[#EDE0FF] text-center text-[#8028E4] relative shadow-inner">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#8028E4] to-[#A855F7]" />
              <span className="flex items-center justify-center gap-1.5 text-[13px] font-extrabold tracking-wide flex-wrap">
                <Sparkles size={15} className="text-[#8028E4] flex-shrink-0" />
                <span>HireLoom OS</span>
                <span className="ml-1 px-2 py-0.5 rounded-full text-[10px] bg-[#8028E4] text-white font-bold tracking-normal uppercase flex-shrink-0">
                  AI Native
                </span>
              </span>
            </div>
          </div>

          {/* Matrix Rows Container */}
          <div className="divide-y divide-black/[0.05]">
            <AnimatePresence mode="wait">
              {filteredFeatures.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, delay: index * 0.03 }}
                    className="group hover:bg-[#F9F8FF]/80 transition-colors duration-150"
                  >
                    {/* DESKTOP LAYOUT (md and up) */}
                    <div className="hidden md:grid grid-cols-12 items-stretch min-h-[82px]">
                      {/* Feature Name & Description */}
                      <div className="col-span-5 px-6 py-4.5 flex items-center gap-3.5">
                        <div className="p-2.5 rounded-xl bg-[#F4F0FF] text-[#8028E4] group-hover:bg-[#8028E4] group-hover:text-white transition-colors duration-200 flex-shrink-0">
                          <IconComponent size={18} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[14.5px] font-bold text-[#0A0A14]" style={jakarta}>
                              {item.feature}
                            </span>
                          </div>
                          <p className="text-[12.5px] text-[#6B6B80] mt-0.5 leading-snug" style={inter}>
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Traditional ATS Column */}
                      <div className="col-span-3 px-6 py-4.5 border-l border-black/[0.06] bg-gray-50/30 group-hover:bg-gray-50/60 transition-colors flex flex-col justify-center gap-1">
                        <div className="flex items-center gap-2">
                          <XCircle size={15} className="text-red-400 flex-shrink-0" />
                          <span className="text-[13.5px] font-semibold text-gray-700" style={inter}>
                            {item.legacyText}
                          </span>
                        </div>
                        <p className="text-[11.5px] text-gray-400 leading-tight pl-5" style={inter}>
                          {item.legacyDetail}
                        </p>
                      </div>

                      {/* HireLoom Spotlight Column */}
                      <div className="col-span-4 px-6 py-4.5 border-l border-[#8028E4]/25 bg-[#F4F0FF]/40 group-hover:bg-[#F4F0FF]/80 transition-colors flex flex-col justify-center gap-1 relative overflow-hidden">
                        <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                          <div className="flex items-center gap-2 min-w-0">
                            <CheckCircle2 size={16} className="text-[#8028E4] flex-shrink-0" />
                            <span className="text-[14px] font-bold text-[#3F0086]" style={jakarta}>
                              {item.hireloomText}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#8028E4]/10 text-[#8028E4] border border-[#8028E4]/20 flex-shrink-0 whitespace-nowrap">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-[12px] text-[#4A2080]/90 leading-tight pl-6 font-medium" style={inter}>
                          {item.hireloomDetail}
                        </p>
                      </div>
                    </div>

                    {/* MOBILE LAYOUT (< md) */}
                    <div className="block md:hidden p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-[#F4F0FF] text-[#8028E4]">
                          <IconComponent size={16} />
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-[#0A0A14]" style={jakarta}>
                            {item.feature}
                          </h4>
                          <p className="text-[12px] text-gray-500" style={inter}>
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {mobileView === "legacy" ? (
                        <div className="p-3.5 rounded-xl bg-red-50/50 border border-red-100 flex items-start gap-2.5">
                          <X className="text-red-500 size-4 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-[13px] font-semibold text-gray-800" style={inter}>
                              {item.legacyText}
                            </div>
                            <p className="text-[11.5px] text-gray-500 mt-0.5" style={inter}>
                              {item.legacyDetail}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="p-3.5 rounded-xl bg-[#F4F0FF] border border-[#8028E4]/20 flex items-start gap-2.5 relative overflow-hidden">
                          <Check className="text-[#8028E4] size-4 mt-0.5 flex-shrink-0 font-bold" />
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[13.5px] font-bold text-[#3F0086]" style={jakarta}>
                                {item.hireloomText}
                              </span>
                              <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-[#8028E4] text-white">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-[12px] text-[#4A2080] mt-1" style={inter}>
                              {item.hireloomDetail}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom Summary Impact Banner */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-12 rounded-2xl bg-gradient-to-r from-[#0A0A14] via-[#121225] to-[#1A1030] p-6 sm:p-8 border border-white/10 shadow-2xl text-white relative overflow-hidden"
        >
          {/* Subtle Ambient Glow inside banner */}
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#8028E4]/20 blur-[100px] pointer-events-none rounded-full" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            {/* Left Highlights */}
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#A855F7] uppercase tracking-widest" style={inter}>
                <Sparkles size={13} /> Immediate ROI & Impact
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white" style={jakarta}>
                Ready to upgrade from administration to automation?
              </h3>
              <p className="text-xs sm:text-sm text-[#CCCCDD]" style={inter}>
                Teams switching from traditional ATS to HireLoom screen candidate pipelines <strong className="text-white">10x faster</strong> with <strong className="text-white">zero screening bias</strong>.
              </p>
            </div>

            {/* Middle Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 border-y lg:border-y-0 lg:border-x border-white/10 py-4 lg:py-0 px-0 sm:px-6 text-center flex-shrink-0">
              <div className="px-1">
                <div className="text-xl sm:text-2xl font-black text-white whitespace-nowrap" style={jakarta}>80%</div>
                <div className="text-[10px] sm:text-[10.5px] text-[#9999AA] uppercase font-semibold whitespace-nowrap" style={inter}>Time Saved</div>
              </div>
              <div className="px-1">
                <div className="text-xl sm:text-2xl font-black text-[#A855F7] whitespace-nowrap" style={jakarta}>&lt;&nbsp;24h</div>
                <div className="text-[10px] sm:text-[10.5px] text-[#9999AA] uppercase font-semibold whitespace-nowrap" style={inter}>Shortlist Speed</div>
              </div>
              <div className="px-1">
                <div className="text-xl sm:text-2xl font-black text-white whitespace-nowrap" style={jakarta}>100%</div>
                <div className="text-[10px] sm:text-[10.5px] text-[#9999AA] uppercase font-semibold whitespace-nowrap" style={inter}>Audit Proof</div>
              </div>
            </div>

            {/* Right Action CTA Button */}
            <div className="flex-shrink-0">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#8028E4] hover:bg-[#9035f5] text-white font-bold text-sm shadow-lg shadow-[#8028E4]/40 hover:shadow-[#8028E4]/60 transition-all duration-200 cursor-pointer group"
                style={inter}
              >
                <span>Book a Demo</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

