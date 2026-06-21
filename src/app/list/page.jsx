import { Suspense } from "react";
import { IconLoader } from "@tabler/icons-react";
import { ListContent } from "./list-content";

export default function ListPage() {
  return (
    <main className="min-h-screen relative overflow-hidden py-32">
      <Suspense
        fallback={
          <div className="h-[50vh] flex items-center justify-center">
            <IconLoader
              className="h-8 w-8 animate-spin text-muted-foreground"
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
