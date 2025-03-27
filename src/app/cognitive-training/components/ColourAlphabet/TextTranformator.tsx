"use client";

import { LetterIcon } from "./LetterIcon";
import { lettersMap } from "./letters";

export const TextTransformator = ({
  text,
  choosedLetters,
  handleChooseLetter,
}: {
  text: string;
  choosedLetters: string[];
  handleChooseLetter: (letter: string) => void;
}) => {
  const textArray = text.toLowerCase().split("");

  return (
    <>
      {textArray.map((letter, index) => {
        const tranformatedLetter = lettersMap.get(letter);
        const isActive = !choosedLetters.includes(letter);

        return (
          <span
            title={letter}
            onClick={() => handleChooseLetter(letter)}
            key={letter + index}
            style={{
              marginLeft: letter !== " " ? "2px" : "10px",
              display: "inline-block",
              width: "10px",
              color: tranformatedLetter?.color,
            }}
          >
            {!isActive ? (
              <LetterIcon
                shape={tranformatedLetter?.shape}
                color={tranformatedLetter?.color || "black"}
                letter={letter}
              />
            ) : (
              letter
            )}
          </span>
        );
      })}
    </>
  );
};
