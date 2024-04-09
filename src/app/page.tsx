"use client";

import { PageSection } from "@/components/molecules/PageSection";

import { Button } from "@/components/atoms/Button";
import { StyledWrapper } from "./styles";

export default function Home() {
  return (
    <StyledWrapper>
      <PageSection withBackground>
        <h1>Optymalny mentoring, czyli jaki ?</h1>
        <ul>
          <li>Chce rozsiewać wiedze z programowania</li>
          <li>
            Chce pokazać jak wykorzystując programowanie można uczyć się innych
            dziedzić takich jak fizyka, matematyka, biologia.
          </li>
          <li>Pokazać swoją działalność i oferować mentoring</li>
        </ul>

        <Button>Zapisz się</Button>
      </PageSection>

      <PageSection>Mentoring</PageSection>

      <PageSection>
        <h2>Materiały do nauki</h2>
        <h3>React od podstaw - Darmowe interaktywne lekcje </h3>
        <p>
          Skorzystaj z moich materiałów do nauki na mojej platformie wordkito
        </p>

        {/* <Lessons lessons={}={reactModules} /> */}
      </PageSection>
    </StyledWrapper>
  );
}
