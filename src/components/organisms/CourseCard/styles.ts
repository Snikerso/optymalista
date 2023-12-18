import { styled } from "styled-components";

export const StyledWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px",
  gap: "10px",
  maxWidth: "250px",
  width: "100%",
  border: "1px solid #000",
  borderRadius: "10px",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "rgba(0, 0, 0, 0.19) 0px 0px 3px",
    backgroundColor: "rgba(250, 205, 45, 0.3)",
  },
}));
