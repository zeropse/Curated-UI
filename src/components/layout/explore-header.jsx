"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { useQueryState } from "nuqs";
import {
  IconSearch,
  IconLayoutGrid,
  IconList,
  IconX,
} from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export function ExploreHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const view = pathname === "/explore/list" ? "list" : "grid";

  const handleViewChange = (newView) => {
    const newPath = newView === "list" ? "/explore/list" : "/explore";
    const currentSearch = searchParams.toString();
    const query = currentSearch ? `?${currentSearch}` : "";
    router.push(`${newPath}${query}`, { scroll: false });
  };

  const [activeCategory, setActiveCategory] = useQueryState("category", {
    defaultValue: "All",
  });
  const [searchQuery, setSearchQuery] = useQueryState("q", {
    defaultValue: "",
  });

  return (
    <>
      {/* Header and Search */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto relative">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-6xl font-medium tracking-tight text-primary mb-6">
            Explore the Directory
          </h1>

          <div className="max-w-xl mx-auto relative mb-8 group">
            <IconSearch
              className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-muted-foreground pointer-events-none"
              aria-hidden="true"
            />
            <Input
              ref={inputRef}
              id="search"
              name="search"
              type="text"
              placeholder="Search for UI, libraries, fonts…"
              aria-label="Search directory"
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery(e.target.value || null)}
              className="w-full pl-14 pr-14 h-14 md:h-16 rounded-full border border-primary/20 bg-background text-lg text-primary placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/20 transition-all shadow-sm"
            />
            {searchQuery ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchQuery(null)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive hover:bg-transparent focus-visible:ring-2 focus-visible:ring-ring h-8 w-8 rounded-full"
                aria-label="Clear search"
              >
                <IconX size={20} aria-hidden="true" />
              </Button>
            ) : (
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center gap-1 opacity-50">
                <kbd className="pointer-events-none inline-flex h-5 items-center gap-1 rounded border border-primary/20 bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </div>
            )}
          </div>

          {/* View Toggle */}
          <div className="flex justify-center">
            <div className="bg-background/80 backdrop-blur-xl p-2 rounded-3xl md:rounded-full border border-border/40 shadow-lg dark:shadow-none inline-flex">
              <Tabs value={view} onValueChange={handleViewChange}>
                <TabsList className="flex flex-nowrap justify-start md:justify-center gap-1.5 md:gap-2 bg-transparent h-auto p-0 w-max mx-auto">
                  <TabsTrigger
                    value="grid"
                    className="flex items-center gap-2 px-4 md:px-6 py-2 rounded-full font-medium transition-all text-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-muted/50 motion-safe:hover:scale-105 motion-safe:active:scale-95"
                  >
                    <IconLayoutGrid size={18} aria-hidden="true" />
                    Grid
                  </TabsTrigger>
                  <TabsTrigger
                    value="list"
                    className="flex items-center gap-2 px-4 md:px-6 py-2 rounded-full font-medium transition-all text-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-muted/50 motion-safe:hover:scale-105 motion-safe:active:scale-95"
                  >
                    <IconList size={18} aria-hidden="true" />
                    List
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Categories */}
      <div className="sticky top-20 md:top-24 z-40 w-full flex justify-center mb-16 pt-4 pb-6 px-4 md:px-8">
        <div className="bg-background/80 backdrop-blur-xl py-3 rounded-3xl md:rounded-full px-3 border border-border/40 shadow-lg dark:shadow-none w-full max-w-full md:w-auto">
          <ScrollArea className="w-full">
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="flex flex-nowrap justify-start md:justify-center gap-1.5 md:gap-2 bg-transparent h-auto p-0 w-max md:mx-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="px-4 md:px-6 py-2 rounded-full font-medium transition-all text-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:bg-muted/50 motion-safe:hover:scale-105 motion-safe:active:scale-95"
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
    </>
  );
}
