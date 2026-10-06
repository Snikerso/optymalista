import fs from "node:fs";

const windowsFonts = {
  regular: "C:/Windows/Fonts/arial.ttf",
  bold: "C:/Windows/Fonts/arialbd.ttf",
};
const macFonts = {
  regular: "/System/Library/Fonts/Supplemental/Arial.ttf",
  bold: "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
};
const availableFonts = [windowsFonts, macFonts].find(
  (fonts) => fs.existsSync(fonts.regular) && fs.existsSync(fonts.bold)
);

export const theme = {
  page: {
    size: "A4",
    width: 595.28,
    height: 841.89,
    margin: 36,
  },
  colors: {
    text: "#18202b",
    muted: "#667085",
    rule: "#d0d5dd",
    link: "#175cd3",
    accent: "#2563eb",
    accentDark: "#1e3a8a",
    surface: "#f8fafc",
    chip: "#eef4ff",
    chipText: "#1d4ed8",
  },
  fonts: availableFonts
    ? {
        regularName: "Regular",
        boldName: "Bold",
        regularPath: availableFonts.regular,
        boldPath: availableFonts.bold,
      }
    : {
        regularName: "Helvetica",
        boldName: "Helvetica-Bold",
      },
};
