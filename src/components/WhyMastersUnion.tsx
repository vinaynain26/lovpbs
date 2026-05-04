import { ChevronRight, ArrowUpRight, TrendingUp } from "lucide-react";
import leadersHireImg from "@/assets/leaders-hire.webp";
import realCapitalImg from "@/assets/real-capital.webp";


const masterCompanies = [
  "Google", "McKinsey", "Zerodha", "Bain", "Amazon", "Microsoft", "Goldman Sachs", "Flipkart",
];

const highlights = [
  {
    title: "Graduates Build Companies, Not Just Resumes",
    desc: "While most B-schools stop at placements, our graduates go further — 11.2% step into Entrepreneur-in-Residence and Chief of Staff roles. The Founder Fellowship backs 25 founders each year, producing 30+ funded startups, ₹480 Cr in projected FY26 revenue, and 180+ jobs created.",
    image: "https://files.mastersunion.link/media/img/pgp-highlight.webp",
    extra: "sharktank" as const,
  },
  {
    title: "Learn From the Leaders Who'll Hire You",
    desc: "Every course is taught by practicing CXOs from Google, McKinsey, Zerodha, and Bain — not professors who've never built a business.",
    image: leadersHireImg,
    extra: "masters" as const,
  },
  {
    title: "₹5 Cr Real Capital. Real Decisions. Real Stakes.",
    desc: "Students manage a ₹5 crore investment fund, run live consulting projects, and build D2C businesses that have generated over ₹2 crore in revenue.",
    image: realCapitalImg,
    extra: "fund" as const,
  },
];

const relatedLinks = [
  { label: "See Career Outcomes", href: "#outcomes" },
  { label: "Download Placement Report", href: "#" },
  { label: "Meet Our Alumni", href: "#alumni" },
];

const WhyMastersUnion = () => (
  <section className="mu-section-dark-vivid mu-section-padding" id="highlights">
    <div className="mu-container">
      <div className="flex items-center gap-2 mb-4">
        <img src="https://files.mastersunion.link/resources/svg/star.svg" alt="" className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-[0.15em] mu-gradient-text">WHY MASTERS' UNION</span>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-6 sm:gap-8 lg:gap-16">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary-foreground mb-3">
            Learn By Doing.<br />
            <span style={{ fontWeight: 700 }}>Not By Listening.</span>
          </h2>
          <p className="text-xs sm:text-sm text-mu-gray-400 leading-relaxed">
            You won't sit through lectures. You'll manage a ₹5 Cr fund, launch revenue-generating startups, and solve real problems for actual companies.
          </p>

          <div className="mt-6 sm:mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mu-gray-500 mb-4">Quick Links</p>
            <div className="space-y-0">
              {relatedLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between py-3 sm:py-3.5 border-b border-mu-gray-700/40 text-xs sm:text-sm font-medium text-mu-gray-300 hover:text-primary-foreground transition-colors group"
                >
                  {link.label}
                  <ChevronRight size={16} className="text-mu-gray-600 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {highlights.map((h) => (
            <div key={h.title} className="group rounded-lg overflow-hidden bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,15%)] shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300">
              <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] md:grid-cols-[240px_1fr] gap-0">
                <div className="relative h-[160px] sm:h-auto overflow-hidden">
                  <img src={h.image} alt={h.title} className="w-full h-full object-cover opacity-90" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-transparent via-transparent to-[hsl(0,0%,10%)]" />
                </div>
                <div className="p-5 sm:p-6 md:p-7 flex flex-col justify-center">
                  <h3 className="font-display font-light text-xl sm:text-2xl md:text-[1.65rem] text-primary-foreground mb-3 leading-tight tracking-[-0.01em]">
                    {h.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-mu-gray-400 leading-relaxed">{h.desc}</p>

                  {h.extra === "sharktank" && (
                    <div className="mt-4 border-t border-[hsl(var(--mu-gray-700))]/30 pt-3">
                      <a
                        href="#entrepreneurship"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-mu-gold hover:text-mu-gold/80 transition-colors group"
                      >
                        <TrendingUp size={14} />
                        Explore Startup Portfolio
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}

                  {h.extra === "masters" && (
                    <div className="mt-4 border-t border-[hsl(var(--mu-gray-700))]/30 pt-3">
                      <p className="text-[10px] sm:text-xs font-semibold text-mu-gray-500 uppercase tracking-widest mb-2.5">500+ Masters from</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {masterCompanies.map((c) => (
                          <span key={c} className="text-[10px] sm:text-[11px] font-medium text-mu-gray-300 bg-[hsl(var(--mu-dark-surface))] px-2.5 py-1 rounded">
                            {c}
                          </span>
                        ))}
                      </div>
                      <a
                        href="https://mastersunion.org/masterspage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-mu-gold hover:text-mu-gold/80 transition-colors group mt-3"
                      >
                        <TrendingUp size={14} />
                        Meet Our Masters
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}

                  {h.extra === "fund" && (
                    <div className="mt-4 border-t border-[hsl(var(--mu-gray-700))]/30 pt-3">
                      <a
                        href="https://mastersunion.org/student-fund"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-mu-gold hover:text-mu-gold/80 transition-colors group"
                      >
                        <TrendingUp size={14} />
                        View Annual Performance Report
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyMastersUnion;