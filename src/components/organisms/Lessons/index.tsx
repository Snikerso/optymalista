"use client";
import { Lesson } from "@/data/lessons";
import { WidgetTest } from "wordkito-widgets";
import {
  StyledWrapper,
  StyledWrapperLesson,
  StyledWrapperLessonQuiz,
  StyledWrapperLessonTop,
} from "./styles";

interface Props {
  lessons: Lesson[];
  currentLesson: Lesson | undefined;
  openLesson: (lesson: Lesson) => void;
}

export const Lessons = ({ lessons, currentLesson, openLesson }: Props) => {
  return (
    <StyledWrapper>
      {lessons.map((lesson) => (
        <StyledWrapperLesson key={lesson.name}>
          <StyledWrapperLessonTop
            isActive={currentLesson?.name === lesson.name}
            onClick={() => openLesson(lesson)}
          >
            {lesson.name}
            {lesson.description}
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
                  backgroundContrastColor: "#FACD2D",
                  accentColor: "#FACD2D",
                  themeCodeMode: "dark",
                }}
              />
            </StyledWrapperLessonQuiz>
          )}
        </StyledWrapperLesson>
      ))}
    </StyledWrapper>
  );
};
