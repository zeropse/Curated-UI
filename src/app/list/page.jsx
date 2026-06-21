"use client";

import { SiteCard } from "@/components/SiteCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { sites, categories } from "@/lib/data";
import { useQueryState } from "nuqs";
import { IconSearch } from "@tabler/icons-react";
import { Suspense } from "react";

function ListContent() {
  const [activeCategory, setActiveCategory] = useQueryState("category", {
    defaultValue: "All",
  });
  const [searchQuery, setSearchQuery] = useQueryState("q", {
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
      {/* Header and Search */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl font-medium tracking-tight text-primary mb-6">
            Explore the Directory
          </h1>

          <div className="max-w-xl mx-auto relative">
            <IconSearch className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Search for UI components, libraries, fonts..."
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery(e.target.value || null)}
              className="w-full pl-14 pr-6 py-4 rounded-full border border-primary/20 bg-background text-lg text-primary placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Sticky Categories */}
      <div className="sticky top-20 md:top-24 z-40 w-full flex justify-center mb-16 pt-4 pb-6 px-4 md:px-8">
        <div className="bg-background/80 backdrop-blur-xl py-3 rounded-[24px] md:rounded-full px-3 border border-border/40 shadow-[0px_8px_32px_rgba(0,0,0,0.04)] dark:shadow-none max-w-full">
          <ScrollArea className="w-full max-w-[calc(100vw-3rem)] md:max-w-none">
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="flex flex-nowrap justify-start md:justify-center gap-1.5 md:gap-2 bg-transparent h-auto p-0 w-max mx-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="px-4 md:px-6 py-2 rounded-full font-medium transition-all text-sm whitespace-nowrap"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </div>
      </div>

      {/* Directory Grid */}
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

export default function ListPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background pt-32 pb-32">
      <Suspense fallback={<div className="h-[50vh]" />}>
        <ListContent />
      </Suspense>
    </main>
  );
}
