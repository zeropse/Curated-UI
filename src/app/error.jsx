"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h2 className="font-heading text-4xl md:text-5xl font-medium text-primary mb-4">
        Something went wrong!
      </h2>
      <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
        An unexpected error occurred. Please try again or return to the home
        page.
      </p>
      <Button onClick={() => reset()} size="lg" className="rounded-full">
        Try again
      </Button>
    </main>
  );
}
