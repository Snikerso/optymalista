"use client";

import { Button } from "@/components/atoms/Button";
import { PageTemplate } from "@/components/templates/PageTemplate";
import Link from "next/link";

export default function NotFound() {
  const availablePages = [
    { href: "/", label: "Strona główna" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/materialy", label: "Materiały" },
    { href: "/filaments", label: "Filamenty" },
    { href: "/cognitive-training", label: "Trening kognitywny" },
  ];

  return (
    <PageTemplate title="Ups! Nie ma takiej podstrony" className="gap-8">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-gray-500">
            Sprawdź czy adres URL jest poprawny lub przejdź do jednej z
            dostępnych stron.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Dostępne strony:</h3>
          <div className="flex flex-col gap-3">
            {availablePages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="text-lg underline hover:text-blue-500"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>

        <div className=" mt-8">
          <Link href="/">
            <Button>Wróć do strony głównej</Button>
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
}
