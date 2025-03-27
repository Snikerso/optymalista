"use client";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";
import { TextTransformator } from "./TextTranformator";

// Zrobić poziomy gdzie tylko jedna 4 litery są zmienione

export default function ColourAlphabet() {
  const [text, setText] = useState("Przykład");

  const [isTextAreaHidden, setIsTextAreaHidden] = useState(false);
  const [choosedLetters, setChoosedLetters] = useState<string[]>([
    "e",
    "a",
    "o",
    "i",
    "n",
    "r",
    "w",
    "s",
    "t",
    "y",
    "u",
    "p",
    "z",
    "c",
  ]);

  const handleChooseLetter = (letter: string) => {
    const isChoosed = !choosedLetters.includes(letter);

    if (isChoosed) {
      setChoosedLetters((prev) => prev.filter((item) => item !== letter));
      return;
    }

    setChoosedLetters((prev) => [...prev, letter]);
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <TextTransformator
          choosedLetters={choosedLetters}
          handleChooseLetter={handleChooseLetter}
          text={text}
        />
      </div>
      {!isTextAreaHidden && (
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      )}

      <Button onClick={() => setIsTextAreaHidden((prev) => !prev)}>
        {isTextAreaHidden ? "odkryj" : "ukryj"}
      </Button>
    </div>
  );
}
