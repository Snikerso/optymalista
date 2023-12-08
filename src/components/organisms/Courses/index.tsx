"use client";
import { Course } from "@/data/courses";
import { CourseCard } from "../CourseCard";
import { StyledWrapper } from "./styles";

interface Props {
  courses: Course[];
}

export const Courses = ({ courses }: Props) => {
  return (
    <StyledWrapper>
      {courses.map((course) => (
        <CourseCard key={course.name} course={course} />
      ))}
    </StyledWrapper>
  );
};
