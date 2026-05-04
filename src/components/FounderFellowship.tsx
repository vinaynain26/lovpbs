import React, { useRef, useEffect, useState, useCallback } from "react";
import nexeraImg from "@/assets/sharktank/nexera.webp";
import hookdImg from "@/assets/sharktank/hookd.webp";
import metafashionImg from "@/assets/sharktank/metafashion.webp";
import bullspreeImg from "@/assets/sharktank/bullspree.webp";
import hiveschoolImg from "@/assets/sharktank/hiveschool.webp";
import memotagImg from "@/assets/sharktank/memotag.webp";
import seedsaiLogo from "@/assets/startups/seedsai.png";
import bullspreeLogo from "@/assets/startups/bullspree.png";
import playsuperLogo from "@/assets/startups/playsuper.png";
import offlynLogo from "@/assets/startups/offlyn.png";
import eightLogo from "@/assets/startups/eight.png";
import starttLogo from "@/assets/startups/startt.png";
import guardexLogo from "@/assets/startups/guardex.png";
import vinyasaLogo from "@/assets/startups/vinyasa.png";
import justmyrootsLogo from "@/assets/startups/justmyroots.png";
import cryptiqueLogo from "@/assets/startups/cryptique.png";
import bambaiiLogo from "@/assets/startups/bambaii.png";
import woodysLogo from "@/assets/startups/woodys.png";
import lexisLogo from "@/assets/startups/lexis.png";
import nivaraLogo from "@/assets/startups/nivara.png";
import flourishLogo from "@/assets/startups/flourishfoods.png";
import beyondvedaLogo from "@/assets/startups/beyondveda.png";
import bluebrewLogo from "@/assets/startups/bluebrew.png";
import momsmixesLogo from "@/assets/startups/momsmixes.png";
import monarqueLogo from "@/assets/startups/monarque.svg";

// Founder images from Entrepreneurship Report
import eightFounder from "@/assets/startups/founders/eight.webp";
import nivaraFounder from "@/assets/startups/founders/nivara.webp";
import bullspreeFounder from "@/assets/startups/founders/bullspree.webp";
import woodysFounder from "@/assets/startups/founders/woodys.webp";
import seedsaiFounder from "@/assets/startups/founders/seedsai.webp";
import playsuperFounder from "@/assets/startups/founders/playsuper.webp";
import bluebrewFounder from "@/assets/startups/founders/bluebrew.webp";
import lexisFounder from "@/assets/startups/founders/lexis.webp";
import justmyrootsFounder from "@/assets/startups/founders/justmyroots.webp";
import flourishFounder from "@/assets/startups/founders/flourishfoods.webp";
import offlynFounder from "@/assets/startups/founders/offlyn.webp";
import cryptiqueFounder from "@/assets/startups/founders/cryptique.webp";
import starttFounder from "@/assets/startups/founders/startt.webp";
import momsmixesFounder from "@/assets/startups/founders/momsmixes.webp";
import monarqueFounder from "@/assets/startups/founders/monarque.webp";
import guardexFounder from "@/assets/startups/founders/guardex.webp";
import beyondvedaFounder from "@/assets/startups/founders/beyondveda.webp";
import bambaiiFounder from "@/assets/startups/founders/bambaii.webp";
import vinyasaFounder from "@/assets/startups/founders/vinyasa.webp";

