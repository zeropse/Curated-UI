import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata = {
  title: "FAQ - Curated UI",
  description: "Frequently Asked Questions",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is Curated UI and who is it for?",
      answer:
        "Curated UI is a meticulously curated directory of modern UI components, libraries, design systems, and web tools. It is built for developers and designers who want to stop endlessly bookmarking scattered resources and start building exceptional products faster.",
    },
    {
      question: "How do you select the libraries that get listed?",
      answer:
        "We have strict curation standards. Every resource is manually tested to ensure it meets modern design aesthetics, has good documentation, is actively maintained, and provides genuine value to the web development community.",
    },
    {
      question: "How can I submit a new site?",
      answer:
        "We welcome community submissions. To submit a new site, please open an issue on our GitHub repository and ensure that your submission meets our quality guidelines. Each submission is thoroughly reviewed before being added to the directory.",
    },
    {
      question: "Is this directory free to use?",
      answer:
        "Yes, Curated UI is completely free and open-source. We believe in keeping high-quality design resources accessible to everyone.",
    },
    {
      question: "How often do you add new resources?",
      answer:
        "We update the directory on a weekly basis, adding newly discovered gems and reviewing community submissions.",
    },
    {
      question: "Do you rank or sponsor specific libraries?",
      answer:
        "No. All resources are curated based on merit and quality. We do not accept paid placements yet to ensure the integrity of our curation.",
    },
  ];

  return (
    <main
      id="main-content"
      className="max-w-4xl mx-auto px-4 py-24 md:py-32 w-full mt-10"
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-4xl md:text-5xl">
            Frequently Asked Questions
          </CardTitle>
          <CardDescription className="text-base md:text-lg max-w-2xl mx-auto mt-4">
            Everything you need to know about how we curate, update, and manage
            the directory.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
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
        </CardContent>
      </Card>
    </main>
  );
}
