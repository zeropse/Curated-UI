"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { cn, getSiteImageSrc } from "@/lib/utils";

export function SiteCard({ site }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <Link
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full h-full"
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
          animate-in fade-in zoom-in-95
          motion-safe:hover:-translate-y-2
          hover:border-primary/20
          hover:shadow-xl
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                "object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-105",
                imageLoaded ? "opacity-100" : "opacity-0",
              )}
              onLoad={() => setImageLoaded(true)}
              onError={() => setHasError(true)}
            />
          )}
        </div>

        {/* Content Section Below Image */}
        <CardHeader className="px-4 py-5 flex flex-col gap-1.5 flex-grow border-0">
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
                flex size-8 shrink-0 items-center justify-center
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
              <IconArrowUpRight size={16} stroke={2.5} aria-hidden="true" />
              <span className="sr-only">Visit {site.name}</span>
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
        </CardHeader>
      </Card>
    </Link>
  );
}

export function SiteCardSkeleton() {
  return (
    <Card className="h-full w-full max-w-[400px] p-2.5 border border-border/40 bg-background shadow-sm flex flex-col">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted/30">
        <Skeleton className="absolute inset-0 h-full w-full" />
      </div>
      <CardHeader className="px-4 py-5 flex flex-col gap-3 flex-grow border-0">
        <div className="flex items-start justify-between gap-4 w-full">
          <Skeleton className="h-8 w-2/3" />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
        </div>
      </CardHeader>
    </Card>
  );
}
