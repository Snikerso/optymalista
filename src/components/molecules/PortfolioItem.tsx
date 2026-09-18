import { PortfolioType, Technologies } from "@/types";
import React from "react";
import { Icon } from "../atoms/Icon";

export type PortfolioItemProps = {
  title: string;
  role?: string;
  companyLink?: string;
  status?: string;
  description: React.ReactNode;
  types: PortfolioType[];
  technologies: Technologies[];
  startDate: Date;
  endDate?: Date;
  link?: string;
  highlights?: string[];
};

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  role,
  companyLink,
  status,
  description,
  types,
  technologies,
  startDate,
  endDate,
  link,
  highlights,
}) => {
  return (
    <article className="group flex flex-col gap-4 rounded-md border-2 border-black bg-white p-4 transition-colors hover:bg-gray-50 sm:gap-5 sm:p-5">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-bold leading-tight sm:text-2xl">
              {title}
            </h2>
            {status && (
              <span className="rounded-md bg-accent px-2 py-1 text-xs font-bold uppercase text-black">
                {status}
              </span>
            )}
          </div>
          <p className="w-fit rounded-md bg-gray-100 px-2 py-1 text-xs font-bold text-gray-700 sm:text-sm md:shrink-0">
            {formatDateRange(startDate, endDate)}
          </p>
        </div>
        {role &&
          (companyLink ? (
            <a
              href={companyLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-1 text-sm font-bold text-gray-600 hover:text-accent"
            >
              <span>{role}</span>
              <Icon iconName="globe" size={14} />
            </a>
          ) : (
            <p className="text-sm font-bold text-gray-600">{role}</p>
          ))}
      </div>
      <p className="text-sm leading-6 text-gray-800">{description}</p>
      {highlights && highlights.length > 0 && (
        <ul className="flex flex-col gap-2 text-sm leading-6 text-gray-700">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-col gap-3 border-t border-gray-200 pt-4">
        <div className="flex flex-wrap gap-2">
          {types?.map((type) => (
            <span
              key={type}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs font-bold uppercase text-gray-700"
            >
              {type}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="inline-flex items-center gap-1.5 rounded-md border border-gray-300 px-2 py-1 text-xs font-medium text-gray-800"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <span className="h-px w-full bg-gray-200 sm:flex-1" />
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-1 text-sm font-bold hover:text-accent"
          >
            <span>Zobacz stronkę</span>
            <Icon iconName="globe" size={16} />
          </a>
        )}
      </div>
    </article>
  );
};

const formatDateRange = (startDate: Date, endDate?: Date) => {
  const formatter = new Intl.DateTimeFormat("pl-PL", {
    month: "short",
    year: "numeric",
  });
  const currentEndDate = endDate ?? new Date();
  const months = Math.max(
    1,
    Math.ceil(
      (currentEndDate.getTime() - startDate.getTime()) /
        (1000 * 60 * 60 * 24 * 30)
    )
  );
  const endLabel = endDate ? formatter.format(endDate) : "obecnie";

  return `${formatter.format(startDate)} - ${endLabel} (${formatDuration(
    months
  )})`;
};

const formatDuration = (months: number) => {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${months} mies.`;
  }

  if (remainingMonths === 0) {
    return `${years} ${getYearLabel(years)}`;
  }

  return `${years} ${getYearLabel(years)} ${remainingMonths} mies.`;
};

const getYearLabel = (years: number) => {
  if (years === 1) {
    return "rok";
  }

  if (years >= 2 && years <= 4) {
    return "lata";
  }

  return "lat";
};
