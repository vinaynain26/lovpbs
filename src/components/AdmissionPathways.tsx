import { useState } from "react";
import { ArrowUpRight, ArrowRight, Clock, Users, BookOpen, TrendingUp, MapPin, ChevronRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const pathways = [
  {
    id: "tbm",
    num: "01",
    label: "Experienced Professionals",
    shortTitle: "PGP TBM",
    fullTitle: "PGP in Technology & Business Management",
    icon: ArrowUpRight,
    accentClass: "text-mu-gold",
    accentBg: "bg-mu-gold",
    color: "#ffd000",
    quickStats: [
      { icon: Clock, text: "16 months full-time" },
      { icon: Users, text: ">1 year work experience" },
      { icon: BookOpen, text: "120 credits (Inclass + Outclass)" },
      { icon: TrendingUp, text: "Avg. CTC: ₹33.39 LPA" },
    ],
    duration: "16 Months",
    format: "Full-Time, Opt-in Residential",
    location: "Gurugram (DLF Cyberpark)",
    cohortSize: "~120",
    nextCohort: "June 2026",
    ideal: "Built for ambitious professionals with 1–8 years of experience ready to leap into tech-forward leadership roles — learn from CXOs of Google, McKinsey & Bain, not just textbooks.",
    highlights: [
      { stat: "₹1.28 Cr", desc: "Highest CTC placed" },
      { stat: "145+", desc: "Marquee recruiters — Google, Flipkart, Zomato & more" },
      { stat: "₹5 Cr", desc: "Student-led investment fund — real startups & equities" },
      { stat: "20+", desc: "Cities covered in Bharat Immersion field programme" },
      { stat: "100+", desc: "VCs at Demo Day — launch your startup on campus" },
      { stat: "11.2%", desc: "Students placed as EiR & Chief of Staff at top startups" },
    ],
    applyLink: "https://mastersunion.org/pgp-tbm-applynow",
  },
  {
    id: "ylc",
    num: "02",
    label: "Young Leaders",
    shortTitle: "PGP TBM YLC",
    fullTitle: "Young Leaders' Certificate Programme",
    icon: ArrowUpRight,
    accentClass: "text-[#E38330]",
    accentBg: "bg-[#E38330]",
    color: "#E38330",
    quickStats: [
      { icon: Clock, text: "24 months full-time" },
      { icon: Users, text: "0–1 year experience" },
      { icon: BookOpen, text: "200 credits (Inclass + Outclass)" },
      { icon: TrendingUp, text: "Avg. CTC: ₹28.24 LPA" },
    ],
    duration: "24 Months",
    format: "Full-Time, Opt-in Residential",
    location: "Gurugram (DLF Cyberpark)",
    cohortSize: "~80",
    nextCohort: "June 2026",
    ideal: "Designed for fresh graduates and early-career go-getters (0–1 year experience) who want to fast-track into leadership — with extra foundational depth and a mandatory industry internship.",
    highlights: [
      { stat: "₹46.22 LPA", desc: "Highest CTC placed" },
      { stat: "100+", desc: "Recruiting companies across sectors" },
      { stat: "₹2 Cr+", desc: "Earned collectively in Dropshipping Challenge" },
      { stat: "200", desc: "Credits — deeper foundational business & tech modules" },
      { stat: "Day 1", desc: "Startup incubation — graduate with a running business" },
      { stat: "1M+", desc: "Followers built via Creator-preneur track" },
    ],
    applyLink: "https://mastersunion.org/pgp-tbm-applynow",
  },
];

const AdmissionPathways = () => {
  const [selected, setSelected] = useState<string | null>("tbm");
  const active = pathways.find((p) => p.id === selected);

  return (
    <section className="mu-section-dark mu-section-padding" id="pathways">
      <div className="mu-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="https://files.mastersunion.link/resources/svg/star.svg" alt="" className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] mu-gradient-text-vivid">
                ADMISSION PATHWAYS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-primary-foreground leading-[1.15]">
              Two Programmes.<br />
              <span className="font-bold">One Mission.</span>
            </h2>
          </div>
          <p className="text-sm text-mu-gray-400 max-w-sm md:text-right leading-relaxed">
            Choose the pathway that matches your experience level and career ambitions. Both lead to transformative outcomes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0">
          {/* Left: Programme cards */}
          <div className="grid grid-cols-2 lg:grid-cols-1 lg:w-[360px] shrink-0 gap-0">
            {pathways.map((p) => {
              const isActive = selected === p.id;
              const Icon = p.icon;

              return (
                <button
                  key={p.id}
                  onClick={() => setSelected(isActive ? null : p.id)}
                  className="group relative text-left transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`h-1.5 w-full transition-all duration-300 ${
                      isActive ? p.accentBg : "bg-[hsl(0,0%,14%)]"
                    }`}
                  />
                  <div
                    className={`px-3 sm:px-6 py-4 sm:py-8 border transition-all duration-300 ${
                      isActive
                        ? "bg-mu-dark-surface border-[hsl(0,0%,20%)]"
                        : "bg-[hsl(0,0%,9%)] border-[hsl(0,0%,14%)] hover:bg-mu-dark-surface/60"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3 sm:mb-6">
                      <span className={`text-2xl sm:text-5xl md:text-6xl font-bold leading-none tracking-tighter font-sans ${
                        isActive ? p.accentClass : "text-[hsl(0,0%,18%)]"
                      } transition-colors duration-300`}>
                        {p.num}
                      </span>
                      <div className={`w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300 ${
                        isActive ? `${p.accentBg} text-mu-black` : "bg-[hsl(0,0%,16%)] text-mu-gray-500"
                      }`}>
                        <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                      </div>
                    </div>

                    <p className={`text-[9px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-1 sm:mb-2 transition-colors leading-tight ${
                      isActive ? p.accentClass : "text-mu-gray-500"
                    }`}>
                      {p.label}
                    </p>

                    <h3 className="text-base sm:text-2xl font-sans font-bold text-primary-foreground mb-3 sm:mb-6 tracking-tight">
                      {p.shortTitle}
                    </h3>

                    <div className={`h-px w-full mb-3 sm:mb-6 transition-colors ${
                      isActive ? "bg-[hsl(0,0%,22%)]" : "bg-[hsl(0,0%,14%)]"
                    }`} />

                    {/* Quick stats - hidden on small screens */}
                    <div className="hidden sm:block space-y-4 mb-8">
                      {p.quickStats.map((h) => {
                        const HIcon = h.icon;
                        return (
                          <div key={h.text} className="flex items-center gap-3">
                            <HIcon size={14} className={`shrink-0 ${isActive ? p.accentClass : "text-mu-gray-600"} transition-colors`} />
                            <span className={`text-sm ${isActive ? "text-mu-gray-200" : "text-mu-gray-500"} transition-colors`}>
                              {h.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className={`flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm font-semibold uppercase tracking-wider transition-all ${
                      isActive ? p.accentClass : "text-mu-gray-600 group-hover:text-mu-gray-400"
                    }`}>
                      {isActive ? "Viewing" : "View"}
                      <ChevronRight size={12} className={`sm:w-[14px] sm:h-[14px] transition-transform ${isActive ? "rotate-90" : "group-hover:translate-x-1"}`} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: expanded detail panel */}
          {active && (
            <div className="flex-1 min-w-0 border border-[hsl(0,0%,20%)] lg:border-l-0 border-t-0 lg:border-t bg-mu-dark-surface animate-in fade-in duration-300 max-h-[80vh] lg:max-h-none overflow-y-auto">
              <div className={`h-1.5 w-full ${active.accentBg}`} />
              <div className="p-5 sm:p-6 md:p-8">
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-3 inline-block"
                  style={{ color: active.color }}
                >
                  {active.label}
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-sans font-bold text-primary-foreground mb-2 tracking-tight">
                  {active.fullTitle}
                </h3>
                <p className="text-sm text-mu-gray-400 leading-relaxed mb-6 sm:mb-8">{active.ideal}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-6 sm:mb-8">
                  {[
                    { icon: MapPin, label: "Location", value: active.location },
                    { icon: Users, label: "Cohort Size", value: active.cohortSize },
                    { icon: GraduationCap, label: "Next Cohort", value: active.nextCohort },
                  ].map((stat) => (
                    <div key={stat.label} className="px-3 sm:px-5 py-3 sm:py-4 border border-[hsl(0,0%,14%)] bg-[hsl(0,0%,9%)]">
                      <stat.icon size={14} className="text-mu-gray-500 mb-1.5 sm:mb-2" />
                      <p className="text-[9px] sm:text-xs text-mu-gray-500 uppercase tracking-wider font-semibold mb-0.5 sm:mb-1">{stat.label}</p>
                      <p className="text-xs sm:text-sm font-semibold text-primary-foreground break-words">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-mu-gray-500 mb-3 sm:mb-4">Programme Highlights</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                  {active.highlights.map((h, i) => (
                    <div key={i} className="p-3 sm:p-4 rounded bg-[hsl(0,0%,9%)] border border-[hsl(0,0%,14%)]">
                      <span
                        className="block text-2xl sm:text-3xl font-display font-extrabold mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                        style={{ color: active.color }}
                      >
                        {h.stat}
                      </span>
                      <span className="text-[10px] sm:text-xs text-mu-gray-400 leading-snug">{h.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button variant="brand" size="lg" className="w-full sm:w-auto" asChild>
                    <a href={active.applyLink} target="_blank" rel="noopener noreferrer">
                      Apply for {active.shortTitle} <ArrowUpRight size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdmissionPathways;
