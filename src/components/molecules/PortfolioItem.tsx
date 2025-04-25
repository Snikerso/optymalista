import { PortfolioType, Technologies } from "@/app/portfolio/page";
import React from "react";
import { ReactIcon } from "../atoms/icons/technologies/React.icon";

type PortfolioItemProps = {
  title: string;
  description: string;
  types: PortfolioType[];
  technologies: Technologies[];
};

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  types,
  technologies,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {types?.map((type) => (
          <div key={type} className="text-sm bg-gray-200 px-2 py-1 rounded-md">
            {type}
          </div>
        ))}
      </div>
      <div>
        {technologies.map((technology) => (
          <div key={technology}>{getTechnologyIcon(technology)}</div>
        ))}
      </div>
    </div>
  );
};

const getTechnologyIcon = (technology: Technologies) => {
  switch (technology) {
    case Technologies.REACT_NATIVE:
      return <ReactIcon />;
    default:
      return null;
  }
};
