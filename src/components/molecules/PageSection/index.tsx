"use client";

interface Props {
  children: React.ReactNode;
  isBorder?: boolean;
  isPadding?: boolean;
  className?: string;
}
export const PageSection = ({
  children,
  isBorder,
  isPadding,
  className,
}: Props) => {
  const padding = isPadding ? "p-5" : "";
  const border = isBorder ? "border-2 border-white" : "";

  return (
    <section className={`rounded-lg ${border} ${padding} ${className}`}>
      {children}
    </section>
  );
};
