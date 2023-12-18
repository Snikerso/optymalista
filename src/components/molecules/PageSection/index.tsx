"use client";
import { StyledWrapper } from "./styles";

interface Props {
  children: React.ReactNode;
  withBackground?: boolean;
}
export const PageSection = ({ children, withBackground }: Props) => {
  return (
    <StyledWrapper withBackground={withBackground}>{children}</StyledWrapper>
  );
};
