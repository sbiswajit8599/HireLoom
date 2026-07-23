import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Video, Brain } from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";
import { StarfieldCanvas } from "../ui/starfield-hero";

function RecruiterDashboardTab() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-[15px] font-semibold text-white" style={jakarta}>Active Pipeline</h3>
          <p className="text-[12px] text-[#6B6B80]" style={inter}>14 open roles · 247 candidates</p>
        </div>
        <button className="flex items-center gap-1.5 text-[12px] font-medium text-[#A855F7] bg-[#A855F7]/10 px-3 py-1.5 rounded-lg" style={inter}>
          <Filter size={12} /> Filter
        </button>
      </div>
      <div className="space-y-2.5">
        {[
          { role: "Senior Frontend Engineer", dept: "Engineering", apps: 42, screened: 31, stage: "Interview", urgent: true },
          { role: "Head of Product", dept: "Product", apps: 28, screened: 19, stage: "Final Round", urgent: false },
          { role: "Account Executive (ENT)", dept: "Sales", apps: 67, screened: 54, stage: "Screening", urgent: false },
          { role: "Staff Data Scientist", dept: "Analytics", apps: 19, screened: 12, stage: "Offer", urgent: true },
        ].map((r) => (
          <div key={r.role} className="flex items-center gap-4 p-3.5 rounded-xl bg-[#12121F] border border-white/[0.05] hover:border-[#8028E4]/30 transition-all cursor-pointer">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[13px] font-semibold text-white truncate" style={jakarta}>{r.role}</span>
                {r.urgent && <span className="text-[10px] font-semibold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">Urgent</span>}
              </div>
              <span className="text-[11.5px] text-[#6B6B80]" style={inter}>{r.dept}</span>
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-[12px] text-[#9999AA]" style={inter}>{r.screened}/{r.apps}</div>
              <div className="text-[10.5px] text-[#6B6B80]" style={inter}>screened</div>
            </div>
            <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${
              r.stage === "Offer" ? "bg-green-500/15 text-green-400" :
              r.stage === "Final Round" ? "bg-blue-500/15 text-blue-400" :
              r.stage === "Interview" ? "bg-purple-500/15 text-purple-400" :
              "bg-amber-500/15 text-amber-400"
            }`} style={inter}>{r.stage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIInterviewTab() {
  return (
    <div className="p-5">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="rounded-xl bg-[#12121F] border border-white/[0.05] overflow-hidden">
          <div className="bg-[#1A1030] px-4 py-3 flex items-center gap-2">
            <Video size={13} className="text-[#A855F7]" />
            <span className="text-[12px] font-semibold text-white" style={jakarta}>AI Interview Session</span>
            <span className="ml-auto text-[10px] text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full font-medium" style={inter}>Live</span>
          </div>
          <div className="p-4">
            <div className="aspect-video bg-[#0D0D1A] rounded-lg flex items-center justify-center mb-3 relative overflow-hidden">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8028E4] to-[#A855F7] mx-auto flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-lg">SC</span>
                </div>
                <span className="text-[11px] text-[#6B6B80]" style={inter}>Sarah Chen · Frontend Engineer</span>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/60 rounded-lg px-2 py-1 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] text-white" style={inter}>2:34</span>
              </div>
            </div>
            <div className="bg-[#1A1030] rounded-lg p-3">
              <div className="text-[10px] font-semibold text-[#8028E4] mb-1" style={inter}>CURRENT QUESTION</div>
              <p className="text-[12px] text-[#CCCCDD] leading-relaxed" style={inter}>
                "Describe a time you optimized a frontend application for performance at scale."
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl bg-[#12121F] border border-white/[0.05] p-4">
            <div className="text-[11px] font-semibold text-[#6B6B80] mb-3" style={inter}>REAL-TIME SIGNALS</div>
            {[
              { label: "Communication Clarity", score: 88 },
              { label: "Technical Depth", score: 92 },
              { label: "Structured Thinking", score: 79 },
              { label: "Confidence & Pace", score: 85 },
            ].map(({ label, score }) => (
              <div key={label} className="flex items-center gap-3 mb-2.5">
                <div className="text-[11.5px] text-[#9999AA] w-40 flex-shrink-0" style={inter}>{label}</div>
                <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#8028E4] to-[#A855F7]"
                    style={{ width: `${score}%` }}
                  />
                </div>
                <span className="text-[11px] font-semibold text-[#A855F7] w-6 text-right" style={inter}>{score}</span>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-[#12121F] border border-white/[0.05] p-4">
            <div className="text-[11px] font-semibold text-[#6B6B80] mb-3" style={inter}>INTERVIEW PROGRESS</div>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className={`flex-1 h-1.5 rounded-full ${n <= 2 ? "bg-[#8028E4]" : n === 3 ? "bg-[#8028E4]/40" : "bg-white/[0.08]"}`} />
              ))}
            </div>
            <p className="text-[11px] text-[#6B6B80] mt-2" style={inter}>Question 3 of 5 · ~6 min remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsTab() {
  const bars = [68, 82, 74, 91, 87, 95, 88];
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="p-5">
      <div className="grid sm:grid-cols-4 gap-3 mb-5">
        {[
          { label: "Applications", value: "1,284", change: "+18%" },
          { label: "Screened by AI", value: "963", change: "+24%" },
          { label: "Interviews", value: "186", change: "+11%" },
          { label: "Offers", value: "23", change: "+8%" },
        ].map(({ label, value, change }) => (
          <div key={label} className="bg-[#12121F] rounded-xl p-4 border border-white/[0.05]">
            <div className="text-[11px] text-[#6B6B80] mb-1" style={inter}>{label}</div>
            <div className="text-[20px] font-bold text-white" style={jakarta}>{value}</div>
            <div className="text-[11px] text-green-400 font-medium mt-0.5" style={inter}>{change} this week</div>
          </div>
        ))}
      </div>
      <div className="bg-[#12121F] rounded-xl border border-white/[0.05] p-4">
        <div className="text-[12px] font-semibold text-white mb-4" style={jakarta}>AI Screening Quality Score (7-day)</div>
        <div className="flex items-end gap-2 h-28">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-[#8028E4] to-[#A855F7] opacity-80"
                style={{ height: `${h}%` }}
              />
              <span className="text-[9.5px] text-[#6B6B80]" style={inter}>{labels[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductShowcaseSection() {
  const tabs = [
    { label: "Recruiter Dashboard", component: RecruiterDashboardTab },
    { label: "AI Interview", component: AIInterviewTab },
    { label: "Analytics", component: AnalyticsTab },
  ];
  const [active, setActive] = useState(0);
  const ActiveComponent = tabs[active].component;

  return (
    <section className="relative isolate py-24 bg-[#06060F] overflow-hidden" id="product">
      {/* Starfield background interactive canvas */}
      <StarfieldCanvas
        particleCount={280}
        interactionRadius={150}
        baseRgb={[168, 85, 247]}
        activeRgb={[255, 255, 255]}
        springK={0.05}
        damping={0.85}
        reduceMotion={false}
      />

      {/* Edge vignette overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 35%, rgba(6,6,15,0.95) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center max-w-xl mx-auto mb-14">
          <div
            className="text-[12.5px] font-semibold uppercase tracking-widest text-[#A855F7] mb-3"
            style={inter}
          >
            The Platform
          </div>
          <h2
            className="text-[2.25rem] font-extrabold tracking-[-0.8px] text-white mb-4 leading-[1.2]"
            style={jakarta}
          >
            Built for how modern recruiting teams work.
          </h2>
          <p className="text-[1rem] text-[#6B6B80] leading-relaxed" style={inter}>
            A unified interface for recruiters, hiring managers, and candidates — each with the right context at the right time.
          </p>
        </motion.div>

        {/* Product showcase dashboard container - data-starfield-ignore ensures particle repulse only activates on background */}
        <motion.div
          {...fadeUp(0.1)}
          data-starfield-ignore="true"
          className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A14]/90 backdrop-blur-md shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
        >
          {/* Tab bar */}
          <div className="flex items-center gap-1 px-5 pt-4 pb-0 border-b border-white/[0.06]">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={`text-[13px] font-medium px-4 py-2.5 rounded-t-lg transition-all relative -mb-px ${
                  active === i
                    ? "text-white border-t border-l border-r border-white/[0.1] bg-[#12121F]"
                    : "text-[#6B6B80] hover:text-[#9999AA]"
                }`}
                style={inter}
              >
                {tab.label}
                {active === i && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8028E4]" />
                )}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <ActiveComponent />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
