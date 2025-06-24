"use client";

import { PageSection } from "@/components/molecules/PageSection";
import { PageTemplate } from "@/components/templates/PageTemplate";
import { useParams } from "next/navigation";

export default function FilamentPage() {
  const params = useParams();
  const filamentUrl = params.filamentUrl as string;

  return (
    <PageTemplate title={filamentUrl}>
      <PageSection className="flex flex-col gap-4">
        <h1>Filament</h1>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(filament).map(([key, value]) => (
            <div key={key} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-700">{key}</h3>
              <p className="text-gray-600">{value}</p>
            </div>
          ))}
        </div> */}
      </PageSection>
    </PageTemplate>
  );
}
