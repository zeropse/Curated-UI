import { Suspense } from "react";
import { IconLoader } from "@tabler/icons-react";
import { ExploreContent } from "./explore-content";

export const metadata = {
  title: "Explore",
  description: "Browse the curated directory of modern UI tools and libraries.",
};

export default function ExplorePage() {
  return (
    <main className="min-h-screen relative overflow-hidden py-32">
      <Suspense
        fallback={
          <div className="h-[50vh] flex items-center justify-center">
            <IconLoader
              className="size-8 animate-spin text-muted-foreground"
              stroke={2}
            />
          </div>
        }
      >
        <ExploreContent />
      </Suspense>
    </main>
  );
}
