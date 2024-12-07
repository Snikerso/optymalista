"use client";
import { Lesson } from "@/data/lessons";

interface Props {
  lessons: Lesson[];
  currentLesson: Lesson | undefined;
  openLesson: (lesson: Lesson) => void;
}

export const Lessons = ({ lessons, currentLesson, openLesson }: Props) => {
  return (
    <div className="p-4">
      {lessons.map((lesson) => (
        <div key={lesson.name} className="mb-4 border-b border-gray-200">
          <div
            className={`p-4 cursor-pointer ${
              currentLesson?.name === lesson.name ? "bg-gray-100" : ""
            }`}
            onClick={() => openLesson(lesson)}
          >
            <h5 className="text-lg font-semibold">{lesson.name}</h5>
            <p className="text-sm text-gray-600">{lesson.description}</p>
          </div>

          {currentLesson?.name === lesson.name && (
            <div className="p-4 bg-gray-50">
              {/* <LessonElement
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
              /> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
