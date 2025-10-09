import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What's your pricing model?",
      answer: "Sprints with fixed fees; add success components when incentives align."
    },
    {
      question: "Are you tool-agnostic?",
      answer: "Yes. We recommend only what serves your context—and we document everything."
    },
    {
      question: "What if we're not a fit?",
      answer: "We'll share the diagnostic and recommend alternatives. Radical honesty saves time."
    },
    {
      question: "How do you handle compliance?",
      answer: "We embed privacy & safety considerations from day one, including data handling and audit trails."
    }
  ];

  return (
    <section id="faq" className="py-8 sm:py-12 lg:py-16">
      <div className="container-mobile-optimized px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Frequently asked questions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear answers to help you make an informed decision
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b py-3 sm:py-4">
                <AccordionTrigger className="text-left font-medium text-sm sm:text-base hover:no-underline py-2">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
