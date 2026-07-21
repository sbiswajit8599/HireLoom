import { motion } from "framer-motion";
import { Briefcase, Brain, Video, FileText, Eye, Award } from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";

export default function SolutionSection() {
  const steps = [
    { icon: Briefcase, label: "Post Job", desc: "Publish a role with structured criteria" },
    { icon: Brain, label: "AI Match", desc: "Semantic matching ranks top applicants" },
    { icon: Video, label: "AI Interview", desc: "Async video with structured questions" },
    { icon: FileText, label: "Scorecard", desc: "Explainable AI scoring with evidence" },
    { icon: Eye, label: "Human Review", desc: "Recruiters evaluate with full context" },
    { icon: Award, label: "Hire", desc: "Confident decision. Faster offer." },
  ];

  return (
    <section className="py-24 bg-[#0A0A14]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center max-w-xl mx-auto mb-16">
          <div
            className="text-[12.5px] font-semibold uppercase tracking-widest text-[#A855F7] mb-3"
            style={inter}
          >
            The Solution
          </div>
          <h2
            className="text-[2.25rem] font-extrabold tracking-[-0.8px] text-white mb-4 leading-[1.2]"
            style={jakarta}
          >
            One intelligent workflow.<br></br>End-to-end.
          </h2>
          <p className="text-[1rem] text-[#9999AA] leading-relaxed" style={inter}>
            Hireloom orchestrates every step from job post to hire — with AI working quietly behind the scenes and humans remaining in control.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[26px] left-[8.33%] right-[8.33%] h-px bg-gradient-to-r from-transparent via-[#8028E4]/40 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                {...fadeUp(i * 0.07)}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-4">
                  <div className="w-[52px] h-[52px] rounded-2xl bg-[#12121F] border border-white/[0.08] group-hover:border-[#8028E4]/50 flex items-center justify-center transition-all duration-300 group-hover:bg-[#1A1030] shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                    <Icon size={20} className="text-[#A855F7]" />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#8028E4] flex items-center justify-center">
                    <span className="text-[9px] font-bold text-white">{i + 1}</span>
                  </div>
                </div>
                <div
                  className="text-[13.5px] font-semibold text-white mb-1"
                  style={jakarta}
                >
                  {label}
                </div>
                <div className="text-[12px] text-[#6B6B80] leading-relaxed" style={inter}>
                  {desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
