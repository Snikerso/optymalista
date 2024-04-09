import { styled } from "styled-components";

export const StyledWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "50px",
}));

export const StyledHeaderSection = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "20px",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 0px 3px",
  backgroundColor: "rgba(250, 205, 45, 0.3)",
}));
