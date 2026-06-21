export const metadata = {
  title: "Privacy Policy - Curated UI",
  description: "Privacy Policy for Curated UI",
};

const privacySections = [
  {
    title: "1. Introduction",
    content: (
      <>
        Welcome to Curated UI ("we," "our," or "us"). We respect your privacy and are
        deeply committed to protecting it. This Privacy Policy explains our
        practices regarding the collection, use, and disclosure of information
        that you may provide via our directory.
      </>
    ),
  },
  {
    title: "2. The Data We Collect",
    content: (
      <>
        We believe in data minimization. We do <strong>not</strong> track,
        collect, or store any personally identifiable information from our
        visitors. We use simple, privacy-respecting analytics (which do not use
        cookies or collect IP addresses) solely to understand overall website
        traffic and usage patterns.
      </>
    ),
  },
  {
    title: "3. Third-Party Links & External Sites",
    content: (
      <>
        Our core service is providing links to third-party tools, libraries, and
        design systems. When you click on these links, you will be directed to
        that third party&apos;s site. We strongly advise you to review the
        Privacy Policy of every site you visit. We have no control over and
        assume no responsibility for the content, privacy policies, or practices
        of any third-party sites or services.
      </>
    ),
  },
  {
    title: "4. Data Security",
    content: (
      <>
        While we do not collect personal data, we still prioritize the security
        of our platform. We use commercially acceptable means to protect our
        website and ensure it remains a safe directory for all users.
      </>
    ),
  },
  {
    title: "5. Changes to This Privacy Policy",
    content: (
      <>
        We may update our Privacy Policy from time to time. Any changes will be
        posted on this page with an updated "Effective Date." We encourage you
        to review this Privacy Policy periodically for any changes.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/5 to-transparent -z-10" />

      <div className="flex-grow pt-32 md:pt-40 pb-32 px-6 md:px-12 max-w-4xl mx-auto w-full z-10">
        <div className="mb-16 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-medium tracking-tight mb-6 text-primary">
            Privacy Policy
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
          {privacySections.map((section) => (
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
