"use client";

import { useRef, useState } from "react";
import BoxCarousel from "@/components/ui/box-carousel";
import useScreenSize from "@/hooks/use-screen-size";
import { sites } from "@/lib/data";
/* import { IconBug, IconBugOff } from "@tabler/icons-react"; */

const carouselItems = sites.map((site, index) => ({
  id: String(index + 1),
  type: "image",
  src: `https://api.microlink.io/?url=${encodeURIComponent(site.url)}&screenshot=true&meta=false&embed=screenshot.url`,
  alt: site.name,
}));

export function HeroCarousel() {
  const carouselRef = useRef(null);
  const [debug, setDebug] = useState(false);
  const screenSize = useScreenSize();

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

  const toggleDebug = () => setDebug(!debug);

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
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
          debug={debug}
          enableDrag
          perspective={1200}
        />
      </div>
    </div>
  );
}
