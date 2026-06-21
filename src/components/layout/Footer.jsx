"use client";

import Link from "next/link";
import Image from "next/image";
import {
  IconHelp,
  IconPlus,
  IconBug,
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconShieldLock,
  IconFileText,
  IconArrowUpRight,
} from "@tabler/icons-react";

const linkClass =
  "text-sm text-stone-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-32 rounded-t-[40px] bg-neutral-950 px-6 pt-24 pb-12 text-white md:rounded-t-[80px] md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="col-span-2 flex flex-col items-center gap-4 text-center md:col-span-2 md:items-start md:pr-8 md:text-left">
            <Link
              href="/"
              className="font-heading inline-flex items-center gap-2 rounded-sm text-3xl font-medium tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <Image
                src="/favicon.ico"
                alt="Curated UI Logo"
                width={28}
                height={28}
                className="rounded-sm"
              />
              <span>
                Curated<span className="text-orange-500"> UI</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-neutral-500">
              A carefully curated collection of modern UI libraries, design
              systems, and typography inspiration. Everything you need to build
              beautiful interfaces.
            </p>
          </div>

          {/* Community */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Community
            </h3>

            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/faq"
                  className={`${linkClass} flex items-center gap-2 hover:underline`}
                >
                  <IconHelp size={16} />
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="https://github.com/zeropse/ui-zeropse/issues/new?template=site_submission.yml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} flex items-center gap-2 hover:underline`}
                >
                  <IconPlus size={16} />
                  Add a Site
                  <IconArrowUpRight size={16} />
                </Link>
              </li>

              <li>
                <Link
                  href="https://github.com/zeropse/ui-zeropse/issues/new?template=bug_report.yml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} flex items-center gap-2 hover:underline`}
                >
                  <IconBug size={16} />
                  Report a Bug
                  <IconArrowUpRight size={16} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Legal
            </h3>

            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/privacy"
                  className={`${linkClass} flex items-center gap-1.5 hover:underline`}
                >
                  <IconShieldLock size={16} />
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className={`${linkClass} flex items-center gap-1.5 hover:underline`}
                >
                  <IconFileText size={16} />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 md:flex-row">
          <p className="text-sm text-stone-100">
            © {year} Curated UI. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/zeropse/ui-zeropse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-sm text-sm text-stone-100 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <IconBrandGithub size={16} />
              GitHub
            </Link>

            <Link
              href="https://x.com/zer0pse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-sm text-sm text-stone-100 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <IconBrandX size={16} />
              Twitter
            </Link>

            <Link
              href="https://www.linkedin.com/in/zeropse/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-sm text-sm text-stone-100 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <IconBrandLinkedin size={16} />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
