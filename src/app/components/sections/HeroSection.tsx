import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, Check, Brain, Users, Calendar, BarChart3,
  Bell, Play, Sparkles, Video, ShieldCheck, TrendingUp,
  Zap, Activity, Filter, Search, LayoutDashboard
} from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";
import { TextMorph } from "../ui/text-morph";
import BackgroundBoxes from "../ui/background-boxes";

function DashboardMockup() {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleScroll = () => {
    setIsScrolling(true);
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const candidates = [
    {
      name: "Sarah Chen",
      role: "Senior Full-Stack Engineer",
      score: 96,
      status: "Interview",
      avatar: "SC",
      skills: ["React", "Node.js", "System Design"],
      time: "2m ago",
    },
    {
      name: "Marcus Rivera",
      role: "Staff Product Manager",
      score: 91,
      status: "Offer",
      avatar: "MR",
      skills: ["Roadmap", "PLG", "Analytics"],
      time: "14m ago",
    },
    {
      name: "Priya Patel",
      role: "Lead UX Architect",
      score: 89,
      status: "Screening",
      avatar: "PP",
      skills: ["Design Systems", "Figma", "User Research"],
      time: "1h ago",
    },
    {
      name: "Jordan Kim",
      role: "Principal Data Scientist",
      score: 86,
      status: "Screening",
      avatar: "JK",
      skills: ["PyTorch", "LLMs", "MLOps"],
      time: "2h ago",
    },
  ];

  const statusColors: Record<string, string> = {
    Interview: "bg-blue-500/15 text-blue-300 border border-blue-500/30",
    Screening: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
    Offer: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0A0B12] text-white flex flex-col pointer-events-auto font-sans shadow-2xl">
      {/* Dark Titlebar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-[#12131F]/90 border-b border-white/[0.08] flex-shrink-0 backdrop-blur-md">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]" />
          <div className="ml-2 sm:ml-3 flex items-center gap-2 bg-[#08090F] rounded-md px-3 py-1 text-[10px] sm:text-[11px] text-zinc-400 border border-white/[0.08] truncate max-w-[200px] sm:max-w-xs" style={inter}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            app.hireloom.io/dashboard
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-purple-300 bg-[#8028E4]/20 border border-[#8028E4]/30 px-2.5 py-0.5 rounded-full font-medium" style={inter}>
          <Sparkles size={11} className="text-[#A855F7]" />
          <span className="hidden sm:inline">AI Engine Active</span>
        </div>
      </div>

      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Dark Sidebar */}
        <div className="w-10 sm:w-12 lg:w-44 bg-[#0E0F1A] border-r border-white/[0.08] py-3 sm:py-4 flex-shrink-0 flex flex-col justify-between">
          <div className="space-y-1 px-1.5 sm:px-2">
            {[
              { icon: LayoutDashboard, label: "Dashboard", active: true },
              { icon: Users, label: "Candidates" },
              { icon: Brain, label: "AI Insights" },
              { icon: Video, label: "AI Interviews" },
              { icon: BarChart3, label: "Analytics" },
              { icon: Calendar, label: "Schedule" },
              { icon: Bell, label: "Notifications" },
            ].map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-lg cursor-pointer transition-all ${
                  active
                    ? "bg-[#8028E4]/20 border border-[#8028E4]/40 text-[#C084FC] font-semibold shadow-[0_0_12px_rgba(128,40,228,0.25)]"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                }`}
              >
                <Icon size={14} className="flex-shrink-0" />
                <span className="hidden lg:block text-[11.5px]" style={inter}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Sidebar Footer Widget */}
          <div className="hidden lg:block mx-2 p-2.5 rounded-xl bg-[#141525] border border-white/[0.06]">
            <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1.5" style={inter}>
              <span className="flex items-center gap-1 font-medium text-zinc-300">
                <Zap size={10} className="text-[#A855F7]" /> AI Credits
              </span>
              <span className="font-semibold text-purple-300">84%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#8028E4] to-[#A855F7] rounded-full w-[84%]" />
            </div>
          </div>
        </div>

        {/* Dark Main Content */}
        <div
          onScroll={handleScroll}
          className={`flex-1 p-2.5 sm:p-4 min-w-0 overflow-y-auto space-y-3.5 sm:space-y-4 bg-[#080910] transition-all duration-300 ${
            isScrolling
              ? "[scrollbar-width:thin] [scrollbar-color:#8028E4_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#8028E4]/60 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent"
              : "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          }`}
        >
          {/* Top Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 bg-[#121320] p-2 rounded-xl border border-white/[0.08]">
            <div className="flex items-center gap-2 bg-[#0A0B14] px-2.5 py-1.5 rounded-lg border border-white/[0.06] flex-1">
              <Search size={13} className="text-zinc-400 flex-shrink-0" />
              <input
                type="text"
                readOnly
                placeholder="Search candidates by skills, AI score, status..."
                className="bg-transparent text-[11px] sm:text-[12px] text-zinc-200 placeholder-zinc-500 focus:outline-none w-full"
                style={inter}
              />
            </div>
            <div className="flex items-center gap-1.5">
              <button className="flex items-center gap-1 bg-[#1A1B2E] text-zinc-300 text-[10px] sm:text-[11px] px-2.5 py-1.5 rounded-lg border border-white/[0.08] hover:border-purple-500/30 transition-all font-medium" style={inter}>
                <Filter size={11} className="text-purple-400" />
                <span>Filter</span>
              </button>
              <button className="flex items-center gap-1 bg-gradient-to-r from-[#8028E4] to-[#9333EA] text-white text-[10px] sm:text-[11px] px-3 py-1.5 rounded-lg font-semibold shadow-[0_2px_10px_rgba(128,40,228,0.3)] hover:opacity-90 transition-all" style={inter}>
                <span>+ Post Role</span>
              </button>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {[
              { label: "Active Roles", value: "14", trend: "+3 this week", badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
              { label: "AI Screened", value: "1,420", trend: "98.4% accuracy", badgeColor: "text-purple-300 bg-purple-500/10 border-purple-500/20" },
              { label: "Avg. Time-to-Hire", value: "4.2 Days", trend: "-65% Faster", badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
              { label: "Avg. AI Match", value: "91.8", trend: "Top 5% Talent", badgeColor: "text-amber-300 bg-amber-500/10 border-amber-500/20" },
            ].map(({ label, value, trend, badgeColor }) => (
              <div key={label} className="bg-[#121320] rounded-xl p-2.5 sm:p-3 border border-white/[0.08] hover:border-[#8028E4]/40 transition-all">
                <div className="flex items-center justify-between">
                  <div className="text-[15px] sm:text-[19px] font-extrabold text-white" style={jakarta}>
                    {value}
                  </div>
                  <span className={`text-[8.5px] sm:text-[9.5px] font-semibold px-1.5 py-0.5 rounded border whitespace-nowrap ${badgeColor}`} style={inter}>
                    {trend}
                  </span>
                </div>
                <div className="text-[9.5px] sm:text-[11px] text-zinc-400 mt-1" style={inter}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Candidate List Section */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10px] sm:text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5" style={inter}>
                <Activity size={12} className="text-[#A855F7]" />
                Recent High-Match Candidates
              </div>
              <span className="text-[10px] text-purple-400 font-medium cursor-pointer hover:underline" style={inter}>View all (142)</span>
            </div>

            <div className="space-y-2">
              {candidates.map((c) => (
                <div
                  key={c.name}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl border border-white/[0.08] bg-[#121320] hover:bg-[#18192C] hover:border-[#8028E4]/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8028E4] to-[#A855F7] flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(128,40,228,0.4)]">
                      <span className="text-[10px] font-bold text-white">{c.avatar}</span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <div className="text-[11.5px] sm:text-[12.5px] font-bold text-white group-hover:text-purple-300 transition-colors truncate" style={jakarta}>
                          {c.name}
                        </div>
                        <span className="text-[9px] text-zinc-500 hidden sm:inline" style={inter}>• {c.time}</span>
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-zinc-400 truncate" style={inter}>
                        {c.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 flex-shrink-0 pt-1 sm:pt-0 border-t sm:border-0 border-white/[0.04]">
                    {/* Skill Tags */}
                    <div className="hidden md:flex items-center gap-1">
                      {c.skills.map((skill) => (
                        <span key={skill} className="text-[9px] bg-white/[0.05] text-zinc-300 px-1.5 py-0.5 rounded border border-white/[0.06]" style={inter}>
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* AI Score */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 bg-[#0A0B14] px-2 py-1 rounded-md border border-white/[0.06]">
                        <div className="w-8 sm:w-12 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#8028E4] to-[#C084FC]"
                            style={{ width: `${c.score}%` }}
                          />
                        </div>
                        <span className="text-[10.5px] font-extrabold text-[#C084FC]">{c.score}</span>
                      </div>
                      <span className={`text-[9.5px] font-medium px-2 py-0.5 rounded-full ${statusColors[c.status]}`} style={inter}>
                        {c.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Grid: Live AI Interview & Talent Intelligence Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-1">
            {/* Widget 1: Live AI Video Interview Monitor */}
            <div className="bg-[#121320] rounded-xl p-3 border border-white/[0.08] flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-white" style={jakarta}>
                  <Video size={13} className="text-purple-400" />
                  Live AI Technical Interview
                </div>
                <div className="flex items-center gap-1 bg-red-500/15 border border-red-500/30 text-red-400 text-[9px] font-bold px-2 py-0.5 rounded-full animate-pulse" style={inter}>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  REC 04:18
                </div>
              </div>

              <div className="bg-[#0A0B14] p-2.5 rounded-lg border border-white/[0.06] space-y-2">
                <div className="flex items-center justify-between text-[10.5px]">
                  <span className="font-semibold text-zinc-200" style={jakarta}>Alex Vance</span>
                  <span className="text-zinc-400" style={inter}>Candidate ID #8492</span>
                </div>
                
                {/* Audio Waveform visualization */}
                <div className="flex items-center justify-center gap-1 h-5 py-1 bg-[#121320] rounded px-3">
                  {[40, 75, 30, 90, 60, 100, 45, 80, 55, 95, 35, 70, 50].map((h, idx) => (
                    <div
                      key={idx}
                      className="w-1 bg-gradient-to-t from-[#8028E4] to-[#C084FC] rounded-full animate-pulse"
                      style={{ height: `${h}%`, animationDelay: `${idx * 0.1}s` }}
                    />
                  ))}
                </div>

                <p className="text-[9.5px] text-zinc-400 italic bg-[#121320]/60 p-2 rounded border border-white/[0.04]" style={inter}>
                  "AI Prompting: Candidate explained event loop optimization and micro-frontend state sync with high technical accuracy."
                </p>
              </div>

              <div className="flex items-center justify-between text-[9.5px] text-zinc-400" style={inter}>
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <ShieldCheck size={11} /> 0% Bias Detected
                </span>
                <span className="text-purple-300 font-semibold">Real-time Score: 94/100</span>
              </div>
            </div>

            {/* Widget 2: Talent Pipeline Conversion Funnel */}
            <div className="bg-[#121320] rounded-xl p-3 border border-white/[0.08] flex flex-col justify-between space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-white" style={jakarta}>
                  <TrendingUp size={13} className="text-emerald-400" />
                  Hiring Pipeline Velocity
                </div>
                <span className="text-[9.5px] text-zinc-400" style={inter}>This Month</span>
              </div>

              <div className="space-y-2 py-1">
                {[
                  { stage: "Applications Received", count: "1,420", pct: "100%", color: "from-[#8028E4] to-indigo-600" },
                  { stage: "AI Screened & Ranked", count: "380", pct: "26.7%", color: "from-indigo-600 to-blue-500" },
                  { stage: "AI Video Interviewed", count: "84", pct: "5.9%", color: "from-blue-500 to-cyan-400" },
                  { stage: "Final Offer Issued", count: "12", pct: "0.8%", color: "from-cyan-400 to-emerald-400" },
                ].map(({ stage, count, pct, color }) => (
                  <div key={stage} className="space-y-0.5">
                    <div className="flex items-center justify-between text-[9.5px]" style={inter}>
                      <span className="text-zinc-300 font-medium">{stage}</span>
                      <span className="text-zinc-400">{count} ({pct})</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-800/80 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${color} rounded-full`} style={{ width: pct }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-white/[0.06] text-[9.5px]" style={inter}>
                <span className="text-purple-300 font-medium flex items-center gap-1">
                  <Sparkles size={10} /> Saved 42h manual effort
                </span>
                <span className="text-zinc-400">Target conversion: +14%</span>
              </div>
            </div>
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
      className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-0 md:pb-0 md:h-[85rem] flex flex-col items-center justify-start md:justify-center p-2 sm:p-4 md:p-20"
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
              "0 0 #00000080, 0 15px 35px #00000060, 0 45px 50px #00000050, 0 100px 70px #00000030, 0 0 40px rgba(128,40,228,0.25)",
          }}
          className="max-w-5xl mx-auto h-[32rem] sm:h-[40rem] md:h-[48rem] w-full border border-white/10 p-1.5 sm:p-2 md:p-3 bg-[#11121F] rounded-[20px] sm:rounded-[24px] shadow-2xl mt-4 sm:mt-6 md:mt-0"
        >
          <div className="h-full w-full overflow-hidden rounded-2xl bg-[#0A0B12]">
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
