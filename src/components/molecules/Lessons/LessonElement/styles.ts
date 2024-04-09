import { theme } from "@/theme/theme";
import { styled } from "styled-components";

export const StyledWrapper = styled("a")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  padding: "4px",
  color: "black",

  ["&:hover"]: {
    color: theme.accentColor,
  },
}));

export const StyledIcon = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "currentColor",
  border: "2px solid currentColor",
  padding: "6px",
  borderRadius: "50%",
}));
