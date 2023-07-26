import { Button } from "./ui";

type Props = {
  usedLetters: Set<string>;
  currentGuessNumber: number;
  setCurrentGuessNumber: React.Dispatch<React.SetStateAction<number>>;
  setCurrentGuess: React.Dispatch<React.SetStateAction<string[]>>;
};

const WordleKeyBoard = ({
  usedLetters,
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
    <div className="mb-5 flex flex-col items-center justify-center gap-1">
      {board.map((row, i) => (
        <div
          className="flex flex-row items-center justify-center gap-0.5"
          key={i}
        >
          {row.map((char) => (
            <Button
              className={`h-auto w-auto px-1.5 py-1 text-sm sm:px-2.5 sm:text-lg ${
                usedLetters.has(char) ? "bg-wrong text-white" : ""
              }`}
              onClick={() => handleClick(char)}
              key={char}
            >
              {char}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WordleKeyBoard;
