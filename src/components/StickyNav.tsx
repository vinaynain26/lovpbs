import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Admission Pathways", href: "#pathways", icon: "https://files.mastersunion.link/resources/svg/pgpadmission.svg" },
  { label: "Career Outcomes", href: "#outcomes", icon: "https://files.mastersunion.link/resources/svg/pgpcareer.svg" },
  { label: "Alumni Stories", href: "#alumni", icon: "https://files.mastersunion.link/resources/svg/pgpcohort.svg" },
  { label: "Why Masters' Union", href: "#highlights", icon: "https://files.mastersunion.link/resources/svg/pgphighlight.svg" },
  { label: "Curriculum", href: "#curriculum", icon: "https://files.mastersunion.link/resources/svg/pgpcurri.svg" },
  { label: "Immersions", href: "#immersions", icon: "https://files.mastersunion.link/resources/svg/pgphighlight.svg" },
  { label: "Entrepreneurship", href: "#entrepreneurship", icon: "https://files.mastersunion.link/resources/svg/pgphighlight.svg" },
  { label: "Cohort Profile", href: "#cohort", icon: "https://files.mastersunion.link/resources/svg/pgpcohort.svg" },
  { label: "Admissions & Fees", href: "#admissions", icon: "https://files.mastersunion.link/resources/svg/pgpadmission.svg" },
];

const StickyNav = () => {
  const [activeTab, setActiveTab] = useState(navItems[0].href);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sidebar just before finishing scrolling past the hero
      const heroEl = document.getElementById("pathways");
      if (heroEl) {
        setVisible(heroEl.getBoundingClientRect().top <= window.innerHeight * 0.15);
      } else {
        setVisible(window.scrollY > window.innerHeight * 0.6);
      }

      const sections = navItems.map(item => ({
        href: item.href,
        el: document.querySelector(item.href),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top <= 130) {
          setActiveTab(sections[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setActiveTab(href);
    const el = document.querySelector(href);
    if (el) {
      const offset = 20;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`hidden lg:flex fixed top-0 left-0 w-[220px] h-screen flex-col mu-section-dark border-r border-mu-gray-700/40 z-40 transition-transform duration-300 ${
        visible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Nav items */}
      <nav className="flex-1 flex flex-col gap-0.5 pt-12 py-4 px-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.href;
          return (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`flex items-center gap-2.5 px-3 py-2.5 text-sm font-semibold rounded transition-all whitespace-nowrap text-left ${
                isActive
                  ? "text-primary-foreground bg-[hsl(var(--mu-dark-surface))] border-l-2 border-[#a855f7]"
                  : "text-mu-gray-400 hover:text-mu-gray-200 hover:bg-[hsl(var(--mu-dark-surface))]/50 border-l-2 border-transparent"
              }`}
            >
              <img src={item.icon} alt="" className="w-4 h-4 opacity-60 shrink-0" />
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Apply CTA */}
      <div className="px-3 py-4 border-t border-mu-gray-700/30">
        <Button variant="brand" size="sm" className="w-full text-xs" asChild>
          <a href="https://mastersunion.org/pgp-tbm-applynow" target="_blank" rel="noopener noreferrer">
            Apply Now <ArrowUpRight size={13} />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyNav;
