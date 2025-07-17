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
    types: [PortfolioType.MOBILE_APP],
    startDate: new Date("2024-01-01"),
    endDate: new Date(),
    technologies: [
      Technologies.REACT_NATIVE,
      Technologies.EXPO,
      Technologies.TYPESCRIPT,
      Technologies.TAILWIND_CSS,
    ],
  },
  {
    title: "Royal Mint",
    description: "Sklep intertetowy z złotem srebrem platyną",
    types: [PortfolioType.WEB_APP, PortfolioType.WORK_EXPERIENCE],
    startDate: new Date("2024-07-01"),
    endDate: new Date(),
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.TAILWIND_CSS,
    ],
  },
  {
    title: "WillCodeAcademy",
    description: "Strona internetowa z kursami programowania",
    types: [PortfolioType.WEB_APP, PortfolioType.WORK_EXPERIENCE],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-01"),
    technologies: [
      Technologies.REACT,
      Technologies.TYPESCRIPT,
      Technologies.TAILWIND_CSS,
    ],
  },
  {
    title: "Swarmcheck",
    description: "Aplikacja do argumentacyjnej dyskusji",
    types: [PortfolioType.WEB_APP, PortfolioType.WORK_EXPERIENCE],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-01-01"),
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
        return item.types.includes(
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
              types={item.types}
              description={item.description}
              technologies={item.technologies}
              startDate={item.startDate}
              endDate={item.endDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
