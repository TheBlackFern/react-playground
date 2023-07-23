import { createContext, useEffect, useState } from "react";
import { useKeyDown } from "../lib/utils";
import WordleRow from "./WordleRow";
import { Button } from "./ui";
import { RefreshCw } from "lucide-react";

export const AnswerContext = createContext("RIGHT");

const Wordle = () => {
  const ANSWER = "RIGHT";
  const [key, code, changed] = useKeyDown();
  const [currentGuessNumber, setCurrentGuessNumber] = useState(0);
  const [currentGuess, setCurrentGuess] = useState(["", "", "", "", ""]);
  const [currentAttemptNumber, setCurrentAttemptNumber] = useState(0);
  const [attempts, setAttempts] = useState<string[][]>([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  useEffect(() => {
    if (code.includes("Key")) {
      if (currentGuessNumber >= 5) {
        return;
      }
      setCurrentGuess((prev) => {
        prev[currentGuessNumber] = key.toUpperCase();
        return prev;
      });
      setCurrentGuessNumber((prev) => prev + 1);
    }
    if (code === "Backspace") {
      if (currentGuessNumber == 0) {
        return;
      }
      setCurrentGuess((prev) => {
        prev[currentGuessNumber - 1] = "";
        return prev;
      });
      setCurrentGuessNumber((prev) => prev - 1);
    }
    if (code === "Enter") {
      if (currentGuessNumber < 5) {
        return;
      }

      setAttempts((prev) => {
        prev[currentAttemptNumber] = currentGuess;
        return prev;
      });
      setCurrentAttemptNumber((prev) => prev + 1);
      setCurrentGuess(["", "", "", "", ""]);
      setCurrentGuessNumber(0);
    }
  }, [changed]);

  function reset() {
    setAttempts([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ]);
    setCurrentAttemptNumber(0);
    setCurrentGuess(["", "", "", "", ""]);
    setCurrentGuessNumber(0);
  }

  return (
    <AnswerContext.Provider value={ANSWER}>
      <div className="relative flex flex-col gap-2">
        <Button
          className="absolute -right-1/4 top-1/2 h-10 w-10 -translate-y-1/2"
          onClick={reset}
        >
          <RefreshCw className="absolute h-6 w-6" strokeWidth={1.5} />
        </Button>
        <WordleRow
          word={currentAttemptNumber == 0 ? currentGuess : attempts[0]}
          done={currentAttemptNumber > 0}
        />
        <WordleRow
          word={currentAttemptNumber == 1 ? currentGuess : attempts[1]}
          done={currentAttemptNumber > 1}
        />
        <WordleRow
          word={currentAttemptNumber == 2 ? currentGuess : attempts[2]}
          done={currentAttemptNumber > 2}
        />
        <WordleRow
          word={currentAttemptNumber == 3 ? currentGuess : attempts[3]}
          done={currentAttemptNumber > 3}
        />
        <WordleRow
          word={currentAttemptNumber == 4 ? currentGuess : attempts[4]}
          done={currentAttemptNumber > 4}
        />
        <WordleRow
          word={currentAttemptNumber == 5 ? currentGuess : attempts[5]}
          done={currentAttemptNumber > 5}
        />
      </div>
    </AnswerContext.Provider>
  );
};

export default Wordle;
