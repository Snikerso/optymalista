import { styled } from "styled-components";

export const StyledWrapper = styled("header")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
}));

export const StyledWrapperLesson = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

export const StyledWrapperLessonTop = styled("button")(() => ({
  display: "flex",
  flexDirection: "column",
  border: "1px solid black",
  borderRadius: "10px",
  padding: "10px",
  width: "100%",
  backgroundColor: "transparent",
  ":hover": {
    backgroundColor: "lightgray",
    cursor: "pointer",
  },
}));

export const StyledWrapperLessonQuiz = styled("div")(() => ({
  padding: "10px",
}));
