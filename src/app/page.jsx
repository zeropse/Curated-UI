import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconArrowRight, IconSparkles, IconBolt } from "@tabler/icons-react";

const features = [
  {
    title: "Curated Quality",
    description:
      "Every library and tool is hand-tested to ensure it meets modern design standards before being added to the directory.",
    icon: IconSparkles,
  },
  {
    title: "Fast Workflow",
    description:
      "Stop endlessly bookmarking. Start building. Find the exact tools you need instantly with our categorized search.",
    icon: IconBolt,
  },
];

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen relative">
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex flex-col items-center justify-between pt-28 pb-8 px-6 md:px-12 max-w-[1400px] mx-auto z-10 overflow-hidden">
        <div className="flex-1 flex flex-col justify-center w-full items-center">
          <Badge className="mb-6 p-3 rounded-full border-primary/20 bg-primary/5 text-primary gap-1.5 animate-fade-in">
            <IconSparkles
              size={14}
              className="text-orange-500"
              aria-hidden="true"
            />
            <span>Modern UI Directory</span>
          </Badge>

          <div className="text-center mb-8 md:mb-12">
            <h1 className="font-heading text-5xl md:text-[5.5rem] font-medium tracking-tighter text-primary leading-[1.05] mb-4">
              The curated directory
              <br className="hidden md:block" /> for the modern web.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              Discover a handpicked collection of UI libraries, design systems,
              and beautiful interfaces. Built for designers and developers.
            </p>
          </div>

          <HeroCarousel />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 md:py-32 px-6 md:px-16 bg-neutral-950 text-white rounded-[40px] md:rounded-[80px] mt-12 mb-12 max-w-[1400px] mx-auto relative z-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Why Curated<span className="text-orange-500"> UI</span> exists.
            </h2>

            <div className="flex flex-col gap-6 text-lg md:text-xl text-stone-100/80 leading-relaxed">
              <p>
                We were tired of scouring the web for high-quality, modern
                components that fit today&apos;s design standards.
              </p>

              <p>
                Curated UI is a continually updated, meticulously curated
                directory of tools, libraries, and design inspiration to help
                you build exceptional products faster.
              </p>
            </div>

            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-neutral-950 hover:bg-stone-100 transition-all motion-safe:hover:scale-105 px-8 py-6 text-lg font-medium group shadow-xl shadow-white/5"
              >
                <Link href="/explore">
                  Browse Directory
                  <IconArrowRight
                    className="ml-2 motion-safe:group-hover:translate-x-1 transition-transform"
                    size={20}
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  className="bg-white/5 border-white/10 p-4 rounded-4xl text-white hover:bg-white/10 transition-colors duration-300 shadow-none"
                >
                  <CardHeader>
                    <div className="size-12 bg-white/10 rounded-full flex items-center justify-center text-orange-500 mb-2">
                      <Icon size={24} aria-hidden="true" />
                    </div>

                    <CardTitle className="text-xl font-heading font-medium tracking-tight">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-stone-100/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
