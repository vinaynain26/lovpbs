import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const cohortStats = [
  { value: "26", label: "Average Age" },
  { value: "3 yrs", label: "Avg. Work Experience" },
  { value: "60%", label: "Engineering Background" },
  { value: "40%", label: "Women in Cohort" },
  { value: "22+", label: "States Represented" },
];

const WhoIsItFor = () => (
  <section className="mu-section-dark-vivid mu-section-padding" id="cohort">
    <div className="mu-container">
      <div className="flex items-center gap-2 mb-4">
        <img src="https://files.mastersunion.link/resources/svg/star.svg" alt="" className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-[0.15em] mu-gradient-text-cool">COHORT PROFILE</span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary-foreground mb-3">
        A Class That Raises the Bar
      </h2>
      <p className="text-xs sm:text-sm text-mu-gray-400 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
        Each cohort is a carefully curated mix of engineers, consultants, founders, and operators — united by ambition and a bias for action. With backgrounds spanning tech, consulting, finance, FMCG, and media, students learn as much from each other as they do from faculty and industry leaders.
      </p>

      {/* Stats grid */}
      <div className="grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 mb-10 sm:mb-12">
        {cohortStats.map((s) => (
          <div key={s.label} className="rounded-lg bg-[hsl(0,0%,9%)]/80 backdrop-blur-sm p-4 sm:p-5">
            <div className="text-xl sm:text-2xl font-display text-primary-foreground tabular-nums mb-1">{s.value}</div>
            <div className="text-[10px] sm:text-xs text-mu-gray-500 font-semibold uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Meet the Cohort - Yellow breather box */}
      <div className="rounded-lg border border-[hsl(45,100%,50%)]/60 bg-[hsl(45,100%,50%,0.06)] backdrop-blur-sm p-6 sm:p-8 md:p-10">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[hsl(45,100%,50%)] mb-3">Meet the Cohort</p>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-display text-primary-foreground mb-3">
          Cohort of 2026
        </h3>
        <p className="text-xs sm:text-sm text-mu-gray-400 leading-relaxed max-w-2xl mb-6">
          The PGP TBM Class of 2026 comprises professionals with proven experience across functions and industries, bringing structured thinking, domain depth, and a bias for action to complex business challenges.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-[hsl(45,100%,50%)] text-[hsl(45,100%,50%)] hover:bg-[hsl(45,100%,50%,0.1)] bg-transparent rounded-lg"
          asChild
        >
          <a href="https://mastersunion.org/pgp-tbm-cohort-profile" target="_blank" rel="noopener noreferrer">
            Explore Profiles <ArrowRight size={16} className="ml-1" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default WhoIsItFor;
