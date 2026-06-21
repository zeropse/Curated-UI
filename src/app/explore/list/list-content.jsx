"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { sites } from "@/content/data";
import { useQueryState } from "nuqs";
import { IconExternalLink } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { ExploreHeader } from "@/components/layout/explore-header";

export function ListContent() {
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

      {/* Directory Table */}
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
          <div className="rounded-xl overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm shadow-[0px_8px_32px_rgba(0,0,0,0.04)]">
            <Table>
              <TableHeader>
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
              </TableHeader>
              <TableBody>
                {filteredSites.map((site) => (
                  <TableRow key={site.url} className="border-border/40">
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
                          <IconExternalLink className="size-4" />
                          <span className="sr-only">Visit {site.name}</span>
                        </a>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </section>
    </>
  );
}
