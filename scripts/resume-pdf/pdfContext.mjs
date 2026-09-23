import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";
import { theme } from "./theme.mjs";

export const createPdfContext = (outputPath, metadata) => {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const doc = new PDFDocument({
    size: theme.page.size,
    margins: {
      top: theme.page.margin,
      right: theme.page.margin,
      bottom: theme.page.margin,
      left: theme.page.margin,
    },
    info: metadata,
  });
  const stream = fs.createWriteStream(outputPath);

  if (theme.fonts.regularPath && theme.fonts.boldPath) {
    doc.registerFont(theme.fonts.regularName, theme.fonts.regularPath);
    doc.registerFont(theme.fonts.boldName, theme.fonts.boldPath);
  }

  doc.pipe(stream);

  const maxY = theme.page.height - theme.page.margin;
  const contentWidth = theme.page.width - theme.page.margin * 2;

  const setFont = ({
    font = "regular",
    size = 9,
    color = theme.colors.text,
  }) => {
    const fontName =
      font === "bold" ? theme.fonts.boldName : theme.fonts.regularName;
    doc.font(fontName).fontSize(size).fillColor(color);
  };

  const textHeight = (value, options = {}) => {
    setFont(options);

    return doc.heightOfString(value, {
      width: options.width ?? contentWidth,
      lineGap: options.lineGap ?? 1,
    });
  };

  const ensureSpace = (height) => {
    if (doc.y + height > maxY) {
      doc.addPage();
      doc.y = theme.page.margin;
    }
  };

  const drawText = (value, options = {}) => {
    const {
      x = theme.page.margin,
      y = doc.y,
      width = contentWidth,
      lineGap = 1,
      link,
      underline,
      align,
    } = options;
    setFont(options);
    doc.text(value, x, y, { width, lineGap, link, underline, align });
  };

  const drawRule = (y = doc.y) => {
    doc
      .moveTo(theme.page.margin, y)
      .lineTo(theme.page.width - theme.page.margin, y)
      .lineWidth(1)
      .strokeColor(theme.colors.rule)
      .stroke();
  };

  const drawBox = ({ x, y, width, height, color, radius = 0 }) => {
    doc.save();
    doc.fillColor(color);

    if (radius > 0) {
      doc.roundedRect(x, y, width, height, radius).fill();
    } else {
      doc.rect(x, y, width, height).fill();
    }

    doc.restore();
  };

  const finish = () =>
    new Promise((resolve, reject) => {
      stream.on("finish", resolve);
      stream.on("error", reject);
      doc.end();
    });

  return {
    doc,
    theme,
    contentWidth,
    ensureSpace,
    textHeight,
    drawText,
    drawRule,
    drawBox,
    finish,
  };
};
