import React, { useState } from "react";

// litery które tworzą słowo ustawione w kwadracie

export const GeometryNumbers = () => {
  const [showNumbers, setShowNumbers] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [numbers, setNumbers] = useState<number[]>([]);

  const generateNumbers = () => {
    const newNumbers = Array.from({ length: 9 }, (_, i) =>
      i === 4 ? 0 : Math.floor(Math.random() * 9) + 1
    );
    setNumbers(newNumbers);
    setShowNumbers(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    const userNumber = parseInt(userInput);
    if (userNumber === numbers[4]) {
      alert("Gratulacje! Poprawna odpowiedź!");
    } else {
      alert(
        `Niestety, to nie jest poprawna odpowiedź. Poprawna liczba to ${numbers[4]}`
      );
    }
    setUserInput("");
  };

  const renderSquares = () => {
    const squares = [];
    for (let i = 0; i < 9; i++) {
      const isMiddleSquare = i === 4;

      squares.push(
        <div
          key={i}
          className="w-16 h-16 border border-black flex items-center justify-center"
        >
          {!isMiddleSquare && showNumbers && (
            <span className="text-xl font-bold">{numbers[i]}</span>
          )}
          {isMiddleSquare && !showNumbers && (
            <input
              type="number"
              value={userInput}
              onChange={handleInputChange}
              className="w-12 text-center text-xl font-bold"
              placeholder="?"
            />
          )}
        </div>
      );
    }
    return squares;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-3 gap-2">{renderSquares()}</div>
      <div className="flex gap-2">
        <button
          onClick={() => setShowNumbers(false)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Ukryj liczby
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Sprawdź
        </button>
        <button
          onClick={generateNumbers}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Nowe liczby
        </button>
      </div>
    </div>
  );
};
