"use client";

import { Courses } from "@/components/organisms/Courses";
import { allCourses } from "@/data/courses";
import { StyledWrapper } from "./styles";

export default function Materials() {
  return (
    <StyledWrapper>
      <h1>Korzystaj z darmowej wiedzy</h1>

      <p>Tworze damowe materiały do nauki programowania,</p>
      <p>
        Wszystkimi tymi materiałami dziele się z wami za darmo z kilku powodów:
      </p>
      {/*  */}
      <p>
        Materiały staram się aktualizować po to żebyś nie musiał się uczyć
        starej często niepraktycznej już wiedzy.
      </p>
      <p></p>
      {/* React od podstaw  */}
      {/* Zrobić formularz kontaktowy */}
      <Courses courses={allCourses} />
    </StyledWrapper>
  );
}
