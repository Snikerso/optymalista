import { styled } from "styled-components";

export const StyledWrapper = styled("header")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
}));

export const StyledWrapperInner = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
  maxWidth: "800px",
  width: "100%",
}));
