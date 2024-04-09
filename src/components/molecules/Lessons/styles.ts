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

export const StyledWrapperLessonTop = styled("button")<{ isActive: boolean }>(
  ({ isActive }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    textAlign: "left",
    border: "1px solid black",
    borderRadius: "10px",
    padding: "10px",
    width: "100%",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "lightgray",
      cursor: "pointer",
    },
    ...(isActive && {
      boxShadow: "rgba(0, 0, 0, 0.19) 0px 0px 3px",
      backgroundColor: "rgba(250, 205, 45, 0.3)",
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.19) 0px 0px 3px",
        backgroundColor: "rgba(250, 205, 45, 0.3)",
      },
    }),
  })
);

export const StyledWrapperLessonQuiz = styled("div")(() => ({
  padding: "10px",
}));
