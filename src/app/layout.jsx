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
            <FloatingNav />
            {children}
            {/* Background Ghost Text */}
            <div className="fixed top-1/3 left-0 w-full overflow-hidden -z-0 pointer-events-none select-none flex justify-center opacity-[0.05] dark:opacity-5">
              <span className="font-heading text-[20vw] font-bold tracking-tighter text-primary whitespace-nowrap">
                DIRECTORY
              </span>
            </div>
            <Footer />
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
