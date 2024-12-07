"use client";
import { NavLink } from "@/components/atoms/NavLink";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-2.5 border-t-[2px]">
      <div className="flex justify-between items-center mx-auto max-w-2xl w-full">
        <p>Optymalista</p>
        <nav className="flex flex-col gap-5">
          <NavLink href="/blog">BLOG</NavLink>
          <NavLink href="/contact">KONTAKT</NavLink>
        </nav>
      </div>
    </footer>
  );
};
