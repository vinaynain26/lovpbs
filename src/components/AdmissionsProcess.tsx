import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, X, Info } from "lucide-react";
import { useProgram } from "@/contexts/ProgramContext";

const steps = [
  { num: "01", title: "Apply" },
  { num: "02", title: "MU-BAAT", hasInfo: true },
  { num: "03", title: "Interview" },
  { num: "04", title: "Offer" },
  { num: "05", title: "Enroll" },
];

const muBaatInfo = {
  evaluates: [
    "Communication and business aptitude",
    "Clarity of thought and idea structuring",
    "Creative and analytical thinking",
  ],
  details: [
    { label: "Duration", value: "45–60 min" },
    { label: "Format", value: "9 questions, 5 sections" },
  ],
  note: "You record your responses online and do not need any prior preparation. Think of the questions as a conversation with the Masters' Union team that helps us understand you beyond your résumé.",
  testWindow:
    "After submitting your application and paying the fee, our admissions team reviews your profile. The MU-BAAT link is shared the day after the application deadline.",
  sampleQuestions: [
    "If you could shadow any business leader for one day, who would it be and what would you aim to learn?",
    "A D2C skincare brand increased ad spend, but average order value fell 20%, while new users grew. What happened?",
  ],
};

const AdmissionsProcess = () => {
  const { isTBM } = useProgram();
  const [showMuBaat, setShowMuBaat] = useState(false);

  return (
    <section className="mu-section-dark mu-section-padding" id="admissions">
      <div className="mu-container">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <img src="https://files.mastersunion.link/resources/svg/star.svg" alt="" className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] mu-gradient-text-vivid">
              ADMISSIONS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display text-primary-foreground leading-[0.95] mb-3">
            Your Path In
          </h2>
          <p className="text-xs sm:text-sm text-mu-gray-400 max-w-md leading-relaxed">
            No CAT/GMAT required. We have the{" "}
            <button
              onClick={() => setShowMuBaat(!showMuBaat)}
              className="inline-flex items-center gap-1 text-[#39B5D7] hover:text-[#5cc8e4] font-semibold underline underline-offset-2 decoration-[#39B5D7]/40 hover:decoration-[#39B5D7] transition-colors"
            >
              <span>MU-BAAT</span>
              <Info size={14} className="shrink-0" />
            </button>
            {" "}— our own aptitude test that evaluates ambition, grit, and the drive to build.
          </p>
        </div>

        {/* Flow — pill-style horizontal pipeline */}
        <div className="relative mb-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 mu-scroll-hidden">
          <div className="flex items-stretch gap-0 min-w-[380px] sm:min-w-[540px]">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-stretch flex-1 group">
                {/* Step block */}
                <div
                  className="relative flex-1 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4 md:py-5 transition-all rounded-lg bg-[hsl(0,0%,11%)]/80 backdrop-blur-sm border-t-2 border-[hsl(0,0%,22%)]"
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold font-sans leading-none tracking-tighter text-mu-gray-600">
                    {step.num}
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-sans font-semibold text-primary-foreground tracking-tight whitespace-nowrap">
                    {step.title}
                  </span>
                </div>

                {/* Arrow separator */}
                {i < steps.length - 1 && (
                  <div className="flex items-center -mx-px z-10">
                    <svg width="12" height="100%" viewBox="0 0 16 48" preserveAspectRatio="none" className="h-full sm:w-4">
                      <polygon points="0,0 16,24 0,48" fill="hsl(0, 0%, 14%)" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* MU-BAAT panel */}
        {showMuBaat && (
          <div className="mb-8 sm:mb-10 relative overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#39B5D7]/20 via-[#F7D544]/20 to-[#E38330]/20 blur-xl" />
            <div className="relative rounded-lg bg-[hsl(0,0%,9%)]/80 backdrop-blur-sm border border-[#39B5D7]/30 p-4 sm:p-6 md:p-8">
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <div>
                  <h4 className="text-base sm:text-lg font-sans font-bold text-primary-foreground tracking-tight mb-1.5 mu-gradient-text-cool">
                    MU-BAAT
                  </h4>
                  <p className="text-[10px] sm:text-xs text-mu-gray-400">Masters' Union Business Aptitude & Admission Test</p>
                </div>
              </div>

            <p className="text-xs sm:text-sm text-mu-gray-300 leading-relaxed mb-4 sm:mb-6 italic max-w-3xl border-l-2 border-[#39B5D7]/40 pl-3 sm:pl-4">{muBaatInfo.note}</p>

            <div className="mu-divider-gradient mb-4 sm:mb-6" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mu-gray-500 mb-2">Evaluates</p>
                <ul className="space-y-1.5">
                  {muBaatInfo.evaluates.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] sm:text-xs text-mu-gray-300">
                      <span className="w-1 h-1 shrink-0 mt-1.5 bg-[#39B5D7] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mu-gray-500 mb-2">Format</p>
                {muBaatInfo.details.map((d) => (
                  <div key={d.label} className="mb-2">
                    <span className="text-[11px] sm:text-xs text-mu-gray-500">{d.label}: </span>
                    <span className="text-[11px] sm:text-xs font-semibold text-primary-foreground">{d.value}</span>
                  </div>
                ))}
                <p className="text-[11px] sm:text-xs text-mu-gray-400 mt-2 leading-relaxed">{muBaatInfo.testWindow}</p>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mu-gray-500 mb-2">Sample Questions</p>
                {muBaatInfo.sampleQuestions.map((q, qi) => (
                  <p key={qi} className="text-[11px] sm:text-xs text-mu-gray-300 leading-relaxed mb-2 italic">
                    <span className="font-semibold text-[#39B5D7] not-italic">Q{qi + 1} </span>"{q}"
                  </p>
                ))}
              </div>
            </div>
            </div>
          </div>
        )}

        {/* Cohort strip + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 rounded-lg bg-[hsl(0,0%,9%)]/80 backdrop-blur-sm p-4 sm:p-5">
          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm">
            <span className="text-mu-gray-400">Don't miss your chance to join the next cohort. Apply before <strong className="text-mu-gold">3rd May 2026</strong></span>
          </div>
          <Button variant="brand" size="lg" className="w-full sm:w-auto" asChild>
            <a href="https://mastersunion.org/pgp-tbm-applynow" target="_blank" rel="noopener noreferrer">
              Apply Now <ArrowUpRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsProcess;