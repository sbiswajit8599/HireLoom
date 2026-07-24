import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, Check, Brain, Users, Calendar, BarChart3,
  Bell, Play, Layers
} from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";
import { TextMorph } from "../ui/text-morph";
import BackgroundBoxes from "../ui/background-boxes";

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
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-black/[0.07] bg-white flex flex-col pointer-events-auto">
      {/* Titlebar */}
      <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2.5 sm:py-3 bg-[#F9F9FB] border-b border-black/[0.07] flex-shrink-0">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]" />
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]" />
        <div className="ml-2 sm:ml-3 flex-1 bg-white rounded-md px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] text-[#9999AA] border border-black/[0.07] truncate" style={inter}>
          app.hireloom.io/dashboard
        </div>
      </div>

      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Sidebar */}
        <div className="w-10 sm:w-12 lg:w-44 bg-[#FAFAFA] border-r border-black/[0.06] py-3 sm:py-4 flex-shrink-0">
          <div className="space-y-0.5 px-1.5 sm:px-2">
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
                className={`flex items-center gap-2.5 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-lg cursor-pointer ${
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
        <div className="flex-1 p-2.5 sm:p-4 min-w-0 overflow-y-auto">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 mb-3 sm:mb-4">
            {[
              { label: "Open Roles", value: "12" },
              { label: "Screened Today", value: "38" },
              { label: "Avg AI Score", value: "88" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#FAFAFA] rounded-xl p-2 sm:p-3 border border-black/[0.05]">
                <div className="text-[14px] sm:text-[18px] font-bold text-[#0A0A14]" style={jakarta}>
                  {value}
                </div>
                <div className="text-[9px] sm:text-[10.5px] text-[#9999AA] mt-0.5 leading-tight" style={inter}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Candidate list */}
          <div className="text-[10px] sm:text-[11px] font-semibold text-[#9999AA] uppercase tracking-wider mb-2 sm:mb-2.5" style={inter}>
            Recent Candidates
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            {candidates.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-xl border border-black/[0.05] bg-white hover:border-[#8028E4]/20 hover:shadow-[0_2px_8px_rgba(128,40,228,0.08)] transition-all cursor-pointer"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#8028E4] to-[#A855F7] flex items-center justify-center flex-shrink-0">
                  <span className="text-[9px] sm:text-[10px] font-bold text-white">{c.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] sm:text-[12px] font-semibold text-[#0A0A14] truncate" style={jakarta}>
                    {c.name}
                  </div>
                  <div className="text-[9.5px] sm:text-[10.5px] text-[#9999AA] truncate" style={inter}>
                    {c.role}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
                  <div className="flex items-center gap-1">
                    <div className="w-10 sm:w-16 h-1.5 rounded-full bg-[#F0E6FF] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#8028E4] to-[#A855F7]"
                        style={{ width: `${c.score}%` }}
                      />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#8028E4]">{c.score}</span>
                  </div>
                  <span className={`text-[9px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full ${statusColors[c.status]}`}>
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
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.85, 0.98] : [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], isMobile ? [0, -25] : [0, -100]);

  return (
    <div
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-0 md:pb-0 md:h-[80rem] flex flex-col items-center justify-start md:justify-center p-2 sm:p-4 md:p-20"
      ref={containerRef}
    >
      <div className="py-0 md:py-20 w-full relative" style={{ perspective: "1000px" }}>
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
          className="max-w-5xl mx-auto h-[25rem] sm:h-[32rem] md:h-[40rem] w-full border border-black/[0.08] p-1.5 sm:p-2 md:p-4 bg-white rounded-[20px] sm:rounded-[24px] shadow-2xl mt-4 sm:mt-6 md:mt-0"
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
    <div className="flex flex-col items-center pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto font-sans">
      <motion.div {...fadeUp(0)}>
        <div
          className="inline-flex items-center gap-2 bg-[#F4F0FF] text-[#8028E4] text-[11.5px] sm:text-[12.5px] font-semibold px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6 border border-[#8028E4]/15"
          style={inter}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8028E4] animate-pulse" />
          AI-Powered Hiring Platform
        </div>
      </motion.div>

      <motion.h1
        {...fadeUp(0.08)}
        className="text-[2.15rem] sm:text-[2.75rem] lg:text-[3.75rem] font-extrabold leading-[1.12] sm:leading-[1.08] tracking-[-1px] sm:tracking-[-2px] text-[#0A0A14] mb-4 sm:mb-5 flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1"
        style={jakarta}
      >
        <span>Hire with</span>
        <span className="inline-flex min-w-[95px] sm:min-w-[110px] md:min-w-[150px] justify-start">
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
        className="text-[0.95rem] sm:text-[1.05rem] text-[#4A4A60] leading-relaxed max-w-[800px] mb-6 sm:mb-8 px-2 sm:px-0"
        style={inter}
      >
        Hireloom is an AI-powered hiring operating system that screens candidates, conducts video interviews, and delivers explainable scorecards, so your team focuses on decisions, not process.
      </motion.p>

      <motion.div {...fadeUp(0.2)} className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center w-full max-w-xs sm:max-w-none mx-auto">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 bg-[#8028E4] hover:bg-[#6B1FC8] text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-200 shadow-[0_4px_14px_rgba(128,40,228,0.35)] hover:shadow-[0_6px_20px_rgba(128,40,228,0.45)] hover:-translate-y-0.5 text-[14px] sm:text-[16px]"
          style={inter}
        >
          Get Started Free
          <ArrowRight size={16} />
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 bg-white border border-black/[0.1] text-[#0A0A14] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:border-[#8028E4]/40 hover:bg-[#F4F0FF] transition-all duration-200 text-[14px] sm:text-[16px]"
          style={inter}
        >
          <Play size={14} className="text-[#8028E4]" />
          Watch Demo
        </a>
      </motion.div>

      <motion.div
        {...fadeUp(0.26)}
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-5 sm:mt-7 text-[11.5px] sm:text-[12.5px] text-[#6B6B80]"
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
      {/* Interactive 3D Prism Grid Background */}
      <div className="absolute inset-0 pointer-events-auto z-0">
        <BackgroundBoxes
          backgroundColor="#FFFFFF"
          borderColor="rgba(128, 40, 228, 0.08)"
          boxSize={48}
          borderWidth={1}
          colors={{
            paletteCount: 6,
            color1: "#8028E4",
            color2: "#8028E4",
            color3: "#8028E4",
            color4: "#8028E4",
            color5: "#8028E4",
            color6: "#8028E4",
          }}
        />
      </div>

      {/* Subtle purple radial glow overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(128,40,228,0.08)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 pt-0">
        <ContainerScroll titleComponent={titleComponent}>
          <DashboardMockup />
        </ContainerScroll>
      </div>
    </section>
  );
}
