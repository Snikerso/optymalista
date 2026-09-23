export const renderHeader = (ctx, resume) => {
  const { drawBox, drawText, theme } = ctx;
  const topY = theme.page.margin;
  const panelHeight = 84;
  const leftWidth = 315;
  const rightWidth = 178;
  const rightX = theme.page.width - theme.page.margin - rightWidth;

  drawBox({
    x: theme.page.margin,
    y: topY - 5,
    width: ctx.contentWidth,
    height: panelHeight,
    color: theme.colors.surface,
    radius: 6,
  });
  drawBox({
    x: theme.page.margin,
    y: topY - 5,
    width: 5,
    height: panelHeight,
    color: theme.colors.accent,
    radius: 3,
  });

  drawText(resume.profile.name, {
    x: theme.page.margin + 16,
    y: topY + 2,
    width: leftWidth,
    size: 26,
    font: "bold",
    color: theme.colors.text,
    lineGap: 0,
  });
  drawText(resume.profile.location, {
    x: rightX,
    y: topY + 5,
    width: rightWidth,
    size: 8.8,
    color: theme.colors.muted,
    align: "right",
    lineGap: 0.5,
  });

  resume.profile.links.slice(0, 2).forEach((link, index) => {
    drawText(link.display ?? link.label, {
      x: rightX,
      y: topY + 21 + index * 14,
      width: rightWidth,
      size: 7.9,
      color: theme.colors.link,
      align: "right",
      underline: true,
      link: link.href,
      lineGap: 1.2,
    });
  });

  drawText(resume.headline, {
    x: theme.page.margin + 16,
    y: topY + 48,
    width: leftWidth,
    size: 11,
    font: "bold",
    color: theme.colors.accentDark,
    lineGap: 0,
  });

  ctx.doc.y = topY + panelHeight + 5;
};

export const renderSection = (ctx, title, renderBody) => {
  ctx.ensureSpace(28);
  ctx.doc.moveDown(0.45);
  const y = ctx.doc.y;
  ctx.drawBox({
    x: ctx.theme.page.margin,
    y: y + 1,
    width: 4,
    height: 13,
    color: ctx.theme.colors.accent,
    radius: 2,
  });
  ctx.drawText(title.toUpperCase(), {
    x: ctx.theme.page.margin + 11,
    y,
    size: 12,
    font: "bold",
    color: ctx.theme.colors.accentDark,
    lineGap: 0,
  });
  ctx.drawRule(ctx.doc.y + 2);
  ctx.doc.moveDown(0.35);
  renderBody();
};

export const renderSkillRows = (ctx, groups) => {
  const labelWidth = 112;
  const valueWidth = ctx.contentWidth - labelWidth - 22;

  groups.forEach((group) => {
    const value = group.skills.join(" / ");
    const textHeight = Math.max(
      13,
      ctx.textHeight(value, { width: valueWidth, size: 8.8, lineGap: 0.7 })
    );
    const rowHeight = textHeight + 8;
    ctx.ensureSpace(rowHeight);

    const y = ctx.doc.y;
    ctx.drawBox({
      x: ctx.theme.page.margin,
      y: y - 2,
      width: ctx.contentWidth,
      height: rowHeight,
      color: ctx.theme.colors.surface,
      radius: 4,
    });
    ctx.drawText(group.title, {
      x: ctx.theme.page.margin + 8,
      y: y + 3,
      width: labelWidth,
      size: 8.8,
      font: "bold",
      color: ctx.theme.colors.accentDark,
      lineGap: 0.7,
    });
    ctx.drawText(value, {
      x: ctx.theme.page.margin + labelWidth + 8,
      y: y + 3,
      width: valueWidth,
      size: 8.8,
      lineGap: 0.7,
    });
    ctx.doc.y = Math.max(ctx.doc.y, y + rowHeight + 2);
  });
};

