"use client";
import { Course } from "@/data/courses";
import { StyledWrapper } from "./styles";

interface Props {
  course: Course;
}

export const CourseCard = ({ course }: Props) => {
  return (
    <StyledWrapper>
      {course.name}
      <div>{course.description.slice(0, 60)}...</div>
      <div>Ilość modułów: {course.modules.length}</div>
    </StyledWrapper>
  );
};