const startups = [
  { name: "EIGHT", tagline: "5M+ downloads and counting across platforms", tags: ["MEDIA", "TECH"], logo: eightLogo, founderImg: eightFounder },
  { name: "Nivara", tagline: "Making fine jewellery sustainable and accessible", tags: ["D2C", "LUXURY"], logo: nivaraLogo, founderImg: nivaraFounder },
  { name: "Woody's Pizzeria", tagline: "A 1-star to 4.7-star turnaround story", tags: ["F&B"], logo: woodysLogo, founderImg: woodysFounder },
  { name: "SeedsAI", tagline: "Turning conversations into enterprise-grade insights", tags: ["AI", "SAAS"], logo: seedsaiLogo, founderImg: seedsaiFounder },
  { name: "PlaySuper", tagline: "Where gaming culture meets commerce at scale", tags: ["GAMING"], logo: playsuperLogo, founderImg: playsuperFounder },
  { name: "Blue Brew", tagline: "Cult denim brand with a Gen Z following", tags: ["D2C", "FASHION"], logo: bluebrewLogo, founderImg: bluebrewFounder },
  { name: "Lexi's", tagline: "Bold flavours, top ratings, repeat customers", tags: ["F&B"], logo: lexisLogo, founderImg: lexisFounder },
  { name: "JustMyRoots", tagline: "Preserving India's culinary heritage at scale", tags: ["F&B", "LOGISTICS"], logo: justmyrootsLogo, founderImg: justmyrootsFounder },
  { name: "Flourish Foods", tagline: "Fortified staples for every Indian kitchen", tags: ["F&B", "HEALTH"], logo: flourishLogo, founderImg: flourishFounder },
  { name: "Offlyn", tagline: "Curated local events for real-world connections", tags: ["SOCIAL", "TECH"], logo: offlynLogo, founderImg: offlynFounder },
  { name: "Cryptique", tagline: "Data tools for the decentralised web era", tags: ["WEB3", "CRYPTO"], logo: cryptiqueLogo, founderImg: cryptiqueFounder },
  { name: "Startt", tagline: "A matchmaking engine for founders and capital", tags: ["FINTECH"], logo: starttLogo, founderImg: starttFounder },
  { name: "Mom's Mixes", tagline: "Homestyle spice blends scaling nationwide", tags: ["F&B", "D2C"], logo: momsmixesLogo, founderImg: momsmixesFounder },
  { name: "Monarque", tagline: "Luxury scents crafted for everyday indulgence", tags: ["D2C", "LUXURY"], logo: monarqueLogo, founderImg: monarqueFounder },
  { name: "Guardex", tagline: "Computer vision reducing factory defect rates", tags: ["AI", "DEEPTECH"], logo: guardexLogo, founderImg: guardexFounder },
  { name: "Beyond Veda", tagline: "₹2 Cr revenue reimagining ayurveda for Gen Z", tags: ["D2C", "WELLNESS"], logo: beyondvedaLogo, founderImg: beyondvedaFounder },
  { name: "Bambaii Foods", tagline: "Healthy snacks loved across Indian campuses", tags: ["F&B", "D2C"], logo: bambaiiLogo, founderImg: bambaiiFounder },
  { name: "Vinyasa", tagline: "Streamlining operations for therapy clinics", tags: ["HEALTHTECH"], logo: vinyasaLogo, founderImg: vinyasaFounder },
];

const sharkTankStartups = [
  { name: "Bullspree", season: "Season 2", founder: "Dharmil Bavishi", cohort: "PGP TBM Co'21", desc: "India's favourite stock market playground for learning & investing", image: bullspreeImg },
  { name: "Nexera Health", season: "Season 4", founder: "Himanshu Rajpurohit", cohort: "CEO Challenge", desc: "Redefining workplace wellness for employees", image: nexeraImg },
  { name: "Hive School", season: "Season 4", founder: "Nikhil Gaur", cohort: "PGP TBM Co'24", desc: "Building India's first Sales School", image: hiveschoolImg },
  { name: "Memotag", season: "Season 4", founder: "Reyansh Juneja", cohort: "UG TBM Co'28", desc: "AI-driven wearable for dementia care", image: memotagImg },
  { name: "HookD", season: "Season 5", founder: "Dia Goel", cohort: "PGP TBM Co'23", desc: "India's first ready-to-eat non-veg snacking brand", image: hookdImg },
  { name: "Meta Fashion", season: "Season 5", founder: "Arjun Goel", cohort: "UG TBM Co'28", desc: "Phygital commerce connecting in-game discovery with real-world fashion", image: metafashionImg },
];

const highlights = [
  { label: "Startups Incubated", value: "30+" },
  { label: "Projected Revenue FY26", value: "₹480 Cr" },
  { label: "Total Valuation", value: "₹593 Cr" },
  { label: "Jobs Created", value: "180+" },
  { label: "Grants Disbursed", value: "₹1.2 Cr" },
];

