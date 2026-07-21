import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, Check, Brain, Users, Calendar, BarChart3,
  Bell, Play, Layers
} from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";
import { TextMorph } from "../ui/text-morph";

function DashboardMockup() {
  const candidates = [
    { name: "Sarah Chen", role: "Senior Engineer", score: 94, status: "Interview", avatar: "SC" },
    { name: "Marcus Rivera", role: "Product Manager", score: 87, status: "Screening", avatar: "MR" },
    { name: "Priya Patel", role: "UX Designer", score: 91, status: "Offer", avatar: "PP" },
    { name: "Jordan Kim", role: "Data Scientist", score: 82, status: "Screening", avatar: "JK" },
  ];

  const statusColors: Record<string, string> = {
    Interview: "bg-blue-50 text-blue-700",
    Screening: "bg-amber-50 text-amber-700",
    Offer: "bg-green-50 text-green-700",
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-black/[0.07] bg-white">
      {/* Titlebar */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#F9F9FB] border-b border-black/[0.07]">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <div className="ml-3 flex-1 bg-white rounded-md px-3 py-1 text-[11px] text-[#9999AA] border border-black/[0.07]" style={inter}>
          app.hireloom.io/dashboard
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-12 lg:w-44 bg-[#FAFAFA] border-r border-black/[0.06] py-4 flex-shrink-0">
          <div className="space-y-0.5 px-2">
            {[
              { icon: Layers, label: "Pipeline", active: true },
              { icon: Users, label: "Candidates" },
              { icon: Brain, label: "AI Insights" },
              { icon: BarChart3, label: "Analytics" },
              { icon: Calendar, label: "Schedule" },
              { icon: Bell, label: "Notifications" },
            ].map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg cursor-pointer ${
                  active ? "bg-[#F0E6FF] text-[#8028E4]" : "text-[#6B6B80] hover:bg-black/[0.04]"
                }`}
              >
                <Icon size={14} className="flex-shrink-0" />
                <span className="hidden lg:block text-[12px] font-medium" style={inter}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 min-w-0">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {[
              { label: "Open Roles", value: "12" },
              { label: "Screened Today", value: "38" },
              { label: "Avg AI Score", value: "88" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#FAFAFA] rounded-xl p-3 border border-black/[0.05]">
                <div className="text-[18px] font-bold text-[#0A0A14]" style={jakarta}>
                  {value}
                </div>
                <div className="text-[10.5px] text-[#9999AA] mt-0.5" style={inter}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Candidate list */}
          <div className="text-[11px] font-semibold text-[#9999AA] uppercase tracking-wider mb-2.5" style={inter}>
            Recent Candidates
          </div>
          <div className="space-y-2">
            {candidates.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-3 p-2.5 rounded-xl border border-black/[0.05] bg-white hover:border-[#8028E4]/20 hover:shadow-[0_2px_8px_rgba(128,40,228,0.08)] transition-all cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8028E4] to-[#A855F7] flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold text-white">{c.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-semibold text-[#0A0A14] truncate" style={jakarta}>
                    {c.name}
                  </div>
                  <div className="text-[10.5px] text-[#9999AA]" style={inter}>
                    {c.role}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <div className="w-16 h-1.5 rounded-full bg-[#F0E6FF] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#8028E4] to-[#A855F7]"
                        style={{ width: `${c.score}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-[#8028E4]">{c.score}</span>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${statusColors[c.status]}`}>
                    {c.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.7, 0.9] : [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div className="py-10 md:py-20 w-full relative" style={{ perspective: "1000px" }}>
        <motion.div
          style={{ translateY: translate }}
          className="max-w-5xl mx-auto text-center"
        >
          {titleComponent}
        </motion.div>

        <motion.div
          style={{
            rotateX: rotate,
            scale,
            boxShadow:
              "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
          }}
          className="max-w-5xl  mx-auto h-[30rem] md:h-[40rem] w-full border border-black/[0.08] p-2 md:p-4 bg-white rounded-[24px] shadow-2xl"
        >
          <div className="h-full w-full overflow-hidden rounded-2xl bg-[#F9F9FB]">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const titleComponent = (
    <div className="flex flex-col items-center">
      <motion.div {...fadeUp(0)}>
        <div
          className="inline-flex items-center gap-2 bg-[#F4F0FF] text-[#8028E4] text-[12.5px] font-semibold px-3.5 py-1.5 rounded-full mb-6 border border-[#8028E4]/15"
          style={inter}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8028E4] animate-pulse" />
          AI-Powered Hiring Platform
        </div>
      </motion.div>

      <motion.h1
        {...fadeUp(0.08)}
        className="text-[2.75rem] lg:text-[3.75rem] font-extrabold leading-[1.08] tracking-[-2px] text-[#0A0A14] mb-5 flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1"
        style={jakarta}
      >
        <span>Hire with</span>
        <span className="inline-flex min-w-[110px] md:min-w-[150px] justify-start">
          <TextMorph
            words={["precision.", "speed.", "confidence.", "intelligence."]}
            className="text-[#8028E4] justify-start"
            interval={3000}
          />
        </span>
        <span>Let AI handle the rest.</span>
      </motion.h1>

      <motion.p
        {...fadeUp(0.14)}
        className="text-[1.05rem] text-[#4A4A60] leading-relaxed max-w-[800px] mb-8"
        style={inter}
      >
        Hireloom is an AI-powered hiring operating system that screens candidates, conducts video interviews, and delivers explainable scorecards, so your team focuses on decisions, not process.
      </motion.p>

      <motion.div {...fadeUp(0.2)} className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 bg-[#8028E4] hover:bg-[#6B1FC8] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-[0_4px_14px_rgba(128,40,228,0.35)] hover:shadow-[0_6px_20px_rgba(128,40,228,0.45)] hover:-translate-y-0.5"
          style={inter}
        >
          Get Started Free
          <ArrowRight size={16} />
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 bg-white border border-black/[0.1] text-[#0A0A14] font-semibold px-6 py-3 rounded-xl hover:border-[#8028E4]/40 hover:bg-[#F4F0FF] transition-all duration-200"
          style={inter}
        >
          <Play size={14} className="text-[#8028E4]" />
          Watch Demo
        </a>
      </motion.div>

      <motion.div
        {...fadeUp(0.26)}
        className="flex items-center justify-center gap-5 mt-7 text-[12.5px] text-[#6B6B80]"
        style={inter}
      >
        {["No credit card required", "GDPR compliant", "SOC 2 Type II"].map((t) => (
          <div key={t} className="flex items-center gap-1.5">
            <Check size={12} className="text-[#8028E4]" />
            {t}
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(128,40,228,1) 1px, transparent 1px), linear-gradient(90deg, rgba(128,40,228,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Subtle purple radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(128,40,228,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative pt-0">
        <ContainerScroll titleComponent={titleComponent}>
          <DashboardMockup />
        </ContainerScroll>
      </div>
    </section>
  );
}
