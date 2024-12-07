"use client";

import { Modules } from "@/components/molecules/Modules";
import { allCourses } from "@/data/courses";

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
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">{cource?.name}</h1>
        <p className="text-gray-700">{cource?.description}</p>
        <p className="text-gray-700">Moduły: {cource?.modules?.length}</p>
        <p className="text-gray-700">Lekcje: {allLessonsLength}</p>
      </div>
      <Modules modules={cource?.modules || []} />
    </div>
  );
}
