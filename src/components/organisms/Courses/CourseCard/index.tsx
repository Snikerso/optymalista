import { Course } from "@/data/courses";

interface Props {
  course: Course;
}

export const CourseCard = ({ course }: Props) => {
  const allLessonsLength = course.modules.reduce(
    (acc, module) => acc + module.wordkitoLesson.length,
    0
  );
  return (
    <article className="rounded-lg bg-white p-4 shadow-md">
      <h3 className="text-xl font-bold">{course.name}</h3>
      <div className="text-gray-700">{course.description.slice(0, 60)}...</div>
      <div className="text-gray-700">
        Ilość modułów: {course.modules.length}
      </div>
      <div className="text-gray-700">Ilość lekcji: {allLessonsLength}</div>
    </article>
  );
};
