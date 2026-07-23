import { motion } from "framer-motion";
import { PlusIcon } from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";
import { LogoCloud, LogoCard } from "../ui/logo-cloud-2";

export default function TrustedBySection() {
  const companyLogos = [
    {
      name: "Firecrawl",
      src: "https://svgl.app/library/firecrawl-wordmark.svg",
    },
    {
      name: "Tembo",
      src: "https://svgl.app/library/tembo-wordmark.svg",
    },    
    {
      name: "Travelperk",
      src: "https://svgl.app/library/travelperk-wordmark-light.svg",
    },
    {
      name: "Intello",
      src: "https://svgl.app/library/intello_wordmark_dark.svg",
    },
    {
      name: "Turso",
      src: "https://svgl.app/library/turso-wordmark-light.svg",
    },
    {
      name: "Clerk",
      src: "https://svgl.app/library/clerk-wordmark-light.svg",
    },
    {
      name: "Docus",
      src: "https://svgl.app/library/docus-wordmark-light.svg",
    },
    {
      name: "Sanity",
      src: "https://svgl.app/library/sanity-wordmark-light.svg",
    },
    {
      name: "Interfere",
      src: "https://svgl.app/library/interfere_wordmark_black.svg",
    },
    {
      name: "Orshot",
      src: "https://svgl.app/library/orshot_wordmark_light.svg",
    },
  ];

  return (
    <section className="py-16 bg-[#F9F9FB] border-y border-black/[0.06] overflow-hidden" id="trusted-by">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center mb-10">
          <p
            className="text-[12px] font-semibold uppercase tracking-widest text-[#8028E4] mb-2"
            style={inter}
          >
            Trusted Worldwide
          </p>
          <h2
            className="text-[1.75rem] sm:text-[2.25rem] font-extrabold tracking-[-0.6px] text-[#0A0A14]"
            style={jakarta}
          >
            Trusted by fast-growing teams worldwide
          </h2>
        </motion.div>

        <motion.div {...fadeUp(0.1)}>
          <LogoCloud className="max-w-6xl mx-auto border-black/[0.08] shadow-sm rounded-xl">
            {companyLogos.map((company, index) => {
              const isEven = index % 2 === 0;
              // Only render the middle 4 plus icons (at row 1 interior dividers: index 0, 1, 2, 3)
              const showPlusIcon = index === 0 || index === 1 || index === 2 || index === 3;

              return (
                <LogoCard
                  key={company.name}
                  className={`border-b border-r border-black/[0.06] ${
                    isEven ? "bg-white" : "bg-[#FAFAFC]"
                  }`}
                  logo={{
                    src: company.src,
                    alt: `${company.name} Logo`,
                  }}
                >
                  {showPlusIcon && (
                    <PlusIcon
                      className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 z-10 size-5 text-[#8028E4]/100 pointer-events-none"
                      strokeWidth={1.5}
                    />
                  )}
                </LogoCard>
              );
            })}
          </LogoCloud>
        </motion.div>
      </div>
    </section>
  );
}
