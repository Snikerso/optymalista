"use client";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
  menuItems: { label: string; href: string }[];
}

export const NavLinkWithMenu = ({ children, href, menuItems }: Props) => {
  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <PopoverButton className={open ? "underline" : "no-underline"}>
            {children}
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            className="flex flex-col p-4 border border-gray-300 mt-2"
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => {
                  close();
                }}
              >
                {item.label}
              </Link>
            ))}
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
};
