"use client";

import { PageSection } from "@/components/molecules/PageSection";

export default function Mentoring() {
  return (
    <div className="flex flex-col space-y-8">
      <PageSection>
        <h2 className="text-2xl font-bold">Dlaczego mentoruje ?</h2>
        <p className="mt-2">
          Przyszłość edukacji wyobrażam sobie tak że w kazdej dziedzinie są
          mentorzy tak jak kiedyś czeladnicy, którzy cię prowadzą i uczą fachu
          wiedzy i podejścia do tematu.
        </p>
      </PageSection>

      <PageSection>
        <h2 className="text-xl font-semibold">Zobacz moje filmy na youtube</h2>
      </PageSection>

      <PageSection>
        <p className="text-lg font-medium">Plusy mentoringu:</p>
        <p className="mt-2">
          Uważam że mentoring jest najlepszą formą nauki. Ponieważ
        </p>
        <div className="mt-2">Mogę elastycznie dobrać materiał do osoby i</div>
        <div className="mt-1">
          Osoba mentorowana nie musi pędzić z materiałem
        </div>
      </PageSection>

      <PageSection>
        <h2 className="text-2xl font-bold">Zapisz się na Mentoring</h2>

        <div className="mt-2 text-lg font-medium">Cena</div>

        <div
          className="w-full"
          data-type="u"
          data-owner="optymalista"
          data-slug="mentoring-javascript"
          data-primary="#FACD2D"
          data-secondary="#F7B897"
          data-avatar="dsa"
          data-lang="pl"
          data-ampm="false"
          id="zencal-embed"
        ></div>
      </PageSection>
    </div>
  );
}
