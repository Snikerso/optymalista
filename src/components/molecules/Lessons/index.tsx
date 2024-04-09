"use client";
import { ExerciseIcon } from "@/components/atoms/icons/Exercise.icon";
import { QuizIcon } from "@/components/atoms/icons/Quiz.icon";
import { VideoLessonIcon } from "@/components/atoms/icons/VideoLesson.icon";
import { Lesson } from "@/data/lessons";
import { LessonElement } from "./LessonElement";
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
            <h5>{lesson.name}</h5>
            <p>{lesson.description}</p>
          </StyledWrapperLessonTop>

          {currentLesson?.name === lesson.name && (
            <StyledWrapperLessonQuiz>
              <LessonElement
                icon={<VideoLessonIcon />}
                link={`https://app.wordkito.com/decks/${lesson.wordkitoLesson}`}
                text="Wideo lekcja"
              />
              <LessonElement
                icon={<QuizIcon />}
                link={`https://app.wordkito.com/decks/${lesson.wordkitoLesson}`}
                text="Quiz"
              />

              <LessonElement
                icon={<ExerciseIcon />}
                link={`https://app.wordkito.com/decks/${lesson.wordkitoLesson}`}
                text="Ćwiczenie 1"
              />

              {/* <WidgetTest
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
              /> */}
            </StyledWrapperLessonQuiz>
          )}
        </StyledWrapperLesson>
      ))}
    </StyledWrapper>
  );
};
