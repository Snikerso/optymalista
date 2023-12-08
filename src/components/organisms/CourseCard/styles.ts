import { styled } from "styled-components";

export const StyledWrapper = styled("header")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
  maxWidth: "250px",
  width: "100%",
  border: "1px solid #000",
  borderRadius: "10px",
}));
