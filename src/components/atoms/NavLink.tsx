"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  href: string;
}
export const NavLink = ({ children, href }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isActiveClass = isActive ? "underline" : "no-underline ";

  return (
    <Link className={`${isActiveClass}`} href={href}>
      {children}
    </Link>
  );
};
