"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupText,
  InputGroupButton,
} from "@/components/ui/input-group";
import { categories } from "@/data/categories";
import { useQueryState } from "nuqs";
import {
  IconSearch,
  IconLayoutGrid,
  IconList,
  IconX,
} from "@tabler/icons-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useTransition } from "react";

export function ExploreHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef(null);
  const [isPending, startTransition] = useTransition();

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
    startTransition(() => {
      router.push(`${newPath}${query}`, { scroll: false });
    });
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

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <InputGroup className="h-14 rounded-full bg-white shadow-sm hover:border-neutral-300 transition-all duration-300 [&:has(input:focus-visible)]:border-primary [&:has(input:focus-visible)]:ring-primary">
              <InputGroupAddon align="inline-start" className="pl-4 pr-1">
                <InputGroupText>
                  <IconSearch className="text-muted-foreground group-focus-within/input-group:text-primary transition-colors" />
                </InputGroupText>
              </InputGroupAddon>

              <InputGroupInput
                ref={inputRef}
                type="text"
                placeholder="Search components, templates, animations... (Ctrl+K)"
                className="text-base placeholder:text-neutral-400"
                value={searchQuery || ""}
                onChange={(e) => setSearchQuery(e.target.value || null)}
              />

              <InputGroupAddon align="inline-end" className="pr-4">
                {searchQuery && (
                  <InputGroupButton
                    variant="ghost"
                    className="size-8 p-0 text-neutral-400 hover:text-destructive rounded-full hover:bg-neutral-100 transition-colors"
                    onClick={() => {
                      setSearchQuery(null);
                      inputRef.current?.focus();
                    }}
                  >
                    <IconX size={16} />
                  </InputGroupButton>
                )}
              </InputGroupAddon>
            </InputGroup>
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
