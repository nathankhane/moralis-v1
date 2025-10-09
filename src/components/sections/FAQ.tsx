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
    <section id="faq" className="section-mobile-optimized">
      <div className="container-mobile-optimized">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear answers to help you make an informed decision
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
