"use client";

import Link from "next/link";
import {
  IconHelp,
  IconPlus,
  IconEdit,
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconShieldLock,
  IconFileText,
} from "@tabler/icons-react";
import Image from "next/image";

const linkClass =
  "text-sm text-[#F3F0EE] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm";

const sections = [
  {
    title: "Need Help?",
    links: [
      {
        href: "/faq",
        label: "FAQ",
        icon: <IconHelp size={16} aria-hidden="true" />,
      },
    ],
  },

  {
    title: "Submit",
    links: [
      {
        href: "https://github.com/zeropse/ui-zeropse/issues/new?title=Add%20Site:%20[Site%20Name]&labels=enhancement&body=URL:%0ADescription:",
        label: "Add a Site",
        icon: <IconPlus size={16} aria-hidden="true" />,
      },
      {
        href: "https://github.com/zeropse/ui-zeropse/issues/new?title=Update%20Site:%20[Site%20Name]&labels=enhancement&body=URL:%0AWhat%20to%20update:",
        label: "Update Listing",
        icon: <IconEdit size={16} aria-hidden="true" />,
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
    <footer className="mt-32 rounded-t-[40px] bg-[#141413] px-6 pt-24 pb-12 text-white md:rounded-t-[80px] md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-heading mb-16 max-w-2xl text-4xl font-medium tracking-tight md:text-5xl">
          We&apos;re always here when you need to find the right tool.
        </h2>

        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1 md:pr-8">
            <Link
              href="/"
              className="font-heading inline-flex items-center gap-2 text-3xl font-medium tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm"
            >
              <Image
                src="/favicon.ico"
                alt="Dir Logo"
                width={28}
                height={28}
                className="rounded-sm"
              />
              <span>
                Dir<span className="text-[#F37338]">.</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-[#696969]">
              A carefully curated collection of modern UI libraries, design
              systems, and typography inspiration. Everything you need to build
              beautiful interfaces.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#696969]">
                {section.title}
              </h3>

              <ul className="space-y-3">
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

          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#696969]">
              Legal
            </h3>

            <ul className="space-y-3">
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
          <p className="text-sm text-[#F3F0EE]">
            © {year} UI Directory. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#F3F0EE] hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm flex items-center gap-1.5"
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
