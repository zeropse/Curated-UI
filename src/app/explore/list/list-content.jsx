"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { sites } from "@/data/sites";
import { useQueryState } from "nuqs";
import { IconExternalLink, IconSearch } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { ExploreHeader } from "@/components/layout/explore-header";
import { TableVirtuoso } from "react-virtuoso";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
} from "@/components/ui/empty";

export function ListContent() {
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
      <ExploreHeader />

      {/* Directory Table */}
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
          <div className="rounded-xl overflow-hidden border border-border/40 bg-card/80 backdrop-blur-sm shadow-[0px_8px_32px_rgba(0,0,0,0.04)]">
            <TableVirtuoso
              useWindowScroll
              data={filteredSites}
              components={{
                Table: (props) => <Table {...props} />,
                TableHead: (props) => <TableHeader {...props} />,
                TableRow: (props) => (
                  <TableRow
                    {...props}
                    className="border-border/40 transition-colors hover:bg-muted/50 animate-in fade-in duration-300 ease-out"
                  />
                ),
                TableBody: (props) => <TableBody {...props} />,
              }}
              fixedHeaderContent={() => (
                <TableRow className="border-border/40 hover:bg-transparent">
                  <TableHead className="w-[250px] font-heading font-medium text-primary">
                    Name
                  </TableHead>
                  <TableHead className="font-heading font-medium text-primary">
                    Description
                  </TableHead>
                  <TableHead className="w-[200px] font-heading font-medium text-primary">
                    Category
                  </TableHead>
                  <TableHead className="w-[100px] text-right font-heading font-medium text-primary">
                    Link
                  </TableHead>
                </TableRow>
              )}
              itemContent={(_index, site) => (
                <>
                  <TableCell className="font-medium text-primary">
                    {site.name}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {site.description}
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                      {site.category}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="hover:bg-primary/10 hover:text-primary rounded-full"
                    >
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconExternalLink
                          className="size-4"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Visit {site.name}</span>
                      </a>
                    </Button>
                  </TableCell>
                </>
              )}
            />
          </div>
        )}
      </section>
    </>
  );
}
