"use client";

import React from "react";
import { SiteCard } from "@/components/site-card";
import { sites } from "@/data/sites";
import { useQueryState } from "nuqs";
import { ExploreHeader } from "@/components/layout/explore-header";
import { VirtuosoGrid } from "react-virtuoso";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
} from "@/components/ui/empty";
import { IconSearch } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export function ExploreContent() {
  const [activeCategory, setActiveCategory] = useQueryState("category", {
    defaultValue: "All",
  });
  const [searchQuery, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
  });

  const q = searchQuery?.toLowerCase();
  const filteredSites = sites.filter((site) => {
    const matchesCategory =
      activeCategory === "All" || site.category === activeCategory;
    if (!matchesCategory) return false;

    if (q) {
      return (
        site.name.toLowerCase().includes(q) ||
        site.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <>
      <ExploreHeader />

      <section className="px-6 md:px-12 max-w-[1400px] mx-auto relative z-10 min-h-[50vh]">
        {filteredSites.length === 0 ? (
          <Empty className="py-32 border-none">
            <EmptyMedia variant="icon" className="size-16 rounded-2xl mb-2">
              <IconSearch className="size-8" />
            </EmptyMedia>
            <EmptyHeader>
              <EmptyTitle className="text-xl">No sites found</EmptyTitle>
              <EmptyDescription>
                Try adjusting your search or selecting a different category.
              </EmptyDescription>
            </EmptyHeader>
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  setSearchQuery(null);
                  setActiveCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </Empty>
        ) : (
          <VirtuosoGrid
            useWindowScroll
            data={filteredSites}
            components={{
              List: React.forwardRef(({ style, children, ...props }, ref) => (
                <div
                  ref={ref}
                  {...props}
                  style={style}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16 justify-items-center"
                >
                  {children}
                </div>
              )),
              Item: React.forwardRef(({ children, ...props }, ref) => (
                <div
                  {...props}
                  ref={ref}
                  className="w-full max-w-[400px] flex justify-center"
                >
                  {children}
                </div>
              )),
            }}
            itemContent={(_index, site) => <SiteCard site={site} />}
          />
        )}
      </section>
    </>
  );
}
