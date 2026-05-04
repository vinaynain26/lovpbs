import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, X, Menu, Sparkles } from "lucide-react";

const navItems = [
  { label: "Pathways", href: "#pathways", icon: "https://files.mastersunion.link/resources/svg/pgpadmission.svg" },
  { label: "Outcomes", href: "#outcomes", icon: "https://files.mastersunion.link/resources/svg/pgpcareer.svg" },
  { label: "Alumni", href: "#alumni", icon: "https://files.mastersunion.link/resources/svg/pgpcohort.svg" },
  { label: "Why MU", href: "#highlights", icon: "https://files.mastersunion.link/resources/svg/pgphighlight.svg" },
  { label: "Curriculum", href: "#curriculum", icon: "https://files.mastersunion.link/resources/svg/pgpcurri.svg" },
  { label: "Immersions", href: "#immersions", icon: "https://files.mastersunion.link/resources/svg/pgphighlight.svg" },
  { label: "Entrepreneurship", href: "#entrepreneurship", icon: "https://files.mastersunion.link/resources/svg/pgphighlight.svg" },
  { label: "Cohort", href: "#cohort", icon: "https://files.mastersunion.link/resources/svg/pgpcohort.svg" },
  { label: "Admissions", href: "#admissions", icon: "https://files.mastersunion.link/resources/svg/pgpadmission.svg" },
  { label: "Fees", href: "#fees", icon: "https://files.mastersunion.link/resources/svg/pgpcareer.svg" },
  { label: "FAQ", href: "#faq", icon: "https://files.mastersunion.link/resources/svg/pgphighlight.svg" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="lg:hidden">
      {/* Fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 safe-bottom">
        <div className="bg-[hsl(var(--mu-black))]/95 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 text-xs sm:text-sm font-bold text-mu-gray-300 hover:text-primary-foreground transition-all py-1 active:scale-95"
            >
              <div className="w-8 h-8 rounded-lg bg-[hsl(var(--mu-dark-surface))] flex items-center justify-center border border-[hsl(0,0%,18%)]">
                {isOpen ? <X size={15} className="text-primary-foreground" /> : <Menu size={15} className="text-primary-foreground" />}
              </div>
              <span className="tracking-wide uppercase text-[10px] sm:text-xs font-semibold">{isOpen ? "Close" : "Menu"}</span>
            </button>
            <Button variant="brand" size="sm" className="text-[10px] sm:text-xs px-4 sm:px-5 h-9 rounded-lg" asChild>
              <a href="https://mastersunion.org/pgp-tbm-applynow" target="_blank" rel="noopener noreferrer">
                Apply Now <ArrowUpRight size={11} className="sm:w-3 sm:h-3" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Slide-up panel */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="absolute bottom-[54px] sm:bottom-[58px] left-0 right-0 bg-[hsl(var(--mu-black))]/98 backdrop-blur-xl border-t border-[hsl(0,0%,16%)] animate-in slide-in-from-bottom-4 duration-200 max-h-[70vh] overflow-y-auto safe-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="grid grid-cols-3 gap-px bg-[hsl(0,0%,12%)]">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="flex flex-col items-center gap-1 bg-[hsl(var(--mu-black))] text-[10px] sm:text-xs font-semibold text-mu-gray-400 hover:text-primary-foreground hover:bg-[hsl(var(--mu-dark-surface))] transition-all py-3 sm:py-3.5 px-2 active:scale-95"
                >
                  <img src={item.icon} alt="" className="w-3.5 h-3.5 opacity-40 shrink-0" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
