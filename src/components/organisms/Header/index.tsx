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
    href: "/3d-prints",
    label: "3D PRINTS",
  },
];

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-2.5">
      <div className="flex justify-between items-center mx-auto max-w-2xl w-full">
        <Link href={"/"} className="no-underline">
          <Logo color="black" />
        </Link>
        <nav className="flex gap-5">
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
