import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does Hireloom's AI matching actually work?",
      a: "Hireloom uses a combination of large language model embeddings and structured scoring criteria to semantically match candidate experience, skills, and role context — not just keywords. Every match comes with a rationale explaining why a candidate ranked where they did.",
    },
    {
      q: "Can candidates tell they're being interviewed by AI?",
      a: "Yes — transparency is core to our approach. Candidates are informed they are completing an AI-assisted async interview. We believe this builds trust and sets accurate expectations for the process.",
    },
    {
      q: "How does Hireloom reduce hiring bias?",
      a: "Our interview questions are structured and role-specific, with scoring anchored to defined competencies. We've designed the system to minimize the influence of unstructured impressions, presentation style, and other non-role-relevant factors.",
    },
    {
      q: "Is Hireloom GDPR and EEOC compliant?",
      a: "Yes. Hireloom supports data residency selection, right-to-erasure workflows, consent management, and automated EEOC adverse impact reporting. We maintain an immutable audit log of all AI decisions for compliance review.",
    },
    {
      q: "How long does it take to get up and running?",
      a: "Most teams are fully configured and running their first AI-assisted screening within a few hours. Enterprise onboarding with custom integrations and SSO typically takes 1–2 weeks.",
    },
    {
      q: "Can I use Hireloom alongside my existing ATS?",
      a: "Yes. Hireloom integrates with Greenhouse, Lever, Workday, and other major ATS platforms via API and native connectors. You can run Hireloom as a screening layer that feeds into your existing pipeline.",
    },
    {
      q: "What happens to candidate data after a hire is made?",
      a: "Candidate data is retained according to your configured data retention policy. You can set automatic deletion windows, honor individual erasure requests, and export all candidate data in GDPR-compliant formats.",
    },
    {
      q: "Do you offer a free trial?",
      a: "Yes — Startup and Growth plans include a 14-day free trial with full feature access. No credit card required. Enterprise customers can request a guided proof-of-concept.",
    },
  ];

  return (
    <section className="py-24 bg-[#F9F9FB]">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <div
            className="text-[12.5px] font-semibold uppercase tracking-widest text-[#8028E4] mb-3"
            style={inter}
          >
            FAQ
          </div>
          <h2
            className="text-[2.25rem] font-extrabold tracking-[-0.8px] text-[#0A0A14]"
            style={jakarta}
          >
            Common questions.
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.04)}
              className="rounded-xl overflow-hidden bg-white border border-black/[0.07]"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#FAFAFA] transition-colors"
              >
                <span className="text-[14.5px] font-semibold text-[#0A0A14] pr-4" style={jakarta}>
                  {q}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-[#8028E4] flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-[13.5px] text-[#4A4A60] leading-relaxed" style={inter}>{a}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
