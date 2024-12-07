import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
}
export const NavLink = ({ children, href }: Props) => {
  return (
    <Link className="no-underline" href={href}>
      {children}
    </Link>
  );
};
