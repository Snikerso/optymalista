"use client";
import { Logo } from "@/components/atoms/Logo";
import {
  StyledLink,
  StyledWrapper,
  StyledWrapperInner,
  StyledWrapperNavigation,
} from "./styles";

export const Header = () => {
  return (
    <StyledWrapper>
      <StyledWrapperInner>
        <StyledLink href={"/"}>
          <Logo />
        </StyledLink>
        <StyledWrapperNavigation>
          <StyledLink href={"/o-mnie"}>O MNIE</StyledLink>
          <StyledLink href={"/mentoring"}>MENTORING</StyledLink>
          <StyledLink href={"/materialy"}>MATERIAŁY</StyledLink>
        </StyledWrapperNavigation>
      </StyledWrapperInner>
    </StyledWrapper>
  );
};
