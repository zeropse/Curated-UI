import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata = {
  title: "Terms of Service - Curated UI",
  description: "Terms of Service for Curated UI",
};

const termsSections = [
  {
    title: "1. Agreement to Terms",
    content:
      'By accessing or using Curated UI (the "Directory"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.',
  },
  {
    title: "2. Use of the Directory",
    content:
      "Curated UI is provided as a free, curated resource for developers and designers. You may use the directory to discover, explore, and navigate to third-party tools and libraries. You agree not to use the directory for any unlawful purpose or in any way that could damage, disable, or impair the service.",
  },
  {
    title: "3. Intellectual Property",
    content:
      "The curation, layout, design, and original content of Curated UI are protected by intellectual property rights. However, all third-party logos, trademarks, library names, and website screenshots belong to their respective owners. We do not claim ownership over the external resources we link to.",
  },
  {
    title: "4. Disclaimer of Warranties",
    content:
      'The directory is provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, or completeness of the curation. We do not endorse or guarantee the quality of any third-party tool listed.',
  },
  {
    title: "5. Limitation of Liability",
    content:
      "In no event shall Curated UI, its creators, or contributors be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the directory, or from any third-party tools you discover through the directory.",
  },
  {
    title: "6. Changes to Terms",
    content:
      "We reserve the right to modify or replace these Terms at any time. We will provide notice of significant changes by updating the date at the top of this page. Your continued use of the directory after such modifications constitutes acceptance of the new terms.",
  },
];

export default function TermsPage() {
  return (
    <main
      id="main-content"
      className="max-w-4xl mx-auto px-4 py-24 md:py-32 w-full mt-10"
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-4xl md:text-5xl">
            Terms of Service
          </CardTitle>

          <CardDescription>
            Effective Date:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-8">
          {termsSections.map((section, index) => (
            <section
              key={section.title}
              className={index !== 0 ? "border-t pt-8" : ""}
            >
              <h2 className="text-xl font-semibold tracking-tight mb-3">
                {section.title}
              </h2>

              <p className="text-muted-foreground leading-7">
                {section.content}
              </p>
            </section>
          ))}
        </CardContent>
      </Card>
    </main>
  );
}
