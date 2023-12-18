import { styled } from "styled-components";

export const StyledWrapper = styled("section")<{ withBackground?: boolean }>(
  ({ withBackground }) => ({
    padding: "20px 0px",
    borderRadius: "10px",

    ...(withBackground && {
      padding: "20px",
      backgroundColor: "rgba(250, 205, 45, 0.3)",
    }),
  })
);
