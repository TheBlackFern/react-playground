import * as React from "react";
import { useQuery } from "react-query";

import { useKeyDown } from "../lib/utils";

import { words } from "../assets/data/words";
import WordleRow from "./WordleRow";
import WordleKeyBoard from "./WordleKeyBoard";
import ResetButton from "./ui/ResetButton";

export type Colour = "wrong" | "almost" | "correct";
export type LetterStatus = {
  [key: string]: Colour;
};

function checkGuess(
  guess: string[],
  answer: string[],
  oldCheckedLetters: LetterStatus
): [Colour[], LetterStatus] {
  const newRowColours: Colour[] = Array(answer.length).fill("wrong");
  const newLetterStatus: LetterStatus = oldCheckedLetters;
  const notSeen = [...answer];

  // we need two cycles, as we have to account for a guess to have
  // two letter, incorrect one before correct one (g: PASTA, a: PIZZA)
  // as otherwise we will highlight the first A as almost correct and
  // the second A as correct, cause being correct is checked instead of
  // being in the in a word in this case, but even if we checked for not
  // being seen first, the first A would still be almost correct, while
  // the second would now  be rendered as wrong
  // So, we have to know all correct ones ahead of time
  guess.forEach((char, idx) => {
    if (char !== answer[idx]) return;
    newRowColours[idx] = "correct";
    newLetterStatus[char] = "correct";
    notSeen.splice(notSeen.indexOf(char), 1);
  });

  guess.forEach((char, idx) => {
    if (char === answer[idx]) return;

    if (notSeen.includes(char)) {
      newRowColours[idx] = "almost";
      if (newLetterStatus[char] !== "correct") {
        newLetterStatus[char] = "almost";
      }
      notSeen.splice(notSeen.indexOf(char), 1);
    } else {
      newRowColours[idx] = "wrong";
      if (!Object.keys(newLetterStatus).includes(char)) {
        newLetterStatus[char] = "wrong";
      }
    }
  });

  return [newRowColours, newLetterStatus];
}

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
  const [isGameOver, setIsGameOver] = React.useState(false);

  const [currentGuessNumber, setCurrentGuessNumber] = React.useState(0);
  const [currentGuess, setCurrentGuess] = React.useState<string[]>(
    Array(5).fill("")
  );
  const [currentAttemptNumber, setCurrentAttemptNumber] = React.useState(0);
  const [attempts, setAttempts] = React.useState<string[][]>(
    Array(NUM_OF_GUESSES).fill(Array(ANSWER.length).fill(""))
  );

  const [letterStatus, setLetterStatus] = React.useState<LetterStatus>({});
  const [rowColours, setRowColours] = React.useState<Colour[][]>(
    Array(NUM_OF_GUESSES).fill(Array(ANSWER.length).fill("wrong"))
  );

  const keyRegex = /Key[A-Z]/;

  React.useEffect(() => {
    // all letter have codes of KeyX where X is the letter
    if (keyRegex.test(code)) {
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

      const [newRowColours, newLetterStatus] = checkGuess(
        currentGuess,
        ANSWER,
        letterStatus
      );

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
        <ResetButton className="-right-10" reset={reset} />
        {attempts.map((word, i) => (
          <WordleRow
            word={currentAttemptNumber == i ? currentGuess : word}
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
