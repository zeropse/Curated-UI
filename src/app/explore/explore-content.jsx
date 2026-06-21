"use client";

import { SiteCard } from "@/components/ui/site-card";
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
            {filteredSites.map((site) => (
              <SiteCard key={site.url} site={site} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
