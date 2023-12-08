"use client";

import { Courses } from "@/components/organisms/Courses";
import { allCourses } from "@/data/courses";
import { StyledWrapper } from "./styles";

export default function Materials() {
  return (
    <StyledWrapper>
      Cześć i czołem !
      <p>
        Podczas mentoringu stworzyłem wiele materiałów które pomogły mi w
        przeprowadzaniu zajęć.
      </p>
      <p>Wszystkimi tymi materiałami dziele się z wami za darmo. </p>
      <p>
        Są one aktualizowane na bierząco im wiecej ja ucze bądź sam zdobywam
        więcej to taką lekcje ulepszam.
      </p>
      <p></p>
      {/* React od podstaw  */}
      {/* Zrobić formularz kontaktowy */}
      <Courses courses={allCourses} />
    </StyledWrapper>
  );
}
