import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "404",
  description: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h2 className="font-heading text-6xl md:text-8xl font-medium text-primary mb-4">
        404
      </h2>
      <p className="text-xl text-muted-foreground mb-8">
        We couldn&apos;t find the page you were looking for.
      </p>
      <Button asChild size="lg" className="rounded-full">
        <Link href="/">Return Home</Link>
      </Button>
    </main>
  );
}
