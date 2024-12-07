import Link from "next/link";
import { Icon } from "./Icon";

interface Props {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
}
export const InlineLink = ({ children, href, isExternal }: Props) => {
  return (
    <Link
      className="no-underline inline-flex items-center hover:text-accent"
      href={href}
      target={isExternal ? "_blank" : "_self"}
    >
      {children}
      <span className="ml-1">
        {isExternal && <Icon size={20} iconName="openTab" />}
      </span>
    </Link>
  );
};
