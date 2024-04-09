"use client";
import { Lesson, Module } from "@/data/lessons";
import { useState } from "react";
import { Lessons } from "../Lessons";
import { StyledWrapper, StyledWrapperLesson } from "./styles";

interface Props {
  modules: Module[];
}

export const Modules = ({ modules }: Props) => {
  const [currentLesson, setCurrentLesson] = useState<Lesson | undefined>(
    undefined
  );

  return (
    <StyledWrapper>
      {modules.map((module) => (
        <StyledWrapperLesson key={module.name}>
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
        </StyledWrapperLesson>
      ))}
    </StyledWrapper>
  );
};
