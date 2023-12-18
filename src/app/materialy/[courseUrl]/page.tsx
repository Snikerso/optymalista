"use client";

import { Modules } from "@/components/organisms/Modules";
import { allCourses } from "@/data/courses";
import { StyledHeaderSection, StyledWrapper } from "./styles";

interface Props {
  params: {
    courseUrl?: string;
  };
}
export default function MaterialDetails({ params }: Props) {
  const cource = allCourses.find((course) => course.url === params.courseUrl);
  const allLessonsLength = cource?.modules?.reduce(
    (acc, module) => acc + module.wordkitoLesson.length,
    0
  );
  return (
    <StyledWrapper>
      <StyledHeaderSection>
        <h1>{cource?.name}</h1>
        <p>{cource?.description}</p>
        <p>Moduły: {cource?.modules?.length}</p>
        <p>Lekcje: {allLessonsLength}</p>
      </StyledHeaderSection>
      <Modules modules={cource?.modules || []} />
    </StyledWrapper>
  );
}
