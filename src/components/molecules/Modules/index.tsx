"use client";
import { Lesson, Module } from "@/data/lessons";
import { useState } from "react";
import { Lessons } from "../Lessons";

interface Props {
  modules: Module[];
}

export const Modules = ({ modules }: Props) => {
  const [currentLesson, setCurrentLesson] = useState<Lesson | undefined>(
    undefined
  );

  return (
    <div className="flex flex-col justify-between items-center gap-2.5">
      {modules.map((module) => (
        <div key={module.name} className="flex flex-col w-full">
          <h3>{module.name}</h3>
          <Lessons
            lessons={module.wordkitoLesson}
            currentLesson={currentLesson}
            openLesson={(lesson) => {
              lesson === currentLesson
                ? setCurrentLesson(undefined)
                : setCurrentLesson(lesson);
            }}
          />
        </div>
      ))}
    </div>
  );
};
