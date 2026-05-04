import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import { useProgram } from "@/contexts/ProgramContext";
import heroConvocation from "@/assets/hero-convocation.png";

const HeroSection = () => {
  const { isTBM } = useProgram();
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!(window as any).YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }

    const initPlayer = () => {
      if (!containerRef.current) return;
      playerRef.current = new (window as any).YT.Player("hero-yt-player", {
        videoId: "IyMIGNBmRrg",
        playerVars: {
          autoplay: 1, mute: 1, controls: 0, showinfo: 0, rel: 0,
          modestbranding: 1, loop: 1, playlist: "IyMIGNBmRrg",
          iv_load_policy: 3, disablekb: 1, fs: 0, playsinline: 1,
        },
        events: {
          onReady: (event: any) => { event.target.playVideo(); },
        },
      });
    };

    if ((window as any).YT?.Player) {
      initPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current?.destroy) playerRef.current.destroy();
    };
  }, []);

  const toggleMute = useCallback(() => {
    const player = playerRef.current;
    if (player) {
      if (isMuted) { player.unMute(); player.setVolume(100); } else { player.mute(); }
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const details = [
    { label: "Duration", value: isTBM ? "16 Months" : "24 Months", sub: isTBM ? "24 Mo for Young Leaders" : "Young Leaders Cohort" },
    { label: "Format", value: "Full Time", sub: "Opt-in Residential" },
    { label: "Location", value: "Gurugram", sub: "DLF Cyberpark" },
    { label: "Starts", value: "June 2026", sub: "For Cohort of '27" },
  ];

  return (
    <section id="hero" className="relative bg-mu-black overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroConvocation} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07]" />
        <div className="w-full h-full opacity-40" style={{ background: "linear-gradient(135deg, hsl(270,50%,15%), hsl(260,40%,10%), hsl(45,50%,15%))" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-mu-black/90 via-mu-black/70 to-mu-black" />
      </div>

      

      {/* Main content */}
      <div className="relative z-10 mu-container flex-1 py-10 sm:py-12 md:py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 items-center">

          {/* Left — headline + stats */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-6 px-3 py-1.5 border border-mu-gold/30 bg-mu-gold/10">
              <span className="w-2 h-2 rounded-full bg-mu-gold animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-mu-gold">
                Final Deadline: 3rd May 2026
              </span>
            </div>

            <h1 className="text-[1.5rem] xs:text-[1.7rem] sm:text-[2.2rem] md:text-[2.4rem] lg:text-[3.2rem] 2xl:text-[3.8rem] leading-[1.15] mb-6 sm:mb-6 text-primary-foreground" style={{ fontWeight: 300 }}>
              <span className="font-display" style={{ fontWeight: 300 }}>The flagship PGP in</span>
              <br />
              <span className="font-display italic" style={{ fontWeight: 300 }}>Technology</span>
              <span className="font-display" style={{ fontWeight: 300 }}> &</span>
              <br />
              <span className="font-display italic" style={{ fontWeight: 300 }}>Business</span>
              <span className="font-display" style={{ fontWeight: 300 }}> Management</span>
            </h1>

            <p className="text-[11px] sm:text-[13px] md:text-xs lg:text-sm text-mu-gray-300 leading-relaxed mb-7 sm:mb-7 max-w-md text-justify sm:text-left">
              {isTBM
                ? "India's only PG programme taught entirely by 100+ practicing CXOs from Google, McKinsey, Bain, Zerodha, and more."
                : "A 24-month programme for young leaders — build real businesses, pitch to 100+ VCs, and graduate with a running venture."}
            </p>

            <div className="mb-6 sm:mb-10">
              <Button variant="brand" size="lg" className="w-full xs:w-auto" asChild>
                <a href="https://mastersunion.org/pgp-tbm-applynow" target="_blank" rel="noopener noreferrer">
                  Apply Now <ArrowUpRight size={16} />
                </a>
              </Button>
            </div>

            <div className="flex gap-5 sm:gap-6">
              {[
                { val: isTBM ? "₹33.39L" : "₹28.24L", lbl: "Avg CTC" },
                { val: isTBM ? "₹1.28Cr" : "₹46.22L", lbl: "Highest" },
                { val: isTBM ? "145+" : "100+", lbl: "Recruiters" },
              ].map((s) => (
                <div key={s.lbl}>
                  <p className="text-base sm:text-xl md:text-2xl font-bold font-sans text-primary-foreground tracking-tight leading-none">
                    {s.val}
                  </p>
                  <p className="text-[8px] sm:text-[10px] text-mu-gray-500 uppercase tracking-wider mt-1">{s.lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Video */}
          <div ref={containerRef} className="relative w-full aspect-video rounded-xl overflow-hidden max-h-[35vh] sm:max-h-[45vh] md:max-h-none group">
            {/* Gradient border glow */}
            <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-[#39B5D7]/40 via-[#F7D544]/20 to-[#E38330]/40 z-0" />
            <div className="absolute inset-[1px] rounded-xl bg-[hsl(var(--mu-black))] z-[1] overflow-hidden">
              <div id="hero-yt-player" className="absolute inset-0 w-full h-full" />
              {/* Dark vignette overlay to blend edges */}
              <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.5)]" />
              {/* Bottom fade into dark background */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[hsl(var(--mu-black))] to-transparent z-10 pointer-events-none" />
              {/* Top subtle fade */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[hsl(var(--mu-black))]/30 to-transparent z-10 pointer-events-none" />
              <button
                onClick={toggleMute}
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[hsl(var(--mu-black))]/70 backdrop-blur-sm border border-white/10 rounded-full hover:bg-[hsl(var(--mu-black))]/90 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={13} className="sm:w-[15px] sm:h-[15px] text-mu-gray-400" /> : <Volume2 size={13} className="sm:w-[15px] sm:h-[15px] text-primary-foreground" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom details strip */}
      <div className="relative z-10 bg-mu-black/90 backdrop-blur-md mt-2 sm:mt-4 pb-6 sm:pb-12 md:pb-16 lg:pb-20">
        <div className="mu-container">
          <div className="mx-auto h-px" style={{ width: "85%", background: "linear-gradient(90deg, transparent, #39B5D7, #F7D544, #E38330, transparent)" }} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-0">
            {details.map((item) => (
              <div key={item.label} className="px-2 sm:px-4 py-2.5 sm:py-5 space-y-0.5">
                <p className="text-[8px] sm:text-[10px] text-mu-gray-500 uppercase tracking-wider font-semibold mb-0.5">{item.label}</p>
                <p className="text-[11px] sm:text-sm font-semibold text-primary-foreground leading-tight">{item.value}</p>
                <p className="text-[9px] sm:text-[11px] text-mu-gray-400">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
