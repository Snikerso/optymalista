"use client";

import { PageSection } from "@/components/molecules/PageSection";
import { Button } from "antd";
import { StyledWrapper } from "./styles";

export default function Home() {
  return (
    <StyledWrapper>
      <PageSection>
        <h3>Witaj na mojej stronie</h3>
        <p>
          Co tu możesz zrobić: - zapisać się na mentoring - skorzystać z
          darmowych lekcji
        </p>
        <Button type="primary">Umów się na mentoring</Button>
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
