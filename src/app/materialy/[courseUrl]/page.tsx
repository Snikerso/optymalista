"use client";

import { Modules } from "@/components/organisms/Modules";
import { allCourses } from "@/data/courses";
import { StyledWrapper } from "./styles";

interface Props {
  params: {
    courseUrl?: string;
  };
}
export default function MaterialDetails({ params }: Props) {
  const cource = allCourses.find((course) => course.url === params.courseUrl);

  return (
    <StyledWrapper>
      Ilość modułów: {cource?.modules?.length}
      {/* Ilość modułów: {cource?.modules.length} */}
      Czego się nauczysz:
      {/* React od podstaw  */}
      {/* Zrobić formularz kontaktowy */}
      Lekcje:
      <Modules modules={cource?.modules || []} />
    </StyledWrapper>
  );
}
