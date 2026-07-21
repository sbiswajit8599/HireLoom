import { Shield } from "lucide-react";
import { jakarta, inter } from "./shared";

export default function Footer() {
  const links = {
    Product: ["AI Matching", "Video Screening", "Scorecards", "ATS Pipeline", "Analytics", "Integrations"],
    Solutions: ["Startups", "Mid-market", "Enterprise", "HR Leaders", "Talent Teams"],
    Resources: ["Documentation", "API Reference", "Blog", "Case Studies", "Webinars", "Status Page"],
    Company: ["About", "Careers", "Press", "Contact", "Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="bg-[#0A0A14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 mb-4">
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
            </svg><span className="font-bold text-[18px] tracking-[-0.3px] text-white" style={jakarta}>
                          Hireloom
                        </span>
              
            </div>
            <p className="text-[13px] text-[#6B6B80] leading-relaxed mb-5" style={inter}>
              AI-powered hiring with transparent decision support. Built for teams who hire with intention.
            </p>
            <div className="flex items-center gap-2 text-[11.5px] text-[#6B6B80]" style={inter}>
              <Shield size={12} className="text-[#8028E4]" />
              SOC 2 Type II · GDPR
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-[11px] font-bold text-[#4A4A60] uppercase tracking-widest mb-4" style={inter}>
                {section}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] text-[#6B6B80] hover:text-white transition-colors"
                      style={inter}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] mt-12 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#4A4A60]" style={inter}>
            © 2026 Hireloom, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[12px] text-[#4A4A60]" style={inter}>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
