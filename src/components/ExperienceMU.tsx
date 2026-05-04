import { Globe, MapPin, ArrowRight } from "lucide-react";
import inseadLogo from "@/assets/logos/insead.png";
import nusLogo from "@/assets/logos/nus.png";
import babsonLogo from "@/assets/logos/babson.png";
import bocconiLogo from "@/assets/logos/bocconi.png";
import wbsLogo from "@/assets/logos/wbs.svg";
import escpLogo from "@/assets/logos/escp.svg";
import iveyLogo from "@/assets/logos/ivey.svg";
import fosterLogo from "@/assets/logos/foster.png";

const stats = [
  { label: "Global Immersions", value: "8", sub: "across 7 countries" },
  { label: "Bharat Hubs", value: "8", sub: "7,000 km across India" },
  { label: "1-Day Immersions", value: "50+", sub: "factory floors to boardrooms" },
  { label: "CXO Sessions", value: "40+", sub: "with industry leaders" },
];

const universityLogos = [
  { name: "INSEAD", url: inseadLogo },
  { name: "NUS", url: nusLogo },
  { name: "Babson College", url: babsonLogo },
  { name: "SDA Bocconi", url: bocconiLogo },
  
  { name: "ESCP", url: escpLogo },
  { name: "Ivey", url: iveyLogo },
  { name: "Foster School", url: fosterLogo },
];

const companyLogos = [
  { name: "Company 1", url: "https://images.mastersunion.link/uploads/24092025/v1/delhiLogo1.webp" },
  { name: "Company 2", url: "https://images.mastersunion.link/uploads/24092025/v1/mumbai1Logo.webp" },
  
  { name: "Company 4", url: "https://images.mastersunion.link/uploads/24092025/v1/mundraLogo1.webp" },
  { name: "Company 5", url: "https://images.mastersunion.link/uploads/24092025/v1/bengaluruLogo1.webp" },
  { name: "Company 6", url: "https://images.mastersunion.link/uploads/24092025/v1/bengaluruLogo2.webp" },
];

const ExperienceMU = () => {
  return (
    <section className="mu-section-dark-teal mu-section-padding" id="immersions">
      <div className="mu-container">
        <div className="flex items-center gap-2 mb-4">
          <img src="https://files.mastersunion.link/resources/svg/star.svg" alt="" className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] mu-gradient-text-cool">IMMERSIONS</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary-foreground mb-3">
          Learn Business Where Business Happens
        </h2>
        <p className="text-xs sm:text-sm text-mu-gray-400 mb-3 max-w-2xl leading-relaxed">
          From INSEAD in Paris to Chandni Chowk in Delhi — our immersions take you inside real boardrooms, factory floors, and startup ecosystems across the world and across India.
        </p>
        <a
          href="https://mastersunion.org/pgp-tbm-immersions"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm sm:text-base font-display font-semibold text-[hsl(var(--mu-yellow))] hover:opacity-80 transition-colors group mb-8 sm:mb-10"
        >
          Explore the full Immersions programme
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,15%)] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.5),0_1px_3px_rgba(168,85,247,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.6),0_2px_8px_rgba(168,85,247,0.15)] hover:-translate-y-0.5 transition-all duration-300">
              <p className="text-2xl sm:text-3xl font-display text-primary-foreground mb-1">{s.value}</p>
              <p className="text-xs sm:text-sm font-sans font-semibold text-primary-foreground mb-0.5">{s.label}</p>
              <p className="text-[10px] sm:text-xs text-mu-gray-500">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Two column — Global & Bharat summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 sm:mb-10">
          <div className="rounded-lg bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,15%)] p-5 sm:p-6 shadow-[0_6px_24px_rgba(0,0,0,0.5),0_2px_6px_rgba(168,85,247,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_4px_12px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <Globe size={16} className="text-mu-gray-400" />
              <p className="text-sm font-sans font-semibold text-primary-foreground uppercase tracking-wide">Global Immersions</p>
            </div>
            <p className="text-xs sm:text-sm text-mu-gray-400 leading-relaxed mb-4">
              Study at world-renowned B-schools across Paris, Singapore, Boston, Milan, Berlin, London & Canada. Experience entrepreneurship, strategy, sustainability, and AI through classroom sessions and company visits to Boeing, Starbucks, BMW, and more.
            </p>
            <p className="text-[10px] sm:text-xs text-mu-gray-500 mb-4">Duration: 1–2 weeks per immersion · Earn academic credits</p>
            <div className="border-t border-mu-gray-700/40 pt-3">
              <p className="text-[10px] sm:text-xs font-normal uppercase tracking-[0.15em] text-primary-foreground mb-3">Partner Universities</p>
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
                {universityLogos.map((logo) => (
                  <img
                    key={logo.name}
                    src={logo.url}
                    alt={logo.name}
                    className={`object-contain opacity-60 hover:opacity-100 transition-opacity ${logo.name === "INSEAD" ? "h-5 sm:h-7 md:h-9" : "h-3 sm:h-4 md:h-5 brightness-0 invert"}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,15%)] p-5 sm:p-6 shadow-[0_6px_24px_rgba(0,0,0,0.5),0_2px_6px_rgba(168,85,247,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_4px_12px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={16} className="text-mu-gray-400" />
              <p className="text-sm font-sans font-semibold text-primary-foreground uppercase tracking-wide">Bharat Immersion</p>
            </div>
            <p className="text-xs sm:text-sm text-mu-gray-400 leading-relaxed mb-4">
              Spend Term 3 traveling 7,000 km across India — from Delhi's Chandni Chowk to Mumbai's Dalal Street, Mundra's Adani ports to Darjeeling's tea estates. Visit factories, meet entrepreneurs, attend 40+ CXO sessions, and earn credits as you learn.
            </p>
            <p className="text-[10px] sm:text-xs text-mu-gray-500 mb-4">Duration: Full term · 8 hubs across 20+ cities</p>
            <div className="border-t border-mu-gray-700/40 pt-3">
              <p className="text-[10px] sm:text-xs font-normal uppercase tracking-[0.15em] text-primary-foreground mb-3">Partner Companies</p>
              <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
                {companyLogos.map((logo) => (
                  <img
                    key={logo.name}
                    src={logo.url}
                    alt={logo.name}
                    className="h-3.5 sm:h-5 md:h-6 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceMU;
