import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useProgram } from "@/contexts/ProgramContext";
import { useRef, useState, useCallback } from "react";

const transformations = [
  {
    name: "Shruti Kumari",
    img: "https://files.mastersunion.link/resources/img/homeMembers/shruti.png",
    linkedin: "https://www.linkedin.com/in/shruti-kumaari/",
    before: { role: "Communications Lead", company: "Adfactors" },
    during: "Led live brand campaigns for D2C companies",
    after: { role: "Brand Marketing", company: "Flipkart" },
  },
  {
    name: "Tushar Chuttani",
    img: "https://files.mastersunion.link/resources/img/homeMembers/tushar.png",
    linkedin: "https://www.linkedin.com/in/tushar-chuttani/",
    before: { role: "Product Associate", company: "BYJU'S" },
    during: "Built a D2C brand through the Founder Fellowship",
    after: { role: "Entrepreneur in Residence", company: "mCaffeine" },
  },
  {
    name: "Apurv Rathore",
    img: "https://files.mastersunion.link/resources/img/homeMembers/apurv.png",
    linkedin: "https://www.linkedin.com/in/apurv-rathore/",
    before: { role: "Associate Consultant", company: "Bain & Co." },
    during: "Managed a ₹5 Cr student investment fund",
    after: { role: "Lead Product Manager", company: "Sprinklr" },
  },
  {
    name: "Gautam Marwah",
    img: "https://files.mastersunion.link/resources/img/homeMembers/gautam.png",
    linkedin: "https://www.linkedin.com/in/gautam-marwah/",
    before: { role: "Product Manager", company: "Pine Labs" },
    during: "Co-founded a fintech startup during the programme",
    after: { role: "Chief of Staff", company: "Kae Capital" },
  },
  {
    name: "Tilottama Ghosh",
    img: "https://files.mastersunion.link/resources/img/homeMembers/tilottama.png",
    linkedin: "https://www.linkedin.com/in/tilottamaghosh/",
    before: { role: "Analyst", company: "JP Morgan" },
    during: "Won national case competition against IIMs",
    after: { role: "Associate", company: "Kotak Investment Banking" },
  },
  {
    name: "Manya Parmar",
    img: "https://files.mastersunion.link/resources/img/homeMembers/manya.png",
    linkedin: "https://www.linkedin.com/in/manya-parmar/",
    before: { role: "Consultant", company: "PwC India" },
    during: "Built growth strategies for Series A startups",
    after: { role: "Program Manager", company: "Zomato" },
  },
];

const testimonials = [
  { name: "Daniel Nath", role: "Strategy Lead, Google", cohort: "Cohort '21", img: "https://files.mastersunion.link/resources/img/hs1.webp" },
  { name: "Jeneesha Singh", role: "Consultant, Bain & Co.", cohort: "Cohort '21", img: "https://files.mastersunion.link/resources/img/hs3.webp" },
  { name: "Deepankar Mathur", role: "Founder's Office, Zerodha", cohort: "Cohort '22", img: "https://files.mastersunion.link/resources/img/hs4.webp" },
  { name: "Prabhu Dayal Guliani", role: "Head of Growth, AMPM", cohort: "Cohort '23", img: "https://files.mastersunion.link/resources/img/hs7.webp" },
];

