import { Inter, Inter_Tight } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { cn } from "@/lib/utils";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Footer } from "@/components/layout/Footer";
import { FloatingNav } from "@/components/layout/FloatingNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  metadataBase: new URL("https://ui.zeropse.me"),
  title: {
    template: "%s | Curated UI",
    default: "Curated UI - All-in-One Design & UI Resources",
  },
  description:
    "A curated collection of modern UI libraries, fonts, design systems, and inspiration for developers and designers.",
  appleWebApp: {
    title: "Curated UI",
  },
  keywords: [
    "UI",
    "Design",
    "Resources",
    "Directory",
    "Tailwind CSS",
    "React",
    "Next.js",
    "Components",
    "Curated UI",
  ],
  authors: [{ name: "Curated UI" }],
  creator: "Curated UI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Curated UI - All-in-One Design & UI Resources",
    description:
      "A curated collection of modern UI libraries, fonts, design systems, and inspiration for developers and designers.",
    siteName: "Curated UI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Curated UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curated UI - All-in-One Design & UI Resources",
    description:
      "A curated collection of modern UI libraries, fonts, design systems, and inspiration for developers and designers.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, interTight.variable)}
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-primary focus:font-medium focus:rounded-md focus:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Skip to main content
            </a>
            {/* Ghost Website Name in Background */}
            <div className="fixed inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
              <span className="font-heading text-[15vw] md:text-[20vw] font-bold text-primary opacity-[0.02] dark:opacity-[0.03] select-none whitespace-nowrap tracking-tighter">
                CURATED UI.
              </span>
            </div>
            <FloatingNav />
            {children}
            <Footer />
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
