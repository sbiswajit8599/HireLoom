import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#8028E4] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "radial-gradient(circle at 30% 50%, #ffffff 0%, transparent 60%), radial-gradient(circle at 70% 50%, #ffffff 0%, transparent 60%)"
      }} />
      <div className="relative max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <motion.div {...fadeUp(0)}>
          <h2
            className="text-[2.5rem] lg:text-[3rem] font-extrabold tracking-[-1px] text-white mb-5"
            style={jakarta}
          >
            Start hiring smarter today.
          </h2>
          <p
            className="text-[1.05rem] text-white/75 leading-relaxed max-w-lg mx-auto mb-8"
            style={inter}
          >
            Join hundreds of companies using Hireloom to reduce time-to-hire, improve candidate quality, and build fair, defensible hiring processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#8028E4] font-semibold px-7 py-3.5 rounded-xl hover:bg-white/90 transition-all duration-200 text-[14px]"
              style={inter}
            >
              Get Started Free
              <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/15 transition-all duration-200 text-[14px]"
              style={inter}
            >
              Book a Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
