import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, jakarta, inter } from "./shared";

interface MarqueeProps {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div className="overflow-hidden w-full">
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="flex gap-5 w-max"
        style={{
          animation: `marquee-scroll 35s linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
        onMouseEnter={
          pauseOnHover
            ? (e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "paused"; }
            : undefined
        }
        onMouseLeave={
          pauseOnHover
            ? (e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "running"; }
            : undefined
        }
      >
        <div className="flex gap-5">{children}</div>
        <div className="flex gap-5" aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}

interface ReviewCardProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
}

const ReviewCard = ({
  quote,
  name,
  title,
  avatar,
  rating,
}: ReviewCardProps) => (
  <div className="w-72 flex-shrink-0 p-5 rounded-2xl bg-[#12121F] border border-white/[0.07] hover:border-[#8028E4]/35 transition-all duration-300 flex flex-col gap-3 cursor-default">
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, j) => (
        <Star key={j} size={12} className="text-[#8028E4] fill-[#8028E4]" />
      ))}
    </div>
    <p className="text-[13.5px] text-[#CCCCDD] leading-relaxed line-clamp-3 flex-1" style={inter}>
      "{quote}"
    </p>
    <div className="flex items-center gap-2.5 pt-1 border-t border-white/[0.05]">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8028E4] to-[#A855F7] flex items-center justify-center flex-shrink-0">
        <span className="text-[9px] font-bold text-white">{avatar}</span>
      </div>
      <div>
        <div className="text-[12.5px] font-semibold text-white" style={jakarta}>{name}</div>
        <div className="text-[11px] text-[#6B6B80]" style={inter}>{title}</div>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We reduced time-to-hire from 28 days to 9 days. Hireloom's AI interviews gave our team back hours every week while actually improving candidate quality.",
      name: "Nadia Osei",
      title: "VP of People, Cascade",
      avatar: "NO",
      rating: 5,
    },
    {
      quote: "The explainable scorecards changed how our hiring managers engage with candidates. Instead of gut feelings, every decision is grounded in structured evidence.",
      name: "Tom Ashford",
      title: "Head of Talent Acquisition, Meridian",
      avatar: "TA",
      rating: 5,
    },
    {
      quote: "I was skeptical of AI interviewing, but the bias reduction and consistency across candidates is remarkable. EEOC readiness is now a non-issue for us.",
      name: "Priya Anand",
      title: "Chief People Officer, Vantage Health",
      avatar: "PA",
      rating: 5,
    },
    {
      quote: "The signal quality from Hireloom's AI interviews is genuinely better than phone screens. We're catching depth we used to miss until the final round.",
      name: "James Liu",
      title: "Engineering Lead, Finvera",
      avatar: "JL",
      rating: 5,
    },
    {
      quote: "Candidates consistently tell us our process feels fair and transparent. Hireloom has made us a better employer brand without any extra effort from the team.",
      name: "Sarah Okonkwo",
      title: "Talent Director, Elevate",
      avatar: "SO",
      rating: 5,
    },
    {
      quote: "We cut screening costs by 60% in the first quarter. The ROI was obvious within weeks — and the quality of hires has measurably improved across every team.",
      name: "Marcus Webb",
      title: "Head of HR, Synapse",
      avatar: "MW",
      rating: 5,
    },
  ];

  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3);

  return (
    <section className="py-24 bg-[#0A0A14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div {...fadeUp(0)} className="text-center max-w-xl mx-auto mb-12">
          <div
            className="text-[12.5px] font-semibold uppercase tracking-widest text-[#A855F7] mb-3"
            style={inter}
          >
            Customer Stories
          </div>
          <h2
            className="text-[2.25rem] font-extrabold tracking-[-0.8px] text-white mb-4 leading-[1.2]"
            style={jakarta}
          >
            Trusted by teams who take hiring seriously.
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <Marquee pauseOnHover>
          {row1.map((t) => <ReviewCard key={t.name} {...t} />)}
        </Marquee>
        <div className="mt-5" />
        <Marquee reverse pauseOnHover>
          {row2.map((t) => <ReviewCard key={t.name} {...t} />)}
        </Marquee>

        {/* Fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0A0A14] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0A0A14] to-transparent" />
      </div>
    </section>
  );
}
