import { Suspense } from "react";
import { ListContent } from "./list-content";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
          <div className="w-full animate-fade-in px-6 md:px-12 max-w-[1400px] mx-auto pt-32">
            <div className="rounded-xl overflow-hidden border border-border/40 bg-card/80 backdrop-blur-sm shadow-[0px_8px_32px_rgba(0,0,0,0.04)]">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/40 hover:bg-transparent">
                    <TableHead className="w-[250px] font-heading font-medium text-primary">
                      Name
                    </TableHead>
                    <TableHead className="font-heading font-medium text-primary">
                      Description
                    </TableHead>
                    <TableHead className="w-[200px] font-heading font-medium text-primary">
                      Category
                    </TableHead>
                    <TableHead className="w-[100px] text-right font-heading font-medium text-primary">
                      Link
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <TableRow
                      key={i}
                      className="border-border/40 pointer-events-none"
                    >
                      <TableCell>
                        <Skeleton className="h-5 w-3/4" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-full" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-5 w-16 rounded-full" />
                      </TableCell>
                      <TableCell className="text-right flex justify-end items-center h-full min-h-[52px]">
                        <Skeleton className="size-8 rounded-full" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        }
      >
        <ListContent />
      </Suspense>
    </main>
  );
}
