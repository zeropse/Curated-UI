"use client";

import { useRef } from "react";
import useScreenSize from "@/hooks/use-screen-size";
import { sites } from "@/data/sites";
import { getSiteImageSrc } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const BoxCarousel = dynamic(() => import("@/components/ui/box-carousel"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-4xl mx-auto flex items-center justify-center min-h-[400px]">
      <Skeleton
        style={{ width: 640, height: 400 }}
        className="rounded-xl bg-muted/20"
      />
    </div>
  ),
});

const carouselItems = sites.map((site, index) => ({
  id: String(index + 1),
  type: "image",
  src: getSiteImageSrc(site),
  alt: site.name,
}));

export function HeroCarousel() {
  const carouselRef = useRef(null);
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

  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[400px]">
      <div className="flex justify-center shrink-0">
        <BoxCarousel
          ref={carouselRef}
          items={carouselItems}
          width={width}
          height={height}
          direction="left"
          autoPlay
          autoPlayInterval={1000}
          enableDrag
          perspective={1200}
        />
      </div>
    </div>
  );
}
