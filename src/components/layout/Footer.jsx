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

const informationLinks = [
  { name: "FAQ", href: "/faq", icon: IconHelp },
  { name: "Privacy Policy", href: "/privacy", icon: IconShieldLock },
  { name: "Terms of Service", href: "/terms", icon: IconFileText },
];

const contributeLinks = [
  {
    name: "Add a Site",
    href: "https://github.com/zeropse/ui-zeropse/issues/new?template=site_submission.yml",
    icon: IconPlus,
  },
  {
    name: "Report a Bug",
    href: "https://github.com/zeropse/ui-zeropse/issues/new?template=bug_report.yml",
    icon: IconBug,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/zeropse/Curated-UI",
    icon: IconBrandGithub,
  },
  { name: "Twitter", href: "https://x.com/zer0pse", icon: IconBrandX },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zeropse/",
    icon: IconBrandLinkedin,
  },
];

export function Footer() {
  return (
    <footer className="mt-32 rounded-t-4xl bg-neutral-950 px-6 pt-24 pb-12 text-white md:rounded-t-[5rem] md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="col-span-2 flex flex-col items-center gap-4 text-center md:col-span-2 md:items-start md:pr-8 md:text-left">
            <Link
              href="/"
              className="font-heading inline-flex items-center gap-1 rounded-sm text-3xl font-medium tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <Image
                src="/icon0.svg"
                alt="Curated UI Logo"
                width={50}
                height={50}
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

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Information
            </h3>

            <ul className="flex flex-col gap-3">
              {informationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${linkClass} flex items-center gap-2 hover:underline`}
                  >
                    <link.icon size={16} aria-hidden="true" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Contribute
            </h3>

            <ul className="flex flex-col gap-3">
              {contributeLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} flex items-center gap-2 hover:underline`}
                  >
                    <link.icon size={16} aria-hidden="true" />
                    {link.name}
                    <IconArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 md:flex-row">
          <p className="text-sm text-stone-100">
            © {year} Curated UI. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-sm text-sm text-stone-100 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <link.icon size={16} aria-hidden="true" />
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
