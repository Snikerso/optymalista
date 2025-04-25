"use client";
import { NavLink } from "@/components/atoms/NavLink";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-2.5 border-t-[2px]  mx-auto max-w-2xl w-full">
      <div className="flex flex-col gap-5 ">
        <p>Optymalista</p>
      </div>

      <nav className="flex flex-col gap-5">
        <NavLink href="/blog">BLOG</NavLink>
        <NavLink href="/contact">KONTAKT</NavLink>
      </nav>

      <div className="flex flex-col gap-5">
        <NavLink
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <FaLinkedin size={20} />
            LINKEDIN
          </div>
        </NavLink>
        <NavLink
          href="https://www.instagram.com/optymalista_pro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <FaInstagram size={20} />
            INSTAGRAM
          </div>
        </NavLink>
      </div>
    </footer>
  );
};
