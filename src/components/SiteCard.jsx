"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Skeleton } from "./ui/skeleton";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SiteCard({ site }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <Link
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full max-w-[400px]"
    >
      <Card
        className="
          overflow-hidden
          rounded-3xl
          border-border/50
          bg-background
          shadow-sm
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-primary/20
          hover:shadow-xl
          hover:shadow-primary/10
        "
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {!imageLoaded && !hasError && (
            <Skeleton className="absolute inset-0 h-full w-full" />
          )}

          <div
            className="
              absolute inset-0 opacity-0
              transition-opacity duration-500
              group-hover:opacity-100
              bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]
              pointer-events-none
              z-10
            "
          />

          {hasError ? (
            <div className="flex h-full w-full items-center justify-center bg-primary/5 text-primary/40 text-6xl font-heading">
              {site.name.substring(0, 2).toUpperCase()}
            </div>
          ) : (
            <img
              src={`https://api.microlink.io/?url=${encodeURIComponent(
                site.url,
              )}&screenshot=true&meta=false&embed=screenshot.url`}
              alt={site.name}
              className={cn(
                "h-full w-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105",
                imageLoaded ? "opacity-100" : "opacity-0",
              )}
              onLoad={() => setImageLoaded(true)}
              onError={() => setHasError(true)}
            />
          )}
        </div>

        {/* Content */}
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex items-center gap-3 flex-wrap">
                <CardTitle
                  className="
                    text-xl
                    font-semibold
                    tracking-tight
                    transition-colors
                    duration-300
                    group-hover:text-primary
                  "
                >
                  {site.name}
                </CardTitle>

                <Badge
                  variant="secondary"
                  className="
                    rounded-full
                    px-3
                    py-1
                    text-[11px]
                    font-medium
                    tracking-wide
                  "
                >
                  {site.category}
                </Badge>
              </div>

              <CardDescription
                className="
                  text-sm
                  leading-relaxed
                  line-clamp-2
                  text-muted-foreground
                "
              >
                {site.description}
              </CardDescription>
            </div>

            <div
              className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-full
                border border-border/60
                bg-muted/50
                transition-all
                duration-300
                group-hover:bg-primary
                group-hover:text-primary-foreground
                group-hover:border-primary
              "
            >
              <IconArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