const roleBlockHeight = (ctx, item) => {
  const rightWidth = 165;
  const rightMetaHeight =
    ctx.textHeight(item.period, { width: rightWidth, size: 8.2, font: "bold" }) +
    (item.location
      ? ctx.textHeight(item.location, { width: rightWidth, size: 7.4 })
      : 0);
  const titleHeight = Math.max(
    ctx.textHeight(item.title, { width: 330, size: 10, font: "bold" }),
    rightMetaHeight
  );
  const subtitleHeight = ctx.textHeight(item.roleLine, {
    width: 330,
    size: 8.3,
  });
  const linkHeight = (item.links ?? []).reduce(
    (sum, link) =>
      sum +
      ctx.textHeight(link.display ?? link.label, {
        width: ctx.contentWidth - 16,
        size: 7.2,
        lineGap: 0,
      }) +
      1,
    0
  );
  const bulletHeight = item.bullets.reduce(
    (sum, bullet) =>
      sum +
      ctx.textHeight(`- ${bullet}`, {
        width: ctx.contentWidth - 16,
        size: 8.25,
        lineGap: 0.6,
      }) +
      2,
    0
  );
  const techHeight = ctx.textHeight(`Tech: ${item.tech.join(" / ")}`, {
    width: ctx.contentWidth - 16,
    size: 7.8,
  });

  return titleHeight + subtitleHeight + linkHeight + bulletHeight + techHeight + 20;
};

export const renderRoleBlock = (ctx, item) => {
  const blockHeight = roleBlockHeight(ctx, item);
  ctx.ensureSpace(blockHeight);

  const y = ctx.doc.y;
  const contentX = ctx.theme.page.margin + 12;
  const availableWidth = ctx.contentWidth - 12;
  const rightWidth = 165;
  const rightX = ctx.theme.page.width - ctx.theme.page.margin - rightWidth;

  ctx.drawBox({
    x: ctx.theme.page.margin,
    y,
    width: 3,
    height: Math.max(20, blockHeight - 8),
    color: ctx.theme.colors.rule,
    radius: 2,
  });
  ctx.drawText(item.title, {
    x: contentX,
    y,
    width: 330,
    size: 10,
    font: "bold",
    color: ctx.theme.colors.text,
    lineGap: 0.5,
  });
  ctx.drawText(item.period, {
    x: rightX,
    y,
    width: rightWidth,
    size: 8.2,
    font: "bold",
    color: ctx.theme.colors.muted,
    align: "right",
    lineGap: 0,
  });
  if (item.location) {
    ctx.drawText(item.location, {
      x: rightX,
      y: y + 10,
      width: rightWidth,
      size: 7.4,
      color: ctx.theme.colors.muted,
      align: "right",
      lineGap: 0,
    });
  }
  ctx.drawText(item.roleLine, {
    x: contentX,
    y: ctx.doc.y + 1,
    width: 330,
    size: 8.3,
    color: ctx.theme.colors.muted,
    lineGap: 0.5,
  });
  item.links?.slice(0, 2).forEach((link, index) => {
    ctx.drawText(link.display ?? link.label, {
      x: contentX,
      width: availableWidth,
      size: 7.2,
      color: ctx.theme.colors.link,
      underline: true,
      link: link.href,
      lineGap: 0,
    });
    if (index < Math.min(item.links.length, 2) - 1) {
      ctx.doc.moveDown(0.04);
    }
  });
  ctx.doc.moveDown(0.25);

  item.bullets.forEach((bullet) => {
    ctx.ensureSpace(16);
    ctx.drawText(`- ${bullet}`, {
      x: contentX,
      width: availableWidth,
      size: 8.25,
      lineGap: 0.6,
    });
    ctx.doc.moveDown(0.05);
  });

  ctx.ensureSpace(13);
  ctx.drawText(`Tech: ${item.tech.join(" / ")}`, {
    x: contentX,
    width: availableWidth,
    size: 7.8,
    color: ctx.theme.colors.muted,
    lineGap: 0.2,
  });
  ctx.doc.moveDown(0.45);
};
