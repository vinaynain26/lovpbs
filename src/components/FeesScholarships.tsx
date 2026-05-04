import { ArrowUpRight, Banknote, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Banknote,
    title: "Education Financing",
    desc: "Masters' Union has partnered with IDFC First Bank, HDFC Credila, and Tata Capital to offer flexible education loan options with competitive interest rates, making the programme accessible to all deserving candidates regardless of financial background.",
  },
  {
    icon: Shield,
    title: "9+ Scholarships & Financial Aid",
    desc: "From merit-based and diversity scholarships to entrepreneur bursaries and women in leadership awards — Masters' Union offers one of the most comprehensive scholarship programmes among India's top B-schools.",
  },
  {
    icon: Users,
    title: "ROI That Speaks",
    desc: "With an average post-MBA CTC of ₹33.39 LPA, highest CTC of ₹1.28 Cr, and 145+ marquee recruiters including Bain, McKinsey, Flipkart, and Zomato — your investment pays for itself many times over.",
  },
];

const FeesScholarships = () => {
  return (
    <section className="mu-section-dark mu-section-padding" id="fees">
      <div className="mu-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="https://files.mastersunion.link/resources/svg/star.svg" alt="" className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-mu-gray-500">INVESTMENT & FINANCIAL SUPPORT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-primary-foreground leading-[0.95]">
              An Investment in Your Future
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-mu-gray-400 max-w-md md:text-right leading-relaxed">
            Masters' Union believes that financial constraints should never stand between talent and transformation. Multiple scholarship and financing options ensure accessibility.
          </p>
        </div>

        {/* Value highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mb-8 sm:mb-12">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.title} className="rounded-lg bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,15%)] p-4 sm:p-6 shadow-[0_6px_24px_rgba(0,0,0,0.5),0_2px_6px_rgba(57,181,215,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_4px_12px_rgba(57,181,215,0.15)] hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center mb-3 sm:mb-4" style={{ backgroundColor: "#39B5D715", border: "1px solid #39B5D730" }}>
                  <Icon size={18} className="text-[#39B5D7]" />
                </div>
                <h3 className="text-sm sm:text-base font-sans font-bold text-primary-foreground mb-1.5 sm:mb-2 tracking-tight">{h.title}</h3>
                <p className="text-xs sm:text-sm text-mu-gray-400 leading-relaxed">{h.desc}</p>
              </div>
            );
          })}
        </div>

        {/* View Fees CTA */}
        <div>
          <Button variant="brand" size="lg" asChild className="w-full sm:w-auto">
            <a href="https://mastersunion.org/pgp-tbm-admissions-and-fees" target="_blank" rel="noopener noreferrer">
              View Fees <ArrowUpRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeesScholarships;
