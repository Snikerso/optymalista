"use client";
import { Course } from "@/data/courses";
import { useRouter } from "next/navigation";

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
    <div
      className="p-4 bg-white rounded-lg shadow-md cursor-pointer"
      onClick={() => {
        router.push(`/materialy/${course.url}`);
      }}
    >
      <h3 className="text-xl font-bold">{course.name}</h3>
      <div className="text-gray-700">{course.description.slice(0, 60)}...</div>
      <div className="text-gray-700">
        Ilość modułów: {course.modules.length}
      </div>
      <div className="text-gray-700">Ilość lekcji: {allLessonsLength}</div>
    </div>
  );
};
