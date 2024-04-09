import { styled } from "styled-components";

export const StyledWrapper = styled("header")(() => ({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "20px",
  width: "100%",
}));
