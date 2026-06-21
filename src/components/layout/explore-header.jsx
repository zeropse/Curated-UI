"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { categories } from "@/content/data";
import { useQueryState } from "nuqs";
import {
  IconSearch,
  IconLayoutGrid,
  IconList,
  IconX,
} from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function ExploreHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

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
      <section className=" mx-auto relative">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl font-medium tracking-tight text-primary mb-6">
            Explore the Directory
          </h1>

          <div className="max-w-xl mx-auto relative mb-8">
            <IconSearch className="absolute left-6 top-1/2 -translate-y-1/2 size-5 text-muted-foreground pointer-events-none" />
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Search for UI, libraries, fonts..."
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery(e.target.value || null)}
              className="w-full pl-14 pr-14 py-4 rounded-full border border-primary/20 bg-background text-lg text-primary placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery(null)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive transition-colors focus:outline-none flex items-center justify-center p-1"
                aria-label="Clear search"
              >
                <IconX size={20} />
              </button>
            )}
          </div>

          {/* View Toggle */}
          <div className="flex justify-center">
            <div className="bg-background/80 backdrop-blur-xl p-2 rounded-[24px] md:rounded-full border border-border/40 shadow-[0px_8px_32px_rgba(0,0,0,0.04)] dark:shadow-none inline-flex">
              <Tabs value={view} onValueChange={handleViewChange}>
                <TabsList className="flex flex-nowrap justify-start md:justify-center gap-1.5 md:gap-2 bg-transparent h-auto p-0 w-max mx-auto">
                  <TabsTrigger
                    value="grid"
                    className="flex items-center gap-2 px-4 md:px-6 py-2 rounded-full font-medium transition-all text-sm whitespace-nowrap"
                  >
                    <IconLayoutGrid size={18} />
                    Grid
                  </TabsTrigger>
                  <TabsTrigger
                    value="list"
                    className="flex items-center gap-2 px-4 md:px-6 py-2 rounded-full font-medium transition-all text-sm whitespace-nowrap"
                  >
                    <IconList size={18} />
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
    </>
  );
}
