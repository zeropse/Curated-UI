"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn, getSiteImageSrc } from "@/lib/utils";
import { sites } from "@/content/data";
import { useQueryState } from "nuqs";
import { ExploreHeader } from "@/components/layout/explore-header";

export function ExploreContent() {
  const [activeCategory] = useQueryState("category", {
    defaultValue: "All",
  });
  const [searchQuery] = useQueryState("q", {
    defaultValue: "",
  });

  const [loadedImages, setLoadedImages] = useState({});
  const [errorImages, setErrorImages] = useState({});

  const handleImageLoad = (url) => {
    setLoadedImages((prev) => ({ ...prev, [url]: true }));
  };

  const handleImageError = (url) => {
    setErrorImages((prev) => ({ ...prev, [url]: true }));
  };

  let filteredSites =
    activeCategory === "All"
      ? sites
      : sites.filter((site) => site.category === activeCategory);

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredSites = filteredSites.filter(
      (site) =>
        site.name.toLowerCase().includes(q) ||
        site.description.toLowerCase().includes(q),
    );
  }

  return (
    <>
      <ExploreHeader />

      <section className="px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 min-h-[50vh]">
        {filteredSites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <h3 className="font-heading text-2xl font-medium text-primary mb-4">
              No sites found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search or selecting a different category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16 justify-items-center">
            {filteredSites.map((site) => {
              const imageLoaded = loadedImages[site.url];
              const hasError = errorImages[site.url];

              return (
                <Link
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full max-w-[400px] h-full"
                >
                  <Card
                    className="
                      h-full
                      p-2.5
                      border border-border/40
                      bg-background
                      shadow-sm
                      transition-all
                      duration-500
                      motion-safe:hover:-translate-y-2
                      hover:border-primary/20
                      hover:shadow-[0px_16px_48px_rgba(0,0,0,0.06)]
                      dark:hover:shadow-none
                      flex
                      flex-col
                    "
                  >
                    {/* Inset Image Frame */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted/30">
                      {!imageLoaded && !hasError && (
                        <Skeleton className="absolute inset-0 h-full w-full" />
                      )}

                      {hasError ? (
                        <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/40 text-6xl font-heading">
                          {site.name.substring(0, 2).toUpperCase()}
                        </div>
                      ) : (
                        <Image
                          src={getSiteImageSrc(site)}
                          alt={site.name}
                          fill
                          unoptimized={false}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className={cn(
                            "object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-105",
                            imageLoaded ? "opacity-100" : "opacity-0",
                          )}
                          onLoad={() => handleImageLoad(site.url)}
                          onError={() => handleImageError(site.url)}
                        />
                      )}
                    </div>

                    {/* Content Section Below Image */}
                    <CardContent className="px-4 py-5 flex flex-col gap-1.5 flex-grow border-0">
                      <div className="flex items-start justify-between gap-4 w-full">
                        <CardTitle
                          className="
                            text-2xl
                            font-heading
                            font-medium
                            tracking-tight
                            transition-colors
                            duration-300
                            group-hover:text-primary
                          "
                        >
                          {site.name}
                        </CardTitle>

                        {/* Hover Arrow Component */}
                        <div
                          className="
                            flex h-8 w-8 shrink-0 items-center justify-center
                            rounded-full
                            bg-muted/50
                            text-muted-foreground
                            transition-all
                            duration-300
                            group-hover:bg-primary
                            group-hover:text-primary-foreground
                            opacity-0
                            -translate-x-2
                            group-hover:opacity-100
                            group-hover:translate-x-0
                          "
                        >
                          <IconArrowUpRight
                            size={16}
                            stroke={2.5}
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <CardDescription
                        className="
                          text-sm
                          leading-relaxed
                          line-clamp-2
                          text-muted-foreground/80
                        "
                      >
                        {site.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
