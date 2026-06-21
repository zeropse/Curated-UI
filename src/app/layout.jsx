import { Inter, Inter_Tight } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provicer";
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
  title: "All-in-One Design & UI Resources Directory",
  description:
    "A curated collection of modern UI libraries, fonts, design systems, and inspiration for developers and designers.",
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
            <FloatingNav />
            {children}
            <Footer />
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
