"use client";
import { Logo } from "@/components/atoms/Logo";
import { NavLink } from "@/components/atoms/NavLink";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-2.5">
      <div className="flex justify-between items-center mx-auto max-w-2xl w-full">
        <Link href={"/"} className="no-underline">
          <Logo color="black" />
        </Link>
        <nav className="flex gap-5">
          <NavLink href={"/blog"}>BLOG</NavLink>
          <NavLink href={"/portfolio"}>PORTFOLIO</NavLink>
          <NavLink href={"/contact"}>KONTAKT</NavLink>
        </nav>
      </div>
    </header>
  );
};
