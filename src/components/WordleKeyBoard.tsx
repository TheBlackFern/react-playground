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
  const row3 = "zxcvbnm".toUpperCase().split("");

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
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="flex flex-row items-center justify-center gap-0.5">
        {row1.map((char) => (
          <Button
            className={`h-10 w-10 px-1 font-bold text-lg ${
              usedLetters.has(char) ? "bg-wrong text-white" : ""
            }`}
            onClick={() => handleClick(char)}
            key={char}
          >
            {char}
          </Button>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-0.5">
        {row2.map((char) => (
          <Button
            className={`h-10 w-10 px-1 font-bold text-lg ${
              usedLetters.has(char) ? "bg-wrong text-white" : ""
            }`}
            onClick={() => handleClick(char)}
            key={char}
          >
            {char}
          </Button>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center gap-0.5">
        <Button
          className="h-10 w-auto px-1 font-bold text-lg"
          onClick={() => handleClick("Enter")}
        >
          Enter
        </Button>
        {row3.map((char) => (
          <Button
            className={`h-10 w-10 px-1 font-bold text-lg ${
              usedLetters.has(char) ? "bg-wrong text-white" : ""
            }`}
            onClick={() => handleClick(char)}
            key={char}
          >
            {char}
          </Button>
        ))}
        <Button
          className="h-10 w-auto px-1 font-bold text-lg"
          onClick={() => handleClick("Backspace")}
        >
          Backspace
        </Button>
      </div>
    </div>
  );
};

export default WordleKeyBoard;
