"use client";
import { LanguageSwitcher } from "@/components/atoms/LanguageSwitcher";
import { Logo } from "@/components/atoms/Logo";
import { NavLink } from "@/components/atoms/NavLink";
import { useSiteLanguage } from "@/lib/useSiteLanguage";
import Link from "next/link";

const links = [
  {
    href: "/projekty",
    label: "PROJEKTY",
  },
  {
    href: "/portfolio",
    label: "PORTFOLIO",
  },
  {
    href: "/blog",
    label: "BLOG",
  },
];

export const Header = () => {
  const language = useSiteLanguage();

  return (
    <header className="flex items-center justify-between px-5 py-3 sm:px-12 sm:py-2.5">
      <div className="mx-auto flex w-full max-w-[var(--max-width)] items-center justify-between gap-3">
        <Link href={"/"} className="no-underline">
          <Logo color="black" />
        </Link>
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <nav className="flex gap-2 text-xs sm:gap-5 sm:text-sm">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <LanguageSwitcher language={language} />
        </div>
      </div>
    </header>
  );
};
