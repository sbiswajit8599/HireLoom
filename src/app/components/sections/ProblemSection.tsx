import { motion } from "framer-motion";
import { Clock, TrendingUp, XCircle } from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";

export default function ProblemSection() {
  const pains = [
    {
      stat: "72%",
      label: "of qualified candidates are rejected by ATS keyword filters before a human sees them",
      icon: XCircle,
      accent: "#EF4444",
      bg: "#FFF5F5",
    },
    {
      stat: "23 days",
      label: "average time-to-hire for technical roles, most of it manual screening and scheduling",
      icon: Clock,
      accent: "#F59E0B",
      bg: "#FFFBEB",
    },
    {
      stat: "$4,700",
      label: "average cost per bad hire — compounded when screening is inconsistent and unstructured",
      icon: TrendingUp,
      accent: "#8028E4",
      bg: "#F4F0FF",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div {...fadeUp(0)} className="max-w-xl mb-16">
          <div
            className="text-[12.5px] font-semibold uppercase tracking-widest text-[#8028E4] mb-3"
            style={inter}
          >
            The Problem
          </div>
          <h2
            className="text-[2.25rem] font-extrabold tracking-[-0.8px] text-[#0A0A14] mb-4"
            style={jakarta}
          >
            Modern hiring is broken by design.
          </h2>
          <p className="text-[1rem] text-[#4A4A60] leading-relaxed" style={inter}>
            Teams are spending more time on process than on people. The result: slower hires, higher costs, and missed talent.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pains.map(({ stat, label, icon: Icon, accent, bg }, i) => (
            <motion.div
              key={stat}
              {...fadeUp(i * 0.1)}
              className="rounded-2xl border border-black/[0.07] p-8 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: bg }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: accent + "18" }}
              >
                <Icon size={20} style={{ color: accent }} />
              </div>
              <div
                className="text-[2.5rem] font-extrabold tracking-tight mb-2"
                style={{ ...jakarta, color: accent }}
              >
                {stat}
              </div>
              <p className="text-[14px] text-[#4A4A60] leading-relaxed" style={inter}>
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
