import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone } from "lucide-react";

const FinalCTA = () => (
  <section className="relative overflow-hidden" id="final-cta">
    {/* Background */}
    <div className="absolute inset-0">
      <div className="w-full h-full" style={{ background: "linear-gradient(135deg, hsl(160,30%,8%), hsl(180,20%,6%), hsl(200,25%,10%))" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 20% 80%, rgba(124,58,237,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(255,208,0,0.08) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 50% 50%, rgba(168,85,247,0.06) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
    </div>

    {/* Content */}
    <div className="relative z-10 mu-container py-12 sm:py-28 md:py-36 lg:py-44 2xl:py-52">
      <div className="max-w-2xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-primary-foreground mb-4 sm:mb-6 leading-[0.95]">
          Your Career Transformation Starts Here.
        </h2>
        <p className="text-xs sm:text-base text-mu-gray-300 mb-3 max-w-lg font-sans leading-relaxed">
          Join the next cohort of founders, strategists, and product leaders.
        </p>
        <p className="text-[10px] sm:text-sm font-bold text-mu-gray-500 mb-6 sm:mb-10 font-sans tracking-wide">
          June 2026 · ~120 Seats · Round 3 Closing Soon
        </p>
        <div className="flex flex-col xs:flex-row gap-3">
          <Button variant="brand" size="lg" className="w-full xs:w-auto" asChild>
            <a href="https://mastersunion.org/pgp-tbm-applynow" target="_blank" rel="noopener noreferrer">
              Apply Now <ArrowUpRight size={16} />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full xs:w-auto border-[hsl(0,0%,30%)] text-primary-foreground hover:bg-[hsl(0,0%,100%,0.1)] hover:text-primary-foreground bg-transparent">
            <Phone size={16} />
            Book an Admissions Call
          </Button>
        </div>
      </div>
    </div>

    {/* Safe bottom padding for mobile nav */}
    <div className="relative z-10 pb-20 sm:pb-8 lg:pb-0" />
  </section>
);

export default FinalCTA;
