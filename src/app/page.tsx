"use client";

import { Lessons } from "@/components/organisms/Lessons";
import { reactLessons } from "@/data/lessons";
import { StyledWrapper } from "./styles";

export default function Home() {
  return (
    <StyledWrapper>
      <div>
        <h3>Witaj na mojej stronie</h3>
        Co tu możesz zrobić: - zapisać się na mentoring - skorzystać z darmowych
        lekcji
        <button>Zapisz się na mentoring</button>
      </div>

      <div>
        <h3>React od podstaw - Darmowe interaktywne lekcje </h3>
        <p>
          Skorzystaj z moich materiałów do nauki na mojej platformie wordkito
        </p>

        <Lessons lessons={reactLessons} />
      </div>
    </StyledWrapper>
  );
}
