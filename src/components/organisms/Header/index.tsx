"use client";
import { Logo } from "@/components/atoms/Logo";
import { StyledWrapper, StyledWrapperInner } from "./styles";

export const Header = () => {
  return (
    <StyledWrapper>
      <StyledWrapperInner>
        <Logo />
        <div>
          <div>O MNIE</div>
          <div>MENTORING</div>
        </div>
      </StyledWrapperInner>
    </StyledWrapper>
  );
};
