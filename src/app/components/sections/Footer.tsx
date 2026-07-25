import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, ArrowUp, Sparkles } from "lucide-react";
import { jakarta, inter } from "./shared";
import { BGPattern } from "../ui/bg-pattern";

interface FooterLinkGroup {
  label: string;
  links: string[];
}

interface FooterProps {
  onSignInClick?: () => void;
}

export default function Footer({ onSignInClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkGroups: FooterLinkGroup[] = [
    {
      label: "Product",
      links: ["AI Matching", "Video Screening", "Scorecards", "ATS Pipeline", "Analytics", "Integrations"],
    },
    {
      label: "Solutions",
      links: ["Startups", "Mid-market", "Enterprise", "HR Leaders", "Talent Teams"],
    },
    {
      label: "Resources",
      links: ["Documentation", "API Reference", "Blog", "Case Studies", "Webinars", "Status Page"],
    },
    {
      label: "Company",
      links: ["About", "Careers", "Press", "Contact", "Privacy Policy", "Terms of Service"],
    },
  ];

  return (
    <footer
      className="relative min-h-[520px] md:h-[450px] w-full text-white bg-[#06060F]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Fixed bottom container */}
      <div className="fixed bottom-0 min-h-[520px] md:h-[450px] w-full bg-[#06060F]">
        {/* Sticky scroll container */}
        <div className="sticky top-[calc(100vh-450px)] h-full overflow-y-auto">
          <div className="relative flex size-full flex-col justify-between gap-8 border-t border-white/[0.08] px-6 py-10 md:px-12 lg:px-16 xl:px-20 w-full">
            {/* Background Glow Overlay */}
            <div
              aria-hidden
              className="absolute inset-0 isolate z-0 contain-strict pointer-events-none"
            >
              <div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(128,40,228,0.14)_0,hsla(270,100%,50%,.03)_50%,rgba(128,40,228,0.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(128,40,228,0.08)_0,rgba(128,40,228,0.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(128,40,228,0.08)_0,rgba(128,40,228,0.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
            </div>

            {/* Ambient Pattern */}
            <BGPattern
              variant="dots"
              mask="fade-edges"
              fill="rgba(128, 40, 228, 0.12)"
              size={24}
              className="opacity-50 pointer-events-none"
            />

            {/* Main Links & Brand Grid - Full Width */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-12 w-full my-auto">
              {/* Brand Column */}
              <AnimatedContainer delay={0.05} className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <svg width="40" height="32" viewBox="0 0 128 102" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
                    <path d="M17.8792 0L39.677 8.38283L23.262 101.477L0 101.398L17.8792 0Z" fill="white"/>
                    <path d="M75.0511 0L96.8488 8.38283L80.4338 101.477L57.1719 101.398L75.0511 0Z" fill="white"/>
                    <g filter="url(#filter0_n_162_11)">
                      <path d="M127.296 62.9224C116.392 52.9839 102.319 45.8385 86.297 43.0785C44.3455 35.8518 6.68101 62.6235 0.000976562 101.401C8.10677 101.469 23.2608 101.469 23.2608 101.469C23.2608 101.469 56.5 45.8621 100.899 53.5106C110.45 55.1559 119.324 58.4019 127.296 62.9224Z" fill="url(#paint0_linear_162_11)"/>
                    </g>
                    <defs>
                      <filter id="filter0_n_162_11" x="0.000976562" y="41.8986" width="127.295" height="59.5706" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feTurbulence type="fractalNoise" baseFrequency="10 10" stitchTiles="stitch" numOctaves="3" result="noise" seed="235" />
                        <feColorMatrix in="noise" type="luminanceToAlpha" result="alphaNoise" />
                        <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                          <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
                        </feComponentTransfer>
                        <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped" />
                        <feFlood floodColor="rgba(255, 255, 255, 0.32)" result="color1Flood" />
                        <feComposite operator="in" in2="noise1Clipped" in="color1Flood" result="color1" />
                        <feMerge result="effect1_noise_162_11">
                          <feMergeNode in="shape" />
                          <feMergeNode in="color1" />
                        </feMerge>
                      </filter>
                      <linearGradient id="paint0_linear_162_11" x1="11.8342" y1="101.477" x2="128.944" y2="67.7949" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="0.504094" stopColor="#8028E4"/>
                        <stop offset="1" stopColor="#3F0086"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="font-bold text-[19px] tracking-[-0.4px] text-white" style={jakarta}>
                    Hireloom
                  </span>
                </div>
                <p className="text-[13px] text-[#9999AA] leading-relaxed mb-5 max-w-sm" style={inter}>
                  AI-powered hiring operating system with transparent decision support. Built for teams who hire with intention.
                </p>
                <div className="inline-flex items-center gap-2 text-[11.5px] text-[#9999AA] bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-lg" style={inter}>
                  <Shield size={13} className="text-[#8028E4]" />
                  <span>SOC 2 Type II · GDPR · EEOC</span>
                </div>
              </AnimatedContainer>

              {/* Link Columns */}
              {linkGroups.map((group, index) => (
                <AnimatedContainer
                  key={group.label}
                  delay={0.1 + index * 0.08}
                  className="w-full"
                >
                  <h3 className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-4" style={inter}>
                    {group.label}
                  </h3>
                  <ul className="space-y-2.5">
                    {group.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-[13px] text-[#9999AA] hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block"
                          style={inter}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AnimatedContainer>
              ))}
            </div>

            {/* Bottom Legal & Copyright Bar - Full Width */}
            <AnimatedContainer delay={0.35} className="relative z-10 border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
              <div className="flex items-center gap-2 text-[12px] text-[#6B6B80]" style={inter}>
                <span>© 2026 Hireloom, Inc. All rights reserved.</span>
                <span className="hidden md:inline text-white/10">|</span>
                <span className="hidden md:inline-flex items-center gap-1 text-[#8028E4]">
                  <Sparkles size={12} /> Autonomous Talent Intelligence
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 text-[12px] text-[#6B6B80]" style={inter}>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
                <a href="#" className="hover:text-white transition-colors">Security Audit</a>
                <a href="#" className="hover:text-white transition-colors">System Status</a>
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>

      {/* Floating Top Arrow Button on Right Bottom Corner */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-11 rounded-full bg-[#8028E4] hover:bg-[#9333EA] text-white shadow-[0_4px_20px_rgba(128,40,228,0.5)] border border-white/20 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
      </button>
    </footer>
  );
}

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  children?: React.ReactNode;
  delay?: number;
};

function AnimatedContainer({
  delay = 0.1,
  children,
  ...props
}: AnimatedContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
