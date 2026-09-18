"use client";
import { NavLink } from "@/components/atoms/NavLink";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mx-auto mt-16 flex w-full max-w-2xl flex-col gap-6 border-t-2 border-gray-200 px-2.5 py-8 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-lg font-bold">Paweł Drojecki</p>
        <p className="text-sm text-gray-500">Portfolio Pawła Drojeckiego</p>
      </div>

      <nav className="flex flex-wrap gap-4 text-sm font-bold">
        <NavLink href="/blog">BLOG</NavLink>
        <NavLink href="/contact">KONTAKT</NavLink>
      </nav>

      <div className="flex flex-wrap gap-4 text-sm font-bold">
        <NavLink
          href="https://www.linkedin.com/in/pawel-drojecki/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center gap-2">
            <FaLinkedin size={18} />
            LINKEDIN
          </span>
        </NavLink>
      </div>
    </footer>
  );
};
