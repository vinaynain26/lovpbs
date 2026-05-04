import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { useProgram } from "@/contexts/ProgramContext";

import bcgLogo from "@/assets/recruiters/bcg.png";
import blinkitLogo from "@/assets/recruiters/blinkit.png";

import mckinseyLogo from "@/assets/recruiters/mckinsey.png";
import bainLogo from "@/assets/recruiters/bain.png";
import zeptoLogo from "@/assets/recruiters/zepto.png";
import googleLogo from "@/assets/recruiters/google.png";
import microsoftLogo from "@/assets/recruiters/microsoft.png";
import metaLogo from "@/assets/recruiters/meta.png";
import zomatoLogo from "@/assets/recruiters/zomato.png";

const programStats = {
  tbm: [
    { value: "₹33.39L", label: "Average CTC" },
    { value: "₹1.28 Cr", label: "Highest CTC" },
    { value: "145+", label: "Marquee Recruiters" },
    { value: "11.2%", label: "Placed in EiR & CoS Roles" },
  ],
  ylc: [
    { value: "₹28.24L", label: "Average CTC" },
    { value: "₹46.22L", label: "Highest CTC" },
    { value: "100+", label: "Recruiting Companies" },
    { value: "Mandatory", label: "Internship Included" },
  ],
};

const roles = [
  "Product Manager", "Program Manager", "Strategy Associate", "Chief of Staff",
  "Entrepreneur in Residence", "Manager - Founder's Office", "Growth Manager",
  "Business Analyst", "Consultant", "Brand Marketing",
];

const recruiters = [
  { name: "Google", logo: googleLogo },
  { name: "BCG", logo: bcgLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "McKinsey", logo: mckinseyLogo },
  { name: "Meta", logo: metaLogo },
  
  { name: "Bain", logo: bainLogo },
  { name: "Zomato", logo: zomatoLogo },
  { name: "Blinkit", logo: blinkitLogo },
  { name: "Zepto", logo: zeptoLogo },
];

const CareerOutcomes = () => {
  const { program, isTBM } = useProgram();
  const stats = programStats[program];

  return (
    <section className="mu-section-dark-teal mu-section-padding" id="outcomes">
      <div className="mu-container">
        <div className="flex items-center gap-2 mb-4">
          <img src="https://files.mastersunion.link/resources/svg/star.svg" alt="" className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] mu-gradient-text-cool">CAREER OUTCOMES</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary-foreground mb-3">
          {isTBM
            ? <>Our Graduates Don't Just Get Jobs. They Get Careers.</>
            : <>From Campus to Corner Office — In Record Time.</>
          }
        </h2>
        <p className="text-xs sm:text-sm text-mu-gray-400 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
          {isTBM
            ? "5 graduating cohorts. 145+ recruiters. From Google and McKinsey to founding VC-backed startups — here's what happens after Masters' Union."
            : "Young leaders graduate into roles that typically require 5+ years of experience. The data speaks for itself."
          }
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-8 sm:mb-12">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`rounded-lg p-4 sm:p-5 md:p-6 border border-[hsl(0,0%,15%)] shadow-[0_6px_24px_rgba(0,0,0,0.5),0_2px_6px_rgba(168,85,247,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_4px_12px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300 ${i === 0 ? "mu-card-gradient-border" : "bg-[hsl(0,0%,10%)]"}`}>
              <div className="text-xl sm:text-2xl md:text-3xl font-display text-primary-foreground tabular-nums mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-mu-gray-500 font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-6 sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-mu-gray-500 mb-3 sm:mb-4">Roles Graduates Land</p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {roles.map((role) => (
              <span key={role} className="bg-[hsl(0,0%,11%)]/80 backdrop-blur-sm text-mu-gray-300 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-sm font-medium hover:border-[#39B5D7]/30 transition-colors">
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-mu-gray-500 mb-3 sm:mb-4">
            {isTBM ? "145+ Companies That Recruit From Us" : "100+ Companies That Recruit From Us"}
          </p>
          <div className="overflow-hidden rounded-lg">
            <div className="flex gap-4 sm:gap-6 items-center animate-scroll-left" style={{ willChange: "transform" }}>
              {[...recruiters, ...recruiters].map((r, i) => (
                <div key={`${r.name}-${i}`} className="shrink-0 px-3 sm:px-5 py-2 sm:py-3 bg-[hsl(0,0%,11%)]/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <img src={r.logo} alt={r.name} className="h-2 sm:h-3 md:h-3.5 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contextual CTA */}
        <div className="mu-card-gradient-border rounded-lg p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-base sm:text-lg font-display text-primary-foreground mb-1">Inspired by these outcomes?</p>
            <p className="text-xs sm:text-sm text-mu-gray-400">Join 120 ambitious professionals in the next cohort.</p>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-3">
            <Button variant="brand" size="lg" className="w-full sm:w-auto">
              Download Placement Report <ChevronRight size={16} />
            </Button>
            <Button variant="brand-dark" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://mastersunion.org/pgp-tbm-applynow" target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowUpRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOutcomes;
