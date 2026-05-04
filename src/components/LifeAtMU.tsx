import campusBuilding from "@/assets/campus-building.png";
import clubsLife from "@/assets/clubs-life-new.webp";
import studentProjects from "@/assets/student-projects.webp";

const sections = [
  { title: "Glimpse of Student Life", desc: "Experience the vibrancy of campus life at Masters' Union.", img: campusBuilding, link: "https://mastersunion.org/student-life-campus", imgPos: "center 30%" },
  { title: "Explore Student Projects", desc: "Experience the excellence of our student community – a glimpse into what you can achieve here.", img: studentProjects, link: "https://mastersunion.org/challenges", imgPos: "center center" },
  { title: "Engage with Clubs", desc: "Discover your passion and forge lifelong connections through our active clubs.", img: clubsLife, link: "https://mastersunion.org/clubs-and-fests", imgPos: "center 50%" },
];

const LifeAtMU = () => (
  <section className="mu-section-dark-vivid mu-section-padding">
    <div className="mu-container">
      <div className="flex items-center gap-2 mb-4">
        <img src="https://files.mastersunion.link/resources/svg/star.svg" alt="" className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-[0.15em] mu-gradient-text">STUDENT JOURNEY</span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary-foreground mb-3">
        Life at Masters' Union
      </h2>
      <p className="text-sm text-mu-gray-400 mb-8 sm:mb-10 max-w-lg">
        Get to know our community and understand how PGP transforms careers.
      </p>

      {/* Mobile: horizontal scroll cards */}
      <div className="flex sm:hidden gap-3 overflow-x-auto snap-x scrollbar-hide pb-2 -mx-4 px-4">
        {sections.map((s) => (
          <a
            key={s.title}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-lg overflow-hidden flex-shrink-0 w-[280px] aspect-[3/4] snap-start"
          >
            <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: s.imgPos }} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-sans text-sm font-bold text-white mb-1">{s.title}</h3>
              <p className="text-[11px] text-mu-gray-300 leading-relaxed">{s.desc}</p>
              <span className="inline-block mt-2 text-[11px] font-bold text-mu-gold">Learn More →</span>
            </div>
          </a>
        ))}
      </div>

      {/* Desktop: expandable row */}
      <div className="hidden sm:flex gap-2">
        {sections.map((s) => (
          <a
            key={s.title}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded overflow-hidden sm:min-h-[340px] md:min-h-[400px] flex-1 hover:flex-[2] transition-all duration-500 ease-in-out"
          >
            <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: s.imgPos }} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <h3 className="font-sans text-base font-bold text-white mb-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">{s.title}</h3>
              <p className="text-xs text-mu-gray-300 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">{s.desc}</p>
              <span className="inline-block mt-3 text-xs font-bold text-mu-gold group-hover:opacity-80 transition-opacity">Learn More →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default LifeAtMU;
