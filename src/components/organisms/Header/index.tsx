"use client";
import { Logo } from "@/components/atoms/Logo";
import { NavLink } from "@/components/atoms/NavLink";
import Link from "next/link";

const links = [
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
  return (
    <header className="flex items-center justify-between p-3 sm:p-2.5">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between gap-4">
        <Link href={"/"} className="no-underline">
          <Logo color="black" />
        </Link>
        <nav className="flex shrink-0 gap-3 text-xs sm:gap-5 sm:text-sm">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};
