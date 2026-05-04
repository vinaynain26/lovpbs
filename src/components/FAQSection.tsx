import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const admissionsFaqs = [
  { q: "Do I need CAT/GMAT scores to apply?", a: "No. We don't require standardised test scores. Our admissions process evaluates ambition, grit, and your drive to build — through your application essays, the MU-BAAT, and a personal interview." },
  { q: "Is this equivalent to an MBA?", a: "It covers core MBA subjects plus AI, product management, and startup building — all taught by practicing CXOs from companies like Google, Bain, and Zerodha. Graduates consistently outperform traditional MBA holders in placement outcomes." },
  { q: "What outcomes can I expect after graduating?", a: "PGP TBM graduates achieve an average CTC of ₹33.39 LPA (highest ₹1.28 Cr) across roles like Product Manager, Chief of Staff, Strategy Consultant, and Founder. 145+ companies actively recruit from campus including Google, McKinsey, Amazon, and Flipkart." },
  { q: "Can I start a company during the programme?", a: "Yes. Our Founder Fellowship provides ₹40,000/month to up to 25 founders for a year. This has produced 30+ funded startups, including Bullspree (Shark Tank featured, $1M+ raised) and SeedsAI ($250K raised)." },
  { q: "Who are my peers in the cohort?", a: "Average age is 26 with 3 years of work experience. 60% have engineering backgrounds, 40% non-engineering. Acceptance rate is under 15%. Your peers come from companies like Bain, JP Morgan, PwC, and BYJU'S." },
];

const feesFaqs = [
  { q: "What does the programme fee include?", a: "The fee covers tuition, campus access, learning resources, industry masterclasses, mentorship programmes, career preparation workshops, and access to the Masters' Union alumni network. Immersion trips and hostel accommodation are available at additional cost." },
  { q: "Are education loans available?", a: "Yes. Masters' Union has partnered with leading banks to offer education loan options. Candidates can explore financing through partner banks to make the programme investment manageable." },
  { q: "How do I apply for a scholarship?", a: "Scholarship eligibility is assessed as part of the admissions process. You don't need a separate application — the admissions committee evaluates every candidate for available scholarships based on profile strength, diversity, and financial need." },
  { q: "Is the fee the same for PGP TBM and Young Leaders Cohort?", a: "Yes, the programme fee is the same for both the 16-month PGP TBM and the 24-month Young Leaders Cohort. The YLC includes additional foundational terms at no extra cost." },
];

const FAQSection = () => (
  <section className="mu-section-light mu-section-padding" id="faq">
    <div className="mu-container max-w-4xl 2xl:max-w-5xl">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-mu-gold block mb-3">
        FAQ
      </span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-foreground mb-8 sm:mb-12">
        Questions Before You Apply
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {/* Admissions FAQs */}
        <div>
          <h3 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.15em] text-muted-foreground mb-4 sm:mb-5 pb-2 sm:pb-3 border-b border-border">
            Admissions & Program
          </h3>
          <Accordion type="single" collapsible>
            {admissionsFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`adm-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-3 sm:py-4 text-xs sm:text-sm font-medium font-sans">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Fees FAQs */}
        <div>
          <h3 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.15em] text-muted-foreground mb-4 sm:mb-5 pb-2 sm:pb-3 border-b border-border">
            Fees & Financial Support
          </h3>
          <Accordion type="single" collapsible>
            {feesFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`fee-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-3 sm:py-4 text-xs sm:text-sm font-medium font-sans">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
);

export default FAQSection;