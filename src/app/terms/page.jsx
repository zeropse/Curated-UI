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
    <main className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/5 to-transparent -z-10" />

      <div className="flex-grow pt-32 md:pt-40 pb-32 px-6 md:px-12 max-w-4xl mx-auto w-full z-10">
        <div className="mb-16 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-medium tracking-tight mb-6 text-primary">
            Terms of Service
          </h1>

          <p className="text-muted-foreground text-lg mb-2">
            Effective Date:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-16 shadow-xl shadow-black/5 space-y-12">
          {termsSections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h2 className="font-heading text-3xl font-medium tracking-tight text-primary">
                {section.title}
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
