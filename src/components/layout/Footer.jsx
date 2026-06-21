"use client";

import Link from "next/link";
import {
  IconHelp,
  IconPlus,
  IconBug,
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconShieldLock,
  IconFileText,
} from "@tabler/icons-react";
import Image from "next/image";

const linkClass =
  "text-sm text-stone-100 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm";

const sections = [
  {
    title: "Community",
    links: [
      {
        href: "/faq",
        label: "FAQ",
        icon: <IconHelp size={16} aria-hidden="true" />,
      },
      {
        href: "https://github.com/zeropse/ui-zeropse/issues/new?template=site_submission.yml",
        label: "Add a Site",
        icon: <IconPlus size={16} aria-hidden="true" />,
      },
      {
        href: "https://github.com/zeropse/ui-zeropse/issues/new?template=bug_report.yml",
        label: "Report a Bug",
        icon: <IconBug size={16} aria-hidden="true" />,
      },
    ],
  },
];

const socialLinks = [
  {
    href: "https://github.com/zeropse/ui-zeropse",
    label: "GitHub",
    icon: <IconBrandGithub size={16} aria-hidden="true" />,
  },
  {
    href: "https://x.com/zer0pse",
    label: "Twitter",
    icon: <IconBrandX size={16} aria-hidden="true" />,
  },
  {
    href: "https://www.linkedin.com/in/zeropse/",
    label: "LinkedIn",
    icon: <IconBrandLinkedin size={16} aria-hidden="true" />,
  },
];

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-32 rounded-t-[40px] bg-neutral-950 px-6 pt-24 pb-12 text-white md:rounded-t-[80px] md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="flex flex-col items-center text-center gap-4 md:items-start md:text-left col-span-2 md:col-span-2 md:pr-8">
            <Link
              href="/"
              className="font-heading inline-flex items-center gap-2 text-3xl font-medium tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm"
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

          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                {section.title}
              </h3>

              <ul className="flex flex-col gap-3">
                {section.links.map((link) => {
                  const isExternal = link.href.startsWith("http");

                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`${linkClass} flex items-center gap-2 hover:underline`}
                        {...(isExternal && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {"icon" in link && link.icon}
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
              Legal
            </h3>

            <ul className="flex flex-col gap-3">
              {[
                {
                  href: "/privacy",
                  label: "Privacy Policy",
                  icon: <IconShieldLock size={16} aria-hidden="true" />,
                },
                {
                  href: "/terms",
                  label: "Terms of Service",
                  icon: <IconFileText size={16} aria-hidden="true" />,
                },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${linkClass} flex items-center gap-1.5 hover:underline`}
                  >
                    {link.icon}
                    {link.label}
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
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone-100 hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm flex items-center gap-1.5"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
