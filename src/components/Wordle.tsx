import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { useKeyDown } from "../lib/utils";
import { Button } from "./ui";
import { RefreshCw } from "lucide-react";

import { words } from "../assets/data/words";
import WordleRow from "./WordleRow";
import WordleKeyBoard from "./WordleKeyBoard";

export type Colour = "wrong" | "almost" | "correct";
export type LetterStatus = {
  [key: string]: Colour;
};

const Wordle = () => {
  const d = new Date().toISOString().split("T")[0];
  const { isLoading, error, data } = useQuery<string, Error>({
    queryKey: ["wordleAnswer"],
    queryFn: () =>
      fetch(`https://neal.fun/api/password-game/wordle?date=${d}`)
        .then((r) => r.json())
        .then((d) => d.answer),
    cacheTime: 12 * 60 * 60 * 1000,
    placeholderData: "xxxxx",
  });

  const NUM_OF_GUESSES = 6;
  const ANSWER = data!.toUpperCase().split("");
  // const ANSWER = "XXXXA".split("");
  const [key, code, changed] = useKeyDown();
  const [isGameOver, setIsGameOver] = useState(false);

  const [currentGuessNumber, setCurrentGuessNumber] = useState(0);
  const [currentGuess, setCurrentGuess] = useState<string[]>(Array(5).fill(""));
  const [currentAttemptNumber, setCurrentAttemptNumber] = useState(0);
  const [attempts, setAttempts] = useState<string[][]>(
    Array(NUM_OF_GUESSES).fill(Array(ANSWER.length).fill(""))
  );

  const [letterStatus, setLetterStatus] = useState<LetterStatus>({});
  const [rowColours, setRowColours] = useState<Colour[][]>(
    Array(NUM_OF_GUESSES).fill(Array(ANSWER.length).fill("wrong"))
  );

  useEffect(() => {
    // all letter have codes of KeyX where X is the letter
    if (code.includes("Key")) {
      if (currentGuessNumber >= ANSWER.length) {
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
      // able to type (as opposed to checking that the guess
      // number is 0).
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
        currentGuessNumber < ANSWER.length ||
        !words.includes(currentGuess.join("").toLowerCase())
      ) {
        return;
      }
      setAttempts((prev) => {
        prev[currentAttemptNumber] = currentGuess;
        return prev;
      });

      const newRowColours: Colour[] = Array(5).fill("wrong");
      const newLetterStatus: LetterStatus = letterStatus;
      const notSeen = [...ANSWER];

      // we split these in two, as we have to account for a guess to have
      // two letter, incorrect one before correct one (g: PASTA, a: PIZZA)
      // in which case we will highlight the first A as almost correct and
      // the second A as correct, cause being correct overrides being in the
      // word in this case, but even if we checked for not being seen first,
      // the first A would still be almost correct, while the second would now
      // be rendered as wrong. So, we have to know all correct ones ahead of time
      currentGuess.forEach((char, idx) => {
        if (char === ANSWER[idx]) {
          newRowColours[idx] = "correct";
          newLetterStatus[char] = "correct";
          notSeen.splice(notSeen.indexOf(char), 1);
        }
      });

      currentGuess.forEach((char, idx) => {
        if (char === ANSWER[idx]) {
          return;
        }
        if (notSeen.includes(char)) {
          newRowColours[idx] = "almost";
          if (newLetterStatus[char] !== "correct") {
            newLetterStatus[char] = "almost";
          }
          notSeen.splice(notSeen.indexOf(char), 1);
        } else {
          newRowColours[idx] = "wrong";
          if (
            newLetterStatus[char] !== "correct" &&
            newLetterStatus[char] !== "almost"
          ) {
            newLetterStatus[char] = "wrong";
          }
          console.log(ANSWER);
        }
      });

      setRowColours((prev) => ({
        ...prev,
        ...{ [currentAttemptNumber]: newRowColours },
      }));
      setLetterStatus((prev) => ({ ...prev, ...newLetterStatus }));
      setCurrentAttemptNumber((prev) => prev + 1);
      setCurrentGuess(Array(ANSWER.length).fill(""));
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
    setAttempts(Array(NUM_OF_GUESSES).fill(Array(ANSWER.length).fill("")));
    setCurrentGuess(Array(ANSWER.length).fill(""));
    setCurrentAttemptNumber(0);
    setCurrentGuessNumber(0);
    setIsGameOver(false);
    setLetterStatus({});
    setRowColours(
      Array(NUM_OF_GUESSES).fill(Array(ANSWER.length).fill("wrong"))
    );
  }

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Unexpected Error!</span>;
  return (
    <>
      <div className="relative flex flex-col gap-2">
        <Button
          className="absolute -right-10 top-1/2 h-8 w-8 -translate-y-1/2 sm:-right-12 sm:h-9 sm:w-9 md:-right-14 md:h-11 md:w-11"
          onClick={reset}
        >
          <RefreshCw
            className="absolute h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
            strokeWidth={1.5}
          />
        </Button>
        {Array.from(Array(6).keys()).map((i) => (
          <WordleRow
            word={currentAttemptNumber == i ? currentGuess : attempts[i]}
            done={currentAttemptNumber > i}
            colours={rowColours[i]}
            key={i}
          />
        ))}
      </div>
      <WordleKeyBoard
        letterStatus={letterStatus}
        setCurrentGuess={setCurrentGuess}
        setCurrentGuessNumber={setCurrentGuessNumber}
        currentGuessNumber={currentGuessNumber}
      />
    </>
  );
};

export default Wordle;
