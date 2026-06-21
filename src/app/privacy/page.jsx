import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata = {
  title: "Privacy Policy - Curated UI",
  description: "Privacy Policy for Curated UI",
};

const privacySections = [
  {
    title: "1. Introduction",
    content: (
      <>
        Welcome to Curated UI ("we," "our," or "us"). We respect your privacy
        and are deeply committed to protecting it. This Privacy Policy explains
        our practices regarding the collection, use, and disclosure of
        information that you may provide via our directory.
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
    <main
      id="main-content"
      className="max-w-4xl mx-auto px-4 py-24 md:py-32 w-full mt-10"
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-4xl md:text-5xl">Privacy Policy</CardTitle>

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
          {privacySections.map((section, index) => (
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
