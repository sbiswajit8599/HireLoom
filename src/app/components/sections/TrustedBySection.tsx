import { motion } from "framer-motion";
import { fadeUp, jakarta, inter } from "./shared";

export default function TrustedBySection() {
  const companies = [
    "Accenture", "Twilio", "Deel", "Mercury", "Carta",
    "Lattice", "Rippling", "Brex", "Loom", "Vercel",
  ];

  return (
    <section className="py-14 bg-[#F9F9FB] border-y border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.p
          {...fadeUp(0)}
          className="text-center text-[12px] font-semibold uppercase tracking-widest text-[#9999AA] mb-8"
          style={inter}
        >
          Trusted by fast-growing teams worldwide
        </motion.p>
        <motion.div
          {...fadeUp(0.07)}
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5"
        >
          {companies.map((c) => (
            <span
              key={c}
              className="text-[14.5px] font-semibold text-[#B0B0C0] hover:text-[#6B6B80] transition-colors cursor-default"
              style={jakarta}
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
