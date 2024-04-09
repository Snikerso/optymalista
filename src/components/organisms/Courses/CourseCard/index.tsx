"use client";
import { Course } from "@/data/courses";
import { useRouter } from "next/navigation";
import { StyledWrapper } from "./styles";

interface Props {
  course: Course;
}

export const CourseCard = ({ course }: Props) => {
  const router = useRouter();
  const allLessonsLength = course.modules.reduce(
    (acc, module) => acc + module.wordkitoLesson.length,
    0
  );
  return (
    <StyledWrapper
      onClick={() => {
        router.push(`/materialy/${course.url}`);
      }}
    >
      <h3>{course.name}</h3>
      <div>{course.description.slice(0, 60)}...</div>
      <div>Ilość modułów: {course.modules.length}</div>
      <div>Ilość lekcji: {allLessonsLength}</div>
    </StyledWrapper>
  );
};
