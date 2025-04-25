"use client";

import { Select } from "@/components/atoms/Select";
import { PortfolioItem } from "@/components/molecules/PortfolioItem";
import { PortfolioType, Technologies } from "@/types";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

const portfolioItems: PortfolioItem[] = [
  {
    title: "CleanStrategy",
    description: "Apka mobilna rozwiazujaca kłotnie o sprzątanie.",
    type: [PortfolioType.MOBILE_APP],
    technologies: [
      Technologies.REACT_NATIVE,
      Technologies.EXPO,
      Technologies.TYPESCRIPT,
      Technologies.TAILWIND_CSS,
    ],
  },
  {
    title: "Royal Mint",
    description: "Strona internetowa Royal Mint",
    type: [PortfolioType.WEB_APP, PortfolioType.WORK_EXPERIENCE],
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.TAILWIND_CSS,
    ],
  },
  {
    title: "WillCodeAcademy",
    description: "Strona internetowa Royal Mint",
    type: [PortfolioType.WEB_APP, PortfolioType.WORK_EXPERIENCE],
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.TAILWIND_CSS,
    ],
  },
  {
    title: "Swarmcheck",
    description: "Strona internetowa Royal Mint",
    type: [PortfolioType.WEB_APP, PortfolioType.WORK_EXPERIENCE],
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.TAILWIND_CSS,
    ],
  },
];

export default function PortfolioPage() {
  const { control, watch } = useForm({
    defaultValues: {
      portfolioType: "",
    },
  });

  const filteredPortfolioItems = useMemo(
    () =>
      portfolioItems.filter((item) => {
        if (watch("portfolioType") === "") {
          return true;
        }
        return item.type.includes(
          watch("portfolioType") as unknown as PortfolioType
        );
      }),
    [watch("portfolioType")]
  );

  const selectOptions = [
    {
      value: "",
      label: "Wszystkie",
    },
    ...Object.values(PortfolioType).map((item) => ({
      value: item,
      label: item,
    })),
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <p className="text-md">
            Zobacz jakie projekty realizowałem i jakie technologie użyłem.
          </p>
        </div>
        <Select
          id="portfolio-type"
          name="portfolioType"
          defaultValue={undefined}
          options={selectOptions}
          control={control}
        />
        <div className="flex flex-col gap-4">
          {filteredPortfolioItems.map((item) => (
            <PortfolioItem
              key={item.title}
              title={item.title}
              types={item.type}
              description={item.description}
              technologies={item.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
