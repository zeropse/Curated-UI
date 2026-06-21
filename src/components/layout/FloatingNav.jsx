import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "@/components/ui/button";
import { IconCompass } from "@tabler/icons-react";

export function FloatingNav() {
  return (
    <div className="fixed top-6 left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 px-4 md:px-0">
      <nav className="flex items-center justify-between rounded-full border border-border/50 bg-background/80 px-6 py-4 backdrop-blur-md shadow-[0px_4px_24px_0px_rgba(0,0,0,0.04)] dark:shadow-none">
        <Link
          href="/"
          className="font-heading flex items-center gap-2 text-lg font-medium tracking-tight text-primary"
        >
          <Image
            src="/favicon.ico"
            alt="Curated UI Logo"
            width={20}
            height={20}
            className="rounded-sm"
          />
          Curated<span className="text-orange-500"> UI</span>
        </Link>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="rounded-full">
            <Link href="/explore">
              <IconCompass size={18} />
              Explore
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}
