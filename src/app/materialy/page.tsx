"use client";

import { Courses } from "@/components/organisms/Courses";
import { allCourses } from "@/data/courses";

export default function Materials() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-bold mb-4">Korzystaj z darmowej wiedzy</h1>

      <p className="mb-2">Tworze damowe materiały do nauki programowania,</p>

      <p className="mb-2"></p>
      <Courses courses={allCourses} />
    </div>
  );
}
