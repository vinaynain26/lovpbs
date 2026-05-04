import { useProgram } from "@/contexts/ProgramContext";
import { Briefcase, GraduationCap, ArrowRight, Clock, Users, BookOpen, TrendingUp } from "lucide-react";

const programs = [
  {
    id: "tbm" as const,
    label: "Experienced Professionals",
    title: "PGP TBM",
    icon: Briefcase,
    accentClass: "text-mu-gold",
    accentBg: "bg-mu-gold",
    highlights: [
      { icon: Clock, text: "16 months full-time" },
      { icon: Users, text: ">1 year work experience" },
      { icon: BookOpen, text: "120 credits" },
      { icon: TrendingUp, text: "Avg. CTC: ₹33.39 LPA" },
    ],
  },
  {
    id: "ylc" as const,
    label: "Young Leaders",
    title: "PGP TBM YLC",
    icon: GraduationCap,
    accentClass: "text-primary",
    accentBg: "bg-primary",
    highlights: [
      { icon: Clock, text: "24 months full-time" },
      { icon: Users, text: "0–1 year experience" },
      { icon: BookOpen, text: "200 credits" },
      { icon: TrendingUp, text: "Avg. CTC: ₹28.24 LPA" },
    ],
  },
];

const ProgramSelector = () => {
  const { program, setProgram } = useProgram();

  return (
    <section className="mu-section-dark mu-section-padding" id="comparison">
      <div className="mu-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-mu-gold block mb-3">
              SELECT YOUR PROGRAMME
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-foreground leading-[0.95]">
              Choose Your Path
            </h2>
          </div>
          <p className="text-sm text-mu-gray-400 max-w-sm md:text-right leading-relaxed">
            Two distinct programmes for different career stages. Select yours to see tailored details across the page.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 max-w-4xl mx-auto">
          {programs.map((p, i) => {
            const isActive = program === p.id;
            const Icon = p.icon;

            return (
              <button
                key={p.id}
                onClick={() => setProgram(p.id)}
                className={`group relative text-left transition-all duration-300 overflow-hidden ${
                  i === 0 ? "md:border-r-0" : ""
                }`}
              >
                <div className={`h-1.5 w-full transition-all duration-300 ${isActive ? p.accentBg : "bg-[hsl(0,0%,14%)]"}`} />
                <div className={`px-6 py-8 md:px-8 md:py-10 border transition-all duration-300 ${
                  isActive ? "bg-mu-dark-surface border-[hsl(0,0%,20%)]" : "bg-[hsl(0,0%,9%)] border-[hsl(0,0%,14%)] hover:bg-mu-dark-surface/60"
                }`}>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[56px] md:text-[72px] font-bold leading-none tracking-tighter font-sans ${
                      isActive ? p.accentClass : "text-[hsl(0,0%,18%)]"
                    } transition-colors duration-300`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className={`w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                      isActive ? `${p.accentBg} text-mu-black` : "bg-[hsl(0,0%,16%)] text-mu-gray-500"
                    }`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-2 transition-colors ${
                    isActive ? p.accentClass : "text-mu-gray-500"
                  }`}>
                    {p.label}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-sans font-bold text-primary-foreground mb-6 tracking-tight">
                    {p.title}
                  </h3>

                  <div className={`h-px w-full mb-6 transition-colors ${isActive ? "bg-[hsl(0,0%,22%)]" : "bg-[hsl(0,0%,14%)]"}`} />

                  <div className="space-y-4 mb-8">
                    {p.highlights.map((h) => {
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

                  <div className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-all ${
                    isActive ? p.accentClass : "text-mu-gray-600 group-hover:text-mu-gray-400"
                  }`}>
                    {isActive ? "Selected" : "Select Programme"}
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramSelector;