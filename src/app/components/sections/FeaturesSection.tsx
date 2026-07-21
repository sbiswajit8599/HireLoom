import { motion } from "framer-motion";
import {
  Brain, FileText, Video, Award, GitBranch, BarChart3,
  Users, Calendar, Zap, Shield
} from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";
import { Spotlight } from "../ui/spotlight";

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Candidate Matching",
      desc: "Semantic understanding of skills, experience, and culture fit — beyond keyword matching.",
    },
    {
      icon: FileText,
      title: "Resume Intelligence",
      desc: "Deep parsing and enrichment extracts structured signals from unstructured documents.",
    },
    {
      icon: Video,
      title: "Video Pre-screening",
      desc: "Asynchronous AI interviews with consistent, structured questions for every candidate.",
    },
    {
      icon: Award,
      title: "Explainable Scorecards",
      desc: "Every AI decision includes evidence, reasoning, and a human-readable rationale.",
    },
    {
      icon: GitBranch,
      title: "ATS Pipeline",
      desc: "Visual hiring pipeline with drag-and-drop stages, automations, and team access.",
    },
    {
      icon: BarChart3,
      title: "Hiring Analytics",
      desc: "Real-time dashboards tracking time-to-hire, funnel conversion, and team performance.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      desc: "Shared feedback, scorecards, and interview notes with granular permission controls.",
    },
    {
      icon: Calendar,
      title: "Calendar Integration",
      desc: "One-click interview scheduling synced with Google Calendar and Outlook.",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      desc: "Automate candidate communications, stage progression, and recruiter alerts.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      desc: "GDPR, SOC 2 Type II, EEOC compliance with audit logs and role-based access.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center max-w-xl mx-auto mb-16">
          <div
            className="text-[12.5px] font-semibold uppercase tracking-widest text-[#8028E4] mb-3"
            style={inter}
          >
            Platform Features
          </div>
          <h2
            className="text-[2.25rem] font-extrabold tracking-[-0.8px] text-[#0A0A14] mb-4 leading-[1.2]"
            style={jakarta}
          >
            Everything your team needs to hire better.
          </h2>
          <p className="text-[1rem] text-[#4A4A60] leading-relaxed" style={inter}>
            From first application to final offer — Hireloom gives your recruiting team the tools, intelligence, and automation to move faster with confidence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp(i * 0.05)}
              className="group relative overflow-hidden rounded-2xl bg-black/[0.08] p-[1px] transition-colors duration-300"
            >
              <Spotlight
                className="opacity-10 group-hover:opacity-100 transition-opacity duration-300"
                size={220}
                color="rgba(128, 40, 228, 0.35)"
              />
              <div className="relative w-full h-full rounded-[15px] bg-white/93 p-6 z-10 backdrop-blur-[1px]">
                <div className="w-10 h-10 rounded-xl bg-[#F4F0FF] flex items-center justify-center mb-4 group-hover:bg-[#EDE0FF] transition-colors">
                  <Icon size={18} className="text-[#8028E4]" />
                </div>
                <h3
                  className="text-[15px] font-semibold text-[#0A0A14] mb-2"
                  style={jakarta}
                >
                  {title}
                </h3>
                <p className="text-[13.5px] text-[#6B6B80] leading-relaxed" style={inter}>
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
