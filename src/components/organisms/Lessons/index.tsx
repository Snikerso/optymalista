"use client";
import { Lesson } from "@/data/lessons";
import { useState } from "react";
import { WidgetTest } from "wordkito-widgets";
import {
  StyledWrapper,
  StyledWrapperLesson,
  StyledWrapperLessonQuiz,
  StyledWrapperLessonTop,
} from "./styles";

interface Props {
  lessons: Lesson[];
}

export const Lessons = ({ lessons }: Props) => {
  const [currentLesson, setCurrentLesson] = useState<Lesson | undefined>(
    lessons[0]
  );
  return (
    <StyledWrapper>
      {lessons.map((lesson) => (
        <StyledWrapperLesson key={lesson.name}>
          <StyledWrapperLessonTop
            onClick={() =>
              setCurrentLesson((prev) =>
                prev?.name === lesson.name ? undefined : lesson
              )
            }
          >
            {lesson.name}
          </StyledWrapperLessonTop>

          {currentLesson?.name === lesson.name && (
            <StyledWrapperLessonQuiz>
              <WidgetTest
                deckId={lesson.wordkitoLesson}
                onFinished={({ result }) => console.log("finished", result)}
                iframeStyle={{
                  height: "400px",
                  width: "100%",
                  backgroundColor: "grey",
                  borderRadius: "10px",
                  padding: "20px",
                }}
                appearance={{
                  backgroundColor: "grey",

                  accentColor: "#FACD2D",
                }}
              />
            </StyledWrapperLessonQuiz>
          )}
        </StyledWrapperLesson>
      ))}
    </StyledWrapper>
  );
};
