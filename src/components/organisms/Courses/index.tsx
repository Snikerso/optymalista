"use client";
import { Course } from "@/data/courses";
import { CourseCard } from "./CourseCard";

interface Props {
  courses: Course[];
}

export const Courses = ({ courses }: Props) => {
  return (
    <>
      {courses.map((course) => (
        <CourseCard key={course.name} course={course} />
      ))}
    </>
  );
};
