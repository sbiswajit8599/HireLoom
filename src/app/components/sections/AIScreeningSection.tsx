import { motion } from "framer-motion";
import { CheckCircle, Brain } from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";

export default function AIScreeningSection() {
  const skills = [
    { label: "Systems Design", score: 91, evidence: "Explained microservices architecture with real tradeoffs" },
    { label: "Communication", score: 87, evidence: "Clear, structured answers. Good active listening signals." },
    { label: "Technical Depth", score: 94, evidence: "Demonstrated deep knowledge of React, Next.js, and Webpack" },
    { label: "Problem Solving", score: 85, evidence: "Methodical debugging approach with hypothesis-first thinking" },
  ];

  return (
    <section className="py-24 bg-white" id="ai-screening">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          <motion.div {...fadeUp(0)} className="mb-12 lg:mb-0">
            <div
              className="text-[12.5px] font-semibold uppercase tracking-widest text-[#8028E4] mb-3"
              style={inter}
            >
              AI Screening
            </div>
            <h2
              className="text-[2.25rem] font-extrabold tracking-[-0.8px] text-[#0A0A14] mb-4"
              style={jakarta}
            >
              AI that explains itself. Every time.
            </h2>
            <p className="text-[1rem] text-[#4A4A60] leading-relaxed mb-8" style={inter}>
              Hireloom's AI scores are never black boxes. Every assessment includes the evidence, context, and reasoning that led to each score — so recruiters can verify, override, or learn from every decision.
            </p>

            <div className="space-y-3">
              {[
                { title: "Structured interview questions", desc: "Role-specific question sets designed to surface real competency signals, not rehearsed answers." },
                { title: "Bias-aware evaluation", desc: "Scoring criteria are anchored to defined competencies, reducing the influence of unstructured impressions." },
                { title: "Full audit trail", desc: "Every AI decision is logged with timestamps, version info, and evidence — ready for EEOC or GDPR review." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4 p-4 rounded-xl border border-black/[0.06] bg-[#FAFAFA]">
                  <CheckCircle size={18} className="text-[#8028E4] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[14px] font-semibold text-[#0A0A14] mb-0.5" style={jakarta}>{title}</div>
                    <div className="text-[13px] text-[#6B6B80]" style={inter}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.12)}>
            <div className="rounded-2xl bg-[#FAFAFA] border border-black/[0.07] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
              <div className="bg-white border-b border-black/[0.07] px-5 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8028E4] to-[#A855F7] flex items-center justify-center">
                      <span className="text-white text-[11px] font-bold">SC</span>
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-[#0A0A14]" style={jakarta}>Sarah Chen</div>
                      <div className="text-[11px] text-[#9999AA]" style={inter}>Senior Frontend Engineer · Interview #3</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[24px] font-extrabold text-[#8028E4]" style={jakarta}>91</div>
                    <div className="text-[10px] text-[#9999AA]" style={inter}>Overall Score</div>
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#9999AA] mb-3" style={inter}>
                  Competency Breakdown
                </div>
                {skills.map(({ label, score, evidence }) => (
                  <div key={label} className="bg-white rounded-xl p-4 border border-black/[0.05]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[13px] font-semibold text-[#0A0A14]" style={jakarta}>{label}</span>
                      <span className="text-[14px] font-bold text-[#8028E4]" style={jakarta}>{score}</span>
                    </div>
                    <div className="h-1.5 bg-[#F0E6FF] rounded-full overflow-hidden mb-2.5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#8028E4] to-[#A855F7]"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                    <p className="text-[11.5px] text-[#6B6B80] italic" style={inter}>"{evidence}"</p>
                  </div>
                ))}

                <div className="bg-[#F4F0FF] rounded-xl p-4 border border-[#8028E4]/15">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Brain size={13} className="text-[#8028E4]" />
                    <span className="text-[11px] font-semibold text-[#8028E4] uppercase tracking-wide" style={inter}>AI Recommendation</span>
                  </div>
                  <p className="text-[12.5px] text-[#4A2080] leading-relaxed" style={inter}>
                    Strong candidate with exceptional technical depth. Recommend advancing to final round with the engineering panel.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
