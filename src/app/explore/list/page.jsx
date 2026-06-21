import { Suspense } from "react";
import { IconLoader } from "@tabler/icons-react";
import { ListContent } from "./list-content";

export const metadata = {
  title: "Explore List",
  description:
    "Browse the curated directory of modern UI tools and libraries in a list format.",
};

export default function ExploreListPage() {
  return (
    <main
      id="main-content"
      className="min-h-screen relative overflow-hidden py-32"
    >
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
        <ListContent />
      </Suspense>
    </main>
  );
}
