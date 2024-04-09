"use client";

import { PageSection } from "@/components/molecules/PageSection";
import { StyledWrapper } from "./styles";

export default function Mentoring() {
  return (
    <StyledWrapper>
      <PageSection>
        <h2>Dlaczego mentoruje ?</h2>
        <p>
          Przyszłość edukacji wyobrażam sobie tak że w kazdej dziedzinie są
          mentorzy tak jak kiedyś czeladnicy, którzy cię prowadzą i uczą fachu
          wiedzy i podejścia do tematu.
        </p>
      </PageSection>

      <PageSection>Zobacz moje filmy na youtube</PageSection>

      <PageSection>
        <p>Plusy mentoringu:</p>
        <p>Uważam że mentoring jest najlepszą formą nauki. Ponieważ </p>
        <div>Mogę elastycznie dobrać materiał do osoby i </div>
        <div>Osoba mentorowana nie musi pędzić z materiałem</div>
      </PageSection>

      <PageSection>
        <h2>Zapisz się na Mentoring</h2>

        <div>Cena</div>

        <div
          style={{ width: "100%" }}
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
    </StyledWrapper>
  );
}
