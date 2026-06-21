import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "FAQ - UI Directory",
  description: "Frequently Asked Questions",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Dir. and who is it for?",
      answer:
        "Dir. is a meticulously curated directory of modern UI components, libraries, design systems, and web tools. It is built for developers and designers who want to stop endlessly bookmarking scattered resources and start building exceptional products faster.",
    },
    {
      question: "How do you select the libraries that get listed?",
      answer:
        "We have strict curation standards. Every resource is manually tested to ensure it meets modern design aesthetics, has good documentation, is actively maintained, and provides genuine value to the web development community.",
    },
    {
      question: "How can I submit my own library or tool?",
      answer:
        "We welcome community submissions! You can submit a new site by opening an issue on our GitHub repository. Please ensure your submission meets our quality guidelines before submitting.",
    },
    {
      question: "Is this directory free to use?",
      answer:
        "Yes, Dir. is completely free and open-source. We believe in keeping high-quality design resources accessible to everyone.",
    },
    {
      question: "How often do you add new resources?",
      answer:
        "We update the directory on a weekly basis, adding newly discovered gems and reviewing community submissions.",
    },
    {
      question: "Do you rank or sponsor specific libraries?",
      answer:
        "No. All resources are curated based on merit and quality. We do not accept paid placements to ensure the integrity of our curation.",
    },
  ];

  return (
    <main className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/5 to-transparent -z-10" />

      <div className="flex-grow pt-32 md:pt-40 pb-32 px-6 md:px-12 max-w-4xl mx-auto w-full z-10">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-medium tracking-tight mb-6 text-primary">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about how we curate, update, and manage
            the directory.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 md:p-12 shadow-xl shadow-black/5">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border/50 last:border-0 py-2"
              >
                <AccordionTrigger className="text-left font-heading font-medium text-lg md:text-xl hover:text-primary/80 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
}
