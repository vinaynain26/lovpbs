const leaders = [
  { name: "Manoj Kohli", title: "Chairman", sub: "Former CEO & MD, Bharti Airtel", img: "https://new.mastersunion.link/assets/img/governors/manojkohli.webp", linkedin: "https://www.linkedin.com/in/manoj-kohli-34948b108/" },
  { name: "Pratham Mittal", title: "Founder, Masters' Union", sub: "Co-Founder, Outgrow | Forbes 30 Under 30", img: "https://images.mastersunion.link/uploads/27082025/v1/prathanMittal.webp", linkedin: "https://www.linkedin.com/in/prathammittal/" },
  { name: "Pankaj Bansal", title: "Board Member", sub: "Co-Founder & Group CEO, PeopleStrong", img: "https://new.mastersunion.link/assets/img/governors/PankajBansal.webp", linkedin: "https://www.linkedin.com/in/pbpankajbansal/" },
  { name: "Vivek Gambhir", title: "Board Member", sub: "Ex. CEO, boAt & Godrej Consumer", img: "https://images.mastersunion.link/uploads/17022025/v1/vivekGambhir.webp", linkedin: "https://www.linkedin.com/in/vivek-gambhir-b955a836/" },
  { name: "Abhishek Kaul", title: "Director, Career Services", sub: "MBA, ISB | Ex. Walt Disney", img: "https://images.mastersunion.link/uploads/27082025/v1/abhishekKaul.webp", linkedin: "https://www.linkedin.com/in/abhishek-kaul-984a5a101/" },
  { name: "Swati Ganeti", title: "Director, UG Programs", sub: "MBA, Wharton | Ex. Bain & Co.", img: "https://images.mastersunion.link/uploads/27082025/v1/swati.webp", linkedin: "https://www.linkedin.com/in/swatiganeti/" },
];

const LeadershipTeam = () => (
  <section className="mu-section-light mu-section-padding">
    <div className="mu-container">
      <div className="flex items-center gap-2 mb-4">
        <img src="https://files.mastersunion.link/resources/svg/star.svg" alt="" className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-[0.15em] mu-gradient-text-vivid">PEOPLE AT MASTERS' UNION</span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-foreground mb-8 sm:mb-10">
        Meet the Leadership Team
      </h2>

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {leaders.map((l) => (
          <div key={l.name} className="text-center group">
            <div className="relative rounded-lg overflow-hidden mb-2 sm:mb-3 aspect-square">
              <img src={l.img} alt={l.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="flex items-center justify-center gap-1.5 mb-0.5 sm:mb-1">
              <p className="font-bold text-foreground text-xs sm:text-sm">{l.name}</p>
              <a href={l.linkedin} target="_blank" rel="noopener noreferrer">
                <img src="https://files.mastersunion.link/resources/svg/linkedin.svg" alt="LinkedIn" className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-40 hover:opacity-100 transition-opacity brightness-0" />
              </a>
            </div>
            <p className="text-[10px] sm:text-xs text-primary font-semibold">{l.title}</p>
            <p className="text-[10px] sm:text-xs text-mu-gray-500 mt-0.5">{l.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipTeam;
