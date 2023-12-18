"use client";

import { PageSection } from "@/components/molecules/PageSection";
import { StyledWrapper } from "./styles";

export default function Mentoring() {
  return (
    <StyledWrapper>
      <PageSection>
        <h2>Dlaczego mentoruje ?</h2>
        <p>Uważam że mentoring jest najlepszą formą nauki.</p>
      </PageSection>

      <PageSection>Zobacz moje filmy na youtube</PageSection>
      <p>Plusy mentoringu:</p>
      <p>Wszystkimi tymi materiałami dziele się z wami za darmo. </p>
      <p>
        Są one aktualizowane na bierząco im wiecej ja ucze bądź sam zdobywam
        więcej to taką lekcje ulepszam.
      </p>
      <div>Zapisz się na pierwsze spotkanie, konsultacyjne</div>
      <div>Zapisz się na mentoring</div>

      <p>Minusy mentoringu:</p>

      <PageSection>
        <h2>Zapisz się na Mentoring</h2>

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
