"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "@/components/ui/button";
import { IconCompass } from "@tabler/icons-react";

export function FloatingNav() {
  return (
    <div className="fixed top-6 left-1/2 z-50 w-full max-w-5xl -translate-x-1/2 px-4 md:px-0">
      <nav className="flex items-center justify-between rounded-full border border-border/50 bg-background/80 px-6 py-4 backdrop-blur-md shadow-lg dark:shadow-none">
        <Link
          href="/"
          className="font-heading flex items-center gap-1 text-lg font-medium tracking-tight text-primary"
        >
          <div className="relative w-10 h-10 flex-shrink-0">
            <Image
              src="/icon1.png"
              alt="Curated UI Logo"
              width={40}
              height={40}
              className="rounded-sm object-contain dark:hidden"
              priority
            />
            <Image
              src="/icon0.svg"
              alt="Curated UI Logo"
              width={40}
              height={40}
              className="rounded-sm object-contain hidden dark:block"
              priority
            />
          </div>
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
