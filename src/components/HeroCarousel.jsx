"use client";

import { useEffect, useRef, useState } from "react";
import BoxCarousel from "@/components/ui/box-carousel";
import useScreenSize from "@/hooks/use-screen-size";
import { sites } from "@/data/sites";
import { getSiteImageSrc } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
/* import { IconBug, IconBugOff } from "@tabler/icons-react"; */

const carouselItems = sites.map((site, index) => ({
  id: String(index + 1),
  type: "image",
  src: getSiteImageSrc(site),
  alt: site.name,
}));

export function HeroCarousel() {
  const carouselRef = useRef(null);
  // const [debug, setDebug] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getCarouselDimensions = () => {
    if (screenSize.lessThan("md")) {
      return { width: 320, height: 220 };
    }
    if (screenSize.lessThan("lg")) {
      return { width: 500, height: 320 };
    }
    return { width: 640, height: 400 };
  };

  const { width, height } = getCarouselDimensions();

  // const toggleDebug = () => setDebug(!debug);

  // Return a skeleton of the max expected size to prevent layout shift during SSR/hydration.
  // The actual dimensions are fixed inside the layout, so the flex container handles centering.
  if (!isMounted) {
    return (
      <div className="w-full max-w-4xl mx-auto flex items-center justify-center min-h-[400px]">
        <Skeleton
          style={{ width: 640, height: 400 }}
          className="rounded-xl bg-muted/20"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
      {/* <button
        onClick={toggleDebug}
        className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
        title={debug ? "Debug Mode: ON" : "Debug Mode: OFF"}
        aria-label={debug ? "Disable Debug Mode" : "Enable Debug Mode"}
        aria-pressed={debug}
      >
        {debug ? (
          <IconBug size={20} aria-hidden="true" />
        ) : (
          <IconBugOff size={20} aria-hidden="true" />
        )}
      </button> */}

      <div className="flex justify-center shrink-0">
        <BoxCarousel
          ref={carouselRef}
          items={carouselItems}
          width={width}
          height={height}
          direction="left"
          autoPlay
          autoPlayInterval={1000}
          // debug={debug}
          enableDrag
          perspective={1200}
        />
      </div>
    </div>
  );
}
