"use client";
import { StyledWrapper } from "./styles";

interface Props {
  children: React.ReactNode;
}
export const PageSection = ({ children }: Props) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
