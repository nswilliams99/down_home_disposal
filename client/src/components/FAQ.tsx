import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What areas do you serve for residential trash pickup?",
      answer:
        "We provide weekly curbside trash collection to rural and unincorporated areas in Middle Tennessee, including Franklin, Thompson's Station, Spring Hill, Columbia, and Pulaski. We do not service inside city limits where municipal contracts exist. If you're unsure whether we serve your area, give us a call at (931) 309-2245.",
    },
    {
      question: "How much does your residential trash service cost?",
      answer:
        "Our trash pickup service costs just $27 per month with no contracts or hidden fees. This includes weekly curbside collection and a free 96-gallon rolling cart for your convenience. No setup fees, no cancellation fees.",
    },
    {
      question: "What day will my trash be picked up?",
      answer:
        "Pickup days vary by location: Tuesday for Franklin and Thompson's Station, Wednesday for Spring Hill and Columbia, and Thursday for Pulaski. Your trash will be collected on the same day every week. View our Service Areas page for the complete schedule.",
    },
    {
      question: "Do I need to sign a contract for trash service?",
      answer:
        "No contracts required! We believe in earning your business every week through reliable service, not locking you into long-term agreements. You can cancel at any time with proper notice.",
    },
    {
      question: "What size is the trash cart and is there an extra charge?",
      answer:
        "We provide a heavy-duty 96-gallon rolling cart at no extra charge. This cart is included in your $27/month service fee and is large enough for most household weekly trash needs.",
    },
    {
      question: "What if pickup falls on a holiday?",
      answer:
        "We observe New Year's Day, Independence Day, Thanksgiving Day, and Christmas Day. If your regular pickup falls on a holiday, service will be delayed by one day that week.",
    },
    {
      question: "How do I start trash service with Down Home Disposal?",
      answer:
        "Simply call us at (931) 309-2245 or email DHJunkRemovalandDemolition@gmail.com. We'll verify that we service your area, set up your account, and deliver your cart. It's that easy!",
    },
    {
      question: "Do you service inside Franklin city limits or Spring Hill city limits?",
      answer:
        "No, we only service unincorporated and rural areas outside of city limits. City limits typically have existing municipal waste contracts. We specialize in serving homeowners in rural Middle Tennessee areas that don't have municipal trash service.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-testid="text-faq-headline">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Common questions about our Middle Tennessee residential trash pickup service
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
