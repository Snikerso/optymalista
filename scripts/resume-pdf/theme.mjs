import fs from "node:fs";

const windowsFonts = {
  regular: "C:/Windows/Fonts/arial.ttf",
  bold: "C:/Windows/Fonts/arialbd.ttf",
};

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
  fonts: fs.existsSync(windowsFonts.regular)
    ? {
        regularName: "Regular",
        boldName: "Bold",
        regularPath: windowsFonts.regular,
        boldPath: windowsFonts.bold,
      }
    : {
        regularName: "Helvetica",
        boldName: "Helvetica-Bold",
      },
};
