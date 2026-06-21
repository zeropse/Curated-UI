import { IconLoader } from "@tabler/icons-react";

export const metadata = {
  title: "Loading...",
};

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in">
      <IconLoader
        className="size-10 animate-spin text-primary mb-4"
        stroke={2}
      />
      <p className="text-muted-foreground font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
}
