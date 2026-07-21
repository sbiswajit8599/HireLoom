import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Startup",
      price: annual ? 299 : 349,
      desc: "For teams just starting to scale hiring.",
      features: [
        "Up to 5 open roles",
        "AI resume screening",
        "Async video interviews (50/mo)",
        "Basic scorecards",
        "Email support",
      ],
      cta: "Start Free Trial",
      highlight: false,
    },
    {
      name: "Growth",
      price: annual ? 799 : 949,
      desc: "For growing teams who need consistent, structured hiring.",
      features: [
        "Up to 25 open roles",
        "Advanced AI matching",
        "Unlimited video interviews",
        "Explainable scorecards",
        "ATS pipeline + automations",
        "Analytics dashboard",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: null,
      desc: "Custom scale with dedicated support, SLA, and compliance.",
      features: [
        "Unlimited roles",
        "Custom AI models",
        "SSO & SCIM provisioning",
        "GDPR & EEOC tooling",
        "Dedicated CSM",
        "SLA & 99.9% uptime",
        "Audit log export API",
      ],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center max-w-xl mx-auto mb-12">
          <div
            className="text-[12.5px] font-semibold uppercase tracking-widest text-[#8028E4] mb-3"
            style={inter}
          >
            Pricing
          </div>
          <h2
            className="text-[2.25rem] font-extrabold tracking-[-0.8px] text-[#0A0A14] mb-4"
            style={jakarta}
          >
            Simple, transparent pricing.
          </h2>
          <p className="text-[1rem] text-[#4A4A60] leading-relaxed mb-6" style={inter}>
            No per-user seat shock. Plans priced for hiring volume, not headcount.
          </p>

          <div className="inline-flex items-center gap-1 bg-[#F5F5F8] p-1 rounded-xl">
            <button
              onClick={() => setAnnual(false)}
              className={`text-[13px] font-medium px-4 py-2 rounded-lg transition-all ${!annual ? "bg-white text-[#0A0A14] shadow-sm" : "text-[#6B6B80]"}`}
              style={inter}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`text-[13px] font-medium px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${annual ? "bg-white text-[#0A0A14] shadow-sm" : "text-[#6B6B80]"}`}
              style={inter}
            >
              Annual
              <span className="text-[10px] font-semibold text-[#8028E4] bg-[#F4F0FF] px-1.5 py-0.5 rounded-full">Save 15%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map(({ name, price, desc, features, cta, highlight }, i) => (
            <motion.div
              key={name}
              {...fadeUp(i * 0.1)}
              className={`rounded-2xl border p-7 flex flex-col transition-all duration-300 ${
                highlight
                  ? "border-[#8028E4] bg-[#8028E4] shadow-[0_16px_48px_rgba(128,40,228,0.3)]"
                  : "border-black/[0.08] bg-white hover:border-[#8028E4]/25 hover:shadow-[0_8px_32px_rgba(128,40,228,0.07)]"
              }`}
            >
              {highlight && (
                <div className="text-[11px] font-bold text-[#8028E4] bg-white px-2.5 py-1 rounded-full self-start mb-3" style={inter}>
                  Most Popular
                </div>
              )}
              <h3
                className={`text-[18px] font-bold mb-1 ${highlight ? "text-white" : "text-[#0A0A14]"}`}
                style={jakarta}
              >
                {name}
              </h3>
              <p
                className={`text-[13px] mb-5 ${highlight ? "text-white/70" : "text-[#6B6B80]"}`}
                style={inter}
              >
                {desc}
              </p>

              <div className="mb-6">
                {price !== null ? (
                  <>
                    <span
                      className={`text-[2.5rem] font-extrabold tracking-tight ${highlight ? "text-white" : "text-[#0A0A14]"}`}
                      style={jakarta}
                    >
                      ${price}
                    </span>
                    <span
                      className={`text-[13px] ml-1 ${highlight ? "text-white/60" : "text-[#9999AA]"}`}
                      style={inter}
                    >
                      /month
                    </span>
                  </>
                ) : (
                  <span
                    className="text-[2rem] font-extrabold tracking-tight text-[#0A0A14]"
                    style={jakarta}
                  >
                    Custom
                  </span>
                )}
              </div>

              <ul className="space-y-2.5 mb-7 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${highlight ? "text-white" : "text-[#8028E4]"}`}
                    />
                    <span
                      className={`text-[13px] ${highlight ? "text-white/85" : "text-[#4A4A60]"}`}
                      style={inter}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`w-full text-center text-[14px] font-semibold py-3 rounded-xl transition-all duration-200 ${
                  highlight
                    ? "bg-white text-[#8028E4] hover:bg-white/90"
                    : "bg-[#8028E4] text-white hover:bg-[#6B1FC8] shadow-[0_4px_14px_rgba(128,40,228,0.25)]"
                }`}
                style={inter}
              >
                {cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