/* ─── Shared scroll hook ─── */
const useMouseScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const hovering = useRef(false);
  const mouseX = useRef(0);
  const containerRect = useRef<DOMRect | null>(null);

  const tick = useCallback(() => {
    const el = scrollRef.current;
    if (!el || !hovering.current) return;
    const rect = containerRect.current;
    if (!rect) return;
    const ratio = (mouseX.current - rect.left) / rect.width;
    const speed = (ratio - 0.5) * 2.5;
    const newScrollLeft = el.scrollLeft + speed;
    if (newScrollLeft <= 0) { el.scrollLeft = 0; animRef.current = requestAnimationFrame(tick); return; }
    el.scrollLeft = newScrollLeft;
    if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
    animRef.current = requestAnimationFrame(tick);
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    hovering.current = true;
    containerRect.current = scrollRef.current?.getBoundingClientRect() ?? null;
    mouseX.current = e.clientX;
    animRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => { mouseX.current = e.clientX; }, []);

  const handleMouseLeave = useCallback(() => {
    hovering.current = false;
    cancelAnimationFrame(animRef.current);
  }, []);

  return { scrollRef, handleMouseEnter, handleMouseMove, handleMouseLeave };
};

/* ─── Startup Portfolio Row — Magazine Editorial ─── */
const AutoScrollRow = ({ direction = "left" }: { direction?: "left" | "right" }) => {
  const { scrollRef, handleMouseEnter, handleMouseMove, handleMouseLeave } = useMouseScroll();
  const items = direction === "left" ? startups : [...startups].reverse();
  const doubled = [...items, ...items];

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 sm:gap-5 overflow-x-auto px-4 sm:px-10 lg:px-16 mu-scroll-hidden snap-x snap-mandatory md:snap-none"
      style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {doubled.map((s, idx) => (
        <div
          key={`${s.name}-${idx}`}
          className="flex-shrink-0 w-[180px] sm:w-[240px] md:w-[260px] rounded-lg overflow-hidden snap-start"
          style={{ backgroundColor: "hsl(0,0%,8%)", border: "1px solid hsl(0,0%,15%)", borderTop: "none" }}
        >
          {/* Gradient top border */}
          <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, #39B5D7, #F7D544, #E38330)" }} />

          {/* Founder photo */}
          {s.founderImg && (
            <div className="relative w-full h-[110px] sm:h-[160px] overflow-hidden">
              <img src={s.founderImg} alt={s.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,8%)] via-transparent to-transparent" />
            </div>
          )}

          <div className="p-4 sm:p-5 pt-3">
            {/* Logo */}
            <div className="mb-3 sm:mb-4">
              {s.logo ? (
                <span className="rounded px-2 py-1 inline-flex items-center bg-white/90">
                  <img src={s.logo} alt={s.name} className="h-4 sm:h-5 object-contain" />
                </span>
              ) : (
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.15em]" style={{ color: "hsl(var(--mu-gold))" }}>{s.name}</span>
              )}
            </div>

            {/* Company name */}
            <h4 className="font-display text-base sm:text-lg md:text-xl leading-[1.1] mb-2 text-primary-foreground">
              {s.name}
            </h4>

            {/* Description */}
            <p className="font-sans text-[10px] sm:text-xs leading-relaxed mb-3" style={{ color: "hsl(0 0% 60%)" }}>
              {s.tagline}
            </p>

            {/* Industry tags */}
            <div className="flex flex-wrap gap-1.5">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block text-[7px] sm:text-[8px] font-sans font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded-sm"
                  style={{ backgroundColor: "hsl(0 0% 100% / 0.06)", color: "hsl(0 0% 50%)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ─── Shark Tank Row ─── */
const SharkTankRow = () => {
  const { scrollRef, handleMouseEnter, handleMouseMove, handleMouseLeave } = useMouseScroll();
  const doubled = [...sharkTankStartups, ...sharkTankStartups];

  return (
    <div
      ref={scrollRef}
      className="flex gap-2.5 sm:gap-3 overflow-x-auto px-4 sm:px-10 lg:px-16 mu-scroll-hidden snap-x snap-mandatory md:snap-none"
      style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {doubled.map((s, idx) => (
        <div
          key={`${s.name}-${idx}`}
          className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[260px] rounded-lg overflow-hidden group cursor-pointer snap-start border border-[hsl(0,0%,18%)]"
          style={{ backgroundColor: "hsl(0,0%,7%)" }}
        >
          <div className="relative overflow-hidden">
            <div className="aspect-[3/5] sm:aspect-[3/4] relative">
              <img src={s.image} alt={s.name} className="absolute inset-0 w-full h-full object-cover transition-all duration-500" />
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                <span className="inline-block text-[8px] sm:text-[9px] font-sans font-bold uppercase tracking-wider px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-sm" style={{ backgroundColor: "hsl(var(--mu-gold))", color: "hsl(var(--mu-black))" }}>{s.season}</span>
              </div>
            </div>

            <div className="p-2.5 sm:p-3" style={{ backgroundColor: "hsl(0 0% 10%)" }}>
              <h4 className="font-sans font-semibold text-xs sm:text-sm leading-[1.2] text-primary-foreground mb-1">{s.name}</h4>
              <p className="font-sans text-[9px] sm:text-[10px] leading-snug mb-1.5" style={{ color: "hsl(0 0% 70%)" }}>{s.desc}</p>
              <span className="text-[8px] sm:text-[9px] font-sans font-semibold block" style={{ color: "hsl(0 0% 85%)" }}>{s.founder}</span>
              <span className="text-[7px] sm:text-[8px] font-sans" style={{ color: "hsl(var(--mu-gray-500))" }}>{s.cohort}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ─── Main Section ─── */
const FounderFellowship = () => {
  return (
    <section id="entrepreneurship" className="relative overflow-hidden" style={{ backgroundColor: "hsl(var(--mu-black))" }}>

      {/* ─── HERO BLOCK ─── */}
      <div className="mu-section-padding pb-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-2 sm:mb-3">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="https://files.mastersunion.link/resources/svg/star.svg" alt="" className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] mu-gradient-text-vivid">ENTREPRENEURSHIP</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-primary-foreground leading-[0.95]">
                Where Founders Are Built,<br />
                <span style={{ fontWeight: 700 }}>Not Just Funded</span>
              </h2>
            </div>
            <p className="text-sm text-mu-gray-400 max-w-sm md:text-right leading-relaxed">
              From hostel-room ideas to funded ventures — our founders ship products, raise capital, and scale while still on campus.
            </p>
          </div>
        </div>
      </div>

      {/* ─── STATS BAR ─── */}
      <div className="relative z-0 pt-0 sm:pt-1">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-16">
          
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 py-2 sm:py-3 md:py-4">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-lg bg-[hsl(0,0%,9%)]/80 backdrop-blur-sm p-4 sm:p-5">
                <div className="text-xl sm:text-2xl font-display text-primary-foreground tabular-nums mb-1">{h.value}</div>
                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider" style={{ color: "hsl(var(--mu-gray-500))" }}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── STARTUP PORTFOLIO CAROUSEL ─── */}
      <div className="pb-4 sm:pb-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-16 mb-6 sm:mb-8">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px" style={{ backgroundColor: "hsl(var(--mu-gold))" }} />
            <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(0 0% 90%)" }}>
              STARTUP PORTFOLIO
            </span>
            <span className="flex-1 h-px" style={{ backgroundColor: "hsl(0,0%,15%)" }} />
          </div>
        </div>
        <AutoScrollRow direction="left" />
      </div>

      {/* ─── SHARK TANK — Distinct Visual Block ─── */}
      <div className="relative py-8 sm:py-10 md:py-14" style={{ backgroundColor: "hsl(0,0%,5%)" }}>
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--mu-gold) / 0.4), transparent)" }} />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-16 mb-4 sm:mb-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px" style={{ backgroundColor: "hsl(var(--mu-gold))" }} />
            <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em]" style={{ color: "hsl(0 0% 90%)" }}>
              Featured on <span style={{ color: "#1a73e8" }}>Shark Tank</span> <span style={{ color: "#fbbc04" }}>India</span>
            </span>
            <span className="flex-1 h-px" style={{ backgroundColor: "hsl(0,0%,15%)" }} />
          </div>
        </div>
        <SharkTankRow />

        <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--mu-gold) / 0.4), transparent)" }} />
      </div>

      {/* ─── BOTTOM CTA ─── */}
      <div className="py-8 sm:py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8">
          <svg width="40" height="50" viewBox="0 0 120 140" fill="none" className="flex-shrink-0 sm:w-[60px] sm:h-[70px]">
            <path d="M60 0 L60 110 M20 80 L60 120 L100 80" stroke="hsl(0 0% 90%)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex flex-col items-start sm:items-end gap-2 sm:gap-3">
            <p className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em]" style={{ color: "hsl(var(--mu-gray-500))" }}>
              Masters' Union · Gurugram, India · Est. 2021
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2.5 sm:py-3 transition-colors"
              style={{ backgroundColor: "hsl(var(--mu-gold))", color: "hsl(var(--mu-black))" }}
            >
              Download Entrepreneurship Report
              <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center text-[10px] sm:text-xs" style={{ borderColor: "hsl(var(--mu-black))" }}>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderFellowship;
