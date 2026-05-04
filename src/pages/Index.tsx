import { ProgramProvider } from "@/contexts/ProgramContext";
import StickyNav from "@/components/StickyNav";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";

import AdmissionPathways from "@/components/AdmissionPathways";
import CareerOutcomes from "@/components/CareerOutcomes";
import AlumniOutcomes from "@/components/AlumniOutcomes";
import WhyMastersUnion from "@/components/WhyMastersUnion";
import FounderFellowship from "@/components/FounderFellowship";
import CurriculumOverview from "@/components/CurriculumOverview";
import ExperienceMU from "@/components/ExperienceMU";
import WhoIsItFor from "@/components/WhoIsItFor";
import LifeAtMU from "@/components/LifeAtMU";
import LeadershipTeam from "@/components/LeadershipTeam";
import AdmissionsProcess from "@/components/AdmissionsProcess";
import FeesScholarships from "@/components/FeesScholarships";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <ProgramProvider>
    <div className="min-h-screen bg-[hsl(var(--mu-black))]">
      {/* Fixed sidebar — lives outside the flow */}
      <StickyNav />

      {/* Hero — full width, no sidebar offset */}
      <HeroSection />

      {/* Main content with left padding on desktop to account for fixed sidebar */}
      <div className="lg:pl-[220px]">
        <main className="pb-20 lg:pb-0">
          <AdmissionPathways />
          <SectionDivider />
          <CareerOutcomes />
          <SectionDivider />
          <AlumniOutcomes />
          <SectionDivider />
          <WhyMastersUnion />
          <SectionDivider />
          <CurriculumOverview />
          <SectionDivider />
          <ExperienceMU />
          <SectionDivider />
          <FounderFellowship />
          <SectionDivider />
          <WhoIsItFor />
          <SectionDivider />
          <LifeAtMU />
          <SectionDivider />
          <AdmissionsProcess />
          <SectionDivider />
          <FeesScholarships />
          <SectionDivider />
          <FAQSection />
          <SectionDivider />
          <FinalCTA />
        </main>
      </div>
      <MobileNav />
    </div>
  </ProgramProvider>
);

export default Index;
