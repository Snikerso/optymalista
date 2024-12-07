"use client";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
}

export const PageTemplate = ({ title, children, className }: Props) => {
  return (
    <div className={`flex flex-col min-h-screen w-full `}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className={`flex-grow ${className}`}>{children}</div>
    </div>
  );
};