const AlumniOutcomes = () => {
  const { isTBM } = useProgram();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  const scroll = useCallback((dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
    setTimeout(updateScrollState, 350);
  }, [updateScrollState]);

  return (
    <section className="mu-section-dark-warm mu-section-padding" id="alumni">
      <div className="mu-container">
        <div className="flex items-center gap-2 mb-4">
          <img src="https://files.mastersunion.link/resources/svg/star.svg" alt="" className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] mu-gradient-text-warm">TRANSFORMATION STORIES</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary-foreground mb-3">
          What Happens to People Who Join?
        </h2>
        <p className="text-sm text-mu-gray-400 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
          Not testimonials. Real career transformations — before, during, and after Masters' Union.
        </p>

        {/* Micro-story cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mb-8 sm:mb-12">
          {transformations.map((t, i) => (
            <div key={t.name} className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1" style={{ border: 'none' }}>
              <div className="bg-mu-gold rounded-t-lg px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-bold leading-none text-mu-black font-sans tracking-tighter">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <div className="flex items-center gap-2">
                  <img src={t.img} alt={t.name} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover bg-mu-black/10" loading="lazy" />
                    <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                    <img src="https://files.mastersunion.link/resources/svg/linkedin.svg" alt="LinkedIn" className="w-4 h-4 brightness-0" />
                  </a>
                </div>
              </div>

              <div className="bg-[hsl(0,0%,9%)]/80 backdrop-blur-sm rounded-b-lg px-4 sm:px-5 py-4 sm:py-5">
                <p className="font-bold text-primary-foreground text-xs sm:text-sm uppercase tracking-wide mb-3 sm:mb-4">{t.name}</p>

                <div className="space-y-2.5 sm:space-y-3">
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-mu-gold block mb-0.5">Before</span>
                    <p className="text-xs sm:text-sm text-mu-gray-400">{t.before.role} at <span className="text-mu-gray-200 font-medium">{t.before.company}</span></p>
                  </div>
                  <div className="w-full h-px bg-[hsl(0,0%,18%)]" />
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-mu-gray-500 block mb-0.5">During</span>
                    <p className="text-xs sm:text-sm text-mu-gray-300">{t.during}</p>
                  </div>
                  <div className="w-full h-px bg-[hsl(0,0%,18%)]" />
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-mu-gold block mb-0.5">After</span>
                    <p className="text-xs sm:text-sm text-primary-foreground font-semibold">{t.after.role} at <span className="text-mu-gold">{t.after.company}</span></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Video Testimonials */}
        <div className="flex items-center gap-2 mb-4">
          <img src="https://files.mastersunion.link/resources/svg/star.svg" alt="" className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-mu-gray-500">HEAR FROM ALUMNI</span>
        </div>

        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display text-primary-foreground">
            In Their Own Words
          </h3>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} disabled={!canScrollLeft} className="w-9 h-9 rounded-full border border-[hsl(0,0%,20%)] bg-[hsl(0,0%,10%)] flex items-center justify-center text-primary-foreground disabled:opacity-30 hover:bg-[hsl(0,0%,15%)] transition-colors">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll('right')} disabled={!canScrollRight} className="w-9 h-9 rounded-full border border-[hsl(0,0%,20%)] bg-[hsl(0,0%,10%)] flex items-center justify-center text-primary-foreground disabled:opacity-30 hover:bg-[hsl(0,0%,15%)] transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} onScroll={updateScrollState} className="flex gap-4 sm:gap-5 mb-8 sm:mb-10 overflow-x-auto pb-4 scrollbar-hide">
          {testimonials.map((t) => (
            <div key={t.name} className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] flex-shrink-0 rounded-lg bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,15%)] p-3 sm:p-4 cursor-pointer group shadow-[0_6px_24px_rgba(0,0,0,0.5),0_2px_6px_rgba(168,85,247,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.6),0_4px_12px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-video rounded-lg bg-[hsl(0,0%,11%)] flex items-center justify-center mb-2 sm:mb-3 overflow-hidden">
                <img src="https://files.mastersunion.link/resources/svg/homePlayIcon.svg" alt="Play" className="w-8 h-8 sm:w-10 sm:h-10 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </div>
              <p className="font-semibold text-primary-foreground text-xs sm:text-sm">{t.name}</p>
              <p className="text-[10px] sm:text-xs text-mu-gray-300">{t.role}</p>
              <p className="text-[10px] sm:text-xs text-mu-gray-500 mt-1">{isTBM ? "PGP TBM" : "PGP TBM YLC"} · {t.cohort}</p>
            </div>
          ))}
        </div>

        {/* Contextual CTA */}
        <div className="mu-card-gradient-border rounded-lg p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-base sm:text-lg font-display text-primary-foreground mb-1">Want a transformation like theirs?</p>
            <p className="text-xs sm:text-sm text-mu-gray-400">The next cohort starts June 2026. Seats are limited.</p>
          </div>
          <Button variant="brand" size="lg" className="w-full sm:w-auto" asChild>
            <a href="https://mastersunion.org/pgp-tbm-applynow" target="_blank" rel="noopener noreferrer">
              Start Your Application <ArrowUpRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AlumniOutcomes;
