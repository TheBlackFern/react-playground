import { useEffect, useState } from "react";
import { useKeyDown } from "../lib/utils";
import WordleRow from "./WordleRow";
import { Button } from "./ui";
import { RefreshCw } from "lucide-react";
import { useQuery } from "react-query";
import { words } from "../assets/data/words";

const Wordle = () => {
  const d = new Date().toISOString().split("T")[0];
  const { isLoading, error, data } = useQuery<string, Error>({
    queryKey: ["wordleAnswer"],
    queryFn: () =>
      fetch(`https://neal.fun/api/password-game/wordle?date=${d}`)
        .then((r) => r.json())
        .then((d) => d.answer),
    placeholderData: "xxxxx",
  });

  const ANSWER = data!.toUpperCase().split("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [key, code, changed] = useKeyDown();
  const [currentGuessNumber, setCurrentGuessNumber] = useState(0);
  const [currentGuess, setCurrentGuess] = useState<string[]>(Array(5).fill(""));
  const [currentAttemptNumber, setCurrentAttemptNumber] = useState(0);
  const [attempts, setAttempts] = useState<string[][]>(
    Array(6).fill(Array(5).fill(""))
  );

  useEffect(() => {
    // all letter have codes of KeyX where X is the letter
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
      // this is a "clever" trick so that upon gameover
      // pressing backspace will not make the player
      // able type, as opposed to checking that guess
      // number is 0.
      if (currentGuess[0] === "") {
        return;
      }
      setCurrentGuess((prev) => {
        prev[currentGuessNumber - 1] = "";
        return prev;
      });
      setCurrentGuessNumber((prev) => prev - 1);
    }
    if (code === "Enter") {
      if (
        currentGuessNumber < 5 ||
        !words.includes(currentGuess.join("").toLowerCase())
      ) {
        return;
      }
      setAttempts((prev) => {
        prev[currentAttemptNumber] = currentGuess;
        return prev;
      });

      setCurrentAttemptNumber((prev) => prev + 1);
      setCurrentGuess(Array(5).fill(""));
      if (currentGuess.join("") === ANSWER.join("") || isGameOver) {
        setIsGameOver(true);
        return;
      }
      // this is the easiest way I found to make the player unable to type:
      // we just make the game think that we are typing the 6th+ letter
      // even though the actual guess is "     "
      // but if our guess is incorrect, we reset to 0
      setCurrentGuessNumber(0);
    }
  }, [changed]);

  function reset() {
    setAttempts(Array(6).fill(Array(5).fill("")));
    setCurrentGuess(Array(5).fill(""));
    setCurrentAttemptNumber(0);
    setCurrentGuessNumber(0);
    setIsGameOver(false);
  }

  if (isLoading) return <span>Bruh</span>;
  if (error) return <span>Capital Bruh</span>;
  return (
    <div className="relative flex flex-col gap-3">
      <Button
        className="absolute -right-12 top-1/2 h-10 w-10 -translate-y-1/2"
        onClick={reset}
      >
        <RefreshCw className="absolute h-6 w-6" strokeWidth={1.5} />
      </Button>
      <WordleRow
        word={currentAttemptNumber == 0 ? currentGuess : attempts[0]}
        done={currentAttemptNumber > 0}
        answer={ANSWER}
      />
      <WordleRow
        word={currentAttemptNumber == 1 ? currentGuess : attempts[1]}
        done={currentAttemptNumber > 1}
        answer={ANSWER}
      />
      <WordleRow
        word={currentAttemptNumber == 2 ? currentGuess : attempts[2]}
        done={currentAttemptNumber > 2}
        answer={ANSWER}
      />
      <WordleRow
        word={currentAttemptNumber == 3 ? currentGuess : attempts[3]}
        done={currentAttemptNumber > 3}
        answer={ANSWER}
      />
      <WordleRow
        word={currentAttemptNumber == 4 ? currentGuess : attempts[4]}
        done={currentAttemptNumber > 4}
        answer={ANSWER}
      />
      <WordleRow
        word={currentAttemptNumber == 5 ? currentGuess : attempts[5]}
        done={currentAttemptNumber > 5}
        answer={ANSWER}
      />
    </div>
  );
};

export default Wordle;
