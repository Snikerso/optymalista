"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  href: string;
  rel?: string;
  target?: string;
}
export const NavLink = ({ children, href, target, rel }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isActiveClass = isActive ? "underline" : "no-underline ";

  return (
    <Link target={target} rel={rel} className={`${isActiveClass}`} href={href}>
      {children}
    </Link>
  );
};
