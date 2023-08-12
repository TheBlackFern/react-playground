import { ArrowBigLeftDashIcon } from "lucide-react";
import { Colour } from "./Wordle";
import { Button } from "./ui";

type Props = {
  letterStatus: {
    [key: string]: Colour;
  };
  currentGuessNumber: number;
  setCurrentGuessNumber: React.Dispatch<React.SetStateAction<number>>;
  setCurrentGuess: React.Dispatch<React.SetStateAction<string[]>>;
};

const WordleKeyBoard = ({
  letterStatus,
  currentGuessNumber,
  setCurrentGuessNumber,
  setCurrentGuess,
}: Props) => {
  const row1 = "qwertyuiop".toUpperCase().split("");
  const row2 = "asdfghjkl".toUpperCase().split("");
  const row3 = ["Enter"]
    .concat("zxcvbnm".toUpperCase().split(""))
    .concat("Backspace");
  const board = [row1, row2, row3];

  function handleClick(code: string) {
    if (code === "Enter" || code === "Backspace") {
      window.dispatchEvent(new KeyboardEvent("keydown", { code: code }));
    } else {
      // for the life of me I could not figure out how to dispatch
      // a KeyboardEvent with letters, it just didn't register
      // so this is the ugly alternative
      if (currentGuessNumber >= 5) {
        return;
      }
      setCurrentGuess((prev) => {
        prev[currentGuessNumber] = code.toUpperCase();
        return prev;
      });
      setCurrentGuessNumber((prev) => prev + 1);
    }
  }

  return (
    <div className="my-5 flex flex-col items-center justify-center gap-1">
      {board.map((row, i) => (
        <div
          className="flex flex-row items-center justify-center gap-0.5"
          key={i}
        >
          {row.map((key) => (
            <Button
              variant={"outline"}
              className={`h-11 px-1.5 py-1 sm:px-2.5 ${
                (letterStatus[key] === "wrong" && "bg-wrong text-white") ||
                (letterStatus[key] === "almost" && "bg-almost text-white") ||
                (letterStatus[key] === "correct" && "bg-correct text-white")
              } ${
                key === "Enter" || key === "Backspace"
                  ? "w-auto text-sm"
                  : "w-auto text-base xs:w-9 sm:w-11 sm:text-lg "
              }`}
              onClick={() => handleClick(key)}
              key={key}
            >
              {key === "Backspace" ? <ArrowBigLeftDashIcon size={32} /> : key}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WordleKeyBoard;
