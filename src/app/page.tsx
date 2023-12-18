"use client";

import { PageSection } from "@/components/molecules/PageSection";

import { StyledWrapper } from "./styles";

export default function Home() {
  return (
    <StyledWrapper>
      <PageSection withBackground>
        <h1>Czemu jesteś tu gdzie jesteś ?</h1>
        <p>Możesz odpalić tą stronę bo stworzyłem ją z kilku powodów:</p>
        <ul>
          <li>Chce rozsiewać wiedze z programowania</li>
          <li>
            Chce pokazać jak wykorzystując programowanie można uczyć się innych
            dziedzić takich jak fizyka, matematyka, biologia.
          </li>
          <li>Pokazać swoją działalność i oferować mentoring</li>
          <li>
            Chce dzielić się swoimi przemyśleniami. Nie tylko programistycznymi,
            a również z zakresu filozofii i kognitywistyki
          </li>
        </ul>
      </PageSection>

      <PageSection>
        <h3>React od podstaw - Darmowe interaktywne lekcje </h3>
        <p>
          Skorzystaj z moich materiałów do nauki na mojej platformie wordkito
        </p>

        {/* <Lessons lessons={}={reactModules} /> */}
      </PageSection>
    </StyledWrapper>
  );
}
