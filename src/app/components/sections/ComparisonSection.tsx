import { motion } from "framer-motion";
import { XCircle, CheckCircle } from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";

export default function ComparisonSection() {
  const rows = [
    { feature: "Candidate Matching", legacy: "Keyword filters", hireloom: "Semantic AI matching" },
    { feature: "Video Interviews", legacy: "Manual scheduling", hireloom: "Async AI-powered interviews" },
    { feature: "Decision Transparency", legacy: "Black box scoring", hireloom: "Explainable scorecards with evidence" },
    { feature: "Time to Screen", legacy: "5–10 business days", hireloom: "Under 24 hours" },
    { feature: "Bias Reduction", legacy: "Depends on interviewer", hireloom: "Structured, competency-anchored AI" },
    { feature: "Hiring Analytics", legacy: "Basic exports", hireloom: "Real-time intelligence dashboard" },
    { feature: "Collaboration", legacy: "Email & spreadsheets", hireloom: "Shared pipeline with role-based access" },
    { feature: "Compliance", legacy: "Manual audit prep", hireloom: "Automated GDPR & EEOC audit logs" },
  ];

  return (
    <section className="py-24 bg-[#F9F9FB]">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center max-w-xl mx-auto mb-14">
          <div
            className="text-[12.5px] font-semibold uppercase tracking-widest text-[#8028E4] mb-3"
            style={inter}
          >
            Why Hireloom
          </div>
          <h2
            className="text-[2.25rem] font-extrabold tracking-[-0.8px] text-[#0A0A14] mb-4"
            style={jakarta}
          >
            Not just another ATS.
          </h2>
          <p className="text-[1rem] text-[#4A4A60] leading-relaxed" style={inter}>
            Traditional applicant tracking systems were built for administration. Hireloom was built for outcomes.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="rounded-2xl overflow-hidden border border-black/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.05)] bg-white">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#FAFAFA] border-b border-black/[0.07]">
            <div className="px-5 py-4">
              <span className="text-[12px] font-semibold text-[#9999AA] uppercase tracking-wider" style={inter}>Feature</span>
            </div>
            <div className="px-5 py-4 border-l border-black/[0.07] text-center">
              <span className="text-[12px] font-semibold text-[#9999AA] uppercase tracking-wider" style={inter}>Traditional ATS</span>
            </div>
            <div className="px-5 py-4 border-l border-[#8028E4]/20 bg-[#F4F0FF] text-center">
              <span className="text-[12px] font-bold text-[#8028E4] uppercase tracking-wider" style={inter}>Hireloom</span>
            </div>
          </div>

          {rows.map(({ feature, legacy, hireloom }, i) => (
            <div
              key={feature}
              className={`grid grid-cols-3 border-b border-black/[0.05] last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]/50"}`}
            >
              <div className="px-5 py-4">
                <span className="text-[13.5px] font-semibold text-[#0A0A14]" style={jakarta}>{feature}</span>
              </div>
              <div className="px-5 py-4 border-l border-black/[0.05] flex items-start gap-2">
                <XCircle size={14} className="text-[#CCCCCC] flex-shrink-0 mt-0.5" />
                <span className="text-[13px] text-[#9999AA]" style={inter}>{legacy}</span>
              </div>
              <div className="px-5 py-4 border-l border-[#8028E4]/12 bg-[#F4F0FF]/40 flex items-start gap-2">
                <CheckCircle size={14} className="text-[#8028E4] flex-shrink-0 mt-0.5" />
                <span className="text-[13px] font-medium text-[#4A2080]" style={inter}>{hireloom}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
