import { motion } from "framer-motion";
import { Lock, Globe, Shield, Eye, Users } from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";

export default function SecuritySection() {
  const pillars = [
    { icon: Lock, title: "SOC 2 Type II", desc: "Annual third-party security audits covering all infrastructure and data handling practices." },
    { icon: Globe, title: "GDPR Compliant", desc: "Full data residency controls, subject access request automation, and right-to-erasure workflows." },
    { icon: Shield, title: "Data Encryption", desc: "AES-256 encryption at rest and TLS 1.3 in transit. Keys managed with HSM-backed vaults." },
    { icon: Eye, title: "Audit Logging", desc: "Immutable, timestamped logs for every action. Exportable for compliance or legal discovery." },
    { icon: Users, title: "Role-Based Access", desc: "Fine-grained permission controls down to individual job roles, pipelines, and candidate records." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center max-w-xl mx-auto mb-14">
          <div
            className="text-[12.5px] font-semibold uppercase tracking-widest text-[#8028E4] mb-3"
            style={inter}
          >
            Enterprise Security
          </div>
          <h2
            className="text-[2.25rem] font-extrabold tracking-[-0.8px] text-[#0A0A14] mb-4 leading-[1.2]"
            style={jakarta}
          >
            Security-first,<br /> compliance-ready.
          </h2>
          <p className="text-[1rem] text-[#4A4A60] leading-relaxed" style={inter}>
            Hireloom is built for enterprise environments with strict security, privacy, and auditability requirements.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp(i * 0.07)}
              className="text-center p-6 rounded-2xl border border-black/[0.07] bg-[#FAFAFA] hover:border-[#8028E4]/25 hover:bg-white hover:shadow-[0_8px_32px_rgba(128,40,228,0.07)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#F4F0FF] flex items-center justify-center mx-auto mb-4">
                <Icon size={20} className="text-[#8028E4]" />
              </div>
              <h3 className="text-[14px] font-semibold text-[#0A0A14] mb-2" style={jakarta}>{title}</h3>
              <p className="text-[12.5px] text-[#6B6B80] leading-relaxed" style={inter}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
