"use client";
import { StyledIcon, StyledWrapper } from "./styles";

interface Props {
  icon: JSX.Element;
  link: string;
  text: string;
}

export const LessonElement = ({ icon, link, text }: Props) => {
  return (
    <StyledWrapper href={link} target="_blank">
      <StyledIcon>{icon}</StyledIcon>
      <p>{text}</p>
    </StyledWrapper>
  );
};
